import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const location = formData.get("location");
    const relocate = formData.get("relocate");
    const expectedPay = formData.get("expectedPay");
    const resume = formData.get("resume");

    if (!resume) {
      return Response.json({ error: "Resume missing" }, { status: 400 });
    }

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"THS IT Consulting" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
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
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    return Response.json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("🔥 BACKEND ERROR:", error);
    return Response.json(
      { error: "Email sending failed", details: error.message },
      { status: 500 }
    );
  }
}