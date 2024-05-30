const nodemailer = require("nodemailer")

const mailSender = async (mail, title, body) =>{
    try{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        })

        let info = await transporter.sendMail({
            from:"Feedback_Collection || Zammers - By Ankit ",
            to:`${mail}`,
            subject:`${title}`,
            html:`${body}`,
        })
        console.log(info)
        return info;

    }catch(error){
        console.log(error.message);
    }
}

module.exports = mailSender;