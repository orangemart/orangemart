---
title: "Livestream Your Gameplay and Earn Bitcoin with Zap.Stream"
topics: ["bitcoin", "orange", "nostr"]
author: "orangemart"
description: "The world of gaming and live streaming is evolving, and now you can monetize your gameplay by earning bitcoin."
pubDate: "Jul 09 2024"
heroImage: "/img/zapstream.png"
---

### Livestream Your Gameplay and Earn Bitcoin with Zap.Stream

The world of gaming and live streaming is evolving, and now you can monetize your gameplay by earning bitcoin. In this guide, we’ll show you how to easily set up your live stream using OBS (Open Broadcaster Software) and [zap.stream](https://zap.stream/), a nostr-based streaming platform. This is the second article in our nostr series, read the [introduction to nostr here](https://www.orangem.art/blog/nostr). 

<iframe width="420" height="236" src="https://cdn.satellite.earth/6b833e9d1bab7379ba3ed0798290783a3d8a81dc8b4195405037720163768b4e.mp4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

#### Why Choose Zap.Stream?

Zap.Stream is a user-friendly streaming platform that integrates seamlessly with the Nostr network. Which means your followers can easily support you with native bitcoin integration. Whether you’re a seasoned Nostr user or new to the scene, zap.stream makes it incredibly simple to get started. Plus, zap.stream has built-in re-streaming, allowing you to stream to one destination and have it restreamed to multiple platforms like Twitch and YouTube, for a fraction of the cost of traditional restreamers. 

#### Getting Started with zap.stream

1. **Sign In with Your Nostr Identity**
   - If you already have a Nostr identity, sign in directly with your nostr browser extension. 
   - If you're new, creating a nostr profile with zap.stream is straightforward and quick, ensuring you're ready to start streaming in no time. Alternatively you could read our previous post on [how to create a Nostr identity](https://www.orangem.art/blog/nostr) with [Alby](https://getalby.com/invited-by/orangemart).

2. **Copy Your Stream Key and URL**
   - Once logged in, navigate to your zap.stream stream settings.
   - Copy the stream key and stream URL provided. You’ll need these for OBS.

3. **Set Up Your Profile and Stream Info**
   - If this is your first time using Nostr, make sure to go to Settings, then Profile, and add a **Lightning Address**. This will give your viewers a destination to send you sats if they like your stream.
   - Before streaming, go to the Dashboard and edit your Stream Info to provide a Title and Summary of your stream.

#### Setting Up OBS

OBS is a powerful, free, and open-source software for video recording and live streaming. Here’s how to set it up for streaming with zap.stream:

1. **Download and Install OBS**
   - Visit the [OBS website](https://obsproject.com/) and download the software for your operating system.
   - Follow the installation instructions to get OBS up and running on your computer.

2. **Configure OBS for Streaming**
   - Open OBS and go to **Settings**.
   - In the **Stream** section, select **Custom...** from the Service dropdown.
   - Paste the stream URL from zap.stream into the **Server** field.
   - Paste your stream key into the **Stream Key** field.

3. **Set Up Your Scene**
   - OBS works with scenes and sources. Create a new scene by clicking the **+** button under the **Scenes** box.
   - Add your gameplay source by clicking the **+** button under the **Sources** box and selecting **Game Capture**. Choose the game you want to stream from the options provided.
   - Don’t forget to add an audio output source by clicking the **+** button under the **Sources** box and selecting **Audio Output Capture**. Adjust the sound levels to ensure your game audio is balanced with your microphone input.
   - You can also add other sources like a webcam, images, or text to personalize your stream.
   - Add cool widgets from zap.stream, like the chat widget or zap alert widget (which provides an audio and text alert when a viewer sends you some sats). To do this, go to the widget section of zap.stream, copy the URL for the widget, and add it to OBS as a browser source.

4. **Optimize Your Settings**
   - Go to the **Output** section in the settings to adjust your streaming quality. For a smooth experience, a bitrate between 2500 and 6000 kbps is recommended, depending on your internet speed.
   - In the **Video** section, set your base (canvas) resolution and output (scaled) resolution. A common setting is 1920x1080 for both.
   - Set your FPS (frames per second) to 30 for a standard quality stream or 60 for a high-quality stream.

5. **Encoder Settings**
   - In the **Output** settings under the **Streaming** tab, choose your encoder. If you have a dedicated GPU from NVIDIA, you can use the NVENC encoder. Otherwise you could use the AMD encoder or the x264 CPU encoder.
   - For CPU usage preset (available if you're using the x264 encoder), a higher preset means less CPU usage. For most users, the **veryfast** preset is a good balance between quality and CPU usage. If you have a powerful CPU, you can try **faster** or **fast** for better quality. If you need to conserve CPU power, **superfast** or **ultrafast** will use less CPU but at the cost of some quality.

6. **Start Streaming**
   - Once you’ve configured your settings and added your sources, click **Start Streaming** in the main OBS window.
   - You should now be live on zap.stream, sharing your gameplay with the world and earning bitcoin from your viewers.

#### Restream to Multiple Platforms

One of the standout features of zap.stream is its built-in re-streaming capability. This allows you to stream to zap.stream and have your content automatically restreamed to other popular platforms like Twitch and YouTube. This feature maximizes your reach without needing to set up multiple streams, saving you time and effort. Simply add the stream keys from these destinations to your zap stream settings to enable restreaming. 

#### Testing Your Stream Quality

Before going live, it’s a good idea to test your stream quality using OBS’s recording function. Use the same encoder settings for the recording to see what the quality looks like. If the recording is blurry, here are a few troubleshooting tips:

1. **Increase the Bitrate:** A higher bitrate can improve video quality, especially for fast-moving gameplay. Try increasing the bitrate in the **Output** settings.

2. **Adjust the CPU Usage Preset:** If you’re using the x264 encoder, try a slower CPU usage preset (e.g., from **veryfast** to **faster**). This will use more CPU but can improve quality.

3. **Try a Different Encoder:** If you have a dedicated GPU, consider using the NVENC encoder, which can offload encoding to the GPU and reduce CPU load.

4. **Check Resolution and FPS Settings:** Ensure your base and output resolution are appropriately set, and consider reducing FPS if your hardware struggles to maintain high quality.

#### Tips for a Successful Stream

- **Engage with Your Audience:** Interact with viewers through chat, respond to comments, and create a community.
- **Promote Your Stream:** Share your zap.stream link on nostr and other social media, gaming forums, and with friends to attract more viewers.
- **Consistency is Key:** Regular streaming schedules help build a loyal audience.
- **Quality Matters:** Invest in a good microphone and webcam to enhance the viewer experience.

#### Conclusion

Streaming your gameplay and earning bitcoin has never been easier. With zap.stream and OBS, you can set up and start streaming in just a few steps. Plus, with zap.stream's re-streaming feature, you can effortlessly expand your audience across multiple platforms. Follow this guide, and you’ll be live in no time, sharing your gaming skills with the world and earning bitcoin along the way. Happy streaming!
