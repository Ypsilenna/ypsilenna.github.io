$(document).ready(function () {
    const data = {
      "CharacterName": [
        "Frederic Cadieux",
        "Ambly Odipsas",
        "Pete Castro",
        "Rallosameer the Dream Wanderer",
        "Xivaillon",
        "Anshrilda the Chronomancer",
        "Duchess Marcoulitta",
        "Cyrona",
        "Ifra Shadowbringer",
        "King Beelzeberiad",
        "Lusstoni",
        "Lwiviear the God of Life",
        "Marcy the Illusionist",
        "Mennarath the Lorekeeper",
        "Niidari the Iridescent Pearl",
        "Omikraya",
        "Omikraya, the Blind Goddess of Stars",
        "Queen Rajiushi",
        "Raajimera the Snake Queen",
        "Thornasolei the Sun Goddess",
        "Triya Avaro",
        "The Uncle",
        "Lesbian Clouds",
        "Vendel Avaro",
        "Ymreiva the Death Goddess",
        "Ervastiva",
        "Fenrileia",
        "Romisellius",
        "Nyaranja",
        "Zethareshmi",
        "Mistletoe",
        "Coralie Cadieux-Odipsas",
        "Saahrimei the Blue-hearted",
        "Sil the Bard",
        "Aria the Dryad",
        "Kaspar the Dwarf",
        "Captain Dereck Gingerbeard",
        "Floria, Terror of the Sea",
        "Don Kaparro",
        "Riamidea the Necromancer",
        "Ferimus the Druid",
        "Ramisallia the Dragon Witch",
        "Arch priest Vermilicus",
        "Hagellish",
        "Zoriselida",
        "Zephyr",
        "Sonata"
 
      ],
 
      "Prompt": [
        "duck",
        "binoculars",
        "sun",
        "backpack",
        "nomad",
        "varsity jacket",
        "shrimp",
        "boat",
        "arcade machine",
        "lemon",
        "sunflower",
        "squash",
        "pineapple",
        "rain boots",
        "boots",
        "mango",
        "pasta",
        "school bus",
        "in space",
        "sun",
        "honeycomb",
        "passport",
        "bee",
        "cockatiel",
        "dandelion",
        "trumpet",
        "lemonade",
        "nail polish",
        "rubber duck",
        "construction helmet",
        "buttercup",
        "sponge",
        "banana",
        "chick",
        "hike",
        "cheese",
        "boom box",
        "seahorse",
        "mustard",
        "submarine",
        "daffodil",
        "taxi",
        "cherry blossom",
        "dragon fruit",
        "raspberry",
        "radish",
        "lotus",
        "snapdragon",
        "donut",
        "flamingo",
        "conch shell",
        "azalea",
        "axolotl",
        "salmon",
        "rose Quartz",
        "dolphin",
        "blush",
        "bubblegum",
        "as a rapper",
        "fairy",
        "cake",
        "lollipop",
        "paint",
        "waterlily",
        "pig",
        "ribbon",
        "ice cream",
        "starfish",
        "tongue",
        "yogurt",
        "gecko",
        "grass",
        "watermelon",
        "alligator",
        "leg warmers",
        "tractor",
        "lime",
        "mint",
        "caterpillar",
        "slime",
        "brocolli",
        "grapes",
        "chameleon",
        "lily pad",
        "cucumber",
        "peas",
        "grasshopper",
        "kiwi",
        "emerald",
        "toad",
        "avocado",
        "clover",
        "snake",
        "mantis",
        "jade",
        "peacock",
        "swimming",
        "blue jay",
        "aquamarine",
        "blueberries",
        "milkshake",
        "beach",
        "summer",
        "winter",
        "spring",
        "autumn",
        "the hacker",
        "kingfisher",
        "iceberg",
        "bluebells",
        "frog",
        "easter egg",
        "opal",
        "whale",
        "blackberries",
        "snow angel",
        "ocean",
        "mountains",
        "morning glory",
        "eyes",
        "waterfall",
        "moonstone",
        "jeans",
        "sky",
        "lake monster",
        "orange",
        "bell pepper",
        "butterfly",
        "wolf",
        "tiger lily",
        "sunstone",
        "bearded dragon",
        "wasp",
        "mushroom",
        "violin",
        "forest",
        "desert",
        "carrot",
        "fire",
        "water",
        "air",
        "earth",
        "magic",
        "cat",
        "fox",
        "sweet potato",
        "fireplace",
        "bonfire",
        "pumpkin",
        "peach",
        "marigold",
        "clownfish",
        "tiger",
        "chrysanthemum",
        "ginger",
        "goldfish",
        "starfish",
        "tulip",
        "spider crab",
        "amber",
        "squirrel",
        "comfy",
        "singing",
        "hairbrush",
        "violets",
        "amethyst",
        "floppy disc",
        "beet root",
        "bruise",
        "coral",
        "dragonfruit",
        "eggplant",
        "figs",
        "lavender field",
        "hummingbird",
        "beetle",
        "lilac",
        "octopus",
        "feet",
        "snail",
        "is very fast",
        "wisteria",
        "movie night",
        "night out",
        "ballad",
        "disco ball",
        "galaxy",
        "plum",
        "lava",
        "lava lamp",
        "jellyfish",
        "sunset",
        "sunrise",
        "wet",
        "dry",
        "rich",
        "poor",
        "jelly",
        "robot",
        "royal cape",
        "crown",
        "ghost",
        "flipflops",
        "apple",
        "lipstick",
        "kiss",
        "enamored",
        "rose",
        "telephone",
        "blood",
        "ruby",
        "android",
        "red panda",
        "stop",
        "chilli",
        "chef",
        "wine",
        "tomato",
        "rooster",
        "strawberry",
        "stealing",
        "silent",
        "unholy",
        "skateboard",
        "romantic",
        "nec-romantic",
        "ladybug",
        "ant",
        "milk",
        "cherry",
        "barn",
        "brick",
        "heart",
        "rules",
        "poppy",
        "village",
        "city",
        "horse",
        "blood moon",
        "hot sauce",
        "friendship",
        "epic",
        "as an alien",
        "thunderstorm",
        "clam",
        "crayon",
        "plates",
        "roller skates",
        "sk8er boi",
        "see you later",
        "toothbrush",
        "bow",
        "sapphire",
        "iris",
        "bioluminescence",
        "t-shirt",
        "lagoon",
        "corn",
        "tsunami",
        "bellflower",
        "dragonfly",
        "dragon",
        "heron",
        "pickaxe",
        "exotic",
        "mine",
        "80s",
        "90s",
        "2000s emo phase",
        "coal",
        "bell",
        "tower",
        "church",
        "praying",
        "sexytime",
        "dynamite",
        "low",
        "high",
        "guide",
        "guidebook",
        "fur",
        "necklace",
        "gift",
        "rift",
        "game",
        "fluorite",
        "dusk",
        "bear",
        "deer",
        "cavern",
        "grungy",
        "rancher",
        "as a cowboy",
        "moose",
        "acorn",
        "beaver",
        "sparrow",
        "as a pirate",
        "owl",
        "sheep",
        "hazelnut",
        "bat",
        "fallen leaves",
        "doctor",
        "hot chocolate",
        "pain",
        "chocolate",
        "farm",
        "animal",
        "transformation",
        "coconut",
        "penguin",
        "eagle",
        "leather",
        "indoors",
        "great outdoors",
        "sword",
        "shield",
        "book",
        "peanut",
        "marshmallow",
        "caramel",
        "steak",
        "anchor",
        "ship",
        "sailing",
        "mouse",
        "gargoyle",
        "bouquet",
        "trip",
        "tip",
        "match",
        "hope",
        "nest",
        "forget",
        "kind",
        "empty",
        "armadillo",
        "remote",
        "fowl",
        "salty",
        "poncho",
        "ponytail",
        "braids",
        "forever",
        "never",
        "pearl",
        "children",
        "family",
        "bluff",
        "poker",
        "heist",
        "dog",
        "booger",
        "tempting",
        "ego",
        "snack",
        "camping",
        "uh-oh",
        "gear",
        "cabbage",
        "onion",
        "camp",
        "unicorn",
        "cute",
        "pen",
        "camera",
        "creation",
        "dress",
        "bucket",
        "mask",
        "rust",
        "lightning",
        "blanket",
        "bibycle",
        "portal",
        "candles",
        "lantern",
        "snowman",
        "stew",
        "cooking",
        "candy cane",
        "snowflake",
        "window",
        "reindeer",
        "fireworks",
        "champagne",
        "bright",
        "dark",
        "celebration",
        "smile",
        "cocktail",
        "challenge",
        "hungover",
        "wish",
        "tart",
        "resolution",
        "lights",
        "balloons",
        "confetti",
        "clock",
        "calendar",
        "crazy outfit",
        "dancing",
        "hourglass",
        "parade",
        "cupid",
        "love letter",
        "dove",
        "padlock",
        "crush",
        "walkman",
        "arrow",
        "couple",
        "flirt",
        "soulmate",
        "rainbow",
        "dreamcatcher",
        "bamboo",
        "horseshoe",
        "shooting star",
        "gold",
        "evil eye",
        "wishing well",
        "key",
        "elephant",
        "rabbit",
        "turtle",
        "ladder",
        "sunny day",
        "rainy day",
        "vinyl record",
        "feathers",
        "seashell",
        "as a mermaid",
        "stormy weather",
        "vines",
        "nature walk",
        "cherry blossom",
        "overgrown",
        "elemental",
        "recycle",
        "wave",
        "shore",
        "twilight",
        "as a vampire",
        "flower crown",
        "lake side",
        "garden",
        "frozen",
        "nymph",
        "kelp",
        "seal",
        "shipwreck",
        "blobfish",
        "eel",
        "glowstick",
        "atlantic",
        "treasure",
        "trek",
        "buried",
        "hedgehog",
        "squid",
        "paintball",
        "swamp",
        "as a witch",
        "hunt",
        "prehistoric",
        "cave",
        "catacomb",
        "darkness",
        "jewels",
        "eggs",
        "map",
        "discovery",
        "discover",
        "tunnel",
        "underground lake",
        "glow",
        "sunken",
        "bones",
        "excavation",
        "cave painting",
        "story",
        "crystals",
        "star",
        "void",
        "reel",
        "VHS tape",
        "constellation",
        "planet",
        "moonlight",
        "shadow",
        "pay",
        "payphone",
        "as an astronaut",
        "comet",
        "rocket",
        "nebula",
        "firefly",
        "eclipse",
        "nightingale",
        "equinox",
        "voyage",
        "hologram",
        "black hole",
        "wyvern",
        "hydra",
        "serpent",
        "kirin",
        "drake",
        "basilisk",
        "salamander",
        "tree house",
        "basket",
        "picnic",
        "street",
        "meadow",
        "bread",
        "patched clothes",
        "sewing",
        "swing",
        "flower pot",
        "as a werewolf",
        "skeleton",
        "devil",
        "grim reaper",
        "succubus",
        "demon",
        "zodiac sign",
        "telescope",
        "starry sky",
        "evergreen",
        "mittens",
        "snowstorm",
        "stockings",
        "feast",
        "meat",
        "cold",
        "favorite memory",
        "evolution",
        "leader",
        "calmness",
        "party",
        "northern lights",
        "warmth",
        "favorite food",
        "teapot",
        "journal",
        "flower",
        "animal",
        "freedom",
        "single",
        "first sight",
        "nervous",
        "confession",
        "valentine's day",
        "boat ride",
        "dinner",
        "cuddles",
        "expedition",
        "ring",
        "landmark",
        "surprise",
        "proposal",
        "love",
        "potato",
        "luck",
        "instrument",
        "tradition",
        "tiramisu",
        "beer",
        "cow",
        "wildfire",
        "baby",
        "weather",
        "umbrella",
        "fawn",
        "polaroid",
        "tadpole",
        "drive",
        "sunshine",
        "lemonade",
        "puddle",
        "siren",
        "sand",
        "bubbles",
        "trident",
        "sushi",
        "scarecrow",
        "secret message",
        "cyberpunk",
        "steampunk",
        "lagoon",
        "island",
        "teacher",
        "explorer",
        "library",
        "creative",
        "mysterious",
        "self portrait",
        "fountain",
        "highway",
        "carriage ride",
        "sunglasses",
        "Hawaiian shirt",
        "swim suit",
        "first day",
        "fog",
        "hay",
        "road",
        "dream",
        "path",
        "bounce",
        "fortune",
        "wandering",
        "castle",
        "casette tape",
        "dagger",
        "as an angel",
        "chains",
        "shallow",
        "dangerous",
        "beast",
        "sparkle",
        "massive",
        "potential",
        "neck",
        "promise",
        "bundle",
        "isolation",
        "trapped",
        "scratching",
        "break",
        "cough",
        "as a goblin",
        "fun",
        "creepy",
        "uncharted",
        "round",
        "square",
        "ridge",
        "rhino",
        "triangle",
        "rock",
        "bloom",
        "horizon",
        "nostalgia",
        "insect",
        "shop window",
        "tropical",
        "roam",
        "tropical cocktail",
        "tree",
        "green food",
        "upside down",
        "wall",
        "jumbo",
        "favorite color",
        "paper",
        "emotion",
        "odd one out",
        "crunchy",
        "two colors",
        "bridge",
        "throw",
        "hand shadows",
        "running water",
        "wrinkles",
        "rocks",
        "graffiti",
        "ugly food",
        "spider web",
        "picture",
        "pillow",
        "mirror",
        "navigator",
        "hand stand",
        "yoga",
        "retro",
        "retro game console",
        "sitting",
        "horizontal position",
        "as a ninja",
        "as an assassin",
        "aged up"
      ],
 
      "Mood": [
        "😍",
        "😴",
        "🤣",
        "🤪",
        "🤔",
        "😇",
        "🤢",
        "🥶",
        "😚",
        "😎",
        "😐",
        "🥳",
        "🥺",
        "🤓",
        "😤",
        "🐒",
        "😱",
        "❤️",
        "👌",
        "🤌",
        "😜",
        "🤩",
        "🤨",
        "🤧",
        "🤯",
        "😊",
        "😏",
        "🥴",
        "😵",
        "😲",
        "🙄",
        "😩",
        "🥹",
        "😵",
        "🫠",
        "🫣",
        "🤡",
        "😃",
        "😉",
        "🤗",
        "🤑",
        "🤐",
        "🤨",
        "😑",
        "😬",
        "😔",
        "🥵",
        "🧐",
        "😟",
        "☹️",
        "😳",
        "😓",
        "🤬",
        "🥰",
        "🫡",
        "🫂",
        "🫤",
        "😈",
        "🥸",
        "😮",
        "😖",
        "😭",
        "👍",
        "👎",
        "🛌"
      ]
    };

    let characterName = function () {
      return data.CharacterName[parseInt(Math.random() * data.CharacterName.length)];
    }
    
    let prompt = function () {
      return data.Prompt[parseInt(Math.random() * data.Prompt.length)];
    }
    
    let mood = function () {
      return data.Mood[parseInt(Math.random() * data.Mood.length)];
    }
 
    let generateRandomThing = function () {
      return characterName() + ' ' + prompt() + ' ' + mood();
    }  
    
      $("#prediction").text(generateRandomThing());  
    
 $("#button").click(function () {
    $("#prediction").text(generateRandomThing());
  });
});