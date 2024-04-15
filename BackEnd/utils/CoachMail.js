import nodeMailer from 'nodemailer';

const coachmail = async (coachName, name) => {
  let testAccount = await nodeMailer.createTestAccount();
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mohantheboss1432@gmail.com',
      pass: 'llnz zvkz lrdc tpxe',
    },
  });

  let info = await transporter.sendMail({
    from: '"Mohan kumar" <mohantheboss1432@gmail.com>',
    to: coachName,
    subject: 'Account Creation Confirmation',
    html: `<p>Dear  coach ${name},


    thank yioun ra sulli ga nuvvu coach lakka select ainav.
    </p>`,
  });
  console.log("Message sent: %s", info.messageId);
  // res.json({info});
}

export default coachmail;
