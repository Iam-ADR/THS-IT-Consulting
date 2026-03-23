import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  return new Promise((resolve) => {
    const form = formidable({ multiples: false });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        resolve(NextResponse.json({ error: "Form parsing error" }, { status: 500 }));
        return;
      }

      const { name, email, phone, location, relocate, expectedPay } = fields;
      const resume = files.resume;

      // Configure your SMTP
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"THS Consulting Careers" <${process.env.SMTP_USER}>`,
        to: "contact@thsitconsulting.com",
        subject: `New Application from ${name}`,
        html: `
          <h2>New Candidate Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Open to Relocate:</strong> ${relocate}</p>
          <p><strong>Expected Pay:</strong> ${expectedPay}</p>
        `,
        attachments: resume
          ? [
              {
                filename: resume.originalFilename,
                content: fs.createReadStream(resume.filepath),
              },
            ]
          : [],
      };

      try {
        await transporter.sendMail(mailOptions);
        resolve(NextResponse.json({ success: true }));
      } catch (error) {
        console.error("Email error:", error);
        resolve(NextResponse.json({ error: "Email failed" }, { status: 500 }));
      }
    });
  });
}