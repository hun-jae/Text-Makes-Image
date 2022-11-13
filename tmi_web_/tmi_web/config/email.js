const nodemailer = require('nodemailer');

export const transPort = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail=.com',
    port: 587,
    secure: false,
    auth: {
        user: 'etety39@gmail.com',
        pass: 'taey39*jiy21'
    }
});