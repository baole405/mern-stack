import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const identifier = req.ip || "anonymous";
    const { success } = await ratelimit.limit(identifier);
    if (!success) {
      return res.status(429).json({ message: "Too many requests" });
    }
    next();
  } catch (error) {
    console.error("Rate limiting error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default rateLimiter;
