const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail')

const sendEmailEthereal = async (req, res) => {
	const testAccount = await nodemailer.createTestAccount();

	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'ceasar.crist49@ethereal.email',
			pass: 'm4gfEzP4DnrRWyMAZ3'
		}
	});

	const info = await transporter.sendMail({
		from: '"Coding Addict" <arsen.dmitrenko1994@gmail.com>',
		to: 'azafieriel@gmail.com',
		subject: 'Hello',
		html: '<h2>Sending Emails with Node.js</h2>',
	})

	res.send(info);
};

const sendEmail = async (req, res) => {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: 'azafieriel@gmail.com', // Change to your recipient
		from: 'arsen.dmitrenko1994@gmail.com', // Change to your verified sender
		subject: 'Sending with SendGrid is Fun',
		text: 'and easy to do anywhere, even with Node.js',
		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	};
	const info = await sgMail.send(msg);
	res.json({info});
}

module.exports = sendEmail;