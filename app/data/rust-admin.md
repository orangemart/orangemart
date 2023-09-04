---
title: "Setting Up and Modifying Your Own Rust Server: A Beginner's Guide"
topics: ["rust", "orange"]
author: "orangemart"
description: "Boot up your own rust server for free"
pubDate: "May 25 2023"
heroImage: "/img/orangegod.png"
---

Are you ready to conquer the world of Rust? Follow this guide to set up your own server and unlock
the powers of an admin.

# Get Your Folders Organized

Here's what you need to do:

- **Create two folders**: one named "steamcmd" and another named "rustserver." Take note of the path
  where you put them (e.g., C:\steamcmd).
  ![folderpath](https://i.postimg.cc/Zn0zTqgB/folderpath.jpg)
- <a href="https://developer.valvesoftware.com/wiki/SteamCMD" target="_blank">**Download steamcmd
  from valve**</a> and extract its contents to your steamcmd folder. Your steamcmd folder should now
  contain a steamcmd.exe application file. If it's not there, locate the steamcmd.exe file and move
  it to your steamcmd folder.
- **Run steamcmd.exe** by double-clicking it. This action will populate the steamcmd folder with
  files and folders.
- Navigate into the rustserver folder. Right-click and create a new text document.
- Copy and paste the following text into your text document, and update the paths of
  C:\steamcmd\steamcmd.exe and C:\rustserver to match the location of your folders:

```
C:\steamcmd\steamcmd.exe +force_install_dir C:\rustserver +login anonymous +app_update 258550 +quit
```

- Save your text document using "Save As" and change the file type to "All files." Name it
  "**updaterust.bat**"
- Congratulations! Your rustserver folder now contains an "updaterust" batch file. Double-click on
  it to install and update your Rust server. If you ever want to experiment with the staging branch
  of Rust, you can edit this file by adding "-beta staging validate" after "+app_update 258550"
- The next step is to create another text document called "**launchserver.bat**" and add the
  following content:

```
Rustdedicated.exe -batchmode +server.port 28119 +server.queryport 28116 +rcon.port 28115 +server.level "Procedural Map" +server.seed 1561757743 +server.worldsize 4250 +server.maxplayers 10 +server.hostname "test server" +server.description "test server description" +server.url "www.orangem.art" +server.headerimage "https://i.postimg.cc/KcgSjMZq/flag.jpg" +server.identity "testserver1" +rcon.password test +rcon.web 1
```

- The launchserver.bat file is what you'll double-click to start the server and what you will edit
  to modify its configuration. For example, you can change the server.seed and server.worldsize to
  generate a new map using <a href="https://rustmaps.com/" target="_blank">Rustmaps</a>.
- For an explanation of each of the server settings, check out
  <a href="https://wiki.facepunch.com/rust/Creating-a-server" target="_blank">Facepunch's server
  guide</a>.

# Boot Up Your Rust Server

If you've completed the folder setup, congratulations! Now it's time to launch your Rust server and
connect to it:

- Run updaterust.bat at least once to download the server files to your folder. You don't need to
  update every time you launch the server, but you should update at least once a month after the
  first Thursday when Facepunch releases their major content updates for Rust.
- Double-click launchserver.bat to start the server. Remember to make any changes to the server's
  configuration by editing the .bat file before launching it.
- Wait for the server to finish starting up (approximately 5 minutes), and allow access through the
  Windows Firewall if prompted.
- Open the Rust game client and press F1 to open the console.
- Type either "client.connect localhost:28119" or "client.connect yourip:28119" to connect to your
  server. Note: To find your IP address, open the Command Prompt and type "ipconfig."

```
client.connect localhost:28119
```

Congratulations! You're now loading into your very own Rust server.

# Establish Admin Powers

As the owner of the server, it's time to grant yourself access to all the administrative commands
that will give you complete control over your server. Follow these steps:

- Open the Rust server command prompt (The thing that popped up when you first launched the server
  and it showed the progress of the server booting up) and use the following command to grant
  yourself admin powers:

```
ownerid <yoursteamid>
```

- If you're unsure about your SteamID, check the server command prompt for the large number next to
  your name. You can also find your SteamID by opening Steam -> Settings -> Interface and enabling
  "display web address bars when available." Visit your profile page, and your SteamID will be at
  the end of the URL. ![steamid](https://i.postimg.cc/152s3py9/steamid.jpg)

- For the change in ownership to take effect, you will need to use the server.writecfg command and
  then disconnect and reconnect to the server.

## Try Out Some Commands

Congratulations! You are now in complete charge. Test your powers by following these steps:

- Open the console in the Rust client (F1) and try the command:

```
noclip
```

If it worked, you should now be flying! If not, try disconnecting and reconnecting to the server
with these commands:

```
client.disconnect
client.connect localhost:28119
```

When you join the server, you should see "auth level 2" or a similar message in the server command
prompt, indicating your arrival. If not, revisit the previous step to ensure you have granted
yourself admin powers.

## Useful Commands

Enter these commands in the Rust client console (F1)

- Noclip and fly:

```
bind [leftshift+z] noclip
```

This command binds the noclip command to the key combination "leftshift+z." You can use any keyboard
shortcuts you prefer.

- Third Person Mode

```
bind p debugcamera
```

Pressing "P" will enter
<a href="https://wiki.facepunch.com/rust/Debug_Camera" target="_blank">debugcamera</a> mode,
allowing you to fly around outside your body.

- Cinematic Debug Camera

```
client.camlerp 0.005
```

This command makes the debugcamera movement smoother. Hold the spacebar to slow down your movement
for capturing the perfect shot. If you're interested in creating Rust cinematics, check out the
<a href="https://wiki.facepunch.com/rust/Demos" target="_blank">demo recorder</a>.

- Time Manipulation

```
env.time 12
env.progresstime False
```

- Map Teleportation

```
teleport2marker
```

- Invincibility

```
global.god True
```

- Server Configuration Save

```
server.writecfg
```

For more commands, check out this useful list from
<a href="https://developer.valvesoftware.com/wiki/Rust_Dedicated_Server#Configuration_.26_running" target="_blank">Valve</a>.
If you want to spawn any item in the game, press F1 to open the console and select the item. For
vehicles like cars and minicopters, you can use the command "spawn minicopter," etc

# Customise and Modify Your Server

This is where things start to get interesting. However, be cautious as you may accidentally break
your server and need to start over. So let's dig in:

- Download <a href="https://umod.org/games/rust" target="_blank">Oxide from Umod.</a>
- Extract the contents of the "oxide.rust.zip" folder and find the "RustDedicated_Data" folder. Copy
  this folder to your "rustserver" folder. If prompted, choose to replace the existing files.
- Once successfully completed, you will have replaced the "RustDedicated_Data" folder with a new
  folder of the same name.
- Launch the server again, and this time Oxide will be installed automatically.
- After the server has finished booting up, navigate to your "rustserver" folder and locate the
  "Oxide" folder. Inside the "Oxide" folder, you will find a "plugins" directory. This is where you
  should place the "plugin.cs" files for the mods you wish to use.
- Please note that if you have previously experimented with the staging branch of the server, you
  might encounter issues. Oxide does not work by default with the latest staging branch of Rust. You
  can either download the staging version of Oxide (if it's available) or revert your server back to
  the main branch (this might require deleting and starting again).

## Install Some Plugins!

- Visit <a href="https://umod.org/" target="_blank">uMod</a> to search for free Rust plugins
- For example, let's download the <a href="https://umod.org/plugins/vanish" target="_blank">Vanish
  plugin</a> maintained by Whispers88. Place the "vanish.cs" file into the "plugins" folder located
  at "C:\rustserver\oxide\plugins" (you can do this while the server is running).

- Grant yourself
  <a href="https://umod.org/documentation/plugins/permissions" target="_blank">permission</a> to use
  the plugin by executing the following command:

```
oxide.grant group admin vanish.allow
```

- Use the command "vanish" to activate or deactivate the plugin, or bind it to a key. Since "vanish"
  has a similar effect to "noclip," you can replace the previous bind command:

```
bind [leftshift+z] vanish
```

- If you want to make changes to the configuration of the Vanish plugin, navigate to the "oxide"
  folder, then the "config" folder, and locate the "vanish.json" file. Here, you can modify the
  configuration settings permitted by the plugin developer. You can find explanations of each
  setting on the plugin's page on uMod.

## Useful Plugins

Here's a non-exhaustive list of plugins that I currently find useful.

- <a href="https://umod.org/plugins/blueprint-manager" target="_blank">BlueprintManager</a> by
  Whispers88
- <a href="https://umod.org/plugins/car-radio" target="_blank">CarRadio</a> by TCM420G
- <a href="https://umod.org/plugins/copy-paste" target="_blank">CopyPaste</a> by misticos
- <a href="https://umod.org/plugins/custom-spawn-points" target="_blank">CustomSpawnPoints</a> by
  k1lly0u
- <a href="https://umod.org/plugins/discord-chat" target="_blank">DiscordChat</a> by MJSU
- <a href="https://umod.org/plugins/discord-report" target="_blank">DiscordReport</a> by misticos
- <a href="https://umod.org/plugins/discord-status" target="_blank">DiscordStatus</a> by Gonzi
- <a href="https://umod.org/plugins/loot-plus" target="_blank">LootPlus</a> by misticos
- <a href="https://umod.org/plugins/no-give-notices" target="_blank">NoGiveNotices</a> by MrBlue
- <a href="https://umod.org/plugins/no-green" target="_blank">NoGreen</a> by misticos
- <a href="https://umod.org/plugins/oil-rig-doors-fix" target="_blank">OilRigDoorsFix</a> by MONaH
- <a href="https://umod.org/plugins/player-administration" target="_blank">PlayerAdministration</a>
  by ThibmoRozier
- <a href="https://umod.org/plugins/radio-station-manager" target="_blank">RadioStationManager</a>
  by Whispers88
- <a href="https://umod.org/plugins/sign-artist" target="_blank">SignArtist</a> by Whispers88
- <a href="https://umod.org/plugins/skins" target="_blank">Skins</a> by misticos
- <a href="https://umod.org/plugins/spawns-database" target="_blank">Spawns</a> by k1lly0u
- <a href="https://umod.org/plugins/vanish" target="_blank">Vanish</a> by Whispers88
- <a href="https://umod.org/plugins/vending-machine-logs>" target="_blank">Vending Machine Logs</a>
  by Ryz0r
- <a href="https://umod.org/plugins/zone-manager" target="_blank">ZoneManager</a> by k1lly0u

### Good Luck, Have Fun!

Congratulations! Enjoy exploring and playing on your Rust server. It will be accessible to anyone on
your local network who wants to join in the fun. However, if you wish to make your server publicly
accessible, you'll need to consider a process called port forwarding. This can be complicated and
instructions will depend on your equipment, there are also network security risks to your consider.
Keeping your server online 24/7 will require access to affordable and reliable electricity and a
power efficient computer. Alternatively, you could try hosted options that specialise in gaming
servers like <a href="https://www.gameserverkings.com/" target="_blank">gameserverkings</a> or other
virtual private server providers.

Need help? Ask the Orange community on <a href="https://dsc.gg/orangemart" target="_blank">
Discord</a>. Check out the <a href="https://discord.gg/rustadmincommunity" target="_blank">Rust
Admin Academy</a> and <a href="https://discord.gg/umod-500413814244638747" target="_blank">Oxide</a>
discord servers.

Learn <a href="https://orangem.art/blog/join-orange/" target="_blank">how to join the Orange Rust
server</a> and learn <a href="https://orangem.art/blog/earn-bitcoin/" target="_blank">how to earn
Bitcoin playing Rust</a>.

```
client.connect 104.129.133.89:28119
```
