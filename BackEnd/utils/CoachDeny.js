import nodeMailer from "nodemailer";

const coachDeny = async (coachName) => {
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
    to: coachName,
    subject: "Account Rejection for the coach",
    text: "Dear coach you are been rejected, Your account creation request has been rejected. Please review your credentials and try again. Best regards, Mohan Kumar",
    html: `<p>Dear coach,</p><p>Your are coach aand you are been rejected from creating an account in our website  account creation   request in our website CricElevate has been rejected. Please review your credentials and try again.</p><p>Best regards,<br/>Mohan Kumar</p>`,
  });
  console.log("Rejection email sent: %s", info.messageId);
};

export default coachDeny;
