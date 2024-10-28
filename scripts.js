// Include data directly instead of loading from file
const powersTraitsData = {
    powers: {
        powerSets: [
            "Basic",
            "Elemental Control",
            "Healing",
            "Illusion",
            "Magic",
            "Martial Arts",
            "Power Control",
            "Ranged Weapons",
            "Shield Bearer",
            "Super-Speed",
            "Super-Strength",
            "Tactics",
            "Telekinesis",
            "Telepathy",
        ],
        powerList: {
            "Accuracy 1": {
                name: "Accuracy 1",
                description: "The character is an ace with ranged attacks.",
                powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
                effect: "The character adds +1 to their Agility damage multiplier, and they gain a +1 bonus to Agility checks other than attacks.",
            },
            "Accuracy 2": {
                name: "Accuracy 2",
                description: "The character is a sharpshooter.",
                powerSet: "Basic",
                prerequisites: "Accuracy 1, Rank 2",
                duration: "Permanent",
                effect: "The character adds +2 to their Agility damage multiplier, and they gain a +2 bonus to Agility checks other than attacks.",
            },
            "Accuracy 3": {
                name: "Accuracy 3",
                description: "The character could hit a fly at one hundred paces.",
                powerSet: "Basic",
                prerequisites: "Accuracy 2, Rank 3",
                duration: "Permanent",
                effect: "The character adds +3 to their Agility damage multiplier, and they gain a +3 bonus to Agility checks other than attacks.",
            },
            "Accuracy 4": {
                name: "Accuracy 4",
                description: "The character can out-target almost anyone.",
                powerSet: "Basic",
                prerequisites: "Accuracy 3, Rank 4",
                duration: "Permanent",
                effect: "The character adds +4 to their Agility damage multiplier, and they gain a +4 bonus to Agility checks other than attacks.",
            },
            "Additional Limbs": {
                name: "Additional Limbs",
                description:
                    "The character has extra limbs that can grab objects and attack foes.",
                powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
                effect: "The character has an additional prehensile appendage (like a tail) or a symmetrical pair of them (like arms) that can be used to lift objects, use tools, or otherwise take actions that normally require the use of a hand. This grants them an edge in Melee and Agility checks. A character can have as many additional limbs as they like\u2014within reason\u2014but they get no additional advantages for them.",
            },
            Advance: {
                name: "Advance",
                description:
                    "The character can advance their allies on the battlefield.",
                powerSet: "Tactics",
                prerequisites: "Rally on Me, Scatter, Rank 4",
                duration: "1 round",
                effect: "Any allies in earshot can be affected, up to a number equal to the character's Ego defense. Each affected ally can immediately use a free movement action to move toward the enemy that triggered the reaction.",
                action: "Reaction",
                trigger:
                    "The character (or an ally in line of sight) stuns or defeats an enemy.",
                cost: "15 Focus",
            },
            "Always Ready": {
                name: "Always Ready",
                description: "The character is prepared to fight.",
                powerSet: "Martial Arts",
                prerequisites: "Do This All Day, Rank 3",
                duration: "Permanent",
                effect: "The character gains one additional reaction per round, which can be used only to activate a Martial Arts power.",
            },
            Anger: {
                name: "Anger",
                description: "You won't like them when they're angry.",
                powerSet: "Basic",
                prerequisites: "Mighty 3, Rank 4",
                duration: "Concentration",
                effect: "The character becomes angry and uses that anger to increase their strength. For every 10 points of Focus they spend, they add +15 to their Melee damage bonus and lose -2 from their Logic\u2014and subsequently their Logic defense. While using this power, they cannot use any other powers that require concentration.",
                action: "Standard or Reaction",
                trigger: "The character is harmed by an attack.",
                cost: "10 or more Focus",
            },
            "Animal Bond": {
                name: "Animal Bond",
                description: "The character can communicate with an animal friend.",
                powerSet: "Telepathy",
                prerequisites: "None",
                duration: "Concentration",
                effect: "The character can communicate telepathically with one animal of their choice, and they must have befriended the animal before. They cannot switch to another animal unless the animal dies, but they can select this power multiple times if desired. The communication can be verbal, visual, or even more complex, such as imparting location information. There is no limit to the distance of the communication, as long as the character and the animal are in the same dimension. Animals with a telepathic bond are generally willing to communicate, even if they aren't friendly. Bonded animals often do whatever the character asks, even if it might put them in danger.",
                action: "Standard",
            },
            "Animal Communication": {
                name: "Animal Communication",
                description: "The character can communicate with a type of animal.",
                powerSet: "Telepathy",
                prerequisites: "None",
                duration: "Concentration",
                effect: "The character can communicate telepathically with one taxonomic order of animals, such as birds, mammals, fish, amphibians, and so on. They can call out to them as a group up to 500 spaces per rank away, and they can communicate specifically with ones they have met or at least seen. They cannot switch to another taxonomic order, but they can select this power multiple times if desired. The communication with the animals can be verbal, visual, or even more complex, such as imparting location information. There is no limit to the distance of the communication, as long as the character and the animals are in the same dimension. Friendly animals often do whatever the character asks, as long as it doesn't put them in danger\u2014and they may be willing to risk even that for one they consider a friend. Hostile animals simply ignore all such requests\u2014which make them a poor choice for communication.",
                action: "Standard",
            },
            "Animated Illusion": {
                name: "Animated Illusion",
                description:
                    "By manipulating visual light, the character creates a moving hologram.",
                powerSet: "Illusion",
                prerequisites: "Static Illusion, Rank 2",
                duration: "Concentration",
                effect: "The character creates a visual-only illusion anywhere in line of sight, within 50 spaces. The illusion can be anything up to four sizes larger than the character, and it can move freely within its limits. The character breaks concentration if they move beyond 50 spaces from the illusion or lose line of sight to it.",
                action: "Standard",
                cost: "5 Focus",
            },
            "Astral Form": {
                name: "Astral Form",
                description: "The character can enter the Astral Plane.",
                powerSet: "Magic, Telepathy",
                prerequisites: "Sorcerous, Rank 2",
                duration: "Concentration",
                effect: "The character can project an avatar into the Astral Plane, leaving their physical body in a deep trance in the real world, where it is vulnerable to attack. While in the Astral Plane, they can interact with other characters in the Astral Plane, but they are intangible, invisible, and generally undetectable in the real world. However, they can sense things in the real world. If the character is Rank 4 or higher, they can also take on a transparent form that can be seen in the real world. While in the Astral Plane, the character can fly, and in combat, their Flight Speed is equal to their rank times their Run Speed. Outside of combat, they can move 10 times as fast.",
                action: "Standard",
                cost: "5 Focus",
            },
            "Attack Stance": {
                name: "Attack Stance",
                description:
                    "The character enters an aggressive attack stance, ready to strike in any direction.",
                powerSet: "Martial Arts",
                prerequisites: "None",
                duration: "Concentration",
                effect: "The character doubles their Melee ability bonus to damage.",
                action: "Standard",
            },
            "Banging Heads": {
                name: "Banging Heads",
                description:
                    "The character takes two nearby enemies and slams their heads into each other.",
                powerSet: "Martial Arts, Super-Strength",
                prerequisites: "None",
                duration: "Instant",
                effect: "The character makes one Melee check against the Melee defense scores of two enemies within reach. If the attack fails against either foe, it fails entirely. If the attack is a success against both foes, each enemy takes full damage. On a Fantastic success, each enemy is also knocked prone.",
                action: "Standard",
            },
            "Battle Plan": {
                name: "Battle Plan",
                description: "The character always has a plan.",
                powerSet: "Tactics",
                prerequisites: "Inspiration, Rank 2",
                duration: "1 round",
                effect: "The character inspires one or more allies of their choice in earshot, up to the character's Vigilance. Inspired allies gain an edge on all action checks until the start of the character's next turn.",
                action: "Standard",
                cost: "10 Focus",
            },
            "Blazing-Fast Fists": {
                name: "Blazing-Fast Fists",
                description: "The character can attack superfast.",
                powerSet: "Super-Speed",
                prerequisites: "Rank 2",
                duration: "Permanent",
                effect: "The character has an edge on all Melee attacks.",
            },
            Blink: {
                name: "Blink",
                description: "The character teleports a short distance away.",
                powerSet: "Teleportation",
                prerequisites: "None",
                duration: "Instant",
                effect: "The character teleports into a clear space they can see or have been to, up to their rank in spaces away. If someone was about to attack them and they are now out of reach or line of sight, the attack automatically fails. If they are still within reach or line of sight, the attack has trouble instead.",
                action: "Standard, Movement, or Reaction",
                trigger: "The character is attacked.",
            },
            "Blink Barrage": {
                name: "Blink Barrage",
                description: "The character teleports rapidly around an opponent.",
                powerSet: "Teleportation",
                prerequisites: "Blink, Rank 2",
                duration: "Instant",
                effect: "The character teleports several times in quick succession and winds up in a clear space they can see or have been to, up to their rank in spaces away. Any attacks have trouble against them for one round.",
                action: "Standard or Movement",
                cost: "5 Focus",
            },
            "Blink Defense": {
                name: "Blink Defense",
                description: "The character teleports a short distance away.",
                powerSet: "Teleportation",
                prerequisites: "Blink, Rank 3",
                duration: "Instant",
                effect: "The character pops away just as the attack reaches them and then pops back into the same space, leaving the projectile behind. The character makes an Ego check with an edge against the attacker's Agility check result. On a success, the projectile from the attack is teleported away, someplace safe. On a Fantastic success, the attack is turned against the attacker, using the Ego check the character just made as the attack check.",
                action: "Reaction",
                trigger:
                    "The character or an ally within reach is the subject of a ranged attack.",
                cost: "10 Focus",
            },
            Blur: {
                name: "Blur",
                description: "The character moves like a blur!",
                powerSet: "Super-Speed",
                prerequisites: "Speed Run 2, Rank 2",
                duration: "1 round",
                effect: "Any attacks against the character have trouble.",
                action: "Standard or Reaction",
                trigger: "The character is attacked.",
                cost: "5 Focus",
            },
            "Body Sheet": {
                name: "Body Sheet",
                description: "The character can flatten themselves like a sheet.",
                powerSet: "Plasticity",
                prerequisites: "Flexible Bones 2, Extended Reach 2, Rank 4",
                duration: "Concentration",
                effect: "The character gains Health Damage Reduction 3, but they cannot make attacks. They gain a Glide Speed equal to double their Run Speed.",
                action: "Standard or Reaction",
                trigger: "The character falls or is the target of an attack.",
                cost: "15 Focus",
            },
            "Body Sphere": {
                name: "Body Sphere",
                description:
                    "The character can form their body into a protective sphere.",
                powerSet: "Plasticity",
                prerequisites: "Body Sheet, Rank 4",
                duration: "Concentration",
                effect: "The character forms their body into a sphere, protecting up to one ally per rank, squeezed into the same space. Those inside the sphere gain Health Damage Reduction 3 against outside attacks, but they cannot move on their own until the character releases them. Alternatively, if the attacker is within the character's reach, the character can make an Agility check against the target's Agility defense. On a success, the character envelops the attacker, grabbing them. On a Fantastic success, the character closes the sphere enough to pin the attacker too.",
                action: "Standard or Reaction",
                trigger: "The character or an ally is the target of an attack.",
                cost: "15 Focus",
            },
            "Bolts of Balthakk": {
                name: "Bolts of Balthakk",
                description:
                    "The character fires enchanted bolts of electricity from their fingers.",
                powerSet: "Magic",
                prerequisites: "Sorcerous, Rank 2",
                duration: "Instant",
                effect: "The character makes an Ego check with an edge against the Agility defense of a target in their line of sight. For this attack, add +1 to the character's Agility damage bonus for every 2 points of Focus they spend. On a success, an affected target takes that total damage. On a Fantastic success, an affected target takes double that total damage and is stunned for one round.",
                action: "Standard",
                cost: "5 or more Focus",
                range: "20 spaces",
            },
            "Boost Powers": {
                name: "Boost Powers",
                description:
                    "The character turbocharges all of another character's powers!",
                powerSet: "Power Control",
                prerequisites: "Bump Power, Rank 4",
                duration: "Concentration",
                effect: "The character picks one character within 5 spaces and boosts all of their powers. If the powers have ranges or effective areas or durations, these are doubled. If the powers affect a damage multiplier, add 1 to the effects. Any effects that normally happen with a Fantastic success automatically happen on any success, not just a Fantastic one. If the target's powers have costs, the character must pay the highest of them or a minimum of 15 Focus.",
                action: "Standard",
                cost: "15 or more Focus",
            },
            "Borrow Senses": {
                name: "Borrow Senses",
                description: "The character can use another person's senses.",
                powerSet: "Telepathy",
                prerequisites: "Telepathic Link, Rank 2",
                duration: "Concentration",
                effect: "The character can use the full senses of someone or something with whom they have established a telepathic link or bond. While they do, they retain the use of their own senses too.",
                action: "Standard",
                cost: "5 Focus",
            },
            "Bounce Back": {
                name: "Bounce Back",
                description:
                    "The character bounces back from even the hardest falls.",
                powerSet: "Plasticity",
                prerequisites: "Flexible Bones 1, Slip Free, Rank 2",
                duration: "Instant",
                effect: "The fall doesn't damage the character. If they are prone, they stand up. If they'd like, they can also jump a number of spaces, up to their Run Speed.",
                action: "Reaction",
                trigger:
                    "The character takes damage from a fall or is knocked prone.",
                cost: "5 Focus",
            },
            "Brace for Impact": {
                name: "Brace for Impact",
                description:
                    "The character mentally toughens themselves for a fight.",
                powerSet: "Martial Arts, Shield Bearer",
                prerequisites: "Do This All Day, Rank 2",
                duration: "Instant",
                effect: "For every point of Focus spent, the character can ignore 1 point of Health damage dealt by the attack.",
                action: "Reaction",
                trigger: "An enemy deals physical damage to the character.",
                cost: "5 or more Focus",
            },
            "Brain Drain": {
                name: "Brain Drain",
                description: "The character consumes the energies of another.",
                powerSet: "Magic",
                prerequisites: "Rank 2",
                duration: "Instant",
                effect: "The character makes an Ego attack against the target's Vigilance. If it succeeds, the target takes regular Focus damage, and the character heals half that much Focus for themselves. On a Fantastic success, the character heals their full Focus damage instead.",
                action: "Reaction",
                trigger: "The target is grabbed.",
                cost: "5 Focus",
            },
            Brawling: {
                name: "Brawling",
                description: "The character has the moves and is hard to hit.",
                powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
                effect: "The character can use their Melee defense score against Agility attacks too.",
            },
            "Brilliance 1": {
                name: "Brilliance 1",
                description: "The character puts their brain to work.",
                powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
                effect: "The character adds +1 to their Logic damage multiplier, and they gain a +1 bonus to Logic checks other than attacks.",
            },
            "Brilliance 2": {
                name: "Brilliance 2",
                description: "Everything makes more sense to the character.",
                powerSet: "Basic",
                prerequisites: "Brilliance 1, Rank 2",
                duration: "Permanent",
                effect: "The character adds +2 to their Logic damage multiplier, and they gain a +2 bonus to Logic checks other than attacks.",
            },
            "Brilliance 3": {
                name: "Brilliance 3",
                description: "Little can stop the character's mind.",
                powerSet: "Basic",
                prerequisites: "Brilliance 2, Rank 3",
                duration: "Permanent",
                effect: "The character adds +3 to their Logic damage multiplier, and they gain a +3 bonus to Logic checks other than attacks.",
            },
            "Brilliance 4": {
                name: "Brilliance 4",
                description: "The character's intelligence is unparalleled.",
                powerSet: "Basic",
                prerequisites: "Brilliance 3, Rank 4",
                duration: "Permanent",
                effect: "The character adds +4 to their Logic damage multiplier, and they gain a +4 bonus to Logic checks other than attacks.",
            },
            "Bump Power": {
                name: "Bump Power",
                description: "The character bumps up another character's power.",
                powerSet: "Power Control",
                prerequisites: "Rank 2",
                duration: "Concentration",
                effect: "The character picks one power from another character within 5 spaces and boosts it. If the power has ranges or effective areas or durations, these are doubled. If the power affects a damage multiplier, add 1 to the effect. Any effects that normally happen with a Fantastic success automatically happen on any success, not just a Fantastic one. If the power has a cost, the character must pay it as well, with a minimum of 5 Focus.",
                action: "Standard",
                cost: "5 or more Focus",
            },
            "Catch Bullets": {
                name: "Catch Bullets",
                description:
                    "The character is fast enough to catch bullets\u2014safely!",
                powerSet: "Super-Speed",
                prerequisites: "Speed Run 2, Rank 3",
                duration: "Instant",
                effect: "The character makes an Agility check, using the attacker's attack result as the target number. If the character's check succeeds, the attack is nullified. On a Fantastic success, the character gets their reaction back.",
                action: "Reaction",
                trigger:
                    "A ranged attack using physical projectiles (arrows, bullets, and so on) is made against the character\u2014or a character within the character's reach.",
                cost: "10 Focus",
            },
            "Chain Strikes": {
                name: "Chain Strikes",
                description: "The character unleashes a hail of strikes.",
                powerSet: "Martial Arts",
                prerequisites: "Fast Strikes, Rank 2",
                duration: "Instant",
                effect: "The character makes a close attack with an edge. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the character can also make an additional Chain Strike.",
                action: "Standard",
                cost: "5 Focus",
            },
            "Change of Plans": {
                name: "Change of Plans",
                description: "The character thinks of a better way.",
                powerSet: "Tactics",
                prerequisites: "Inspiration, Rank 2",
                duration: "1 round",
                effect: "The ally gains an edge on that action check.",
                action: "Reaction",
                trigger: "An ally has trouble on an action check.",
                cost: "5 Focus",
            },
            "Charmed Life": {
                name: "Charmed Life",
                description: "The character seems like they were born lucky.",
                powerSet: "Luck",
                prerequisites: "Rank 4",
                duration: "Permanent",
                effect: "The character gains an edge on any single action check each round. This does not stack with any other edges.",
            },
            "Cloak": {
                name: "Cloak",
                description:
                    "The character makes people believe they're not there.",
                powerSet: "Telepathy",
                prerequisites: "Telepathic Link, Rank 2",
                duration: "Concentration",
                effect: "The character uses a mirage to block their presence from the minds of people within 20 spaces per rank. Cameras (for instance) can still record them, but when people look in the character's direction, they see nothing there. The target number for anyone trying to detect the character is the character's Logic defense.",
                action: "Standard",
                cost: "5 Focus",
            },
            "Cloak Group": {
                name: "Cloak Group",
                description:
                    "The character mentally hides themselves and their friends.",
                powerSet: "Telepathy",
                prerequisites: "Cloak, Rank 3",
                duration: "Concentration",
                effect: "Using a mirage, the character blocks their presence\u2014and the presence of up to one other person per rank, within 10 spaces\u2014from the minds of people within 20 spaces per rank. Cameras (for instance) can still record them, but when people look in the characters' direction, they see nothing there. The target number for anyone trying to detect the character or the others protected is the character's Logic defense.",
                action: "Standard",
                cost: "10 Focus",
            },
            "Clobber": {
                name: "Clobber",
                description:
                    "The character pummels their foe with enough force to knock them flat.",
                powerSet: "Super-Strength",
                prerequisites: "None",
                duration: "Instant",
                effect: "The character makes a close attack against an enemy. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the enemy takes double damage and is knocked prone.",
                action: "Standard",
            },
            "Clone Moves": {
                name: "Clone Moves",
                description:
                    "The character duplicates another character's combat moves.",
                powerSet: "Power Control",
                prerequisites: "Rank 2",
                duration: "Concentration",
                effect: "The character picks another character within 10 spaces and in their line of sight and duplicates all their powers that could be selected with the Special Training origin. They can now use those powers as if they were always theirs. If the copied powers have costs, the character must pay the highest of them, or a minimum of 5 Focus. When the character uses a copied power, they must pay any cost normally as well.",
                action: "Standard",
                cost: "5 or more Focus",
            },
            "Clone Powers": {
                name: "Clone Powers",
                description:
                    "The character duplicates all of another character's powers.",
                powerSet: "Power Control",
                prerequisites: "Copy Power, Rank 4",
                duration: "Concentration",
                effect: "The character picks another character within 10 spaces and duplicates all of their powers. They can now use those powers as if they were always theirs. If the target's powers have costs, the character must pay the highest of them, or a minimum of 15 Focus. When the character uses a copied power, they must pay any cost normally as well.",
                action: "Standard",
                cost: "15 or more Focus",
            },
            "Coiling Crush": {
                name: "Coiling Crush",
                description: "The character wraps around a target and crushes it.",
                powerSet: "Plasticity",
                prerequisites: "Extended Reach 1, Reverse Punch, Rank 3",
                duration: "Concentration",
                effect: "The character makes a Melee attack. On a success, the enemy is paralyzed. On a Fantastic success, the enemy also takes regular damage. During the character's subsequent turns, they can spend their movement action to make a Melee check against the enemy's Resilience. If this succeeds, they inflict regular Health damage. On a Fantastic success, they do double damage instead. During the paralyzed enemy's turn, they can make a Melee check against the character's Melee defense to break free.",
                action: "Reaction",
                trigger: "The character grabs an enemy.",
                cost: "10 Focus",
            },
            "Combat Support": {
                name: "Combat Support",
                description: "The character gives a friend a hand.",
                powerSet: "Tactics",
                prerequisites: "Change of Plans, Rank 3",
                duration: "1 round",
                effect: "Once per battle, the character chooses an ally in earshot. If the ally makes an action check before the start of the character's next turn, the ally automatically rolls a 1 on their Marvel die, and that die cannot be affected by trouble.",
                action: "Standard",
                cost: "10 Focus",
            },
            "Combat Trickery": {
                name: "Combat Trickery",
                description: "The character is a tricky one!",
                powerSet: "Basic",
                prerequisites: "Rank 2",
                duration: "Instant",
                effect: "Once per battle, when the character is attacking targets of equal or higher rank, the character automatically rolls a 1 on their Marvel die, and that die cannot be affected by trouble. If the character is attacking multiple targets, all the targets must be of equal or higher rank.",
                action: "Reaction",
                trigger: "The character makes an attack.",
                cost: "5 Focus",
            },
            Command: {
                name: "Command",
                description: "The character forces someone to follow an order.",
                powerSet: "Telepathy",
                prerequisites: "Telepathic Link, Rank 2",
                duration: "1 round",
                effect: "The character gives an order to a target with whom they've established a Telepathic Link. The character makes a Logic check against the target's Logic defense. On a success, the target complies with the order. On a Fantastic success, the character gains an edge the next time they use this power against this same target. The command must be something that can be completed in a single action. If it involves harming someone, the character has trouble on the check. If it would cause the target to harm themselves, the character has double trouble on the check.",
                action: "Standard",
                cost: "5 Focus",
            },
            "Control Fog": {
                name: "Control Fog",
                description: "The character can create or dispel a thick fog.",
                powerSet: "Weather Control",
                prerequisites: "None",
                duration: "Concentration",
                effect: "The character creates a thick fog for up to 50 spaces per rank around them that blocks all line of sight beyond 10 spaces. They can also dispel any fog in a similar area.",
                action: "Standard",
            },
            "Control Weather 1": {
                name: "Control Weather 1",
                description: "The character can make it rain.",
                powerSet: "Weather Control",
                prerequisites: "Rank 2",
                duration: "Concentration",
                effect: "It starts to rain in an area up to 5 miles across times the character's rank, centered on the character. All ranges are cut in half. Movement is not affected.",
                action: "Standard",
            },
            "Control Weather 2": {
                name: "Control Weather 2",
                description: "The character can make it storm.",
                powerSet: "Weather Control",
                prerequisites: "Control Weather 1, Rank 3",
                duration: "Concentration",
                effect: "It starts to storm in an area up to 5 miles across times the character's rank, centered on the character. All ranges and all speeds are cut in half.",
                action: "Standard",
                cost: "10 Focus",
            },
            "Control Weather 3": {
                name: "Control Weather 3",
                description: "The character creates a thunderstorm.",
                powerSet: "Weather Control",
                prerequisites: "Control Weather 2, Rank 4",
                duration: "Concentration",
                effect: "It starts to storm in an area up to 5 miles across times the character's rank, centered on the character. All ranges and all speeds are cut in half. If the character also has the Elemental Blast (Electricity) power, they can use it as a reaction when attacked while this power is active.",
                action: "Standard",
                cost: "15 Focus",
            },
            "Control Weather 4": {
                name: "Control Weather 4",
                description: "The character generates a hurricane.",
                powerSet: "Weather Control",
                prerequisites: "Control Weather 3, Rank 5",
                duration: "Concentration",
                effect: "It starts to storm in an area up to 5 miles across times the character's rank, centered on the character. All ranges and all speeds are cut to one quarter normal, and flying is impossible. If the character also has the Elemental Barrage (Electricity) power, they can use it as a reaction when attacked while this power is active.",
                action: "Standard",
                cost: "20 Focus",
            },
            "Copy Ability": {
                name: "Copy Ability",
                description:
                    "The character duplicates another character's ability.",
                powerSet: "Power Control",
                prerequisites: "None",
                duration: "Concentration",
                effect: "The character picks one ability score of another character within 10 spaces and duplicates it. They now use that ability score in place of their own.",
                action: "Standard",
            },
            "Copy Power": {
                name: "Copy Power",
                description: "The character duplicates another character's power.",
                powerSet: "Power Control",
                prerequisites: "Rank 2",
                duration: "Concentration",
                effect: "The character picks one power a target within 10 spaces has and duplicates it. They can now use it as if it was always theirs. When the character uses such a power, they must pay any cost normally as well.",
                action: "Standard",
                cost: "5 Focus",
            },
            "Copy Trait": {
                name: "Copy Trait",
                description: "The character duplicates another character's trait.",
                powerSet: "Power Control",
                prerequisites: "None",
                duration: "Concentration",
                effect: "The character picks one trait another character within 10 spaces has and duplicates it. They can now use it as if it was always theirs.",
                action: "Standard",
            },
            "Counterstrike Technique": {
                name: "Counterstrike Technique",
                description:
                    "The character counters an enemy's strike with one of their own.",
                powerSet: "Martial Arts",
                prerequisites: "Attack Stance, Rank 2",
                duration: "Instant",
                effect: "The character deals half the attacker's regular damage to the attacker.",
                action: "Reaction",
                trigger:
                    "While Attack Stance is active, a close attack against the character does damage.",
                cost: "5 Focus",
            },
            "Covering Fire": {
                name: "Covering Fire",
                description: "The character covers an ally's attack.",
                powerSet: "Ranged Weapons",
                prerequisites: "Return Fire, Rank 3",
                duration: "Instant",
                effect: "The character makes an Agility attack against a target's Vigilance defense. If the attack is a success, apply Health Damage Reduction normally. The target takes any damage to their Focus. If it's a Fantastic success, the damage is doubled, and if the target takes any Focus damage, they are stunned for one round.",
                action: "Reaction",
                trigger:
                    "An ally within the character's line of sight begins its turn.",
                cost: "10 Focus",
            },
            "Crimson Bands of Cyttorak": {
                name: "Crimson Bands of Cyttorak",
                description:
                    "The character unleashes red bands of magic that lash out to capture their target.",
                powerSet: "Magic",
                prerequisites: "Sorcerous, Rank 3",
                duration: "Concentration",
                effect: "The character makes an Ego check with an edge against the Melee defense of a target in their line of sight. If the attack is a success, the crimson bands paralyze the target. On a Fantastic success, the target can be pinned too. Breaking out of the crimson bands requires a Melee check with target number 20.",
                action: "Standard",
                cost: "10 Focus",
                range: "20 spaces",
            },
            "Crushing Grip": {
                name: "Crushing Grip",
                description: "The character seizes an enemy and squeezes hard.",
                powerSet: "Martial Arts, Super-Strength",
                prerequisites: "Rank 2",
                duration: "Instant",
                effect: "The character makes a Melee attack against the grabbed target's Resilience defense. If it's a success, the target takes regular damage. On a Fantastic success, the target takes double damage instead and is pinned.",
                action: "Reaction",
                trigger: "The target is grabbed.",
                cost: "5 Focus",
            },
            "Cure-All": {
                name: "Cure-All",
                description: "The character can cure what ails you\u2014mostly.",
                powerSet: "Healing",
                prerequisites: "Healing Hands, Rank 4",
                duration: "Instant",
                effect: "With a touch, the character can cure any temporary ailments a target suffers from. The character makes an Ego vs. TN 12 action check. On a success, the effects of the ailment end immediately. On a Fantastic success, treat the result like a recovery check, and the target gains back that much of any Health and Focus lost to the condition. This can affect conditions including ablaze, bleeding, blinded, corroding, deafened, demoralized, paralyzed, poisoned and unconscious. If the target was demoralized, they now have 1 Focus, and if the target was unconscious, they now have 1 Health. (They can have more if the character got a Fantastic success and recovered more for them.) Note that this only works on acute conditions and diseases, those the target has contracted recently and that would\u2014under ideal circumstances\u2014resolve soon, leaving them alive. It does not affect chronic or permanent diseases or serious diseases that are likely to be fatal. For instance, it can cure temporary deafness but not permanent deafness. It can stop an allergy attack but not the allergies themselves. It can cure poison but not cancer. It has no effect against the Techno-Organic virus, the Transmode virus, the Legacy virus or other such diseases.",
                action: "Standard",
                cost: "15 Focus",
                range: "Reach",
            },
            "Dampen Power": {
                name: "Dampen Power",
                description: "The character tamps down another character's power.",
                powerSet: "Power Control",
                prerequisites: "None",
                duration: "Concentration",
                effect: "The character picks one power from another character within 20 spaces and makes an Ego attack against them. On a success, they tamp the power down. If the power has ranges or effective areas or durations, these are halved. If the power affects a damage multiplier, subtract 1 from the effect. The power can no longer enjoy Fantastic successes. If the power has a Focus cost, the character must also pay that cost to dampen it.",
                action: "Standard",
                cost: "Varies",
            },
            "Dance of Death": {
                name: "Dance of Death",
                description:
                    "The character spins about, shooting at every enemy around them.",
                powerSet: "Ranged Weapons",
                prerequisites: "Slow-Motion Shoot-Dodge, Rank 3",
                duration: "Instant",
                effect: "The character makes an Agility check and compares that against the Agility defense of every enemy within 10 spaces and in their line of sight. Each success does half the regular damage. On a Fantastic success, each enemy takes full damage instead and is bleeding.",
                action: "Standard",
                cost: "10 Focus",
            },
            "Danger Sense": {
                name: "Danger Sense",
                description: "The character can feel danger on the way.",
                powerSet: "Sixth Sense",
                prerequisites: "Precognition 1, Rank 2",
                duration: "Permanent",
                effect: "Even if the character doesn't get a Fantastic result on their initiative check, they get a turn during the bonus round of any combat they are in. This works even if no one else in the combat can act in the bonus round.",
            },
            "Darkness": {
                name: "Darkness",
                description: "The targets become shrouded in unnatural darkness.",
                powerSet: "Illusion",
                prerequisites: "Illumination, Rank 2",
                duration: "Concentration",
                effect: "An area up to 5 spaces wide per the character's rank\u2014centered on anything the character wishes, within 50 spaces\u2014is filled with inky darkness. Those inside it cannot see anything, and no lights work within it except those generated by powers. The character must remain within 50 spaces of the affected area to avoid breaking concentration.",
                action: "Standard",
                cost: "5 Focus",
            },
            "Dazzle": {
                name: "Dazzle",
                description:
                    "The character blasts a blinding light into the face of their foe.",
                powerSet: "Illusion",
                prerequisites: "Illumination, Rank 2",
                duration: "Instant",
                effect: "The character makes an Ego check against an enemy in their line of sight and compares that against the target's Vigilance defense. If the attack is a success, the enemy is blinded for 1 turn. On a Fantastic success, it also inflicts regular damage. Alternatively, the character can blind the victim with darkness.",
                action: "Standard",
                cost: "5 Focus",
                range: "20 spaces",
            },
            "Deafen": {
                name: "Deafen",
                description: "The character slaps silence into the target's ears.",
                powerSet: "Illusion",
                prerequisites: "Illumination, Rank 2",
                duration: "Instant",
                effect: "The character makes an Ego check against an enemy in their line of sight and compares that against the target's Vigilance defense. If the attack is a success, the enemy is deafened for one turn. On a Fantastic success, it also inflicts regular damage.",
                action: "Standard",
                cost: "5 Focus",
                range: "20 spaces",
            },
            "Defense Stance": {
                name: "Defense Stance",
                description:
                    "The character enters a fluid defensive stance, hands poised to parry and counterattack.",
                powerSet: "Martial Arts",
                prerequisites: "None",
                duration: "Concentration",
                effect: "Any close attacks made against the character have trouble until they are successfully attacked in this combat.",
                action: "Standard",
            },
            "Detect Lie": {
                name: "Detect Lie",
                description: "The character can tell if you're telling the truth.",
                powerSet: "Translation",
                prerequisites: "Understand Body Language, Rank 2",
                duration: "Instant",
                effect: "When someone communicates in an active form the character can understand\u2014verbally, telepathically, using sign language and so on\u2014the character can make an Ego check against the communicator's Ego defense. On a success, the character knows if the communicator is lying. On a Fantastic success, they also know (if possible) why the communicator is lying. This power does not allow the character to know the truth, although they may be able to figure it out by detecting lies. Also, it only works on communicators who know they are lying. If they believe what they are saying\u2014even if it is wrong\u2014no lie can be detected.",
                action: "Standard or Reaction",
                trigger: "Verbal communication the character can understand",
                cost: "5 Focus",
            },
            "Detect Supers": {
                name: "Detect Supers",
                description: "The character can sense super-powered people.",
                powerSet: "Sixth Sense",
                prerequisites: "None",
                duration: "Concentration",
                effect: "The character can sense anyone within a certain distance of them who has super-powers. This reveals a count of the number of people who have powers and their rough distance and direction from the character. It doesn't supply any other information, like name, appearance, the type of powers and so on. Note that powers that can be picked by someone with the Special Training origin are not considered super-powers. When the character picks this power, they have two options. They can take the power as it is, or they can limit it to detecting powers from a single origin, like Mutant or Alien (including all subtypes). If they take the regular power, its range is 5 miles. If they take a limited power, its range is 25 miles. For example, the character can have Detect Supers with a range of 5 miles or Detect Supers: Mutants with a range of 25 miles.",
                action: "Standard",
            },
            "Dimensional Portal": {
                name: "Dimensional Portal",
                description: "The character opens a portal to another place.",
                powerSet: "Omniversal Travel",
                prerequisites: "Dimensional Travel Together, Rank 4",
                duration: "Concentration",
                effect: "The character opens a glowing portal in a space next to them that moves anything that enters it between that space and its destination, which forms a matched glowing portal in the other place. The other end of the portal must be in a clear space in another dimension that the character has been to. Anything can move through the portal in either direction until it is closed, which the character can do at will.",
                action: "Standard",
                cost: "15 Focus",
            },
            "Dimensional Travel": {
                name: "Dimensional Travel",
                description: "The character moves from one dimension to another.",
                powerSet: "Omniversal Travel",
                prerequisites: "Rank 3",
                duration: "Instant",
                effect: "The character instantly moves from their current dimension to another dimension within the same universe. For instance: from Earth to Asgard, Limbo, or K'un-Lun. When they move to the other dimension, they can arrive in any place they've been to before. Otherwise, they arrive at the most common entrance to that dimension.",
                action: "Standard or Movement",
                cost: "10 Focus",
            },
            "Dimensional Travel Other": {
                name: "Dimensional Travel Other",
                description: "The character sends someone to another dimension.",
                powerSet: "Omniversal Travel",
                prerequisites: "Dimensional Travel, Rank 4",
                duration: "Instant",
                effect: "The character makes an Ego check against the Vigilance defense of a target they have grabbed. If the check is successful, the character can send the target to another dimension. The target can be sent to any location in that dimension that the character has been to before. Otherwise, the target arrives at the most common entrance to that dimension.",
                action: "Standard, Movement, or Reaction",
                trigger: "The target is grabbed.",
                cost: "15 Focus",
            },
            "Dimensional Travel Together": {
                name: "Dimensional Travel Together",
                description:
                    "The character brings someone with them to another dimension.",
                powerSet: "Omniversal Travel",
                prerequisites: "Dimensional Travel, Rank 3",
                duration: "Instant",
                effect: "The character moves to a different dimension, taking any person they are touching with them. If the target does not wish to come along, the character must grab them first. When they move to the other dimension, they can arrive in any place they've been to before. Otherwise, they arrive at the most common entrance to that dimension.",
                action: "Standard, Movement, or Reaction",
                trigger: "The target is grabbed.",
                cost: "10 Focus",
            },
            "Discipline 1": {
                name: "Discipline 1",
                description: "The character works to hone their power.",
                powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
                effect: "The character adds +1 to their Ego damage multiplier, and they gain a +1 bonus to Ego checks other than attacks.",
            },
            "Discipline 2": {
                name: "Discipline 2",
                description:
                    "The character is more in touch with their power than ever.",
                powerSet: "Basic",
                prerequisites: "Discipline 1, Rank 2",
                duration: "Permanent",
                effect: "The character adds +2 to their Ego damage multiplier, and they gain a +2 bonus to Ego checks other than attacks.",
            },
            "Discipline 3": {
                name: "Discipline 3",
                description: "Few can top the character's grasp on their power.",
                powerSet: "Basic",
                prerequisites: "Discipline 2, Rank 3",
                duration: "Permanent",
                effect: "The character adds +3 to their Ego damage multiplier, and they gain a +3 bonus to Ego checks other than attacks.",
            },
            "Discipline 4": {
                name: "Discipline 4",
                description: "The character has mastered their power.",
                powerSet: "Basic",
                prerequisites: "Discipline 3, Rank 4",
                duration: "Permanent",
                effect: "The character adds +4 to their Ego damage multiplier, and they gain a +4 bonus to Ego checks other than attacks.",
            },
        "Disguise": {
            name: "Disguise",
            description: "The character appears to be someone else.",
            powerSet: "Basic",
            prerequisites: "None",
            duration: "Permanent",
            effect: "The character instantly alters their appearance so that they appear to be someone else. The target number for anyone trying to see through the disguise is the character's Ego defense. If the character is impersonating someone known to the other person, that person has an edge.",
            action: "Standard",
        },
        "Dispel Spell": {
            name: "Dispel Spell",
            description: "The character puts an end to a foe's magic.",
            powerSet: "Magic",
            prerequisites: "Sorcerous, Rank 4",
                duration: "Instant",
            effect: "The character makes an Ego check against the Ego defense of a target using a magic power that requires concentration. On a success, the target's concentration on that power is broken. On a Fantastic success, the target's concentration is broken entirely.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Disrupt Electronics": {
            name: "Disrupt Electronics",
            description:
                "The character can scramble electronics by moving through them.",
            powerSet: "Phasing",
            prerequisites: "Phase Self, Rank 2",
            duration: "Instant",
            effect: "When phasing through electronics, the character can scramble them, causing them to either shut down or crash. In the case of powers that are Tech Reliant (and feature electronics), they are unusable for one turn while they reboot.",
                action: "Standard",
                cost: "5 Focus",
        },
        "Disrupt Nerves": {
            name: "Disrupt Nerves",
            description: "The character can scramble someone's nervous system.",
            powerSet: "Phasing",
            prerequisites: "Phase Self, Rank 2",
            duration: "Instant",
            effect: "When phasing through a person, the character can attempt to scramble their nervous system. The character makes an Ego check against the target's Resilience defense. On a success, the target is stunned for one round. On a Fantastic success, the target also falls prone.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Disrupt Person": {
            name: "Disrupt Person",
            description:
                "The character can hurt someone with their phasing powers.",
            powerSet: "Phasing",
            prerequisites: "Phase Self, Rank 3",
            duration: "Instant",
            effect: "The character becomes the slightest bit solid while phasing themselves or a phased weapon through someone. They make a close attack. On a success, the attack does normal damage, ignoring any Health Damage Reduction. On a Fantastic success, the attack does double damage instead, ignoring any Health Damage Reduction, and the target is stunned for one round.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Do This All Day": {
            name: "Do This All Day",
            description:
                "The character draws on their inner strength to heal themselves.",
            powerSet: "Martial Arts, Shield Bearer",
            prerequisites: "Rank 2",
            duration: "Instant",
            effect: "The character heals 2 points of Health for every point of Focus they spend.",
            action: "Standard",
            cost: "5 or more Focus",
        },
        "Domination": {
            name: "Domination",
            description:
                "The character forces someone to follow their orders\u2014permanently.",
            powerSet: "Telepathy",
            prerequisites: "Orders, Rank 5",
            duration: "Permanent",
            effect: "The character dominates a target with whom they've established a Telepathic Link and who has no Focus left. The character makes a Logic check with trouble against the target's Logic defense. On a success, the target is completely dominated and will follow the character's orders. On a Fantastic success, the character gains an edge the next time they use this power against this same target. The result of the character's check is the target number for any attempts by the target to end the domination. If any order involves harming someone, the target gets to make a Logic check to end the domination. If the target has the Heroic tag, they get an edge on the check. If the order would cause the target to harm themselves, the target gets an edge on the check. If they have the Heroic tag, they get a double edge.",
            action: "Standard",
            cost: "20 Focus",
        },
        "Double Tap": {
            name: "Double Tap",
            description: "To be twice as sure.",
            powerSet: "Ranged Weapons",
            prerequisites: "None",
            duration: "Instant",
            effect: "The character makes a ranged attack against an enemy within 2 spaces. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the enemy takes double damage and is bleeding.",
            action: "Standard",
        },
        "Edit Memory": {
            name: "Edit Memory",
            description: "The character alters someone's memory.",
            powerSet: "Telepathy",
            prerequisites: "Memory Blip, Rank 4",
            duration: "Permanent",
            effect: "The character alters the memory of a target with whom they've established a Telepathic Link. This can be as simple as erasing a chunk of the target's memory or as complicated as implanting entirely new memories. The Narrator sets the target number based on how complex the new memory is and how hard it would be to integrate such memories into the character's other memories. The character makes a Logic check against the target's Logic defense. On a success, the memories are altered. On a Fantastic success, the target has trouble on checks to refute such memories in the future. Any time the target is given good reason to doubt the edited memory, they can make a Logic check to refute the new version of their memories and recover their original memories. If they succeed, they remember both the original memory and the edited one. On a Fantastic success, they know for sure who did this to them.",
            action: "Standard",
            cost: "15 Focus",
            },
            "Elemental Barrage": {
                name: "Elemental Barrage",
                description:
                "The character hurls a barrage of their element at their foes.",
                powerSet: "Elemental Control",
            prerequisites: "Elemental Blast, Rank 4",
                duration: "Instant",
            effect: "The character designates a space within their line of sight. The attack can affect every enemy within 10 spaces of that. The character makes a single Ego check and compares it to each target's Resilience defense. Affected enemies take half regular damage. On a Fantastic success, they take full regular damage and the elemental type's special effect.",
                action: "Standard",
            cost: "15 Focus",
        },
        "Elemental Barrier": {
            name: "Elemental Barrier",
            description: "The character forms a wall of their element.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Blast, Rank 2",
            duration: "Concentration",
            effect: "The character forms a wall of their element within their line of sight and up to 10 spaces away per rank. This covers up to 2 spaces across (vertically/horizontally) per their rank. The character makes an Agility check and compares the results against the Agility defense of any target in the affected spaces. On a success, the character chooses which side of the barrier the target winds up on. On a failure, the target chooses. On a Fantastic success, the target suffers the element's special effect too. Attacks against the barrier are against the character's Ego defense. Any attacks against it that do 10 points of damage or less are instantly absorbed, and the barrier continues. If an attack does more than 10 points of damage, it destroys the barrier. Either way, the attack leaves those behind the barrier unharmed.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Elemental Blast": {
            name: "Elemental Blast",
            description: "The character blasts a foe with their element.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Burst, Rank 2",
            duration: "Instant",
            effect: "The character makes a ranged attack with an edge at an enemy in line of sight. For this attack, add +1 to the character's Agility damage bonus for every 2 points of Focus they spend. On a success, an affected target takes that total damage. On a Fantastic success, an affected target takes double that total damage and suffers the elemental type's special effect.",
            action: "Standard",
            cost: "5 or more Focus",
            range: "10 spaces",
        },
        "Elemental Burst": {
            name: "Elemental Burst",
            description: "The character fires a burst of their element.",
                powerSet: "Elemental Control",
                prerequisites: "None",
            duration: "Instant",
            effect: "The character makes a ranged attack against an enemy in line of sight. If the attack is a success, it inflicts regular damage. On a Fantastic success, the enemy takes double damage instead and the elemental type's special effect.",
            action: "Standard",
            range: "10 spaces",
        },
        "Elemental Form": {
            name: "Elemental Form",
            description: "The character's body is made of their element.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Reinforcement, Rank 3",
                duration: "Permanent",
            effect: "The character's body is made entirely of their element, which gives them a steady supply of their element to use and makes them essentially unkillable. When they lose all their Health, their form loses its cohesion and falls apart. When they have at least 1 Health\u2014which they can gain back over time, normally\u2014they can re-form. If the character wishes to use their elemental body in unusual ways, they should pick Plasticity powers. If they wish to be able to be fully human at times, they should take the Shape-Shift power.",
        },
        "Elemental Grab": {
            name: "Elemental Grab",
            description: "The character uses their element to snare a target.",
                powerSet: "Elemental Control",
            prerequisites: "Elemental Burst, Rank 2",
                duration: "Concentration",
            effect: "The character makes an Ego attack against a target's Melee defense within 5 spaces times the character's rank. If the attack is a success, the character grabs the target with their element. On a Fantastic success, the target can also be pinned and suffers the element's special effect. Breaking free requires a successful Melee check against target number 20.",
                action: "Standard",
                cost: "5 Focus",
            range: "Varies",
        },
        "Elemental Infusion": {
            name: "Elemental Infusion",
            description: "The character infuses a weapon with their element.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Burst, Rank 2",
            duration: "Concentration",
            effect: "The character infuses their energy into a handheld weapon in their grasp. When the character gets a Fantastic success attacking with the weapon, add the energy's special effect.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Elemental Prison": {
            name: "Elemental Prison",
            description: "The character can create a cage of their element.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Protection 1",
            duration: "Concentration",
            effect: "The character picks a point within their line of sight and traps any chosen targets within up to 5 spaces times their rank\u2014in a prison comprised of their element. When the Elemental Prison is formed, the character makes an Ego check and compares the results against the Agility defense of targets inside the enclosed spaces. On each success, the character traps the target within the prison's perimeter. On a Fantastic success, such imprisoned people suffer full damage and the element's special effect too. Attacks against the prison are against the character's Ego defense. Any attacks against the prison are absorbed as if made against the character's Elemental Protection power, and the prison continues. If an attack does more damage than the character's Elemental Protection power can sustain, it destroys the prison, but no one inside is harmed.",
            action: "Standard",
            cost: "Same as the character's Elemental Protection power",
        },
        "Elemental Protection 1": {
            name: "Elemental Protection 1",
                description:
                "The character protects themselves with their element.",
                powerSet: "Elemental Control",
            prerequisites: "Elemental Barrier, Rank 2",
                duration: "Concentration",
            effect: "The character protects themselves with their element. Any attacks against them that do 10 points of damage or less are instantly absorbed, and the protection continues. If an attack does more than 10 points of damage, it destroys the protection. Either way, the character remains unharmed.",
            action: "Standard or Reaction",
            trigger: "The character is attacked or otherwise in danger.",
            cost: "5 Focus",
        },
        "Elemental Protection 2": {
            name: "Elemental Protection 2",
            description: "The character's elemental protection is like armor.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Protection 1, Rank 3",
            duration: "Concentration",
            effect: "The character protects themselves with their element. Any attacks against them that do 20 points of damage or less are instantly absorbed, and the protection continues. If an attack does more than 20 points of damage, it destroys the protection. Either way, the character remains unharmed.",
            action: "Standard or Reaction",
            trigger: "The character is attacked or otherwise in danger.",
            cost: "10 Focus",
        },
        "Elemental Protection 3": {
            name: "Elemental Protection 3",
            description: "The character's elemental protection is like a tank.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Protection 2, Rank 4",
            duration: "Concentration",
            effect: "The character protects themselves with their element. Any attacks against them that do 30 points of damage or less are instantly absorbed, and the protection continues. If an attack does more than 30 points of damage, it destroys the protection. Either way, the character remains unharmed.",
            action: "Standard or Reaction",
            trigger: "The character is attacked or otherwise in danger.",
            cost: "15 Focus",
        },
        "Elemental Protection 4": {
            name: "Elemental Protection 4",
            description:
                "The character's elemental protection is like a fortress.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Protection 3, Rank 5",
            duration: "Concentration",
            effect: "The character protects themselves with their element. Any attacks against them that do 40 points of damage or less are instantly absorbed, and the protection continues. If an attack does more than 40 points of damage, it destroys the protection. Either way, the character remains unharmed.",
            action: "Standard or Reaction",
            trigger: "The character is attacked or otherwise in danger.",
            cost: "20 Focus",
        },
        "Elemental Push": {
            name: "Elemental Push",
            description: "The character can move a target with their element.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Burst, Rank 3",
            duration: "Instant",
            effect: "The character makes an Ego attack against the target's Agility defense. If the attack succeeds, the character can move the target in any direction, up to 1 space times the character's rank. On a Fantastic success, the target also takes regular damage, is knocked prone, and suffers the element's special effect.",
                action: "Standard",
                cost: "10 Focus",
            },
        "Elemental Reinforcement": {
            name: "Elemental Reinforcement",
            description:
                "The character reinforces their powers with their element.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Protection 1",
            duration: "Instant",
            effect: "The character can transfer any Health damage that gets through an elemental power that grants damage protection to their Focus instead, leaving the protection intact.",
            action: "Reaction",
            trigger:
                "Damage gets through an elemental power that grants damage protection",
            cost: "Varies",
        },
        "Elemental Ricochet": {
            name: "Elemental Ricochet",
            description:
                "The character bounces the burst off one foe and into another.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Burst, Rank 3",
            duration: "Instant",
            effect: "The character makes a ranged attack against a target in line of sight. If the attack is a success, it inflicts regular damage. On a Fantastic success, energy also bounces off the first target to another in line of sight, and the character can make a new attack against that target, adding the new range to the previous attack's range. This can be repeated until an attack is not fantastic.",
            action: "Standard",
            cost: "10 Focus",
            range: "10 spaces times the character's rank",
        },
        "Elemental Sphere": {
            name: "Elemental Sphere",
            description:
                "The character can create a protective sphere of their element.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Protection 1",
            duration: "Concentration",
            effect: "The character envelops themselves\u2014and any chosen people within up to 5 spaces times their rank\u2014in a protective sphere comprised of their element. When the sphere is formed, the character makes an Ego check and compares the results against the Agility defense of unwanted characters in the enclosed spaces. On a success, the character can move any unwanted people within the sphere's perimeter to spaces outside of the sphere. On a Fantastic success, such moved people suffer full damage and the element's special effect. Attacks against the sphere are against the character's Ego defense. Any attacks against the sphere are absorbed as if made against the character's Elemental Protection power, and the sphere continues. If an attack does more damage than the character's Elemental Protection power can sustain, it destroys the sphere, but no one inside is harmed.",
            action: "Standard or Reaction",
            cost: "Same as the character's Elemental Protection power",
        },
        "Elemental Suffocation": {
            name: "Elemental Suffocation",
            description:
                "The character envelops a target's head in an element.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Grab, Rank 4",
            duration: "Instant",
            effect: "The character makes an Ego attack against the grabbed target's Resilience defense. If the attack is a success, the target takes regular damage. On a Fantastic success, the target can also be pinned and suffers the element's special effect. With elements that aren't suited to suffocation, this power chokes the target instead.",
            action: "Standard or Reaction",
            trigger: "The target is grabbed with Elemental Grab.",
            cost: "15 Focus",
            range: "Varies",
        },
        "Energy Absorption": {
            name: "Energy Absorption",
            description: "The character turns damage into power.",
            powerSet: "Basic",
            prerequisites: "Rank 4",
            duration: "Instant",
            effect: "The character can take any Health damage done to them (after applying any damage reduction), ignore it, and add that number to their Focus instead. In this way, they can increase their Focus up to double their regular maximum Focus. Once the combat is over, any extra Focus over the character's regular maximum Focus score fades away.",
            action: "Reaction",
            trigger: "The character takes Health damage.",
            cost: "15 Focus",
        },
        "Environmental Protection": {
            name: "Environmental Protection",
            description: "Environmental effects don't bother the character.",
            powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character is not harmed by intense cold or heat, the pressure of the deep seas, or the intense radiation and vacuum of space. The player can choose any or all of these protections, as best fits with the character concept.",
        },
        "ESP": {
            name: "ESP",
            description: "The character can sense the presence of others.",
            powerSet: "Telepathy",
                prerequisites: "None",
            duration: "Concentration",
            effect: "The character can reach out with their mind to sense the presence of others within 100 spaces per rank. This tells them the person's location and general status. It can also identify if they have super-powers or not. If a target or targets wish to remain undetected, the character must make a Logic check and compare it against each target's Vigilance defense. If they succeed, they sense the target. On a Fantastic success, they can also identify the source of any powers the target has.",
            action: "Standard",
        },
        "Evasion": {
            name: "Evasion",
            description: "The character can dodge fists quickly.",
            powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character can use their Agility defense score against Melee attacks too.",
        },
        "Evil Eye": {
            name: "Evil Eye",
            description:
                "The character can inflict trouble on those who cross their path.",
            powerSet: "Luck",
            prerequisites: "Jinx You, Rank 2",
            duration: "Concentration",
            effect: "The character picks a foe in their line of sight. That foe has trouble on all action checks made for the power's duration. There is no limit on the range between the character and the foe once the power is activated. The character must pay the Focus cost at the start of each of their subsequent turns of concentration to keep the power working.",
            action: "Standard",
            cost: "5 Focus per turn",
            range: "5 spaces per rank",
        },
        "Exorcism": {
            name: "Exorcism",
            description:
                "The character removes an intruder from someone's body.",
            powerSet: "Magic",
            prerequisites: "Rank 4",
            duration: "Instant",
            effect: "The character attempts to remove the possessor from a possessed target. The character makes an Ego check against the possessor's Ego defense. On a success, the possessor's concentration is broken, ending the possession. On a Fantastic success, all of the possessor's concentrations are broken, and the possessor is stunned for one round too.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Exploit": {
            name: "Exploit",
            description: "The character finds a weak spot and exploits it.",
            powerSet: "Melee Weapons",
            prerequisites: "Vicious Attack, Rank 2",
            duration: "Instant",
            effect: "The character makes a Melee attack against the target's Resilience defense score. If the attack is a success, the damage it does ignores Health Damage Reduction. On a Fantastic success, the target suffers double damage and the weapon's special effect.",
            action: "Reaction",
            trigger:
                "A Fantastic success on an attack using the character's weapon that deals at least 1 point of damage",
            cost: "5 Focus",
        },
        "Extend Invisibility": {
            name: "Extend Invisibility",
            description: "The character makes something else invisible.",
            powerSet: "Illusion",
            prerequisites: "Invisibility",
            duration: "Concentration",
            effect: "The character makes something\u2014a single person or object\u2014within reach invisible. This can be one size bigger than them for every rank they have.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Extended Reach 1": {
            name: "Extended Reach 1",
            description: "The character's reach grows.",
            powerSet: "Plasticity",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character's reach quadruples.",
        },
        "Extended Reach 2": {
            name: "Extended Reach 2",
            description: "The character can reach a looong way.",
            powerSet: "Plasticity",
            prerequisites: "Extended Reach 1, Rank 2",
                duration: "Permanent",
            effect: "The character's reach is 10 times normal.",
        },
        "Fast Attacks": {
            name: "Fast Attacks",
            description: "The character's weapons lash out!",
            powerSet: "Melee Weapons",
                prerequisites: "None",
            duration: "Instant",
            effect: "The character splits their attack to make two close attacks against separate targets within reach (or they can focus a single attack on a single target). Make a single Melee check and compare it to the targets' Melee defenses. On a success, the affected target takes half regular damage. On a Fantastic success, the affected target takes full damage, and the character can make a bonus attack with this power against any target within reach, with the same effect.",
            action: "Standard",
        },
        "Fast Hands": {
            name: "Fast Hands",
            description:
                "The character can shoot faster than the eye can blink.",
            powerSet: "Ranged Weapons",
            prerequisites: "Point-Blank Parry, Rank 3",
                duration: "Permanent",
            effect: "The character gains one additional reaction per round. This reaction can be used only to trigger a Ranged Weapons power.",
        },
        "Fast Strikes": {
            name: "Fast Strikes",
            description: "The character unleashes a flurry of strikes.",
            powerSet: "Martial Arts",
                prerequisites: "None",
            duration: "Instant",
            effect: "The character splits their attack to make two close attacks against separate targets within reach (or they can focus a single attack on a single target). Make a single Melee check and compare it to the targets' Melee defenses. On a success, the affected target takes half regular damage. On a Fantastic success, the affected target takes full damage.",
            action: "Standard",
        },
        "Flames of the Foltine": {
            name: "Flames of the Foltine",
            description:
                "The character shoots jets of enchanted fire from their hands.",
            powerSet: "Magic",
            prerequisites: "Sorcerous, Rank 2",
            duration: "Instant",
            effect: "The character makes an Ego check against the Agility defense of a target in their line of sight. If the attack is a success, it inflicts regular damage. On a Fantastic success, the target takes double damage and then suffers 5 points of damage at the end of every round until someone uses an action to put out the flames.",
            action: "Standard",
            cost: "5 Focus",
            range: "10 spaces",
        },
        "Flare": {
            name: "Flare",
            description: "The character generates a dazzling flare of light.",
            powerSet: "Illusion",
            prerequisites: "Illumination, Rank 3",
            duration: "Instant",
            effect: "The character makes an Ego check and compares that against the Vigilance defense of every enemy within 5 spaces. Each beaten enemy is blinded for one turn. On a Fantastic success, the flare inflicts regular damage too.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Flexible Bones 1": {
            name: "Flexible Bones 1",
            description: "The character's skeleton is rubbery.",
            powerSet: "Plasticity",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character gains Health Damage Reduction 1. They also have an edge on Agility checks for contortion and escape.",
        },
        "Flexible Bones 2": {
            name: "Flexible Bones 2",
            description: "The character's skeleton is flexible and pliable.",
            powerSet: "Plasticity",
            prerequisites: "Flexible Bones 1, Rank 2",
                duration: "Permanent",
            effect: "The character gains Health Damage Reduction 2. They also have a double edge on Agility checks for contortion and escape.",
        },
        "Flexible Fingers": {
            name: "Flexible Fingers",
            description:
                "The character can turn their fingers and hands into whatever tool they need.",
            powerSet: "Plasticity",
                prerequisites: "None",
                duration: "Permanent",
            effect: "With a standard action, the character can automatically pick any lock that requires a physical key. They can also shape their hands to form almost any other kind of simple tool.",
        },
        "Flight 1": {
            name: "Flight 1",
            description: "The character can soar into the sky.",
            powerSet: "Basic",
            prerequisites: "Rank 2",
                duration: "Permanent",
            effect: "The character can fly. Their combat Flight Speed is equal to their rank times their Run Speed. Outside of combat, they can move three times their Flight Speed.",
        },
        "Flight 2": {
            name: "Flight 2",
            description: "The character can zoom across the sky.",
            powerSet: "Basic",
            prerequisites: "Flight 1, Rank 3",
                duration: "Permanent",
            effect: "Outside of combat, the character can fly up to 50 times their Flight Speed.",
        },
        "Flying Double Kick": {
            name: "Flying Double Kick",
            description:
                "The character leaps into the air and snap kicks two enemies at once.",
            powerSet: "Martial Arts",
            prerequisites: "Leg Sweep, Rank 3",
            duration: "Instant",
            effect: "The character makes a close attack against two enemies within reach. If an attack is a success, the enemy takes regular damage. If an attack is a Fantastic success, the enemy takes double damage and is knocked prone.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Focus Fire": {
            name: "Focus Fire",
            description: "The character calls out a target.",
            powerSet: "Tactics",
            prerequisites: "Battle Plan, Rank 3",
            duration: "Concentration",
            effect: "The character calls out an enemy in line of sight and inspires one or more allies of their choice in earshot, up to the character's Vigilance. They gain an edge on all action checks against that enemy.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Focused Fury": {
            name: "Focused Fury",
            description:
                "The character channels their rage into a devastating blow.",
            powerSet: "Melee Weapons",
            prerequisites: "Exploit, Rank 3",
            duration: "Instant",
            effect: "The character makes a close attack with an edge. For this attack, add +1 to the character's Melee damage bonus for every 2 points of Focus they spend. On a success, an affected target takes that total damage. On a Fantastic success, an affected target takes double that total damage and suffers the weapon's special effect.",
            action: "Standard",
            cost: "5 or more Focus",
        },
        "Focused Strike": {
            name: "Focused Strike",
            description: "The character finds the right spot and strikes.",
            powerSet: "Martial Arts",
            prerequisites: "Chain Strikes, Rank 3",
            duration: "Instant",
            effect: "The character makes a close attack. Add +1 to the character's Melee damage bonus for every 2 points of Focus they spend. On a success, an affected target takes that total damage. On a Fantastic success, an affected target takes double that total damage and is stunned for one round.",
            action: "Standard",
            cost: "10 or more Focus",
        },
        Fool: {
            name: "Fool",
            description:
                "The character makes people believe they are someone else.",
            powerSet: "Telepathy",
            prerequisites: "Telepathic Link, Rank 2",
            duration: "Concentration",
            effect: "The character uses a mirage to alter their appearance in the minds of anyone within 20 spaces per rank. Cameras (for instance) can still record them normally, but when people look in the character's direction, they see someone else. The target number for anyone trying to see through the mirage is the character's Logic defense. If the character is impersonating someone known to the other person, that person has an edge.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Furious Attacks": {
            name: "Furious Attacks",
            description: "The character's weapons smash into the foe.",
            powerSet: "Melee Weapons",
            prerequisites: "Whirling Frenzy, Rank 3",
            duration: "Instant",
            effect: "The character splits their attack to make two close attacks against separate targets within reach (or they can focus a single attack on a single target). Make a single Melee check and compare it to the targets' Melee defenses. For these attacks, add +1 to the character's Melee damage bonus for every 2 points of Focus they spend. On a success, an affected target takes half that total damage. On a Fantastic success, an affected target takes full damage and suffers the weapon's special effect.",
            action: "Standard",
            cost: "10 or more Focus",
        },
        "Grand Mirage": {
            name: "Grand Mirage",
            description:
                "The character can make a mirage appear in a group's mind.",
            powerSet: "Telepathy",
            prerequisites: "Mirage, Rank 4",
            duration: "Concentration",
            effect: "The character creates a full-sensory mirage that affects everyone in a Telepathic Network they set up who is also in the same locale. The mirage can be of anything the character desires, and it can move freely.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Grand Fool": {
            name: "Grand Fool",
            description:
                "The character mentally makes the group they're with appear to be like other people.",
            powerSet: "Telepathy",
            prerequisites: "Fool, Rank 3",
            duration: "Concentration",
            effect: "The character uses a mirage to alter their appearance\u2014and the appearance of up to one other person per rank, within 10 spaces\u2014in the minds of people within 20 spaces per rank. Cameras (for instance) can still record them, but when people look in the characters' direction, they see other people. The target number for anyone trying to see through the mirage is the character's Logic defense. If the affected characters are impersonating people known to the other person, that person has an edge.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Grand Illusion": {
            name: "Grand Illusion",
            description:
                "By manipulating light and sound, the character creates an incredibly real hologram.",
            powerSet: "Illusion",
            prerequisites: "Animated Illusion, Rank 3",
            duration: "Concentration",
            effect: "The character creates a sound and sight illusion anywhere in line of sight, within 50 spaces. The illusion can be of anything up to five sizes larger than the character, and it can move freely within its limits. The character breaks concentration if they move beyond 50 spaces from the illusion or lose line of sight of it.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Grappling Technique": {
            name: "Grappling Technique",
            description: "The character snags an enemy.",
            powerSet: "Martial Arts",
            prerequisites: "Rank 2",
            duration: "Instant",
            effect: "The character makes a close attack. If the attack is a success, the enemy takes regular damage and is grabbed. On a Fantastic success, the target takes double damage instead and is pinned too.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Ground-Shaking Stomp": {
            name: "Ground-Shaking Stomp",
            description:
                "The character smashes the ground so hard the earth trembles.",
            powerSet: "Super-Strength",
            prerequisites: "Smash, Rank 3",
            duration: "Instant",
            effect: "The character makes a Melee check and compares that against the Agility defense of every target within the character's reach plus their rank in spaces. Any targets the attack succeeds against take half regular damage. On a Fantastic success, the targets take full damage and are knocked prone.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Group Flight": {
            name: "Group Flight",
            description:
                "The character can carry others with them into the sky.",
            powerSet: "Basic",
            prerequisites: "Flight 1, Rank 2",
            duration: "Concentration",
            effect: "For every point of Ego the character has, they can hoist one ally into the air with them. The Flight Speed of the group is half the character's, and all affected allies must remain within 5 spaces times the character's rank. The character controls each ally's speed and position during the character's turn, but they can release any or all allies at any time.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Group Invisibility": {
            name: "Group Invisibility",
            description: "The character can make something else invisible.",
            powerSet: "Illusion",
            prerequisites: "Extend Invisibility, Rank 4",
            duration: "Concentration",
            effect: "For every point of Ego defense the character has, they can make one person or thing invisible, including themselves. Each of these can be one size bigger than them for every rank they have.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Group Levitation": {
            name: "Group Levitation",
            description: "The character can lift others into the air too.",
            powerSet: "Telekinesis",
            prerequisites: "Levitation, Rank 2",
            duration: "Concentration",
            effect: "The character can move up to one person per rank through the air in any direction at the character's Run Speed. The levitated target(s) must remain within 5 spaces times the character's rank. If any target does not wish to be moved like this, they must be telekinetically grabbed first.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Grow 1": {
            name: "Grow 1",
            description: "The character sizes up!",
            powerSet: "Resize",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character can grow up to huge size. They can return to their normal size at will.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
        },
        "Grow 2": {
            name: "Grow 2",
            description: "The character becomes even bigger!",
            powerSet: "Resize",
            prerequisites: "Grow 1",
            duration: "Permanent",
            effect: "The character can grow up to gigantic size. They can return to their normal size at will.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
        },
        "Grow 3": {
            name: "Grow 3",
            description: "The character can be the size of a house!",
            powerSet: "Resize",
            prerequisites: "Grow 2",
            duration: "Permanent",
            effect: "The character can grow up to titanic size. They can return to their normal size at will.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
        },
        "Grow 4": {
            name: "Grow 4",
            description: "The character can tackle kaiju!",
            powerSet: "Resize",
            prerequisites: "Grow 3",
            duration: "Permanent",
            effect: "The character can grow up to gargantuan size. They can return to their normal size at will.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
        },
        "Growing Attack": {
            name: "Growing Attack",
            description: "The character attacks as they grow.",
            powerSet: "Resize",
            prerequisites: "Grow 1, Rank 2",
            duration: "Instant",
            effect: "The character makes a close attack with an edge. If the attack succeeds, they do regular damage for the size they are growing to. On a Fantastic success, they do double damage and stun the target.",
            action: "Reaction",
            trigger: "The character grows.",
            cost: "5 Focus",
        },
        "Headshot": {
            name: "Headshot",
            description: "Ouch!",
            powerSet: "Ranged Weapons",
            prerequisites: "Stopping Power, Rank 3",
            duration: "Instant",
            effect: "The character makes a ranged attack with trouble on an enemy within the weapon's range. If the attack is a success, the enemy takes double normal damage. On a Fantastic success, the enemy takes triple damage. Either way, if the enemy suffers any actual damage, they are also stunned for one round.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Healing Factor": {
            name: "Healing Factor",
            description: "The character heals amazingly fast.",
            powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
            effect: "At the end of the character's turn, they regain Health equal to their Resilience. (This works outside of combat too, quickly bringing them back to full Health.)",
        },
        "Healing Hands": {
            name: "Healing Hands",
            description: "The character has a healing touch.",
            powerSet: "Healing",
            prerequisites: "Let's Go, Rank 3",
            duration: "Instant",
            effect: "The character can heal a target creature with a touch. For every point of Focus the character spends, the target regains a point of Health, up to their maximum score. The character must spend at least 10 Focus to use the power. Any Health points that would have been healed beyond the target's maximum Health are lost.",
            action: "Standard",
            cost: "10 or more Focus",
            range: "Reach",
        },
        "Heightened Senses 1": {
            name: "Heightened Senses 1",
            description: "The character has superior senses.",
            powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character can sense things roughly twice as far away as normal. They also have an edge on Vigilance checks to perceive things, and enemies have trouble on checks they make to sneak past the character.",
        },
        "Heightened Senses 2": {
            name: "Heightened Senses 2",
            description: "The character has senses as sharp as radar.",
            powerSet: "Basic",
            prerequisites: "Heightened Senses 1",
            duration: "Permanent",
            effect: "The character can sense things roughly four times as far away as normal. Their senses are so sharp that they can use some of them to compensate for the loss of others (say, if blinded or deafened). They can even listen to the heartbeat of a person in the same room to see if they are lying\u2014although this is as reliable as a traditional lie detector: far from 100% and not admissible in court. They also have a double edge on Vigilance checks to perceive things, and enemies have double trouble on checks they make to sneak past the character.",
        },
        "Hellfire Chains": {
            name: "Hellfire Chains",
            description: "The character shoots out chains covered in hellfire.",
            powerSet: "Magic",
            prerequisites: "Cursed, Rank 2",
            duration: "Concentration",
            effect: "The character summons chains covered in hellfire and can use them to bind or smash targets. They can attack anyone within 10 spaces per rank and line of sight. Make an Ego attack. On a success, the target takes regular Health damage. On a Fantastic success, the target is grabbed and paralyzed too. If a target is grabbed by the hellfire chains, on each subsequent round, the character can make an Ego check against the target's Resilience defense to inflict regular Health damage and regular Focus damage. Breaking free from the hellfire chains requires a Melee check with a target number of 20.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Hex Bolt": {
            name: "Hex Bolt",
            description: "The character hurls a hex bolt at their foe.",
            powerSet: "Magic",
            prerequisites: "Chaotic, Rank 2",
            duration: "Concentration",
            effect: "The character fires a hex bolt at a foe. Make an Ego check against the target's Agility defense. On a success, the attack does regular damage. On a Fantastic success, it does double damage and causes the target trouble for one round.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Hit and Run": {
            name: "Hit and Run",
            description: "The character hits hard and keeps moving!",
            powerSet: "Melee Weapons",
            prerequisites: "None",
            duration: "Instant",
            effect: "The character makes a close attack with an edge on an enemy. If the attack is a success, the enemy takes regular damage, and the character can make an additional movement up to half their Run Speed for free. On a Fantastic success, the enemy takes double damage and suffers the weapon's special effect.",
            action: "Standard",
        },
        "Hit the Dirt": {
            name: "Hit the Dirt",
            description: "The character gets their allies to take cover.",
            powerSet: "Tactics",
            prerequisites: "Keep Moving, Rank 2",
            duration: "Instant",
            effect: "All allies within earshot can fall prone if they wish and are able to. If falling prone makes the ally an ineligible target for the initial attack, the attack automatically fails.",
            action: "Reaction",
            trigger:
                "An enemy in line of sight makes an attack on an ally within earshot.",
            cost: "5 Focus",
        },
        "Hurled Shield Bash": {
            name: "Hurled Shield Bash",
            description: "The character hurls their mighty shield at an enemy.",
                powerSet: "Shield Bearer",
            prerequisites: "Shield Bash, Rank 2",
            duration: "Instant",
            effect: "The character makes a ranged attack on an enemy. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the enemy takes double damage and is knocked prone. The shield then bounces back to the character.",
            action: "Standard",
            cost: "5 Focus",
            range: "10 spaces times the character's rank",
        },
        "Hurled Shield Block": {
            name: "Hurled Shield Block",
            description:
                "The character hurls their mighty shield to protect an ally from an attack.",
            powerSet: "Shield Bearer",
            prerequisites: "Shield 1, Rank 2",
            duration: "Instant",
            effect: "The ally gains Health Damage Reduction equal to the character's Shield power against that attack. The shield then bounces back to the character.",
            action: "Reaction",
            trigger: "An enemy makes an attack against an ally's Agility.",
            cost: "5 Focus",
            range: "5 spaces times the character's rank",
        },
        "Hurled Shield Deflection": {
            name: "Hurled Shield Deflection",
            description:
                "The character hurls their mighty shield to save an ally from an attack.",
            powerSet: "Shield Bearer",
            prerequisites: "Shield Deflection, Rank 2",
            duration: "Instant",
            effect: "The enemy has trouble on the attack. The shield then bounces back to the character.",
            action: "Reaction",
            trigger: "An enemy makes an attack against an ally's Agility.",
            cost: "5 Focus",
            range: "5 spaces times the character's rank",
        },
        "Iconic Weapon": {
            name: "Iconic Weapon",
            description:
                "The character is known for owning and using a unique and powerful weapon.",
            powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character is known for owning and using a unique and powerful weapon, like Mjolnir (Thor's hammer) or Captain America's shield. The Narrator must approve the details of this weapon. This power can be taken more than once, but each time must be with a different weapon.",
        },
        "Icy Tendrils of Ikthalon": {
            name: "Icy Tendrils of Ikthalon",
            description: "The character unleashes freezing tendrils at a foe.",
            powerSet: "Magic",
            prerequisites: "Sorcerous, Rank 2",
            duration: "Instant",
            effect: "The character makes an Ego check against the Agility defense of a target in their line of sight. If the attack is a success, it inflicts regular damage. On a Fantastic success, the enemy takes double that total damage and is paralyzed by the ice.",
            action: "Standard",
            cost: "5 Focus",
            range: "10 spaces",
        },
        "Illumination": {
            name: "Illumination",
            description: "The character creates a bright light.",
            powerSet: "Illusion",
            prerequisites: "None",
            duration: "Concentration",
            effect: "The character illuminates one object or point in line of sight, within 50 spaces, with bright light. The character can maintain concentration on the effect even if they move out of range or line of sight.",
            action: "Standard",
        },
        "Images of Ikonn": {
            name: "Images of Ikonn",
            description:
                "The character creates illusory duplicates of a person.",
            powerSet: "Magic",
            prerequisites: "Sorcerous, Rank 2",
            duration: "Concentration",
            effect: "The character creates one sound and sight illusory duplicate per rank of one person they've met (including themselves). The duplicates look and sound exactly like the original and are under the character's complete control. They start in the same space as the character and instantly move into any open space around them, up to 2 spaces away, during which time the character can swap places with any of the duplicates. If the character is duplicating themselves, the character's player should secretly record which one is the actual character. The duplicates can move up to 10 spaces away from the character, and they can pretend to attack (and miss) opponents. Any attack that hits a duplicate instantly removes it. If the character successfully attacks someone or does something else to make the truth evident, the illusion ends. This spell can also be used to see through someone else's illusion. When used in this way, it gives the character a double edge on their Ego check.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Immovable": {
            name: "Immovable",
            description: "Nobody pushes the character around.",
            powerSet: "Shield Bearer, Super-Strength",
            prerequisites: "None",
            duration: "Instant",
            effect: "For every point of Melee defense the character has, they can reduce knockback by 1 space.",
            action: "Reaction",
            trigger: "The character is knocked back or knocked prone.",
        },
        "Information Upload": {
            name: "Information Upload",
            description:
                "The character can transmit loads of information straight into another's mind.",
            powerSet: "Telepathy",
            prerequisites: "Telepathic Link, Rank 2",
            duration: "Concentration",
            effect: "The character transmits a knowledge-based label (a trait or tag) of their own to a target with whom they have established a telepathic link\u2014willing or not. The label lasts until the target sleeps. The character can also impart any other kind of knowledge they have to a target this way. The process is almost instantaneous.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Inspiration": {
            name: "Inspiration",
            description: "The character's words inspire their allies.",
            powerSet: "Basic",
            prerequisites: "None",
            duration: "1 round",
            effect: "The character inspires an ally in earshot. The ally gains an edge on all action checks until the start of the character's next turn.",
            action: "Standard",
        },
        "Instant Replay": {
            name: "Instant Replay",
            description: "The character rewinds time.",
            powerSet: "Omniversal Travel",
            prerequisites: "Rank 3",
            duration: "Instant",
            effect: "Once per battle, the character can make a second attempt at a check that they just failed, erasing and replacing the first attempt entirely.",
            action: "Reaction",
            trigger: "The character fails a check.",
            cost: "10 Focus",
        },
        "Integrity": {
            name: "Integrity",
            description: "The character can think their way through.",
            powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character can use their Logic defense score against Ego attacks too.",
        },
        "Invisibility": {
            name: "Invisibility",
            description: "The character turns as transparent as glass.",
            powerSet: "Illusion",
            prerequisites: "Rank 2",
            duration: "Concentration",
            effect: "The character becomes invisible. They have an edge on Agility checks to sneak past people, and enemies have trouble on Vigilance checks to perceive them. It's even harder to spot things that are invisible but aren't moving. Characters must be actively trying to do so to be able to make a Vigilance check.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Jinx": {
            name: "Jinx",
            description: "The character puts a jinx on a foe.",
            powerSet: "Magic",
            prerequisites: "Chaotic, Rank 2",
            duration: "Concentration",
            effect: "The character makes an Ego check against the target's Ego defense. If it succeeds, the target has trouble on all actions. On a Fantastic success, the target loses their next standard action.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Jinx You": {
            name: "Jinx You",
            description: "The character can hit you with a jinx.",
            powerSet: "Luck",
            prerequisites: "Rank 2",
            duration: "Concentration",
            effect: "The character makes a Melee check to touch the target. On a success, the power takes effect, and that foe has trouble on all action checks made for the power's duration. On a Fantastic success, the target also takes standard (not doubled) Melee damage. The character must pay the Focus cost at the start of each of their subsequent turns of concentration to keep the power working.",
            action: "Standard",
            cost: "5 Focus per turn",
            range: "Reach",
        },
        "Jinx You All": {
            name: "Jinx You All",
            description:
                "The character can jinx a whole group of foes at once.",
            powerSet: "Luck",
            prerequisites: "Evil Eye, Rank 3",
            duration: "Concentration",
            effect: "The character picks up to one foe per rank in their line of sight. Those foes have trouble on all action checks made for the power's duration. There is no limit on the range from the character to their foes once the power is activated. The character must pay the Focus cost at the start of each of their subsequent turns of concentration to keep the power working.",
            action: "Standard",
            cost: "10 Focus per turn",
            range: "5 spaces per rank",
        },
        "Jump 1": {
            name: "Jump 1",
            description: "The character can leap about like a frog.",
            powerSet: "Spider-Powers, Super-Strength",
            prerequisites: "Rank 2",
            duration: "Permanent",
            effect: "The character gains the Jump movement mode with a Jump Speed equal to their Run Speed. They can jump this distance in any direction, vertically as well as horizontally.",
        },
        "Jump 2": {
            name: "Jump 2",
            description: "The character can leap around with dazzling speed.",
            powerSet: "Spider-Powers, Super-Strength",
            prerequisites: "Jump 1, Rank 3",
            duration: "Permanent",
            effect: "The character's Jump Speed is equal to their rank times their Run Speed. Outside of combat, they can move three times as fast.",
        },
        "Jump 3": {
            name: "Jump 3",
            description:
                "The character can leap into the sky with a single bound.",
            powerSet: "Spider-Powers, Super-Strength",
            prerequisites: "Jump 2, Rank 4",
            duration: "Permanent",
            effect: "Outside of combat, the character can jump up to 50 times their Jump Speed.",
        },
        "Keep Moving": {
            name: "Keep Moving",
            description: "The character can keep allies moving under fire.",
            powerSet: "Tactics",
            prerequisites: "None",
            duration: "Instant",
            effect: "The demoralized or stunned condition ends.",
            action: "Reaction",
            trigger:
                "An ally in line of sight and earshot is demoralized or stunned.",
        },
        "Kill Zone": {
            name: "Kill Zone",
            description:
                "The character shoots at every target that moves through their kill zone.",
            powerSet: "Ranged Weapons",
            prerequisites: "Covering Fire, Headshot, Rank 4",
            duration: "Instant",
            effect: "The character makes a ranged attack on the enemy. If the attack is a success, the enemy takes normal damage. On a Fantastic success, the enemy takes double damage. Either way, the character regains their reaction. Each target can be affected by this attack by this character only once per round.",
            action: "Reaction",
            trigger:
                "An enemy in the character's line of sight starts to move.",
            cost: "15 Focus",
        },
        "Leaping Leglock": {
            name: "Leaping Leglock",
            description:
                "The character leaps into the air and snaps their legs around an enemy.",
            powerSet: "Martial Arts",
            prerequisites: "Flying Double Kick, Crushing Grip, Rank 4",
            duration: "Instant",
            effect: "The character makes a close attack against an enemy. If the attack is a success, the enemy is grabbed and dealt regular damage. On a Fantastic success, the enemy takes double damage and is grabbed and stunned for one round. Either way, both the character and the enemy are knocked prone.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Leech Life": {
            name: "Leech Life",
            description: "The character consumes the life force of another.",
            powerSet: "Magic",
            prerequisites: "Rank 2",
            duration: "Instant",
            effect: "The character makes an Ego attack against the target's Resilience defense. If it succeeds, the target takes regular Health damage, and the character heals half that much Health for themselves. On a Fantastic success, the character heals the full Health damage instead.",
            action: "Reaction",
            trigger: "Target is grabbed.",
            cost: "5 Focus",
        },
        "Leg Sweep": {
            name: "Leg Sweep",
            description:
                "The character knocks the enemy's legs from under them.",
            powerSet: "Martial Arts",
            prerequisites: "Fast Strikes, Rank 2",
            duration: "Instant",
            effect: "The character makes a close attack. If it succeeds, the enemy takes regular damage and is knocked prone. If it's a Fantastic success, the enemy is stunned for one round too.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Let's Go": {
            name: "Let's Go",
            description: "The character can get a friend back on their feet.",
            powerSet: "Healing",
            prerequisites: "Rank 2",
            duration: "Concentration",
            effect: "The character can eliminate the effects of a target losing all of their Health. Rather than falling unconscious, the target remains awake and mobile. They can use movement actions but not reactions or standard actions. This does not protect a character from death. They can be killed normally, and this power cannot bring back a dead character. Once the power takes effect, the target does not have to remain within the character's reach. When the effect ends, if the target has 0 Health or less, they become unconscious. If the target's Health rises above 0 at any point, this power automatically ends.",
            action: "Standard or Reaction",
            trigger: "The target is knocked unconscious.",
            cost: "5 Focus",
            range: "Reach",
        },
        "Levitation": {
            name: "Levitation",
            description: "The character can hover and move.",
            powerSet: "Telekinesis",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character can move through the air in any direction at their Run Speed.",
        },
        "Lightning Actions": {
            name: "Lightning Actions",
            description: "The character has lightning-fast moves.",
            powerSet: "Super-Speed",
            prerequisites: "Rank 4",
            duration: "Permanent",
            effect: "The character has one extra standard action and one extra reaction each turn. Additionally, they can turn their Marvel die to a Fantastic success when making an initiative check.",
        },
        "Lucky Me": {
            name: "Lucky Me",
            description: "Things are about to go the character's way.",
            powerSet: "Luck",
            prerequisites: "Rank 2",
            duration: "Concentration",
            effect: "The character gains an edge on all action checks made while this power is in effect. The character must pay the Focus cost at the start of each of their subsequent turns of concentration to keep the power working.",
            action: "Standard",
            cost: "5 Focus per turn",
        },
        "Lucky Us": {
            name: "Lucky Us",
            description:
                "The character can share their good fortune with many friends.",
            powerSet: "Luck",
            prerequisites: "Wish You Luck, Rank 3",
            duration: "Concentration",
            effect: "The character picks up to one ally in their line of sight per the character's rank. The character and those allies gain an edge on all action checks made while this power is in effect. There is no limit on the range from the character to their allies once the power is activated. The character must pay the Focus cost at the start of each of their subsequent turns of concentration to keep the power working.",
            action: "Standard",
            cost: "10 Focus per turn",
            range: "5 spaces per rank",
        },
        "Machine Telepathy": {
            name: "Machine Telepathy",
            description:
                "The character can communicate with machines with their mind.",
            powerSet: "Telepathy",
                prerequisites: "None",
            duration: "Concentration",
            effect: "The character can communicate telepathically with one machine at a time, and they must have met or seen the machine before. The communication can be verbal, visual, or even more complex, such as imparting location information. There is no limit to the distance of the communication, as long as the character and the machine are in the same dimension. Simple machines do not have much to offer in the way of conversation, but they are also generally compliant with requests. Complex machines\u2014like computers, smartphones, and other electronics\u2014are also often compliant, but if they are secured in any way, they usually refuse to communicate with strangers. A Logic check can get the character past such security, and the Narrator should set the target number according to the strength of the security.",
            action: "Standard",
        },
        "Macrodimensional Travel": {
            name: "Macrodimensional Travel",
            description: "The character outgrows the universe!",
            powerSet: "Resize",
            prerequisites: "Grow 4, Rank 4",
            duration: "Instant",
            effect: "The character can grow enough to travel into the Macroverse, the Overspace, or other dimensions of enlarged space. They can return to their normal size at will. Note that this is something that most characters would rarely want to do, as it removes them entirely from their regular universe and places them in a dimension in which the rules of time and space work differently. An hour in the Macroverse, for example, is roughly equivalent to a month in a regular universe. A trip to the Overspace is too overwhelming for most minds to handle.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Memory Blip": {
            name: "Memory Blip",
            description: "The character erases a bit of someone's memory.",
            powerSet: "Telepathy",
            prerequisites: "Telepathic Link, Rank 2",
                duration: "Permanent",
            effect: "The character causes a target with whom they've established a Telepathic Link to forget something that's happened in the past hour. This gap can be up to an hour in length. The character makes a Logic check against the target's Logic defense. On a success, the memories are forgotten. On a Fantastic success, the target has trouble on checks to recover such memories in the future. Any time the target is given good reason to question the blank in their memory, they can make a Logic check to recover their memory. If they succeed, the original memory floods back. On a Fantastic success, they know for sure who did this to them.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Mental Punch": {
            name: "Mental Punch",
            description: "The character can blast a foe's mind in melee.",
            powerSet: "Telepathy",
            prerequisites: "None",
            duration: "Instant",
            effect: "The character makes a Melee attack against a target. If the attack is a success, it inflicts regular Focus damage (instead of Health damage). On a Fantastic success, the target takes double damage instead and is stunned for one round.",
            action: "Standard",
        },
        "Mental Shelter": {
            name: "Mental Shelter",
            description: "The character can create a shelter for their mind.",
            powerSet: "Telepathy",
            prerequisites: "Uncanny 1, Rank 3",
            duration: "Concentration",
            effect: "The character extends their mental defenses to protect any chosen people within up to 5 spaces times their rank. The protected targets are granted Focus Damage Reduction equal to the character's Uncanny power.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Microdimensional Travel": {
            name: "Microdimensional Travel",
            description: "The character shrinks out of the universe!",
            powerSet: "Resize",
            prerequisites: "Shrink 4, Rank 4",
            duration: "Instant",
            effect: "The character can shrink enough to travel into subatomic realms. They can return to their normal size at will. Note that this is something that most characters would rarely want to do, as it removes them entirely from their regular universe and places them in a dimension in which the rules of time and space work differently. The Underspace, for example, might make a fine place to hide, but there's little else of interest there.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Mighty 1": {
            name: "Mighty 1",
            description: "The character is superhumanly strong.",
            powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
            effect: "Treat the character as one size bigger for lifting, carrying, swinging, and throwing things. They also add +1 to their Melee damage multiplier, and they gain a +1 bonus to Melee checks other than attacks.",
        },
        "Mighty 2": {
            name: "Mighty 2",
            description: "The character could lift a bus.",
            powerSet: "Basic",
            prerequisites: "Mighty 1, Rank 2",
            duration: "Permanent",
            effect: "Treat the character as two sizes bigger for lifting, carrying, swinging, and throwing things. They also add +2 to their Melee damage multiplier, and they gain a +2 bonus to Melee checks other than attacks.",
        },
        "Mighty 3": {
            name: "Mighty 3",
            description: "The character could lift a house.",
            powerSet: "Basic",
            prerequisites: "Mighty 2, Rank 3",
            duration: "Permanent",
            effect: "Treat the character as three sizes bigger for lifting, carrying, swinging, and throwing things. They also add +3 to their Melee damage multiplier, and they gain a +3 bonus to Melee checks other than attacks.",
        },
        "Mighty 4": {
            name: "Mighty 4",
            description: "The character is among the strongest there are.",
            powerSet: "Basic",
            prerequisites: "Mighty 3, Rank 4",
            duration: "Permanent",
            effect: "Treat the character as four sizes bigger for lifting, carrying, swinging, and throwing things. They also add +4 to their Melee damage multiplier, and they gain a +4 bonus to Melee checks other than attacks.",
        },
        "Mind Interrogation": {
            name: "Mind Interrogation",
            description: "The character can root through a target's mind.",
            powerSet: "Telepathy",
            prerequisites: "Mind Reading, Rank 2",
            duration: "1 round",
            effect: "The character can delve into the mind of a single person with whom they have established a telepathic link. This requires a Logic check against the target's Logic defense. On a success, the character can ask a single simple question and get the answer from the target's mind. On a Fantastic success, the character can get more complex information.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Mind Reading": {
            name: "Mind Reading",
            description: "The character can read thoughts.",
            powerSet: "Telepathy",
            prerequisites: "Telepathic Link",
            duration: "1 round",
            effect: "The character can read the thoughts of a single person with whom they have established a Telepathic Link. This requires a Logic check against the target's Logic defense. On a success, the character can read the target's surface thoughts. On a Fantastic success, the character can ask a single simple question and get the answer from the target's mind.",
            action: "Standard",
        },
        "Mirage": {
            name: "Mirage",
            description:
                "The character can make mirages appear in a target's mind.",
            powerSet: "Telepathy",
            prerequisites: "Telepathic Link, Rank 3",
            duration: "Concentration",
            effect: "The character creates a full-sensory mirage that affects any target with whom they have established a link. The mirage can be of anything the character desires, and it can move freely.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Mirror Images": {
            name: "Mirror Images",
            description:
                "The character conjures up illusory duplicates of themselves.",
            powerSet: "Illusion",
            prerequisites: "Animated Illusion, Rank 3",
            duration: "Concentration",
            effect: "The character creates one sound and sight illusory duplicate of themselves per rank. The duplicates look and sound exactly like them and are under their complete control. They start in the same space as the character and instantly move into any open space around them, up to 2 spaces away, during which time the character can swap places with any of the duplicates. The character's player should secretly record which one is the actual character. The duplicates can move up to 10 spaces away from the character, and they can pretend to attack (and miss) opponents. Any attack that hits a duplicate instantly removes it. If the character successfully attacks someone or does something else to make the truth evident, the illusion ends.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Mists of Morpheus": {
            name: "Mists of Morpheus",
            description: "The character causes their foe to fall asleep.",
            powerSet: "Magic",
            prerequisites: "Sorcerous, Rank 3",
            duration: "Concentration",
            effect: "The character makes an Ego check against the target's Vigilance defense. On a success, the target is stunned and remains that way while the character concentrates. On a Fantastic success, the target falls asleep instead.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Mists of Munnopor": {
            name: "Mists of Munnopor",
            description: "The character weaves a thick fog.",
            powerSet: "Magic",
            prerequisites: "Sorcerous, Rank 2",
            duration: "Concentration",
            effect: "The character creates a thick fog for up to 100 spaces per rank around them that blocks all line of sight beyond 10 spaces and keeps people or creatures inside it from flying, gliding, or webslinging.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Molecular Destabilization": {
            name: "Molecular Destabilization",
            description:
                "The character causes something to vibrate fast enough to explode.",
            powerSet: "Super-Speed",
            prerequisites: "Speed Run 2, Rank 4",
            duration: "Instant",
            effect: "The character makes a close attack against an object their size or smaller. If the attack is a success, the object explodes. All targets within 2 spaces of the object\u2014other than the character\u2014take regular damage. On a Fantastic success, double the damage and ignore any Health Damage Reduction.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Multiversal Portal": {
            name: "Multiversal Portal",
            description: "The character opens a portal to another universe.",
            powerSet: "Omniversal Travel",
            prerequisites: "Multiversal Travel Together, Rank 4",
            duration: "Concentration",
            effect: "The character opens a glowing portal in a space next to them that moves anything that enters it between that space and its destination, which forms a matched glowing portal in the other place. The other end of the portal must be in a clear space in another universe that the character has been to. Anything can move through the portal in either direction until it is closed, which the character can do at will.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Multiversal Travel": {
            name: "Multiversal Travel",
            description: "The character moves from one universe to another.",
            powerSet: "Omniversal Travel",
            prerequisites: "Rank 3",
            duration: "Instant",
            effect: "The character instantly moves from their current universe to another universe. For instance: from Earth-616 to Earth-65. When they move to the other universe, they can arrive in any place they've been to before. Otherwise, they arrive at the closest available corresponding space in the other universe.",
            action: "Standard or Movement",
            cost: "10 Focus",
        },
        "Multiversal Travel Other": {
            name: "Multiversal Travel Other",
            description: "The character sends someone to another universe.",
            powerSet: "Omniversal Travel",
            prerequisites: "Multiversal Travel, Rank 4",
            duration: "Instant",
            effect: "The character makes an Ego check against the Vigilance of a target they have grabbed. If the check is successful, the character can send the target to another universe. The target can be sent to any location in that universe that the character has been to before. Otherwise, the target arrives at the closest available corresponding space in the other universe.",
            action: "Standard, Movement, or Reaction",
            trigger: "The target is grabbed.",
            cost: "15 Focus",
        },
        "Multiversal Travel Together": {
            name: "Multiversal Travel Together",
            description:
                "The character brings someone with them to another universe.",
            powerSet: "Omniversal Travel",
            prerequisites: "Multiversal Travel, Rank 3",
            duration: "Instant",
            effect: "The character moves to a different universe, taking any person they are touching with them. If the target does not wish to come along, the character must grab them first. When they move to the other universe, they can arrive in any place they've been to before. Otherwise, they arrive at the closest available corresponding space in the other universe.",
            action: "Standard, Movement, or Reaction",
            trigger: "The target is grabbed.",
            cost: "10 Focus",
        },
        "On Your Feet": {
            name: "On Your Feet",
            description: "The character stands their friends on their feet.",
            powerSet: "Tactics",
            prerequisites: "Keep Moving, Rank 2",
            duration: "Instant",
            effect: "All prone allies within earshot, who are able to, can immediately stand up for free. Allies currently unable to stand up for any reason are not affected.",
            action: "Reaction",
            trigger: "An ally in line of sight and earshot is knocked prone.",
            cost: "5 Focus",
        },
        "Operations Center": {
            name: "Operations Center",
            description: "The character directs their allies in combat.",
            powerSet: "Tactics",
            prerequisites: "Combat Support, Focus Fire, Rank 4",
            duration: "Concentration",
            effect: "The character inspires one or more allies of their choice in earshot, up to the character's Vigilance defense. Affected allies gain an edge on all action checks until the start of the character's next turn. The character breaks concentration on this power if they use a movement action.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Orchestra of Overkill": {
            name: "Orchestra of Overkill",
            description: "The character conducts a symphony of shooting.",
            powerSet: "Ranged Weapons",
            prerequisites: "Dance of Death, Fast Hands, Rank 4",
            duration: "Instant",
            effect: "The character makes an Agility check and compares that against the Agility defense of every enemy within 10 spaces and in their line of sight. Each success does half regular damage. On a Fantastic success, each enemy takes full damage instead and is bleeding.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Orders": {
            name: "Orders",
            description:
                "The character forces someone to follow a complex set of orders.",
            powerSet: "Telepathy",
            prerequisites: "Command, Rank 4",
            duration: "Permanent",
            effect: "The character gives an order to a target with whom they've established a Telepathic Link and who has no Focus left. The character makes a Logic check against the target's Logic defense. On a success, the target complies with the orders. On a Fantastic success, the character gains an edge the next time they use this power against this same target. The command must be to do something that can be completed in an hour or less. If it involves harming someone, the character has trouble on the check. If it would cause the target to harm themselves, the character has double trouble on the check.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Partial Phase": {
            name: "Partial Phase",
            description:
                "The character can make a portion of themselves tangible or intangible.",
            powerSet: "Phasing",
            prerequisites: "Phase Self, Rank 2",
            duration: "Concentration",
            effect: "The character has greater control over their phasing ability. They can make any portion of their body and clothing tangible or intangible, as they like.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Penance Stare": {
            name: "Penance Stare",
            description: "The character can punish the wicked with their gaze.",
            powerSet: "Magic",
            prerequisites: "Cursed",
            duration: "Instant",
            effect: "The character makes an Ego attack against a target character within 3 spaces per rank. If it's a success, the target takes Focus damage. On a Fantastic success, the target takes double damage and is paralyzed for one round. Characters with the Heroic tag take half the listed damage from this power in either case. If a target is shattered by this power, they can recover, but they come back in one of two ways. Either they are cleansed of their sins and ready to make a new start with a clean slate, or their emotions are drained from them permanently. How this works in each case is up to the Narrator.",
            action: "Standard",
        },
        "Phase Object": {
            name: "Phase Object",
            description:
                "The character can make something they're touching intangible.",
            powerSet: "Phasing",
            prerequisites: "Phase Self, Rank 2",
            duration: "Concentration",
            effect: "The character can make any object they are touching intangible. The object (and things attached to or inside of it) can be up to their rank in sizes bigger than them. For example, if they are Rank 5, the object can be 5 sizes bigger than them. For an average person, this would be Gargantuan.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Phase Other": {
            name: "Phase Other",
            description: "The character can phase someone they are touching.",
            powerSet: "Phasing",
            prerequisites: "Phase Self, Rank 3",
            duration: "Concentration",
            effect: "The character can make any person (and their clothing) they are touching intangible. The character can also phase any people the initial person is touching or grabbing. People the character has phased remain tangible to each other. If the target does not wish to be phased, the character must grab them first. When contact is broken, the phasing for those no longer in contact with the character (even indirectly) ends. If a person is inside something when they stop phasing, they are automatically pushed out of it but take damage from the disruption equal to a standard action check. The damage multiplier is 1 for every space they must move to reach a clear area. If this kills them, their body is trapped inside the material they were phased into.",
            action: "Standard or Reaction",
            trigger: "The target is grabbed.",
            cost: "10 Focus",
        },
        "Phase Self": {
            name: "Phase Self",
            description: "The character can become as intangible as a ghost.",
            powerSet: "Phasing",
            prerequisites: "None",
            duration: "Concentration",
            effect: "The character (and their clothing) becomes intangible and can move through anything as if it wasn't there. Nothing can physically affect them, nor can they affect anything else that is not phasing along with them.",
            action: "Standard",
        },
        "Phase Walk": {
            name: "Phase Walk",
            description: "The character can walk on air.",
            powerSet: "Phasing",
            prerequisites: "Phase Self, Rank 2",
            duration: "Concentration",
            effect: "When phasing, the character can move freely in any direction through anything\u2014not just air, but also water, buildings, and so on\u2014at their Run Speed. The character can take anything or anyone they are phasing along with them.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Point-Blank Parry": {
            name: "Point-Blank Parry",
            description: "When the enemy steps in, the character lets loose.",
            powerSet: "Ranged Weapons",
            prerequisites: "Rank 2",
            duration: "Instant",
            effect: "The character makes a ranged attack against the enemy who missed them. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the enemy takes double damage and is bleeding.",
            action: "Reaction",
            trigger:
                "An enemy within 2 spaces misses an attack against the character.",
            cost: "5 Focus",
        },
        "Possess Vehicle": {
            name: "Possess Vehicle",
            description: "The character takes control of a vehicle.",
            powerSet: "Magic",
            prerequisites: "Cursed, Rank 3",
            duration: "Concentration",
            effect: "The character takes magical control of a vehicle they are inside of or touching. Hellfire engulfs the outside of the vehicle, but it does no damage to it. Anyone that comes into contact with it, though, takes regular damage with a damage multiplier equal to the character's rank. On a Fantastic success, it inflicts regular Health damage and regular Focus damage instead. The character controls the vehicle by will, as long as it is within 20 spaces times the character's rank. They use their Ego for all checks to operate it, and they get an edge on all such checks. The vehicle's speed doubles. It can climb walls at this speed and can even make jumps at that same speed.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Possession": {
            name: "Possession",
            description: "The character takes over someone else's body.",
            powerSet: "Magic",
            prerequisites: "Cursed, Rank 5",
            duration: "Concentration",
            effect: "The character makes an Ego check with trouble against the Ego defense of a character who has no Focus left. On a success, the character takes over the target's body completely. The character's Ego defense is the target number for any checks to end the possession. If the character attempts to harm someone with the possessed body, the target gets to make an Ego check to end the possession. If the target has the Heroic tag, they get an edge on the check. If the character attempts to harm the possessed body, the target gets an edge on the check. If they have the Heroic tag, they get a double edge.",
            action: "Standard",
            cost: "20 Focus",
        },
        "Powerful Hex": {
            name: "Powerful Hex",
            description:
                "The character simulates another power with their magic.",
            powerSet: "Magic",
            prerequisites: "Chaotic, Rank 2",
            duration: "Varies",
            effect: "The character casts a hex that allows them to use any other power that they have the rank to use, even if they would not normally meet the power's other prerequisites. They must pay whatever the regular Focus cost is for that power, plus 5 Focus. If the duration of the used power is permanent, it is concentration for the character instead. If the power is a numbered permanent power (like Mighty 3), the Focus cost is 5 times that number instead. (Mighty 3 would cost 15 Focus.)",
            action: "Standard",
            cost: "5 or more Focus",
        },
        "Probability-Manipulation Hex": {
            name: "Probability-Manipulation Hex",
            description: "The character makes unlikely things happen.",
            powerSet: "Magic",
            prerequisites: "Chaotic, Rank 3",
            duration: "Concentration",
            effect: "When an ally within 5 spaces times the character's rank attempts a check on which they have trouble, this hex eliminates all trouble and gives them an edge instead.",
            action: "Standard or Reaction",
            cost: "10 Focus",
        },
        "Protection Hex": {
            name: "Protection Hex",
            description: "The character casts a hex to protect themselves.",
            powerSet: "Magic",
            prerequisites: "Chaotic, Rank 3",
            duration: "Concentration",
            effect: "The character produces a hex to help protect themselves. Make an Ego check. The result is now the character's defense against any attack. If the result isn't as high as the character would like, they can end the hex and try again later. On a Fantastic success, the hex also grants Health Damage Reduction 1 for its duration.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Quick Phase": {
            name: "Quick Phase",
            description: "The character can become as intangible as a ghost.",
            powerSet: "Phasing",
            prerequisites: "Phase Self, Rank 2",
            duration: "Concentration",
            effect: "The character and their clothing can instantly become intangible.",
            action: "Reaction",
            trigger: "The character is attacked.",
            cost: "5 Focus",
        },
        "Quick Toss": {
            name: "Quick Toss",
            description: "The character tosses a person like a toy.",
            powerSet: "Super-Strength",
            prerequisites: "Crushing Grip, Mighty 1, Rank 3",
            duration: "Instant",
            effect: "The character throws the grabbed person at another target. The range is determined by the level of the character's Mighty power and the grabbed person's size. The character makes a ranged attack against the target. A failure inflicts regular damage on the thrown person, who falls prone within 1 space of the target. If the attack is a success, the target takes regular damage too. On a Fantastic success, the target is knocked prone as well.",
            action: "Reaction",
            trigger: "A person the character can pick up is grabbed.",
            cost: "10 Focus",
        },
        "Rally on Me": {
            name: "Rally on Me",
            description: "The character rallies their friends around them.",
            powerSet: "Tactics",
            prerequisites: "On Your Feet, Rank 3",
            duration: "Instant",
            effect: "Any allies in earshot can be affected, up to a number equal to the character's Vigilance. Each affected ally can move toward the character at half speed. If they are within the character's reach at the end of this move, they recover lost Focus equal to 5 times the character's rank. The character can use this power once per battle.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Regain Focus": {
            name: "Regain Focus",
            description: "The character takes a moment to find their center.",
            powerSet: "Martial Arts",
            prerequisites: "Unflappable Poise, Untouchable Position, Rank 4",
            duration: "Instant",
            effect: "The character recovers Focus equal to their Vigilance.",
            action: "Standard",
            cost: "None",
        },
        "Reinforced Skeleton": {
            name: "Reinforced Skeleton",
            description:
                "The character's bones have been reinforced or replaced with a super-strong alloy or metal.",
            powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character gains Health Damage Reduction 1.",
        },
        "Resize Object": {
            name: "Resize Object",
            description:
                "The character can change the size of an object within reach.",
            powerSet: "Resize",
            prerequisites: "Grow 2 or Shrink 2, Rank 3",
            duration: "Permanent",
            effect: "The character can make an object within reach grow or shrink. The character can resize the object as much as their own Grow or Shrink power would allow them to.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Resize Other": {
            name: "Resize Other",
            description: "The character can resize someone they are touching.",
            powerSet: "Resize",
            prerequisites: "Grow 2 or Shrink 2, Rank 3",
            duration: "Permanent",
            effect: "The character can resize any person (and their clothing) they are touching. The character can resize the target as much as their own Grow or Shrink power would allow them to. If the target does not wish to be resized, the character must grab them first.",
            action: "Standard or Reaction",
            trigger: "The target is grabbed.",
            cost: "10 Focus",
        },
        "Return Fire": {
            name: "Return Fire",
            description:
                "The character responds to an assault with a hail of shots.",
            powerSet: "Ranged Weapons",
            prerequisites: "Suppressive Fire, Rank 2",
            duration: "Instant",
            effect: "The character makes an Agility attack against a target's Vigilance defense. If the attack is a success, apply Health Damage Reduction normally. Any damage taken is then applied to the target's Focus instead. If it's a Fantastic success, the damage is doubled and, if the target takes any Focus damage, they are stunned for one round.",
            action: "Reaction",
            trigger: "An enemy declares an attack against the character.",
            cost: "5 Focus",
        },
        "Reverse Punch": {
            name: "Reverse Punch",
            description:
                "The character can reach past an enemy and punch them from behind.",
            powerSet: "Plasticity",
            prerequisites: "Flexible Bones 1, Rank 2",
            duration: "Instant",
            effect: "The character makes a close attack with an edge on an enemy. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the enemy takes double damage and is stunned for one round.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Reverse-Momentum Throw": {
            name: "Reverse-Momentum Throw",
            description:
                "The character uses the momentum of their attacker to hurl them to the ground.",
            powerSet: "Martial Arts",
            prerequisites: "Defense Stance, Rank 2",
            duration: "Instant",
            effect: "The attacker is knocked prone and takes half the damage their attack would have inflicted if it had succeeded.",
            action: "Reaction",
            trigger:
                "While Defense Stance is active, a close attack against the character misses.",
            cost: "5 Focus",
        },
        "Rico-Shield": {
            name: "Rico-Shield",
            description:
                "The character ricochets their shield from target to target.",
                powerSet: "Shield Bearer",
            prerequisites: "Hurled Shield Bash, Rank 3",
            duration: "Instant",
            effect: "The character makes a ranged attack on a target. If the attack is a success, the target takes regular damage. On a Fantastic success, the target is also knocked prone, and the character can make an extra attack on another target, adding the extra range between the two targets to the new attack roll. This can be repeated until an attack is not a Fantastic success. When the attacks are over, the shield then bounces back to the character.",
            action: "Standard",
            cost: "10 Focus",
            range: "10 spaces times the character's rank",
        },
        "Riposte": {
            name: "Riposte",
            description:
                "Seeing the enemy off balance, the character strikes back.",
            powerSet: "Melee Weapons",
                prerequisites: "None",
            duration: "Instant",
            effect: "The character makes a close attack on the enemy who just missed them. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the enemy takes double damage and suffers the weapon's special effect.",
            action: "Reaction",
            trigger:
                "An enemy makes a close attack against the character that fails.",
        },
        "Rubberneck": {
            name: "Rubberneck",
            description: "The character can lengthen and twist their neck.",
            powerSet: "Plasticity",
            prerequisites: "Flexible Bones 1, Extended Reach 1",
                duration: "Permanent",
            effect: "The character can move their head away from their body, up to their reach, to establish a line of sight to a target.",
        },
        "Run on Water": {
            name: "Run on Water",
            description: "The character can run across water.",
            powerSet: "Super-Speed",
            prerequisites: "Speed Run 2, Rank 3",
            duration: "Permanent",
            effect: "The character can run so that their feet skip across the surface of water. As long as they keep running (even in place), they do not sink.",
        },
        "Scatter": {
            name: "Scatter",
            description: "The character warns allies to take evasive action.",
            powerSet: "Tactics",
            prerequisites: "Hit the Dirt, Rank 3",
            duration: "Instant",
            effect: "Any allies in earshot can be affected, up to a number equal to the character's rank. Each affected ally can move away from you at half Speed and then fall prone. If this makes the ally an ineligible target for the initial attack, that attack automatically fails.",
            action: "Reaction",
            trigger:
                "An enemy in line of sight declares an attack on an ally within earshot.",
            cost: "10 Focus",
        },
        "Sense Sins": {
            name: "Sense Sins",
            description: "The character can look into a person's soul.",
            powerSet: "Magic",
            prerequisites: "Cursed",
            duration: "Instant",
            effect: "The character looks into a target's eyes and makes an Ego check against the target's Ego defense. On a success, the character can sense what sorts of horrible things the target has done. On a Fantastic success, they can sense what sorts of horrible things the target intends to do in the immediate future.",
            action: "Standard",
        },
        "Sense Supernatural": {
            name: "Sense Supernatural",
            description: "The character can sense the supernatural.",
            powerSet: "Magic",
                prerequisites: "None",
            duration: "Concentration",
            effect: "The character can reach out with their mind to sense the presence of supernatural people, places, or things within 100 spaces per rank. This tells them the location of the supernatural thing and its general status. If a target or targets wish to remain undetected, the character must make an Ego check and compare it against each target's Vigilance defense. If they succeed, they sense the target. On a Fantastic success, they can also identify if the target is cursed or demonic.",
            action: "Standard",
        },
        "Shape-Shift": {
            name: "Shape-Shift",
            description: "The character can change forms.",
            powerSet: "Basic",
            prerequisites: "Disguise, Rank 3",
                duration: "Permanent",
            effect: "The character can change into another form no more than one size bigger or smaller than their regular form. When in any form, the character has access to the natural abilities of that form. For instance, if they transformed into a bird, they could fly. When transformed into a fish, they can breathe water.",
            action: "Standard or Reaction",
            trigger: "The character is attacked or otherwise in danger.",
        },
        "Shield 1": {
            name: "Shield 1",
            description: "The character wields a personal shield.",
                powerSet: "Shield Bearer",
                prerequisites: "None",
            duration: "Concentration",
            effect: "The character gains Health Damage Reduction 1.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
        },
        "Shield 2": {
            name: "Shield 2",
            description: "The character's shield protects them like a wall.",
            powerSet: "Shield Bearer",
            prerequisites: "Shield 1, Rank 2",
            duration: "Concentration",
            effect: "The character gains Health Damage Reduction 2.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
            cost: "5 Focus",
        },
        "Shield 3": {
            name: "Shield 3",
            description: "The character's shield protects better than a tank.",
            powerSet: "Shield Bearer",
            prerequisites: "Shield 2, Rank 4",
            duration: "Concentration",
            effect: "The character gains Health Damage Reduction 3.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
            cost: "15 Focus",
        },
        "Shield 4": {
            name: "Shield 4",
            description:
                "The character's shield protects like a concrete barrier.",
            powerSet: "Shield Bearer",
            prerequisites: "Shield 3, Rank 6",
            duration: "Concentration",
            effect: "The character gains Health Damage Reduction 4.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
            cost: "25 Focus",
        },
        "Shield Bash": {
            name: "Shield Bash",
            description: "The character bashes a foe with their shield.",
                powerSet: "Shield Bearer",
                prerequisites: "None",
            duration: "Instant",
            effect: "The character makes a close attack on an enemy within their reach. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the enemy takes double damage and is knocked prone.",
            action: "Standard",
        },
        "Shield Deflection": {
            name: "Shield Deflection",
            description: "The character uses their shield to deflect attacks.",
                powerSet: "Shield Bearer",
                prerequisites: "None",
            duration: "Instant",
            effect: "The attack has trouble.",
            action: "Reaction",
            trigger:
                "The character is the target of an attack against their Agility defense.",
        },
        "Shield of the Seraphim": {
            name: "Shield of the Seraphim",
            description: "The character produces a magical shield.",
            powerSet: "Magic",
            prerequisites: "Sorcerous, Rank 3",
            duration: "Concentration",
            effect: "The character produces a magical shield that protects them from physical damage. Any attacks against them that do 20 points of damage or less are instantly absorbed, and the protection continues. If an attack does more than 20 points of damage, it destroys the protection. Either way, the character remains unharmed.",
            action: "Standard or Reaction",
            cost: "10 Focus",
        },
        "Shield Wall": {
            name: "Shield Wall",
            description: "The character stands like an impenetrable wall.",
                powerSet: "Shield Bearer",
            prerequisites: "Brace for Impact, Rank 3",
            duration: "Concentration",
            effect: "Attacks against the character have trouble. The character breaks concentration on this power if they use a movement action.",
            action: "Movement",
        },
        "Shrink 1": {
            name: "Shrink 1",
            description: "The character thinks small.",
            powerSet: "Resize",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character can shrink down to little size. They can return to their normal size at will.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
        },
        "Shrink 2": {
            name: "Shrink 2",
            description: "The character becomes even smaller!",
            powerSet: "Resize",
            prerequisites: "Shrink 1",
            duration: "Permanent",
            effect: "The character can shrink down to tiny size. They can return to their normal size at will.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
        },
        "Shrink 3": {
            name: "Shrink 3",
            description: "The character is smaller than an action figure.",
            powerSet: "Resize",
            prerequisites: "Shrink 2",
            duration: "Permanent",
            effect: "The character can shrink down to miniature size. They can return to their normal size at will.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
        },
        "Shrink 4": {
            name: "Shrink 4",
            description: "The character is so small that they're hard to see.",
            powerSet: "Resize",
            prerequisites: "Shrink 3",
            duration: "Permanent",
            effect: "The character can shrink down to microscopic size. They can return to their normal size at will.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
        },
        "Shrinking Dodge": {
            name: "Shrinking Dodge",
            description: "The character shrinks to avoid an attack.",
            powerSet: "Resize",
            prerequisites: "Shrink 1, Rank 2",
            duration: "Instant",
            effect: "The attacker has trouble on the attack.",
            action: "Reaction",
            trigger: "The character is attacked.",
            cost: "5 Focus",
        },
        "Shut Down Powers": {
            name: "Shut Down Powers",
            description: "The character removes all of a target's powers!",
            powerSet: "Power Control",
            prerequisites: "Dampen Power, Rank 4",
            duration: "Concentration",
            effect: "The character picks another character within 20 spaces and makes an Ego attack against them. On a success, they remove all of the target's powers. If the target's powers have costs, the character must pay the highest of them, or a minimum of 15 Focus.",
            action: "Standard",
            cost: "15 or more Focus",
        },
        "Silence Area": {
            name: "Silence Area",
            description: "An unnatural silence falls over the area.",
            powerSet: "Illusion",
            prerequisites: "Illumination, Rank 2",
            duration: "Concentration",
            effect: "An area up to 5 spaces wide per the character's rank\u2014centered on anything the character wishes, within 50 spaces\u2014is filled with silence. Those inside the area cannot hear anything, and no one outside of it can hear any noises made inside it. The character must remain within 50 spaces of the area to avoid breaking concentration.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Silence Self": {
            name: "Silence Self",
            description: "Silence falls on the character.",
            powerSet: "Illusion",
            prerequisites: "Illumination, Rank 2",
            duration: "Concentration",
            effect: "The character makes no noise at all\u2014unless they wish to. They have an edge on Agility checks to sneak past people, and enemies have trouble on Vigilance checks to perceive them.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Slip Free": {
            name: "Slip Free",
            description: "The character is impossible to restrain.",
            powerSet: "Plasticity",
                prerequisites: "None",
            duration: "Instant",
            effect: "The character is not grabbed or pinned.",
            action: "Reaction",
            trigger: "The character is grabbed or pinned.",
        },
        "Slow-Motion Dodge": {
            name: "Slow-Motion Dodge",
            description:
                "Time seems to slow down for the character, making it easy to dodge enemy attacks.",
            powerSet: "Basic",
            prerequisites: "None",
            duration: "Instant",
            effect: "The enemy has trouble on the attack.",
            action: "Reaction",
            trigger:
                "An enemy makes an attack against the character's Agility defense.",
        },
        "Slow-Motion Shoot-Dodge": {
            name: "Slow-Motion Shoot-Dodge",
            description:
                "The character dives sideways, weapons blazing, hanging in midair for a split second.",
            powerSet: "Ranged Weapons",
            prerequisites: "Slow-Motion Dodge, Weapons Blazing, Rank 3",
            duration: "Instant + 1 round",
            effect: "The character splits their attack to make two ranged attacks against separate targets (or they can focus a single attack on a single target). Make a single Agility check and compare it to the targets' Agility defenses. On a success, an affected target takes half regular damage. On a Fantastic success, an affected target takes full damage, and the character can make a bonus attack with this power against any available target, with the same effect. When the character moves, is moved, or starts their next turn, they instantly fall prone. Until that happens, all attacks against their Agility defense have trouble.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Smash": {
            name: "Smash",
            description: "SMASH!",
            powerSet: "Super-Strength",
            prerequisites: "Clobber, Rank 2",
            duration: "Instant",
            effect: "The character makes a close attack with an edge. For this attack, add +1 to the character's Melee damage bonus for every 2 points of Focus they spend. On a success, an affected target takes that total damage. On a Fantastic success, an affected target takes double that total damage and is stunned for one round.",
            action: "Standard",
            cost: "5 or more Focus",
        },
        "Snap Shooting": {
            name: "Snap Shooting",
            description: "The character shoots from the hip with deadly speed.",
            powerSet: "Ranged Weapons",
            prerequisites: "None",
            duration: "Instant",
            effect: "The character splits their attack to make two ranged attacks against separate targets (or they can focus a single attack on a single target). Make a single Agility check and compare it to the targets' Agility defenses. On a success, an affected target takes half regular damage. On a Fantastic success, an affected target takes full damage and is bleeding.",
            action: "Standard",
        },
        "Sniping": {
            name: "Sniping",
            description:
                "The character takes aim and shoots with deadly accuracy.",
            powerSet: "Ranged Weapons",
            prerequisites: "Rank 2",
            duration: "Instant",
            effect: "The character makes a ranged attack against an enemy at least 20 spaces away. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the enemy takes triple damage instead.",
            action: "Both Standard and Movement (character cannot move this turn)",
            cost: "5 Focus",
        },
        "Speed Blast": {
            name: "Speed Blast",
            description:
                "The character fans their arms fast enough to blast a target with a gust of air!",
            powerSet: "Super-Speed",
            prerequisites: "Speed Run 2, Rank 2",
            duration: "Instant",
            effect: "The character makes a ranged attack. If it succeeds, the target is stunned for one round. On a Fantastic success, the target is knocked prone too.",
            action: "Standard",
            cost: "5 Focus",
            range: "10 spaces",
        },
        "Speed Run 1": {
            name: "Speed Run 1",
            description: "The character runs as fast as a car!",
            powerSet: "Super-Speed",
            prerequisites: "Rank 2",
                duration: "Permanent",
            effect: "Multiply the character's regular Run Speed by their rank to get their new Run Speed. Outside of combat, they can move three times as fast.",
        },
        "Speed Run 2": {
            name: "Speed Run 2",
            description: "The character runs as fast as a jet!",
            powerSet: "Super-Speed",
            prerequisites: "Speed Run 1, Rank 3",
            duration: "Permanent",
            effect: "Outside of combat, the character can move up to 50 times as fast as their increased Run Speed.",
        },
        "Speed Swim": {
            name: "Speed Swim",
            description: "The character can swim faster than a dolphin!",
            powerSet: "Super-Speed",
            prerequisites: "Rank 2",
            duration: "Permanent",
            effect: "Multiply the character's regular Swim Speed by their rank to get their new Swim Speed. Outside of combat, they can move three times as fast.",
        },
        "Spider-Dodge": {
            name: "Spider-Dodge",
            description:
                "The character dodges attacks with a spiderlike scuttle.",
            powerSet: "Spider-Powers",
            prerequisites: "None",
            duration: "Instant",
            effect: "The attacker has trouble on the attack. If the attack misses, the character can leap in any direction at their Jump Speed.",
            action: "Reaction",
            trigger: "Someone makes an Agility attack against the character.",
        },
        "Spider-Pheromones": {
            name: "Spider-Pheromones",
            description:
                "The character exudes pheromones that affect those nearby.",
            powerSet: "Spider-Powers",
            prerequisites: "None",
            duration: "Concentration",
            effect: "The character has an edge on Ego (intimidation) checks against people who are not attracted to their gender. They also have an edge on Ego (persuasion) checks against people who are attracted to their gender.",
            action: "Standard",
            range: "5 spaces",
        },
        "Spider-Sense": {
            name: "Spider-Sense",
            description:
                "The character has a sense of danger that tingles when threats are near.",
            powerSet: "Spider-Powers",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character has an edge on initiative checks and on Vigilance checks to perceive danger. Enemies have trouble on Agility checks against the character's Vigilance defense. The character also gains a permanent +2 bonus to their Agility defense.",
        },
        "Spider-Strike": {
            name: "Spider-Strike",
            description:
                "The character strikes in a blur of punches, kicks, and webbing.",
            powerSet: "Spider-Powers",
            prerequisites: "None",
            duration: "Instant",
            effect: "The character splits their attack to make two close attacks against separate targets within reach (or they can focus a single attack on a single target). Make a single Melee check and compare it to the targets' Melee defenses. On a success, the affected target takes half regular damage. On a Fantastic success, the affected target takes full damage and is paralyzed by webbing. Breaking free from webbing requires a Melee check (target number 20). After the attacks, the character may run, jump, or climb at half speed for free.",
            action: "Standard",
        },
        "Spin and Throw": {
            name: "Spin and Throw",
            description: "The character throws a grabbed foe to the ground.",
            powerSet: "Martial Arts",
            prerequisites: "Grappling Technique, Rank 2",
            duration: "Instant",
            effect: "The character makes a Melee attack against the grabbed foe. If the attack is a success, the enemy takes regular damage and is knocked prone. On a Fantastic success, the enemy takes double damage and is knocked prone, pinned, and stunned for one round. Either way, the character can move the enemy to any open space within reach.",
            action: "Reaction",
            trigger: "An enemy the character can pick up is grabbed.",
            cost: "5 Focus",
        },
        "Static Illusion": {
            name: "Static Illusion",
            description:
                "By manipulating visual light, the character creates a realistic hologram.",
            powerSet: "Illusion",
            prerequisites: "Illumination",
            duration: "Concentration",
            effect: "The character creates a visual-only illusion anywhere in line of sight, within 50 spaces. The illusion can be of anything up to three sizes larger than the character, but it must be static. The character breaks concentration if they move beyond 50 spaces from the illusion or lose line of sight of it.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Steal Powers": {
            name: "Steal Powers",
            description:
                "The character removes all of a target's powers and takes them for their own!",
            powerSet: "Power Control",
            prerequisites: "Clone Powers, Shut Down Powers, Rank 4",
            duration: "Concentration",
            effect: "The character makes an Ego attack against the grabbed target. On a success, they remove all of the target's powers and take them for their own. They can now use those powers as if they were always theirs. If the target's powers have costs, the character must pay the highest of them, or a minimum of 15 Focus. When the character uses a power, they must pay any cost normally as well.",
            action: "Standard or Reaction",
            trigger: "The target is grabbed.",
            cost: "15 or more Focus",
        },
        "Stilt Steps": {
            name: "Stilt Steps",
            description:
                "The character can stretch their legs like extendable stilts.",
            powerSet: "Plasticity",
            prerequisites: "Extended Reach 1, Rank 2",
            duration: "Instant",
            effect: "The character's Run Speed doubles, as does their Climb Speed.",
            action: "Movement",
        },
        "Stopping Power": {
            name: "Stopping Power",
            description: "The character keeps shooting at the target.",
            powerSet: "Ranged Weapons",
            prerequisites: "Double Tap, Rank 2",
            duration: "Instant",
            effect: "The character makes a ranged attack on an enemy. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the enemy takes double damage, and the character can make another regular ranged attack on the same target.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Sturdy 1": {
            name: "Sturdy 1",
            description: "The character has protection from physical damage.",
            powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character's body is so sturdy that they have Health Damage Reduction 1. If this power stems from armor or anything else removable\u2014like Iron Man's armor\u2014the character should apply the Tech Reliance trait to it.",
        },
        "Sturdy 2": {
            name: "Sturdy 2",
            description: "The character is protected as if by steel.",
            powerSet: "Basic",
            prerequisites: "Sturdy 1, Rank 2",
            duration: "Permanent",
            effect: "The character gains Health Damage Reduction 2.",
        },
        "Sturdy 3": {
            name: "Sturdy 3",
            description: "The character is protected like a tank.",
            powerSet: "Basic",
            prerequisites: "Sturdy 2, Rank 4",
            duration: "Permanent",
            effect: "The character gains Health Damage Reduction 3.",
        },
        "Sturdy 4": {
            name: "Sturdy 4",
            description: "The character is protected like a battleship.",
            powerSet: "Basic",
            prerequisites: "Sturdy 3, Rank 6",
            duration: "Permanent",
            effect: "The character gains Health Damage Reduction 4.",
        },
        "Summon Portal": {
            name: "Summon Portal",
            description:
                "The character opens a portal between space and dimensions.",
            powerSet: "Magic",
            prerequisites: "Sorcerous, Rank 4",
            duration: "Concentration",
            effect: "The character opens a glowing portal in a space next to them that teleports anything that enters it between that space and its destination, which forms a matched glowing portal in the other place. This can be between any two points in the Multiverse, as long as the character has seen the destination. Anything can move through the portal in either direction until it is closed, which the character can do at will.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Supernova": {
            name: "Supernova",
            description:
                "The character blasts out a massive burst of their element.",
            powerSet: "Elemental Control",
            prerequisites: "Elemental Blast, Rank 4",
            duration: "Instant",
            effect: "The character makes an Ego check and compares that against the Resilience defense of every enemy within 10 spaces. For these attacks, add +1 to the character's Melee damage bonus for every 2 points of Focus they spend. On a success, an affected target takes half that total damage. On a Fantastic success, an affected target takes full damage and suffers the elemental type's special effect.",
            action: "Standard",
            cost: "15 or more Focus",
        },
        "Suppressive Fire": {
            name: "Suppressive Fire",
            description:
                "The character forces their foes to keep their heads down.",
            powerSet: "Ranged Weapons",
                prerequisites: "None",
            duration: "Instant",
            effect: "The character makes an Agility attack against a target's Vigilance defense. If the attack is a success, apply Health Damage Reduction normally. Any damage taken is then applied to the target's Focus instead. If it's a Fantastic success, the damage is doubled, and if the target takes any Focus damage, they are stunned for one round.",
            action: "Standard",
        },
        "Swipe Power": {
            name: "Swipe Power",
            description:
                "The character removes a target's power and takes it for their own!",
            powerSet: "Power Control",
            prerequisites: "Copy Powers, Dampen Power, Rank 3",
            duration: "Concentration",
            effect: "The character makes an Ego attack against the grabbed target. On a success, they remove one of the target's powers and take it for their own. They can now use that power as if it was always theirs. If the power has a cost, the character must pay it or a minimum of 10 Focus. When the character uses the power, they must pay any cost normally as well.",
            action: "Standard or Reaction",
            trigger: "The target is grabbed.",
            cost: "10 or more Focus",
        },
        "Telekinetic Attack": {
            name: "Telekinetic Attack",
            description:
                "The character can punch or choke an enemy with their mind.",
            powerSet: "Telekinesis",
            prerequisites: "Telekinetic Manipulation, Rank 2",
            duration: "Concentration",
            effect: "The character makes a Logic attack against the Melee defense of a target within 5 spaces times the character's rank. If the attack is a success, it inflicts regular damage. On a Fantastic success, the damage is doubled instead, and the target is stunned for one round.",
            action: "Standard",
            cost: "5 Focus",
            range: "Varies",
        },
        "Telekinetic Barrier": {
            name: "Telekinetic Barrier",
            description:
                "The character forms a protective barrier with their mind.",
            powerSet: "Telekinesis",
            prerequisites: "Telekinetic Grab, Rank 2",
            duration: "Concentration",
            effect: "The character forms an invisible barrier in their line of sight and up to 10 spaces away per rank. This covers up to 2 spaces across (vertically/horizontally) per their rank. The character makes a Logic check and compares the results against the Agility defense of any target in the affected spaces. On a success, the character chooses which side of the barrier the target winds up on. On a Fantastic success, the target is paralyzed for one round too. Attacks on the barrier are against the character's Logic defense. Any attacks on it that do 10 points of damage or less are instantly absorbed, and the barrier continues. If an attack does more than 10 points of damage, it destroys the barrier. Either way, the attack leaves those behind the barrier unharmed.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Telekinetic Crush": {
            name: "Telekinetic Crush",
            description: "The character mentally squeezes a foe.",
            powerSet: "Telekinesis",
            prerequisites: "Telekinetic Grab, Rank 3",
            duration: "Instant",
            effect: "The character makes a Logic attack against the grabbed target's Resilience defense. If it's a success, the target takes regular damage. On a Fantastic success, the target takes double damage and is pinned.",
            action: "Reaction",
            trigger: "The target is grabbed.",
            cost: "10 Focus",
        },
        "Telekinetic Grab": {
            name: "Telekinetic Grab",
            description: "The character can grab a foe with their mind.",
            powerSet: "Telekinesis",
            prerequisites: "Telekinetic Manipulation, Rank 2",
            duration: "Concentration",
            effect: "The character makes a Logic attack against the Melee defense of a target within 5 spaces times the character's rank. If the attack is a success, the character grabs the target with their mind. On a Fantastic success, the target can also be pinned. Breaking free requires a successful Melee check against target number 20.",
            action: "Standard",
            cost: "5 Focus",
            range: "Varies",
        },
        "Telekinetic Manipulation": {
            name: "Telekinetic Manipulation",
            description:
                "The character can handle physical things with their mind.",
            powerSet: "Telekinesis",
            prerequisites: "None",
            duration: "Concentration",
            effect: "The character can manipulate objects in their line of sight with their mind. The maximum range for this is 5 spaces times the character's rank. If someone tries to prevent the character from taking control of an object, the character makes a Logic check against the opponent's Agility defense.",
            action: "Standard",
            range: "Varies",
        },
        "Telekinetic Protection 1": {
            name: "Telekinetic Protection 1",
            description:
                "The character uses their mind to physically protect themselves.",
            powerSet: "Telekinesis",
            prerequisites: "Telekinetic Barrier, Rank 2",
            duration: "Concentration",
            effect: "The character's personal telekinetic field protects them. Any attacks against them that do 10 points of damage or less are instantly absorbed, and the protection continues. If an attack does more than 10 points of damage, it destroys the protection. Either way, the character remains unharmed.",
            action: "Standard or Reaction",
            trigger: "The character is attacked or otherwise in danger.",
            cost: "5 Focus",
        },
        "Telekinetic Protection 2": {
            name: "Telekinetic Protection 2",
            description:
                "The character toughens their mind against physical damage.",
            powerSet: "Telekinesis",
            prerequisites: "Telekinetic Protection 1, Rank 3",
            duration: "Concentration",
            effect: "The character's personal telekinetic field protects them. Any attacks against them that do 20 points of damage or less are instantly absorbed, and the protection continues. If an attack does more than 20 points of damage, it destroys the protection. Either way, the character remains unharmed.",
            action: "Standard or Reaction",
            trigger: "The character is attacked or otherwise in danger.",
            cost: "10 Focus",
        },
        "Telekinetic Protection 3": {
            name: "Telekinetic Protection 3",
            description: "The character's mind protects them like a tank.",
            powerSet: "Telekinesis",
            prerequisites: "Telekinetic Protection 2, Rank 4",
            duration: "Concentration",
            effect: "The character's personal telekinetic field protects them. Any attacks against them that do 30 points of damage or less are instantly absorbed, and the protection continues. If an attack does more than 30 points of damage, it destroys the protection. Either way, the character remains unharmed.",
            action: "Standard or Reaction",
            trigger: "The character is attacked or otherwise in danger.",
            cost: "15 Focus",
        },
        "Telekinetic Protection 4": {
            name: "Telekinetic Protection 4",
            description: "The character's mind protects them like a fortress.",
            powerSet: "Telekinesis",
            prerequisites: "Telekinetic Protection 3, Rank 5",
            duration: "Concentration",
            effect: "The character's personal telekinetic field grants them protection. Any attacks against them that do 40 points of damage or less are instantly absorbed, and the protection continues. If an attack does more than 40 points of damage, it destroys the protection. Either way, the character remains unharmed.",
            action: "Standard or Reaction",
            trigger: "The character is attacked or otherwise in danger.",
            cost: "20 Focus",
        },
        "Telekinetic Reinforcement": {
            name: "Telekinetic Reinforcement",
            description:
                "The character reinforces their defenses with their mind.",
            powerSet: "Telekinesis",
            prerequisites: "Telekinetic Protection 1",
            duration: "Instant",
            effect: "The character can transfer any Health damage that gets through a telekinetic power that grants damage protection to their Focus instead, leaving the protection intact.",
            action: "Reaction",
            trigger:
                "A character using a telekinetic power that grants damage protection is attacked.",
            cost: "Varies",
        },
        "Telekinetic Sphere": {
            name: "Telekinetic Sphere",
            description:
                "The character can create a protective sphere with their mind.",
            powerSet: "Telekinesis",
            prerequisites: "Telekinetic Protection 1",
            duration: "Concentration",
            effect: "The character envelops themselves\u2014and any chosen people within up to 5 spaces times their rank\u2014in a protective telekinetic sphere. When the sphere is formed, the character makes a Logic check and compares the results against the Agility defense of unwanted characters in the enclosed spaces. On a success, the character can move any unwanted people within the sphere's perimeter to spaces outside of the sphere. On a Fantastic success, such moved people suffer full damage. Attacks on the sphere are against the character's Logic defense. Any attacks on the sphere are absorbed as if made against the character's Telekinetic Protection power, and the sphere continues. If an attack does more damage than the character's Telekinetic Protection power can sustain, it destroys the sphere, but no one inside is harmed.",
            action: "Standard or Reaction",
            trigger: "The character is attacked or otherwise in danger.",
            cost: "Same as the character's Telekinetic Protection power",
        },
        "Telekinetic Toss": {
            name: "Telekinetic Toss",
            description:
                "The character can throw a foe around with their mind.",
            powerSet: "Telekinesis",
            prerequisites: "Telekinetic Grab, Rank 3",
            duration: "Instant",
            effect: "The character can telekinetically throw a person that they've telekinetically grabbed at another target. The range for the throw is 5 spaces times the character's rank. The character makes a Logic check against the target's Agility defense. A failure inflicts regular damage on the thrown person, who falls prone within 1 space of the target. If the attack is a success, the target takes regular damage too. On a Fantastic success, the target is knocked prone as well.",
            action: "Standard or Reaction",
            trigger: "The target is grabbed.",
            cost: "10 Focus",
            range: "Varies",
        },
        "Telepathic Blast": {
            name: "Telepathic Blast",
            description: "The character can mentally blast a foe's mind.",
            powerSet: "Telepathy",
            prerequisites: "Telepathic Link, Rank 2",
            duration: "Instant",
            effect: "The character makes a Logic attack against a target in line of sight. If the attack is a success, it inflicts regular Focus damage. On a Fantastic success, the target takes double damage instead and is stunned for one round.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Telepathic Link": {
            name: "Telepathic Link",
            description: "The character can speak with another telepathically.",
            powerSet: "Telepathy",
            prerequisites: "None",
            duration: "Concentration",
            effect: "The character can communicate telepathically with one person at a time, and they must have met or seen the other person before. The communication can be verbal, visual, or even more complex, such as imparting location information. There is no limit to the distance of the communication, as long as the character and the target are in the same dimension. If the other person does not wish to speak with the character, the target can automatically tune them out. To force a telepathic link, the character can make a Logic check against the target's Vigilance defense. On a failure, the character cannot attempt to communicate with the target in this way for the rest of the day. On a success, the character can communicate with the target for one round. On a Fantastic success, the target cannot shut the character out for the rest of the day.",
            action: "Standard",
        },
        "Telepathic Network": {
            name: "Telepathic Network",
            description:
                "The character can speak telepathically with a group of people.",
            powerSet: "Telepathy",
            prerequisites: "Telepathic Link, Rank 2",
            duration: "Concentration",
            effect: "The character can communicate telepathically with a group of willing, linked people, each of whom they have met or seen before. The communication can be verbal, visual, or even more complex, such as imparting location information. The group can number up to five people per rank. There is no limit to the distance of the communication, as long as everyone involved is in the same dimension.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Telepathic Possession": {
            name: "Telepathic Possession",
            description:
                "The character mentally takes over someone else's body.",
            powerSet: "Telepathy",
            prerequisites: "Orders, Rank 5",
            duration: "Concentration",
            effect: "The character possesses a target with whom they've established a Telepathic Link and who has no Focus left. The character makes a Logic check with trouble against the target's Logic defense. On a success, the character takes over the target's body completely. The result of the character's check is the target number for any attempts by the target to end the possession. If the character attempts to harm someone with the possessed body, the target gets to make a Logic check to end the possession. If the target has the Heroic tag, they get an edge on the check. If the character attempts to harm the possessed body, the target gets an edge on the check. If the target has the Heroic tag, they get a double edge. This power can also be used to transfer the character's mind into an empty-minded target\u2014like a fresh clone or android\u2014permanently. This requires no check, as there is no one in the body to challenge the character's action.",
            action: "Standard",
            cost: "20 Focus",
        },
        "Teleport 1": {
            name: "Teleport 1",
            description: "The character teleports someplace else.",
            powerSet: "Teleportation",
            prerequisites: "Blink",
            duration: "Instant",
            effect: "The character teleports into a clear space they can see or have been to, up to 10 times their rank in spaces away. Outside of combat, they can teleport up to 100 times their rank in spaces away.",
            action: "Standard or Movement",
        },
        "Teleport 2": {
            name: "Teleport 2",
            description: "The character teleports great distances.",
            powerSet: "Teleportation",
            prerequisites: "Teleport 1",
            duration: "Instant",
            effect: "Outside of combat, the character can teleport up to 1,000 times their rank in spaces away.",
            action: "Standard or Movement",
        },
        "Teleport Blind": {
            name: "Teleport Blind",
            description: "The character teleports someplace new to them.",
            powerSet: "Teleportation",
            prerequisites: "Teleport 1, Rank 3",
            duration: "Instant",
            effect: "The character teleports to someplace they've never been and never seen, up to 10 times their rank in spaces away. Outside of combat, they can teleport up to 100 times their rank in spaces away. If the character teleports into something solid, they are automatically pushed out of it but take damage from the disruption equal to a standard action check. The damage multiplier is 1 for every space they must move to reach a clear area. If this kills them, their body is trapped inside the material they teleported into.",
            action: "Standard or Movement",
            cost: "15 Focus",
        },
        "Teleport Object": {
            name: "Teleport Object",
            description: "The character can teleport something else with them.",
            powerSet: "Teleportation",
            prerequisites: "Teleport 1, Rank 3",
                duration: "Permanent",
            effect: "The character can teleport along with them an object within reach as far away as their Teleport power normally allows them. The object (and things attached to or inside of it) can be up to their rank in sizes bigger than them. For example, if they are Rank 4, the object can be up to four sizes bigger than them.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Teleport Other": {
            name: "Teleport Other",
            description: "The character can teleport someone else away.",
            powerSet: "Teleportation",
            prerequisites: "Teleport 2, Rank 4",
            duration: "Instant",
            effect: "The character makes an Ego check against the Vigilance defense of a target they have grabbed. If the check is successful, the character can teleport the target as far away as their Teleport power normally allows them in combat. If the target winds up in something solid, they are automatically pushed out of it but take damage from the disruption equal to a standard action check. The damage multiplier is 1 for every space they must move to reach a clear area. If this kills them, their body is trapped inside the material they teleported into.",
            action: "Standard or Reaction",
            trigger: "The target is grabbed.",
            cost: "15 Focus",
        },
        "Teleport Together": {
            name: "Teleport Together",
            description:
                "The character can teleport someone they are touching.",
            powerSet: "Teleportation",
            prerequisites: "Teleport 1, Rank 3",
            duration: "Instant",
            effect: "The character teleports, taking any person they are touching with them, into clear spaces they can see or have been to, up to 10 times their rank in spaces away. Outside of combat, they can teleport up to 100 times their rank in spaces away. If the target does not wish to be teleported, the character must grab them first.",
            action: "Standard, Movement, or Reaction",
            trigger: "The target is grabbed.",
            cost: "10 Focus",
        },
        Teleportal: {
            name: "Teleportal",
            description: "The character opens a portal to another place.",
            powerSet: "Teleportation",
            prerequisites: "Teleport 1, Rank 4",
            duration: "Concentration",
            effect: "The character opens a glowing portal in a space next to them that teleports anything that enters it between that space and its destination, which forms a matched glowing portal in the other place. The other end of the portal must be in a clear space the character can see or has been to, up to 10 times their rank in spaces away. Outside of combat, they can teleport up to 1,000 times their rank in spaces away. Anything can move through the portal in either direction until it is closed, which the character can do at will.",
            action: "Standard",
            cost: "15 Focus",
        },
        Thunder: {
            name: "Thunder",
            description: "The character causes a deafening crack of thunder.",
            powerSet: "Weather Control",
            prerequisites: "None",
            duration: "Instant",
            effect: "The character makes an Ego check and compares that against the Resilience defense of every character within 10 spaces. Any character the attack succeeds against is deafened. On a Fantastic success, the character is also stunned for one round.",
            action: "Standard",
        },
        "Time-Out": {
            name: "Time-Out",
            description: "The character freezes time.",
            powerSet: "Omniversal Travel",
            prerequisites: "Instant Replay, Rank 4",
            duration: "1 round per rank",
            effect: "The character freezes time for everyone but themselves. During this period, they can act normally while everyone else seems to be frozen in place.",
            action: "Standard or Reaction",
            trigger: "The character or an ally is attacked.",
            cost: "15 Focus",
        },
        "Time-Out Bubble": {
            name: "Time-Out Bubble",
            description: "The character and allies step out of time.",
            powerSet: "Omniversal Travel",
            prerequisites: "Time-Out, Rank 4",
            duration: "1 round per rank",
            effect: "The character creates a time bubble that affects themselves and any chosen allies within 1 space per rank. Within the bubble, the character and those allies can act normally while everyone else seems to be frozen in place.",
            action: "Standard or Reaction",
            trigger: "The character or an ally is attacked.",
            cost: "15 Focus",
        },
        "Time-Out Tag": {
            name: "Time-Out Tag",
            description: "The character freezes a person or thing in time.",
            powerSet: "Omniversal Travel",
            prerequisites: "Time-Out, Rank 4",
            duration: "1 round per rank",
            effect: "The character freezes time for one person or thing within their reach. Everything and everyone else can act normally. If the target does not wish to be frozen, the character must grab them first.",
            action: "Standard or Reaction",
            trigger: "The character or an ally is attacked.",
            cost: "15 Focus",
        },
        "Time Portal": {
            name: "Time Portal",
            description: "The character opens a portal in time.",
            powerSet: "Omniversal Travel",
            prerequisites: "Time Travel Together, Rank 4",
            duration: "Concentration",
            effect: "The character opens a glowing portal in a space next to them that moves anything that enters it between that space and its destination, which forms a matched glowing portal in the other place. The other end of the portal must be in a clear space in another period of time, in roughly the same place. Anything can move through the portal in either direction until it is closed, which the character can do at will.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Time Travel": {
            name: "Time Travel",
            description: "The character moves from one time to another.",
            powerSet: "Omniversal Travel",
            prerequisites: "Rank 3",
            duration: "Instant",
            effect: "The character instantly moves from their current time to another time\u2014for instance, from the present to 1962. When they move to the other time, they can arrive in any place they've been to before. Otherwise, they arrive at the closest available corresponding space in the other time.",
            action: "Standard or Movement",
            cost: "10 Focus",
        },
        "Time Travel Other": {
            name: "Time Travel Other",
            description: "The character sends someone to another time.",
            powerSet: "Omniversal Travel",
            prerequisites: "Time Travel, Rank 4",
            duration: "Instant",
            effect: "The character makes an Ego check against the Vigilance defense of a target they have grabbed. If the check is successful, the character can send the target to another time. The target can be sent to any location in that time that the character has been to before. Otherwise, the target arrives at the closest available corresponding space in the other time.",
            action: "Standard, Movement, or Reaction",
            trigger: "The target is grabbed.",
            cost: "15 Focus",
        },
        "Time Travel Together": {
            name: "Time Travel Together",
            description:
                "The character brings someone with them to another time.",
            powerSet: "Omniversal Travel",
            prerequisites: "Time Travel, Rank 3",
            duration: "Instant",
            effect: "The character moves to a different time, taking any person they are touching with them. If the target does not wish to come along, the character must grab them first. When they move to the other time, they can arrive in any place they've been to before. Otherwise, they arrive at the closest available corresponding space in the other time.",
            action: "Standard, Movement, or Reaction",
            trigger: "The target is grabbed.",
            cost: "10 Focus",
        },
        "Uncanny 1": {
            name: "Uncanny 1",
            description:
                "The character has protection against mental assaults.",
            powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
            effect: "Any damage multiplier for attacks against the character's Focus is reduced by 1. If this power is part of a battle suit, the power is integrated into a removable helmet. Otherwise, it's a part of the character. If this power stems from armor or anything else removable\u2014like Magneto's helmet\u2014the character should apply the Tech Reliance trait to it.",
        },
        "Uncanny 2": {
            name: "Uncanny 2",
            description: "The character's mind is protected as if by steel.",
            powerSet: "Basic",
            prerequisites: "Uncanny 1, Rank 2",
            duration: "Permanent",
            effect: "Any damage multiplier for attacks against the character's Focus is reduced by 2.",
        },
        "Uncanny 3": {
            name: "Uncanny 3",
            description: "The character's mind is protected like a tank.",
            powerSet: "Basic",
            prerequisites: "Uncanny 2, Rank 4",
            duration: "Permanent",
            effect: "Any damage multiplier for attacks against the character's Focus is reduced by 3.",
        },
        "Uncanny 4": {
            name: "Uncanny 4",
            description: "The character's mind is protected like a battleship.",
            powerSet: "Basic",
            prerequisites: "Uncanny 3, Rank 6",
            duration: "Permanent",
            effect: "Any damage multiplier for attacks against the character's Focus is reduced by 4.",
        },
        "Unflappable Poise": {
            name: "Unflappable Poise",
            description: "The character can dodge most close attacks.",
            powerSet: "Martial Arts",
            prerequisites: "Defense Stance, Rank 3",
            duration: "Permanent",
            effect: "Any close attacks against the character have trouble. While they use Defense Stance, such attacks have double trouble.",
        },
        "Unrelenting Smash": {
            name: "Unrelenting Smash",
            description: "The character smashes everything in reach.",
            powerSet: "Super-Strength",
            prerequisites: "Ground-Shaking Stomp, Mighty 2, Rank 4",
            duration: "Instant",
            effect: "The character makes a Melee check and compares it against the Melee defense of every enemy within their reach. Any enemy the attack succeeds against takes half regular damage. On a Fantastic success, those enemies take full regular damage and are knocked prone instead. The character may then pay 15 more Focus to do the same thing again\u2014before which they can move up to half their speed with anything left from their normal movement action. They can keep doing this until they run out of speed or Focus. Each target can be affected by this attack by this character only once per round.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Unstoppable Assault": {
            name: "Unstoppable Assault",
            description: "The character hews a path through their foes.",
            powerSet: "Melee Weapons",
            prerequisites: "Furious Attacks, Focused Fury, Rank 4",
            duration: "Instant",
            effect: "The character makes a Melee check and compares that against the Melee defense of every enemy within their reach. Any enemy the attack succeeds against takes half regular damage. On a Fantastic success, those enemies take full regular damage instead and suffer the weapon's special effect. The character may then pay 15 more Focus to do the same thing again\u2014before which they can move up to half their Speed with whatever is left from their normal movement action. They can keep doing this until they run out of Speed or Focus. Each target can only be affected by this attack by this character once per round.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Untouchable Position": {
            name: "Untouchable Position",
            description: "The character's enemies struggle to gang up on them.",
            powerSet: "Martial Arts",
            prerequisites: "Counterstrike Technique, Rank 3",
            duration: "Permanent",
            effect: "If the character is attacked, all other close attacks against them have trouble until the start of their next turn.",
        },
        "Vapors of Valtorr": {
            name: "Vapors of Valtorr",
            description:
                "The character weaves an inky mist that can attack those inside it.",
            powerSet: "Magic",
            prerequisites: "Sorcerous, Rank 3",
            duration: "Concentration",
            effect: "The character creates an inky mist for up to 25 spaces per rank around them that blocks all line of sight beyond 5 spaces. On later turns, the character can have the mist attack one target at a time. Make an Ego check against the target's Vigilance defense. On a success, the attack does regular damage. On a Fantastic success, it does double damage and blinds the target for one turn.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Venom Blast": {
            name: "Venom Blast",
            description: "The character unleashes a bioelectric shock.",
            powerSet: "Spider-Powers",
            prerequisites: "None",
            duration: "Instant",
            effect: "The character makes a ranged attack. If the attack is a success, it does regular damage. On a Fantastic success, the attack does double damage, and if the target suffers any actual damage, they are also stunned for one round.",
            action: "Standard",
            range: "5 spaces",
        },
        "Vicious Attack": {
            name: "Vicious Attack",
            description: "The character strikes a felling blow.",
            powerSet: "Melee Weapons",
            prerequisites: "None",
            duration: "Instant",
            effect: "The character makes a close attack. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the enemy takes double damage and suffers the weapon's special effect.",
            action: "Standard",
        },
        Wallcrawling: {
            name: "Wallcrawling",
            description: "The character can climb like a spider.",
            powerSet: "Spider-Powers",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character can climb at a speed equal to their regular speed. Under normal conditions, they never lose their grip, no matter the angle of the surface.",
        },
        "Weapons Blazing": {
            name: "Weapons Blazing",
            description: "The character blazes away at two foes at once.",
            powerSet: "Ranged Weapons",
            prerequisites: "Snap Shooting",
            duration: "Instant",
            effect: "The character splits their attack to make two ranged attacks against separate targets (or they can focus a single attack on a single target). Make a single Agility check and compare it to the targets' Agility defenses. On a success, the affected target takes half regular damage. On a Fantastic success, the affected target takes full damage, and the character can make a bonus attack with this power against any available target, with the same effect.",
            action: "Standard",
        },
        "Weather Chill": {
            name: "Weather Chill",
            description: "The character cools things down.",
            powerSet: "Weather Control",
                prerequisites: "None",
            duration: "Concentration",
            effect: "The temperature in an area roughly a mile across falls as low as 0\u00b0F.",
            action: "Standard",
        },
        "Weather Warm": {
            name: "Weather Warm",
            description: "The character heats things up.",
            powerSet: "Weather Control",
            prerequisites: "None",
            duration: "Concentration",
            effect: "The temperature in an area roughly a mile across climbs as high as 100\u00b0F.",
            action: "Standard",
        },
        "Webcasting": {
            name: "Webcasting",
            description: "The character can snare a target in a web.",
            powerSet: "Spider-Powers",
            prerequisites: "None",
            duration: "Instant",
            effect: "The character makes a ranged attack on an enemy. If the attack is a success, the web paralyzes the enemy. On a Fantastic success, the enemy is also pinned. Breaking free from webbing requires a Melee check (target number 20).",
            action: "Standard",
            range: "10 spaces",
        },
        "Webgliding": {
            name: "Webgliding",
            description:
                "The character can glide through the air on their webbing.",
            powerSet: "Spider-Powers",
            prerequisites: "Webcasting, Rank 2",
                duration: "Permanent",
            effect: "The character gains the Glide movement mode, with a speed equal to double their Run Speed.",
        },
        "Webgrabbing": {
            name: "Webgrabbing",
            description: "The character snares a foe in a web.",
            powerSet: "Spider-Powers",
            prerequisites: "Webcasting, Rank 2",
            duration: "Instant",
            effect: "The character makes a ranged attack on an enemy. If the attack is a success, the character grabs the target with a web. On a Fantastic success, the target can also be pinned. Breaking free from webbing requires a Melee check (target number 20).",
            action: "Standard",
            cost: "5 Focus",
            range: "10 spaces",
        },
        "Webslinging": {
            name: "Webslinging",
            description:
                "The character can swing through the city on their webs.",
            powerSet: "Spider-Powers",
            prerequisites: "Webcasting, Rank 2",
            duration: "Permanent",
            effect: "The character gains the swingline movement mode, with a Speed equal to triple their Run Speed. The reach of their swingline is equal to their Swingline Speed.",
        },
        "Webtrapping": {
            name: "Webtrapping",
            description:
                "The character creates a giant web to trap those within it.",
            powerSet: "Spider-Powers",
            prerequisites: "Webgrabbing, Rank 3",
            duration: "The character's rank times 15 minutes",
            effect: "The character fills up to 5 spaces with sticky webs, and the affected spaces are considered difficult terrain. Any creature that starts its turn in or moves into an affected space must make an Agility check (target number 20) or be paralyzed by the webbing. Breaking free from webbing requires a Melee check (target number 20).",
            action: "Standard",
            cost: "10 Focus",
        },
        "Whirling Frenzy": {
            name: "Whirling Frenzy",
            description:
                "The character assaults a foe with a tornado of whirling attacks.",
            powerSet: "Melee Weapons",
            prerequisites: "Fast Attacks, Rank 2",
            duration: "Instant",
            effect: "The character makes an Agility check and compares it against the Agility defense of every enemy within their reach. If an attack is a success, the enemy takes half regular damage. On a Fantastic success, the enemy takes full damage and suffers the weapon's special effect.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Winds of Watoomb": {
            name: "Winds of Watoomb",
            description: "The character creates swirling winds for protection.",
            powerSet: "Magic",
            prerequisites: "Sorcerous, Rank 2",
            duration: "Instant",
            effect: "The character conjures swirling winds that they control. All movement by a foe within 10 spaces per the character's rank is cut in half. The character can also use this spell to push away smoke, mist, or fog. If such a thing was created by a power, the character makes an Ego check with an edge against the Ego defense of the opposing controller. On a success, the controller's power ends. On a Fantastic success, the controller is knocked prone. Additionally, the Winds of Watoomb can be used to reinforce the Shield of the Seraphim. The character can transfer any Health damage that gets through the Shield of the Seraphim's protection to their Focus instead, leaving the Shield of the Seraphim intact.",
            action: "Standard or Reaction",
            trigger: "Damage gets through the Shield of the Seraphim",
            cost: "10 Focus",
        },
        "Wisdom": {
            name: "Wisdom",
            description:
                "The character not only has brains but knows when to use them.",
            powerSet: "Basic",
                prerequisites: "None",
                duration: "Permanent",
            effect: "The character can use their Ego defense score against Logic attacks too.",
        },
        "Wisecracker": {
            name: "Wisecracker",
            description: "The character irritates a foe with their sharp wit.",
            powerSet: "Basic",
                prerequisites: "None",
            duration: "Instant",
            effect: "The character cracks a joke at the enemy's expense. Make an Ego attack. On a success, it does regular Focus damage. On a Fantastic success, the damage is doubled, and the target is stunned for one round.",
            action: "Reaction",
            trigger:
                "The character succeeds in an attack on an enemy in earshot, or an enemy in earshot fails an attack on them.",
        },
        "Copy Psyche": {
            name: "Copy Psyche",
            description: "The character can move whole minds around.",
            powerSet: "Telepathy",
            prerequisites: "Information Upload, Rank 4",
            duration: "Instant",
            effect: "The character can copy the mind of a person with whom they have established a telepathic link and store it in their own mind. This power can also be used to transmit a mind\u2014either theirs or a stored copy of someone else's\u2014into the mind of another person with whom they've established a telepathic link. Additionally, it can be used to erase a copy of a mind from a person's brain. A character can hold up to one extra mind in their head for every rank the character has. The person whose mind was copied suffers no ill effects. The character can have conversations with the minds stored in their head, and the guest minds can try to influence the character's decisions and actions. If the character wants to know something that's in a guest mind, they can use the Mind Reading power on it. However, they don't have to first establish a telepathic link to do so. At the end of every day that a character has more than one mind in their head, they must make a Resilience vs. TN 10 action check. If they fail, they lose 5 Focus. This Focus cannot be regained until the character gets rid of any extra minds. It may take a while, but eventually, the character is sure to wind up demoralized until they rid themselves of any extra minds. If a character with extra minds in their head wants to remove an extra mind, they can make a Logic check against the mind's Logic defense. If they succeed, they permanently delete the copied mind from their brain. If they fail, they lose 5 Focus. When a character with extra minds in their head is demoralized, any mind inside them can attempt to take over their body. To do so, the mind must make a Logic check against the character's Logic defense. On a success, the mind gains control of the character's body. (If more than one mind tries this at once, the highest result prevails.) On a Fantastic success, the mind takes over the target's body with the body's Focus fully restored. If a target does not want to have an extra mind placed in their head in the first place, the target must first be demoralized before the attempt is made. Then the character using this power must make a Logic check against the target's Logic defense. On a success, the new mind is copied over. On a Fantastic success, the mind takes over the target's body with the body's Focus fully restored. If a body is taken over in this way, the original mind remains and cannot be removed. It can try to take over its body again if the new controller of the body becomes demoralized. If a character with extra minds in their head is shattered, all extra minds in it are permanently lost, in addition to the regular effects. In the case of the Krakoan resurrection protocols, Cerebro is used to copy a character's entire mind. It then stores the mind in a device designed by Forge. Any telepath with this power can copy a stored mind and transmit it into a fresh clone of the body from which it emerged, effectively resurrecting that character.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Cosmic Awareness": {
            name: "Cosmic Awareness",
            description:
                "The character can detect details about things anywhere in the universe.",
            powerSet: "Sixth Sense",
            prerequisites: "Microscopic Awareness, Rank 4",
            duration: "Concentration",
            effect: "The character can sense selected things at any distance from them, as long as they are in the same universe as what they are attempting to detect. This can include the location, relative velocity and overall emotional and physical status of any item, creature or group known to the character.",
            action: "Standard",
            cost: "15 Focus",
            range: "Unlimited",
        },
        "Indecipherable": {
            name: "Indecipherable",
            description: "The character has a language all their own.",
            powerSet: "Translation",
            prerequisites:
                "Understand Spoken Language, Understand Unusual Communication, Rank 3",
                duration: "Permanent",
            effect: "The character has constructed an internal language that only they can understand. They think in this language entirely, and when they communicate with others, they are translating from that language. This effectively renders them immune to telepathic powers like Mind Reading or Mind Interrogation, as anyone trying to read their mind cannot understand this unique language.",
        },
        "Intuition": {
            name: "Intuition",
            description: "The character has a bad feeling about this.",
            powerSet: "Sixth Sense",
            prerequisites: "Rank 2",
            duration: "Instant",
            effect: "When faced with a decision, the character can get a feeling about which choice would be best for them in the long run. When activating this power, the player presents the choice to the Narrator, and the Narrator tells them which choice the intuition is leading the character toward. Characters should take care when using this power. What is best for them might not be best for the rest of the team or anyone else they care about. Also, what's best in the long run might not be best for the character in the short run. In fact, what's best is often up for interpretation.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Lucky You": {
            name: "Lucky You",
            description: "The character can give good fortune to a friend.",
            powerSet: "Luck",
            prerequisites: "Lucky Me, Rank 2",
            duration: "Concentration",
            effect: "The character touches an ally. That ally gains an edge on all action checks made while this power is in effect.",
            action: "Standard",
            cost: "5 Focus per turn",
            range: "Reach",
        },
        "Microscopic Awareness": {
            name: "Microscopic Awareness",
            description:
                "The character can detect details about the smallest things.",
            powerSet: "Sixth Sense",
            prerequisites: "Rank 2",
            duration: "Concentration",
            effect: "The character can see and identify items that would normally require a microscope to detect, much less comprehend. This includes things like fingerprints, a single strand of hair and even a person's DNA. In the case of DNA, the character can use this to identify a person and link them to close relatives with similar DNA.",
            action: "Standard",
            cost: "5 Focus",
            range: "1 space per rank",
        },
        "Never Surrender": {
            name: "Never Surrender",
            description: "The character can help a friend rally.",
            powerSet: "Healing",
            prerequisites: "Rank 2",
            duration: "Concentration",
            effect: "The character can eliminate the effects of a target losing all of their Focus. Rather than becoming demoralized, the target can function normally without having trouble on all their actions due to their lack of Focus. They cannot spend more Focus, though, and they can still be shattered. Once the power takes effect, the target does not have to remain within the character's reach. When the effect ends, if the target has 0 Focus or less, they become demoralized. If the target's Focus rises above 0 at any point, this power automatically ends.",
            action: "Standard",
            cost: "5 Focus",
            range: "Reach",
        },
        "Postcognition 1": {
            name: "Postcognition 1",
            description: "The character knows what just happened.",
            powerSet: "Sixth Sense",
            prerequisites: "Rank 2",
            duration: "Instant",
            effect: "The character can sense what happened to a particular person, place or item within their reach\u2014including themselves\u2014in the past six hours. If using the power to analyze a person, they sense the events from the person's point of view, using that person's senses. If the person is unconscious, dead or otherwise senseless at any point during that time, the character cannot sense anything at those points either. If using the power to analyze a place, the character can sense everything that happened in that place over that period of time, using their own senses. It seems to the character as if they are standing in their current location and position. If using the power to analyze an item, the character senses how the item was affected or used over that period of time, no matter where it was located or how it moved. They can sense things as if the item had their senses. The character can fast-forward and rewind through the period of time and stop at interesting parts, allowing them to play out in real time.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Postcognition 2": {
            name: "Postcognition 2",
            description: "The character knows what happened in the past day.",
            powerSet: "Sixth Sense",
            prerequisites: "Postcognition 1, Rank 3",
            duration: "Instant",
            effect: "The character can sense what happened to a particular person, place or item within their reach\u2014including themselves\u2014in the past 24 hours. Otherwise, this power works the same as Postcognition 1.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Postcognition 3": {
            name: "Postcognition 3",
            description: "The character knows what happened in the past year.",
            powerSet: "Sixth Sense",
            prerequisites: "Postcognition 2, Rank 4",
            duration: "Instant",
            effect: "The character can sense what happened to a particular person, place or item within their reach\u2014including themselves\u2014in any 24-hour period in the past year. Otherwise, this power works the same as Postcognition 1.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Postcognition 4": {
            name: "Postcognition 4",
            description:
                "The character knows what happened in the past century.",
            powerSet: "Sixth Sense",
            prerequisites: "Postcognition 3, Rank 5",
            duration: "Instant",
            effect: "The character can sense what happened to a particular person, place or item within their reach\u2014including themselves\u2014in any week-long period in the past century. Otherwise, this power works the same as Postcognition 1.",
            action: "Standard",
            cost: "20 Focus",
        },
        "Power Slider": {
            name: "Power Slider",
            description:
                "The character's power waxes and wanes with what's vital to them.",
            powerSet: "Power Control",
            prerequisites: "Rank 3",
            duration: "Permanent",
            effect: "The character has a single criterion that affects the strength of their powers on a spectrum. The character starts off normal, but they can become boosted or dampened from there. When things are going well for the character, all of their other powers are boosted. If the powers have ranges or effective areas or durations, these are doubled. If the powers affect damage multipliers, add 1 to the effects. Any effects that normally happen on a Fantastic success automatically happen on any success, not just a Fantastic one. Also, anything that would dampen their powers only brings them back to normal. When things are going poorly for the character, all of their other powers are dampened. If the powers have ranges or effective areas or durations, these are halved. If the powers affect damage multipliers, subtract 1 from the effects. The power can no longer enjoy Fantastic successes. Also, anything that would boost their powers only brings them back to normal. These effects last for a single combat or\u2014if they happen outside of combat\u2014a single day. Here are three criteria to pick from: confidence, faith and media popularity. With the Narrator's consent, players can come up with others.",
        },
        "Precognition 1": {
            name: "Precognition 1",
            description: "The character can see the near future.",
            powerSet: "Sixth Sense",
            prerequisites: "Intuition, Rank 2",
            duration: "Instant",
            effect: "The character gains a sense of what is going to happen to a particular person, place or item within their reach\u2014including themselves\u2014in the next 24 hours. The further out any particular future is, the harder it is for the character to be certain about elements of that future. However, they can sense broad paths. Especially perilous or likely (or worse, both) possibilities often stand out like beacons in the night. The player can ask the Narrator a single question about the day ahead and get an honest answer based upon what the Narrator thinks is most likely to happen. The Narrator should give short and direct answers without detailed explanations. It is perfectly fine for the answer to be cryptic and to leave the player with more questions than they started with. These answers do not dictate what is fated to happen. They only give hints as to possible futures. The choices the players make and the chances they take have a tremendous impact upon these outcomes. Terribly unlikely things happen all the time, which means that the character's sense of the future is not infallible. However, they are rarely outright wrong.",
            action: "Standard",
            cost: "5 Focus",
        },
        "Precognition 2": {
            name: "Precognition 2",
            description: "The character can see the week ahead.",
            powerSet: "Sixth Sense",
            prerequisites: "Precognition 1, Rank 3",
            duration: "Instant",
            effect: "The character gains a sense of what is going to happen to a particular person, place or item within their reach\u2014including themselves\u2014in the next week. Otherwise, this power works the same as Precognition 1. Alternatively, the character can consider the fate of something within a mile of their location (rather than within their reach) over the next 24 hours. The character simply closes their eyes and thinks about the thing in question, which must be something they already know about.",
            action: "Standard",
            cost: "10 Focus",
        },
        "Precognition 3": {
            name: "Precognition 3",
            description: "The character can see the month ahead.",
            powerSet: "Sixth Sense",
            prerequisites: "Precognition 2, Rank 4",
            duration: "Instant",
            effect: "The character gains a sense of what is going to happen to a particular person, place or item within their reach\u2014including themselves\u2014in the next month. Otherwise, this power works the same as Precognition 1. Alternatively, the character can consider the fate of something within a mile of their location (rather than within their reach) over the next week, or something within 100 miles of their location over the next 24 hours. The character simply closes their eyes and thinks about the thing in question, which must be something they already know about.",
            action: "Standard",
            cost: "15 Focus",
        },
        "Precognition 4": {
            name: "Precognition 4",
            description: "The character can see a whole year ahead.",
            powerSet: "Sixth Sense",
            prerequisites: "Precognition 3, Rank 5",
            duration: "Instant",
            effect: "The character gains a sense of what is going to happen to a particular person, place or item within their reach\u2014including themselves\u2014in the next year. Otherwise, this power works the same as Precognition 1. Alternatively, the character can consider the fate of something within a mile of their location (rather than within their reach) over the next month, or something within 100 miles of their location over the next week, or something within 1,000 miles of their location over the next 24 hours. The character simply closes their eyes and thinks about the thing in question, which must be something they already know about.",
            action: "Standard",
            cost: "20 Focus",
        },
        "Real Jinx": {
            name: "Real Jinx",
            description: "The character is bad luck\u2014for their foes.",
            powerSet: "Luck",
            prerequisites: "Rank 4",
            duration: "Permanent",
            effect: "All characters who attempt to harm the character by direct action have trouble on their action checks. This does not stack with any other trouble.",
        },
        "Restore": {
            name: "Restore",
            description: "The character can heal a shattered mind.",
            powerSet: "Healing",
            prerequisites: "Soothing Touch, Rank 5",
            duration: "Instant",
            effect: "The character can bring a target back from being shattered. To attempt this, the character makes an Ego vs. TN 20 action check. On a success, the target is restored to 1 Focus. On a Fantastic success, the target is restored to full Focus. With any kind of success, the character using this power is then reduced to 1 Focus. On a failure, they only have to pay the minimum cost of 20 Focus.",
            action: "Standard",
            cost: "20 Focus",
            range: "Reach",
        },
        "Resurrect": {
            name: "Resurrect",
            description: "The character can help someone defy death.",
            powerSet: "Healing",
            prerequisites: "Healing Hands, Rank 5",
            duration: "Instant",
            effect: "The character can try to bring a target back from the dead if they do so soon after the target's death. To attempt this, they must be able to touch the dead target's body, and that body must be relatively intact\u2014at least enough so that if the person came back to life they wouldn't instantly die again. The character makes an Ego check against a TN equal to 10 plus 1 for every hour the target has been dead. For example, if the target has been dead for four hours, the TN is 14. On a success, the target is restored to 1 Health. On a Fantastic success, the target is restored to full Health. With any kind of success, the character using this power is then reduced to 1 Focus. On a failure, they only have to pay the minimum cost of 20 Focus.",
            action: "Standard",
            cost: "20 or more Focus",
            range: "Reach",
        },
        "Soothing Touch": {
            name: "Soothing Touch",
            description:
                "The character can help get a friend's head back in the game.",
            powerSet: "Healing",
            prerequisites: "Never Surrender, Rank 3",
            duration: "Instant",
            effect: "The character can restore a target creature's Focus with a touch. For every point of Focus the character spends, the target regains a point of Focus, up to their maximum score. The character must spend at least 10 Focus to use the power. Any Focus points that would have been restored beyond the target's maximum Focus are lost.",
            action: "Standard",
            cost: "10 or more Focus",
            range: "Reach",
        },
        "Swap Items": {
            name: "Swap Items",
            description: "The character swaps objects with someone else.",
            powerSet: "Teleportation",
            prerequisites: "Swap Places",
            duration: "Concentration",
            effect: "The character swaps items they possess with the items of another person they can see within 2 spaces per the character's rank. These items can include weapons, clothing or anything else that is on the other person but not attached to them. When the effect ends, the swapped items return to the people who had them originally. The character can swap all of their possessions, or they can be as selective as they like. The items must generally be swapped on an equal basis, but it is possible to swap something for nothing. For instance, the character could swap what's in their hands for what's in the target's hands. If they are holding nothing and the target has a pistol, they can swap the pistol for nothing. If the person being swapped with is unwilling, the character must make an Ego check against that person's Vigilance defense to succeed.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
        },
        "Swap Places": {
            name: "Swap Places",
            description: "The character swaps places with someone else.",
            powerSet: "Teleportation",
                prerequisites: "None",
            duration: "Concentration",
            effect: "The character swaps places with another person they can see within 2 spaces per the character's rank. When the effect ends, the character and the other person swap places again. If the person being swapped with is unwilling, the character must make an Ego check against that person's Vigilance defense to succeed.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
        },
        "Swap Powers": {
            name: "Swap Powers",
            description:
                "The character swaps their powers for a target's powers.",
            powerSet: "Power Control",
            prerequisites: "Rank 3",
            duration: "Concentration",
            effect: "The character makes an Ego attack against a target they can see within 2 spaces per the character's rank. If the target's powers have costs, the character must pay the highest of them, or a minimum of 10 Focus. On a success, they swap all of their non-Swap powers with the target's powers. Both characters can now use their new powers as if they had always had them. When either character uses a swapped power, they must pay any cost for it normally as well.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
            cost: "10 or more Focus",
        },
        "Swap Status": {
            name: "Swap Status",
            description: "The character swaps status with someone else.",
            powerSet: "Teleportation",
            prerequisites: "Swap Items, Rank 2",
            duration: "Concentration",
            effect: "The character swaps status with a target they can see within 2 spaces per the character's rank. The character can swap their entire status with the target, or they can be selective about it. Statuses they can swap include: Lost Health, Lost Focus, Any condition, Occupation, Traits, Tags. When swapping lost Health or Focus, the character and the target each take their maximum Health or Focus and subtract from it anything that the other person has lost at that moment. The same thing happens when the effect ends. This could potentially kill or shatter someone, so the character should be careful when doing this. When swapping occupations, the character gains the target's position, including their authority and their responsibilities. For instance, if the character swaps occupations with the ruler of a nation, others recognize them as being the ruler for as long as the effect continues. When the effect ends, any alterations that have happened to either character swap back to the other. For instance, if one of the characters is killed while the other lives, that would swap when the effect ends. For this reason alone, characters should take extreme care with this power.",
            action: "Standard or Reaction",
            trigger: "The character is attacked.",
            cost: "5 Focus",
        },
        "Understand Body Language": {
            name: "Understand Body Language",
            description: "The character can read how a person holds themself.",
            powerSet: "Translation",
            prerequisites: "None",
            duration: "Instant",
            effect: "When the character encounters a culture for the first time, they can make a Logic vs. TN 13 action check to puzzle out its body language. If they already know any other version of the culture's language, they have an edge. On a success, they understand and can emulate the body language. On a Fantastic success, they permanently understand and can use it and never need to make a check for it again. This covers not only any potential full-body language used by an alien species but also the body language of species that use other forms of communication. With such species, understanding their body language allows the character to understand more than the target's words might communicate, such as whether a person is aggressive, shy, anxious, reckless and so on.",
            action: "Standard",
        },
        "Understand Code": {
            name: "Understand Code",
            description: "The character can figure out any kind of code.",
            powerSet: "Translation",
            prerequisites: "Understand Written Language",
            duration: "Instant",
            effect: "When the character encounters an unknown code for the first time, they can make a Logic vs. TN 13 action check to puzzle it out. If they already know any other version of the language the code is based on, they have an edge. On a success, they understand and can communicate in the code. On a Fantastic success, they permanently understand and can use it and never need to make a check for it again. Digital data communication is considered a form of code, and the character can use this power to understand such data too.",
            action: "Standard",
        },
        "Understand Sign Language": {
            name: "Understand Sign Language",
            description: "The character can get what someone is signing.",
            powerSet: "Translation",
            prerequisites: "None",
            duration: "Instant",
            effect: "When the character encounters an unknown sign language for the first time, they can make a Logic vs. TN 13 action check to puzzle it out. If they already know any other version of the language, they have an edge. On a success, they understand and can sign in the language. On a Fantastic success, they permanently understand and can use it and never need to make a check for it again.",
            action: "Standard",
        },
        "Understand Spoken Language": {
            name: "Understand Spoken Language",
            description: "The character can get what someone is saying.",
            powerSet: "Translation",
            prerequisites: "None",
            duration: "Instant",
            effect: "When the character encounters an unknown spoken language for the first time, they can make a Logic vs. TN 13 action check to puzzle it out. If they already know any other version of the language, they have an edge. On a success, they understand and can speak the language. On a Fantastic success, they permanently understand and can speak it and never need to make a check for it again.",
            action: "Standard",
        },
        "Understand Unusual Communication": {
            name: "Understand Unusual Communication",
            description:
                "The character can understand any other form of communication.",
            powerSet: "Translation",
            prerequisites: "Understand Body Language",
            duration: "Instant",
            effect: "When the character encounters an unknown form of communication for the first time\u2014one that doesn't depend on hearing, vision or code\u2014they can make a Logic vs. TN 13 action check to puzzle it out. If they already know any other version of the communication, they have an edge. On a success, they understand and can use that form of communication. On a Fantastic success, they permanently understand and can use it and never need to make a check for it again. This works with forms of communication that include other senses, like scent, touch, taste and so on.",
            action: "Standard",
        },
        "Understand Written Language": {
            name: "Understand Written Language",
            description:
                "The character can figure out what someone has written.",
            powerSet: "Translation",
            prerequisites: "None",
            duration: "Instant",
            effect: "When the character encounters an unknown written language for the first time, they can make a Logic vs. TN 13 action check to puzzle it out. If they already know any other version of the language, they have an edge. On a success, they can read and write the language. On a Fantastic success, they can permanently read and write it and never need to make a check for it again.",
            action: "Standard",
        },
        "Wish You Luck": {
            name: "Wish You Luck",
            description:
                "The character can make a friend lucky, even from across the room.",
            powerSet: "Luck",
            prerequisites: "Lucky You, Rank 2",
            duration: "Concentration",
            effect: "The character picks an ally in line of sight. That ally gains an edge on all action checks made while this power is in effect. There is no limit on the range between the character and the ally once the power is activated. The character must pay the Focus cost at the start of each of their subsequent turns of concentration to keep the power working.",
            action: "Standard",
            cost: "5 Focus per turn",
            range: "5 spaces per rank",
        },
    }
},
    // Traits List
    traits: {
        "Abrasive": {
            name: "Abrasive",
            description:
                "The character rubs people the wrong way. This gives them trouble when trying to make Ego checks to persuade someone to help them out. It gives them an edge when they're trying to make Ego checks to intimidate someone.",
        },
        "Anathema": {
            name: "Anathema",
            description:
                "The character suffers direct harm when exposed to a particular substance. They cannot voluntarily enter the same space with it. If they are touched by it they instantly suffer the damage of a Rank 3 attack roll that automatically succeeds. This continues each turn until they are separated from the substance or are killed or destroyed. Damage caused by Anathema ignores all damage reduction the character has and cannot be healed by their Healing Factor.",
        },
        "Audience": {
            name: "Audience",
            description:
                "Many people follow the character's work and treat them with the respect they deserve. By making an Ego check the character can persuade their audience to provide help in the form of information or resources. The Narrator determines the TN of the Ego check based on the favor requested.",
        },
        "Battle Ready": {
            name: "Battle Ready",
            description:
                "The character is always mentally prepared for any sort of trouble to start. Add +30 Focus.",
        },
        "Beguiling": {
            name: "Beguiling",
            description:
                "The character has an edge when making an Ego check to persuade someone who could be attracted to them.",
        },
        "Berserker": {
            name: "Berserker",
            description:
                "The character often loses control of their temper. Any time they take physical damage they must make an Ego check with a TN equal to the amount of damage done. If they fail they go berserk and must charge at full speed into combat with the enemy who hurt them. Being berserk gives the character an edge on all close attacks and adds +2 to their Melee Resilience and Ego defenses. However it takes –2 from their Agility defense and they cannot use ranged weapons. If the character defeats the enemy who hurt them they must then charge to attack the next closest foe. At the end of the character's turn they lose 5 Focus. When their Focus is reduced to the point that the character could not voluntarily spend any more Focus—or if there are no enemies in sight—the berserk state automatically ends.",
        },
        "Big": {
            name: "Big",
            description:
                "The character's size is big which applies –1 to their Melee and Agility defenses adds +1 to their Run Speed and increases their reach to 2. They still occupy a single space.",
        },
        "Bloodthirsty": {
            name: "Bloodthirsty",
            description:
                "The character likes hurting people—even killing them. After they knock someone unconscious they must make a Challenging Ego check to keep from continuing to attack them until they're dead. A character with this trait cannot take the Heroic tag.",
        },
        "Breathe Different": {
            name: "Breathe Different",
            description:
                "The character cannot breathe Earth's air for long. They lose 1 point of Health for every minute they do not have some sort of assistance to allow them to breathe properly.",
        },
        "Clinician": {
            name: "Clinician",
            description:
                "The character has an edge on Logic checks to determine what is medically wrong with someone they examine.",
        },
        "Clueless": {
            name: "Clueless",
            description:
                "The character tends to shut out things they're not entirely focused on. They have trouble on any Vigilance checks to spot hidden or invisible things. Enemies have an edge on Agility checks to sneak near or past them.",
        },
        "Combat Expert": {
            name: "Combat Expert",
            description:
                "The character knows how to handle themselves better than most. They have an edge on Melee attacks against enemies of Rank 1.",
        },
        "Combat Reflexes": {
            name: "Combat Reflexes",
            description:
                "The character can react quickly in combat. This grants them one additional reaction each round.",
        },
        "Connections": {
            name: "Connections",
            description:
                "The character knows someone with access to and knowledge of a particular field. The connection could be a reporter, a police officer, a politician, a mobster, and so on. By making an Ego check the character can call on their contact to provide help in the form of clues, information, or resources. The Narrator determines the TN of the Ego check based on the favor requested.",
        },
        "Dealmaker": {
            name: "Dealmaker",
            description:
                "The character is skilled at the art of negotiation. They have an edge on action checks that have to do with making deals.",
        },
        "Determination": {
            name: "Determination",
            description:
                "The character never gives up even when they feel like they're at their worst. While demoralized they do not gain trouble on all actions though they still cannot maintain concentration or spend further Focus.",
        },
        "Eidetic Memory": {
            name: "Eidetic Memory",
            description:
                "The character rarely forgets anything. If their player forgets something they can ask the Narrator to remind them.",
        },
        "Enduring Constitution": {
            name: "Enduring Constitution",
            description:
                "The character can function for up to 48 hours without sleep and has an edge on Resilience checks to overcome fatigue or weariness.",
        },
        "Enhanced Physique": {
            name: "Enhanced Physique",
            description:
                "The character is stronger than regular humans. Treat them as one size bigger for lifting, carrying, swinging, and throwing things. (This does not stack with other factors.)",
        },
        "Extra Occupation": {
            name: "Extra Occupation",
            description:
                "The character has a busy life and has done all sorts of things. They can choose another occupation.",
        },
        "Extraordinary Origin": {
            name: "Extraordinary Origin",
            description:
                "The character has an additional origin. This trait can be selected multiple times but each time must be cleared with the Narrator. Take care to make sure that the origins make some kind of sense when combined together.",
        },
        "Famous": {
            name: "Famous",
            description:
                "The character is widely known—at least among a certain group of people or a population. They may be well-liked or they may be hated but either way they are famous. They have an edge when making an Ego check to persuade someone who thinks favorably of them. They have trouble when making an Ego check to persuade someone who dislikes them.",
        },
        "Fearless": {
            name: "Fearless",
            description:
                "The character is extremely brave. They have an edge on any action checks required to deal with fear.",
        },
        "First Aid": {
            name: "First Aid",
            description:
                "The character knows how to administer first aid. They have an edge on Logic checks to stop bleeding.",
        },
        "Font Of Information": {
            name: "Font Of Information",
            description:
                "The character has an edge on Logic checks having to do with knowledge.",
        },
        "Free Running": {
            name: "Free Running",
            description:
                "The character has an edge on Agility checks made to perform acrobatics during a movement action.",
        },
        "Fresh Eyes": {
            name: "Fresh Eyes",
            description:
                "The character has their own way of doing things. This often makes them seem strange to those around them but it means they can bring new perspectives to existing issues. They have an edge on Logic checks when faced with something for the first time.",
        },
        "Gearhead": {
            name: "Gearhead",
            description:
                "The character knows their way around machines. They have an edge on Logic checks to figure out how any machine works.",
        },
        "Glibness": {
            name: "Glibness",
            description:
                "The character can strike up a conversation with anyone at any time and can often convince them to lend a hand. They have an edge on Ego checks to persuade characters they are speaking to for the first time.",
        },
        "God Heritage": {
            name: "God Heritage",
            description:
                "The character—or at least one of their ancestors—is a god. Pick something that they are the god of. They don't have to be a god that most people have heard of. In fact they can be the god of something entirely new. However they cannot generally be the god of something that's already been claimed by someone else in their pantheon. Other gods are often jealous of their positions and take issue with such rivals. The character has an edge when dealing with something that they are the god of. Restriction: This trait can be selected only by characters with a mythic origin and an attachment to a particular pantheon like Asgardian or Olympian.",
        },
        "Gullible": {
            name: "Gullible",
            description:
                "The character is easy to fool. People lying to them have an edge on their Ego checks to persuade the character of something.",
        },
        "Honest": {
            name: "Honest",
            description:
                "The character is a terrible liar. They have trouble any time they make an Ego check that involves telling a lie. However they have an edge on any friendly Ego (persuasion) checks in which they're truthful.",
        },
        "Interrogation": {
            name: "Interrogation",
            description:
                "The character knows how to ask the right questions in the right way. They have an edge on Ego or Logic checks made when asking questions.",
        },
        "Inventor": {
            name: "Inventor",
            description:
                "The character is good at coming up with solutions on the fly. They have an edge on Logic checks when creating or repairing things.",
        },
        "Investigation": {
            name: "Investigation",
            description:
                "The character is an expert investigator. They have an edge on Vigilance checks to spot clues and on Logic checks related to interpreting clues. If they have access to a forensics lab at the time they gain a second edge on such checks.",
        },
        "Iron Will": {
            name: "Iron Will",
            description:
                "Enemies have trouble on attacks to control the character's mind or influence their behavior. Also the character gains an edge on checks to break free of mind control or other compulsions.",
        },
        "Legal Eagle": {
            name: "Legal Eagle",
            description:
                "The character knows the laws of their homeland and can help others navigate them. They have an edge on Logic checks when dealing with legalities.",
        },
        "Leverage": {
            name: "Leverage",
            description:
                "The character is good at figuring out what people want and using it against them. They have an edge on Logic checks to investigate people and on Ego checks to persuade people they've investigated.",
        },
        "Loner": {
            name: "Loner",
            description:
                "The character does not play well with others. They cannot be given an edge via assistance by someone who is not a teammate.",
        },
        "Monster": {
            name: "Monster",
            description:
                "The character is some kind of monster often of a type spoken of in legend. They have an edge whenever they attempt to intimidate someone.",
        },
        "Out Of Shape": {
            name: "Out Of Shape",
            description:
                "The character is in poor physical condition. They are considered one size smaller for the purposes of lifting, carrying, swinging, and throwing things.",
        },
        "Piloting": {
            name: "Piloting",
            description:
                "The character knows how to operate vehicles of all kinds. They have an edge on Agility checks triggered when piloting or driving a vehicle during a movement action. This applies to cars, boats, aircraft and so on.",
        },
        "Presence": {
            name: "Presence",
            description:
                "The character knows how to command attention on demand. They have an edge on Ego checks that involve getting people to pay attention to them or to voluntarily do things for them.",
        },
        "Public Speaking": {
            name: "Public Speaking",
            description:
                "The character knows how to get the attention of a crowd whether that's at a political rally or in front of a jury or a classroom. They have an edge on Ego checks when attempting to persuade groups.",
        },
        "Pundit": {
            name: "Pundit",
            description:
                "The character knows how to break news items and put them into context to craft a story around them. They have an edge on Ego or Logic rolls made when giving their opinion via media.",
        },
        "Quick Learner": {
            name: "Quick Learner",
            description:
                "If the character fails an action check they gain an edge on the check if they try the same action again on their next turn.",
        },
        "Scientific Expertise": {
            name: "Scientific Expertise",
            description:
                "The character has extensive scientific training. They have an edge on Logic checks made when dealing with scientific research. If they have access to an appropriate lab at the time they gain a second edge on such checks.",
        },
        "Signature Attack": {
            name: "Signature Attack",
            description:
                "The character is known for favoring a particular kind of weapon or attack power. They have an edge when making attacks that way. This trait can be taken more than once but each time must be with a different kind of weapon or attack power.",
        },
        "Situational Awareness": {
            name: "Situational Awareness",
            description:
                "The character is trained to always keep an eye out for trouble. They have an edge on initiative checks.",
        },
        "Skeptical": {
            name: "Skeptical",
            description:
                "The character is hard to fool. People lying to them have trouble on their Ego checks to persuade the character of something.",
        },
        "Small": {
            name: "Small",
            description:
                "The character's size is small which adds +1 to their Melee and Agility defenses and takes –1 from their Run Speed.",
        },
        "Sneaky": {
            name: "Sneaky",
            description:
                "The character has an edge on Agility checks when sneaking around. Enemies have trouble on Vigilance checks to detect the character when the character is invisible or hiding.",
        },
        "Stranger": {
            name: "Stranger",
            description:
                "The character doesn't understand local customs. They have trouble on checks made when trying to decipher such things or when trying to pass themselves off as a local.",
        },
        "Surprising Power": {
            name: "Surprising Power",
            description:
                "The character can choose a power they normally wouldn't be able to use. The character will still need to have any prerequisite powers but they can ignore rank and origin requirements. This trait can be selected multiple times.",
        },
        "Tech Reliance": {
            name: "Tech Reliance",
            description:
                "The character relies on technology for powers. When they take damage that would render them unconscious they can instead choose to lose all of their technology-related powers and remain conscious with 1 point of Health remaining. Assuming the character has access to parts and tools lost powers can be repaired after a battle.",
        },
        "Weakness": {
            name: "Weakness",
            description:
                "The character suffers an unusual amount of harm from certain substances. Any attack made with that substance ignores all inherent damage reduction the character has and cannot be healed by their Healing Factor.",
        },
        "Weird": {
            name: "Weird",
            description:
                "The character has something weird (or even wonderful) about them. This causes people to have strong reactions to them both good and bad. They have an edge on all Ego checks to persuade people inclined to like them and trouble on all Ego checks against people inclined to dislike them.",
        },
    }
};

// Global state
let selectedPowers = [];
let selectedTraits = [];

// Initialize the application
function init() {
    // Setup power sets dropdown
    const powerSetSelect = document.getElementById("powerSetSelect");
    powersTraitsData.powers.powerSets.forEach((set) => {
        const option = document.createElement("option");
        option.value = set;
        option.textContent = set;
        powerSetSelect.appendChild(option);
    });

    // Initial render
    renderPowers();
    renderTraits();

    // Setup event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Power set filter
    document
        .getElementById("powerSetSelect")
        .addEventListener("change", renderPowers);

    // Search
    document
        .getElementById("searchInput")
        .addEventListener("input", renderPowers);

    // Save/Load/New/Export buttons
    document.getElementById("saveBtn").addEventListener("click", saveHero);
    document.getElementById("openBtn").addEventListener("click", loadHero);
    document.getElementById("newBtn").addEventListener("click", resetHero);
    document.getElementById("exportBtn").addEventListener("click", exportToPDF);
}

function renderPowers() {
    const powersList = document.getElementById("powersList");
    const searchTerm = document
        .getElementById("searchInput")
        .value.toLowerCase();
    const selectedPowerSet = document.getElementById("powerSetSelect").value;

    powersList.innerHTML = "";

    Object.entries(powersTraitsData.powers.powerList)
        .filter(([name, power]) => {
            const matchesSearch = name.toLowerCase().includes(searchTerm);
            const matchesPowerSet =
                selectedPowerSet === "" || power.powerSet === selectedPowerSet;
            return matchesSearch && matchesPowerSet;
        })
        .forEach(([name, power]) => {
            const div = document.createElement("div");
            div.className = "list-item";
            div.textContent = name;
            div.addEventListener("click", () => showDetails("power", power));
            div.addEventListener("dblclick", () => addPower(name));
            powersList.appendChild(div);
        });
}

function renderTraits() {
    const traitsList = document.getElementById("traitsList");
    traitsList.innerHTML = "";

    Object.entries(powersTraitsData.traits).forEach(([name, trait]) => {
        const div = document.createElement("div");
        div.className = "list-item";
        div.textContent = name;
        div.addEventListener("click", () => showDetails("trait", trait));
        div.addEventListener("dblclick", () => addTrait(name));
        traitsList.appendChild(div);
    });
}

function showDetails(type, item) {
    const detailsContent = document.getElementById("detailsContent");
    let html = `<h3>${item.name}</h3><p>${item.description}</p>`;

    if (type === "power") {
        html += `
            <p><strong>Power Set:</strong> ${item.powerSet}</p>
            <p><strong>Prerequisites:</strong> ${item.prerequisites}</p>
            <p><strong>Duration:</strong> ${item.duration}</p>
            <p><strong>Effect:</strong> ${item.effect}</p>
        `;
    }

    detailsContent.innerHTML = html;
}

function addPower(name) {
    if (!selectedPowers.includes(name)) {
        selectedPowers.push(name);
        renderSelectedPowers();
    }
}

function addTrait(name) {
    if (!selectedTraits.includes(name)) {
        selectedTraits.push(name);
        renderSelectedTraits();
    }
}

function renderSelectedPowers() {
    const selectedPowersList = document.getElementById("selectedPowers");
    selectedPowersList.innerHTML = "";

    selectedPowers.forEach((name) => {
        const div = document.createElement("div");
        div.className = "list-item";
        div.textContent = name;
        div.addEventListener("dblclick", () => {
            selectedPowers = selectedPowers.filter((p) => p !== name);
            renderSelectedPowers();
        });
        selectedPowersList.appendChild(div);
    });
}

function renderSelectedTraits() {
    const selectedTraitsList = document.getElementById("selectedTraits");
    selectedTraitsList.innerHTML = "";

    selectedTraits.forEach((name) => {
        const div = document.createElement("div");
        div.className = "list-item";
        div.textContent = name;
        div.addEventListener("dblclick", () => {
            selectedTraits = selectedTraits.filter((t) => t !== name);
            renderSelectedTraits();
        });
        selectedTraitsList.appendChild(div);
    });
}

function saveHero() {
    const heroName = document.getElementById("heroName").value;
    const heroData = {
        name: heroName,
        powers: selectedPowers,
        traits: selectedTraits,
    };

    const json = JSON.stringify(heroData);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${heroName || "hero"}_powers_and_traits.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function loadHero() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";

    input.onchange = async (e) => {
        const file = e.target.files[0];
        const text = await file.text();
        const heroData = JSON.parse(text);

        document.getElementById("heroName").value = heroData.name;
        selectedPowers = heroData.powers;
        selectedTraits = heroData.traits;

        renderSelectedPowers();
        renderSelectedTraits();
    };

    input.click();
}

function resetHero() {
    document.getElementById("heroName").value = "";
    selectedPowers = [];
    selectedTraits = [];
    renderSelectedPowers();
    renderSelectedTraits();
}

function exportToPDF() {
    if (!selectedPowers.length && !selectedTraits.length) {
        alert("Your selected powers and traits list is empty.");
        return;
    }

    const heroName = document.getElementById("heroName").value.trim();
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'letter'
    });

    // Define page and layout parameters
    const leftMargin = 40;
    const topMargin = 60;
    const columnWidth = 250;
    const columnGap = 20;
    const lineHeight = 12;
    let yPos = topMargin;
    let xPos = leftMargin;
    let pageNumber = 1;

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const maxWidth = columnWidth;

    // Helper function to add header and footer
    function addHeaderFooter() {
        doc.setFont("helvetica", "italic");
        doc.setFontSize(9);
        doc.text(`Page ${pageNumber}`, pageWidth - leftMargin, pageHeight - 20);
        if (heroName) {
            doc.text(`Hero: ${heroName}`, leftMargin, 40);
        }
    }

    // Function to check if a new column or page is needed
    function checkPageSpace(itemHeight) {
        if (yPos + itemHeight > pageHeight - 60) {
            // Move to the next column
            if (xPos === leftMargin) {
                xPos = leftMargin + columnWidth + columnGap; // Move to right column
                yPos = topMargin;
            } else {
                doc.addPage(); // Add a new page and reset to the first column
                yPos = topMargin;
                xPos = leftMargin;
                pageNumber++;
                addHeaderFooter();
            }
        }
    }

    // Helper function to calculate the height of wrapped text
    function calculateTextHeight(text, fontSize = 10) {
        doc.setFontSize(fontSize);
        const lines = doc.splitTextToSize(text, maxWidth);
        return lines.length * lineHeight;
    }

    // Helper function to calculate the total height of an item
    function calculateItemHeight(details) {
        let height = 0;
        height += calculateTextHeight(details.name, 12) + 10; // Name height

        if (details.description) height += calculateTextHeight(`Description: ${details.description}`);
        if (details.powerSet) height += calculateTextHeight(`Power Set: ${details.powerSet}`);
        if (details.prerequisites) height += calculateTextHeight(`Prerequisites: ${details.prerequisites}`);
        if (details.action) height += calculateTextHeight(`Action: ${details.action}`);
        if (details.trigger) height += calculateTextHeight(`Trigger: ${details.trigger}`);
        if (details.duration) height += calculateTextHeight(`Duration: ${details.duration}`);
        if (details.range) height += calculateTextHeight(`Range: ${details.range}`);
        if (details.cost) height += calculateTextHeight(`Cost: ${details.cost}`);
        if (details.effect) height += calculateTextHeight(`Effect: ${details.effect}`);

        height += 10; // Add padding space between items
        return height;
    }

    // Helper function to add wrapped text
    function addWrappedText(text, fontSize = 10, bold = false) {
        doc.setFont("helvetica", bold ? "bold" : "normal");
        doc.setFontSize(fontSize);

        const lines = doc.splitTextToSize(text, maxWidth);
        lines.forEach((line) => {
            doc.text(line, xPos, yPos);
            yPos += lineHeight;
        });
    }

    // Add initial header and footer
    addHeaderFooter();

    // Add the hero name or default title
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    if (heroName) {
        addWrappedText(`${heroName}'s Powers and Traits`, 14, true);
    } else {
        addWrappedText("Selected Powers and Traits", 14, true);
    }
    yPos += 20;

    // Function to add sections with colors and two columns
    function addSection(title, items, getDetails, nameColor) {
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(0, 0, 0);
        doc.text(title, xPos, yPos);
        yPos += lineHeight + 10;

        items.forEach((itemName) => {
            const details = getDetails(itemName);
            const itemHeight = calculateItemHeight(details);

            checkPageSpace(itemHeight); // Check if the item fits on the current page or column

            // Name in bold and specified color (red for powers, blue for traits)
            doc.setFont("helvetica", "bold");
            doc.setTextColor(nameColor[0], nameColor[1], nameColor[2]);
            addWrappedText(details.name, 12, true);

            // Set text back to normal and black for details
            doc.setFont("helvetica", "normal");
            doc.setTextColor(0, 0, 0);

            if (details.description) addWrappedText(`Description: ${details.description}`, 10);
            if (details.powerSet) addWrappedText(`Power Set: ${details.powerSet}`, 10);
            if (details.prerequisites) addWrappedText(`Prerequisites: ${details.prerequisites}`, 10);
            if (details.action) addWrappedText(`Action: ${details.action}`, 10);
            if (details.trigger) addWrappedText(`Trigger: ${details.trigger}`, 10);
            if (details.duration) addWrappedText(`Duration: ${details.duration}`, 10);
            if (details.range) addWrappedText(`Range: ${details.range}`, 10);
            if (details.cost) addWrappedText(`Cost: ${details.cost}`, 10);
            if (details.effect) addWrappedText(`Effect: ${details.effect}`, 10);

            yPos += 10; // Space between items
        });
    }

    // Add the Powers section with red names
    if (selectedPowers.length > 0) {
        addSection("Selected Powers", selectedPowers, (powerName) => powersTraitsData.powers.powerList[powerName], [255, 0, 0]);
    }

    // Add the Traits section with blue names
    if (selectedTraits.length > 0) {
        yPos += 20; // Add space before starting the traits section
        addSection("Selected Traits", selectedTraits, (traitName) => powersTraitsData.traits[traitName], [0, 0, 255]);
    }

    // Set the filename based on the hero's name
    const filename = heroName ? `${heroName}_powers_and_traits.pdf` : "selected_powers_and_traits.pdf";
    const safeFilename = filename.replace(/[\\/*?:"<>|]/g, "");

    // Save the PDF
    try {
        doc.save(safeFilename);
    } catch (error) {
        console.error("Error saving PDF:", error);
        alert("There was an error generating the PDF. Please try again.");
    }
}


// Start the application
document.addEventListener("DOMContentLoaded", init);
