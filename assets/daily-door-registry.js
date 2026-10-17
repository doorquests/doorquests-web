/* The Axiom Continuum — Daily Door registry. Keep metadata outside the landing page. */
(function (global) {
  "use strict";
  const doors = Object.freeze([
  {
    "day": 1,
    "title": "The Unremembered King",
    "genre": "Medieval Mystery / Fantasy",
    "url": "/stories/the-unremembered-king/"
  },
  {
    "day": 2,
    "title": "The Last Radio on Europa",
    "genre": "Science Fiction / Survival",
    "url": "/stories/the-last-radio-on-europa/"
  },
  {
    "day": 3,
    "title": "Small Hours at the Starlite Diner",
    "genre": "Human Drama / Slice of Life",
    "url": "/stories/small-hours-at-the-starlite/"
  },
  {
    "day": 4,
    "title": "Gravity Is Optional Today",
    "genre": "Whimsical Science Fiction",
    "url": "/stories/gravity-is-optional-today/"
  },
  {
    "day": 5,
    "title": "The Bell-Ringer of Hollow Vane",
    "genre": "Medieval Suspense",
    "url": "/stories/the-bell-ringer-of-hollow-vane/"
  },
  {
    "day": 6,
    "title": "The Museum of Almost",
    "genre": "Speculative / Reflective",
    "url": "/stories/the-museum-of-almost/"
  },
  {
    "day": 7,
    "title": "Dead Drop at Midnight",
    "genre": "Historical Espionage",
    "url": "/stories/dead-drop-at-midnight/"
  },
  {
    "day": 8,
    "title": "The Honest Oracle",
    "genre": "Fantasy / Satire",
    "url": "/stories/the-honest-oracle/"
  },
  {
    "day": 9,
    "title": "The House That Held the Rain",
    "genre": "Supernatural Mystery / Drama",
    "url": "/stories/the-house-that-held-the-rain/"
  },
  {
    "day": 10,
    "title": "The Silt Tomb of the River King",
    "genre": "Archaeological Thriller",
    "url": "/stories/the-silt-tomb-of-the-river-king/"
  },
  {
    "day": 11,
    "title": "The Understudy",
    "genre": "Comedy / Theatre",
    "url": "/stories/the-understudy/"
  },
  {
    "day": 12,
    "title": "The Planet That Wasn't There Yesterday",
    "genre": "Cosmic Mystery / Science Fiction",
    "url": "/stories/the-planet-that-wasnt-there-yesterday/"
  },
  {
    "day": 13,
    "title": "The Clockmaker's Debt",
    "genre": "Historical Fantasy",
    "url": "/stories/the-clockmakers-debt/"
  },
  {
    "day": 14,
    "title": "The Court Interpreter",
    "genre": "Historical Intrigue",
    "url": "/stories/the-court-interpreter/"
  },
  {
    "day": 15,
    "title": "The Cobbler of Whispering Hill",
    "genre": "Cozy Folk Fantasy",
    "url": "/stories/the-cobbler-of-whispering-hill/"
  },
  {
    "day": 16,
    "title": "The Day the Ocean Left",
    "genre": "Science Fiction / Survival",
    "url": "/stories/the-day-the-ocean-left/"
  },
  {
    "day": 17,
    "title": "The Translation That Changed the Speaker",
    "genre": "Linguistic Mystery",
    "url": "/stories/the-translation-that-changed-the-speaker/"
  },
  {
    "day": 18,
    "title": "The Emperor's Final Broth",
    "genre": "Culinary Mystery / Historical Drama",
    "url": "/stories/the-emperors-final-broth/"
  },
  {
    "day": 19,
    "title": "The Lost Property Office",
    "genre": "Mystery / Human Drama",
    "url": "/stories/the-lost-property-office/"
  },
  {
    "day": 20,
    "title": "The Dragon's Final Request",
    "genre": "Epic Fantasy / Moral Adventure",
    "url": "/stories/the-dragons-final-request/"
  },
  {
    "day": 21,
    "title": "The Courier of Impossible Packages",
    "genre": "Magical Realism / Adventure",
    "url": "/stories/the-courier-of-impossible-packages/"
  },
  {
    "day": 22,
    "title": "Forty Days at Ironwood",
    "genre": "Medieval Survival Strategy",
    "url": "/stories/forty-days-at-ironwood/"
  },
  {
    "day": 23,
    "title": "Three Hundred Bottles",
    "genre": "Romance / Epistolary",
    "url": "/stories/three-hundred-bottles/"
  },
  {
    "day": 24,
    "title": "The Stranger in Every Photograph",
    "genre": "Psychological Mystery",
    "url": "/stories/the-stranger-in-every-photograph/"
  },
  {
    "day": 25,
    "title": "The Weather Committee",
    "genre": "Comedy / Fantasy Management",
    "url": "/stories/the-weather-committee/"
  },
  {
    "day": 26,
    "title": "The Resonance of Room 4B",
    "genre": "Musical Mystery",
    "url": "/stories/the-resonance-of-room-4b/"
  },
  {
    "day": 27,
    "title": "The Last True Night",
    "genre": "Contemplative Science Fiction",
    "url": "/stories/the-last-true-night/"
  },
  {
    "day": 28,
    "title": "Tidewalkers",
    "genre": "Hopeful Post-Apocalyptic Adventure",
    "url": "/stories/tidewalkers/"
  },
  {
    "day": 29,
    "title": "The Iron Scribe of Lindisfarne",
    "genre": "Historical Mystery / Medieval",
    "url": "/stories/the-iron-scribe-of-lindisfarne/"
  },
  {
    "day": 30,
    "title": "The Keeper of Small Miracles",
    "genre": "Magical Realism / Human Drama",
    "url": "/stories/the-keeper-of-small-miracles/"
  },
  {
    "day": 31,
    "title": "Department of Unclaimed Echoes",
    "genre": "Speculative Comedy / Satire",
    "url": "/stories/department-of-unclaimed-echoes/"
  }
].map(function (door) { return Object.freeze(door); }));
  global.TAC_DAILY_DOORS = doors;
})(window);
