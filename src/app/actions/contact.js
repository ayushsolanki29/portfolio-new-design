"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

export async function submitContactForm(prevState, formData) {
  try {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const message = formData.get("message")?.toString();

    if (!name || !email || !message) {
      return { success: false, error: "Please fill out all fields." };
    }

    // 1. Save to Database
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);
    
    const { error: dbError } = await supabase
      .from("messages")
      .insert([{ name, email, message }]);

    if (dbError) {
      console.error("Database Error:", dbError);
      return { success: false, error: "Failed to save message to database." };
    }

    // 2. Setup Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

    // 3. Load HTML Templates
    const userTplPath = path.join(process.cwd(), "src", "lib", "emails", "user-confirmation.html");
    const adminTplPath = path.join(process.cwd(), "src", "lib", "emails", "admin-notification.html");
    
    let userHtml = await fs.readFile(userTplPath, "utf-8");
    let adminHtml = await fs.readFile(adminTplPath, "utf-8");

    // Inject data
    userHtml = userHtml.replace(/{{name}}/g, name).replace(/{{message}}/g, message);
    adminHtml = adminHtml.replace(/{{name}}/g, name).replace(/{{email}}/g, email).replace(/{{message}}/g, message);

    // 4. Send Emails Concurrently
    const adminMailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      replyTo: email, // If admin replies, it goes to user
      subject: `New Message from ${name} via Portfolio`,
      html: adminHtml,
    };

    const userMailOptions = {
      from: `"Ayush Solanki" <${process.env.SMTP_USER}>`,
      to: email,
      replyTo: adminEmail, // If user replies, it goes to admin
      subject: `Thanks for reaching out, ${name}!`,
      html: userHtml,
    };

    // Fire and forget, or wait
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return { success: true };
  } catch (error) {
    console.error("Contact Form Error:", error);
    return { success: false, error: "Failed to send email. Check your SMTP configuration." };
  }
}
