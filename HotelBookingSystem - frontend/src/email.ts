var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'jakkakaveri99@gmail.com',
        pass: 'szgtxpmfxwmzeqcz'
    }
});

var mailOptions= {
    from: 'jakkakaveri99@gmail.com',
    to:'harshinikotha29@gmail.com',
    subject:'Sending email using node.js',
    text:'yay! you received my mail'
};

transporter.sendMail(mailOptions, function(error: any,info: { response: string; }){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent:' + info.response);
    }
});