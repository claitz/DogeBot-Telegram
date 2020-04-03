#  DogeBot for Telegram

This is a Telegram bot powered by [TelegrafJS](https://telegraf.js.org/#/) to run a simple bot for a gaming clan with much wow.

# Features
* **Registration:** registers gamers to FaunaDB
* **Commands:** Answers to easily extensible commands
  * Twitch and Discord linking pre-build
* **Hears:** Answers to easily extensible !commands
* **COD Stats:** !codstats `platform` `username` will return COD Modern Warfare Warzone stats for the user
* **Welcome/Leave message:** Sends a message whenever a gamer joins or leaves the group
  * Saves users to FaunaDB to handle returning visitors

# TODO: 
### Features we'd like to have
- [x] Event handler
- [ ] CMS for editing settings and messages
- [x] Extend functionalities
- [ ] Extend more functionalities

# Getting Started

* Getting Telegram Bot token and FaunaDB key
* Deploy to wherever

## Getting Telegram Bot token and FaunaDB key
On Telegram, create a new Telegram bot by talking to [@botfather](https://telegram.me/botfather) and thereafter getting the token for the Telegram Bot.

On FaunaDb site, create a collection with the name ```user``` (optionally, generate an index for the collection and specifying the term for the **userId** to be unique). Head to the security section and generate a FaunaDB key for the collection.

## Deploy to wherever

Deploy to wherever either by cloning this repository

Remember to fill in the environment variables on netlify depending on the used modules:

* ```TELEGRAM_BOT_TOKEN```
* ```FAUNA_SECRET_KEY```
* ```DISCORD_TOKEN```
* ```DISCORD_INVITE```
* ```TWITCH_TOKEN```

# Extending Telegram Bot Functionality

This bot uses telegraf.js for its Telegram Bot functionality. Head to its [website](https://telegraf.js.org/#/) to find out how to extend the functionality of the bot you have created :)

## Authors

* Stefano  - [claitz](https://github.com/claitz)
* Fernando - [fmaule](https://github.com/fmaule)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments

* Hat tip to anyone whose code was used
* Trees for inspiration
