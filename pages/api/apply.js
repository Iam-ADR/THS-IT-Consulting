import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // REQUIRED for formidable
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Form parsing error" });
    }

    const { name, email, phone, location, relocate, expectedPay } = fields;
    const resume = files.resume;

    // SMTP setup
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
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error("Email error:", error);
      return res.status(500).json({ error: "Email failed" });
    }
  });
}