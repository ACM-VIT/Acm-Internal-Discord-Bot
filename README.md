![ACM-HEADER](https://user-images.githubusercontent.com/14032427/92643737-e6252e00-f2ff-11ea-8a51-1f1b69caba9f.png)

<h1 align="center"> PROJECT TITLE </h1>

<p align="center"> 
Short description about the project.
</p>

<p>
  <a href="https://acmvit.in/" target="_blank">
    <img alt="made-by-acm" src="https://img.shields.io/badge/MADE%20BY-ACM%20VIT-blue?style=for-the-badge" />
  </a>
    <!-- Uncomment the below line to add the license badge. Make sure the right license badge is reflected. -->
    <!-- <img alt="license" src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" /> -->
    <!-- forks/stars/tech stack in the form of badges from https://shields.io/ -->
</p>

---

The overview starts here. Random text about the project, motive, how, what, why etc.

---

## How to add a new command to the bot

All the commands are located in the folder `src/commandHandlers` so that each command has its own file. They are then executed in `src/commands.ts` when a user types a command with the configured command prefix in [config.ts](https://github.com/EddieJaoudeCommunity/EddieBot/blob/develop/src/config.ts#L4).

To **create a new command**, follow these steps:

1. **Create a new file** on the `/commandHandlers` folder with the name of the new command.
   _Note: If you need to, use **camel case** for the file name, like_ `codeOfConduct.ts`
2. On this file you must **export a function** and **three variables**:

   - `command` - the function that executes the command. The **signature** of this function is the following:

   ```ts
   (arg: string, embed: MessageEmbed, message: Message): Promise<MessageEmbed>
   ```

   The **arg** parameter contains the arguments given to the command in a string.
   The **embed** parameter is a [MessageEmbed](https://discord.js.org/#/docs/main/stable/class/MessageEmbed) instance, and it represents the message that is returned by the bot, in response to the user. **The command should return this parameter or a new instance** with an appropriate message to the user.
   The **message** parameter is a [Message](https://discord.js.org/#/docs/main/stable/class/Message) instance that represents the message inputted by the user to execute a given command.

   - `description` - a string with a more detailed description of the command. Used for example by the [help command](https://github.com/EddieJaoudeCommunity/EddieBot/blob/develop/src/commandHandlers/help.ts)
   - `triggers` - a string array with the values that trigger this command. If the user types the configured command prefix followed by one of these values, the command **should be executed**
   - `usage` - a string explaining how the command is used (e.g. specifying the number of arguments and their separator)

3. After creating that file, you have to import it and add it to the exported list of commands on the [index.ts](https://github.com/EddieJaoudeCommunity/EddieBot/blob/develop/src/commandHandlers/index.ts) file located in this folder. Here is an example of adding the `standup` command:

```diff
import * as codeOfConduct from './codeOfConduct';
import * as help from './help';
+ import * as standup from './standup';
import * as stats from './stats';

- export default [codeOfConduct, help, stats];
+ export default [codeOfConduct, help, standup, stats];

export { fallback } from './fallback';
```

---

## Screenshots

<!-- Add one screenshot of your project (max height: 1000px, max size: 1mb) 'if applicable' under assets folder in root of your project ![sceenshot](assets/<name of image>) -->
<!-- if your project has multiple pictures , merge them into one image using a tool similar to figma -->

---

## Usage

<!-- How To, Features, Installation etc. as subheadings in this section. example-->

Lets get started!

```console
git remote add
git fetch
git merge
```

---

## Authors

**Authors:** <!-- [author1's name](link to their github profile), [author2's name](link to their github profile) .. -->  
**Contributors:** <!-- Generate contributors list using this link - https://contributors-img.web.app/preview -->
