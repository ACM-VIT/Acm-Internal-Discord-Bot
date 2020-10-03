import { Message, MessageAttachment, MessageEmbed } from "discord.js";
import Command from "../core/command";
import path from "path";
export default class Profile extends Command {
  constructor(
    name = "profile",
    description = "Profile of the mentioned user",
    hasArgs = true,
    usage = "@user"
  ) {
    super(name, description, hasArgs, usage);
  }
  execute(message: Message, args: string[]) {
    //  Use either way
    // const exampleEmbed = new MessageEmbed()
    //   .setColor("#0099ff")
    //   .attachFiles([path.join(__dirname, "../assets/logo.png")])
    //   .setTitle("Some title")
    //   .setURL("https://discord.js.org/")
    //   .setAuthor(
    //     "Some name",
    //     "https://i.imgur.com/wSTFkRM.png",
    //     "https://discord.js.org"
    //   )
    //   .setDescription("Some description here")
    //   .setThumbnail("https://i.imgur.com/wSTFkRM.png")
    //   .addFields(
    //     { name: "Regular field title", value: "Some value here" },
    //     { name: "\u200B", value: "\u200B" },
    //     { name: "Inline field title", value: "Some value here", inline: true },
    //     { name: "Inline field title", value: "Some value here", inline: true }
    //   )
    //   .addField("Inline field title", "Some value here", true)
    //   .setImage("attachment://logo.png")
    //   .setTimestamp()
    //   .setFooter("Some footer text here", "https://i.imgur.com/wSTFkRM.png");

    const file = new MessageAttachment(
      path.join(__dirname, "../assets/logo.png")
    );
    const exampleEmbed = {
      color: 0x0099ff,
      title: "Some title",
      url: "https://discord.js.org",
      author: {
        name: "Some name",
        icon_url: "https://i.imgur.com/wSTFkRM.png",
        url: "https://discord.js.org",
      },
      description: "Some description here",
      thumbnail: {
        url: "https://i.imgur.com/wSTFkRM.png",
      },
      fields: [
        {
          name: "Regular field title",
          value: "Some value here",
        },
        {
          name: "\u200b",
          value: "\u200b",
          inline: false,
        },
        {
          name: "Inline field title",
          value: "Some value here",
          inline: true,
        },
        {
          name: "Inline field title",
          value: "Some value here",
          inline: true,
        },
        {
          name: "Inline field title",
          value: "Some value here",
          inline: true,
        },
      ],
      image: {
        url: "https://i.imgur.com/wSTFkRM.png",
      },
      timestamp: new Date(),
      footer: {
        text: "Some footer text here",
        icon_url: "attachment://logo.png",
      },
    };

    message.channel.send({ files: [file], embed: exampleEmbed });
  }
}
