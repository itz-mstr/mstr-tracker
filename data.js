// Visual & threshold settings
const APP_CONFIG = {
  "cubeIcon": "",
  "attGreen": 1000,
  "attRed": 15000,
  "wfGreen": 50,
  "wfRed": 95
};

// Extreme Demons Data
const APP_DATA = {
  "completed": [
    {
      "order": 1,
      "level": "HyperSonic",
      "publisher": "ViPriN",
      "date": "13/10/2024",
      "enjoyment": 65,
      "worstFail": "91%",
      "attempts": "3252",
      "hardest": "Oui",
      "top": 1395,
      "notes": "Premier extreme",
      "yt": "",
      "banner": ""
    },
    {
      "order": 2,
      "level": "Allegiance",
      "publisher": "nikroplays",
      "date": "18/12/2024",
      "enjoyment": 75,
      "worstFail": "94%",
      "attempts": "1942",
      "hardest": "Oui",
      "top": 1383,
      "notes": "fnaf",
      "yt": "",
      "banner": ""
    },
    {
      "order": 3,
      "level": "UltraSans",
      "publisher": "PlebKingdom",
      "date": "29/01/2025",
      "enjoyment": 98,
      "worstFail": "96%",
      "attempts": "3169",
      "hardest": "Oui",
      "top": 1368,
      "notes": "peak",
      "yt": "",
      "banner": ""
    },
    {
      "order": 4,
      "level": "Moment",
      "publisher": "Lexycat",
      "date": "27/02/2025",
      "enjoyment": 75,
      "worstFail": "89% (last click)",
      "attempts": "2023",
      "hardest": "Oui",
      "top": 848,
      "notes": "80 fluke from 19, fait en 2 jours. Dédicaces à /w Sukuna",
      "yt": "",
      "banner": ""
    },
    {
      "order": 5,
      "level": "Azurite",
      "publisher": "Sillow",
      "date": "08/04/2025",
      "enjoyment": 58,
      "worstFail": "69%",
      "attempts": "1697",
      "hardest": "Non",
      "top": 1266,
      "notes": "1 attempt après ne pas avoir jouer pendant 2 semaine",
      "yt": "",
      "banner": ""
    },
    {
      "order": 6,
      "level": "Niwa",
      "publisher": "Teno",
      "date": "07/05/2025",
      "enjoyment": 100,
      "worstFail": "96% (last click)",
      "attempts": "2255",
      "hardest": "Non",
      "top": 1570,
      "notes": "juste trop fun",
      "yt": "",
      "banner": ""
    },
    {
      "order": 7,
      "level": "Gravity",
      "publisher": "Kaza",
      "date": "29/09/2025",
      "enjoyment": 89,
      "worstFail": "89%",
      "attempts": "1600",
      "hardest": "Oui",
      "top": 855,
      "notes": "pas bien foutu mais consistant donc cv",
      "yt": "",
      "banner": ""
    },
    {
      "order": 8,
      "level": "Deception Dive",
      "publisher": "Rustam",
      "date": "08/10/2025",
      "enjoyment": 74,
      "worstFail": "84%",
      "attempts": "1221",
      "hardest": "Non",
      "top": 1337,
      "notes": "j'avoue c un peu unbalanced",
      "yt": "",
      "banner": ""
    },
    {
      "order": 9,
      "level": "Cataclysm",
      "publisher": "GgB0y",
      "date": "10/10/2025",
      "enjoyment": 10,
      "worstFail": "74%",
      "attempts": "986",
      "hardest": "Non",
      "top": 1510,
      "notes": "tg monocouille demon",
      "yt": "",
      "banner": ""
    },
    {
      "order": 10,
      "level": "Electrolux",
      "publisher": "Zafkiel7",
      "date": "30/11/2025",
      "enjoyment": 90,
      "worstFail": "90%",
      "attempts": "2127",
      "hardest": "Non",
      "top": 1281,
      "notes": "j'aime meme si c'est guitar pedo style",
      "yt": "",
      "banner": ""
    },
    {
      "order": 11,
      "level": "Freedom08",
      "publisher": "Pennutoh",
      "date": "24/01/2026",
      "enjoyment": 85,
      "worstFail": "84%",
      "attempts": "7637",
      "hardest": "Oui",
      "top": 427,
      "notes": "NEW BEST 84, BEAT BACK TO BACK L'ATTEMPT D'APRES (c'est peak)",
      "yt": "",
      "banner": ""
    },
    {
      "order": 12,
      "level": "Nyutopia",
      "publisher": "Tornabro",
      "date": "30/03/2026",
      "enjoyment": 77,
      "worstFail": "90% (last click)",
      "attempts": "15000",
      "hardest": "Oui",
      "top": 219,
      "notes": "last click x2, unluckiest victor mais le niveau est goated donc trql",
      "yt": "",
      "banner": ""
    },
    {
      "order": 13,
      "level": "Adomania",
      "publisher": "Swib",
      "date": "07/04/2026",
      "enjoyment": 55,
      "worstFail": "95%",
      "attempts": "5000",
      "hardest": "Non",
      "top": 385,
      "notes": "85 fluke from 19 tah moment, sinon niveau frustrant",
      "yt": "",
      "banner": ""
    },
    {
      "order": 14,
      "level": "Black Blizzard",
      "publisher": "KrmaL",
      "date": "12/04/2026",
      "enjoyment": 23,
      "worstFail": "81%",
      "attempts": "4367",
      "hardest": "Non",
      "top": 574,
      "notes": "Gambling demon, pas fun",
      "yt": "",
      "banner": ""
    },
    {
      "order": 15,
      "level": "BRUTAL",
      "publisher": "TShack",
      "date": "23/04/2026",
      "enjoyment": 90,
      "worstFail": "88%",
      "attempts": "1500-2500",
      "hardest": "Non",
      "top": 1588,
      "notes": "MOGGED",
      "yt": "",
      "banner": ""
    },
    {
      "order": 16,
      "level": "Devils Disco",
      "publisher": "SodaZ",
      "date": "15/05/2026",
      "enjoyment": 61,
      "worstFail": "64%",
      "attempts": "2255",
      "hardest": "Non",
      "top": 1575,
      "notes": "le niveau a rien pour lui",
      "yt": "",
      "banner": ""
    },
    {
      "order": 17,
      "level": "BROOKLYNBLOODPOP",
      "publisher": "StarkytheSalad",
      "date": "03/07/2026",
      "enjoyment": 100,
      "worstFail": "59%",
      "attempts": "2234",
      "hardest": "Non",
      "top": 1434,
      "notes": "c'est génial",
      "yt": "",
      "banner": ""
    },
    {
      "order": 18,
      "level": "Cold Sweat",
      "publisher": "para",
      "date": "09/07/2026",
      "enjoyment": 70,
      "worstFail": "75%",
      "attempts": "12435",
      "hardest": "Oui",
      "top": 184,
      "notes": "rng demon",
      "yt": "",
      "banner": ""
    },
    {
      "order": 19,
      "level": "UNLEASH WHALES WHALE",
      "publisher": "kovosrutek",
      "date": "24/08/2026",
      "enjoyment": 85,
      "worstFail": "64%",
      "attempts": "3048",
      "hardest": "Non",
      "top": 1400,
      "notes": "NEW HARDEST MOBILE",
      "yt": "",
      "banner": ""
    },
    {
      "order": 20,
      "level": "Sigma Interface",
      "publisher": "Platnuu",
      "date": "27/08/2026",
      "enjoyment": 93,
      "worstFail": "89%",
      "attempts": "2090",
      "hardest": "Non",
      "top": 1015,
      "notes": "tout ceux qui disent que c'est boring je vous bz",
      "yt": "",
      "banner": ""
    },
    {
      "order": 21,
      "level": "Bang Gang",
      "publisher": "DanzmeN",
      "date": "27/08/2026",
      "enjoyment": 90,
      "worstFail": "66%",
      "attempts": "2840",
      "hardest": "Non",
      "top": 1562,
      "notes": "beat avec under_lie, trop bien comme 2 player mais giga chokepoint",
      "yt": "",
      "banner": ""
    }
  ],
  "wanted": [
    {
      "order": 1,
      "level": "Omicron",
      "top": 503,
      "notes": ""
    },
    {
      "order": 2,
      "level": "Xronier",
      "top": 551,
      "notes": ""
    },
    {
      "order": 3,
      "level": "Falling up",
      "top": 1287,
      "notes": ""
    },
    {
      "order": 4,
      "level": "Dark odyssey",
      "top": 1461,
      "notes": ""
    },
    {
      "order": 5,
      "level": "Gangnam Style",
      "top": 1527,
      "notes": ""
    },
    {
      "order": 6,
      "level": "Acu",
      "top": 1605,
      "notes": ""
    },
    {
      "order": 7,
      "level": "Red World",
      "top": 1609,
      "notes": ""
    },
    {
      "order": 8,
      "level": "CICADA3302",
      "top": 1376,
      "notes": ""
    }
  ],
  "progress": []
};
