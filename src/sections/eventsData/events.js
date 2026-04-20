 export const eventsData=
[
  {
    "category": "technical",
    "color": "#b44aff",
    "events": [
      {
        "id": "tech-01",
        "name": "Code Blitz",
        "tagline": "Think fast. Code faster.",
        "description": "A high-speed competitive coding challenge where every second counts. Solve algorithmic problems under pressure and prove you're the sharpest mind in the room.",
        "location": "CS Lab Block A",
        "managedBy": "CodeCraft Club",//
        "overview": "Code Blitz is the ultimate test of algorithmic thinking and speed coding. Participants will face a series of progressively harder problems drawn from data structures, dynamic programming, and graph theory. The environment simulates real competitive programming platforms, and every millisecond of your solution runtime matters as much as correctness.",
        "details": {
          "date": "April 18, 2026",
          "time": "10:00 AM – 1:00 PM",
          "venue": "CS Lab Block A, Room 204",
          "club": "CodeCraft Club",
          "facultyAdvisor": "Dr. Ramesh Iyer",
          "teamSize": "1–2 members",
          "registrationFee": "₹100 per team",
          "prizePoll": {
            "1st": "₹8,000",
            "2nd": "₹4,000",
            "3rd": "₹2,000"
          }
        },
        "snapshots": [
          { "round": "Round 1", "format": "MCQ + Output Prediction", "duration": "30 mins", "eliminates": "Bottom 60%" },
          { "round": "Round 2", "format": "3 Coding Problems", "duration": "90 mins", "eliminates": "Bottom 70%" },
          { "round": "Round 3 (Final)", "format": "2 Hard Problems", "duration": "60 mins", "eliminates": "Ranks 4 onwards" }
        ],
        "rules": [
          "No internet access allowed during the contest.",
          "Allowed languages: C, C++, Java, Python.",
          "Plagiarism leads to immediate disqualification.",
          "Participants must carry their college ID.",
          "Late entry after 15 minutes of start is not permitted.",
          "Judges' decision is final and binding."
        ],
        "judgementCriteria": [
          { "criteria": "Correctness", "weightage": "50%" },
          { "criteria": "Time Complexity", "weightage": "25%" },
          { "criteria": "Code Efficiency", "weightage": "15%" },
          { "criteria": "Speed of Submission", "weightage": "10%" }
        ],
        "ranking": "Leaderboard updated live after each round. Final ranking based on total problems solved, then by time penalty.",
        "contact": [
          { "name": "Arjun Mehta", "role": "Event Coordinator", "phone": "+91 98765 43210", "email": "arjun@rexia26.in" },
          { "name": "Priya Nair", "role": "Co-Coordinator", "phone": "+91 91234 56789", "email": "priya@rexia26.in" }
        ]
      },
      {
        "id": "tech-02",
        "name": "Hack Orbit",
        "tagline": "24 hours. One big idea.",
        "description": "A full-cycle hackathon where teams design, build and pitch a working product from scratch. Real problems. Real solutions. Real stakes.",
        "location": "Innovation Hub, Main Block",
        "managedBy": "DevForge Society",
        "overview": "Hack Orbit is REXIA's flagship hackathon that pushes teams to ideate, prototype and present a fully functional product within 24 hours. Problem statements span domains including healthcare, sustainability, fintech and education. Teams will have access to mentors, cloud credits, and hardware kits throughout the event.",
        "details": {
          "date": "April 18–19, 2026",
          "time": "9:00 AM Day 1 – 9:00 AM Day 2",
          "venue": "Innovation Hub, Main Block Ground Floor",
          "club": "DevForge Society",
          "facultyAdvisor": "Prof. Sunita Verma",
          "teamSize": "2–4 members",
          "registrationFee": "₹200 per team",
          "prizePoll": {
            "1st": "₹15,000",
            "2nd": "₹8,000",
            "3rd": "₹4,000"
          }
        },
        "snapshots": [
          { "round": "Problem Release", "format": "Statement reveal + team ideation", "duration": "1 hr", "eliminates": "None" },
          { "round": "Mid Check", "format": "Mentor review of prototype", "duration": "30 mins", "eliminates": "Weak teams flagged" },
          { "round": "Final Pitch", "format": "5-min demo + 5-min Q&A", "duration": "10 mins/team", "eliminates": "Non-finalists" }
        ],
        "rules": [
          "All code must be written during the hackathon — no pre-built projects.",
          "Open source libraries and APIs are permitted.",
          "Teams must submit GitHub repo link before the deadline.",
          "Hardware provided must be returned after the event.",
          "Any form of cheating or impersonation results in disqualification.",
          "Participants must be present for the final pitch to be eligible for prizes."
        ],
        "judgementCriteria": [
          { "criteria": "Innovation & Creativity", "weightage": "30%" },
          { "criteria": "Technical Complexity", "weightage": "25%" },
          { "criteria": "Feasibility & Impact", "weightage": "25%" },
          { "criteria": "Presentation & Demo", "weightage": "20%" }
        ],
        "ranking": "Teams shortlisted by mentor scores at mid-check. Final ranking decided by panel of 3 judges post pitch session.",
        "contact": [
          { "name": "Karthik Rao", "role": "Event Head", "phone": "+91 99887 76655", "email": "karthik@rexia26.in" },
          { "name": "Sneha Pillai", "role": "Logistics Lead", "phone": "+91 88776 65544", "email": "sneha@rexia26.in" }
        ]
      },
      {
        "id": "tech-03",
        "name": "Circuit Clash",
        "tagline": "Where hardware meets hustle.",
        "description": "An electronics and embedded systems competition. Design and demo a working circuit or IoT prototype that solves a real-world problem.",
        "location": "Electronics Lab, B Block",
        "managedBy": "Embedded Systems Club",
        "overview": "Circuit Clash invites electronics and hardware enthusiasts to build and demonstrate a working circuit or IoT-based prototype. Participants will be judged on the practicality of their solution, the elegance of their design, and how well they can explain their build to a panel of industry experts and faculty judges.",
        "details": {
          "date": "April 18, 2026",
          "time": "11:00 AM – 5:00 PM",
          "venue": "Electronics Lab, B Block Room 102",
          "club": "Embedded Systems Club",
          "facultyAdvisor": "Dr. Alok Sharma",
          "teamSize": "2–3 members",
          "registrationFee": "₹150 per team",
          "prizePoll": {
            "1st": "₹7,000",
            "2nd": "₹3,500",
            "3rd": "₹1,500"
          }
        },
        "snapshots": [
          { "round": "Submission", "format": "Problem statement + design plan", "duration": "1 hr", "eliminates": "Incomplete plans" },
          { "round": "Build Phase", "format": "Live circuit building", "duration": "4 hrs", "eliminates": "Non-functional builds" },
          { "round": "Demo & Q&A", "format": "Live demo to judges", "duration": "15 mins/team", "eliminates": "Ranked by score" }
        ],
        "rules": [
          "Components will be provided by organizers — personal components not allowed.",
          "Damage to lab equipment leads to disqualification and penalty.",
          "Wireless transmission modules must be pre-approved.",
          "Only team members may handle the circuit during demo.",
          "Teams must present a one-page design doc before build phase begins.",
          "Judges' evaluation is final."
        ],
        "judgementCriteria": [
          { "criteria": "Functionality", "weightage": "40%" },
          { "criteria": "Design Elegance", "weightage": "25%" },
          { "criteria": "Real-world Applicability", "weightage": "20%" },
          { "criteria": "Explanation & Q&A", "weightage": "15%" }
        ],
        "ranking": "Each team scored out of 100. Ties broken by Q&A performance score.",
        "contact": [
          { "name": "Vikram Das", "role": "Event Coordinator", "phone": "+91 97654 32109", "email": "vikram@rexia26.in" },
          { "name": "Ananya Roy", "role": "Lab In-charge", "phone": "+91 96543 21098", "email": "ananya@rexia26.in" }
        ]
      },
      {
        "id": "tech-04",
        "name": "Debug Duel",
        "tagline": "Find the bug. Win the glory.",
        "description": "You get broken code. You fix it. Fastest and cleanest solution wins. A test of patience, precision, and pure programming instinct.",
        "location": "CS Lab Block B",
        "managedBy": "CodeCraft Club",
        "overview": "Debug Duel is a solo programming event that hands participants intentionally broken code across multiple languages and complexity levels. Contestants must identify, explain, and fix the bugs as quickly as possible. This is not just about getting it to compile — the fix must be clean, efficient, and logically sound.",
        "details": {
          "date": "April 19, 2026",
          "time": "2:00 PM – 4:00 PM",
          "venue": "CS Lab Block B, Room 301",
          "club": "CodeCraft Club",
          "facultyAdvisor": "Dr. Ramesh Iyer",
          "teamSize": "1 member (solo)",
          "registrationFee": "₹80 per participant",
          "prizePoll": {
            "1st": "₹5,000",
            "2nd": "₹2,500",
            "3rd": "₹1,000"
          }
        },
        "snapshots": [
          { "round": "Level 1", "format": "Syntax & logic bugs — easy", "duration": "30 mins", "eliminates": "Bottom 50%" },
          { "round": "Level 2", "format": "Runtime & logical errors — medium", "duration": "45 mins", "eliminates": "Bottom 60%" },
          { "round": "Level 3 (Final)", "format": "Multi-language debug — hard", "duration": "45 mins", "eliminates": "Ranks 4 onwards" }
        ],
        "rules": [
          "No internet access, no external tools beyond IDE.",
          "Participants must not alter the core logic — only fix bugs.",
          "Each unfixed bug carries a time penalty.",
          "Submitting without fixing all bugs is allowed but penalized.",
          "Languages used: Python, C++, JavaScript.",
          "Code editor environment will be provided on lab systems."
        ],
        "judgementCriteria": [
          { "criteria": "Number of Bugs Fixed", "weightage": "50%" },
          { "criteria": "Fix Quality & Cleanliness", "weightage": "30%" },
          { "criteria": "Time Taken", "weightage": "20%" }
        ],
        "ranking": "Points per bug fixed minus time penalties. Final leaderboard decides winners.",
        "contact": [
          { "name": "Meera Iyer", "role": "Event Head", "phone": "+91 95432 10987", "email": "meera@rexia26.in" },
          { "name": "Rohit Sen", "role": "Technical Support", "phone": "+91 94321 09876", "email": "rohit@rexia26.in" }
        ]
      },
      {
        "id": "tech-05",
        "name": "AI Arena",
        "tagline": "Train it. Tame it. Win it.",
        "description": "Build and present an AI/ML model trained on a given dataset. Judged on accuracy, innovation, and the story your model tells.",
        "location": "Data Science Lab, C Block",
        "managedBy": "AI & ML Club",
        "overview": "AI Arena challenges participants to build a machine learning model on a provided dataset and present their findings to a panel of judges. The event tests end-to-end ML skills — from data preprocessing and feature engineering to model selection, tuning, and visualization. What sets teams apart is how well they can interpret and narrate what their model has learned.",
        "details": {
          "date": "April 19, 2026",
          "time": "10:00 AM – 3:00 PM",
          "venue": "Data Science Lab, C Block Room 401",
          "club": "AI & ML Club",
          "facultyAdvisor": "Prof. Divya Menon",
          "teamSize": "2–3 members",
          "registrationFee": "₹150 per team",
          "prizePoll": {
            "1st": "₹12,000",
            "2nd": "₹6,000",
            "3rd": "₹3,000"
          }
        },
        "snapshots": [
          { "round": "Dataset Release", "format": "Dataset + problem brief given", "duration": "15 mins", "eliminates": "None" },
          { "round": "Build Phase", "format": "Model training & evaluation", "duration": "3.5 hrs", "eliminates": "None" },
          { "round": "Presentation", "format": "10-min pitch + 5-min Q&A", "duration": "15 mins/team", "eliminates": "Ranked by score" }
        ],
        "rules": [
          "Dataset will be revealed at the start — no prior data collection allowed.",
          "Pre-trained foundation models are not allowed.",
          "All code must be written during the event.",
          "Python is the only permitted language.",
          "Teams must submit a Jupyter notebook before presenting.",
          "Internet allowed only for library documentation, not for solutions."
        ],
        "judgementCriteria": [
          { "criteria": "Model Accuracy", "weightage": "35%" },
          { "criteria": "Data Processing & Feature Engineering", "weightage": "25%" },
          { "criteria": "Innovation in Approach", "weightage": "20%" },
          { "criteria": "Presentation & Insights", "weightage": "20%" }
        ],
        "ranking": "Judged on combined score of model metrics and presentation. Panel of 3 judges gives independent scores averaged for final result.",
        "contact": [
          { "name": "Ravi Kumar", "role": "Event Coordinator", "phone": "+91 93210 98765", "email": "ravi@rexia26.in" },
          { "name": "Ishaan Bose", "role": "ML Mentor", "phone": "+91 92109 87654", "email": "ishaan@rexia26.in" }
        ]
      }
    ]
  },
  {
    "category": "cultural",
    "color": "#ff2d95",
    "events": [
      {
        "id": "cult-01",
        "name": "Rhythm Riot",
        "tagline": "Feel the beat. Own the stage.",
        "description": "A high-energy dance competition open to solo, duo, and group acts. Bring your genre, bring your fire — the stage is yours.",
        "location": "Main Auditorium",
        "managedBy": "Nrityanjali Dance Club",
        "overview": "Rhythm Riot is REXIA's grandest stage event — a dance competition that welcomes every style from classical Bharatanatyam to contemporary hip-hop and fusion. Performers are given creative freedom to express their art form while being evaluated on synchronization, expression, and stage command. The auditorium transforms into an electrifying arena of movement and music.",
        "details": {
          "date": "April 18, 2026",
          "time": "12:00 PM – 6:00 PM",
          "venue": "Main Auditorium, Ground Floor",
          "club": "Nrityanjali Dance Club",
          "facultyAdvisor": "Prof. Kavitha Nair",
          "teamSize": "1–15 members",
          "registrationFee": "₹200 per act",
          "prizePoll": {
            "1st": "₹10,000",
            "2nd": "₹5,000",
            "3rd": "₹2,500"
          }
        },
        "snapshots": [
          { "round": "Prelims", "format": "3-min performance", "duration": "3 mins/act", "eliminates": "Bottom 50% acts" },
          { "round": "Semi-finals", "format": "4-min performance", "duration": "4 mins/act", "eliminates": "Bottom 50% acts" },
          { "round": "Grand Finale", "format": "6-min performance + props allowed", "duration": "6 mins/act", "eliminates": "Ranked 4 onwards" }
        ],
        "rules": [
          "Music track must be submitted 24 hours before the event.",
          "Vulgarity or offensive content leads to immediate disqualification.",
          "Props allowed only in the final round.",
          "Time limit strictly enforced — exceed by 30s for deduction.",
          "Costumes must be performance-appropriate.",
          "Only registered members may perform on stage."
        ],
        "judgementCriteria": [
          { "criteria": "Choreography & Sync", "weightage": "30%" },
          { "criteria": "Expression & Energy", "weightage": "30%" },
          { "criteria": "Costume & Presentation", "weightage": "20%" },
          { "criteria": "Crowd Connect", "weightage": "20%" }
        ],
        "ranking": "Each judge scores out of 100. Average of 3 judges' scores determines the winner. Audience vote counts for 10% in the final round.",
        "contact": [
          { "name": "Ananya Singh", "role": "Event Head", "phone": "+91 91098 76543", "email": "ananya.s@rexia26.in" },
          { "name": "Priya Sharma", "role": "Stage Manager", "phone": "+91 90987 65432", "email": "priya.s@rexia26.in" }
        ]
      },
      {
        "id": "cult-02",
        "name": "Mic Drop",
        "tagline": "One voice. Infinite impact.",
        "description": "A singing competition that celebrates raw vocal talent. From classical to contemporary — if it gives goosebumps, it belongs here.",
        "location": "Main Auditorium",
        "managedBy": "Swarangini Music Club",
        "overview": "Mic Drop is a solo and duet singing competition that spans every genre — Bollywood, Carnatic, Western, Indie, and Folk. No auto-tune, no gimmicks. Just a voice, a microphone, and the courage to own the silence before the applause. Participants are judged on vocal purity, emotional delivery, and musical understanding.",
        "details": {
          "date": "April 19, 2026",
          "time": "11:00 AM – 4:00 PM",
          "venue": "Main Auditorium, Ground Floor",
          "club": "Swarangini Music Club",
          "facultyAdvisor": "Prof. Harish Balakrishnan",
          "teamSize": "1–2 members",
          "registrationFee": "₹100 per act",
          "prizePoll": {
            "1st": "₹8,000",
            "2nd": "₹4,000",
            "3rd": "₹2,000"
          }
        },
        "snapshots": [
          { "round": "Prelims", "format": "One song — max 3 mins", "duration": "3 mins/act", "eliminates": "Bottom 60%" },
          { "round": "Finals", "format": "Two songs — one chosen, one surprise", "duration": "7 mins/act", "eliminates": "Ranks 4 onwards" }
        ],
        "rules": [
          "Live instruments allowed and encouraged.",
          "Backing track must be instrumental only — no original vocals.",
          "Songs with explicit lyrics must be edited.",
          "Participants must perform at least one song in their regional language.",
          "Time overrun of more than 1 minute leads to score deduction.",
          "Judges' decision is final."
        ],
        "judgementCriteria": [
          { "criteria": "Vocal Quality & Pitch", "weightage": "35%" },
          { "criteria": "Emotional Delivery", "weightage": "30%" },
          { "criteria": "Song Selection & Arrangement", "weightage": "20%" },
          { "criteria": "Stage Presence", "weightage": "15%" }
        ],
        "ranking": "Panel of 3 judges scores each act. Scores averaged for prelims. Final winner decided by combined judge + faculty score.",
        "contact": [
          { "name": "Meera Iyer", "role": "Event Coordinator", "phone": "+91 89876 54321", "email": "meera.i@rexia26.in" },
          { "name": "Arjun Nair", "role": "Sound Engineer", "phone": "+91 88765 43210", "email": "arjun.n@rexia26.in" }
        ]
      },
      {
        "id": "cult-03",
        "name": "Frame & Fire",
        "tagline": "Capture the chaos. Tell the story.",
        "description": "A photography and short film challenge. Shoot, edit, and submit within the fest grounds. Theme revealed on day one.",
        "location": "Campus Wide + Editing Suite, D Block",
        "managedBy": "Lens & Light Film Club",
        "overview": "Frame & Fire is a two-track creative event. The Photography track challenges participants to capture the essence of a revealed theme within the campus over 4 hours. The Short Film track gives teams 24 hours to shoot, edit, and submit a 3–5 minute film. Both tracks are judged by a panel of professional photographers and filmmakers.",
        "details": {
          "date": "April 18–19, 2026",
          "time": "Photography: 9 AM – 1 PM | Film: Day 1 9 AM – Day 2 9 AM",
          "venue": "Campus Grounds + Editing Suite D Block Room 202",
          "club": "Lens & Light Film Club",
          "facultyAdvisor": "Prof. Rekha Menon",
          "teamSize": "1–3 members",
          "registrationFee": "₹120 per team",
          "prizePoll": {
            "1st": "₹6,000",
            "2nd": "₹3,000",
            "3rd": "₹1,500"
          }
        },
        "snapshots": [
          { "round": "Theme Reveal", "format": "Theme announced, shoot begins", "duration": "15 mins", "eliminates": "None" },
          { "round": "Shoot Phase", "format": "On-campus capture", "duration": "4 hrs (photo) / 24 hrs (film)", "eliminates": "None" },
          { "round": "Judging", "format": "Panel review of submissions", "duration": "Half day", "eliminates": "Ranked by score" }
        ],
        "rules": [
          "All shots must be taken within the campus boundary.",
          "Heavy post-processing or AI-generated content is disqualified.",
          "Films must be original — no copyrighted music without license.",
          "Participants must submit raw files along with final submission.",
          "Maximum 5 photos per participant in photography track.",
          "Short films must be between 3 and 5 minutes — no exceptions."
        ],
        "judgementCriteria": [
          { "criteria": "Theme Relevance", "weightage": "30%" },
          { "criteria": "Composition & Framing", "weightage": "30%" },
          { "criteria": "Creativity & Storytelling", "weightage": "25%" },
          { "criteria": "Technical Quality", "weightage": "15%" }
        ],
        "ranking": "Photography and film tracks ranked separately. Each track has its own prize pool. Combined 'Best Overall' award for top scorer across both tracks.",
        "contact": [
          { "name": "Sneha Patel", "role": "Event Head", "phone": "+91 87654 32109", "email": "sneha.p@rexia26.in" },
          { "name": "Dev Kapoor", "role": "Film Track Lead", "phone": "+91 86543 21098", "email": "dev@rexia26.in" }
        ]
      },
      {
        "id": "cult-04",
        "name": "Spotlight",
        "tagline": "Drama that hits different.",
        "description": "A street play and skit competition. Perform original scripts on powerful social themes. No sets. No props. Just pure storytelling.",
        "location": "Open Air Theatre",
        "managedBy": "Rangmanch Drama Society",
        "overview": "Spotlight is a raw, unfiltered theatre competition where teams perform original street plays or skits on socially relevant themes announced two weeks in advance. With no elaborate sets or props, everything rests on the script, the performance, and the energy of the cast. This is theatre that punches you in the chest and makes you think.",
        "details": {
          "date": "April 18, 2026",
          "time": "3:00 PM – 7:00 PM",
          "venue": "Open Air Theatre, Campus Ground",
          "club": "Rangmanch Drama Society",
          "facultyAdvisor": "Prof. Suresh Pillai",
          "teamSize": "5–12 members",
          "registrationFee": "₹250 per team",
          "prizePoll": {
            "1st": "₹10,000",
            "2nd": "₹5,000",
            "3rd": "₹2,500"
          }
        },
        "snapshots": [
          { "round": "Script Submission", "format": "Script submitted 48 hrs prior", "duration": "Deadline", "eliminates": "Late entries" },
          { "round": "Performance", "format": "Live performance on open stage", "duration": "10–15 mins/team", "eliminates": "None" },
          { "round": "Jury Deliberation", "format": "Closed-door jury scoring", "duration": "30 mins", "eliminates": "Ranked by score" }
        ],
        "rules": [
          "Scripts must be original and submitted 48 hours before event.",
          "Maximum performance time is 15 minutes including setup.",
          "No pre-recorded audio — live dialogue and sound effects only.",
          "Offensive, casteist, or communally sensitive content is strictly banned.",
          "Props limited to hand-held items only.",
          "All team members must be registered participants."
        ],
        "judgementCriteria": [
          { "criteria": "Script & Storyline", "weightage": "30%" },
          { "criteria": "Acting & Character Depth", "weightage": "30%" },
          { "criteria": "Direction & Flow", "weightage": "25%" },
          { "criteria": "Audience Impact", "weightage": "15%" }
        ],
        "ranking": "Jury of 3 experts scores each team independently. Scores averaged. Tie-breaker: audience applause meter reading.",
        "contact": [
          { "name": "Karthik Rao", "role": "Event Head", "phone": "+91 85432 10987", "email": "karthik.r@rexia26.in" },
          { "name": "Nisha Varma", "role": "Script Review Lead", "phone": "+91 84321 09876", "email": "nisha@rexia26.in" }
        ]
      },
      {
        "id": "cult-05",
        "name": "Brush & Beyond",
        "tagline": "Art has no limits here.",
        "description": "A live art and installation challenge. Sketch, paint, or sculpt — interpret the theme your way and leave something unforgettable behind.",
        "location": "Art Gallery Hall, E Block",
        "managedBy": "Canvas & Craft Club",
        "overview": "Brush & Beyond is a live art event where participants transform blank canvases into powerful visual narratives. The theme is revealed at the start, and artists have 4 hours to create their masterpiece on-site using any medium they choose — charcoal, acrylic, watercolor, or mixed media. The completed works are displayed in a gallery walk judged by art faculty and guest curators.",
        "details": {
          "date": "April 19, 2026",
          "time": "10:00 AM – 2:00 PM",
          "venue": "Art Gallery Hall, E Block",
          "club": "Canvas & Craft Club",
          "facultyAdvisor": "Prof. Lalitha Krishnan",
          "teamSize": "1–2 members",
          "registrationFee": "₹80 per team",
          "prizePoll": {
            "1st": "₹5,000",
            "2nd": "₹2,500",
            "3rd": "₹1,000"
          }
        },
        "snapshots": [
          { "round": "Theme Reveal + Setup", "format": "Theme announced, canvas assigned", "duration": "15 mins", "eliminates": "None" },
          { "round": "Creation Phase", "format": "Live art on canvas", "duration": "4 hrs", "eliminates": "None" },
          { "round": "Gallery Walk & Judging", "format": "Artists explain their work to judges", "duration": "1 hr", "eliminates": "Ranked by score" }
        ],
        "rules": [
          "All materials will be provided — personal materials not allowed.",
          "Digital art tools are strictly prohibited.",
          "Artwork must remain within the assigned canvas size.",
          "Copying from references is not allowed.",
          "Participants must be present for the gallery walk explanation.",
          "Artwork becomes property of REXIA'26 organizing committee post-event."
        ],
        "judgementCriteria": [
          { "criteria": "Theme Interpretation", "weightage": "30%" },
          { "criteria": "Technique & Skill", "weightage": "30%" },
          { "criteria": "Originality", "weightage": "25%" },
          { "criteria": "Artist Explanation", "weightage": "15%" }
        ],
        "ranking": "Each artwork scored by 2 judges independently. Average score determines rank. People's Choice Award given separately by visitor votes.",
        "contact": [
          { "name": "Ananya Singh", "role": "Event Coordinator", "phone": "+91 83210 98765", "email": "ananya.art@rexia26.in" },
          { "name": "Rohan Das", "role": "Materials In-charge", "phone": "+91 82109 87654", "email": "rohan@rexia26.in" }
        ]
      }
    ]
  },
  {
    "category": "sports",
    "color": "#00d4ff",
    "events": [
      {
        "id": "sport-01",
        "name": "Iron League",
        "tagline": "Strongest squad takes all.",
        "description": "A multi-sport team relay combining strength, speed and strategy. Compete across stations and rack up points before time runs out.",
        "location": "Sports Ground, North Campus",
        "managedBy": "Sports Council",
        "overview": "Iron League is REXIA's ultimate team endurance challenge — a multi-station relay that tests raw strength, sprint speed, and coordinated strategy. Teams rotate through stations including weighted carries, obstacle sprints, tug-of-war, and relay racing. Points accumulate across all stations and the team with the highest combined score takes the crown.",
        "details": {
          "date": "April 18, 2026",
          "time": "8:00 AM – 1:00 PM",
          "venue": "Sports Ground, North Campus",
          "club": "Sports Council",
          "facultyAdvisor": "Prof. Vijay Kumar",
          "teamSize": "4–6 members",
          "registrationFee": "₹300 per team",
          "prizePoll": {
            "1st": "₹8,000",
            "2nd": "₹4,000",
            "3rd": "₹2,000"
          }
        },
        "snapshots": [
          { "round": "Heat 1", "format": "Obstacle relay + sprint", "duration": "45 mins", "eliminates": "Bottom 40% teams" },
          { "round": "Heat 2", "format": "Weighted carry + tug-of-war", "duration": "45 mins", "eliminates": "Bottom 40% remaining" },
          { "round": "Grand Final", "format": "Full circuit all stations", "duration": "1 hr", "eliminates": "Ranks 4 onwards" }
        ],
        "rules": [
          "All team members must participate in at least one station.",
          "Substitutions not allowed after registration.",
          "Unsportsmanlike conduct leads to immediate disqualification.",
          "Proper sports shoes are mandatory — no sandals or slippers.",
          "Teams must report 30 minutes before their heat.",
          "Decision of referee is final and non-negotiable."
        ],
        "judgementCriteria": [
          { "criteria": "Station Completion Time", "weightage": "40%" },
          { "criteria": "Points Per Station", "weightage": "40%" },
          { "criteria": "Team Coordination", "weightage": "20%" }
        ],
        "ranking": "Points tallied across all stations. Final leaderboard published after Grand Final. Ties broken by fastest completion time in Final.",
        "contact": [
          { "name": "Vikram Das", "role": "Sports Coordinator", "phone": "+91 81098 76543", "email": "vikram.s@rexia26.in" },
          { "name": "Suresh Babu", "role": "Ground Manager", "phone": "+91 80987 65432", "email": "suresh@rexia26.in" }
        ]
      },
      {
        "id": "sport-02",
        "name": "Net Blaze",
        "tagline": "Spike it. Win it.",
        "description": "A fast-paced volleyball tournament with knockout rounds. Bring the energy, own the net, and make every set count.",
        "location": "Volleyball Court, Sports Complex",
        "managedBy": "Sports Council",
        "overview": "Net Blaze is a knockout-format volleyball tournament that brings together the best teams from across departments and colleges. Fast-paced rallies, powerful spikes, and strategic blocks define this event. Games are played on standard volleyball rules with modified scoring to keep the energy high and the crowd louder with every set.",
        "details": {
          "date": "April 19, 2026",
          "time": "9:00 AM – 5:00 PM",
          "venue": "Volleyball Court, Sports Complex",
          "club": "Sports Council",
          "facultyAdvisor": "Prof. Vijay Kumar",
          "teamSize": "6 members + 2 substitutes",
          "registrationFee": "₹400 per team",
          "prizePoll": {
            "1st": "₹6,000",
            "2nd": "₹3,000",
            "3rd": "₹1,500"
          }
        },
        "snapshots": [
          { "round": "Group Stage", "format": "Round-robin within groups", "duration": "Morning session", "eliminates": "Bottom teams per group" },
          { "round": "Quarter & Semi Finals", "format": "Best of 3 sets", "duration": "Afternoon session", "eliminates": "Losing teams" },
          { "round": "Final", "format": "Best of 5 sets", "duration": "Evening", "eliminates": "Runner-up ranked 2nd" }
        ],
        "rules": [
          "Standard FIVB volleyball rules apply.",
          "Teams must field minimum 6 players to begin a match.",
          "Maximum 2 substitutions per set allowed.",
          "Net touch results in point to opponent.",
          "Warm-up time is 5 minutes before each match.",
          "Referee decisions are final."
        ],
        "judgementCriteria": [
          { "criteria": "Sets Won", "weightage": "60%" },
          { "criteria": "Points Differential", "weightage": "25%" },
          { "criteria": "Sportsmanship (referee assessment)", "weightage": "15%" }
        ],
        "ranking": "Knockout bracket — winner advances, loser is eliminated. 3rd place decided by play-off between semi-final losers.",
        "contact": [
          { "name": "Ravi Kumar", "role": "Tournament Director", "phone": "+91 79876 54321", "email": "ravi.s@rexia26.in" },
          { "name": "Priya Nair", "role": "Court Coordinator", "phone": "+91 78765 43210", "email": "priya.n@rexia26.in" }
        ]
      },
      {
        "id": "sport-03",
        "name": "Pixel Kombat",
        "tagline": "Controller in hand. Throne in sight.",
        "description": "An esports showdown spanning FIFA, Valorant, and BGMI. Bracket-style elimination with live commentary and crowd energy.",
        "location": "E-Sports Arena, F Block",
        "managedBy": "GameZone E-Sports Club",
        "overview": "Pixel Kombat is REXIA's premier esports tournament running three parallel tracks — FIFA (console), Valorant (PC), and BGMI (mobile). Each game runs its own bracket with separate registrations and prize pools. The event features live commentary, spectator screens, and a dedicated crowd zone making it the most electric indoor event of the fest.",
        "details": {
          "date": "April 18–19, 2026",
          "time": "10:00 AM – 8:00 PM (both days)",
          "venue": "E-Sports Arena, F Block Ground Floor",
          "club": "GameZone E-Sports Club",
          "facultyAdvisor": "Prof. Anil Menon",
          "teamSize": "1 (FIFA/BGMI Solo) – 5 (Valorant)",
          "registrationFee": "₹150 per game per team",
          "prizePoll": {
            "1st": "₹12,000",
            "2nd": "₹6,000",
            "3rd": "₹3,000"
          }
        },
        "snapshots": [
          { "round": "Group Stage", "format": "Round-robin per game", "duration": "Day 1", "eliminates": "Bottom 50% per bracket" },
          { "round": "Quarter Finals", "format": "Single elimination", "duration": "Day 2 Morning", "eliminates": "Losing teams" },
          { "round": "Semi + Grand Final", "format": "Best of 3 matches", "duration": "Day 2 Evening", "eliminates": "Runner-up ranked 2nd" }
        ],
        "rules": [
          "Participants must bring their own peripherals for PC events.",
          "Console and mobile devices will be provided by organizers.",
          "Hacking, cheating software, or exploits result in permanent ban.",
          "Match schedules are fixed — no-show treated as forfeit.",
          "All in-game settings must be at default unless tournament mode allows.",
          "Participants must be 17+ years old."
        ],
        "judgementCriteria": [
          { "criteria": "Match Wins", "weightage": "70%" },
          { "criteria": "Score Differential", "weightage": "20%" },
          { "criteria": "Sportsmanship", "weightage": "10%" }
        ],
        "ranking": "Each game bracket ranked independently. Winners per game crowned separately. An 'Overall Champion' title awarded to the team/player with the highest combined points across all games they entered.",
        "contact": [
          { "name": "Arjun Mehta", "role": "Esports Head", "phone": "+91 77654 32109", "email": "arjun.g@rexia26.in" },
          { "name": "Ishaan Bose", "role": "Tech Setup Lead", "phone": "+91 76543 21098", "email": "ishaan.g@rexia26.in" }
        ]
      },
      {
        "id": "sport-04",
        "name": "Court Kings",
        "tagline": "Ball. Court. Crown.",
        "description": "A 3-on-3 street basketball tournament. Fast, physical, and full of flair — half-court, full-heart rules apply.",
        "location": "Basketball Court, Sports Complex",
        "managedBy": "Hoops Club",
        "overview": "Court Kings brings the street basketball culture alive on campus with a 3-on-3 half-court tournament. Games are intense, fast, and physical — played to 21 points or 10 minutes, whichever comes first. This format rewards individual skill, team chemistry, and clutch performance under pressure. Trash talk encouraged. Fouls punished.",
        "details": {
          "date": "April 18, 2026",
          "time": "2:00 PM – 7:00 PM",
          "venue": "Basketball Court, Sports Complex",
          "club": "Hoops Club",
          "facultyAdvisor": "Prof. Sandeep Bose",
          "teamSize": "3 members + 1 substitute",
          "registrationFee": "₹250 per team",
          "prizePoll": {
            "1st": "₹6,000",
            "2nd": "₹3,000",
            "3rd": "₹1,500"
          }
        },
        "snapshots": [
          { "round": "Pool Play", "format": "Round-robin within pools", "duration": "Afternoon", "eliminates": "Bottom team per pool" },
          { "round": "Knockouts", "format": "Single elimination", "duration": "Evening", "eliminates": "Losing teams" },
          { "round": "Championship", "format": "First to 21 or 10 mins", "duration": "Final slot", "eliminates": "Runner-up ranked 2nd" }
        ],
        "rules": [
          "FIBA 3x3 basketball rules apply.",
          "Games played to 21 points or 10 minutes.",
          "Fouls result in free throws from the arc.",
          "5 team fouls per game — 6th results in technical foul.",
          "Players must wear matching jerseys.",
          "Referees decision is final."
        ],
        "judgementCriteria": [
          { "criteria": "Points Scored", "weightage": "70%" },
          { "criteria": "Win/Loss Record", "weightage": "20%" },
          { "criteria": "Fair Play Score", "weightage": "10%" }
        ],
        "ranking": "Pool stage ranked by wins then point differential. Knockout rounds single elimination. Champions decided by final game score.",
        "contact": [
          { "name": "Karthik Rao", "role": "Tournament Organizer", "phone": "+91 75432 10987", "email": "karthik.b@rexia26.in" },
          { "name": "Meera Iyer", "role": "Court Referee", "phone": "+91 74321 09876", "email": "meera.b@rexia26.in" }
        ]
      },
      {
        "id": "sport-05",
        "name": "Sprint Zero",
        "tagline": "First off the line. First in history.",
        "description": "Track and field sprints plus obstacle relay races. Pure athleticism, raw speed — no excuses, no shortcuts.",
        "location": "Athletics Track, North Campus",
        "managedBy": "Athletics Club",
        "overview": "Sprint Zero is the purest test of human speed on campus — a track and field event covering 100m, 200m, and 4x100m relay races alongside a timed obstacle course relay. Every millisecond counts. Participants are timed using digital sensors and ranked on certified timing sheets. This is where legends of REXIA's track are made.",
        "details": {
          "date": "April 19, 2026",
          "time": "7:00 AM – 12:00 PM",
          "venue": "Athletics Track, North Campus",
          "club": "Athletics Club",
          "facultyAdvisor": "Prof. Ramesh Pillai",
          "teamSize": "1 (sprints) – 4 (relay)",
          "registrationFee": "₹100 per event per participant",
          "prizePoll": {
            "1st": "₹5,000",
            "2nd": "₹2,500",
            "3rd": "₹1,000"
          }
        },
        "snapshots": [
          { "round": "Heats", "format": "All participants run — top times advance", "duration": "Morning", "eliminates": "Bottom 60% per event" },
          { "round": "Semi Finals", "format": "Top times compete", "duration": "Mid morning", "eliminates": "Bottom 50%" },
          { "round": "Finals", "format": "Top 8 per event race for medals", "duration": "Late morning", "eliminates": "Ranks 4 onwards" }
        ],
        "rules": [
          "Spiked shoes allowed on track only.",
          "False start results in warning — second false start is disqualification.",
          "Relay baton must be passed within the exchange zone.",
          "Participants must wear proper athletic wear.",
          "Each participant can register for maximum 2 individual events.",
          "Timing sensor readings are official and final."
        ],
        "judgementCriteria": [
          { "criteria": "Finish Time (digital sensor)", "weightage": "90%" },
          { "criteria": "Lane Discipline", "weightage": "10%" }
        ],
        "ranking": "Ranked purely by finish time. Ties broken by photo finish review. Relay ranked by team's total leg time.",
        "contact": [
          { "name": "Vikram Das", "role": "Athletics Coordinator", "phone": "+91 73210 98765", "email": "vikram.a@rexia26.in" },
          { "name": "Sneha Patel", "role": "Timing Official", "phone": "+91 72109 87654", "email": "sneha.a@rexia26.in" }
        ]
      }
    ]
  }
]

