---
title: "REvil Hit Thousand Businesses Overnight"
description: "The REvil gang slipped its ransomware through one trusted IT tool and locked up around 1,500 businesses around the world on a single holiday weekend."
pubDate: 2026-10-23T20:00:00+05:00
updatedDate: 2026-10-29
image: "/images/revil-hit-thousand-businesses-overnight.webp"
imageAlt: "An illustration of one giant master key made of glowing red code unlocking a thousand office doors at once across a night-time city skyline."
category: "Technology"
tags: ["revil", "sodinokibi", "ransomware", "kaseya attack", "internet safety"]
---

Picture a caretaker who looks after a whole street of small shops. Every evening, he walks down the street with one master key in his pocket. The bakery trusts him with it. So does the pharmacy, the print shop, the little travel office, and the family grocery. With that one key, he can open any door on the street, check the locks, fix a leaking pipe, and leave everything safe and tidy before morning.

Now picture a thief who does not bother picking a single lock. He simply steals the caretaker's master key.

That is almost exactly what happened in July 2021, except the street was the whole world, the shops were real businesses, and the key was a piece of computer software. A criminal gang called REvil found a way to use one trusted tool — one key — and by the time shop owners woke up, around 1,500 businesses had been locked out of their own computers.

## What REvil is, and what its ransomware actually does

REvil, also known by the name Sodinokibi, was not a single hacker sitting in a dark room. It worked more like a business that rented out burglary tools.

The gang's creators built a type of harmful software called ransomware. Ransomware is a program that sneaks into a computer and scrambles its files — documents, photos, accounts, customer records — using a secret code, so that nothing can be opened or read. The files are still sitting there on the machine, but they look like meaningless gibberish. The criminals then leave a note: pay us money, and we will give you the key that unscrambles your files. Refuse, and your business stays frozen.

Here is the part that made REvil different from a lone criminal. The creators did not carry out most of the attacks themselves. Instead, they rented their ransomware to other criminals, called affiliates. An affiliate is like a partner who does the dirty work: the affiliate breaks into a company's computers, spreads the ransomware, and pressures the victim to pay. When a ransom is paid, the money is shared between the affiliate who did the break-in and the REvil creators who built the weapon.

This rental model is called ransomware-as-a-service, and it explains why REvil grew so fast. One skilled team wrote the software once, and dozens of other criminals could then use it again and again, each going after their own victims. The gang did not need to attack every business personally. They only needed their key to work — and for other people to carry copies of it into building after building.

But even REvil's affiliates usually had to break in one company at a time. The Kaseya attack was frightening because it skipped all of that. It turned one break-in into fifteen hundred.

## The Kaseya attack: how one tool opened every door

To understand this attack, you first need to understand how small businesses look after their computers. A small shop, clinic, or office usually cannot afford its own full-time computer expert. So it hires an outside IT support company to do the job. That IT company installs special software on the business's computers so its technicians can connect from far away — fixing problems, installing updates, and keeping everything running without ever visiting the shop.

One of the popular tools built for this job was called Kaseya VSA. It is remote management software: software that lets trusted technicians reach into many computers at once and care for them. For an IT company looking after hundreds of client machines, a tool like this is precious. It is, in every sense, a master key.

On 2 July 2021 — just before the American Independence Day holiday weekend, when many offices would be closed and staff would be away — REvil struck. The gang found a weakness in Kaseya's system and pushed its ransomware through that trusted management channel. In simple words: instead of knocking on fifteen hundred doors, REvil poisoned the key ring itself.

The poison spread in a chain. First, it reached the IT support companies that used Kaseya VSA. Then, through those companies' normal, trusted connections, it flowed onward into the computers of their clients — the small and medium businesses that had done nothing wrong and had never even heard REvil's name. Around the world, roughly 1,500 businesses downstream were reported affected.

Then came the demand. REvil did not ask each little shop for a small payment. The gang demanded 70 million dollars for a single universal key — one master decryption key that would unlock everyone at once. One key had locked the street; the gang now offered to sell back one key to open it.

If you run a small business, this is the lesson that should make you sit up. You can be careful. You can train your staff, choose good passwords, and lock your own doors properly — and still be hit, because the attack never came through your door at all. It came through the trusted tools of the company that manages your computers. An attacker who compromises your IT provider's software inherits the provider's trusted access to you. That connection, which you welcomed in for help, becomes the road the criminals drive down.

## The damage: a long weekend with no keys

For the businesses caught in the attack, the damage was immediate and practical. Computers that a business depends on every day — for sales, bookings, records, and customer service — were locked. Work stopped. Staff could not open the files they needed. Owners had to decide, under stress and on a holiday weekend, whether to wait for help, rebuild everything from backups if they had any, or consider the gang's enormous demand.

The timing made everything worse. The attack landed right before a major holiday weekend in the United States, which meant fewer technicians were available, offices were empty, and many victims discovered the disaster slowly, one by one, as they tried to start their working week.

Then something strange happened. Days after the attack, REvil's websites suddenly vanished from the dark web — the hidden part of the internet where the gang showed off its victims and received its demands. The gang that had just demanded 70 million dollars went silent.

The explanation only came months later, and it sounds like a scene from a film. As FBI officials later described it, the FBI — working with international partners — had already obtained a working decryption key weeks earlier. Rather than announce it at once, investigators quietly held on to it while their operations continued, and used it to quietly help some victims unlock their systems without the world knowing where the key had come from. When the gang finally released a universal key publicly, it appeared victims no longer needed to pay for what investigators could already help them recover.

The final act of the story came in January 2022. Russia's FSB security service announced that, at the request of the United States, it had raided addresses, arrested REvil members, and seized money, cars, and computers. For one of the most feared ransomware gangs in the world, it was a public and humiliating end: the people who had sold a master key to lock everyone else's doors had their own doors opened by the police.

In my view, the saddest part of this story is that most of those 1,500 businesses had never been careless at all — they were simply standing behind a door that somebody else was trusted to guard.

## How to protect yourself and your small business

You cannot control everything, but this attack teaches clear, practical lessons that any small business or ordinary computer owner can use.

**Ask what tools can change your computers — and who controls them.** If an IT company looks after your machines, ask a simple question: what software do you use to connect to our computers, and who can use it to make changes? A good provider will answer plainly and happily. This is now basic safety, the same as asking who holds the spare keys to your shop.

**Limit powerful software to only what is needed.** Management tools are master keys, so they should be protected like master keys. They should only be reachable by the people who truly need them, protected with strong passwords and an extra verification step at sign-in, and never left wide open to the whole internet when that is not necessary.

**Keep backups that criminals cannot reach.** A backup is a spare copy of your important files. Keep at least one copy disconnected from your main system — for example, on a drive that is unplugged after copying, or in a separate account the everyday system cannot erase. If ransomware ever scrambles your files, a clean offline backup means you can rebuild without paying anyone.

**Patch and update quickly.** Attacks like this one live inside weaknesses in software. Updates often exist to close exactly those holes. Turning on automatic updates, and not delaying them for weeks, removes the easy doors attackers look for.

**Make a plan before the bad day arrives.** Decide in advance: if our computers were locked tomorrow, who do we call, where are our backups, and how do we keep serving customers? A business with a plan panics less and recovers faster — and never has to consider a criminal's price tag in a moment of fear.

## You may also like

- [Shamoon Wiped Thirty Thousand Computers](https://talhablog.com/blog/shamoon-wiped-thirty-thousand-computers/)

## My Take: REvil attack proves trusted tools need tighter guarding

REvil, also known as Sodinokibi, did not usually break into one company at a time. It rented its ransomware to affiliates, in a model called ransomware-as-a-service, sharing the money when a ransom was paid. On 2 July 2021, just before the American Independence Day holiday weekend, the gang found a weakness in Kaseya VSA, software used by IT support companies to look after many client computers at once. It pushed ransomware through that trusted channel. Around 1,500 businesses downstream were reported affected. REvil demanded 70 million dollars for a single universal key. Days later its websites vanished, the FBI had quietly obtained a working key, and in January 2022 Russia's FSB announced arrests.

My judgement is that this attack changes who should feel responsible for safety. A small shop can train staff, choose good passwords, and lock its own doors, and still be hit. The attack never came through its door. It came through the trusted tools of the company managing its computers. Most of those 1,500 businesses had never been careless at all. They were standing behind a door somebody else was trusted to guard. A thief who picks one lock harms one shop. A thief who steals the caretaker's master key can open every door on the street. Management software is that master key, because it lets technicians reach many computers at once. That power is why the tool is precious, and why it must be guarded: reachable only by people who truly need it, protected with strong passwords and an extra verification step, and never left wide open to the internet when that is not necessary.

What should the reader do differently? First, ask the IT provider plainly what software it uses to connect to your computers, and who can use it to make changes, and expect a clear answer. Second, keep at least one backup disconnected from the main system, on a drive unplugged after copying, so a clean copy means rebuilding without paying anyone. Third, decide in advance who to call, where backups are, and how customers will be served if computers are locked tomorrow. Patch and update quickly, and make a recovery plan before the bad day arrives. The common mistake is to judge victims by asking what they did wrong. The better question is what the provider did, and what the victim could have controlled anyway. Trust itself can be the road criminals drive down. Guard the trusted roads as carefully as the front door.

The ending of the story also carries a lesson about timing and quiet work. The attack landed just before a holiday weekend, when fewer technicians were available and many victims discovered the disaster slowly. The FBI had quietly obtained a working decryption key weeks earlier and held it while operations continued, helping some victims unlock systems without the world knowing where the key came from. When the gang later released a universal key publicly, victims no longer needed to pay for what investigators could already help them recover.

## Frequently Asked Questions

**What does REvil's other name, Sodinokibi, mean?**

Sodinokibi is simply the second name by which security researchers and reports identified the same ransomware operation. The gang, its rental model, and its attacks are the same under both names. News stories from that period use the two names interchangeably.

**Did the 1,500 businesses pay the 70 million dollars?**

No single payment of the full demand is part of the reported story. The gang demanded 70 million dollars for one universal key, but investigators had quietly obtained a working decryption key, and the gang later released a key publicly. Many victims were able to recover with help rather than by paying the gang.

**How could one piece of software reach so many businesses at once?**

Because IT support companies each look after many client businesses through that one tool. When the tool's trusted channel was poisoned, the ransomware flowed from the IT companies into all their clients' computers in a chain. That is why security people call this a supply-chain attack: poison one trusted supplier, and everyone downstream is served the poison.

**If my IT company is attacked, is there anything I can do?**

Yes. Your own disconnected backups, your own records of important accounts, and a recovery plan that does not depend only on your provider all protect you. You should also agree in advance how your provider will inform you quickly if something goes wrong on their side, so you can disconnect and respond early.

**Is REvil completely gone now?**

The January 2022 arrests by Russia's FSB, announced at the request of the United States, broke up the group as it existed then, and its sites had already vanished from the dark web. But the ransomware-as-a-service idea it popularised did not disappear — other gangs copied the model, which is why the lessons from this attack still matter today.

## Sources

- Wikipedia — REvil: https://en.wikipedia.org/wiki/REvil
