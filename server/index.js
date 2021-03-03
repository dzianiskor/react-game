const axios = require('axios');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "text/*" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    return res.status(200).json('TEST');
})

app.post("/authenticate", async (req, res) => {
    const { code } = req.body;
    const requestToken = await axios.post('https://github.com/login/oauth/access_token', {
        client_id: '601317d4e6d41de68937',
        client_secret: '94550998f8b08c48cf4f5b839a3d3dc21b7c62f4',
        code,
        redirect_uri: 'https://dzianiskor-react-game.herokuapp.com/login',
    })
    let params = new URLSearchParams(requestToken.data);
    const access_token = params.get("access_token");

    const requestUser = await axios.get('https://api.github.com/user', {
        headers: { Authorization: `token ${access_token}`, }
    })

    const response = {
        access_token,
        login: requestUser.data.login,
        userId: requestUser.data.id,
        avatar: requestUser.data.avatar_url
    }

    return res.status(200).json(response);
});

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
