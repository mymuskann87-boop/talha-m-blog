---
title: "Virus Gangs Fought Online War"
description: "In 2004 the Netsky and Bagle worm gangs battled for control of ordinary home computers, hiding insults for each other inside their own code."
pubDate: 2026-10-23T19:30:00+05:00
image: "/images/virus-gangs-fought-online-war.webp"
imageAlt: "An illustration of two playful cartoon robot mascots, one blue and one red, facing off like rival chess players across a giant circuit-board chessboard, flags raised."
category: "Technology"
tags: ["netsky", "bagle", "malware war", "computer worm", "internet safety"]
---

Picture a security researcher late at night, opening a captured computer worm the way a detective opens a seized letter. She expects the usual things: code that steals addresses, code that sends spam, code that hides. Then, buried in the middle of the program, she finds a rude message. It is not aimed at her. It is not aimed at the police, or at the antivirus companies, or at the victim whose computer was stolen. It is aimed at another gang of criminals.

That was 2004, the strangest year in the history of computer worms. Two rival families of malicious programs were fighting a street war across the internet. They never met. They never spoke on the phone. They fought entirely through hidden messages tucked inside their own code, and the battlefield was not some secret military network. The battlefield was the ordinary home computer: the family PC in the corner of the living room, the small office machine, the laptop a student used for homework. Those quiet machines were the soldiers, and neither army had asked their owners for permission.

## What Netsky and Bagle really were

Bagle arrived first, spotted in January 2004. Netsky followed just a few weeks later, in February 2004. Both were email worms, which means their whole way of life was built around one simple journey: arrive in an inbox as an attachment, trick someone into opening it, and then use that person's computer to send out many more copies of themselves.

Once a worm like this settles into a machine, it does quiet, useful work for the strangers who wrote it. It collects email addresses stored on the computer, sends itself onward to those addresses, and turns the machine into a spam sender, a hidden post office pushing out junk mail on command. One infected computer is worth little. Ten thousand of them, obeying the same distant owner, become a valuable army that can flood the world with spam.

A third family, MyDoom, was already famous by early 2004 and joined the shouting from the side. So at times the argument had three voices, each one claiming the territory of infected computers, each one insisting the others were amateurs. The families grew in a peculiar way. Instead of one perfect version, the authors kept releasing variant after variant, marked with letters of the alphabet. Bagle.A, Bagle.B, Netsky.A, Netsky.B, and on and on, dozens of them. Each new letter was a fresh attempt to slip past antivirus tools and, just as importantly, to push the rival family off machines it already held.

To me, the saddest part is that the prize in this loud war was never money in a vault, but the quiet family computer sitting in someone's living room.

## How Netsky and Bagle spread to ordinary people

Neither worm needed to break down a door with fancy hacking. They knocked politely, dressed as email.

The usual trick went like this. A message landed in your inbox carrying a small file. The message was written to make you curious or a little worried, the way junk mail still is today, because worry and curiosity make fingers move faster than caution. If you opened the attachment, the worm woke up inside your computer. It read your address book and any addresses it could find stored on the machine, then it mailed copies of itself to those people, using your computer as the sender. Your friends and family received the poisoned message from an address they trusted, which made them more likely to open it too, and the chain rolled on.

This is how a worm can reach a person who has never done anything reckless at all. You do not need to visit a strange corner of the internet. You only need to know somebody who opened the wrong attachment before you did. Your machine could then be recruited without any visible drama. It might run a little slower. It might send mail you never wrote, at hours when you were asleep. Most owners had no idea their computer had enlisted in anyone's army.

Both families worked in broadly this way, because this was the proven road into homes in 2004. Email was the front door of the internet for ordinary families, and a trusted name in the sender line was the best key ever made. The gangs understood that perfectly, and they spent their energy fighting over who got to use your key more often.

## The war Netsky declared on Bagle inside the code

Plenty of criminals compete quietly. These ones could not resist performing.

Security researchers who pulled the worms apart found taunting messages written inside the code itself, aimed from one gang at the other. The messages were never shown to victims. They were love letters in reverse, written for an audience of rivals and researchers, and the newspapers of the day happily reported that a genuine war of words was running inside the world's infected computers. Every new variant was partly a weapon and partly a reply.

Then Netsky did something that made even experienced analysts sit up. Some versions of Netsky, after taking over a computer, searched the machine for infections from the rival families. If they found Bagle or MyDoom living there, they removed them. Read that slowly, because it is the oddest fact in this whole story: a piece of malware cleaned a computer. Not out of kindness, of course. Netsky was not a doctor making house calls. It was a gang member throwing a rival gang's furniture out of a house it wanted for itself. The computer stayed infected, stayed owned, stayed useful for spam. It simply changed flags.

Territory mattered, and territory meant machines. A computer cleaned of Bagle and filled with Netsky had not been rescued. It had been captured. Meanwhile the letter race accelerated, fresh versions appearing every few days, each side trying to be the one antivirus programs recognised last.

## The damage done by the Netsky and Bagle war

The victims were never the gangs. The victims were the people whose computers slowed down under the strain, whose inboxes filled with worm copies and junk, and whose own email addresses were used to spread the mess to their friends. Businesses lost working hours to flooded mail systems and cleanup work. Owners paid in confusion as much as in money: their machine was sending things they never wrote, and they often only learned about it when an angry contact replied to a message they never sent.

The war also damaged the gangs themselves, which is the one cheerful part of the tale. All that noise attracted attention. Police and security firms watched the fight closely, and the endless stream of new variants gave investigators a mountain of samples to compare, which helped them understand both families quickly. Criminals who shout in public, even in code, leave the lights on for the people hunting them.

There were consequences with names attached on one side of the fight. Sven Jaschan, a German student who also wrote the Sasser worm, confessed to writing the Netsky family. The people behind Bagle were never identified, although they were widely believed to be connected to spam businesses, which fits the whole logic of the war: whoever controlled the most infected machines controlled a powerful machine for sending junk mail. The shouting stopped eventually, as families faded and defenders learned their tricks, but the pattern they set never really left us. Modern criminal tools still fight over infected machines, still remove rivals, still treat your computer as ground to hold.

## How to protect yourself from worm wars like Netsky and Bagle

The pleasant surprise in this story is that the defences are plain and they still work, because the basic trick has not changed. Worms want a careless click, an unprotected machine, and software left old and full of holes.

Keep an antivirus program running and let it update itself. In the Netsky and Bagle days, new variants appeared every few days, and an antivirus tool that was a week behind was nearly blind. The same is true now: the protection is only as fresh as its last update, so automatic updates are not a luxury, they are the whole point.

Install system and app updates promptly. Many infections succeed through flaws that were already fixed by the maker, in machines whose owners kept postponing the restart. An update is a lock being repaired while you sleep. Put it off for months and you are living in a house whose broken lock has been announced in the newspaper.

Be suspicious of attachments, even friendly ones. The worms of 2004 travelled between people who trusted each other, which is exactly why they travelled so far. If a message feels odd, if the attachment is unexpected, if a friend suddenly sends a file with no real explanation, check through another channel before opening it. A ten-second phone call defeats a trick that crossed the world.

Finally, remember that strange behaviour is a clue worth acting on. A computer that sends mail by itself, runs hot and slow for no reason, or gets replies to messages you never wrote deserves a full antivirus scan, not a shrug. Catching an infection early keeps your machine out of every army, including the ones fighting each other.

## Common questions

### What is the difference between Netsky and Bagle?

Both were email worms from early 2004 that spread through attachments and turned home computers into spam senders. Bagle appeared in January 2004 and Netsky in February 2004. The famous difference is their rivalry: they insulted each other in hidden code messages, and some Netsky versions actively removed Bagle infections from machines they captured.

### Did Netsky really remove other viruses?

Yes, some versions did, but not to help you. Netsky searched infected computers for rival worms such as Bagle and MyDoom and deleted them, then kept the machine for its own spam work. The computer remained infected and controlled; it had simply changed owners.

### Who wrote Netsky and Bagle?

Sven Jaschan, a German student who also wrote the Sasser worm, confessed to writing the Netsky family. The authors behind Bagle were never identified, though they were widely believed to be linked to spam businesses. That difference is part of why the war is still talked about today.

### Can a worm war like this happen again?

The exact families are history, but the behaviour never disappeared. Criminal tools today still compete for infected machines, remove rival malware, and hide messages and tricks in their code. Your protection is the same pair of habits: working antivirus and fast updates.

### How would I know if my computer joined a botnet army?

Warning signs include mail being sent that you never wrote, replies to messages you do not recognise, and a machine that runs slowly or noisily for no clear reason. None of these signs is proof on its own. A full scan with an updated antivirus program is the sensible next step, followed by changing important passwords from a clean device if an infection is found.

## Sources

- Wikipedia — Netsky: https://en.wikipedia.org/wiki/Netsky
- Wikipedia — Bagle (computer worm): https://en.wikipedia.org/wiki/Bagle_(computer_worm)
