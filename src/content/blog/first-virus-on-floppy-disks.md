---
title: "First Virus On Floppy Disks"
description: "A 15-year-old's harmless joke called Elk Cloner became the first computer virus to spread in the wild, riding from friend to friend on borrowed game disks."
pubDate: 2026-10-23T22:00:00+05:00
image: "/images/first-virus-on-floppy-disks.webp"
imageAlt: "An illustration of a giant floppy disk flying like a friendly flying saucer between chunky 1982 home computers with green glowing screens."
category: "Technology"
tags: ["elk cloner", "malware", "first computer virus", "apple ii", "internet safety"]
---

Imagine it is 1982, and your best friend hands you a floppy disk with a grin. The grin is the problem. You know that grin. It means the game on this disk has been tampered with, and somewhere in the middle of playing, something silly is going to pop up and tease you. All of his disks are like that now, and honestly, you have stopped borrowing them. So the boy behind the grin faces a challenge no young prankster can resist: how do you deliver a joke to people who refuse to take it from your hands? His answer was simple, cheeky, and historic. He made the joke deliver itself.

That boy was Rich Skrenta, a 15-year-old American high-school student, and his self-delivering joke was a small program he called Elk Cloner. Without fully realising it, he had just written the first microcomputer virus to travel "in the wild" — moving between real people's machines, outside his own computer, without anyone carrying it there on purpose.

## A prankster who had worn out his welcome

To understand Elk Cloner, you first have to understand the prank habit that created it. Skrenta owned an Apple II computer, one of the first truly popular home computers, and he loved teasing his friends through it. He would secretly change the games on disks he lent out, so that mid-game the screen would do something unexpected and funny, aimed right at whoever was playing.

The trouble with a prank is that it only works while people still trust you. His friends learned. They began treating every disk from his hands as a trap, and some stopped accepting his disks at all. For most teenagers that would have been the end of the hobby. For Skrenta it became a puzzle: could a program travel on its own, hitching a ride on a disk, so quietly that nobody would notice it had boarded?

The answer he built had no villain's plan behind it. There was no money to steal, no files to ruin, no revenge to take. There was only a schoolboy's pride and a question about what a small program could do if it was allowed to copy itself. The most famous virus of the floppy disk age was born from the same motivation as a whoopee cushion: it would be funny, and everyone had to see it.

## What Elk Cloner is, and exactly what it does

Elk Cloner is what experts call a boot sector virus, so let us unpack that in plain words. A floppy disk in those days had a tiny starter area called the boot sector — the very first instructions a computer read when a disk was used to start up. Elk Cloner hid in that starter area of game disks. When someone booted the game, the virus woke up before anything else, slipped into the computer's memory, and quietly took up residence there.

Once sitting in memory, it waited patiently. Every time another floppy disk was used in that machine, the virus copied itself into that disk's boot sector too. Nobody saw this happen. The game played normally, the screen looked normal, and the new disk left the house carrying a passenger its owner knew nothing about.

Then came the punchline, and it was wonderfully modest. The virus counted. On every 50th start from an infected disk, instead of the usual game, the computer displayed a short, playful poem Skrenta had written for the occasion. In the poem, the little program introduced itself almost like a proud pet. It boasted, in rhyme, that it was a program with a personality, that it would climb onto your disks, sneak into your chips, and amuse itself by playing games with your display. That was the entire performance: forty-nine quiet journeys, then a small bow on the fiftieth.

That is all Elk Cloner did. It spread, it hid, and once in a while it announced itself with a rhyme. There was no secret second act, no hidden theft, and no damage buried in the code waiting for a date.

## How Elk Cloner spread from desk to desk

Elk Cloner's spreading method sounds slow today, but in 1982 it matched the way computer life actually worked. There was no internet in homes. Software hopped between computers physically, on floppy disks that were lent, borrowed, swapped and copied among friends. A good game could pass through twenty hands in a school term, and each hand carried it to a new machine.

The virus fitted that world perfectly. A friend would borrow an infected game disk, run it once, and the virus would settle into that computer's memory. The next clean disk used in that computer — perhaps a disk full of homework or another game — would be quietly infected in turn. When that disk travelled back to its owner's house, or onward to a third friend, the cycle repeated. Nobody posted anything, nobody downloaded anything, and nobody clicked anything suspicious. A disk simply had to be in the wrong drive at the wrong moment.

From Skrenta's school friends, the virus travelled further than he ever expected, disk to disk, in an age when a program's longest journey was the bus ride to another town. Experts later looked back and recognised what had happened: this was the first time a microcomputer virus had been seen spreading in the wild, as a real traveller among ordinary users, rather than sitting in a laboratory or on its creator's desk.

For my part, I find something almost sweet in the fact that computing's first wild virus wanted nothing more than to be read aloud — a poem doing a small lap of honour around a school district.

## The damage story: honestly, there almost wasn't one

Most virus stories on any blog are really disaster stories with a body count. Elk Cloner refuses to cooperate. It erased nothing. It stole nothing. It did not corrupt files, crash machines or hold anyone to ransom. The full extent of its "attack" was appearing, uninvited, in poem form, once in every fifty starts.

That sounds like no story at all, yet the smallness is exactly what makes Elk Cloner worth remembering. It still caused real surprise and real annoyance. Imagine a friend finally working out why a strange rhyme keeps turning up on his screen, and realising the answer is a program he never agreed to install, living on disks he thought he knew. Even a harmless passenger is still a passenger you never invited. People who discovered it had to hunt it down and clean their disks, and the boy who wrote it earned a reputation that followed those disks everywhere.

The bigger damage was to an idea: the comfortable belief that your computer only ever ran what you chose to run. Elk Cloner proved, in 1982, that software could travel by itself, hide in a place almost nobody checked, and announce itself only when it felt like it. Every dangerous virus that came after it used the same basic moves — hide in the startup path, copy quietly, reveal yourself on your own terms. Skrenta's joke was harmless, but the doorway he demonstrated was not, and the world eventually had to build locks for it.

As for Skrenta himself, life carried him well past the prank. He grew up to become a known technology entrepreneur, helping to found the Open Directory Project and later the search engine Blekko. The schoolboy who once smuggled a poem onto his friends' disks ended up building tools used by millions, which feels like a fitting second act for the first virus writer in the wild.

## How to protect yourself from travelling programs

Elk Cloner is long gone, but its method is not. Things still hitch rides on whatever we pass hand to hand — today that means USB sticks, borrowed external drives, and shared files rather than floppy disks. One careless plug-in can still carry home a passenger, exactly as one borrowed game disk did in 1982. These habits keep the door shut:

- **Treat every borrowed drive like a borrowed disk in 1982.** A USB stick from a friend, a colleague or a printing shop has been in other machines you know nothing about. Scan it with your antivirus before opening anything on it, every single time.
- **Turn on automatic scanning for removable media.** Most modern antivirus tools can check a drive the moment it connects. If yours offers that option, switch it on, so the check happens even on the day you forget.
- **Be careful with files people hand you.** A document or program sent by a friend can carry more than the friend intends — their machine may be infected without them knowing, which is precisely how Elk Cloner moved between honest people.
- **Do not boot your computer from unknown media.** Elk Cloner lived in the startup area for a reason: whatever runs first runs deepest. Only start a computer from drives and disks you fully trust.
- **Keep your system and antivirus updated.** Modern protections know the old hiding places, including startup sectors and sneaky auto-run tricks, but only when they are current.

None of this needs to be fear. The lesson of Elk Cloner is friendly, really: sharing is lovely, but a quick scan is the polite way to accept a gift from another computer.

## Common questions

### Was Elk Cloner really the first computer virus ever?

It is best described as the first microcomputer virus found spreading in the wild. Earlier experimental programs and larger mainframe curiosities existed, but Elk Cloner was the first on home computers to travel between real users on its own, which is why it holds its famous place in history.

### Did Elk Cloner damage any computers?

No. It contained no harmful payload at all. It erased nothing and stole nothing; its only visible act was showing a short poem on every 50th start of an infected disk. The worst it caused was surprise, annoyance, and the effort of cleaning disks.

### How did people get rid of Elk Cloner in 1982?

Because it lived in the boot sector, users had to overwrite or replace the infected startup area of a disk, or simply stop using infected disks. There was no antivirus industry yet, so the clean-up relied on knowledgeable users sharing instructions — an early taste of how security advice would spread for decades.

### Could a virus spread on physical disks still matter today?

Yes, in spirit. USB sticks and external drives play the role floppy disks once did, and infected removable media still turns up in real incidents. The technology changed; the rule did not. Anything that has been plugged into another machine deserves a scan before it joins yours.

### Why did Rich Skrenta write Elk Cloner?

For the joke of it. His friends had stopped trusting the game disks he altered by hand, so he built a prank that could lend itself. It was a schoolboy's experiment in self-copying code, never intended to harm anyone — and by luck and design, it never did.

## Sources

- Elk Cloner — Wikipedia: https://en.wikipedia.org/wiki/Elk_Cloner
