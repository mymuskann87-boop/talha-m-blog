---
title: "First Worm That Slowed Internet"
description: "In 1988, a curious student's experiment called the Morris worm escaped onto the early internet and slowed down one in every ten machines connected to it."
pubDate: 2026-10-23T17:40:00+05:00
image: "/images/first-worm-that-slowed-internet.webp"
imageAlt: "An illustration of a vintage 1988 university computer lab with chunky old monitors and one giant slow glowing worm crawling across all the screens."
category: "Technology"
tags: ["morris worm", "malware", "computer worm", "internet history", "internet safety"]
---

Late at night on 2 November 1988, a 23-year-old graduate student sat down at a computer at MIT and quietly let something loose. It was not a bomb. It was not a theft. In his mind, it was a measuring tape — a small program built to wander the early internet and count how many machines were out there. His name was Robert Tappan Morris, he studied at Cornell University, and his little experiment was about to teach the whole world a lesson nobody had asked for. By the next morning, computers at universities, research centres and military sites across America were groaning, slowing down and grinding to a halt, and nobody could see why. The experiment had escaped its cage.

## What the Morris worm actually was

The Morris worm was a computer worm — a program that copies itself from machine to machine without anyone carrying it, the way a cold passes from person to person in a crowded room. It holds a special place in history because it was the first worm to spread widely across the internet. Before it, computer viruses were mostly small local troubles passed around on floppy disks. This one travelled on its own, through the wires, at its own speed.

Morris later explained that his goal was simple curiosity: he wanted to measure the size of the internet. In 1988 the internet was tiny and cosy compared to today — only about 60,000 machines in total, mostly at universities, laboratories and government sites. It was a friendly neighbourhood where computers trusted each other a great deal. The worm was designed to slip into each machine it could reach, report back nothing harmful, and quietly count. Morris even launched it from a computer at MIT rather than his own university, Cornell, so that the trail would not point straight back at him.

On paper, it was a census. In practice, one design decision turned the census into a flood.

## How the Morris worm spread so far

The worm did not kick down one single door. It carried a whole bunch of keys, and it tried them one after another on every machine it met.

### It slipped through broken locks in Unix programs

Most machines on the early internet ran a system called Unix. The worm knew about weaknesses in two everyday Unix services: sendmail, which carried electronic mail, and a program called finger, which let people look up basic information about other users on a machine. By sending carefully shaped messages to these services, the worm could sneak its own instructions into a machine and get itself running there. The owners had done nothing wrong. The doors simply had hidden cracks, and the worm knew exactly where the cracks were.

### It guessed passwords — and guessed well

The worm also carried a built-in list of common passwords and tried them against people's accounts, along with simple guesses like a person's own username or easy variations of it. In 1988, plenty of accounts were protected by nothing stronger than the user's own first name. When the worm guessed right, it walked in through the front door as if it lived there. This is one of the most remarkable parts of the story to me: the strongest computers of their age were opened by the weakest passwords imaginable.

### It rode on trust between machines

Universities in those days often let their computers trust each other, so a researcher could hop from one machine to another without proving who they were every time. The worm used those trusted connections as bridges. One infected machine became a launchpad into every machine that trusted it, and the web of trust turned into a web of infection.

## The mistake that turned counting into crushing

Here is where the experiment truly escaped. Morris knew that if his worm spread openly, people might fool it by pretending their machines were already counted, so he added a safety trick: when the worm arrived at a machine and was told "a copy is already here," it would sometimes ignore that answer and infect the machine anyway.

The idea was to protect the count. The result was a disaster. Copies of the worm piled up on the same machines again and again. Each copy took a slice of the machine's power, and the slices added up until the machines were spending all their strength running worms and had nothing left for real work. Computers slowed to a crawl and then stopped responding altogether. Nobody's files were being stolen or destroyed — the machines were simply drowning in guests who would not leave.

## The damage the Morris worm left behind

About 6,000 computers were infected. That number sounds small today, until you remember the whole internet held only around 60,000 machines. Roughly one in every ten computers on the internet was caught — about 10 percent of the entire network. The victims were not nobodies: they included universities, research centres and military networks, the very people who had built the internet in the first place.

For days, teams of programmers worked around the clock, unplugging machines, studying the worm's code line by line, and figuring out how to block its tricks. Estimates of the damage and cleanup costs ranged from about $100,000 to several million dollars at the time — real money in 1988, and a shocking bill for a program that was never meant to break anything.

The shock had a lasting gift hidden inside it. The incident led directly to the creation of the first CERT coordination centre, an emergency team set up to handle exactly this kind of internet crisis — the digital world's first fire station, built because the first big fire showed there was none.

## What happened to Robert Morris

The worm's path led investigators back to its creator. Robert Tappan Morris became the first person ever convicted in the United States under the Computer Fraud and Abuse Act, the country's main computer crime law. The court treated him far more gently than a true criminal: he received probation, community service and a fine, but no prison time. The world seemed to accept that this had been reckless curiosity rather than an attack. And in one of history's stranger endings, Morris went on to become a professor at MIT — the very institution from whose computer he had launched the worm.

## How something like the Morris worm can reach you today

You will probably never meet a worm from 1988, but its three tricks are still alive and still aimed at ordinary people. Programs on your phone and laptop still contain hidden cracks, which is why updates exist — a flaw in an app today plays the same role as the cracks in sendmail and finger did then. Guessing weak passwords is still the easiest break-in of all; attackers now use enormous lists of leaked passwords and try them automatically against email and social accounts. And misplaced trust still spreads trouble: a hacked friend's account sending you a strange link, or a shared family login used on ten different sites, is the modern version of those trusting university machines.

## How to protect yourself from worms like the Morris worm

None of the protection steps are fancy, and every one of them answers a trick from 1988.

- **Keep everything updated.** Install system and app updates as soon as they arrive. Updates are where hidden cracks get sealed, and the Morris worm lived inside cracks that nobody had patched.
- **Use a strong, unique password for every account.** The worm opened expensive machines with guesses like a person's own name. A long password that you use in only one place means a guess — or a leak from another site — gets an attacker nothing. A password manager can remember them all for you.
- **Turn on two-step verification.** Even if someone guesses or steals your password, a second code on your phone keeps them locked out.
- **Be careful with shared and repeated logins.** If you use one password for your email, your games and your shopping, one small leak opens everything. Your email password deserves the most care of all, because password resets for almost every other account flow through it.
- **Do not ignore a machine that suddenly runs slowly.** A computer or phone that slows down for no clear reason can be a sign that something unwanted is running on it. Restart it, update it, and run a security scan.

The deepest lesson of 1988 has not changed at all: weak passwords were the biggest hole in the internet then, and they still are now.

## Common questions

### Was the Morris worm meant to be an attack?

No. Morris said he built it to measure the size of the early internet, and the worm did not steal or delete files. The damage came from a design choice that let copies pile up on the same machines until they stopped working, not from any plan to destroy anything.

### How many computers did the Morris worm infect?

About 6,000 machines were infected. Because the internet of 1988 had only around 60,000 computers in total, that meant roughly 10 percent of the entire internet was affected, including universities, research centres and military networks.

### What punishment did Robert Morris get?

He was the first person convicted in the United States under the Computer Fraud and Abuse Act. He received probation, community service and a fine, with no prison time — and he later became a professor at MIT.

### Can a worm like this still spread today?

The exact worm could not, because its tricks depended on old Unix flaws that were fixed long ago. But modern worms still use the same recipe: hidden software flaws, weak or reused passwords, and trusted connections between accounts and devices.

### What did the world gain from the Morris worm?

It forced the internet to grow up. The incident led directly to the creation of the first CERT coordination centre for handling internet emergencies, and it taught everyone — years before the web existed — that passwords and software flaws were serious business.

## Sources

- Wikipedia — Morris worm: https://en.wikipedia.org/wiki/Morris_worm
- FBI — The Morris Worm (history feature): https://www.fbi.gov/history/famous-cases/morris-worm
