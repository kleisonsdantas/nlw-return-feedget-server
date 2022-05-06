import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "94df660079afcc",
    pass: "8551233b6774ea"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({subject, body}: SendMailData) {

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Kleison de Souza Dantas <kleisonsdantas@gmail.com>',
      subject,
      html: body
    })
  }
}