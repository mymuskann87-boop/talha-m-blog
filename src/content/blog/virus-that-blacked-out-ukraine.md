---
title: "Virus That Blacked Out Ukraine"
description: "How the BlackEnergy virus got inside Ukraine's power companies and switched off electricity for around 230,000 people on a winter night."
pubDate: 2026-10-23T17:30:00+05:00
image: "/images/virus-that-blacked-out-ukraine.webp"
imageAlt: "An illustration of an entire city skyline at night going completely dark as one sweeping wave of blackness swallows street after street."
category: "Technology"
tags: ["ukraine blackout", "blackenergy", "malware", "power grid", "internet safety"]
---

It was an ordinary winter evening, two days before Christmas. In homes across parts of Ukraine, people were cooking dinner, children were watching television, and apartments were warm against the cold outside. Then, in one moment, the lights went out. Not just in one house, and not just on one street. Whole districts went dark at the same time.

There was no storm. No earthquake had shaken the ground. No power station had exploded. The electricity had been switched off by strangers sitting at computers far away, and the strangest part was yet to come: when the power company staff tried to fix the problem, they discovered that their own systems would not obey them. Something had quietly moved into their networks months earlier, learned how everything worked, and waited for the perfect evening to strike.

This is the story of the 2015 Ukraine power grid attack, the first publicly known cyberattack to knock out a nation's electricity — and it began with nothing more dramatic than an email.

## What BlackEnergy is, and what it does

BlackEnergy started life as a fairly simple piece of malware. In its early years it was a tool criminals used to flood websites with junk traffic and to steal information from infected computers. By 2015, a far more dangerous version, known as BlackEnergy 3, was in the hands of a skilled hacking group.

Think of BlackEnergy 3 as a burglar who does not break a window and grab whatever he can. This burglar copies your keys, slips inside, and then hides in the house for months. He watches where everyone goes. He learns the alarm codes. He studies the daily routine until he knows the home better than the people who live in it. Only then, on the night he chooses, does he act.

That is exactly how this malware behaved inside the power companies. Once inside a computer, it helped the attackers explore the network, collect passwords, and understand the systems that controlled the flow of electricity. Its most important job was not destruction. Its job was patience. It gave the attackers a quiet doorway into the network and the time to plan something much bigger.

## How the Ukraine power grid attack began: one email at a time

The attackers did not smash their way into the power companies. They knocked politely, by email.

Months before the blackout, staff at three regional electricity distribution companies in Ukraine received spear-phishing emails. Spear-phishing is a trick email aimed at a specific person or workplace, written to look like a genuine message worth opening. These emails carried infected Microsoft Office documents.

On their own, those documents could not do much. The trap needed one small action from the reader: switching on macros. Macros are little helpers built into Office documents that can run small tasks automatically. When a document is opened, Office may show a warning asking whether to enable them. If the person clicked "enable", the hidden trap sprang, and BlackEnergy 3 slipped onto the machine.

From that first foothold, the attackers moved slowly and carefully. They studied the companies' networks for months. They stole login details, including the usernames and passwords for VPN connections. A VPN is a private tunnel that lets trusted people connect to a work network from outside, and the attackers found that these connections were not protected by a second check, such as a code sent to a phone. Whoever held the password could walk straight in.

That is how a virus reached the control systems of a power grid: not through some movie-style superweapon, but through office emails, a clicked warning, and stolen passwords.

## The night the lights went out

On 23 December 2015, the attackers finally used everything they had learned. Working remotely, they took control of the systems that operate the grid and opened circuit breakers at substations. Circuit breakers are the heavy switches of the electricity world. Opening them cuts the flow of power, and when that happened across the three companies, around 230,000 customers lost electricity, in an outage that lasted roughly one to six hours depending on the area, according to the figures reported by Ukraine's energy ministry and investigators.

The attackers had planned for the repair work too. They corrupted the firmware of devices that translate between network signals and the serial connections used by grid equipment. Firmware is the small built-in software that tells a piece of hardware how to do its job. By damaging it, the attackers made those devices useless, which made bringing the systems back much harder.

They added one more cruel trick. At the same time as the blackout, they flooded the power companies' call centres with junk phone calls. Real customers, sitting in the dark and wanting to report the outage or ask what was happening, could not get through.

In the control rooms, operators faced a frightening sight: the computers they normally trusted could not be relied on. So they did things the old way. Staff travelled to substations and operated the equipment by hand, switch by switch, while the damaged systems were rebuilt. Thanks to that manual work, power returned within hours rather than days.

I find the manual switch detail the most telling part of this story, because in the end it was people with their hands on real equipment, not software, who brought the lights back.

## Who was behind the blackout?

Investigations into the attack pointed in one direction. Investigators, and later the United States government, attributed the operation to a Russian state hacking group known as Sandworm, a team linked to several other major attacks. That attribution is the finding of those investigators and of the US government, and it is how the story is recorded today.

The story did not end in 2015. About a year later, in December 2016, Kyiv was hit by a second, smaller power outage. This one used a related toolset called Industroyer, also known as CrashOverride, reported on by the security firms ESET and Dragos. Industroyer was even more specialised: it was able to speak the power grid's own control languages, the special digital languages that grid equipment uses to talk to itself. In simple terms, the 2015 attackers had to learn to drive the machines by hand through stolen access. The 2016 malware had been taught to drive them on its own.

## How to protect yourself from the same tricks

You may never work at a power station, but the tricks that opened the door in Ukraine are aimed at ordinary office workers and home users every single day. The same habits that would have blocked this attack will protect you too.

**Treat unexpected attachments as strangers at the door.** The whole attack began with Office documents arriving by email. If a file arrives that you were not expecting — even if it looks like it came from a colleague, a bank, or a delivery company — slow down. Ask the sender through a different channel whether they really sent it before you open it.

**Never enable macros in a document you did not ask for.** If an email attachment opens and immediately begs you to "enable content" or switch on macros to see the page properly, that is the trap asking for your permission. A genuine invoice or report from a real company does not need you to press that button. Close the file instead.

**Turn on two-factor sign-in everywhere you can.** The attackers walked into the grid's control network using stolen passwords alone, because the VPN connections had no second check. Two-factor sign-in means that after your password, a code from your phone is also needed. A thief who steals only your password is then still locked out. Switch it on for your email, banking, and work accounts first, because email is the master key to resetting everything else.

**Use a different password for every account.** The attackers harvested login details and reused them to go deeper. If your email password is the same as your shopping password, one leak hands a stranger the keys to both. A password manager can remember long, unique passwords for you, so you only need to remember one.

**Keep backups of what matters.** The Ukraine attack showed how attackers damage systems on purpose to slow down recovery. Keep copies of your important photos and documents somewhere separate, such as an external drive that is not left plugged in, or a trusted cloud backup. A backup you control is the difference between a bad day and a disaster.

**Keep your programs updated.** Infected documents and stolen passwords do most of their damage on systems that have been left unpatched and unprotected. Installing updates for your operating system and office programs closes holes that attackers rely on, and it costs nothing but a few minutes.

## Common questions

### Did the BlackEnergy virus attack really switch off Ukraine's power?

Yes. On 23 December 2015, attackers used access gained through the BlackEnergy 3 malware to remotely open circuit breakers at three regional electricity companies in Ukraine. Around 230,000 customers lost power for roughly one to six hours, based on the figures reported by Ukraine's energy ministry and investigators.

### How did a simple email reach a power grid's control systems?

Staff opened infected Office documents from spear-phishing emails and enabled macros, which installed the malware. Over the following months the attackers stole login details, including passwords for VPN connections that had no second sign-in check, and used that access to reach the systems that operate the grid.

### Who carried out the Ukraine power grid attack?

Investigators, and later the US government, attributed the attack to a Russian state hacking group known as Sandworm. That is their official finding, and it remains the accepted account of who was responsible.

### Why did the attackers flood the call centres with junk calls?

The flood of fake calls was timed with the blackout so that real customers could not get through to report outages or ask for information. It spread confusion, slowed the companies' picture of what was happening, and bought the attackers more time.

### Can I protect myself from this kind of attack?

You cannot stop a state hacking group on your own, but you can block the small tricks that start almost every attack like this. Do not enable macros in unexpected documents, use two-factor sign-in and unique passwords, keep your software updated, and keep separate backups of important files.

## Sources

- Wikipedia — BlackEnergy: https://en.wikipedia.org/wiki/BlackEnergy
- Wired — Inside the cunning, unprecedented hack of Ukraine's power grid: https://www.wired.com/2016/03/inside-cunning-unprecedented-hack-ukraines-power-grid/
