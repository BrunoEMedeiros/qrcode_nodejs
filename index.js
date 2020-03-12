const express = require('express');
const qr =  require('qr-image');
const app =  express();

app.get('/qrcode', (req, res) =>
{
    const txt = "ola";
    const code = qr.image(JSON.stringify(txt), { type: 'svg' });

    res.type('svg')

    code.pipe(res);

});

app.listen(3000, () =>{
    console.log("server running");
});
