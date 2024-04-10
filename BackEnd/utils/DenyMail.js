import nodeMailer from "nodemailer";

const denyMail = async (userName) => {
  let testAccount = await nodeMailer.createTestAccount();
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohantheboss1432@gmail.com",
      pass: "llnz zvkz lrdc tpxe",
    },
  });

  let info = await transporter.sendMail({
    from: '"Mohan kumar 👻" <mohantheboss1432@gmail.com>',
    to: userName,
    subject: "Account Rejection",
    text: "Dear User, Your account creation request has been rejected. Please review your credentials and try again. Best regards, Mohan Kumar",
    html: `<p>Dear User,</p><p>Your account creation   request in our website CricElevate has been rejected. Please review your credentials and try again.</p><p>Best regards,<br/>Mohan Kumar</p>`,
  });
  console.log("Rejection email sent: %s", info.messageId);
};

export default denyMail;
