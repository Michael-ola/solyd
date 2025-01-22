import nodemailer from "nodemailer";

export async function POST(req, res) {
  try {
    const body = await req.json();
    console.log(body);
    // Destructure data from the request body
    const { firstName, lastName, email, phone, message } = body;

    if (!firstName || !lastName || !email || !phone || !message) {
      return new Response("All fields are required.", { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Replace with your email
        pass: process.env.EMAIL_PASS, // Replace with your password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response("Message sent successfully.", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Failed to send message.", { status: 500 });
  }
}
