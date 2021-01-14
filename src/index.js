"use strict";

/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require("discord.js");

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on("ready", () => {
  console.log("I am ready!");
  client.guilds.cache.forEach(async (guild, key) => {
    let channel = guild.channels.cache.find((t) => t.name == "cyka-blyat");
    if (channel) return true;

    channel = await guild.channels.create("cyka-blyat", {
      reason: "blyat",
    });
  });
});

// Create an event listener for messages
client.on("message", (message) => {
  // If the message is "ping"
  if (message.content === "ping") {
    // Send "pong" to the same channel
    message.channel.send("pong");
  }
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login("Nzk5MDgzMjcxODQ5MTE1NjY5.X_-aSg.-Sz3G3CEkuUW9hSaAmpYryyPMQ0");
