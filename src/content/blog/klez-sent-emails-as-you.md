---
title: "Klez Sent Emails As You"
description: "Klez was an email worm that framed innocent people by sending its poisoned messages under stolen names, and its forgery trick is still in use today."
pubDate: 2026-10-23T18:30:00+05:00
image: "/images/klez-sent-emails-as-you.webp"
imageAlt: "An illustration of a long row of plain white envelopes where one glowing envelope in the middle wears a fake smiling mask and a stolen name tag."
category: "Technology"
tags: ["klez", "malware", "computer worm", "email virus", "internet safety"]
---

Picture a normal morning in 2002. You sit down with your tea, open your inbox, and expect the usual: a bill, some office mail, maybe a note from a friend. Instead, your screen is full of anger.

Strangers have written to you, demanding to know why you sent them a virus. A company says a message from your address infected one of its computers. Your own inbox is stuffed with error notices — "message could not be delivered" — for emails you are sure you never wrote. You were asleep when some of them were supposedly sent.

You scan your computer. It looks perfectly clean. You tell people it was not you, and you can almost hear them not believing you.

This nightmare was the speciality of one worm. It did not need your password, your money or your files to hurt you. It only needed your good name. It was called Klez.

## What is the Klez worm?

Klez is a computer worm. A worm is a harmful program whose main talent is copying itself: it slips onto one computer, finds the addresses of other computers, and mails itself onward, again and again, without any person carrying it.

Klez was first seen in late 2001. Like many successful infections, it did not arrive as one finished weapon. It appeared in version after version, each release a little stronger than the one before. The version that conquered the world was called Klez.H, released in April 2002. For months afterwards, security companies were reporting the same finding: Klez was the most widespread virus in the world, the infection they were seeing more than any other.

Once Klez landed on a machine, it behaved like a busy burglar. It searched the computer for email addresses — in the address book, in saved messages, in ordinary files. It prepared infected emails to send to those addresses. It brought a helper virus along with it. And some versions quietly waited for particular dates, when they would overwrite the victim's files and destroy what was in them.

But none of that is what made Klez famous. Plenty of worms spread by email. Klez became a legend because of one filthy little trick with the sender's name.

## The Klez trick: your name on somebody else's crime

Every email carries a "From" line — the name and address of the sender. Most people read it the way they read a signature on a letter: as proof of who sent it.

Klez forged that signature every single time.

When an infected computer sent Klez onward, the worm did not use the address of the machine it was actually on. Instead, it picked one of the addresses it had collected — completely at random — and stamped that address as the sender. The poisoned email then travelled under a borrowed identity. It might look as if it came from a stranger in another country. It might look as if it came from your office colleague. It might look as if it came from you.

Now follow the consequences, because they land on real people. The truly infected computer stays hidden and keeps sending. Meanwhile, the owner of the borrowed address receives everything: the angry replies from people who got the infected mail, the warnings, and the automatic bounce-back notices that mail systems send out when a message cannot be delivered. That person has an uninfected computer, an honest story — and no way to prove either.

To me, this is what makes Klez scarier than worms that simply deleted files: it turned ordinary people into suspects, and it made neighbours, friends and workmates doubt each other over something none of them had done.

## How Klez spread so far, so fast

Klez's favourite road was email, and email in 2002 was a trusting place. An infected message arrived looking like it came from someone real, and the person who received it opened it the way anyone opens mail from a familiar name.

Worse, opening it was not always necessary. Some popular email programs of that time showed a preview of a message using parts of Internet Explorer, the web browser. A flaw in the way those programs handled a piece of the message's hidden labelling — known as the MIME header flaw — meant Klez could sometimes start running when a message was merely previewed in the reading pane. A person could be infected by doing nothing more than clicking once to see what a message was.

Klez did not depend on email alone. In offices, computers often shared folders across the local network, and Klez could copy itself into those shared folders too, waiting there for another machine to pick it up.

And it did not travel alone. Klez dropped a second virus, called Elkern, onto the machines it infected, so one infection quietly became two. It also turned on the guards: Klez attacked antivirus software on the machine, trying to put the very programs that could catch it out of action. A worm that forges names, brings a partner, and fights the security guard is a worm built to survive — and for months, Klez did exactly that.

## The damage: blame first, broken files second

The most visible damage was the flood. For months, Klez was reported as the most common virus in the world, which meant inboxes everywhere filling with infected mail, error notices and arguments. Every forged message created two victims: the person who received it, and the innocent person whose name was on it.

The quieter damage happened on the infected machines themselves. Some versions of Klez were set to overwrite files on certain dates, wiping out documents and work. The Elkern virus it installed added its own harm. And the attack on antivirus software meant some infections lasted far longer than they should have, because the tool that would have removed them had been knocked out first.

But the longest-lasting damage was a lesson, and the internet learned it the hard way: the "From" line of an email proves nothing. Anyone — or anything — can write any name on an email. Klez taught millions of people that a familiar name is not a promise of safety, and that lesson has never stopped being useful.

## Klez is gone, but its trick still visits your inbox

Klez belongs to the early 2000s, and modern email programs have long since closed the preview hole it used. But the forgery at the heart of Klez never retired. Modern scam emails and virus emails still arrive wearing borrowed names — a bank, a delivery company, a government office, or even a friend whose address a criminal has copied.

So the pattern should feel familiar by now: a message carrying a trusted name, asking you to open a file or act quickly. That is the Klez costume, still in use. The defence is the same one innocent people needed in 2002 — do not treat the sender's name as proof of anything.

## How to protect yourself from Klez-style tricks

**Do not trust the From line.** Treat the sender's name as a claim, not as a fact. Before you believe a surprising message, look at what it wants you to do: open a file, click a link, send something urgently. Tricks need speed; checking needs only a minute.

**Check through a different door.** If a friend or colleague seems to send you a strange file or an odd request, do not reply to that same email. Message them on a different app, or simply call them, and ask if they really sent it. This one habit defeats the borrowed-name trick completely, because you are asking the real person, not the costume.

**Keep your email app, browser and system updated.** The preview attack worked because of a flaw in old software, and updates are how flaws like that get closed. Turning on automatic updates protects you against whole families of old tricks without your having to think about them.

**Keep antivirus on — and notice if it stops.** Klez went out of its way to attack antivirus software. If your protection ever switches itself off or stops updating, treat that as a warning sign and run a full scan, because something may be fighting it.

**Be careful with attachments from familiar names.** A known name on an unexpected file is exactly the pattern Klez used. A file you were not expecting deserves suspicion, whoever it appears to come from.

**If people accuse you of sending a virus, stay calm.** Your address may simply have been borrowed, the way Klez borrowed thousands of addresses. Run a full antivirus scan of your own machine to be sure it is clean, and then explain, plainly, that email sender names can be forged. Being the name on a bad email is not the same as being its sender.

## Common questions

### What is Klez in simple words?

Klez is an email worm that first appeared in late 2001. It copied itself from computer to computer through email, and its strongest version, Klez.H, arrived in April 2002 and was reported for months as the most widespread virus in the world.

### If a virus email says it is from my friend, did my friend send it?

Not necessarily — and with Klez, usually not. The worm stamped a random address it had found on the infected computer into the sender line, so the mail wore someone else's name while the real infected machine stayed hidden.

### How could Klez infect a computer if the email was never opened?

Some email programs of the time previewed messages using parts of Internet Explorer, and a flaw in how they handled the message's hidden labelling could let Klez start during that preview. The victim only had to select the message to look at it.

### What extra damage did Klez do besides spreading?

Klez dropped a second virus, Elkern, onto infected machines, and it attacked antivirus software to defend itself. Some versions were also set to overwrite files on certain dates, destroying the victim's documents.

### What should you do if strangers say you are sending them viruses?

Do not assume your computer is guilty: your address may have been forged as the sender, just as Klez forged addresses. Run a full antivirus scan to be certain your machine is clean, then tell people honestly that sender names on email can be faked.

## Sources

- Wikipedia — Klez: https://en.wikipedia.org/wiki/Klez
