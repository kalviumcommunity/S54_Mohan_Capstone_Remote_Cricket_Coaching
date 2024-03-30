import nodeMailer from 'nodemailer'
const sendMail=async(userName,name)=>{
  let testAccount = await nodeMailer.createTestAccount();
    const transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mohantheboss1432@gmail.com',
        pass: 'llnz zvkz lrdc tpxe',
      },



    });

    let info = await transporter.sendMail({
      from: '"Mohan kumar 👻" <mohantheboss1432@gmail.com>', // sender address
      to: userName, // list of receivers
      subject: name, // Subject line
      text: name, // plain text body
      html: `<b>${name}</b>`, // html body
    });
    console.log("Message sent: %s", info.messageId);
    // res.json({info});
  
}

export default sendMail;