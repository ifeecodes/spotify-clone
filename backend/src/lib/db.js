import mongoose from "mongoose";
import dns from "dns";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);

    // If DNS SRV lookup was refused, try using a public DNS server and retry once.
    const isSrvLookupError =
      error &&
      (error.code === "ECONNREFUSED" ||
        (error.message && error.message.includes("querySrv")));
    if (isSrvLookupError) {
      try {
        console.warn(
          "SRV lookup failed; setting DNS to 8.8.8.8 and retrying...",
        );
        dns.setServers(["8.8.8.8"]);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully after DNS fallback!");
        return;
      } catch (err2) {
        console.error("Retry after DNS fallback failed:", err2);
      }
    }
    process.exit(1);
  }
};
