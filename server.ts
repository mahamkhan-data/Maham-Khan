import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    hasKey: !!process.env.RESEND_API_KEY,
    nodeEnv: process.env.NODE_ENV
  });
});

// API Route for Contact Form
app.post("/api/contact", async (req, res) => {
  try {
    console.log("POST /api/contact - Request started");
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.warn("Validation failed: Missing fields");
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    console.log("Contact form submission received:", { name, email });

    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.warn("RESEND_API_KEY is missing. Providing mock success.");
      return res.json({ 
        success: true, 
        message: "Debug: Message received! (To enable real emails, please set the RESEND_API_KEY environment variable in Settings > Secrets)." 
      });
    }

    console.log("Initializing Resend...");
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    console.log("Dispatching email...");
    const { error: resendError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['mahameng3@gmail.com'],
      subject: `Portfolio Contact: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="padding: 24px; background-color: #2563eb; color: #ffffff;">
            <h2 style="margin: 0;">New Inquiry</h2>
          </div>
          <div style="padding: 24px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 8px;">${message}</p>
          </div>
        </div>
      `,
    });

    if (resendError) {
      console.error("Resend API Error:", resendError);
      return res.status(500).json({ error: `Resend Error: ${resendError.message}` });
    }

    console.log("Email sent successfully.");
    return res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    const err = error as Error;
    console.error("Server processing error:", err.message, err.stack);
    return res.status(500).json({ error: `Server Internal Error: ${err.message}` });
  }
});

async function startServer() {
  const PORT = process.env.PORT || 3000;

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // No explicit SPA fallback here as Vite handles it in dev,
    // and for Vercel/Static we rely on vercel.json
  }

  // Only listen if not running as a Vercel serverless function
  if (!process.env.VERCEL) {
    app.listen(Number(PORT), "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

startServer();

export default app;
