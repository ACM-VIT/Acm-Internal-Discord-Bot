![ACM-HEADER](https://user-images.githubusercontent.com/14032427/92643737-e6252e00-f2ff-11ea-8a51-1f1b69caba9f.png)

<h1 align="center"> ACM Internal Chatbot  </h1>

<p align="center"> 
A shiny new discord chatbot in development. Part of the new project mangement ecosystem we are rolling out :)
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

## Setup

A token is required and it resides in a super secrect .env file.

please contact the project colaborators for more info 

---

## How to add a new command to the bot

All the commands are located in the folder `src/commands` so that each command has its own file. They are then executed in `src/commands/index.ts` when a user types a command with the configured command prefix in [config.ts].

To **create a new command**, follow these steps:

1. **Create a new file** on the `/commands` folder with the name of the new command.
2. On this file create a class which extends the commands class found in `src/core/command.ts`:

3. After creating that file, you have to import it and add its object to the exported array of command objects on the [index.ts]  located in this folder(`/commands`). Here is an example of adding the `standup` command:




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
