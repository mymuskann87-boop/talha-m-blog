---
title: "Teenager's Sasser Worm Grounded Flights"
description: "In 2004, an 18-year-old's worm forced computers to restart in an endless loop, and delayed flights, blinded a coastguard and froze banks around the world."
pubDate: 2026-10-23T18:50:00+05:00
image: "/images/teenagers-sasser-worm-grounded-flights.webp"
imageAlt: "An illustration of a big airport at night with frozen blank departure boards and parked planes, and far away the small silhouette of a teenager from behind at one glowing computer."
category: "Technology"
tags: ["sasser worm", "malware", "computer worm", "windows xp", "internet safety"]
---

A departure board flickers in a busy airport, and every flight on it changes at once. Delayed. Delayed. Cancelled. The screens behind the check-in desks are frozen, and the staff are scribbling gate numbers on paper because the computers have stopped obeying them. Now cut to the other side of the planet: a small town in Germany, a quiet teenager's bedroom, one ordinary computer glowing in the dark. Nobody in that airport could have guessed that their ruined day and that small bedroom were connected. But they were. Between them sat a worm called Sasser, and it was about to show the whole world how much damage one small program could do in a single week.

## What the Sasser worm actually was

Sasser was a computer worm — a program that copies itself from machine to machine without asking anyone's permission. It began spreading on 30 April 2004, and it went after computers running Windows XP and Windows 2000, the systems that filled homes, offices, airports and banks at the time.

Its target was a weak spot inside a Windows component called LSASS. Think of LSASS as a guard standing at the front door of the computer, checking who is allowed in. Sasser found a crack in that guard's armour: a flaw that let a stranger slip instructions straight past him. Once the worm pushed its way in, it took control of the machine, installed itself, and immediately started hunting for the next victim.

What the owner of the computer saw was pure helplessness. The machine announced that it was shutting down, showed a countdown of sixty seconds, and restarted — then did it again. And again. The computer was trapped in an endless loop of restarts, too busy rebooting to be used for anything at all. Work sat unsaved. Systems fell silent. And because the worm carried no interest in hiding, every infected machine announced itself the moment it woke up.

## How the Sasser worm spread with no click at all

Most of the famous viruses of that era travelled by email, hiding in attachments and waiting for a curious person to click. Sasser did none of that. Nobody had to open anything, click anything, or even be sitting at the desk. The worm scanned the internet on its own, address by address, searching for computers with that one unpatched flaw in LSASS. When it found one, it broke in by itself, settled inside, and started scanning for the next machine from there.

That is the frightening part of Sasser's design: being careful did not save you. A person could ignore every strange email, never download a single file, and still wake up to a computer stuck in the restart loop, because the only mistake required was being connected to the internet with an out-of-date system.

And here is the detail that still stings. Microsoft had already published a patch — a fix that closed the flaw — about two weeks before Sasser appeared. The worm fed only on machines whose owners had not yet installed that update. Sasser never defeated the world's best security experts. It simply walked through a door that had been fixed, but not yet closed, on millions of computers.

## The week Sasser froze airlines, maps and banks

The restart loop sounds like a private annoyance — one person, one broken computer. But in May 2004, the world's airports, banks and hospitals ran on exactly those Windows systems, and when the worm arrived, they did not fail one at a time. They failed together.

Delta Air Lines was among the hardest-hit names reported at the time: the worm got into its systems, and flights were delayed and cancelled while staff worked around dead computers. Passengers stood in terminals watching plans dissolve, all because machines designed to keep schedules had been reduced to counting down sixty seconds, over and over.

In Britain, the story was stranger and more old-fashioned. The coastguard service lost its electronic mapping system to the worm — the modern maps went dark. So the people who guide ships safely along the coast fell back on the tools of another century: paper charts and pencils. One of the most modern rescue services on Earth was navigating by paper because a teenager's program had found an unpatched computer.

Banks, hospitals and government offices in several countries also reported computer failures during the outbreak, each one the same story in a different uniform: screens frozen, systems rebooting, staff reaching for paper and telephones. I find it hard to shake the picture of that week — the most advanced networks on the planet, undone not by a mastermind's superweapon, but by updates nobody had got around to installing.

## Caught by a reward, tried as a teenager

The hunt for Sasser's creator did not take long. Microsoft had offered a reward of $250,000 for information about the worm, and a tip-off connected to that reward led investigators to a small town in Germany — and to Sven Jaschan, an 18-year-old student. He was arrested about a week after the outbreak began. One bedroom, one young man, and a week of worldwide chaos traced back to a single desk.

Jaschan confessed. He admitted to writing Sasser, and also the Netsky worms, another family of worms that had been flooding email systems in the same period. There was no international gang, no shadowy organisation — just a student who understood one Windows flaw and what could be done with it.

In 2005, a German court put him on trial. Because some of the offences began when he was still 17, he was tried under juvenile law. The court gave him a suspended sentence of one year and nine months, plus community service. He served no prison time. The young man whose worm had grounded flights and blinded a coastguard walked out of court a free man — a punishment many people at the time thought was astonishingly light for the scale of the damage.

## The change Sasser left behind

Sasser's loudest victim was a bad habit: the world's habit of leaving updates for later. The worm proved that "later" is a hole big enough to ground an airline. And the industry heard it. Sasser is widely credited with pushing Microsoft to make its big Windows XP Service Pack 2 update turn the built-in firewall on by default for everyone — protection switched on automatically, instead of being left as a setting most people never found. A firewall would not have fixed the flaw itself, but a generation of computers quietly gained a locked front door because of what Sasser did.

## How to protect yourself from a Sasser-style worm

The good news is that Sasser's whole trick depends on one thing: a computer that has not been updated. Everything below is about closing that gap.

**Install updates as soon as they appear.** This is the single habit Sasser punished. A patch is not a decoration — it is the closing of a door that attackers already know about. Turn on automatic updates for your operating system so the fix lands without you having to remember.

**Keep your firewall switched on.** Your system has a built-in firewall whose job is to block strangers from knocking on the computer's doors from the internet. Sasser reached its victims through exactly that kind of open door. Make sure the firewall is on, and do not turn it off just because a program asks you to.

**Do not leave old systems connected and forgotten.** Sasser ate Windows XP and Windows 2000 machines whose owners had stopped caring for them. An old, unsupported computer plugged into the internet is an unlocked house. Update it, replace it, or keep it offline.

**Restart loops are a warning sign, not just bad luck.** If a computer ever starts shutting down and restarting on its own in a cycle, treat it as a possible infection: disconnect it from the internet so it cannot spread or be reached, and get it checked rather than fighting the countdown.

## Common questions

### Did Sasser need an email or a click to infect a computer?

No. That is what made Sasser different from most viruses of its time. It scanned the internet by itself, found computers with the unpatched LSASS flaw, and broke in without the owner doing anything at all.

### Why did Sasser keep restarting computers?

The worm's attack on the LSASS component made the machine unstable, so Windows kept forcing a shutdown with a sixty-second countdown. The infected computer then restarted, and the cycle began again, leaving the machine almost impossible to use.

### Who created the Sasser worm?

An 18-year-old German student named Sven Jaschan. He was arrested about a week after the outbreak began, following a tip-off connected to Microsoft's $250,000 reward, and he confessed to writing Sasser and the Netsky worms.

### What punishment did the creator receive?

In 2005 a German court tried him under juvenile law, since some offences began when he was 17. He received a suspended sentence of one year and nine months plus community service, and no prison time.

### Can a worm like Sasser still spread today?

A worm exactly like it would have a much harder life now, because firewalls are on by default and updates install automatically on most machines. But the same basic trick — hunting for computers that have not installed a known fix — is still used, which is why fast updating remains the best defence.

## Sources

- Wikipedia — Sasser (computer worm): https://en.wikipedia.org/wiki/Sasser_(computer_worm)
