import discord
import random
import os
from dotenv import load_dotenv
load_dotenv()

intents=discord.Intents.default()
intents.members = True
description="DJ Mykael V Bot for CHHCord"
intents.message_content = True
bot = discord.Bot(debug_guilds=[613464665661636648], owner_id=236394260553924608,intents=intents, description=description)

@bot.event
async def on_ready():
    print("GOD ALWAYS")
    print("------")

phrases = ["GOD ALWAYS!", "INDIE TRIBE SAVES LIVES", "TALK TO ME NICE"]
@bot.event
async def on_message(message):
    if random.randint(1,116) == 16 or (bot.user.mentioned_in(message) and not message.author == bot.user):
        await message.channel.send(phrases[random.randint(0,2)])

token = os.getenv("DJMV_TOKEN")
bot.run(token)


