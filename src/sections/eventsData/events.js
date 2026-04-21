export const eventsData = [
  {
    category: "technical",
    color: "#b44aff",
    events: [
      {
        id: "tech-01",
        name: "starHack 1.0",
        tagline: "24 Hour Hackathon",
        description: "A thrilling 24-hour hackathon where you build, break, and innovate. Push your limits and create something extraordinary.",
        location: "Main Auditorium",
        overview: "starHack 1.0 is the premier 24-hour hackathon. Teams will collaborate to solve real-world problems. Expect late-night coding, mentors, and intense competition.",
        details: {
          date: "April 18, 2026",
          time: "10:00 AM (24 Hours)",
          venue: "Main Auditorium",
          club: "Tech Club",
          facultyAdvisor: "Yashwant",
          teamSize: "2-4 members",
          registrationFee: "₹649 per team",
          prizePoll: "60,000*"
        },
        snapshots: [
          { round: "Round 1", format: "Idea Pitch", duration: "Day 1", eliminates: "No" },
          { round: "Round 2", format: "Final Demo", duration: "Day 2", eliminates: "Yes" }
        ],
        rules: [
          "Participants must bring their own laptops.",
          "All code must be written during the hackathon.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Innovation", weightage: "40%" },
          { criteria: "Execution", weightage: "40%" },
          { criteria: "Presentation", weightage: "20%" }
        ],
        ranking: "Top 3 teams will be awarded.",
        contact: [
          { name: "Alice", role: "Coordinator", phone: "+91 9876543210", email: "alice@example.com" }
        ]
      },
      {
        id: "tech-02",
        name: "Startup Pitch Competition",
        tagline: "Pitch your next big idea",
        description: "Present your startup idea to a panel of expert judges and investors.",
        location: "Computer Science Block",
        overview: "An opportunity for budding entrepreneurs to showcase their business models and prototypes.",
        details: {
          date: "6th May, 2026",
          time: "11:00 AM",
          venue: "Computer Science Block",
          club: "E-Cell",
          facultyAdvisor: "Yashwant",
          teamSize: "2-4 members",
          registrationFee: "₹649 per team",
          prizePoll: "60,000*"
        },
        snapshots: [
          { round: "Round 1", format: "Pitch Deck", duration: "10 mins", eliminates: "Yes" }
        ],
        rules: [
          "Presentations must not exceed 10 minutes.",
          "Prototypes are highly encouraged.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Feasibility", weightage: "30%" },
          { criteria: "Market Potential", weightage: "40%" },
          { criteria: "Pitch", weightage: "30%" }
        ],
        ranking: "Top 3 startups will be funded/awarded.",
        contact: [
          { name: "Bob", role: "Lead", phone: "+91 9876543211", email: "bob@example.com" }
        ]
      },
      
      {
        id: "tech-04",
        name: "Stock Market Simulation",
        tagline: "Trade to win",
        description: "Experience the thrill of the stock market in this real-time simulation.",
        location: "Computer Lab 3",
        overview: "Participants will use virtual money to trade stocks in a simulated environment reflecting real-world market volatility.",
        details: {
          date: "April 19, 2026",
          time: "9:00 AM",
          venue: "Computer Lab 3",
          club: "Finance Club",
          facultyAdvisor: "Dr. Mehra",
          teamSize: "1 member",
          registrationFee: "₹150",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Trading Session", format: "Simulation", duration: "3 hours", eliminates: "No" }
        ],
        rules: [
          "All trading must be done on the provided platform.",
          "Any exploit of the simulation will lead to disqualification.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Total Portfolio Value", weightage: "100%" }
        ],
        ranking: "Traders with the highest portfolio value win.",
        contact: [
          { name: "Diana", role: "Coordinator", phone: "+91 9876543213", email: "diana@example.com" }
        ]
      }
    ]
  },
  {
    category: "sports",
    color: "#00d4ff",
    events: [
      {
        id: "sports-01",
        name: "Badminton",
        tagline: "Smash your way to victory",
        description: "Compete in the ultimate badminton tournament. Show your agility and reflexes.",
        location: "Indoor Sports Complex",
        overview: "Singles and doubles tournaments for both men and women.",
        details: {
          date: "April 18, 2026",
          time: "9:00 AM",
          venue: "Indoor Sports Complex",
          club: "Sports Committee",
          facultyAdvisor: "Mr. Singh",
          teamSize: "1-2 members",
          registrationFee: "₹200",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Knockouts", format: "Best of 3", duration: "30 mins", eliminates: "Yes" },
          { round: "Finals", format: "Best of 3", duration: "45 mins", eliminates: "No" }
        ],
        rules: [
          "Standard BWF rules apply.",
          "Bring your own racquets. Shuttles will be provided.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Points Scored", weightage: "100%" }
        ],
        ranking: "Winner, Runner-up, and 3rd Place.",
        contact: [
          { name: "Eve", role: "Sports Rep", phone: "+91 9876543214", email: "eve@example.com" }
        ]
      },
      {
        id: "sports-02",
        name: "Volleyball",
        tagline: "Spike it down",
        description: "High energy 6v6 volleyball tournament.",
        location: "Main Ground",
        overview: "Inter-college volleyball championship. Bring your best team to dominate the court.",
        details: {
          date: "April 18, 2026",
          time: "10:00 AM",
          venue: "Main Ground",
          club: "Sports Committee",
          facultyAdvisor: "Mr. Singh",
          teamSize: "6-8 members",
          registrationFee: "₹600 per team",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Knockouts", format: "1 Set (25 pts)", duration: "20 mins", eliminates: "Yes" },
          { round: "Finals", format: "Best of 3 Sets", duration: "1 hour", eliminates: "No" }
        ],
        rules: [
          "Standard FIVB rules apply.",
          "Maximum 2 substitutes allowed per team.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Match Wins", weightage: "100%" }
        ],
        ranking: "Top 3 teams will be awarded.",
        contact: [
          { name: "Frank", role: "Coordinator", phone: "+91 9876543215", email: "frank@example.com" }
        ]
      },
      {
        id: "sports-03",
        name: "Lawn Tennis",
        tagline: "Ace the game",
        description: "Compete on the clay courts in singles and doubles.",
        location: "Tennis Courts",
        overview: "Showcase your serves and volleys in our open tennis tournament.",
        details: {
          date: "April 19, 2026",
          time: "8:00 AM",
          venue: "Tennis Courts",
          club: "Sports Committee",
          facultyAdvisor: "Mr. Singh",
          teamSize: "1-2 members",
          registrationFee: "₹300",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Qualifiers", format: "1 Set", duration: "40 mins", eliminates: "Yes" },
          { round: "Finals", format: "Best of 3 Sets", duration: "2 hours", eliminates: "No" }
        ],
        rules: [
          "Standard ITF rules apply.",
          "Players must wear non-marking shoes.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Match Wins", weightage: "100%" }
        ],
        ranking: "Winner, Runner-up, and 3rd Place.",
        contact: [
          { name: "Grace", role: "Coordinator", phone: "+91 9876543216", email: "grace@example.com" }
        ]
      },
      {
        id: "sports-04",
        name: "Chess",
        tagline: "Checkmate your rivals",
        description: "A battle of minds in a classic chess tournament.",
        location: "Library Hall",
        overview: "Rapid and blitz chess tournaments. Calculate your moves and outsmart your opponents.",
        details: {
          date: "April 18, 2026",
          time: "1:00 PM",
          venue: "Library Hall",
          club: "Chess Club",
          facultyAdvisor: "Dr. Verma",
          teamSize: "1 member",
          registrationFee: "₹100",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Swiss Rounds", format: "10+5 Rapid", duration: "4 hours", eliminates: "No" }
        ],
        rules: [
          "Standard FIDE rules apply.",
          "Touch move rule is strictly enforced.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Points", weightage: "100%" }
        ],
        ranking: "Based on final Swiss standings.",
        contact: [
          { name: "Heidi", role: "Arbiter", phone: "+91 9876543217", email: "heidi@example.com" }
        ]
      },
      {
        id: "sports-05",
        name: "Tug of War",
        tagline: "Pull to glory",
        description: "The ultimate test of strength and teamwork.",
        location: "Main Ground",
        overview: "Gather your strongest teammates and pull your way to the top.",
        details: {
          date: "April 19, 2026",
          time: "4:00 PM",
          venue: "Main Ground",
          club: "Sports Committee",
          facultyAdvisor: "Mr. Singh",
          teamSize: "8 members",
          registrationFee: "₹400 per team",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Knockouts", format: "Best of 3 pulls", duration: "10 mins", eliminates: "Yes" }
        ],
        rules: [
          "No cleats or spiked shoes allowed.",
          "Gloves are permitted.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Pulls Won", weightage: "100%" }
        ],
        ranking: "Last team standing wins.",
        contact: [
          { name: "Ivan", role: "Coordinator", phone: "+91 9876543218", email: "ivan@example.com" }
        ]
      },
      {
        id: "sports-06",
        name: "Esports (BGMI)",
        tagline: "Survival of the fittest",
        description: "Battle Royale tournament featuring BGMI.",
        location: "Computer Lab 1 & 2",
        overview: "Squad up and drop into the battleground. Show your tactical skills and gunplay to secure the chicken dinner.",
        details: {
          date: "April 18, 2026",
          time: "5:00 PM",
          venue: "Computer Lab 1",
          club: "Gaming Club",
          facultyAdvisor: "Mr. Kumar",
          teamSize: "4 members",
          registrationFee: "₹400 per squad",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Qualifiers", format: "2 Matches", duration: "1.5 hours", eliminates: "Yes" },
          { round: "Finals", format: "4 Matches", duration: "3 hours", eliminates: "No" }
        ],
        rules: [
          "Emulators are strictly prohibited.",
          "Use of hacks will result in an immediate ban.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Placement Points", weightage: "60%" },
          { criteria: "Finish Points", weightage: "40%" }
        ],
        ranking: "Based on overall team standings.",
        contact: [
          { name: "Jack", role: "Admin", phone: "+91 9876543219", email: "jack@example.com" }
        ]
      }
      ,{
  id: "sports-07",
  name: "Table Tennis",
  tagline: "Small ball. Big battles.",
  description: "Step up to the table and prove your reflexes are faster than the rest. Singles and doubles — every point counts.",
  location: "Indoor Sports Complex",
  overview: "Singles and doubles tournaments for both men and women. Fast-paced rallies, precision shots, and nerves of steel — the table tennis arena at REXIA'26 is where champions are separated from the rest.",
  details: {
    date: "April 19, 2026",
    time: "10:00 AM",
    venue: "Indoor Sports Complex, Table Tennis Hall",
    club: "Sports Committee",
    facultyAdvisor: "Mr. Singh",
    teamSize: "1-2 members",
    registrationFee: "₹200",
    prizePoll: "10,000*"
  },
  snapshots: [
    { round: "Group Stage", format: "Round Robin", duration: "20 mins", eliminates: "Bottom 50%" },
    { round: "Knockouts", format: "Best of 3 sets", duration: "30 mins", eliminates: "Yes" },
    { round: "Finals", format: "Best of 5 sets", duration: "45 mins", eliminates: "No" }
  ],
  rules: [
    "Standard ITTF rules apply.",
    "Bring your own paddle. Balls will be provided.",
    "Players must report 15 minutes before their scheduled match.",
    "No-show after 10 minutes of scheduled time counts as a forfeit.",
    "Umpire decisions are final and non-negotiable.",
    "*Prize pool may vary according to participant registration."
  ],
  judgementCriteria: [
    { criteria: "Sets Won", weightage: "70%" },
    { criteria: "Points Differential", weightage: "20%" },
    { criteria: "Sportsmanship", weightage: "10%" }
  ],
  ranking: "Winner, Runner-up, and 3rd Place decided by playoff.",
  contact: [
    { name: "Eve", role: "Sports Rep", phone: "+91 9876543214", email: "eve@example.com" }
  ]
}
    ]
  },
  {
    category: "cultural",
    color: "#ff2d95",
    events: [
      {
        id: "cult-01",
        name: "Group Dance",
        tagline: "Sync your steps",
        description: "Showcase your choreography and coordination in the group dance competition.",
        location: "Main Stage",
        overview: "An energetic dance battle where teams perform various styles from hip-hop to classical.",
        details: {
          date: "April 18, 2026",
          time: "6:00 PM",
          venue: "Main Stage",
          club: "Dance Society",
          facultyAdvisor: "Mrs. Desai",
          teamSize: "5-15 members",
          registrationFee: "₹1000 per team",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Finals", format: "Stage Performance", duration: "5-7 mins", eliminates: "No" }
        ],
        rules: [
          "Props are allowed but must be cleared immediately.",
          "Audio tracks must be submitted 2 hours prior.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Choreography", weightage: "40%" },
          { criteria: "Coordination", weightage: "30%" },
          { criteria: "Expressions & Costumes", weightage: "30%" }
        ],
        ranking: "Top 3 performances.",
        contact: [
          { name: "Karen", role: "Coordinator", phone: "+91 9876543220", email: "karen@example.com" }
        ]
      },
    
      {
        id: "cult-03",
        name: "Singing",
        tagline: "Let your voice be heard",
        description: "Solo and duet singing competition covering all genres.",
        location: "Acoustic Hall",
        overview: "Serenade the audience and judges with your vocal prowess.",
        details: {
          date: "April 18, 2026",
          time: "11:00 AM",
          venue: "Acoustic Hall",
          club: "Music Society",
          facultyAdvisor: "Dr. Bose",
          teamSize: "1-2 members",
          registrationFee: "₹200",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Prelims", format: "Unplugged", duration: "3 mins", eliminates: "Yes" },
          { round: "Finals", format: "With Backing Track", duration: "5 mins", eliminates: "No" }
        ],
        rules: [
          "Karaoke tracks must be submitted in advance.",
          "Live instruments are allowed.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Vocal Quality", weightage: "50%" },
          { criteria: "Rhythm and Pitch", weightage: "30%" },
          { criteria: "Stage Presence", weightage: "20%" }
        ],
        ranking: "Top 3 singers.",
        contact: [
          { name: "Mona", role: "Coordinator", phone: "+91 9876543222", email: "mona@example.com" }
        ]
      },
      {
        id: "cult-04",
        name: "Poster Design",
        tagline: "Paint your imagination",
        description: "A digital and physical poster making competition.",
        location: "Art Gallery",
        overview: "Showcase your artistic and design skills based on a given theme.",
        details: {
          date: "April 19, 2026",
          time: "10:00 AM",
          venue: "Art Gallery",
          club: "Fine Arts Club",
          facultyAdvisor: "Mr. Das",
          teamSize: "1-2 members",
          registrationFee: "₹150",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Creation", format: "Live Design", duration: "2 hours", eliminates: "No" }
        ],
        rules: [
          "Theme will be given on the spot.",
          "Participants must bring their own art supplies or laptops.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Creativity", weightage: "40%" },
          { criteria: "Relevance to Theme", weightage: "40%" },
          { criteria: "Neatness/Aesthetics", weightage: "20%" }
        ],
        ranking: "Top 3 designs.",
        contact: [
          { name: "Nina", role: "Coordinator", phone: "+91 9876543223", email: "nina@example.com" }
        ]
      },
      {
        id: "cult-05",
        name: "Reel-a-thon (For Inner Students)",
        tagline: "Capture the moment",
        description: "A short-form video making competition exclusive to our college students.",
        location: "Campus Wide",
        overview: "Create the most engaging and viral reel showcasing the spirit of REXIA'26.",
        details: {
          date: "April 18-19, 2026",
          time: "All Day",
          venue: "Campus Wide",
          club: "Media Club",
          facultyAdvisor: "Mrs. Kapoor",
          teamSize: "1-3 members",
          registrationFee: "Free (Inner Students Only)",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Submission", format: "Online Upload", duration: "48 hours", eliminates: "No" }
        ],
        rules: [
          "Reels must be uploaded to Instagram tagging the official page.",
          "Must include event specific hashtags.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Creativity", weightage: "40%" },
          { criteria: "Engagement (Likes/Views)", weightage: "30%" },
          { criteria: "Editing & Quality", weightage: "30%" }
        ],
        ranking: "Most viral and creative reels.",
        contact: [
          { name: "Oscar", role: "Coordinator", phone: "+91 9876543224", email: "oscar@example.com" }
        ]
      }
    ]
  }
];

