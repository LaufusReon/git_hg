require('dotenv').config();

const botToken = process.env.TOKEN;

const { Client, GatewayIntentBits } = require("discord.js");
const { 
    joinVoiceChannel, 
    createAudioPlayer, 
    createAudioResource,
    generateDependencyReport, 
    AudioPlayerStatus 
} = require("@discordjs/voice");

const ytdl = require("ytdl-core");
const ffmpeg = require("ffmpeg-static");
const prism = require("prism-media");

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ] 
});

const playingMusic = (url) => {

const stream = ytdl(url, { filter: "audioonly" });

const transcoder = new prism.FFmpeg({
  args: [
    "-analyzeduration", "0",
    "-loglevel", "0",
    "-i", "pipe:0",
    "-f", "s16le",
    "-ar", "48000",
    "-ac", "2"
  ],
});

    try{
        const player = createAudioPlayer();

        const resource = createAudioResource(stream.pipe(transcoder), {inlineVolume: true});
        resource.volume.volume(100);
        player.on(AudioPlayerStatus.Playing, () => {
        console.log("🎶 Reproduciendo audio...");
        });
        connection.subscribe(player);
        
        player.play(resource);
        connection.subscribe(player);
        
    } catch(err){
        console.log(err)
    } finally {
        console.log("The bot has ended its task.")
    }
    
    console.log(generateDependencyReport())
};


client.login(botToken);

try{
    console.log("hello")
    client.on("messageCreate", async (message) => {
        if (message.content.startsWith("!play ")) {
        const url = message.content.split(" ")[1];

        if (!message.member.voice.channel) {
            return message.reply("Debes estar en un canal de voz para usar este comando.");
        }

        const connection = joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator,
        });

        playingMusic(url);       
 
    }
    });
} catch(err) {
    console.log("Have ocurred an error: ",err, " /n Please do a command with the /play notation.")
} finally{
    console.log("The code had run")
}



