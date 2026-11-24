const inbox = "consulting@brettpascall.com";
const fields = {
  name: ["Name", 120], email: ["Email", 254], company: ["Company", 180],
  website: ["Website", 500], service: ["Service", 80], challenge: ["Project", 4000],
  timeline: ["Timeline", 120], budget: ["Budget", 120]
};
const services = new Set(["AI Strategy","Business Automation","Sales & Marketing","Website Development","AI Workshops","Custom AI Solutions","General Consulting","Community Partnerships","Other"]);
function reply(message, status) {
  return new Response(message, { status, headers: { "Content-Type": "text/plain; charset=UTF-8", "Cache-Control":"no-store" } });
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/api/consultation") return env.ASSETS.fetch(request);
    if (request.method !== "POST") return reply("Use the consultation form to send an inquiry.", 405);
    if (request.headers.get("Origin") !== url.origin) return reply("Please submit the form from this website.",403);
    if (!request.headers.get("Content-Type")?.startsWith("application/x-www-form-urlencoded")) return reply("Invalid form format.",415);
    const length = Number(request.headers.get("Content-Length"));
    if (!length || length > 40000) return reply("The inquiry is too long or empty.",413);
    const values = new URLSearchParams(await request.text());
    if (values.get("fax")) return reply("Thank you for reaching out.",200);
    for (const [key, [label, max]] of Object.entries(fields)) {
      const value = values.get(key)?.trim() || "";
      if (value.length > max || (key !== "challenge" && /[\r\n]/.test(value))) return reply("Please check the " + label.toLowerCase() + " field.",400);
      values.set(key,value);
    }
    if (!values.get("name") || !values.get("company") || !values.get("challenge") || !services.has(values.get("service")) || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(values.get("email"))) return reply("Please complete the required fields and enter a valid email address.",400);
    const rate = await env.INQUIRY_LIMIT.limit({key: request.headers.get("CF-Connecting-IP") || "unknown"});
    if (!rate.success) return reply("Please wait a minute before sending another inquiry.",429);
    const text = Object.entries(fields).map(([key,[label]]) => label + ": " + (values.get(key) || "Unspecified")).join("\n\n");
    try {
      await env.INQUIRIES.send({from:"website@brettpascall.com",to:inbox,replyTo:values.get("email"),subject:"Website consultation: " + values.get("service"),text});
    } catch (error) {
      console.error("Consultation email failed", error.code || error.name);
      return reply("Your inquiry could not be sent. Please email " + inbox + " directly.",503);
    }
    return reply("Thank you for reaching out. I've received your inquiry and look forward to learning more about your business.",200);
  }
};
