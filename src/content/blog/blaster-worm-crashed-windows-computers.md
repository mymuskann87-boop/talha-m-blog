---
title: "Blaster Worm Crashed Windows Computers"
description: "In August 2003 the Blaster worm restarted millions of family computers on a 60-second countdown, without a single email or click."
pubDate: 2026-10-23T19:00:00+05:00
image: "/images/blaster-worm-crashed-windows-computers.webp"
imageAlt: "An illustration of endless rows of early-2000s desktop computers all frozen on the same glowing blue crash screen with a reboot shockwave rolling across them."
category: "Technology"
tags: ["blaster worm", "msblast", "malware", "computer worm", "internet safety"]
---

A grey box appears on the screen, and it is already counting. Sixty seconds. Fifty-nine. Fifty-eight. The box says the system is shutting down, and it does not ask permission. Somebody in the family is in the middle of a game, or typing homework, or downloading a song at the speed of a sleepy tortoise, because this is 2003 and the internet still sings through a telephone line. Nobody pressed anything strange. Nobody opened a suspicious email. The computer simply announces that it is about to restart, like a lift politely warning that the doors are closing, except this lift drops you back at the ground floor every single minute.

That ticking box became the most hated sight of the summer of 2003. It belonged to the Blaster worm, and for millions of people it was their very first meeting with a piece of malicious software. Blaster did not knock on the door and ask to be let in. It climbed through a window Microsoft had already described how to lock, almost a month earlier, and found that nearly everybody had left it wide open.

## What the Blaster worm actually was

Blaster, also known as MSBlast or Lovsan, was a computer worm that began spreading on 11 August 2003. A worm is different from an ordinary virus in one important way: it does not need a human helper. A virus usually rides inside a file or an email and waits for someone to open it. A worm crawls from machine to machine on its own, looking for the next unlocked door.

Blaster's target was a flaw inside Windows itself, in a built-in service called RPC, which works through a part of Windows known as DCOM. In simple words, RPC is a messenger that Windows uses to let programs talk to other computers across a network. It is a normal, useful piece of the system. The problem was that this messenger had a weakness, a mistake in its code that a clever attacker could push on until the door bent open. Windows XP and Windows 2000 both carried the flaw.

Once Blaster got inside a computer, it did three things. First, it settled in and arranged to start itself every time the machine switched on. Second, it set the computer hunting, scanning address after address on the internet, searching for more unpatched Windows machines to pour itself into. Third, on many computers it produced its famous calling card: the shutdown countdown. The worm interfered with the very service it had attacked, and Windows, wounded and confused, would announce a system shutdown ordered by "NT AUTHORITY," give the user sixty seconds, and restart. Then it would happen again. And again.

## A patch existed, and almost nobody had it

Here is the part of the Blaster worm story that still teaches the sharpest lesson. Microsoft had released a fix for this exact flaw on 16 July 2003, nearly a month before the worm appeared. The repair was sitting there, free, waiting. But in 2003, updating a home computer was a chore most people never thought about. Automatic updates were not yet a normal habit. Many families connected to the internet only to check email or chat, and a security patch sounded like something for office technicians, not for the family PC in the corner of the room.

So when Blaster began roaming the internet on 11 August, it found a world full of machines that were protected on paper and naked in practice. The worm did not need passwords. It did not need an email with a tempting subject line. It simply called out to computers across the network, asked the broken messenger a poisoned question, and walked in when the door fell open. A brand-new computer, freshly connected and never used for anything risky, could be infected within minutes.

## The sixty-second countdown that drove people mad

The cruel joke of Blaster was not just infection. It was the loop. Imagine trying to fix your computer while it restarts every minute. You cannot finish typing. You cannot read a help page. You cannot even download the patch in peace, because the machine keeps dropping you back at the start. People sat watching that little grey box count down like a bomb in a film, except the explosion was just their own computer switching itself off, over and over, all evening.

That countdown is why Blaster became famous in ordinary homes rather than only in security offices. Other worms stole things quietly. Blaster performed. It wanted nothing from you, really — the famous version of the worm did not demand money or display adverts. It mostly broke your evening and turned your computer into a soldier in its spreading army. Estimates of how many computers it infected ranged from hundreds of thousands upward, and the true number was likely far bigger, because plenty of infected machines belonged to people who never reported anything to anyone.

### The message hidden in the code

Security experts who pulled the worm apart found a taunt buried inside it, aimed at Microsoft's founder: "billy gates why do you make this possible? Stop making money and fix your software!!" It is a remarkable little artefact — a teenager's graffiti sprayed inside a program that was busy knocking over a noticeable slice of the world's computers. The message tells you something about the mood of that era: frustration at software that shipped with holes, anger at a giant company, and a young hacker's wish to be heard. It did not stay a joke for long, though, because the worm carried a second, more serious instruction.

## The attack on Microsoft that never landed

Blaster was programmed with a date. Starting on 16 August 2003, every infected computer was supposed to turn toward one address, windowsupdate.com, and flood it with junk traffic — a denial-of-service attack, where so many machines shout at one website at the same time that the website cannot answer anyone. The plan was elegant revenge: use Microsoft's own infected customers to knock out the very place people would go for the fix.

It failed in a quietly funny way. As reported at the time, Microsoft simply retired that address. The real Windows Update service actually lived at a slightly different address, so the worm's army spent its energy hammering a door that no longer led anywhere. Millions of infected computers fired their flood at an empty room. It is one of my favourite details in the whole Blaster worm story, because it shows that sometimes the smartest defence is not a bigger wall but a changed address and a calm head.

## The teenager, the prison sentence, and the missing author

People often assume the Blaster worm was caught and its creator punished. Only half of that is true. An American teenager named Jeffrey Lee Parson was arrested, but not for the original worm. He had created a modified version called Blaster.B, a copy of the original with changes of his own. He was later sentenced to 18 months in prison. A modified copy is still a serious crime when it harms real people's machines, and the sentence reflected that.

The author of the original Blaster, though, was never publicly identified. Somewhere out there was a person who wrote a program that restarted the world's evenings for a few weeks in 2003, left an angry note to Bill Gates inside it, and then simply vanished from the story. The countdown box became famous. Its maker did not.

## How something like Blaster reaches an ordinary person

Blaster reached people through pure exposure. You did not have to visit a bad website, open a bad attachment or make any mistake at all. Connecting an unpatched Windows XP or Windows 2000 computer to the internet was enough. The worm scanned the network constantly, the way a burglar walks down a street trying every car door handle. Most handles are locked. In August 2003, an enormous number of them were not.

That style of attack never fully disappeared. Modern worms and scanners still roam the internet around the clock, testing old, forgotten software for known holes. The difference today is that the handles lock themselves. Updates install on their own, firewalls arrive switched on, and the operating system nags, warns and finally just does the repair while you sleep. Ordinary readers meet Blaster's descendants whenever a router, an old laptop or a smart device sits unpatched for years — quietly connected, quietly waiting for the one scan that finds it.

## How to protect yourself from a Blaster-style worm

The good news is that the defences against this kind of worm are simple, and most of them are already built into your devices. They just need to be left switched on.

- **Let updates install automatically.** Blaster's whole career depended on a patch that existed but was never installed. Automatic updates close holes before most attackers bother to use them. When your computer or phone asks to restart for an update, that small annoyance is the sound of a door locking.
- **Keep the firewall on.** A firewall is the watchman between your computer and the internet. It blocks strangers from poking at services like the old RPC messenger unless there is a good reason. Windows and other systems ship with the firewall already on — do not turn it off to fix a temporary problem and then forget it.
- **Retire very old systems, or keep them offline.** Windows XP and Windows 2000 no longer receive security fixes at all. An unpatched old machine on the modern internet is exactly the target Blaster hunted. If an ancient computer must be kept, it should not browse the open internet.
- **Restart and finish the job.** Many updates only complete after a restart. A computer that is always postponed is a computer half-repaired.
- **Be suspicious of countdown tricks.** Modern scam pop-ups sometimes imitate shutdown warnings to frighten people into calling fake support numbers. A real system message never asks you to phone a stranger or pay to stop a timer.

Think of updates and the firewall as seatbelts. Nobody enjoys fastening a seatbelt, and for years cars had them fitted while drivers ignored them — until crashes taught everyone why they existed. Blaster was one of computing's big crashes, and the habits it forced on the industry still protect you every day.

## Common questions

### Did the Blaster worm steal money or passwords?

No, the famous original worm did not ask for money or collect passwords. Its damage was disruption: infected computers restarted on a 60-second countdown loop and were used to spread the worm further and to prepare the planned flood against Microsoft's update address. The harm was lost time, broken evenings and machines that could barely be used.

### Why did the shutdown box appear again and again?

The worm attacked a Windows service, and its activity kept making that damaged service fail. When the service failed, Windows announced a shutdown by "NT AUTHORITY," counted down sixty seconds and restarted. Because the worm started itself again with every boot, the cycle repeated until the machine was cleaned and patched.

### Could Blaster infect a computer today?

Not in its original form, because the flaw it used was patched long ago and the Windows versions it attacked are ancient. But its method is still alive: modern malware constantly scans the internet for unpatched software. That is why automatic updates and a switched-on firewall matter so much more now than any single antivirus program.

### Who created the Blaster worm?

Nobody knows publicly. An American teenager, Jeffrey Lee Parson, was arrested and sentenced to 18 months in prison for making a modified copy called Blaster.B. The author of the original worm, the one with the angry message to Bill Gates hidden inside, was never publicly identified.

### How did Microsoft stop the planned attack on its update site?

The worm was set to flood the address windowsupdate.com starting on 16 August 2003. Microsoft retired that address, and since the real update service lived at a slightly different address, the flood poured into an address that led nowhere. The attack spent itself harmlessly while people downloaded the patch from the real service.

## Sources

- Wikipedia — Blaster (computer worm): https://en.wikipedia.org/wiki/Blaster_(computer_worm)
