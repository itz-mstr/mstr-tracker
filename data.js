// Visual & threshold settings
const APP_CONFIG = {
  cubeIcon: "",
  attGreen: 1000,
  attRed: 15000,
  wfGreen: 50,
  wfRed: 95
};

// Extreme Demons Data
const APP_DATA = {
  completed: [
    { order: 1, level: "HyperSonic", date: "13/10/2024", enjoyment: 65, worstFail: "91%", attempts: "3252", hardest: "Oui", top: 1148, notes: "Premier extreme" },
    { order: 2, level: "Allegiance", date: "18/12/2024", enjoyment: 75, worstFail: "94%", attempts: "1942", hardest: "Oui", top: 1136, notes: "fnaf" },
    { order: 3, level: "UltraSans", date: "29/01/2025", enjoyment: 98, worstFail: "96%", attempts: "3169", hardest: "Oui", top: 1132, notes: "peak" },
    { order: 4, level: "Moment", date: "27/02/2025", enjoyment: 75, worstFail: "89% (last click)", attempts: "2023", hardest: "Oui", top: 711, notes: "80 fluke from 19, fait en 2 jours. Dédicaces à /w Sukuna" },
    { order: 5, level: "Azurite", date: "08/04/2025", enjoyment: 58, worstFail: "69%", attempts: "1697", hardest: "Non", top: 1266, notes: "1 attempt après ne pas avoir jouer pendant 2 semaine" },
    { order: 6, level: "Niwa", date: "07/05/2025", enjoyment: 100, worstFail: "96% (last click)", attempts: "2255", hardest: "Non", top: 1284, notes: "juste trop fun" },
    { order: 7, level: "Gravity", date: "29/09/2025", enjoyment: 89, worstFail: "89%", attempts: "1600", hardest: "Oui", top: 702, notes: "pas bien foutu mais consistant donc cv" },
    { order: 8, level: "Deception Dive", date: "08/10/2025", enjoyment: 74, worstFail: "84%", attempts: "1221", hardest: "Non", top: 1101, notes: "j'avoue c un peu unbalanced" },
    { order: 9, level: "Cataclysm", date: "10/10/2025", enjoyment: 10, worstFail: "74%", attempts: "986", hardest: "Non", top: 1245, notes: "tg monocouille demon" },
    { order: 10, level: "Electrolux", date: "30/11/2025", enjoyment: 90, worstFail: "90%", attempts: "2127", hardest: "Non", top: 1049, notes: "j'aime meme si c'est guitar pedo style" },
    { order: 11, level: "Freedom08", date: "24/01/2026", enjoyment: 85, worstFail: "84%", attempts: "7637", hardest: "Oui", top: 342, notes: "NEW BEST 84, BEAT BACK TO BACK L'ATTEMPT D'APRES (c'est peak)" },
    { order: 12, level: "Nyutopia", date: "30/03/2026", enjoyment: 77, worstFail: "90% (last click)", attempts: "15000", hardest: "Oui", top: 190, notes: "last click x2, unluckiest victor mais le niveau est goated donc trql" },
    { order: 13, level: "Adomania", date: "07/04/2026", enjoyment: 55, worstFail: "95%", attempts: "5000", hardest: "Non", top: 309, notes: "85 fluke from 19 tah moment, sinon niveau frustrant" },
    { order: 14, level: "Black Blizzard", date: "12/04/2026", enjoyment: 23, worstFail: "81%", attempts: "4367", hardest: "Non", top: 498, notes: "Gambling demon, pas fun" },
    { order: 15, level: "BRUTAL", date: "23/04/2026", enjoyment: 90, worstFail: "88%", attempts: "1500-2500", hardest: "Non", top: 1443, notes: "MOGGED" },
    { order: 16, level: "Devils Disco", date: "15/05/2026", enjoyment: 61, worstFail: "64%", attempts: "2255", hardest: "Non", top: 1407, notes: "le niveau a rien pour lui" },
    { order: 17, level: "BROOKLYNBLOODPOP", date: "03/07/2026", enjoyment: 100, worstFail: "59%", attempts: "2234", hardest: "Non", top: 1325, notes: "c'est génial" },
    { order: 18, level: "Cold Sweat", date: "09/07/2026", enjoyment: 70, worstFail: "75%", attempts: "12435", hardest: "Oui", top: 160, notes: "rng demon" },
    { order: 19, level: "UNLEASH WHALES WHALE", date: "24/08/2026", enjoyment: 85, worstFail: "64%", attempts: "3048", hardest: "Non", top: 1400, notes: "NEW HARDEST MOBILE" },
    { order: 20, level: "Sigma Interface", date: "27/08/2026", enjoyment: 93, worstFail: "89%", attempts: "2090", hardest: "Non", top: 980, notes: "tout ceux qui disent que c'est boring je vous bz" },
    { order: 21, level: "Bang Gang", date: "27/08/2026", enjoyment: 90, worstFail: "66%", attempts: "2840", hardest: "Non", top: 1562, notes: "beat avec under_lie, trop bien comme 2 player mais giga chokepoint" }
  ],
  wanted: [
    { order: 1, level: "Omicron", top: 433, notes: "" },
    { order: 2, level: "Xronier", top: 434, notes: "" },
    { order: 3, level: "Falling up", top: 1242, notes: "" },
    { order: 4, level: "Dark odyssey", top: 1288, notes: "" },
    { order: 5, level: "Gangnam Style", top: 1338, notes: "" },
    { order: 6, level: "Acu", top: 1406, notes: "" },
    { order: 7, level: "Red World", top: 1410, notes: "" },
    { order: 8, level: "CICADA3302", top: 1250, notes: "" }
  ],
  progress: []
};