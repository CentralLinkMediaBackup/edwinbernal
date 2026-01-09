import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: "personal" | "business";
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message, type }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, subject, type });

    // Determine recipient based on inquiry type
    const recipientEmail = type === "business" 
      ? "e.bernal@centrallinkmedia.com" 
      : "EdwinBernal2026@gmail.com";

    const emailResponse = await resend.emails.send({
      from: "Edwin Bernal Portfolio <onboarding@resend.dev>",
      to: [recipientEmail],
      reply_to: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #007BFF, #00c6ff); padding: 30px; border-radius: 12px 12px 0 0; }
              .header h1 { color: white; margin: 0; font-size: 24px; }
              .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 12px 12px; }
              .field { margin-bottom: 20px; }
              .label { color: #6c757d; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
              .value { color: #212529; font-size: 16px; }
              .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #FFD700; }
              .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
              .badge-personal { background: #007BFF20; color: #007BFF; }
              .badge-business { background: #FFD70020; color: #d4a500; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Inquiry Type</div>
                  <span class="badge ${type === 'business' ? 'badge-business' : 'badge-personal'}">
                    ${type === 'business' ? 'Business / Entrepreneur' : 'Personal'}
                  </span>
                </div>
                <div class="field">
                  <div class="label">From</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
