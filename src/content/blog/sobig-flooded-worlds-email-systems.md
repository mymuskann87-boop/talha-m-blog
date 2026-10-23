---
title: "Sobig Flooded World's Email Systems"
description: "In August 2003, the Sobig.F worm rose like a flood until roughly one in every seventeen emails on Earth was a copy of the worm itself."
pubDate: 2026-10-23T18:20:00+05:00
image: "/images/sobig-flooded-worlds-email-systems.webp"
imageAlt: "An illustration of planet Earth slowly drowning under a rising ocean made of billions of email envelopes, mail server towers sinking into the flood."
category: "Technology"
tags: ["sobig", "malware", "computer worm", "email virus", "internet safety"]
---

It began with a single drop. Somewhere in the summer of 2003, one ordinary-looking email slipped into one ordinary inbox, and a person clicked it, the way people clicked emails every day without thinking twice. That one click opened a valve. Within days the drops had become a stream. Within weeks the stream had become a river of junk mail pouring through the world's servers day and night. And by late August, the river had risen into something nobody had ever seen before: an ocean of unwanted email so deep that the machines carrying the world's messages were sinking under the weight of it. This was Sobig, the worm that did not break the internet's walls. It simply flooded the streets until nobody could move.

## What Sobig was, and what it did inside a computer

Sobig was not one single worm. It was a family of email worms released one after another during 2003, each new version named with the next letter of the alphabet: Sobig.A, Sobig.B, Sobig.C, and so on, like waves arriving on the same shore. Each wave was a little different from the one before it, and each one taught the next how to swim better. The final and biggest wave, Sobig.F, appeared in August 2003, and it was the one that turned a bad season into a historic flood.

Once Sobig got inside a computer, it settled in quietly and went to work. It searched through many kinds of files stored on the machine, looking for one thing: email addresses. Every address it found — friends, family, customers, work contacts, addresses buried in old documents — went into its collection. Then the worm started sending itself out to those addresses, thousands of fresh copies flowing outward like water finding every crack in a dam.

The truly sneaky part was the sender line. Sobig did not send mail from the infected computer's owner. Instead, it picked an address from the very list it had stolen and put that name on the "from" line instead. So the poisoned email landing in your inbox might appear to come from your brother, your boss, or a company you trusted — when really it had been poured out by a stranger's infected machine on the other side of the world. People who received angry complaints about emails they never sent were part of the flood too, blamed for water that had never passed through their hands.

Sobig had one more job. Besides spreading itself, it quietly turned infected computers into hidden relay stations for spam. In technical language these are called open proxies, but the simple picture is this: the worm drilled a secret back door into the machine, and spammers could then route their own junk mail through it. Your computer became a pumping station in someone else's flood, pushing out advertising and scams while you slept. This is one reason experts linked Sobig to the business of spam for hire — the worm looked less like a prank and more like plumbing built for people who earned money from junk mail.

## How the Sobig flood spread from inbox to inbox

Sobig reached ordinary people the plainest way possible: through email, dressed as email. It arrived as a message with an attachment, the sort of message that looked routine enough to open before your morning tea went cold. It did not need you to be careless or foolish. It needed you to be normal, because in 2003 opening attachments from people you knew was simply what email was for.

What made Sobig unusually powerful was that it carried its own built-in mailing engine. Most viruses of that era borrowed the victim's email program to send themselves onward, which gave the owner at least a chance of noticing strange messages sitting in a sent folder. Sobig needed no one's program. It was its own post office, its own truck, and its own flood, all in one small package. It could pump out copies of itself in enormous numbers without leaving an obvious trail on the screen.

And every new infection raised the water level for everyone else. One flooded computer sent the worm to every address it had collected. Each of those computers, once infected, sent it onward again. The math of a flood is brutal: the water does not add up, it multiplies. By the peak of Sobig.F in August 2003, the email security company MessageLabs estimated that roughly one in every seventeen emails moving around the entire world was a Sobig.F message. Imagine seventeen letters sliding through a mail slot, and one of them is not a letter at all but a bucket of water thrown at the house. That was daily life on the internet that summer.

## The damage the Sobig flood left behind

A flood does not need to smash anything to ruin your day. It only needs to rise high enough that normal life becomes impossible, and that is what Sobig did to businesses around the world. Company mail servers — the machines whose whole job is to carry messages in and out — spent their days drowning in worm traffic instead of doing real work. Genuine emails arrived late or got lost in the current. Workers opened their inboxes each morning to find them silted up with hundreds of copies of the same poisoned message, and IT teams fought the rising water with filters the way townsfolk stack sandbags, one desperate layer at a time.

The flood spilled beyond office desks, too. Air Canada reported check-in delays during the outbreak, which the airline connected to the worm's flood of traffic — a reminder that when the pipes of email clog badly enough, even aeroplanes feel it. Across the world, the costs in lost working hours, slowed systems, and cleanup were estimated in the billions of dollars. Nobody can point to one dramatic explosion with Sobig. The damage was slower and wider: millions of small delays, in millions of places, all adding up like water damage spreading through the walls of a house.

Then came the strangest part of the whole story. Every Sobig variant carried a built-in expiry date, a fixed day written into its code in advance, after which the worm would simply stop spreading. Sobig.F's stop date was 10 September 2003. And on that date, the waters did exactly what the code had promised: they stopped rising. No police raid shut it down. No hero pulled a plug. The flood ended because its maker had scheduled its end before it even began, which left investigators with an eerie question — whoever built this had planned it like a season, with a beginning and an end already marked on the calendar.

Microsoft wanted that person found. The company offered a $250,000 reward for information about the creator, under its new antivirus reward program. The reward was never claimed. To this day, the person or group behind one of the biggest floods in internet history has never been identified.

## How to protect yourself from an email flood

The good news in this old story is that the sandbags work, and most of them are simple habits anyone can build.

**Treat every unexpected attachment as deep water.** If a message arrives with a file you were not expecting — an invoice, a document, a photo — do not open the attachment just because the message looks routine. Sobig survived on routine. A surprising attachment deserves a pause, every single time.

**Do not trust the sender line blindly.** Sobig's cleverest trick was writing a stolen name on the envelope. An email that claims to come from your bank, your cousin, or your own company may have been written by none of them. If a message from a "known" person feels even slightly strange — an odd request, an unusual file, a tone that is not theirs — check with that person through a different channel before you click anything.

**Keep your software updated.** Worms pour through cracks, and updates are how the cracks get sealed. Let your operating system and your antivirus install their updates promptly instead of postponing them for weeks. An updated machine is a house with its doors above the waterline.

**Use a good spam filter and let it work.** Modern email services catch far more junk than the systems of 2003 could, but only if the protection is switched on and its warnings are respected. When your email service flags a message as dangerous, believe it. The filter is the sandbag wall — do not climb over it out of curiosity.

**Slow down at the moment of the click.** Nearly every part of Sobig's flood depended on one person, somewhere, opening one message without a second thought. Two seconds of doubt at that exact moment is worth more than any expensive cleanup afterwards. I find it humbling that the biggest email flood in history was not powered by some unstoppable machine, but by millions of perfectly ordinary clicks from people who were simply busy.

## Common questions

### Was Sobig a virus or a worm?

Sobig is classed as a worm, and the difference matters. A classic virus needs a person to pass an infected file along, while a worm like Sobig carried its own mailing engine and spread itself automatically from machine to machine. That self-spreading engine is exactly why the flood rose so fast in 2003.

### Why did Sobig stop on 10 September 2003?

Because its creator wrote an expiry date into the code before releasing it. When that date arrived, Sobig.F stopped spreading, just as programmed. Nobody outside the creator's circle knows why the date was set, and the creator has never been identified, so the reason remains one of the case's open mysteries.

### Did Sobig steal money or personal information?

Sobig's main jobs were spreading itself and turning computers into hidden spam relays that spammers could use. It harvested email addresses from infected machines, which is a real privacy harm, but it was not primarily built to empty bank accounts. Its damage came from the sheer volume of junk traffic it created and the spam it helped others send.

### Could a flood like Sobig happen again today?

Email defences are far stronger now, and a worm copying Sobig's exact methods would meet filters and protections that did not exist in 2003. But the basic recipe — ordinary-looking messages, trusted names on the envelope, and one quick click — still works on human beings, which is why attachment caution remains the single most useful habit any email user can build.

### Who created Sobig?

Nobody knows. Microsoft offered a $250,000 reward for information about the creator under its antivirus reward program, but the reward was never claimed and no one was ever publicly identified. The case is still one of the great unsolved mysteries of the early internet.

## Sources

- Wikipedia — Sobig: https://en.wikipedia.org/wiki/Sobig
