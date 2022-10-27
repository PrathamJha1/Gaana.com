const express = require('express');
const path=require('path');
const spotifyWebApi = require('spotify-web-api-node');
const cors =require('cors');
require('dotenv').config()
const app=express();
const Port = process.env.PORT || 3001;
const bodyParser =require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.post('/refresh',(req,res)=>{
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new spotifyWebApi({
        redirectUri:'http://localhost:3000',
        clientId:"6c96d619267643efbde91ad3fea91f14",
        clientSecret:"325303e7e63044fa89d0efcf3ba0b01f",
        refreshToken,
    });
spotifyApi.refreshAccessToken().then((data)=>{
    console.log(data.body.access_token);
    console.log(data.body.expires_in);
        res.json({
            accessToken:data.body.accessToken,
            expiresIn:data.body.expiresIn
        })
}).catch((err)=>{
    console.log(err);
    res.sendStatus(400);
    })
})
app.post('/login',(req,res)=>{
    const code = req.body.code;
    const spotifyApi = new spotifyWebApi({
        redirectUri:'http://localhost:3000',
        clientId:"6c96d619267643efbde91ad3fea91f14",
        clientSecret:"325303e7e63044fa89d0efcf3ba0b01f",
    });
    spotifyApi.authorizationCodeGrant(code).then(data=>{
        res.json({
            accesToken : data.body.access_token,
            refreshToken:data.body.refresh_token,
            expiresIn:data.body.expires_in
        })
    })
    .catch((err)=>{
        console.log(err);
        res.sendStatus(400);
    })
});


app.listen(Port,()=>{
    console.log("Server is running on port 3001");
})