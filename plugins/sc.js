//Codigo by ShadowBotV3
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
let who = m.sender
let pp = await(await fetch('https://i.imgur.com/Cjk1KW8.jpg')).buffer()
let kai = await(await fetch('https://i.imgur.com/Cjk1KW8.jpg')).buffer()
let text = `*https://github.com/IdkJhus/JhuszBotV1*`.trim()
conn.reply(m.chat, text, m, { thumbnail: kai, contextInfo: {
mentionedJid: [who],
externalAdReply: {
title: 'ππ΄πΏπΎππΈππΎππΈπΎ π³π΄π» π±πΎπ',
body: 'π€ J H U S Z π€',
thumbnail: pp
}}})}
handler.command = /^sc|script|repositorio|repobot|scbot$/i
module.exports = handler
