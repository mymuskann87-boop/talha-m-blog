---
title: "Mirai Broke Internet Using Cameras"
description: "In 2016, the Mirai botnet turned hundreds of thousands of ordinary home cameras and gadgets into an army that knocked giant websites offline for much of a day."
pubDate: 2026-10-23T16:10:00+05:00
image: "/images/mirai-broke-internet-using-cameras.webp"
imageAlt: "An illustration of a vast army of small home cameras and smart devices with glowing red eyes marching over a dark city while internet cables snap above them."
category: "Technology"
tags: ["mirai", "malware", "botnet", "smart devices", "internet safety"]
---

It sits in the corner of the room, small and quiet, doing exactly what its owner bought it for. A little home camera, watching the front door. Its tiny red light blinks now and then. Nobody in the house thinks about it at all, because there is nothing exciting to think about. It is just a camera.

Except this camera has a second life that its owner knows nothing about.

Every few minutes, the camera reaches out across the internet, searching. It scans address after address, looking for other gadgets like itself — cameras, video recorders, baby monitors, home routers. When it finds one, it quietly tries to log in. Not with clever hacking tricks, not with genius code. It simply tries the passwords the devices were born with. Admin. Admin. Root. Password. One after another, a short list of guesses, the same guesses, over and over, day and night.

Sooner or later, one door opens.

That is how an army is built. Not with soldiers who march and shout, but with silent gadgets in quiet corners — in living rooms, in shops, in baby rooms, in offices. Each new recruit keeps doing its normal job. The camera still watches the door. The recorder still records. The owner notices nothing at all.

Then, one day, an order travels through the whole army at once. Hundreds of thousands of little machines wake up together and aim at a single target. And on one October day in 2016, that army was pointed at the address book of the internet itself — and for millions of people, the internet simply stopped working.

This is the story of Mirai, the malware that taught the world a strange lesson: the most dangerous army on the internet is not made of powerful computers. It is made of small, forgotten things.

## What the Mirai botnet is, and what it does

Mirai is a piece of malware that appeared in 2016. Its name comes from a Japanese word for "the future," and in an unhappy way, the name fits. Mirai does not attack big, strong computers. It hunts the small smart devices that fill our homes — internet-connected security cameras, digital video recorders, baby monitors, and the routers that bring Wi-Fi into the house.

Once Mirai gets inside a device, it does two jobs.

The first job is to recruit. The infected device starts scanning the internet nonstop, testing random addresses, looking for more gadgets it can break into. Every victim becomes a hunter, so the army grows by itself, faster and faster, without any human help.

The second job is to wait for orders. All the infected devices together form what experts call a **botnet** — a robot network, one huge army controlled from a single place. When the controller gives the command, every device in the army starts throwing junk internet traffic at one chosen target. One camera sending junk is nothing. Hundreds of thousands of cameras, recorders and routers sending junk at the same second is a flood no ordinary website can swim through. The target's systems drown in fake visits until real visitors cannot get in at all. This kind of flood attack is called a denial-of-service attack, which simply means the service is denied to everyone because the door is blocked by a fake crowd.

The cruel detail is that the owners of these devices almost never notice anything. The camera still shows the door. The baby monitor still plays its little sounds. A device might run a touch slower, but nothing looks broken. Your gadget can be fighting in a war, and you would never know.

## How Mirai spreads, and how it can reach your home

Mirai does not need you to click a bad link. It does not need you to open a strange email or download a suspicious file. It knocks on doors by itself.

The secret of its success is embarrassing in its simplicity. Most smart gadgets leave the factory with a standard username and password already set — simple combinations like admin and admin, or root and password. The makers expect buyers to change these after setting the device up. Almost nobody does. The camera goes on the wall, the password stays "admin," and the door stays open forever.

Mirai carries a short list of only a few dozen of these factory username-and-password pairs. That tiny list was enough to enslave huge numbers of devices, because millions of gadgets around the world were all wearing the same few locks — and the keys were printed in manuals anyone could read.

So picture how it reaches an ordinary home. You buy a cheap camera to watch your shop or your front gate. You plug it in, connect it to the Wi-Fi, and it works, so you never open the settings again. The device is now visible to the internet with its factory password still in place. Somewhere out there, an already-infected gadget is scanning, address by address, hour after hour. It knocks on your camera's door, tries "admin, admin," and walks straight in. Nothing beeps. Nothing flashes. Your camera has just joined the army.

## The day the Mirai botnet darkened the internet

The world first felt Mirai's strength in September 2016. A botnet driven by Mirai attacked the website of Brian Krebs, a well-known security journalist. The flood reached about 620 gigabits of junk traffic per second, which at that time was one of the largest attacks ever recorded. To understand that size: it was not a crowd at the door. It was an ocean poured through the letterbox.

But the big day came on 21 October 2016. Waves of Mirai-powered attacks struck a company called Dyn. Dyn's job sounds boring and is actually vital: it helps run the internet's address-book system, called DNS. When you type the name of a website, this address book is what finds the real location of that site. If the address book cannot answer, your browser cannot find the website — even though the website itself is perfectly healthy.

That is exactly what happened. Twitter, Netflix, Reddit, Spotify, Amazon and many other giant names became unreachable for large numbers of users across the United States and Europe, for much of the day. The websites had not been hacked. Their data had not been stolen. The signposts pointing to them had been buried under a flood coming from an army of home gadgets.

Later, the code behind Mirai was published online for anyone to take. That single act stretched Mirai's life for years, because copycat botnets kept being built from it long after the original was understood.

And who had built the original? In 2017, three young Americans, including a man named Paras Jha, pleaded guilty in a United States court to creating and using Mirai. Reporting on the case said the botnet had originally been built partly for attacking rival Minecraft game servers — a weapon that darkened half the internet had started, at least in part, as a tool in fights over a video game.

Honestly, the part of this story that stays with me is that the mighty army was never made of mighty machines — it was baby monitors and door cameras, quietly betraying the homes that trusted them.

## How to protect your home from the Mirai botnet

The good news hidden inside this story is that Mirai's trick is easy to defeat, because the trick is only a password that was never changed.

**Change every factory password.** The day you install a camera, recorder, router or any smart gadget, open its settings and replace the standard username and password with a long, unique one of your own. This single step closes the exact door Mirai walks through. A device whose password is not on the factory list cannot be guessed by Mirai's short list of tries.

**Keep the router safe first.** Your router is the gate of the whole house network. Change its admin password too, not just the Wi-Fi password, and check its settings now and then. If the gate is strong, everything behind it is safer.

**Update your gadgets.** Makers release small software updates, called firmware updates, that fix holes in their devices. Install them when they appear. An updated gadget often refuses old attacks that would have worked on it before.

**Unplug what you do not use.** An old recorder in a cupboard, still plugged in and still connected, is still a door into your home. If a smart device is not needed, switch it off or disconnect it. A device with no power cannot join any army.

**Buy with a little care.** When choosing cheap smart gadgets, prefer makers who let you change the password easily and who provide updates. If a device forces you to keep a fixed factory password forever, it is asking to be recruited.

None of these steps costs money. All of them together take less than an hour, once, for the whole house.

## Common questions

**What does Mirai actually do to my camera?**
Surprisingly little that you can see. Mirai uses your camera's connection to scan for other devices and, when ordered, to send junk traffic at a target. The camera usually keeps working normally, which is exactly why so many owners never had any idea their gadgets were infected.

**Can Mirai watch me through my own camera?**
Mirai itself was not built to spy on owners; it was built to recruit devices and launch flood attacks. But the lesson is wider — any stranger who logs into your camera with its factory password could misuse it, which is why changing that password matters so much.

**How did the Dyn attack stop people opening Twitter or Netflix?**
Those websites were fine, but Dyn ran part of the address-book system that tells browsers where the websites live. When the flood jammed Dyn, browsers could not find the addresses, so the sites appeared to be down for many users in the United States and Europe.

**Is Mirai still around today?**
The original creators pleaded guilty in 2017, but Mirai's code was published online, and security firms have kept finding new copycat versions built from it. The name survives because the weakness it used — unchanged factory passwords — still survives too.

**What is the single most important step I can take?**
Change the factory password on every smart device in your home, starting with the router and any cameras. It takes minutes, it costs nothing, and it removes the one weakness Mirai depends on.

## Sources

- Wikipedia — Mirai (malware): https://en.wikipedia.org/wiki/Mirai_(malware)
