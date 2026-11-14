export const siteUrl = "https://google-html-games.vercel.app";

export const categories = [
  "All games",
  "Car games",
  "Bike games",
  "Action games",
  "Puzzle & memory",
  "Arcade games",
] as const;

export type GameCategory = Exclude<(typeof categories)[number], "All games">;

type FAQ = {
  question: string;
  answer: string;
};

export type Game = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  assetPath: string;
  categories: GameCategory[];
  objective: string;
  howToPlay: string;
  controls: string[];
  tips: string[];
  features: string[];
  faqs: FAQ[];
  featured?: boolean;
  popular?: boolean;
};

export const games: Game[] = [
  {
    slug: "road-rage-arena",
    title: "Road Rage Arena",
    description:
      "Take your car into a hostile arena, dodge incoming vehicles, and use precise driving and firepower to clear the field.",
    icon: "🚗💥",
    assetPath: "/games/ROAD_RAAGE/index.html",
    categories: ["Car games", "Action games"],
    objective:
      "Destroy the enemy cars in the arena and keep your own vehicle moving long enough to survive.",
    howToPlay:
      "Start the arena run, steer around the other cars, and use your weapon when a target is in range. The open space is useful, but stopping makes it easier for opponents to surround you.",
    controls: [
      "W / Up Arrow: accelerate; S / Down Arrow: reverse or brake.",
      "A / Left Arrow and D / Right Arrow: steer.",
      "Space: fire; Shift: use nitro.",
      "On touch screens, use the on-screen driving and action controls.",
    ],
    tips: [
      "Keep circling the arena instead of driving straight into a group.",
      "Use nitro to escape a cluster or reposition, not just at random.",
      "Watch the edges of the arena so a fast turn does not leave you boxed in.",
    ],
    features: [
      "A combat-focused car arena with enemy vehicles.",
      "Driving, firing, and nitro actions in one run.",
      "Keyboard and touch-oriented control layouts.",
    ],
    faqs: [
      {
        question: "What is the goal of Road Rage Arena?",
        answer:
          "Destroy the rival cars and survive the arena. Keep moving so you can avoid being surrounded.",
      },
      {
        question: "How do I fire?",
        answer:
          "Press Space on a keyboard, or use the on-screen action control when it is available.",
      },
      {
        question: "Can I play without downloading anything?",
        answer:
          "The game runs in the browser. The 3D car models may need a moment to load over your connection.",
      },
    ],
    featured: true,
    popular: true,
  },
  {
    slug: "turbo-circuit",
    title: "Turbo Circuit",
    description:
      "Line up against five rival drivers, manage your speed through a three-lap circuit, and push for the finish.",
    icon: "🏁",
    assetPath: "/games/car_race/index.html",
    categories: ["Car games", "Arcade games"],
    objective:
      "Complete three laps of the circuit and finish ahead of the other cars.",
    howToPlay:
      "Choose Race Start, accelerate into the course, and steer through each bend while keeping your car on the track. Use nitro on straights and return to the track if you get sent off course.",
    controls: [
      "W / Up Arrow: accelerate; S / Down Arrow: slow down or reverse.",
      "A / Left Arrow and D / Right Arrow: steer.",
      "Shift: nitro; R: return to the track.",
      "Use the displayed touch controls on supported mobile screens.",
    ],
    tips: [
      "Brake or ease off before a tight turn rather than steering at full speed.",
      "Save nitro for a straight or a clear pass.",
      "If you leave the course, use the reset control and focus on a clean lap.",
    ],
    features: [
      "A three-lap race against a field of computer-controlled cars.",
      "Circuit layout with a visible race timer and mini-map.",
      "Nitro boost and a return-to-track option.",
    ],
    faqs: [
      {
        question: "How many laps are in Turbo Circuit?",
        answer: "Each race is three laps.",
      },
      {
        question: "What does R do?",
        answer: "R returns your car to the track if it gets stuck or leaves the course.",
      },
      {
        question: "When should I use nitro?",
        answer:
          "A straight section gives you room to use the boost without losing as much control in a corner.",
      },
    ],
    featured: true,
    popular: true,
  },
  {
    slug: "night-drive",
    title: "Night Drive",
    description:
      "Race through a city after dark from a close driver’s view, keeping your line steady as the road and traffic rush by.",
    icon: "🌙🚗",
    assetPath: "/games/night_drive/index.html",
    categories: ["Car games", "Arcade games"],
    objective:
      "Stay on the night-time course and compete through the race without losing control.",
    howToPlay:
      "Start the race and steer using the road markings and the rear-view mirror as references. The close cockpit perspective can make turns feel quicker, so make small corrections and use the reset control if needed.",
    controls: [
      "W / Up Arrow: accelerate; S / Down Arrow: brake.",
      "A / Left Arrow and D / Right Arrow: steer.",
      "Shift: nitro; H: horn; R: return to the track.",
      "Touch controls are shown on supported mobile screens.",
    ],
    tips: [
      "Look farther down the road instead of reacting only to the nearest edge.",
      "Make gradual steering adjustments; abrupt turns are harder to correct in the cockpit view.",
      "Use nitro on open road and leave room to brake before a bend.",
    ],
    features: [
      "Night-time city racing with a cockpit-style camera.",
      "Rear-view mirror, race timing, and nitro boost.",
      "Horn and return-to-track controls.",
    ],
    faqs: [
      {
        question: "Is Night Drive different from Turbo Circuit?",
        answer:
          "Night Drive uses a close in-car perspective and a city-at-night setting, while Turbo Circuit emphasizes a more distant view of a lap-based track.",
      },
      {
        question: "How can I change my view?",
        answer:
          "The game starts with its cockpit-style camera; follow any camera option shown in the game if available.",
      },
      {
        question: "What should I do if my car leaves the road?",
        answer: "Press R to return to the track.",
      },
    ],
    popular: true,
  },
  {
    slug: "open-world-drive",
    title: "Open World Drive",
    description:
      "Take a free-roaming drive around a detailed city, pick a car color, and explore at your own pace.",
    icon: "🌆🚗",
    assetPath: "/games/open_drive/index.html",
    categories: ["Car games"],
    objective:
      "Explore the city and get comfortable with the car’s handling; this is a free-drive experience rather than a lap race.",
    howToPlay:
      "Choose a color and start driving. Follow the streets, experiment with drifting, and switch the camera when you want a different view. Use the reset key to put the car back on the road.",
    controls: [
      "W / Up Arrow: accelerate; S / Down Arrow: brake or reverse.",
      "A / Left Arrow and D / Right Arrow: steer.",
      "Space: handbrake drift; Shift: nitro.",
      "C: camera; H: horn; R: reset the car on the road.",
      "Use the on-screen controls when playing on a supported touch device.",
    ],
    tips: [
      "Try a lower speed while learning the street layout and steering response.",
      "Use the handbrake briefly to initiate a drift, then counter-steer to straighten out.",
      "Check the mini-map and camera options when navigating unfamiliar blocks.",
    ],
    features: [
      "Free-roam city driving with no lap counter to chase.",
      "Selectable car color and multiple camera views.",
      "Handbrake drift, nitro, horn, and a mini-map.",
    ],
    faqs: [
      {
        question: "Does Open World Drive have a race finish?",
        answer:
          "It is designed for free exploration, so there is no required race or finish line.",
      },
      {
        question: "Can I change my car color?",
        answer: "Choose from the color swatches before you begin driving.",
      },
      {
        question: "How do I switch cameras?",
        answer: "Press C on a keyboard to cycle the camera view.",
      },
    ],
    featured: true,
  },
  {
    slug: "animal-memory-match",
    title: "Animal Memory Match",
    description:
      "Turn over animal and fruit cards, remember where each picture appeared, and clear the board in matching pairs.",
    icon: "🐾",
    assetPath: "/games/kinda%20memory/index.html",
    categories: ["Puzzle & memory", "Arcade games"],
    objective:
      "Find every matching pair by remembering the picture and position of each revealed card.",
    howToPlay:
      "Choose a board size, then reveal two cards at a time. If the pictures match, the pair stays solved; if not, remember both locations before they turn back over.",
    controls: [
      "Click or tap a face-down card to reveal it.",
      "Choose Easy, Medium, or Hard to change the number of pairs.",
      "Use New Game to reshuffle the cards.",
    ],
    tips: [
      "Give each location a simple mental label, such as top-left or bottom row.",
      "When a pair does not match, repeat both pictures and positions to yourself.",
      "Start on Easy if you are learning the board, then increase the pair count.",
    ],
    features: [
      "Three board sizes for a shorter or more demanding memory challenge.",
      "Animal and fruit picture cards.",
      "A new shuffle and completion summary for replay.",
    ],
    faqs: [
      {
        question: "How do I match cards?",
        answer:
          "Reveal two cards. A matching pair remains solved; a non-matching pair turns back over.",
      },
      {
        question: "Can I play on a phone or tablet?",
        answer: "Yes. Tap the cards and the difficulty buttons on the screen.",
      },
      {
        question: "Can I start over?",
        answer: "Use New Game to shuffle a fresh board, or Play Again after finishing.",
      },
    ],
    popular: true,
  },
  {
    slug: "fun-puzzle",
    title: "Fun Puzzle",
    description:
      "Reassemble a cheerful picture with either a classic jigsaw layout or a sliding-tile challenge.",
    icon: "🧩",
    assetPath: "/games/puzzle/index.html",
    categories: ["Puzzle & memory"],
    objective:
      "Restore the selected picture by arranging every piece in its correct position.",
    howToPlay:
      "Pick Jigsaw or Sliding mode and choose a 2×2, 3×3, or 4×4 board. In Jigsaw mode, move the pieces into place; in Sliding mode, move tiles into the empty space until the image is complete.",
    controls: [
      "Click or tap the mode and board-size buttons.",
      "Select a piece or tile with a click or tap to move it.",
      "Use Peek to briefly review the complete picture and New Game to reshuffle.",
    ],
    tips: [
      "Use the picture’s large color regions and corners to identify where pieces belong.",
      "Begin with the easier 2×2 layout if you want to learn the interaction.",
      "In Sliding mode, work toward a row at a time and avoid undoing solved sections.",
    ],
    features: [
      "Two distinct puzzle styles: jigsaw and sliding tiles.",
      "Three board sizes from 2×2 through 4×4.",
      "Picture preview and quick restart controls.",
    ],
    faqs: [
      {
        question: "What puzzle modes can I choose?",
        answer: "Choose Jigsaw to arrange pieces or Sliding to move tiles into an empty slot.",
      },
      {
        question: "How do I make the puzzle easier?",
        answer: "Select the 2×2 board before starting a new puzzle.",
      },
      {
        question: "Can I see the finished image?",
        answer: "Use the Peek button to briefly preview the complete picture.",
      },
    ],
    popular: true,
  },
  {
    slug: "sky-dash-3d",
    title: "Sky Dash 3D",
    description:
      "Guide a character along a sky-high course, dodge obstacles, and collect coins while the run steadily gets trickier.",
    icon: "☁️",
    assetPath: "/games/sky-dash/index.html",
    categories: ["Arcade games"],
    objective:
      "Travel as far as you can, avoid collisions, and collect coins to improve your run score.",
    howToPlay:
      "Choose a world and character, then begin the run. Move between lanes to avoid obstacles and collect coins; on a touch screen, swipe to change lanes or jump as prompted by the game.",
    controls: [
      "Left / Right Arrow or A / D: move between lanes.",
      "Use the game’s displayed jump and slide keys when an obstacle requires them.",
      "On touch screens, swipe in the direction you want the character to move.",
    ],
    tips: [
      "Look ahead and choose an open lane before reaching an obstacle.",
      "Prioritize a safe path over a coin that would require a risky last-second move.",
      "Try different characters and worlds to find a visual style you enjoy.",
    ],
    features: [
      "Three-dimensional endless-runner style course.",
      "Multiple characters and world choices.",
      "Coin collection and a locally remembered best score.",
    ],
    faqs: [
      {
        question: "How does a Sky Dash run end?",
        answer: "A collision ends the run; start another attempt from the results screen.",
      },
      {
        question: "Does the game remember my best score?",
        answer: "The game saves its best score in this browser’s local storage.",
      },
      {
        question: "How do touch controls work?",
        answer: "Swipe across the play area to move, jump, or slide as needed.",
      },
    ],
    featured: true,
    popular: true,
  },
  {
    slug: "turbo-bike-gp",
    title: "Turbo Bike GP",
    description:
      "Race a field of six bikes over three laps, balance speed with clean cornering, and use nitro to close a gap.",
    icon: "🏍️",
    assetPath: "/games/turbo_bike/index.html",
    categories: ["Bike games", "Arcade games"],
    objective:
      "Complete three laps and finish ahead of the other riders.",
    howToPlay:
      "Start the race, accelerate down the course, and lean through turns while avoiding the grass. Watch the mini-map to see where the group is and reset if you leave the track.",
    controls: [
      "W / Up Arrow: accelerate; S / Down Arrow: brake.",
      "A / Left Arrow and D / Right Arrow: steer the bike.",
      "Shift: nitro; R: return to the track.",
      "Use the touch controls provided by the game on supported mobile screens.",
    ],
    tips: [
      "Slow slightly before a corner and steer smoothly through it.",
      "Avoid the grass, which can cost more time than a cautious turn.",
      "Spend nitro on a straight when you have room to keep the bike stable.",
    ],
    features: [
      "Six-bike field on a multi-lap circuit.",
      "Three-lap race, timer, and course mini-map.",
      "Nitro and return-to-track controls.",
    ],
    faqs: [
      {
        question: "How many laps are in each race?",
        answer: "The race is three laps.",
      },
      {
        question: "What does R do in Turbo Bike GP?",
        answer: "It returns the bike to the course if you leave the track.",
      },
      {
        question: "How do I avoid losing speed in turns?",
        answer: "Ease off the accelerator before a corner and steer through it smoothly.",
      },
    ],
    featured: true,
  },
  {
    slug: "turbo-cricket",
    title: "Turbo Cricket",
    description:
      "Set your batting aim, judge the incoming delivery, and try to chase a target of 30 runs before you lose three wickets.",
    icon: "🏏",
    assetPath: "/games/turbo_cricket/index.html",
    categories: ["Arcade games"],
    objective:
      "Score 30 runs within three overs while keeping at least one wicket in hand.",
    howToPlay:
      "Adjust the shot direction before the ball arrives, hold the loft control if you want a higher shot, and swing at the right moment. Timing and aim both affect where the ball travels.",
    controls: [
      "Left / Right Arrow or A / D: aim the shot.",
      "Up Arrow or W: hold to loft the ball.",
      "Space, mouse click, or a screen tap: swing the bat.",
    ],
    tips: [
      "Wait until the ball is close enough to judge the timing rather than swinging immediately.",
      "Use loft selectively; a high shot can travel farther but needs good timing.",
      "Adjust the aim before the delivery so you can focus on the swing.",
    ],
    features: [
      "Short target-based batting challenge.",
      "Shot direction and loft controls.",
      "Three overs and three wickets to reach the target.",
    ],
    faqs: [
      {
        question: "What score do I need to chase?",
        answer: "The target is 30 runs in three overs.",
      },
      {
        question: "How do I loft a shot?",
        answer: "Hold Up Arrow or W while setting up the shot.",
      },
      {
        question: "Can I play on a touch screen?",
        answer: "Yes. Tap the game screen to swing and use the displayed touch controls.",
      },
    ],
  },
  {
    slug: "turbo-bike-combat",
    title: "Turbo Bike Combat",
    description:
      "Race six rival bikes for three laps while an automatic gunner attacks the pack and your health remains in play.",
    icon: "🏍️🔫",
    assetPath: "/games/turbo_combacg_bike_race/index.html",
    categories: ["Bike games", "Action games"],
    objective:
      "Finish the three-lap race while managing your speed and surviving the crossfire from rival riders.",
    howToPlay:
      "Steer around the circuit and maintain forward momentum while the rear-seat gunner targets opponents. Fire when you have an opening, use nitro to gain ground, and return to the track if you go off course.",
    controls: [
      "W / Up Arrow: accelerate; S / Down Arrow: brake.",
      "A / Left Arrow and D / Right Arrow: steer.",
      "Space or click: fire with auto-aim; Shift: nitro.",
      "R: return to the track; use the on-screen controls on supported touch devices.",
    ],
    tips: [
      "Do not focus only on attacking; keep enough room to steer through the next turn.",
      "Use nitro to recover a gap on a straight section.",
      "Avoid prolonged contact with rivals so your health does not run down unnecessarily.",
    ],
    features: [
      "Three-lap race with six rival riders.",
      "Automatic aiming for the rear-seat gunner.",
      "Health, nitro, timer, and mini-map indicators.",
    ],
    faqs: [
      {
        question: "How is Turbo Bike Combat different from Turbo Bike GP?",
        answer:
          "This version adds a rear-seat gunner, rival attacks, and a health bar to the bike race.",
      },
      {
        question: "How do I shoot?",
        answer: "Press Space or click; the gunner aims automatically.",
      },
      {
        question: "How long is the race?",
        answer: "The course is three laps.",
      },
    ],
  },
  {
    slug: "turbo-combat-race",
    title: "Turbo Combat Race",
    description:
      "Drive an open-top car through a three-lap contest while a gunner targets nearby rivals and you watch your health.",
    icon: "🚘🔫",
    assetPath: "/games/turbo_combact_race/index.html",
    categories: ["Car games", "Action games"],
    objective:
      "Complete three laps, stay in the race, and handle rival cars while your gunner helps clear a path.",
    howToPlay:
      "Accelerate and steer around the circuit. Your gunner automatically aims at opponents; use the fire control when you want to attack, and make room to avoid taking unnecessary damage.",
    controls: [
      "W / Up Arrow: accelerate; S / Down Arrow: brake.",
      "A / Left Arrow and D / Right Arrow: steer.",
      "Space or click: fire with auto-aim; Shift: nitro.",
      "R: return to the track; touch controls appear on supported mobile screens.",
    ],
    tips: [
      "Keep the car moving and avoid getting boxed in near other vehicles.",
      "Use nitro when the road ahead is open.",
      "Take a wider line around crowded corners to avoid collisions and incoming fire.",
    ],
    features: [
      "Three-lap race with a field of six open-top cars.",
      "Automatic gunner targeting and player-triggered fire.",
      "Health display, nitro boost, and mini-map.",
    ],
    faqs: [
      {
        question: "What is the difference between Turbo Combat Race and Road Rage Arena?",
        answer:
          "Turbo Combat Race is a lap-based circuit event with a gunner, while Road Rage Arena is an arena survival challenge.",
      },
      {
        question: "Does the gunner need manual aiming?",
        answer: "No. The gunner uses auto-aim; Space or click fires.",
      },
      {
        question: "Can I reset my car onto the course?",
        answer: "Press R if you leave the track.",
      },
    ],
  },
  {
    slug: "turbo-strike",
    title: "Turbo Strike",
    description:
      "Hold your ground in an arena survival shooter, move between threats, and switch weapons as enemy waves arrive.",
    icon: "🎯",
    assetPath: "/games/turbo_strike/index.html",
    categories: ["Action games", "Arcade games"],
    objective:
      "Survive successive enemy waves for as long as possible by moving, aiming, and managing ammunition.",
    howToPlay:
      "Start the mission, move around the arena, and use the mouse to aim and fire. Reload before a close encounter and switch between the rifle and shotgun to suit the situation. Touch devices use on-screen movement and action controls.",
    controls: [
      "W / A / S / D: move; mouse: aim; click: fire.",
      "Shift: sprint; Space: jump; R: reload.",
      "1: rifle; 2: shotgun; F or click: fire if pointer lock is unavailable.",
      "On touch screens, use the left control to move and the right side to aim; use the displayed action buttons.",
    ],
    tips: [
      "Keep moving and use the arena layout to avoid being surrounded.",
      "Reload when you have space, not when an enemy is already close.",
      "Switch weapons to manage different ranges and ammunition rather than emptying one weapon blindly.",
    ],
    features: [
      "Wave-based first-person arena combat.",
      "Rifle and shotgun with reload and sprint mechanics.",
      "Touch-oriented movement, aiming, and action controls.",
    ],
    faqs: [
      {
        question: "How do I aim if the mouse is not captured?",
        answer: "Drag on the game view to look around, then click or press F to fire.",
      },
      {
        question: "How do I switch weapons?",
        answer: "Press 1 for the rifle or 2 for the shotgun.",
      },
      {
        question: "Can I play Turbo Strike on a touch device?",
        answer:
          "The game includes touch movement, aiming, and action controls for touch-enabled screens.",
      },
    ],
  },
  {
    slug: "blaze-commando",
    title: "Blaze Commando",
    description:
      "Run and jump through a jungle fortress, pick up stronger weapons, and fight through each stage to reach its boss.",
    icon: "🔥🔫",
    assetPath: "/games/Blaze%20Commando/index.html",
    categories: ["Action games", "Arcade games"],
    objective:
      "Advance through the stages, survive enemy fire, and defeat the fortress boss at the end of each stage.",
    howToPlay:
      "Move across the side-scrolling level, jump over hazards, and shoot enemies as they appear. Collect weapon upgrades along the route and keep an eye on the stage indicator as you approach the boss.",
    controls: [
      "Left / Right Arrow or A / D: move.",
      "Up Arrow or W: jump; Down Arrow or S: crouch or move down.",
      "J or Z: shoot; K, X, or Space: jump.",
      "Use the on-screen directional and action buttons on touch screens.",
    ],
    tips: [
      "Keep moving between shots so enemies have less time to line up an attack.",
      "Jump over ground hazards and watch for enemies above or ahead.",
      "Pick up weapon upgrades when it is safe to do so and save lives for the boss encounter.",
    ],
    features: [
      "Side-scrolling run-and-gun action.",
      "Multiple stages, enemy waves, and a stage boss.",
      "Weapon pickups and on-screen mobile controls.",
    ],
    faqs: [
      {
        question: "How do I shoot and jump?",
        answer: "Press J or Z to shoot and K, X, or Space to jump.",
      },
      {
        question: "What are weapon pickups for?",
        answer: "They provide stronger firing options during the run.",
      },
      {
        question: "How do I know which stage I am on?",
        answer: "The game shows the current stage in its on-screen status display.",
      },
    ],
    featured: true,
  },
  {
    slug: "turbo-fighters",
    title: "Turbo Fighters",
    description:
      "Choose a fighter and settle a timed best-of-three match against the computer or a second local player.",
    icon: "🥊",
    assetPath: "/games/turbo_fighters/index.html",
    categories: ["Arcade games", "Action games"],
    objective:
      "Win the best-of-three rounds by landing attacks, defending against hits, and using a special move when its meter fills.",
    howToPlay:
      "Select a fighter and choose one-player versus CPU or two-player mode. Move into range, combine punches and kicks, block incoming attacks, and spend a full special meter for a super combo.",
    controls: [
      "Player 1: A / D move, W jump, S block, F punch, G kick, H special.",
      "Player 2: Left / Right Arrow move, Up Arrow jump, Down Arrow block, comma punch, period kick, slash special.",
      "P: pause; the match is best of three with 60 seconds per round.",
      "Touch action buttons are available on supported mobile screens.",
    ],
    tips: [
      "Block while an opponent is attacking, then counter when there is an opening.",
      "Use movement to control distance; repeated attacks are easier to avoid when predictable.",
      "Save the special move until its meter is full and a hit is likely to connect.",
    ],
    features: [
      "Selectable fighters with different attributes.",
      "One-player versus CPU and two-player local modes.",
      "Timed rounds, blocking, and a meter-powered super combo.",
    ],
    faqs: [
      {
        question: "Can two people play Turbo Fighters?",
        answer: "Yes. Choose the two-player option and use the separate keyboard controls.",
      },
      {
        question: "How many rounds are in a match?",
        answer: "The match is best of three, with a 60-second limit for each round.",
      },
      {
        question: "When can I use a special move?",
        answer: "Use the special button when the meter is full.",
      },
    ],
    featured: true,
  },
  {
    slug: "neon-fists",
    title: "Neon Fists",
    description:
      "Choose a street fighter, chain punches and kicks, and push through increasingly tough waves in a neon side-scrolling brawler.",
    icon: "🥊💥",
    assetPath: "/games/neo_fists/index.html",
    categories: ["Action games", "Arcade games"],
    objective:
      "Survive the enemy waves and advance through the streets while making the most of your limited lives.",
    howToPlay:
      "Choose a hero and move through the side-scrolling level. Use punches and kicks to interrupt enemies, jump to avoid incoming attacks, and keep moving as new opponents enter the scene.",
    controls: [
      "Left / Right Arrow or A / D: move.",
      "Up / Down Arrow or W / S: move vertically in the play area.",
      "J or Z: punch; K or X: kick; L, C, or Space: jump.",
      "Use the on-screen controls on touch-enabled devices.",
    ],
    tips: [
      "Avoid standing between several enemies; reposition before attacking.",
      "Mix punches, kicks, and jumps instead of repeating one move while exposed.",
      "Watch your remaining lives and prioritize getting clear of a crowded fight.",
    ],
    features: [
      "Side-scrolling beat-'em-up combat with selectable heroes.",
      "Punch, kick, and jump attacks against successive enemy waves.",
      "Locally remembered best score in the current browser.",
    ],
    faqs: [
      {
        question: "How do I attack in Neon Fists?",
        answer: "Use J or Z to punch and K or X to kick.",
      },
      {
        question: "How many lives do I have?",
        answer:
          "The game begins with three lives; the on-screen counter shows what remains.",
      },
      {
        question: "Does the best score follow me to another browser?",
        answer:
          "No. The game stores its best score in this browser’s local storage.",
      },
    ],
  },
];

export function getGame(slug: string): Game | undefined {
  return games.find((game) => game.slug === slug);
}
