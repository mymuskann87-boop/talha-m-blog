---
title: "First Computer Virus Ever Created"
description: "What was the first computer virus? Creeper, a playful 1971 program that hopped between ARPANET computers, printing a taunt wherever it landed."
pubDate: 2026-10-23T10:40:00+05:00
updatedDate: 2026-10-29
image: "/images/first-computer-virus-ever-created.webp"
imageAlt: "An illustration of an old 1970s computer with a playful program hopping from machine to machine along glowing cables."
category: "Technology"
tags: ["Creeper", "computer virus history", "ARPANET"]
---

Picture a computer room in 1971. The machines are the size of wardrobes, there are no screens like the ones on your desk today, and messages come out on a teletype, a kind of electric typewriter that prints on paper. A teletype starts chattering on its own. Out comes a line that nobody in the room typed:

**I'M THE CREEPER: CATCH ME IF YOU CAN**

Then, some time later, the same taunt appears on a machine in another city. Nobody carried it there. Nobody mailed it. The message had travelled by itself, through the wires, and it was daring the engineers of the early computer age to come and catch it. That playful dare is where the story of the computer virus begins.

## A network small enough to know by name

To understand the joke, you first have to understand how small the computer world was in 1971. Long before the internet connected billions of people, there was ARPANET, an experimental network built for the United States Department of Defense. It linked a modest collection of research computers, mostly at universities and laboratories, so that scientists could share work across long distances.

At a company called BBN Technologies in Massachusetts, an engineer named Bob Thomas was exploring a daring question: could a program leave one computer, travel across the network, and set itself up on another computer entirely on its own? Programs in those days stayed where you put them. Software that could pack up and move sounded like something from science fiction.

Thomas wrote a small experimental program to test the idea, and he gave it a name with a grin behind it: Creeper. It is often said that he borrowed the name from a villain in the Scooby-Doo cartoons, which fits the mischievous spirit of the thing perfectly.

## The program that packed its own suitcase

Creeper was built for one particular family of machines: DEC PDP-10 mainframes running an operating system called TENEX, which several ARPANET sites used. When Creeper arrived on such a machine, it did not smash anything, steal anything or hide anything. It simply announced itself on the teletype with that famous line about catching it, and then it moved on to the next machine.

That word "moved" matters. In its first form, Creeper did not leave copies of itself scattered everywhere. It behaved more like a travelling guest than an invader: it would leave one computer as it entered another, so it existed in one place at a time. A colleague of Thomas at BBN, Ray Tomlinson, later reworked the experiment so that Creeper could copy itself as it travelled, meaning it could exist on several machines at once. That self-copying version is the one historians point to when the argument about "firsts" begins.

The whole playground was tiny. Only around 28 machines on ARPANET ran the TENEX system Creeper needed, so that was the largest world it could ever have roamed. The people running those machines were collaborators in the same research community, and Tomlinson later explained that permission was asked before the experiment ran on their computers, and that there were no surprise side effects. Creeper deleted no files and damaged no data. Its only crime was turning up uninvited and being pleased with itself about it.

## Virus, worm, or something in between?

Here is where honest history gets a little untidy, because Creeper is usually crowned "the first computer virus," yet strict experts often call it the first computer worm instead. The difference is simple enough for anyone to follow.

A computer virus, in the modern sense, hides inside another file or program. It cannot really travel alone. It waits until someone runs the infected file, and then it spreads. A worm is different: it is a complete program that travels across a network by itself, with no need for a host file and no need for a person to open anything.

Creeper travelled by itself across a network, which is worm behaviour. It did not infect files, which a true virus does. So why does the "first virus" title stick to it? Partly because the very words "virus" and "worm" were not settled vocabulary in 1971, and partly because Creeper was the first program of any kind to show the world the essential trick: software that spreads from machine to machine without being carried by hand. Whether you file it under virus or worm, every security expert alive is still dealing with the idea Creeper demonstrated in 1971.

## Enter the Reaper: the hunter program

A taunt like "catch me if you can" practically begs for an answer, and the answer came from inside the same building. Ray Tomlinson, the BBN colleague who had earlier tinkered with Creeper's code, built a second travelling program in 1972 and named it Reaper.

Reaper had one job: cross the ARPANET the same way Creeper did, hunt down copies of Creeper wherever they were hiding, and delete them. It moved from machine to machine like a quiet cleaner following a muddy trail. When it found the Creeper, it removed it. When the trail ran cold, the world's first great software chase was over.

That makes Reaper, by most accounts, the first antivirus program in history. Think about what that means. The first virus-like program and the first program built to destroy such a thing were born in the same small research community, within about a year of each other, as parts of the same experiment. Defence did not arrive late to this story. Defence was there at the birth, because the same curious minds that asked "can a program travel?" immediately asked the follow-up question: "and can another program stop it?"

The playful duel even left a mark on computer culture. The clash between Creeper and Reaper is credited as an inspiration for Core War, a later programming game in which programs battle each other inside a computer's memory.

## The prank leaves the laboratory: Elk Cloner and Brain

Creeper lived in a closed garden of friendly researchers. The next chapters escaped into the real world, and they arrived with the personal computer.

In 1982, a 15-year-old American student named Rich Skrenta wrote a program called Elk Cloner for Apple II computers, as a joke on his friends. It hid on floppy disks, the small plastic disks people used to swap games and programs. Every time an infected disk started up a computer, Elk Cloner quietly installed itself, ready to jump onto the next clean disk inserted into that machine. On every fiftieth start, instead of working normally, the computer displayed a teasing poem that began, "Elk Cloner: The program with a personality." Skrenta seeded it at his school and his computer club, and because nobody in 1982 had heard of a computer virus or knew to guard against one, it spread far beyond his circle and kept surfacing on Apple II machines for years.

Then came 1986 and a program called Brain, the first virus for IBM PC computers. It travelled on floppy disks too, and it was created by two brothers in Pakistan who ran a computer business. Deep inside the program, they placed their shop's phone number, like a signature in wet cement. Brain proved that this was no longer a classroom prank or a laboratory experiment. A program written on one side of the planet could now turn up, uninvited, on office computers on the other side.

Notice the pattern across these fifteen years. Creeper moved politely between at most 28 friendly machines. Elk Cloner rode floppy disks between school friends. Brain crossed oceans. Each step, the same basic trick reached more machines, more strangers, and higher stakes.

## From playground chase to global shadow

Set that gentle beginning beside the world you live in now. Today, harmful programs lock up hospital systems and demand payment, steal banking details from phones, and spread through email attachments and fake downloads in seconds. The number of connected devices is counted in the billions, and an entire global security industry works day and night doing, at enormous scale, exactly what Reaper did in 1972: travelling toward the threat and removing it.

In my view, the sweetest detail in this whole history is that it did not begin with a criminal. It began with an engineer asking a curious question and a program whose entire payload was a joke printed on paper. Creeper never wanted your files, your money or your secrets. It wanted to be chased. The shadow came later, when other people realised the same travelling trick could carry greed instead of a punchline. The chase that started as a game between colleagues in one building now runs across the whole planet, and every antivirus scan on your own computer is a small echo of a teletype chattering in 1971: catch me if you can.

## You may also like

- [CIH Virus That Killed Computers](https://talhablog.com/blog/cih-virus-that-killed-computers/)

## My Take: The First Computer Virus Began As Play, Not Crime

The post presents Creeper, the program often called the first computer virus, with careful honesty about its label. In 1971 Bob Thomas at BBN Technologies wrote Creeper as an experiment for DEC PDP-10 mainframes running the TENEX system on ARPANET, and it printed a teletype message about being caught, travelling from machine to machine. Only around 28 machines ran TENEX, permission was asked before the experiment ran, and Creeper deleted no files and damaged no data. Tomlinson built Reaper in 1972 to hunt Creeper down and delete it. Those facts, with the virus-or-worm argument left open, are the ground for my judgement.

In my view, the label argument is useful, but the moral argument matters more, and readers who argue only about definitions will miss the warning the history carries. Creeper began with an engineer asking a curious question and a program whose entire payload was a joke printed on paper. My judgement is that the trick itself was never neutral, even when its first use was playful. Each step, the same basic trick reached more machines, more strangers, and higher stakes. Play does not stay play when the road it opens stays open.

My call on the turning point is that Reaper, not Creeper, is the part of the story modern readers should copy. Defence did not arrive late to this story. Two options face a person who discovers a clever travelling trick today: treat it as a game, share it, and assume good intentions will contain it, as Creeper's friendly setting seemed to contain it; or build the stop at the same time as the trick, ask permission, limit the playground, and plan the cleanup before the first run. The second option wins, because the first depends on the world staying as small and friendly as ARPANET in 1971, with 28 machines and collaborators who knew each other. The world did not stay small. The winner in the Reaper option is every later user whose machine is defended by a descendant of that hunter. The loser in the play-only option is the ordinary person who never agreed to be part of the experiment but inherits its road. The common mistake is to read Creeper's harmlessness as proof that early viruses were safe. Its importance is not the program itself. It is the idea it proved: software could travel between computers on its own. What to do first when a new trick appears is to ask who else could use it, and what it would do in unfriendly hands. What to do second is to remember the definition the post gives: a virus hides inside another file and waits, while a worm travels across a network by itself, and knowing which road a threat uses helps a person close the right door. A playful trick that proves a road exists has already built the road, and the next traveller on that road may not be playing.

## Frequently Asked Questions

**Was Creeper really a virus?**
Historians argue about the label. Creeper travelled by itself across a network and did not infect files, which matches the modern definition of a worm. Its self-copying version is generally accepted as the first computer worm, and an IEEE history of computing also described Creeper as the world's first computer virus. Either way, it was the first program known to spread itself between computers.

**Did Creeper damage any computers?**
No. Creeper caused no damage to data. Its only visible effect was printing the message "I'M THE CREEPER: CATCH ME IF YOU CAN" on the teletype of machines it visited. It was a controlled experiment among researchers, not an attack.

**Who created the first antivirus?**
Ray Tomlinson, the same BBN engineer famous for inventing network email, created Reaper in 1972. Reaper travelled across ARPANET, found copies of Creeper and deleted them, which is why it is regarded as the first antivirus software.

**What came after Creeper?**
The next famous milestones were Elk Cloner in 1982, written by 15-year-old Rich Skrenta, which spread between Apple II computers on floppy disks, and Brain in 1986, the first virus for IBM PC computers, created by two brothers in Pakistan. Both showed that self-spreading programs had moved from research labs into everyday life.

**Could Creeper spread on today's internet?**
Not as it was. Creeper only worked on DEC PDP-10 machines running the TENEX system, and only about 28 such machines existed on ARPANET. Its importance is not the program itself but the idea it proved: that software could travel between computers on its own.

**Was Creeper the first computer virus or the first worm?**

Creeper travelled by itself across a network and did not infect files, which matches the modern definition of a worm. Its self-copying version is generally accepted as the first computer worm, and it was the first program known to spread itself between computers.

**How many computers could Creeper reach?**

Only around 28 machines on ARPANET ran the TENEX system Creeper needed, so that was the largest world it could ever have roamed. Creeper deleted no files and damaged no data.

## Sources

- [Wikipedia — Creeper and Reaper](https://en.wikipedia.org/wiki/Reaper_(program))
- [TechSpot — What was the first computer virus?](https://www.techspot.com/trivia/130-what-first-computer-virus/)
- [Living Internet — Boot and Program Viruses](https://www.livinginternet.com/i/is_vir_prog.htm)
