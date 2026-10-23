---
title: "NotPetya Caused Ten Billion Damage"
description: "NotPetya looked like a $300 ransom note but was really a destroyer, and one poisoned software update cost the world about $10 billion in a single day."
pubDate: 2026-10-23T15:10:00+05:00
image: "/images/notpetya-caused-ten-billion-damage.webp"
imageAlt: "An illustration of a monstrous red wave of computer code with a skull face crashing over a giant container port with frozen ships and cranes."
category: "Technology"
tags: ["notpetya", "malware", "ransomware", "cyberattack", "internet safety"]
---

It is a normal Tuesday morning in an office in Kyiv, Ukraine. Coffee is brewing, computers are waking up, and people are getting ready for a busy day of work. Then a small window pops up on one screen. It is not a warning. It is not an alarm. It is just the office accounting program, M.E.Doc, quietly asking for its regular update, the same friendly update it asks for all the time. Somebody clicks yes, the way anybody would. Nobody in that office knows it yet, but that one small click has just opened the door to the most destructive cyberattack the world had ever seen. The date is 27 June 2017, and before this single day is over, that poisoned update will race through banks, airports, hospitals and giant shipping ports on several continents, and the bill for the damage will climb to around $10 billion.

## What NotPetya is, and what it actually does

NotPetya is a piece of malicious software, a kind of program built to harm computers. The name is a small joke by security researchers. An older, well-known ransomware program was called Petya, and when this new one appeared, it looked similar at first glance, so experts called it NotPetya, meaning "not Petya," because underneath it was something different and far worse.

To understand why it was so much worse, you first need to know what normal ransomware does. Ransomware breaks into a computer, scrambles all the files so they cannot be opened, and then demands money to unscramble them. It is cruel, but there is usually a key, and if the victim pays, there is at least a chance of getting the files back.

NotPetya wore that same costume but played a darker game. Once it got inside a computer, it scrambled the files and then showed a screen demanding $300 in Bitcoin, the digital money, to fix them. Many victims rushed to pay. The terrible secret, which experts discovered as they pulled the program apart, was that paying could never work. NotPetya was not really ransomware at all. It was a wiper, a program whose real job is to destroy. The scrambling was done in a way that could not be undone by anyone, not even by the attackers themselves. There was no working key hidden anywhere. So the $300 demand was basically a mask, and behind the mask was simple destruction: your files are gone, and they are gone forever.

That is the heart of this story. A ransom note promises a deal, however unfair. A wiper promises nothing. NotPetya pretended to be the first while quietly being the second, which is why so many companies lost work they could never recover.

## How NotPetya spread, and how something like it can reach you

The attack began with a trick on trust. Almost every company in Ukraine used a tax accounting program called M.E.Doc, because it made dealing with tax paperwork far easier. Attackers broke into the systems of the company behind M.E.Doc and hid their malicious program inside a normal software update for it. So when thousands of Ukrainian businesses did the safe, sensible thing and updated their accounting software that morning, they were actually installing the attack themselves, straight from the trusted source.

Once inside one computer, NotPetya did not sit still. It moved sideways through a company's whole network at frightening speed, using two clever methods. The first was a stolen trick called EternalBlue, a way of slipping through a weakness in Windows computers that had not been updated, jumping from machine to machine without anyone clicking anything. The second method was even sneakier: the program stole passwords saved on an infected machine and then simply walked into other computers on the network using those genuine passwords, like a burglar who finds the master key ring hanging by the door. One infected machine could therefore bring down an entire office, then an entire company, within minutes.

From Ukraine, it leapt across the world through big international companies whose Ukrainian offices were connected to their networks in other countries. Their computers in Kyiv fell first, and the infection then rode each company's own systems outward to Europe, America and beyond.

Now, could something like this reach an ordinary person? Yes, and it does not need any great drama. Malware reaches normal people through exactly the same doors it used here: a fake or hijacked update, an email attachment from someone whose account was taken over, a program downloaded from a shady corner of the internet, or an old computer that never received its security updates. You do not have to be a bank or a shipping giant to be standing in the path.

## The damage story: one day, ten billion dollars

Inside Ukraine, the strike was heavy and instant. Banks stopped working. Government offices went dark. The Kyiv metro, the train system that carries the capital's crowds, had its payment systems knocked out. Even the radiation monitoring systems at Chernobyl, the site of the famous nuclear disaster, were affected and had to be checked by hand for a time. In a matter of hours, a modern country found large parts of its daily life frozen.

Then the wave rolled outward. The shipping giant Maersk, which moves a huge share of the world's trade in container ships, watched its systems collapse across the globe. Ports could not load or unload properly because the computers that track every container were dead. Maersk later reported losses of about $300 million, and its entire network, tens of thousands of devices, had to be rebuilt from scratch. FedEx's delivery arm, TNT Express, was hit so hard that its reported losses reached about $400 million. The drug company Merck, which makes medicines people depend on, reported about $870 million in damage and disruption. Mondelez, the food company behind well-known snack brands, was also among the big victims.

When governments added everything up, the numbers were staggering. The White House estimated the total damage at about $10 billion and described NotPetya as the most destructive cyberattack in history. The United States, the United Kingdom and other governments publicly blamed Russia for launching it, saying it was aimed at Ukraine and spilled recklessly across the world. Russia denied the accusation, but the official statements from those governments remain on record.

And then there is the strangest rescue in the whole story. Maersk's network worked because of special computers called domain controllers, which hold the master records the whole system depends on. Every single one of Maersk's domain controllers around the world was wiped, except one. A single machine in an office in Ghana had been switched off during a power cut at the exact moment the attack swept through, so the infection never reached it. When engineers discovered that this one sleeping computer still held a clean copy of those vital records, it became a lifeline that helped the giant company rebuild. The biggest shipping firm on Earth was partly saved by a power cut in Ghana. To me, that little switched-off computer in Ghana is the true hero of this story, because it proves that the copy you keep away from the danger is the copy that saves you.

## How to protect yourself from a wiper like NotPetya

You cannot stop every attack, but you can make sure an attack does not take everything you have. These steps are plain, and they work against this whole family of threats.

### Keep an offline backup of your important files

This is the single strongest defence, and it matters most against a wiper. A backup is simply a copy of your photos, documents and work kept in a second place. The key word is offline: copy your files onto an external hard drive or USB drive, and then unplug it and keep it away from the computer. If your computer is infected, NotPetya-style malware can reach anything connected to it, including a backup drive that stays plugged in or a cloud folder that syncs automatically. A drive sitting in a drawer cannot be reached, and that makes it real rescue. Refresh the copy regularly, or it will not hold your recent work.

### Install updates promptly, but from the real source

NotPetya spread so fast partly because it used a weakness in Windows that a fix already existed for. Computers that had installed their updates were far harder for it to jump between. So turn on automatic updates for your system and your apps, and let them install. At the same time, only update programs through their official settings or their real website. A random pop-up on a strange web page shouting that your software is out of date is a classic trap. The M.E.Doc story shows even official updates can very rarely be hijacked, but refusing all updates leaves every known door wide open, which is far more dangerous.

### Be careful what you install and open

Download programs only from their official sites or trusted app stores, and slow down for email attachments and links, even when they seem to come from someone you know, because their account may have been stolen. A few seconds of doubt before clicking is cheap protection.

### Protect your passwords

NotPetya walked through networks using stolen passwords. Use a different strong password for each important account, and turn on two-step verification where you can, the setting that asks for a code from your phone as well as your password. Then one stolen password cannot open every door in your life.

## Common questions

### Was NotPetya really ransomware?

No. It displayed a ransom screen asking for $300 in Bitcoin, but experts who examined it found the files were damaged in a way that could never be reversed. It was a wiper in a ransomware costume, and paying the demand could not bring the files back.

### Why did an attack on Ukraine hurt companies in other countries?

Because big companies are connected. Their Ukrainian offices were joined to the same networks as their offices in Europe and America, so once NotPetya entered through Ukraine, it travelled along each company's own systems to the rest of the world within hours.

### Who was blamed for NotPetya?

The United States, the United Kingdom and several other governments officially blamed Russia, saying the attack was aimed at Ukraine and spread out of control from there. The White House put the total damage at about $10 billion, the highest figure ever attached to a single cyberattack.

### If my files are wiped, can an expert recover them?

In a wiper attack like this one, sadly, almost never. The destruction is designed to be permanent, which is exactly why an offline backup matters so much. A copy kept disconnected from the computer is usually the only way those files come back.

### Could the same trick happen again with another program?

Yes, the door it used still exists in principle: attackers love trusted updates and trusted accounts because people let them in without suspicion. Prompt updates, official download sources and offline backups remain the everyday shield for ordinary people and small businesses.

## Sources

- Wikipedia — NotPetya: https://en.wikipedia.org/wiki/NotPetya
- Wired — The Untold Story of NotPetya, the Most Devastating Cyberattack in History: https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/
