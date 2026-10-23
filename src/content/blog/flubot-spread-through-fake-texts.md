---
title: "FluBot Spread Through Fake Texts"
description: "FluBot turned one fake parcel text into a chain reaction across whole countries, stealing bank logins from Android phones as it went."
pubDate: 2026-10-23T21:20:00+05:00
image: "/images/flubot-spread-through-fake-texts.webp"
imageAlt: "An illustration of a giant glowing fake text message bubble with a parcel icon floating over a night city, thousands of smaller fake message bubbles raining down onto people's phones."
category: "Technology"
tags: ["flubot", "android malware", "malware", "smishing", "internet safety"]
---

It buzzes on the table beside the teacup, just as breakfast is being cleared away. A short, ordinary text. Her parcel is on its way, it says, and here is a link to track it. Parcels do come to this house. Nothing about the message feels strange — it even wears the colours and the name of a famous courier company, the kind whose vans pass her street every week. She taps the link with the same finger that, an hour from now, will be scrolling through family photos, unaware that the parcel in that message does not exist. It never existed. There is no box, no van, no delivery driver. There is only an app waiting on the other side of that link — and by the evening, her own phone will be quietly sending the same little lie to every single person in her address book.

That is the journey of FluBot, repeated on breakfast tables across Europe and far beyond during 2020 and 2021.

## What FluBot actually is

FluBot is a piece of malware — harmful software — built to infect phones running Android, the system used by most phones in the world outside Apple's iPhones. On the surface it pretends to be something helpful: a delivery-tracking app, or an app for listening to a voicemail. Underneath, it is a burglar with three jobs.

Its first job is stealing bank logins. When the victim later opens their real banking app, FluBot notices and places a fake login page on top of the genuine one, drawn to look exactly like the bank's own screen. The person types in their details believing they are signing in as usual, but the details travel to the criminals instead. Security experts call this an overlay attack, because the false page is laid over the true one.

Its second job is reading text messages. Modern banks often send a one-time code by text as a second lock on an account: even with your password, a thief should not get in without that code. FluBot simply reads the codes as they arrive, and the second lock quietly stops working too.

Its third job is the one that made it famous. FluBot opens the victim's address book and sends the same fake parcel text — or a fake voicemail message — to every contact it finds. The people receiving it see a message from a number they know and trust: their sister, their neighbour, their workmate. So they tap, they install, and the wheel turns again. The victim is never just a victim; within hours, the victim's phone becomes one of the senders.

## The road a FluBot text travels

Picture the chain of events in order, because each link looks harmless on its own.

First comes the hook. The text says a parcel is coming and offers a tracking link, or it says a new voicemail is waiting and offers a button to listen. Both lures are chosen with care: almost everyone is waiting for a parcel, and almost everyone is curious about a voicemail. The message does not need to fool everybody — only enough people — and it arrives at the moments of ordinary life when a person's guard is down: at breakfast, on a bus, between two tasks at work.

Second comes the fake shop window. The link opens a page built to look like the website of a famous courier company or phone network — the logos right, the colours right. In a helpful tone, the page explains that to track the parcel the person must install the company's app. This is the heart of the trap.

Third comes the unusual step that should ring every alarm bell. The app does not come from the phone's official app store. The page guides the person to download and install it directly — stepping outside the guarded shop where apps are checked, and taking software from a stranger's hands instead. The page makes this dangerous step sound like a boring technical detail, one more button to press so the parcel can be found.

Fourth, once the app is installed, it asks for permissions — the phone's way of asking, "Shall I let this new app read your messages and see what is on your screen?" The requests are dressed up as necessary for the delivery service to work, and the person agrees, because by now they simply want to see where their parcel is. With those permissions granted, FluBot owns the three jobs described above. And fifth, quietly, in the background, the phone begins texting the victim's entire contact list, and the story starts again on somebody else's breakfast table.

## A flood with no single source

Because every infected phone became a sender, there was no single tap to turn off. The criminals barely needed to send texts themselves: once the first phones were infected, those phones did the rest of the work for free. This is why FluBot crossed borders so quickly during 2020 and 2021, with victims reported in many countries including Spain, Germany, the United Kingdom and Australia, and the waves kept reappearing in new places wearing slightly new costumes — a parcel here, a voicemail there.

The human damage followed a cruel pattern. A person would discover, often through their bank, that money had moved out of their account: the fake login page had taken their password, and the stolen text-message codes had opened the second door. Then came the second discovery, sometimes worse than the first — their own phone had been spreading the trap to friends and family. People found themselves apologising down their contact list, warning everyone that the friendly message from their number was not from them at all. The malware stole money, but it also stole something harder to refund: trust in a person's own phone number.

Police forces fought back in stages. In 2021, Spanish police arrested suspected members of the network behind the malware, a step widely reported at the time. But arrests of people do not switch off machines, and FluBot's infrastructure — the hidden system of servers the infected phones reported to — kept standing. The ending came in June 2022, when Europol, the European Union's police coordination agency, announced that an international operation involving eleven countries had dismantled FluBot's infrastructure. Europol described it as one of the fastest-spreading mobile malware operations of its time — easy to believe, given that its engine was simply people's own address books.

For my part, the detail I cannot shake is that the whole empire rested on one tiny, believable sentence about a parcel — proof that the cheapest key to a person's bank account is often a message so ordinary it barely gets read twice.

## How to protect yourself from a FluBot-style trap

The good news is that this entire chain breaks at several points, and breaking any one link is enough.

**Track parcels only inside the courier's real app or website, reached by you.** If you are expecting a delivery, open the courier company's official app yourself, or type the company's address into your browser yourself, and enter the tracking number there. A text message should never be the road to a parcel.

**Never install an app that a text message asks you to install.** This single rule defeats FluBot completely. Real companies distribute their apps through the official app store on your phone. If any page tells you to download an app file directly, or to change a phone setting so an outside app can be installed, stop. That request is the robbery taking place in front of you. Close the page.

**Treat the "install from unknown sources" warning as a locked door, not a nuisance.** Android asks for special permission before installing apps from outside the official store for a reason. If you are ever guided to switch it on for a delivery app, a voicemail app, or anything that arrived by text, the safe answer is always no.

**Be suspicious of perfect timing.** The trap works because the message meets a real expectation. So the rule is not "never believe a parcel text"; it is "a parcel text changes nothing about how I check." Open the courier's app directly. If there is no parcel in the real system, there is no parcel.

**Guard your banking codes like cash.** If money ever does go missing, remember that FluBot-style malware reads texts. Contact your bank through the number on your bank card or inside the official banking app — never through numbers in a suspicious message — and explain that the phone itself may be infected, so passwords and codes must be reset from a clean device.

**Warn your circle fast if your phone sends strange texts.** If friends say they received an odd parcel message from your number, believe them, tell every contact not to tap it, and have the phone cleaned or reset. Speed matters — an infected phone keeps knocking on the doors of people who trust your name.

## Common questions

### Can FluBot infect an iPhone too?

FluBot was built for Android phones, because its whole plan depended on installing an app from outside the official store — something Android historically allowed with permission, and iPhones generally do not. That does not make iPhone owners untouchable: fake parcel texts also arrive on iPhones, where the link usually leads to a fake banking page instead. The lure is the same even when the weapon differs.

### I tapped the link but did not install anything. Am I safe?

Most likely, yes. FluBot needed the fake app installed and given permissions before it could steal logins, read texts or message your contacts; simply viewing the fake page did not plant it on the phone. Still, if you did install the app, treat the phone as infected even if nothing strange has happened yet, because FluBot hides quietly by design.

### Why do the texts come from real people's numbers?

Because the infected phone sends them. FluBot reads the victim's address book and messages every contact from that victim's own phone and number. That is exactly why the trap is so convincing: the warning sign that usually protects us — "this is from a stranger" — is missing. A message from your mother's number can still be a lie if her phone has been taken over.

### The police dismantled FluBot in 2022. Is the danger over?

FluBot itself was taken down by the Europol-coordinated operation, but the method did not retire with it. Fake parcel and voicemail texts remain among the most common lures in the world, used by copycats and new malware families. The names change; the breakfast-table trick stays the same — which is why the defence rules above are worth keeping for good.

### What should I do if I installed the fake app?

Stop using banking apps on that phone, contact your bank from another device or by the number on your card, and explain that the phone may be infected so passwords and security settings can be reset. Then have the phone cleaned or restored to factory settings, and warn your contacts that messages from your number may have been sent by the malware. Acting quickly limits both the theft and the spreading.
## Sources

- Wikipedia — FluBot: https://en.wikipedia.org/wiki/FluBot
- Europol — FluBot takedown announcement (June 2022, Europol press release)
