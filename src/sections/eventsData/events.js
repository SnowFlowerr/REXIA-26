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
        location: "computer science block",
        overview: "starHack 1.0 is the premier 24-hour hackathon. Teams will collaborate to solve real-world problems. Expect late-night coding, mentors, and intense competition.",
        details: {
          date: "May 6th & 7th, 2026",
          time: "10:00 AM (24 Hours)",
          venue: "computer science block",
          club: "Tech Club",
          facultyAdvisor: "Yashwant",
          teamSize: "2-4 members",
          registrationFee: "₹649 per team",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Round 1", format: "Idea Pitch", duration: "Day 1", eliminates: "No" },
          { round: "Round 2", format: "Final Demo", duration: "Day 2", eliminates: "Yes" }
        ],
        rules: [
          "Participants must bring their own laptops.",
          "All code must be written during the hackathon — no pre-built projects.",
          "Open source libraries and APIs are permitted.",
          "Teams must submit GitHub repo link before the deadline.",
          "Any form of cheating or impersonation results in disqualification.",
          "Participants must be present for the final pitch to be eligible for prizes.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Innovation", weightage: "40%" },
          { criteria: "Execution", weightage: "40%" },
          { criteria: "Presentation", weightage: "20%" }
        ],
        ranking: "Top 3 teams will be awarded.",
        contact: [
          { name: "Ravi", role: "Coordinator", phone: "+91 9311891503", email: "jharavi0605@gmail.com" }
        ]
      },
      {
        id: "tech-02",
        name: "Startup Pitch Competition",
        tagline: "Pitch your next big idea",
        description: "Present your startup idea to a panel of expert judges and investors.",
        location: "amar krishna hall",
        overview: "An opportunity for budding entrepreneurs to showcase their business models and prototypes.",
        details: {
          date: "May 6th, 2026",
          time: "11:00 AM",
          venue: "amar krishna hall",
          club: "E-Cell",
          facultyAdvisor: "Yashwant",
          teamSize: "2-4 members",
          registrationFee: "₹659 per team",
        prizePoll: "Equity + Mentorship. Your idea sets the prize."
        },
        snapshots: [
          { round: "Round 1", format: "Pitch Deck", duration: "10 mins", eliminates: "Yes" }
        ],
        rules: [
          "Presentations must not exceed 10 minutes.",
          "Prototypes are highly encouraged.",
          "Pitch deck must be submitted before the event.",
          "Teams must be present for Q&A after their pitch.",
          "No plagiarized business models — original ideas only.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Feasibility", weightage: "30%" },
          { criteria: "Market Potential", weightage: "40%" },
          { criteria: "Pitch", weightage: "30%" }
        ],
        ranking: "Top 3 startups will be funded/awarded.",
        contact: [
          { name: "Harendra", role: "Lead", phone: "+91 9664056008", email: "jharavi0605@gmail.com" }
        ]
      },
      {
        id: "tech-04",
        name: "Stock Market Simulation",
        tagline: "Trade to win",
        description: "Experience the thrill of the stock market in this real-time simulation.",
        location: "computer science block",
        overview: "Participants will use virtual money to trade stocks in a simulated environment reflecting real-world market volatility.",
        details: {
          date: "May 6th, 2026",
          time: "11:00 AM",
          venue: "computer science block",
          club: "Finance Club",
          facultyAdvisor: "Dr. Mehra",
          teamSize: "1 member",
          registrationFee: "₹249",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Trading Session", format: "Simulation", duration: "3 hours", eliminates: "No" }
        ],
        rules: [
          "All trading must be done on the provided platform.",
          "Any exploit of the simulation will lead to disqualification.",
          "No external financial tools, apps, or advice allowed during session.",
          "Participants must carry valid College ID and Government ID proof.",
          "Organisers reserve the right to modify market conditions during the event.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Total Portfolio Value", weightage: "100%" }
        ],
        ranking: "Traders with the highest portfolio value win.",
        contact: [
          { name: "Bhudeo", role: "Coordinator", phone: "+91 6206310174", email: "jharavi0605@gmail.com" },
          { name: "Aditya Jindal", role: "Coordinator", phone: "+91 7719415700", email: "jharavi0605@gmail.com" }
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
        location: "Badminton court",
        overview: "Singles and doubles tournaments for both men and women.",
        details: {
          date: "May 6th, 2026",
          time: "9:00 AM",
          venue: "Indoor Sports Complex",
          club: "Badminton court",
          facultyAdvisor: "Mr. Singh",
          teamSize: "1 members",
          registrationFee: "₹249",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Knockouts", format: "Best of 3", duration: "30 mins", eliminates: "Yes" },
          { round: "Finals", format: "Best of 3", duration: "45 mins", eliminates: "No" }
        ],
        rules: [
          "Open to college students across Delhi NCR — valid College ID and Government ID mandatory.",
          "Standard BWF rules apply.",
          "Personal rackets are mandatory. Match shuttles will be provided.",
          "Knockout format — no rescheduling unless approved by organisers.",
          "Knockout sets played to 11 points. Finals played to 21 points. Win by 2-point margin.",
          "Deuce at 10–10 (Knockouts) or 20–20 (Finals). No point cap unless declared.",
          "Maximum 1-minute break between sets.",
          "No racket throwing, verbal abuse, or coaching during match.",
          "Players must report 15 minutes before their scheduled match. Late arrival = walkover.",
          "Misconduct, repeated delay, or intentional distraction leads to disqualification.",
          "Organisers reserve full authority to modify rules, format, and schedule.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Points Scored (Rally Point System)", weightage: "80%" },
          { criteria: "Sportsmanship & Code of Conduct", weightage: "20%" }
        ],
        ranking: "Winner, Runner-up, and 3rd Place. Prize: Winner ₹3k, Runner-up ₹2k (each for Men & Women).",
        contact: [
          { name: "Umang", role: "Sports Rep", phone: "+91 6204936468", email: "jharavi0605@gmail.com" },
          { name: "Bhodeo", role: "Sports Rep", phone: "+91 6206310174", email: "jharavi0605@gmail.com" }
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
          date: "May 6th, 2026",
          time: "10:00 AM",
          venue: "Volleyball court",
          club: "Sports Committee",
          facultyAdvisor: "Mr. Singh",
          teamSize: "6-8 members",
          registrationFee: "₹249 per team",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Knockouts", format: "1 Set (25 pts)", duration: "20 mins", eliminates: "Yes" },
          { round: "Finals", format: "Best of 3 Sets", duration: "1 hour", eliminates: "No" }
        ],
        rules: [
          "Open to college students across Delhi NCR — valid College ID and Government ID mandatory.",
          "Team size: minimum 6, maximum 6 + 3 substitutes.",
          "Knockout format — best of 3 sets.",
          "Rally scoring system. Sets up to 25 points (win by 2). Final set up to 15 points.",
          "Maximum 3 touches per side. No double touch except on first receive.",
          "Block does not count as a touch. Net touch = fault.",
          "Rotation not mandatory.",
          "Toxic behavior, misconduct, or abuse of officials leads to disqualification.",
          "Players must report 15 minutes before their match. Late arrival = walkover.",
          "Match ball will be provided. Practice balls self-arranged.",
          "Organisers reserve full authority to modify rules, format, and schedule.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Match Wins", weightage: "70%" },
          { criteria: "Set Points Differential", weightage: "20%" },
          { criteria: "Sportsmanship", weightage: "10%" }
        ],
        ranking: "Top 3 teams will be awarded. Winner ₹7k, Runner-up ₹3k.",
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
          date: "May 6th, 2026",
          time: "8:00 AM",
          venue: "Tennis Courts",
          club: "Sports Committee",
          facultyAdvisor: "Mr. Singh",
          teamSize: "1 members",
          registrationFee: "₹300",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Qualifiers", format: "1 Set", duration: "40 mins", eliminates: "Yes" },
          { round: "Finals", format: "Best of 3 Sets", duration: "2 hours", eliminates: "No" }
        ],
        rules: [
          "Open to college students across Delhi NCR — valid College ID and Government ID mandatory.",
          "Standard ITF rules apply.",
          "Personal rackets mandatory. Match balls provided. Practice balls self-arranged.",
          "Knockout format — one set match (first to 6 games).",
          "Two serves allowed. Let serve = replay. Ball on line = IN.",
          "Change ends after odd-numbered games. 60-second break at changeover.",
          "At deuce, players must win two consecutive points.",
          "Players must wear non-marking shoes.",
          "No racket throwing, verbal abuse, or coaching during match.",
          "Players must report 15 minutes before their match. Late arrival = walkover.",
          "Refusal to follow referee or misconduct leads to disqualification.",
          "Organisers reserve full authority to modify rules, format, and schedule.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Match Wins", weightage: "80%" },
          { criteria: "Sportsmanship & Code of Conduct", weightage: "20%" }
        ],
        ranking: "Winner, Runner-up, and 3rd Place. Winner ₹3k, Runner-up ₹2k (each for Men & Women).",
        contact: [
          { name: "Harendra", role: "Lead", phone: "+91 9664056008", email: "jharavi0605@gmail.com" },
          { name: "Utkarsh", role: "Lead", phone: "+91 6393257287", email: "jharavi0605@gmail.com" }
        ]
      },
      {
        id: "sports-04",
        name: "Chess",
        tagline: "Checkmate your rivals",
        description: "A battle of minds in a classic chess tournament.",
        location: "Guru teg Bahadur hall",
        overview: "Rapid and blitz chess tournaments. Calculate your moves and outsmart your opponents.",
        details: {
          date: "May 6th, 2026",
          time: "1:00 PM",
          venue: "Guru teg Bahadur hall",
          club: "Chess Club",
          facultyAdvisor: "Dr. Verma",
          teamSize: "1 member",
          registrationFee: "₹249",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Swiss Rounds", format: "10+5 Rapid", duration: "4 hours", eliminates: "No" }
        ],
        rules: [
          "Open to college students across Delhi NCR — valid College ID and Government ID mandatory.",
          "Standard FIDE rules apply throughout.",
          "Touch-move rule is strictly enforced.",
          "Illegal move penalty is applicable.",
          "Chess clock is mandatory. Participants must carry their mobile phones for clock timing.",
          "Chess board and pieces will be provided.",
          "No phones during match unless used as clock with prior permission.",
          "No external assistance or discussion during match.",
          "Use of engine/AI, external help, or repeated illegal moves leads to immediate disqualification.",
          "Players must report 15 minutes before their match. Late arrival = walkover.",
          "Organisers reserve full authority to modify rules, format, and schedule.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Match Points (Swiss System)", weightage: "70%" },
          { criteria: "Material Advantage (Tie-break)", weightage: "20%" },
          { criteria: "Arbiter Decision (if required)", weightage: "10%" }
        ],
        ranking: "Based on final Swiss standings. Winner ₹7k, Runner-up ₹3k.",
        contact: [
          { name: "Umang", role: "Sports Rep", phone: "+91 6204936468", email: "jharavi0605@gmail.com" }
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
          date: "May 6th, 2026",
          time: "11:00 AM",
          venue: "near vollyball court",
          club: "Sports Committee",
          facultyAdvisor: "Mr. Singh",
          teamSize: "8 members",
          registrationFee: "₹549 per team",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Knockouts", format: "Best of 3 pulls", duration: "10 mins", eliminates: "Yes" }
        ],
        rules: [
          "Open to college students across Delhi NCR — valid College ID and Government ID mandatory.",
          "Team size: minimum 8, maximum 8 + 2 substitutes.",
          "Knockout format — best of 3 pulls.",
          "Pull begins only on referee signal. Team must pull opponent across center mark.",
          "No sitting or anchoring rope to body. Proper grip only.",
          "Teams must remain within boundaries. No sudden jerks before signal.",
          "No cleats or spiked shoes allowed. Gloves are permitted.",
          "Rope locking, unsportsmanlike conduct, or false starts lead to disqualification.",
          "Match rope will be provided. Practice rope self-arranged.",
          "Players must report 15 minutes before their match. Late arrival = walkover.",
          "Organisers reserve full authority to modify rules, format, and schedule.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Pulls Won", weightage: "80%" },
          { criteria: "Fewer Fouls Committed", weightage: "20%" }
        ],
        ranking: "Last team standing wins. Winner ₹3k, Runner-up ₹2k (each for Men & Women).",
        contact: [
          { name: "Ravi", role: "Coordinator", phone: "+91 9311891503", email: "jharavi0605@gmail.com" }
        ]
      },
      {
        id: "sports-06",
        name: "Esports (BGMI)",
        tagline: "Survival of the fittest",
        description: "Battle Royale tournament featuring BGMI.",
        location: "Computer Science Department",
        overview: "Squad up and drop into the battleground. Show your tactical skills and gunplay to secure the chicken dinner.",
        details: {
          date: "May 6th, 2026",
          time: "5:00 PM",
          venue: "computer science block",
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
          "Open to college students across Delhi NCR — valid College ID and Government ID mandatory.",
          "Team size: 4 members + 1 substitute allowed.",
          "4 matches played on Erangel, Miramar, Vikendi, Erangel in squad mode.",
          "Room will be created — players must join lobby within 5–7 minutes of room creation.",
          "IGN must match registration name exactly.",
          "Personal smartphones only. Emulators, modded apps, hacks, or cheat software strictly prohibited.",
          "No teaming with opponents. No toxic behavior or misconduct.",
          "WiFi access will be provided. Organisers not responsible for personal data network failure.",
          "Cheating, hacking, or lobby absence leads to immediate disqualification.",
          "Players must report 15 minutes before their match. Late arrival = walkover.",
          "Organisers reserve full authority to modify rules, format, and schedule.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Placement Points", weightage: "60%" },
          { criteria: "Finish Points (Kills × 2)", weightage: "40%" }
        ],
        ranking: "Based on overall team standings. Winner ₹7k, Runner-up ₹3k.",
        contact: [
          { name: "Ayush Prashad", role: "Coordinator", phone: "+91 9350648039", email: "jharavi0605@gmail.com" }
        ]
      },
      {
        id: "sports-07",
        name: "Table Tennis",
        tagline: "Small ball. Big battles.",
        description: "Step up to the table and prove your reflexes are faster than the rest. Singles and doubles — every point counts.",
        location: "Guru teg Bahadur hall",
        overview: "Singles and doubles tournaments for both men and women. Fast-paced rallies, precision shots, and nerves of steel — the table tennis arena at REXIA'26 is where champions are separated from the rest.",
        details: {
          date: "May 6th, 2026",
          time: "10:00 AM",
          venue: "Guru teg Bahadur hall",
          club: "Sports Committee",
          facultyAdvisor: "Mr. Singh",
          teamSize: "1 members",
          registrationFee: "₹249",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Group Stage", format: "Round Robin", duration: "20 mins", eliminates: "Bottom 50%" },
          { round: "Knockouts", format: "Best of 3 sets", duration: "30 mins", eliminates: "Yes" },
          { round: "Finals", format: "Best of 5 sets", duration: "45 mins", eliminates: "No" }
        ],
        rules: [
          "Open to college students across Delhi NCR — valid College ID and Government ID mandatory.",
          "Standard ITTF rules apply.",
          "Personal rackets mandatory. Match balls provided. Practice balls self-arranged.",
          "Knockout sets played to 11 points. Finals played to 21 points.",
          "Deuce at 10–10 (Knockouts) or 20–20 (Finals). Win by 2-point margin.",
          "Proper service required — visible toss mandatory. Alternate serves every 2 points.",
          "Ball touching line = valid. No obstruction of play.",
          "No racket throwing, verbal abuse, or coaching during match.",
          "Improper service (repeated), misconduct, or refusal to follow referee = disqualification.",
          "Players must report 15 minutes before their match. Late arrival = walkover.",
          "Organisers reserve full authority to modify rules, format, and schedule.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Sets Won", weightage: "70%" },
          { criteria: "Points Differential", weightage: "20%" },
          { criteria: "Sportsmanship", weightage: "10%" }
        ],
        ranking: "Winner, Runner-up, and 3rd Place decided by playoff. Winner ₹3k, Runner-up ₹2k (each for Men & Women).",
        contact: [
          { name: "Keshav Agarwal", role: "Sports Rep", phone: "+91 8777768303", email: "jharavi0605@gmail.com" }
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
        location: "amar krishna hall",
        overview: "An energetic dance battle where teams perform various styles from hip-hop to classical.",
        details: {
          date: "May 6th, 2026",
          time: "4:00 PM",
          venue: "Main Stage",
          club: "Dance Society",
          facultyAdvisor: "Mrs. Desai",
          teamSize: "2-9 members",
          registrationFee: "₹599 per team",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Finals", format: "Stage Performance", duration: "5-7 mins", eliminates: "No" }
        ],
        rules: [
          "Open to college students across Delhi NCR — valid College ID and Government ID mandatory.",
          "Team size: 2–9 members.",
          "Performance duration: 5–7 minutes strictly enforced.",
          "Audio tracks must be submitted 2 hours prior to the event.",
          "Props are allowed but must be cleared from the stage immediately after performance.",
          "Vulgarity or offensive content leads to immediate disqualification.",
          "Only registered members may perform on stage.",
          "Costumes must be performance-appropriate.",
          "Organisers reserve full authority to modify rules, format, and schedule.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Choreography", weightage: "40%" },
          { criteria: "Coordination", weightage: "30%" },
          { criteria: "Expressions & Costumes", weightage: "30%" }
        ],
        ranking: "Top 3 performances.",
        contact: [
          { name: "Harendra", role: "Lead", phone: "+91 9664056008", email: "jharavi0605@gmail.com" }
        ]
      },
      {
        id: "cult-03",
        name: "Singing",
        tagline: "Let your voice be heard",
        description: "Solo and duet singing competition covering all genres.",
        location: "amar krishna hall",
        overview: "Serenade the audience and judges with your vocal prowess.",
        details: {
          date: "May 6th, 2026",
          time: "11:00 AM",
          venue: "amar krishna hall",
          club: "Music Society",
          facultyAdvisor: "Dr. Bose",
          teamSize: "1 members",
          registrationFee: "₹249",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Prelims", format: "Unplugged", duration: "3 mins", eliminates: "Yes" },
          { round: "Finals", format: "With Backing Track", duration: "5 mins", eliminates: "No" }
        ],
        rules: [
          "Open to college students across Delhi NCR — valid College ID and Government ID mandatory.",
          "Karaoke/backing tracks must be submitted in advance — instrumental only, no original vocals.",
          "Live instruments are allowed and encouraged.",
          "Prelims: maximum 3 minutes. Finals: maximum 5 minutes.",
          "Time overrun of more than 1 minute leads to score deduction.",
          "Songs with explicit lyrics must be edited before submission.",
          "No offensive or communally sensitive content.",
          "Judges' decision is final and binding.",
          "Organisers reserve full authority to modify rules, format, and schedule.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Vocal Quality & Pitch", weightage: "50%" },
          { criteria: "Rhythm and Pitch Accuracy", weightage: "30%" },
          { criteria: "Stage Presence", weightage: "20%" }
        ],
        ranking: "Top 3 singers.",
        contact: [
          { name: "Subhi", role: "Coordinator", phone: "+91 8112540737", email: "jharavi0605@gmail.com" }
        ]
      },
      {
        id: "cult-04",
        name: "Poster Design (For Inner Students)",
        tagline: "Paint your imagination",
        description: "A digital and physical poster making competition.",
        location: "Guru teg Bahadur hall",
        overview: "Showcase your artistic and design skills based on a given theme.",
        details: {
          date: "May 6th, 2026",
          time: "10:00 AM",
          venue: "Guru teg Bahadur hall",
          club: "Fine Arts Club",
          facultyAdvisor: "Mr. Das",
          teamSize: "1 members",
          registrationFee: "₹150",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Creation", format: "Live Design", duration: "2 hours", eliminates: "No" }
        ],
        rules: [
          "Open to inner college students only — valid College ID mandatory.",
          "Theme will be given on the spot at the start of the event.",
          "Participants must bring their own art supplies or laptops.",
          "Digital art tools allowed only on personal laptops — no AI-generated content.",
          "Artwork must remain within the assigned canvas or screen size.",
          "Copying from references is not allowed.",
          "Participants must be present for the judging walkthrough.",
          "Artwork becomes property of REXIA'26 organising committee post-event.",
          "Organisers reserve full authority to modify rules, format, and schedule.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Creativity & Originality", weightage: "40%" },
          { criteria: "Relevance to Theme", weightage: "40%" },
          { criteria: "Neatness & Aesthetics", weightage: "20%" }
        ],
        ranking: "Top 3 designs.",
        contact: [
          { name: "Harendra", role: "Lead", phone: "+91 9664056008", email: "jharavi0605@gmail.com" }
        ]
      },
      {
        id: "cult-05",
        name: "Reel-a-thon",
        tagline: "Capture the moment",
        description: "A short-form video making competition exclusive to our college students.",
        location: "Campus Wide",
        overview: "Create the most engaging and viral reel showcasing the spirit of REXIA'26.",
        details: {
          date: "May 6th, 2026",
          time: "All Day",
          venue: "Campus Wide",
          club: "Media Club",
          facultyAdvisor: "Mrs. Kapoor",
          teamSize: "2-4 members",
          registrationFee: "₹249",
          prizePoll: "10,000*"
        },
        snapshots: [
          { round: "Submission", format: "Online Upload", duration: "48 hours", eliminates: "No" }
        ],
        rules: [
          "Open to inner college students only — valid College ID mandatory.",
          "Reels must be uploaded to Instagram tagging the official REXIA'26 page.",
          "Must include all event-specific hashtags as announced.",
          "All footage must be shot on campus during the fest.",
          "Heavy AI-generated content or plagiarised edits are disqualified.",
          "No offensive, communally sensitive, or explicit content.",
          "Maximum reel duration: 60 seconds.",
          "Submission deadline strictly enforced — late uploads not accepted.",
          "Organisers reserve full authority to modify rules, format, and schedule.",
          "*Prize pool may vary according to participant registration."
        ],
        judgementCriteria: [
          { criteria: "Creativity & Concept", weightage: "40%" },
          { criteria: "Engagement (Likes/Views)", weightage: "30%" },
          { criteria: "Editing & Production Quality", weightage: "30%" }
        ],
        ranking: "Most viral and creative reels. Top 3 winners awarded.",
        contact: [
          { name: "Oscar", role: "Coordinator", phone: "+91 9876543224", email: "oscar@example.com" }
        ]
      }
    ]
  }
];