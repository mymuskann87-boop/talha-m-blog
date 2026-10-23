---
title: "Good Worm That Fixed Computers"
description: "In August 2003 the Welchia worm broke into unpatched computers through the same hole as the Blaster worm — then deleted Blaster, tried to install Microsoft's patch, and removed itself."
pubDate: 2026-10-23T23:00:00+05:00
image: "/images/good-worm-that-fixed-computers.webp"
imageAlt: "An illustration of a friendly glowing green worm wearing a small medic cap, patching a broken computer with bandages of light while traffic jams of glowing data pile up behind it."
category: "Technology"
tags: ["welchia", "nachi worm", "malware", "good worm", "internet safety"]
---

Picture a street late at night. Every house on the street has the same broken lock. A burglar has been slipping through those locks for days, wrecking rooms as he goes. Then, one evening, a second stranger arrives. He forces the same broken locks. He climbs through the same windows. But once inside, he does something nobody expects: he hunts down the burglar's mess, cleans it up, tries to fit a brand-new lock on the door, and then quietly leaves.

That is a lovely story, until you remember one small detail. Nobody asked him in. And while he works, his ladder, his toolbox and his truck are blocking the entire street, so nobody else can get through.

In August 2003, the internet lived that story for real. The helpful intruder was a computer worm called Welchia, also known as the Nachi worm. It broke into computers without permission, through the exact same hole a criminal worm was using — and then it tried to fix them. This is the strange tale of the worm with kind intentions, and why security experts still say its kindness was part of the problem.

## What Welchia (Nachi) is, and exactly what it does

A computer worm is a program that copies itself from machine to machine without anyone sending it. Unlike a virus, which needs a person to pass an infected file along, a worm travels on its own, hunting for computers it can enter by itself.

Welchia was a worm with a mission that sounded almost noble. When it got inside a computer, it did three remarkable things, in order.

First, it searched the machine for the Blaster worm — a destructive worm that had begun racing around the world only days earlier, in the same month of August 2003 — and it deleted Blaster wherever it found it. Welchia was, quite literally, a hunter of another worm.

Second, it tried to download and install Microsoft's official security patch. That patch was the repair Microsoft had released for the Windows flaw both worms were using. In other words, Welchia did not just remove the burglar from your house; it tried to fit the new lock that would keep every burglar out.

Third, it carried a self-destruct instruction. Welchia was programmed to remove itself after a period of time, and analysts documented that it was set to delete itself by 2004. The intruder planned to tidy up, mend the lock, and vanish.

That sounds like the behaviour of a hero. Hold on to that thought, because the rest of the story complicates it.

## How Welchia spread — through the same hole as the criminal

Here is the part that should make anyone pause. Welchia did not knock politely. It spread through the exact same Windows flaw that Blaster used. It broke into unpatched computers, uninvited, in precisely the same way as the criminal it hunted.

"Unpatched" is the key word. Software companies release patches — small repair updates — when they discover a hole in their programs. A computer that has not installed the patch still has the hole wide open. In August 2003, enormous numbers of computers around the world had not yet installed Microsoft's repair for this particular flaw. To a worm, each one of those machines was a house with a broken lock and the door swinging in the wind.

So how can something like this reach an ordinary person? Easily, and silently. Your computer does not need you to open a strange email or visit a dangerous website. If your machine is connected to the internet and the hole is unpatched, a worm can find it and walk in while you are making tea. You have clicked nothing. You have agreed to nothing. Blaster could arrive that way — and so could Welchia, right behind it, wearing its little medic's cap.

Two intruders, one broken lock, and the owner of the house has no say in either visit. That is the world an unpatched computer lives in.

## The damage story — Blaster's wreckage, and the harm the "good" worm caused

To understand why anyone might cheer for Welchia, you first have to see the mess Blaster was making. Blaster was the genuine villain of August 2003: a fast-spreading worm pouring through the same Windows flaw, infecting unpatched machines on a huge scale and disrupting the computers it landed on. Days of this was quite enough for the world. So when analysts realised a second worm was entering machines, deleting Blaster and attempting to install the cure, some people were tempted to applaud.

Then the complaints started — about Welchia itself.

Welchia's heart seemed kind. Its traffic was not. To find new computers to rescue, Welchia scanned the internet constantly and aggressively, sending out a flood of searching signals. Multiplied across countless infected machines, that flood became noise on a massive scale, and the noise clogged networks. Congestion problems were reported at the time on real, important systems — including the US State Department's consular network. Think back to our street: the helpful intruder's truck, ladder and tools, spread across every road in the city, all at once. Ambulances included. His repairs were real. So was the traffic jam.

And there was a deeper problem, one that had nothing to do with traffic. Welchia entered people's computers, searched through them, deleted files and attempted to change the system's software — all without the owner's knowledge or consent. Its author was unknown and never publicly identified. Nobody could phone him. Nobody could check his work, limit what he touched, or hold him responsible if his "repair" went wrong on some unusual machine. A patch installed badly, or a file deleted wrongly, could break a computer just as thoroughly as any criminal's work — and the owner would have no idea whom to blame.

Security experts gave a unanimous verdict, then and since: a "good" worm is still a worm. Breaking into someone's computer without permission is wrong and dangerous even with a first-aid kit in your hand, because nobody controls what the intruder will touch or break. Kind intentions do not come with a steering wheel.

## How to protect yourself — mend your own lock, quickly

The beautiful irony of the Welchia story is that the cure for both worms was identical, free, and always in the owner's hands. Neither the villain nor the vigilante could enter a patched computer. Every practical step below flows from that single fact.

**Install updates promptly.** When your system offers a security update, treat it as a locksmith's visit you have already paid for. The Welchia and Blaster story happened because millions of machines sat unpatched while a repair existed. Turning on automatic updates is the closest thing to a perfect defence against this entire family of trouble: the hole closes before any worm, kind or cruel, comes knocking.

**Restart when updates ask you to.** Many patches only finish their work after a restart. A downloaded-but-not-installed repair is like a new lock still sitting in its box by the door.

**Keep a firewall switched on.** A firewall watches the doors of your computer and blocks uninvited arrivals. Modern systems include one by default; your job is simply not to turn it off.

**Be suspicious of anyone who "fixes" your computer uninvited.** This lesson runs in both directions. Software that enters without permission is a threat even when it smiles — and the same is true of humans. If a stranger phones claiming your computer is infected and offering a repair, that is the human version of Welchia's knock, except the intentions are rarely kind. Real repairs are ones you request, from companies you chose.

**Keep backups of the files you love.** If any worm — destructive, helpful, or clumsy — damages your machine, a backup turns a disaster into an inconvenience. Photos, documents and work files deserve a copy somewhere separate.

Honestly, I find something almost touching in the Welchia story — a mysterious stranger spending August 2003 mending strangers' locks — but a lock mended by an intruder is still a house that was broken into. Mend your own. It takes minutes, it costs nothing, and it keeps out the burglars and the vigilantes alike.

## Common questions

**Was Welchia really trying to help?**
Its behaviour strongly suggests so. It deleted the Blaster worm, attempted to install Microsoft's official patch for the hole both worms used, and was programmed to remove itself by 2004. Whoever wrote it built a repair tool that travelled like a worm — but because it entered computers without permission, experts still classify it as a worm, not a cure.

**How did Welchia get into computers if nobody downloaded it?**
It used the same Windows flaw as Blaster. Any connected, unpatched computer could be found and entered automatically, with no clicks or downloads by the owner. That is what makes worms different from ordinary viruses: they do the travelling themselves.

**What harm did Welchia actually cause?**
Its constant, aggressive scanning generated heavy network traffic that clogged systems; congestion problems were reported at the time on real networks, including the US State Department's consular network. It also changed and deleted software on machines without consent, which is risky in itself — an uncontrolled "repair" can break things, and the owner has no one to hold responsible.

**Do "good worms" exist today?**
The idea resurfaces whenever a bad worm spreads, but the expert consensus reached in the Welchia era has not changed: unauthorised access is unauthorised access. Modern security practice fixes other people's computers through official update systems that users have agreed to — never through self-spreading intruders.

**What is the single best lesson from the Nachi worm?**
Patch quickly, yourself. Both Blaster and Welchia were stopped by the same small act: installing the update Microsoft had already released. If the lock is mended in time, neither the criminal nor the helpful intruder can get through it.

## Sources

- Wikipedia — Welchia: https://en.wikipedia.org/wiki/Welchia
