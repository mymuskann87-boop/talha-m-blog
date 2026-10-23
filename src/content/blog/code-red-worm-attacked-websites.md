---
title: "Code Red Worm Attacked Websites"
description: "In July 2001, the Code Red worm infected about 359,000 web servers in less than a day, painted a strange message across websites, and then marched on the White House itself."
pubDate: 2026-10-23T18:00:00+05:00
image: "/images/code-red-worm-attacked-websites.webp"
imageAlt: "An illustration of a giant glowing red warning radar screen in a dark cybersecurity control room sweeping across a network map covered in red alert lights."
category: "Technology"
tags: ["code red worm", "malware", "computer worm", "website security", "internet safety"]
---

Nobody noticed the first few. A web server in one city quietly stopped behaving like a web server. Then one in another city. Then a hundred, then a thousand, then whole streets of the internet at once — each machine no longer doing its own job, but hunting for the next machine to copy itself into. It was 13 July 2001, and most of the people who would spend that night fighting the thing did not yet know its name. By the time they found one, they gave it the name of the drink sitting on their desk.

## Act one: a hole in the world's shop windows

### What the Code Red worm actually was

To understand Code Red, picture the internet as a giant shopping street. The shops themselves are websites. But a shop cannot hand its pages to visitors by itself — it needs a shopkeeper standing at the counter, and on a huge share of the street in 2001, that shopkeeper was a piece of Microsoft software called IIS. IIS is server software: it runs on powerful computers and delivers web pages whenever a browser asks for them.

Inside IIS sat a smaller part, an indexing component, and inside that component sat a flaw. A flaw in software is like a shop door whose lock looks solid from the street but can be pushed open with one firm shove in exactly the right spot. Microsoft already knew about this flaw. About a month before Code Red appeared, the company released a patch — a small repair that fixed the lock.

A patch only protects the people who install it. Thousands upon thousands of server owners had not installed it, because patching a busy server is boring, easy to postpone, and invisible when skipped. So on 13 July 2001, the internet's biggest street was full of shops with one specific broken lock, and something out there had learned exactly where to push.

### How the Code Red worm spread, hour by hour

Code Red never waited for a human mistake. It did not hide in an email or beg anyone to click. Each infected server simply started knocking on doors itself, trying random addresses across the internet, one after another, looking for another IIS server with the same unpatched flaw. When it found one, it shoved the weak spot, climbed inside, and the new server instantly began knocking on doors too.

That is why the numbers exploded. Every victim became a recruiter. Analysts who tracked the first wave counted roughly 359,000 servers infected in less than a day — one of the fastest outbreaks anyone had seen up to that time. A modern worm is stopped by the clicks it fails to get. Code Red needed no clicks at all. It needed only forgotten patches, and the world had plenty.

And it could reach anyone. A worm like this does not care whether a server belongs to a giant corporation or to one person running a small business site from a spare machine. If the software is old and the patch is missing, the door is open. That is still true today, for websites, routers, and every other device a household or shop leaves connected around the clock.

## Act two: the message painted on the windows

Once Code Red settled into a server, it changed what the world saw. Visitors who opened an infected website did not get the normal welcome page. They got a message the worm displayed in its place:

**HELLO! Welcome to http://www.worm.com! Hacked By Chinese!**

Read that the way the researchers had to read it. This was not a statement issued by any person, company, or country. It was graffiti — words built into the worm itself, sprayed automatically onto every shop window it broke into. The worm was both the burglar and the spray can. Nobody stepped forward to claim those words; the message simply appeared, identically, on hundreds of thousands of screens, because the same small program wrote it everywhere it landed.

I have to admit, the detail that stays with me is not the graffiti — it is that the worm carried a calendar inside it. Code Red did not attack at full strength every day. Its behaviour changed with the date. For the first part of each month, it spread from server to server. During the middle days of the month, it stopped spreading and did something far more ambitious. And in the last days of each month, it rested, quiet, waiting for the calendar to turn. The July outbreak was only act two. The worm had an appointment in act three, and the appointment was with the most famous website address in the world.

## Act three: the silent strike on the White House

During those middle days of the month, every infected server received the same silent order: together, at the same time, flood one fixed internet address with junk traffic. A flood like this is called a denial-of-service attack. One server shouting at a website is nothing. Hundreds of thousands of servers shouting at once is a wall of noise so thick that real visitors cannot get through the door. The targeted address belonged to the White House website.

But the White House team had a quiet trick available, and they used it. A website's address — the name people type — points to a numerical address underneath, the way a shop's name points to its actual plot of land. The worm's program had the number written into it, fixed and unchangeable. So the White House simply moved its website to a different number. When the great flood finally poured out of hundreds of thousands of infected servers, it poured into an empty plot. The real site sat safely somewhere else, watching its old address drown in junk meant for it.

There was one more mercy hidden inside this worm. Code Red lived only in a server's memory — the short-term working space that empties when a machine restarts. It never settled permanently into the machine's storage. So restarting an infected server wiped the worm out completely. The catch arrived minutes later: if the server was still unpatched, Code Red's endless knocking would find it again and climb back in. Restarting without patching was like drying the floor while the tap still ran. Restart, patch, in that order — that was the real cure, and the worm kept re-infecting the machines whose owners only did the first half.

### The cost, and the stronger brother

Cleaning up hundreds of thousands of servers, restarting them, patching them, and checking the damage took people and money across the whole world. When a stronger variant named Code Red II followed in August 2001, the combined damage and response costs were estimated in the billions of dollars. Nobody can weigh a month of emergency work in every time zone with total precision, which is why those figures are always given as estimates — but nobody doubted the bill was enormous.

And the name? The researchers who pulled the worm apart through that long night — analysts at a security company called eEye — named it after what was on the desk beside them: cans of Mountain Dew Code Red, the drink that had kept them awake. One of history's fastest worms is named after a soft drink, because the humans fighting it needed something to stay conscious.

## How to protect yourself from worms like Code Red

You probably do not run a giant web server, but the rules that would have saved those 359,000 machines are the same rules that protect a home and a small business today.

- **Install updates promptly, everywhere.** Code Red's victims were not careless people — they were busy people who postponed a patch for about a month. Turn on automatic updates for your computer, your phone, your website software, and your router, so a forgotten repair cannot sit waiting while a worm goes looking for it.
- **Patch or replace old software.** A program its maker no longer repairs is a door with a broken lock that nobody will ever fix. If your website runs on old plugins or themes, update them or remove them. Software you have forgotten you installed still counts — worms do not forget.
- **Change default passwords.** Many devices and server tools arrive with a factory password printed in manuals anyone can read. Set your own strong password on your router, your website's admin panel, and every device admin page. It takes five minutes and closes one of the oldest tricks there is.
- **Restart and clean, in the right order.** If a device or site ever behaves strangely — sluggish, altered, showing pages you did not write — take it offline, update everything, change its passwords, and only then bring it back. Code Red taught the world that a restart alone is a pause, not a cure.
- **Keep a backup you control.** A copy of your website files and important documents, stored separately, means a bad day becomes an inconvenience instead of a funeral. Test that the backup opens. A backup you have never checked is a hope, not a backup.

## Common questions

### What was the Code Red worm?

Code Red was a self-spreading computer worm that appeared on 13 July 2001. It attacked a known flaw in Microsoft's IIS web server software, copied itself from server to server without any human help, defaced infected websites, and tried to flood the White House website with junk traffic.

### Why is it called Code Red?

The name came from the researchers at the security company eEye, who analysed the worm through the night. They named it after the Mountain Dew Code Red drink they were consuming while they worked. It is one of the most famous examples of a malware name coming from the defenders, not the attackers.

### Did Code Red really attack the White House?

Yes — during the middle days of each month, infected servers were programmed to launch a denial-of-service flood against the fixed numerical address of the White House website. The attack failed because the White House changed that numerical address beforehand, so the flood poured into an empty address instead.

### How many computers did Code Red infect?

The first wave infected roughly 359,000 servers in less than a day, according to the analysis widely cited at the time. A stronger variant, Code Red II, followed in August 2001, and the total damage and clean-up costs of the outbreak were estimated in the billions of dollars.

### Can a worm like Code Red still hurt me today?

The exact worm is long dead, but its method is alive and well: malware still scans the internet constantly for unpatched software and weak devices. Keeping everything updated, changing default passwords, and removing old software you no longer use closes the same doors Code Red walked through in 2001.

## Sources

- Wikipedia — Code Red (computer worm): https://en.wikipedia.org/wiki/Code_Red_(computer_worm)
