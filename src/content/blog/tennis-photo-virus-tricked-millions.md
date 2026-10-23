---
title: "Tennis Photo Virus Tricked Millions"
description: "The Anna Kournikova virus promised a photo of the tennis star, carried no photo at all, and still circled the planet in hours."
pubDate: 2026-10-23T19:10:00+05:00
image: "/images/tennis-photo-virus-tricked-millions.webp"
imageAlt: "An illustration of a glowing photo frame email attachment with a tennis racket and ball springing open like a trap, computer code bursting out, with computer cursors eagerly reaching toward it."
category: "Technology"
tags: ["anna kournikova virus", "malware", "computer worm", "email virus", "internet safety"]
---

Picture an office inbox on a grey morning in February 2001. The screen is full of dull subject lines, meeting notes and order forms, and then one message outshines them all, because it promises a photograph of Anna Kournikova, the tennis star whose name half the internet seems to be typing into search boxes that year. A clerk clicks. In another city, a manager clicks. Somewhere inside a government office, a third screen lights up with the same small attachment. Each of these people believes a picture is about to open on the screen.

No picture ever opens. There is no photograph in that email, and there never was. What opens instead is a tiny hidden program. It does not ask permission, it does not show itself, and within seconds it has borrowed the victim's own address book and posted the same tempting promise to every single name inside it. Those people click too, because the message now arrives from someone they know and trust. By the end of the day, the email nobody could resist has travelled around the entire planet.

## What the Anna Kournikova virus actually was

The Anna Kournikova virus appeared on 11 February 2001, and its timing was perfect for trouble. At that moment, Kournikova was one of the most searched-for names on the early internet. Millions of people who had never watched a full tennis match still knew her face from sports pages and advertisements, and the hunger for pictures of her was enormous. The virus did not need to break into anything. It simply wrapped itself in the one thing millions of people already wanted.

The attachment inside the email pretended to be an image file, the kind of file that opens a photograph. In truth it was a small computer script written in Visual Basic, a simple language Windows computers of that era used for little automated jobs. A script is not a picture at all. It is a list of instructions, and when a person opened the attachment, the computer followed those instructions exactly as written.

The instructions were few but effective. The script woke up Microsoft Outlook, the email program sitting on the machine. It read the victim's address book from top to bottom. Then it sent a fresh copy of itself, inside the same tempting email, to every address it found. The worm did not smash files or wipe discs. Its whole design rested on one human weakness: people open what they are curious about.

## How the Anna Kournikova virus spread from inbox to inbox

The worm had no engine of its own and no list of targets. It could only move when a real person helped it, by opening the attachment. That sounds like a weakness, yet it became the worm's greatest strength, because the bait was almost impossible for many people to refuse.

Each new infection produced dozens of new emails at once, since the script mailed itself to every address in the book rather than a small selection. One office worker with two hundred contacts created two hundred new chances for the worm in a single click. The messages also carried a built-in trust trick: they arrived from genuine colleagues, relatives and friends, so the usual suspicion people feel toward strangers never woke up. Within hours of its release, the worm had circled the planet and begun clogging the email servers of companies and government offices, systems that suddenly had to carry a mountain of copies of one small, irresistible lie.

This is the same road the trick still travels today. The photograph changes — sometimes it is a celebrity picture, sometimes a screenshot, sometimes a delivery photo or a funny image a friend supposedly shared — but the mechanism stays identical: an attachment or link that pretends to be a picture and is actually a program or a trap page waiting for a click.

### The second act hidden inside the code

When security analysts later took the worm apart and read its instructions line by line, they found a surprise waiting in the calendar. The script contained a date-based second act set for 26 January. If an infected computer reached that date, the worm was designed to make it join an attack on a Dutch computer retailer's website, flooding that site with so many junk requests that real visitors would struggle to get through. This trick, called a denial-of-service attack, turns thousands of ordinary machines into one crowd hammering on a single door. The photograph that never existed was not only a traveller. On the right morning, it planned to become an army.

## The damage: a planet of choked email systems

The Anna Kournikova virus did not steal money and did not destroy anyone's hard work, yet the damage bill grew quickly, because its cost was measured in time. Email is the road an office runs on, and in February 2001 that road jammed worldwide. Servers at large companies and government offices slowed or buckled under the copying flood. Staff lost hours to full inboxes, warnings, clean-ups and systems that had to be taken down and checked. Estimates of the total damage varied from report to report, and the figures commonly cited ran into the tens of millions of dollars. The lesson inside those estimates matters more than the exact number: a worm that does nothing except copy itself can still cost the world a fortune, simply by arriving everywhere at once.

To my mind, the real virus in this story was curiosity itself, and the little script only built it a road to travel on.

## The student who built it from a kit

The author of the worm was Jan de Wit, a 20-year-old computer student in the Netherlands and, fittingly, a fan of the tennis player whose name he borrowed. The most unsettling detail of the whole case is that de Wit did not write the program line by line like a master craftsman. He assembled it with a free downloadable virus-creation toolkit, a piece of software that let a user pick options and have a working worm produced for them. A weapon that shook the world's email had been built the way a child builds a model from a box kit.

De Wit later explained that he wanted to show how easy it was to create such a worm, and to warn people to be more careful with attachments. Whatever his motive, he did not run far. A few days after the outbreak, he turned himself in to the police in his home town. In September 2001, a Dutch court sentenced him to 150 hours of community service, with no prison time. The creator of one of the fastest-spreading worms of its age walked out of court a free man, and the internet was left to think about how little skill its biggest scare of that year had actually required.

## How to protect yourself from the same trap

The defence against this twenty-year-old worm is the same defence that works against its modern grandchildren. None of it needs expert knowledge.

**Treat every promised picture as a claim, not a fact.** An attachment that calls itself a photo can be a script wearing a photo's coat. Before opening, look at what the file really is, and be suspicious of any picture that arrives as an attachment instead of showing itself inside the message.

**Let celebrity bait cool your click, not heat it.** Attackers choose famous names because fame switches off careful thinking. When a message trades on a star, a scandal or a shocking image, treat that excitement itself as a warning sign and slow down.

**Check with the sender somewhere else.** The worm's messages came from real friends whose address books had been borrowed. If a picture or file arrives unexpectedly, even from someone you trust, ask them about it through a different app or a phone call before opening it. Ten seconds of doubt defeats the whole trick.

**Keep protection switched on and updated.** Antivirus tools and modern email systems are trained to recognise script attachments and known worms. They only protect you while they are running and current, so leave automatic updates on and never silence warnings just to open a file faster.

**Remember the door is the click.** Worms like this one cannot walk through a closed door. They wait, politely, inside a tempting promise, for a person to invite them in. Refusing the invitation is the entire defence.

## Common questions

### Was there really a photograph of Anna Kournikova in the email?

No. The attachment only pretended to be an image file. Inside was a Visual Basic script, and no photograph existed anywhere in the message. Millions of people opened a picture that was never there.

### What did the Anna Kournikova virus do to an infected computer?

It used Microsoft Outlook to send a copy of itself to every address in the victim's address book, then waited for those people to click. It was not built to wipe files, but analysts found code inside it set to join a flooding attack against a Dutch computer retailer's website on 26 January.

### Who created the Anna Kournikova virus, and what happened to him?

It was created by Jan de Wit, a 20-year-old Dutch computer student, using a free virus-creation toolkit rather than writing the code himself. He turned himself in a few days later and, in September 2001, received 150 hours of community service with no prison sentence.

### How much damage did it cause?

Estimates varied between reports, but commonly cited figures ran into the tens of millions of dollars. The cost came from clogged email servers at companies and government offices, lost working hours and the clean-up, rather than from stolen money or destroyed data.

### Can the same trick still work today?

Yes. The promised celebrity photo is still the exact bait behind many fake picture links and malicious attachments in modern messages. The names and apps change, but the defence stays the same: never rush to open a promised picture, and check with the sender first.

## Sources

- Wikipedia — Anna Kournikova (computer virus): https://en.wikipedia.org/wiki/Anna_Kournikova_(computer_virus)
