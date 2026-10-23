---
title: "First PC Virus From Lahore"
description: "In 1986 two brothers in a small Lahore computer shop created Brain, the first IBM PC virus — and signed their real names and phone numbers inside it."
pubDate: 2026-10-23T21:50:00+05:00
image: "/images/first-pc-virus-from-lahore.webp"
imageAlt: "An illustration of a cozy 1986 computer room in Lahore with mosque domes on the skyline at dusk seen through the window, and one glowing floppy disk rising like a small star."
category: "Technology"
tags: ["brain virus", "malware", "first pc virus", "lahore", "internet safety"]
---

A telephone rings in a small computer shop in Lahore. Then it rings again. And again. The callers are not customers from the next street — they are strangers speaking from other continents, from universities and offices thousands of miles away, and every one of them is holding the same floppy disk problem. Somewhere on that disk, written in plain letters for anyone clever enough to look, are the shop's own name, its street address in Lahore, and its phone numbers. Two young brothers wrote a tiny program, signed it like a painting, and sent it quietly into the world. The world, very politely and then very urgently, phoned them back.

## The Brain virus: a small program with a famous name

The Brain virus appeared in January 1986, and history remembers it for one enormous reason: it is recognised as the first computer virus ever made for IBM PC-compatible computers — the family of machines that grew into the ordinary Windows PCs sitting in homes and offices today.

Before Brain, computer viruses were mostly a laboratory idea, something researchers argued about in theory. Brain changed that forever. It proved that a small piece of code could travel from machine to machine by itself, carried by ordinary people doing ordinary things. There was barely a public internet in 1986, and Brain did not need one. It had something better: the humble floppy disk, the little plastic square everyone used to carry software from one computer to another.

Its creators were two brothers from Lahore, Pakistan — Basit Farooq Alvi and Amjad Farooq Alvi — who ran a small business called Brain Computer Services. They were not shadowy figures hiding in a basement on the other side of the world. They were shopkeepers, programmers, businessmen, the kind of people you could walk in and talk to. That is what makes this story so different from almost every virus story that came after it: Brain came with a return address.

## What the Brain virus actually did inside a computer

To understand Brain, you have to understand how a computer of that era woke up. Every floppy disk had a tiny special area called the boot sector — the very first thing the computer read when it started up from that disk. The boot sector was the machine's morning instructions: read this first, then load the rest of the system. Whoever controlled the boot sector controlled the first moment of the computer's life.

Brain lived exactly there. It hid inside the boot sector of floppy disks, small and quiet. It did not sit among normal files where anyone might notice it. It tucked itself into the startup area, and it even moved the disk's original boot instructions to another spot and marked that spot as "damaged" so the system would not wander in and find the trick.

### The small mischief it caused

Once awake, Brain was surprisingly gentle by modern standards. It did not delete files. It did not lock documents and demand money. It did not steal passwords — there were hardly any passwords to steal. What it did was slow things down and leave its mark. Reaching the disk became sluggish, because Brain checked every new floppy that entered the drive. And sometimes, an infected floppy disk's label quietly changed to a new name: "(c) Brain".

That little "(c) Brain" tag was the visible tip of something extraordinary hidden deeper inside the code. Written into the virus itself was a small block of text carrying the brothers' real names, the name of their business, their Lahore address and their telephone numbers, inviting anyone who found the program to contact them for a "vaccination" — their word for removing it. Imagine a burglar leaving his home address and phone number engraved on the inside of your front door. Nobody in computing had ever seen anything like it.

## How Brain travelled the whole world on borrowed disks

Brain spread the way gossip spreads — person to person, hand to hand. The steps were simple. A computer started up from an infected floppy disk. Brain woke first, copied itself into the machine's memory, and waited. Then, every clean floppy disk placed into that same machine quietly received its own copy of Brain in its boot sector. The owner noticed nothing. That disk might be lent to a friend, sold with software, posted to another city, or carried in a traveller's bag to another country — and the next computer it touched became a new carrier.

Software copying was the culture of the time. People shared disks constantly. Shops copied programs. Students swapped disks at university. Every act of sharing was also, without anyone knowing, a possible act of transport for Brain. Carried this way inside travellers' floppy disks, Brain crossed oceans and reached the United States, where it caused early alarm at universities as staff began finding the strange "(c) Brain" mark and the mysterious message from Lahore.

A program written by two brothers in one shop in Lahore ended up inside machines at American universities — not through any network or cable, but in coat pockets and suitcases, one borrowed disk at a time. Brain was, in a strange and accidental way, one of the first pieces of Pakistani software the whole world ever ran.

### Why the world started calling Lahore

The message inside the virus did exactly what it offered to do: it brought the world to the brothers' telephone. According to the brothers' own recollections in later interviews, calls began arriving from all over the world — users and researchers who had found the text and wanted the promised "vaccination", or simply wanted to know who these men were. The calls became so many, the brothers recalled, that in the end the phone line had to be cut. Their small shop had become, overnight, the most famous computer address on Earth.

Later profiles of the two men reported that life, somehow, went on: their business continued in Lahore in the years that followed, and the brothers became unlikely celebrities in computing history — the only virus writers the world could simply telephone.

## Why did they write it? The brothers' own explanation

Every virus story has a "why", and this one comes with a warning label: the explanation is the brothers' own account, given by them afterward, and it should be read as exactly that — their side of the story.

The brothers later explained that they had written Brain as an experiment to follow illegal copies of their own medical software. Programs they had written were being copied and passed around without payment. As they told it, Brain was meant to travel with those copies — a quiet tracking device riding inside the boot sector — so they could see how far their stolen software spread. They said it was never meant to destroy data, and on this point the record does agree with them: Brain erased nothing. It slowed disks and renamed them, but it left people's files alone.

Whether you fully believe the explanation or not, the shape of it is fascinating. Two young men, frustrated that the world was stealing their work, built one of the most famous programs in history as a kind of trap — and the trap caught the attention of the entire planet instead of a few local pirates. I have always felt there is something almost poetic in that: the world's first PC virus was not built to rob anyone, but by two shopkeepers trying to stop people robbing them.

## How to protect yourself from Brain's modern grandchildren

Nobody needs to fear Brain itself today — modern systems do not wake up from floppy disks, and the virus belongs in a museum. But Brain's road into computers is still wide open, because that road was never really the floppy disk. The road was trust: a borrowed disk, a shared program, a helpful little object someone handed you. Today that same road is travelled by the mystery USB stick, the borrowed external drive, and the "free software" a stranger offers you. These habits close that road.

**Never start your computer from an unknown disk or USB stick.** Brain's whole trick was living in the startup area, read before anything else. Modern computers can still be set to boot from USB devices. If you find a USB stick in a parking area, a corridor or a conference hall, do not plug it in "just to see" — that curiosity is precisely the doorway this family of tricks has used since 1986.

**Scan borrowed media before opening anything on it.** If a friend or a shop gives you files on a USB stick or drive, let your antivirus scan the whole device first, before you open a single file. This takes a minute and closes the borrowed-disk road almost completely.

**Be careful with "free" copies of paid software.** Brain was born inside the world of copied programs, riding along with software that passed from hand to hand. Pirated software is still one of the most common carriers of malware today, because nobody checks what else is hidden inside a copy. Software from its real maker, or from a proper app store, carries no secret passengers.

**Keep your computer set to start only from its own drive.** In your computer's startup settings, the internal hard drive should come first, and booting from external devices should be off unless you truly need it. This quietly removes the entire boot-sector trick from the table.

**Keep backups of the files you love.** Brain deleted nothing, but many of its descendants are far less polite. A copy of your important photos and documents kept somewhere separate means no virus, polite or cruel, can ever truly take them from you.

## Common questions

### Who created the Brain virus?

Two brothers from Lahore, Pakistan — Basit Farooq Alvi and Amjad Farooq Alvi — who ran a small business called Brain Computer Services. Remarkably, they placed their real names, business address in Lahore and phone numbers inside the virus itself, inviting users to contact them for a "vaccination" against it.

### When did the Brain virus appear?

It appeared in January 1986. It is recognised as the first virus ever created for IBM PC-compatible computers, which is why it holds such a famous place in computing history.

### Did the Brain virus delete people's files?

No. Brain did not erase data. It slowed down access to floppy disks and sometimes changed a disk's label to "(c) Brain". By modern standards it was more mischievous than destructive, though it still alarmed universities and users around the world.

### Why did the brothers say they wrote it?

In their own later explanation, they said Brain was an experiment to track illegal copies of their medical software, which was being pirated. They said it was never intended to destroy data. That is their account of their motives, given in interviews afterward.

### Can Brain infect a computer today?

Realistically, no. Brain lived in the boot sector of floppy disks, and modern computers do not start up from floppies. But its method — arriving on borrowed media that people trust — survives in today's infected USB sticks and pirated software, which is why the protection steps in this post still matter.

## Sources

- Wikipedia — Brain (computer virus): https://en.wikipedia.org/wiki/Brain_(computer_virus)
