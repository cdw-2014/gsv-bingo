const express = require('express')
const mongoose = require('mongoose')

const suggestionRoutes = require('./routes/suggestionRoutes')
const boardRoutes = require('./routes/boardRoutes.js')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

app.use('/api/suggestions', suggestionRoutes)
app.use('/api/boards', boardRoutes)

mongoose.connect('mongodb+srv://cdw2014:'+process.env.DB_PASSWORD+'@clashtrack-hfv12.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

const Discord = require('discord.js')
// const { prefix, token } = require('./discordConfig.json')
const client = new Discord.Client()
client.once('ready', () => {
    console.log('Discord Ready!')
})

client.on("message", message => {
    if(message.content.startsWith("~clan")) {
        let tag = message.content.substr(6).toUpperCase()
        let discord = message.guild.id.toString()
        let url = 'http://localhost:3001/clans/tag=' + tag + "&discord=" + discord
        axios({
            method: 'put',
            url: url
        })
        message.channel.send(`The clan with the clan tag #${tag} was successfully linked to this Discord server!`)
    }
})

client.login(process.env.DISCORD_TOKEN)

app.listen(port, () => console.log(`Listening on port ${port}`))
