window.SITE = {
 "nav": [
  {
   "slug": "home",
   "title": "Home"
  },
  {
   "slug": "junior-year",
   "title": "Junior Year",
   "children": [
    {
     "slug": "junior-mastery",
     "title": "Junior Mastery"
    },
    {
     "slug": "animation",
     "title": "Animation"
    },
    {
     "slug": "digital-arts-1",
     "title": "Digital Arts 1"
    },
    {
     "slug": "digital-arts-2",
     "title": "Digital Arts 2"
    }
   ]
  },
  {
   "slug": "sophomore-year",
   "title": "Sophomore Year"
  },
  {
   "slug": "breadth",
   "title": "Breadth"
  },
  {
   "slug": "senior-mastery",
   "title": "Senior Mastery"
  },
  {
   "slug": "class-projects",
   "title": "Class Projects",
   "children": [
    {
     "slug": "inktober",
     "title": "Inktober"
    }
   ]
  },
  {
   "slug": "ace",
   "title": "ACE"
  },
  {
   "slug": "resources",
   "title": "Resources",
   "children": [
    {
     "slug": "vocab",
     "title": "Vocab"
    },
    {
     "slug": "animation-vocab",
     "title": "Animation Vocab"
    }
   ]
  }
 ],
 "pages": {
  "home": {
   "type": "home",
   "hero": "IMG_3622.JPG",
   "featured": []
  },
  "junior-year": {
   "type": "hub",
   "title": "Junior Year",
   "children": [
    "junior-mastery",
    "animation",
    "digital-arts-1",
    "digital-arts-2"
   ]
  },
  "junior-mastery": {
   "type": "sections",
   "title": "Junior Mastery — Plane Dread",
   "slideshow": [
    "g-jm-slide-01.jpg",
    "g-jm-slide-02.png",
    "g-jm-slide-03.jpg",
    "g-jm-slide-04.jpg",
    "g-jm-slide-05.jpg",
    "g-jm-slide-06.jpg",
    "g-jm-slide-07.jpg",
    "g-jm-slide-08.jpg",
    "g-jm-slide-09.png",
    "g-jm-slide-10.png",
    "g-jm-slide-11.jpg",
    "g-jm-slide-12.png"
   ],
   "sections": [
    {
     "heading": "Plane Dread",
     "body": "Plane Dread is a horror game I built to fix a problem I kept running into: too many horror games feel generic and copy each other. The slideshow above walks through the whole build, and the breakdown below goes week by week. By the numbers: 25 enemies, more than 100,000 possible rounds, and a 25% win rate."
    },
    {
     "heading": "Research",
     "body": "This project wasn't really backed by formal research. It came from my own experience and from YouTube videos I'd picked up over the years. I find research limiting, so while I learned a lot here, I also learned that I need to pay closer attention to what's happening as I build, and push myself to be more creative."
    },
    {
     "heading": "The Problem",
     "body": "The problem I set out to tackle was how many games copy each other, especially in horror. Poppy Playtime gets called a mascot-horror copy of Five Nights at Freddy's, and thousands of Granny and Baldi clones have flooded the app store."
    },
    {
     "heading": "Week 1 — Building the Plane",
     "body": "Week 1 was building the plane and setting up the navigation mesh, the invisible map that tells characters where they're allowed to walk. My first real problem was the mesh generating on the roof of the plane instead of the floor. I also put a collider on every single chair so the player couldn't walk straight through them.",
     "images": [
      "g-junior-mastery-01.png",
      "g-junior-mastery-02.png",
      "g-junior-mastery-03.png",
      "g-junior-mastery-04.png"
     ]
    },
    {
     "heading": "Week 2 — The Puzzles",
     "body": "Week 2 was dedicated to the puzzles. The Breaker puzzle was inspired by the same puzzle in Doors, but I added the Puzzler enemy to make it far more nerve-wracking, and I rebuilt the breaker from scratch with help from Claude. In the Cockpit puzzle you turn dials to realign the plane's systems."
    },
    {
     "heading": "Week 3 — The Enemies (the hardest part)",
     "body": "Week 3 was making the enemies, and it was easily the most frustrating week: a huge number of bugs. Henry would sometimes stand the passengers up or bend their legs backwards, which gave away exactly which passenger he had taken over. Puzzler went through several remodels (the first one looked like something out of The Wizard of Oz), and Peeper had a bug where he would spawn in invisible and kill the player."
    },
    {
     "heading": "The Enemies",
     "body": "These are the enemies you can actually see during a round; the rest are abstract. Puzzler attacks during puzzles. Peeper makes you watch the bathroom door. Bloodhound stalks you through the plane. And Henry — you'd never notice he was there until it was too late."
    },
    {
     "heading": "AI Models I Used",
     "body": "Claude did roughly 85% of the coding, and Owl-Alpha, a free beta model still in testing, did the rest. DeepSeek helped me visualize the plan, and Tripo3D built the enemy models I didn't have time to make myself."
    },
    {
     "heading": "Debugging",
     "body": "There were plenty of bugs along the way, and the game still isn't finished. Decompression, an enemy that gets you if you linger near the front of the plane, would strike at random with no warning at all. The oxygen system didn't work at first either, so during a pressure-drop round you could die standing right next to a mask."
    },
    {
     "heading": "The End… for now",
     "body": "I'll keep fixing bugs and updating this game in the future. Thanks for taking the time to look through my junior mastery."
    }
   ]
  },
  "animation": {
   "type": "canva",
   "title": "Animation",
   "body": "This site takes you to my animation page, hosted on Canva!",
   "canva": "https://ethersonmastery2025.my.canva.site/armanicunningham",
   "images": []
  },
  "digital-arts-1": {
   "type": "sections",
   "title": "Digital Arts",
   "sections": [
    {
     "heading": "Final Skillshare Projects",
     "sub": "Fashion Glitch",
     "body": "This is the final glitch-effect project, following the tutorial linked below. I used a range of hue and saturation adjustments along with a layer mask.",
     "note": "1 / 11",
     "images": [
      "g-digital-arts-1-01.jpg",
      "g-digital-arts-1-02.jpg",
      "g-digital-arts-1-03.png",
      "g-digital-arts-1-04.jpg",
      "g-digital-arts-1-05.jpg",
      "g-digital-arts-1-06.jpg",
      "g-digital-arts-1-07.jpg",
      "g-digital-arts-1-08.jpg",
      "g-digital-arts-1-09.jpg",
      "g-digital-arts-1-10.jpg",
      "g-digital-arts-1-11.jpg"
     ]
    },
    {
     "heading": "Skillshare Project 2",
     "sub": "Easily Make This Paper Cutout Style Graphic Using Adobe Photoshop's AI",
     "body": "Another tutorial, this time placing images inside text using clipping masks. I generated the images with Gemini and Firefly, then used layers and clipping masks to fit each image into the letters.",
     "note": "Double-click the gallery to see the process start to finish (1 / 4)",
     "images": [
      "g-digital-arts-1-12.jpg",
      "g-digital-arts-1-13.png",
      "g-digital-arts-1-14.png",
      "g-digital-arts-1-15.jpg"
     ]
    },
    {
     "heading": "Skillshare Project 1",
     "sub": "Photoshop Workflows — Movie Poster",
     "body": "I added the text at the top, finished the cropping, and it was done. I learned a lot more about cropping, selecting and layers here — I had to bring the businessman's arm in front of the table while keeping the rest of his body behind it.",
     "note": "Double-click the gallery to see the process start to finish (1 / 3)",
     "images": [
      "g-digital-arts-1-16.jpg",
      "g-digital-arts-1-17.jpg",
      "g-digital-arts-1-18.jpg"
     ]
    },
    {
     "heading": "Inktober Work",
     "sub": "Halloween String Lights",
     "body": "Inktober is an annual art challenge that runs through October, with a new black-and-white prompt every day. The prompts include Award, Vacant, Lesson, Skeletal, Onion, Rowdy, Firefly, Button and Blast.",
     "images": [
      "g-digital-arts-1-19.jpg",
      "g-digital-arts-1-20.jpg",
      "g-digital-arts-1-21.jpg",
      "g-digital-arts-1-22.jpg",
      "g-digital-arts-1-23.jpg",
      "g-digital-arts-1-24.jpg",
      "g-digital-arts-1-25.jpg",
      "g-digital-arts-1-26.jpg",
      "g-digital-arts-1-27.jpg",
      "g-digital-arts-1-28.jpg",
      "g-digital-arts-1-29.jpg",
      "g-digital-arts-1-30.jpg",
      "g-digital-arts-1-31.jpg",
      "g-digital-arts-1-32.jpg",
      "g-digital-arts-1-33.jpg",
      "g-digital-arts-1-34.jpg",
      "g-digital-arts-1-35.jpg",
      "g-digital-arts-1-36.jpg",
      "g-digital-arts-1-37.jpg",
      "g-digital-arts-1-38.jpg",
      "g-digital-arts-1-39.jpg",
      "g-digital-arts-1-40.jpg",
      "g-digital-arts-1-41.jpg",
      "g-digital-arts-1-42.jpg",
      "g-digital-arts-1-43.jpg"
     ]
    }
   ]
  },
  "digital-arts-2": {
   "type": "sections",
   "title": "Digital Arts and Design 2",
   "banner": "<div class=\"banner\"><p>A lot happened this semester — new Adobe certifications, competitions, and a 1st-place Tech Fair win.</p><a class=\"btn btn-primary\" href=\"#/ace\">See it on the ACE page →</a></div>",
   "sections": [
    {
     "heading": "Digital Branding Assets",
     "images": [
      "g-digital-arts-2-01.jpg",
      "g-digital-arts-2-02.jpg",
      "g-digital-arts-2-03.jpg",
      "g-digital-arts-2-04.jpg"
     ]
    },
    {
     "heading": "Adobe Express Animation",
     "body": "For my animation video in Adobe Express I used Ts as the border, with a bouncing effect. The purple, white and black represented my brand idea well.",
     "video": "express-animation.mp4",
     "images": []
    },
    {
     "heading": "Typography Challenge",
     "note": "1 / 2",
     "images": [
      "g-digital-arts-2-05.jpg",
      "g-digital-arts-2-06.jpg"
     ]
    },
    {
     "heading": "Famous Quote Typography",
     "body": "I chose the quote \"So many books, so little time.\" I set \"many\" large and \"little\" small so the sizing matched the meaning of each word, and added Bs down the side like a book's binding to fill the empty space. The simple, uncluttered look is what makes it work.",
     "images": [
      "famous-quote.png",
      "g-digital-arts-2-07.png"
     ]
    },
    {
     "heading": "Typography Album Poster",
     "body": "A CD cover for The Living Tombstone and the Five Nights at Freddy's songs they make. I used green and orange for their logo, and the animatronics' colors for the FNAF text. I layered Ts around the corners to give it structure.",
     "images": [
      "album-poster.png",
      "g-digital-arts-2-08.png"
     ]
    },
    {
     "heading": "Infographic Understanding",
     "body": "Creating a brand comes down to identity, presence, consistency and uniqueness: the same colors, fonts and images across everything, all relevant to you. Don't build a fake persona that isn't who you really are, and don't copy other people. Even in a crowded niche, your brand should be your own.",
     "note": "1 / 2",
     "images": [
      "g-digital-arts-2-09.jpg",
      "g-digital-arts-2-10.jpg"
     ]
    },
    {
     "heading": "Creating My Brand",
     "note": "A little about me! (1 / 4)",
     "images": [
      "g-digital-arts-2-11.jpg",
      "g-digital-arts-2-12.png",
      "g-digital-arts-2-13.jpg",
      "g-digital-arts-2-14.jpg"
     ]
    }
   ]
  },
  "sophomore-year": {
   "type": "sections",
   "title": "Sophomore Year",
   "sections": [
    {
     "heading": "Image Editing 1",
     "body": "All of my work from my 2024–25 Image Editing class.",
     "images": [
      "g-image-editing-01.jpg"
     ]
    }
   ]
  },
  "breadth": {
   "type": "text",
   "title": "Breadth",
   "body": "Breadth work coming soon.",
   "images": []
  },
  "senior-mastery": {
   "type": "text",
   "title": "Senior Mastery",
   "body": "Senior mastery project coming soon.",
   "images": []
  },
  "class-projects": {
   "type": "hub",
   "title": "Class Projects",
   "children": [
    "inktober"
   ]
  },
  "inktober": {
   "type": "sections",
   "title": "Inktober",
   "slideshow": [
    {
     "file": "AppleDay1ArmaniCunningham.jpg",
     "title": "Apple - Day 1"
    },
    {
     "file": "RingDay2ArmaniCunningham.jpg",
     "title": "Ring - Day 2"
    },
    {
     "file": "HandDay5ArmaniCunningham.jpg",
     "title": "Hand - Day 5"
    },
    {
     "file": "OgreDay6ArmaniCunningham.jpg",
     "title": "Ogre - Day 6"
    },
    {
     "file": "PanicDay7ArmaniCunningham.jpg",
     "title": "Panic - Day 7"
    },
    {
     "file": "TrashCanDay8ArmaniCunningham.jpg",
     "title": "Trash Can - Day 8"
    }
   ],
   "sections": []
  },
  "ace": {
   "type": "tabs",
   "title": "ACE",
   "tabs": [
    {
     "label": "Events",
     "sections": [
      {
       "heading": "Tech Fair — 1st Place",
       "body": "My team — me, Angel, and Gio — took 1st place at the Tech Fair with our game Employee of the Month, a game about working-class struggle and resource management where you play a literal human battery powering a factory under pressure.",
       "note": "1 / 4",
       "images": [
        "g-ace-techfair-01.jpg",
        "g-ace-techfair-02.jpg",
        "g-ace-techfair-03.jpg",
        "g-ace-techfair-04.jpg"
       ],
       "link": {
        "url": "https://arsenicadministration.org/",
        "label": "Play the game"
       }
      },
      {
       "heading": "Junior Ambassador",
       "body": "I also got recognized for my contributions as a Junior Ambassador.",
       "images": [
        "g-ace-junior-ambassador.jpg"
       ]
      },
      {
       "heading": "Read Across SC Competition",
       "body": "A state competition for grades K-12 themed around emphasizing reading across the state. No AI allowed and I can't draw well, so I used gradients as the background and images inside the text. Made in Photoshop.",
       "note": "Double-click to full-view (1 / 6)",
       "images": [
        "g-ace-01.jpg",
        "g-ace-02.jpg",
        "g-ace-03.jpg",
        "g-ace-04.jpg",
        "g-ace-05.jpg",
        "g-ace-06.jpg"
       ]
      },
      {
       "heading": "Read Across SC Competition — Planning",
       "body": "AI use was NOT allowed, which made it harder — I used a Pexels image to make a mask layer. Not being able to use AI or draw made this a real challenge.",
       "note": "1 / 2",
       "images": [
        "g-ace-07.png",
        "g-ace-08.jpg"
       ]
      },
      {
       "heading": "AI Art Competition",
       "body": "This was the AI art I submitted, and it got into the competition! (2025 AI Art Competition presented by Comcast — \"Life Through AI Eyes,\" $1,000 in prizes, Arts Center of Greenwood.)",
       "note": "1 / 5",
       "images": [
        "g-ace-09.jpg",
        "g-ace-10.jpg",
        "g-ace-11.jpg",
        "g-ace-12.jpg",
        "g-ace-13.png"
       ]
      },
      {
       "heading": "My Art (State Fair 2025)",
       "images": [
        "my-art-statefair.jpg"
       ]
      },
      {
       "heading": "State Fair Photos 2025",
       "note": "1 / 14",
       "images": [
        "g-ace-14.jpg",
        "g-ace-15.jpg",
        "g-ace-16.jpg",
        "g-ace-17.jpg",
        "g-ace-18.jpg",
        "g-ace-19.jpg",
        "g-ace-20.jpg",
        "g-ace-21.jpg",
        "g-ace-22.jpg",
        "g-ace-23.jpg",
        "g-ace-24.jpg",
        "g-ace-25.jpg",
        "g-ace-26.jpg",
        "g-ace-27.jpg"
       ]
      }
     ]
    },
    {
     "label": "Certifications",
     "sections": [
      {
       "heading": "Adobe Photoshop Certification",
       "body": "I am officially certified in Adobe Photoshop! I'll retake it every 3 years, but I'm very proud — I was stressed clicking submit but passed with a high score. (Verify via the steps on the bottom-left of the certificate.)",
       "images": [
        "cert-photoshop.jpg"
       ]
      },
      {
       "heading": "Adobe Animate Certification",
       "body": "I am officially certified in Adobe Animate! I'll retake it every 3 years. It was challenging and tough to remember some tool locations, but I pulled through. (Verify via the steps on the bottom-left of the certificate.)",
       "images": [
        "cert-animate.jpg"
       ]
      },
      {
       "heading": "Adobe Premiere Pro — Digital Video",
       "body": "Adobe Certified Professional in Digital Video Using Adobe Premiere Pro (earned December 19, 2025). Verify it with the code on the bottom-left of the certificate.",
       "images": [
        "cert-premiere.jpg"
       ]
      },
      {
       "heading": "Adobe InDesign — Print & Digital Media Publication",
       "body": "Adobe Certified Professional in Print & Digital Media Publication Using Adobe InDesign (earned January 9, 2026). Verify it with the code on the certificate.",
       "images": [
        "cert-indesign.jpg"
       ]
      },
      {
       "heading": "Adobe Express — Content Creation & Marketing",
       "body": "Adobe Certified Professional in Content Creation and Marketing Using Adobe Express (earned May 27, 2026).",
       "images": [
        "cert-express.jpg"
       ]
      },
      {
       "heading": "Visual Design Certification",
       "body": "Adobe Certified Professional in Visual Design (earned January 9, 2026).",
       "images": [
        "cert-visual-design.jpg"
       ]
      },
      {
       "heading": "Video Design Certification",
       "body": "Adobe Certified Professional in Video Design (earned December 19, 2025).",
       "images": [
        "cert-video-design.jpg"
       ]
      },
      {
       "heading": "Marketing Design Certification",
       "body": "Adobe Certified Professional in Marketing Design (earned May 27, 2026).",
       "images": [
        "cert-marketing-design.jpg"
       ]
      },
      {
       "heading": "3D Animation 1",
       "body": "Certified in 3D Animation 1 (passed 5/29/2026). Standards: 3D animation career paths · the animation production pipeline · animation terms, tools & interface · the 12 principles of animation (via The Illusion of Life) · animating a camera · rendering an animated scene.",
       "images": [
        "cert-3d-animation-1.png"
       ]
      },
      {
       "heading": "3D Animation 2",
       "body": "Certified in 3D Animation 2 (passed 5/29/2026). Standards: deeper mastery of the 12 principles of animation · pre-production, production & post-production practices · rigging techniques · advanced animation techniques.",
       "images": [
        "cert-3d-animation-2.png"
       ]
      },
      {
       "heading": "Digital Media, Advanced",
       "body": "Certified in Digital Media, Advanced (passed 2/20/2026). Standards: enhancing digital media design skills · creating a 3D graphic and an intro to animation · planning, designing, creating, evaluating, revising & publishing interactive digital media · developing interactive media projects (computer- or web-based), solo or on a team.",
       "images": [
        "cert-dm-advanced.png"
       ]
      },
      {
       "heading": "Digital Media 2 Certification",
       "body": "Certified in Digital Media 2 (passed 11/14/25). Standards: Planning/Design/Development · Digital Audio · 2D Animation · Digital Video · Team Activities · Copyright Laws, Ethics & Issues.",
       "images": [
        "cert-dm2.jpg"
       ]
      },
      {
       "heading": "Digital Media 1 Certification",
       "body": "Certified in Digital Media 1 (passed 12/12/25). Standards: Design Process · Color Theory · Typography · Vector Graphics · Raster Images · Project Management · Careers & Employability.",
       "images": [
        "cert-dm1.jpg"
       ]
      }
     ]
    }
   ]
  },
  "resources": {
   "type": "links",
   "title": "Animation Resources",
   "links": [
    {
     "name": "Goblin Tools",
     "url": "https://goblin.tools/"
    },
    {
     "name": "Mind Map",
     "url": "https://www.canva.com/design/DAGx1dC8NBE/LC58rnwIgI84mphZ4SWmtg/edit"
    },
    {
     "name": "Unsplash",
     "url": "https://unsplash.com/"
    },
    {
     "name": "Pexels",
     "url": "https://www.pexels.com/"
    },
    {
     "name": "Canva Stock",
     "url": "https://www.canva.com/features/free-stock-photos/"
    },
    {
     "name": "FreePik",
     "url": "https://www.freepik.com/"
    },
    {
     "name": "Vecteezy",
     "url": "https://www.vecteezy.com/"
    },
    {
     "name": "Font Gen",
     "url": "https://labs.google/gentype?authuser=0"
    },
    {
     "name": "Location Release",
     "url": "https://docs.google.com/document/d/1dVMiV9SanCAU3rXU-Qj4a0cnPuUI5_fey_UjwNeJYBk/edit"
    },
    {
     "name": "Model Release",
     "url": "https://docs.google.com/document/d/1xxx59X_NDwJwJNtERMY1ikS4vVDrTieOnlD3DO5SDFw/edit"
    }
   ]
  },
  "vocab": {
   "type": "vocab",
   "title": "Vocab",
   "terms": [
    {
     "term": "Narrative",
     "pos": "noun",
     "def": "A spoken or written account of connected events; a story."
    },
    {
     "term": "Arbitrary",
     "pos": "adjective",
     "def": "Based on random choice or personal whim, rather than any reason or system."
    },
    {
     "term": "Authentic",
     "pos": "adjective",
     "def": "Of undisputed origin; genuine."
    },
    {
     "term": "Nuanced",
     "pos": "adjective",
     "def": "Characterized by subtle shades of meaning or expression."
    },
    {
     "term": "Generic",
     "pos": "adjective",
     "def": "Lacking distinction; general."
    },
    {
     "term": "Trauma",
     "pos": "noun",
     "def": "A deeply distressing or disturbing experience."
    },
    {
     "term": "Embodying",
     "pos": "verb",
     "def": "Be an expression of or give a tangible or visible form to (an idea, quality, or feeling)."
    }
   ]
  },
  "animation-vocab": {
   "type": "vocab",
   "title": "Animation Vocab",
   "terms": [
    {
     "term": "Rigging",
     "def": "Adding animation data to Photoshop / Illustrator files so they can move in Adobe Character Animator."
    },
    {
     "term": "Puppet",
     "def": "A digital character created from layered files that can be rigged and animated."
    },
    {
     "term": "Rig Mode",
     "def": "The workspace for setting up a puppet's structure — handles, tags, sticks, and behaviors."
    },
    {
     "term": "Handles",
     "def": "Points that define where movement happens on a puppet."
    },
    {
     "term": "Sticks",
     "def": "Lines that create rigidity between handles, functioning like bones."
    },
    {
     "term": "Tags",
     "def": "Labels that identify body-part controls."
    },
    {
     "term": "Behaviors",
     "def": "Prebuilt animation controls that respond to input — Face, Dragger, Walk, Lip Sync."
    },
    {
     "term": "Dragger",
     "def": "A behavior that lets you click and drag puppet parts while animating."
    },
    {
     "term": "Hierarchy",
     "def": "The layer order that tells Character Animator how to organize puppet parts."
    },
    {
     "term": "Origin Point",
     "def": "The central pivot point for a layer's rotation or movement."
    },
    {
     "term": "Parent / Child Relationship",
     "def": "Rigging where child parts move in response to parent parts."
    },
    {
     "term": "Anchor Point",
     "def": "A fixed point that keeps puppet parts stationary."
    },
    {
     "term": "Trigger",
     "def": "A behavior that switches or reveals specific puppet parts."
    },
    {
     "term": "Physics Behavior",
     "def": "A setting that enables natural reactions to gravity or collisions."
    },
    {
     "term": "Calibration",
     "def": "Aligning the webcam and microphone for facial-expression and voice tracking."
    }
   ]
  }
 }
};
