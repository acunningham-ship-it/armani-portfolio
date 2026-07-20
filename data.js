window.SITE = {
 "nav": [
  {
   "slug": "home",
   "title": "Home"
  },
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
  },
  {
   "slug": "portfolio",
   "title": "Portfolio"
  },
  {
   "slug": "ace",
   "title": "ACE"
  },
  {
   "slug": "image-editing",
   "title": "Image Editing"
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
  "junior-mastery": {
   "type": "sections",
   "title": "Junior Mastery — Plane Dread",
   "slideshow": [
    "g-jm-slide-01.png",
    "g-jm-slide-02.png",
    "g-jm-slide-03.png",
    "g-jm-slide-04.png",
    "g-jm-slide-05.png",
    "g-jm-slide-06.png",
    "g-jm-slide-07.png",
    "g-jm-slide-08.png",
    "g-jm-slide-09.png",
    "g-jm-slide-10.png",
    "g-jm-slide-11.png",
    "g-jm-slide-12.png"
   ],
   "sections": [
    {
     "heading": "Plane Dread",
     "body": "Plane Dread is a horror game I built to fix a problem I kept running into — that so many horror games are pedestrian and copies of each other. The deck above walks through the whole build; the breakdown below goes week by week. By the numbers: 25 enemies, 100,000+ possible rounds, and a 25% win rate."
    },
    {
     "heading": "Research",
     "body": "This project wasn't really backed by research — it was more my own experiences and YouTube videos I'd picked up over the years. I find research limiting for me, so while I learned a lot here, I also learned I need to account for what's happening as I build and push myself to be more creative."
    },
    {
     "heading": "The Problem",
     "body": "The problem I set out to tackle was that so many games are copies of each other, especially in horror — like Poppy Playtime getting called the mascot-horror copy of Freddy Fazbear, or the thousands of Granny and Baldi clones that flooded the app store."
    },
    {
     "heading": "Week 1 — Building the Plane",
     "body": "Week 1 was developing the plane and nav-meshing the player and map. My first real problem was the nav mesh trying to spawn on the roof of the plane when I baked the floor. Box colliders went on every single chair so the player couldn't clip through them.",
     "images": [
      "g-junior-mastery-01.png",
      "g-junior-mastery-02.png",
      "g-junior-mastery-03.png",
      "g-junior-mastery-04.png"
     ]
    },
    {
     "heading": "Week 2 — The Puzzles",
     "body": "Week 2 was dedicated to the puzzles. The Breaker puzzle was inspired by the same puzzle from Doors, but I added the Puzzler enemy to make it more nerve-wracking than it should be, and rebuilt the breaker from scratch using Claude and MCP. The Cockpit is a puzzle where you turn dials to realign the plane's system settings."
    },
    {
     "heading": "Week 3 — The Enemies (the hardest part)",
     "body": "Week 3 was making the enemies, and it was really frustrating — a ton of bugs. Henry would sometimes stand the passengers up or contort their legs backwards, which gave away which passenger had become Henry. Puzzler went through several remodels (the first one looked like some Wizard of Oz thing), and Peeper had a bug where he'd spawn in invisibly and kill the player."
    },
    {
     "heading": "The Enemies",
     "body": "These are the enemies you can actually see during a round — the rest are abstract. Puzzler attacks during puzzles. Peeper makes you watch the bathroom door. Bloodhound stalks you throughout the plane. And Henry — you'd never notice he's there until it's too late."
    },
    {
     "heading": "AI Models I Used",
     "body": "Claude did a good 85% of the coding. Owl-Alpha, a free beta model in testing, did the rest. Deepseek helped me visualize the plan, and Tripo3D helped me model the enemy models I couldn't build myself in time."
    },
    {
     "heading": "Debugging",
     "body": "There were several bugs throughout, and the game still isn't fully finished. Decompression — an enemy that kills you if you stay near the front of the plane — would randomly kill you with no cue. And the oxygen system didn't work at first, so you'd eventually die near a mask during a pressure-drop round."
    },
    {
     "heading": "The End… for now",
     "body": "This game will be fully bug-fixed and updated in the future. Thanks for witnessing this junior mastery."
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
     "heading": "Final SkillShare Projects",
     "sub": "Fashion Glitch",
     "body": "This is the final glitch effect project following the tutorial linked below. I had to use various hue/saturation effects and a layer mask.",
     "note": "1 / 11",
     "images": [
      "g-digital-arts-1-01.jpg",
      "g-digital-arts-1-02.jpg",
      "g-digital-arts-1-03.png",
      "g-digital-arts-1-04.png",
      "g-digital-arts-1-05.jpg",
      "g-digital-arts-1-06.jpg",
      "g-digital-arts-1-07.png",
      "g-digital-arts-1-08.jpg",
      "g-digital-arts-1-09.jpg",
      "g-digital-arts-1-10.jpg",
      "g-digital-arts-1-11.png"
     ]
    },
    {
     "heading": "SkillShare Project 2",
     "sub": "Easily Make This Paper Cutout Style Graphic Using Adobe Photoshop's AI",
     "body": "Another tutorial — putting images into text through clip masking. I generated images with gemini and firefly, then used layers and clip masking to mask the images to text I clipped into shapes.",
     "note": "Double-click the gallery to see the process start to finish (1 / 4)",
     "images": [
      "g-digital-arts-1-12.jpg",
      "g-digital-arts-1-13.png",
      "g-digital-arts-1-14.png",
      "g-digital-arts-1-15.png"
     ]
    },
    {
     "heading": "Skillshare Project 1",
     "sub": "Photoshop Workflows — Movie Poster",
     "body": "I added the text at the top, got the cropping ready, and it was done. I learned more about cropping/selecting and using layers — I had to move the businessman's arm over the table layer but keep his body under it.",
     "note": "Double-click the gallery to see the process start to finish (1 / 3)",
     "images": [
      "g-digital-arts-1-16.png",
      "g-digital-arts-1-17.png",
      "g-digital-arts-1-18.png"
     ]
    },
    {
     "heading": "Inktober Work",
     "sub": "Halloween String Lights",
     "body": "Inktober is a yearly event for artists each Halloween, with a daily black-and-white prompt. Prompts include Award, Vacant, Lesson, Skeletal, Onion, Rowdy, Firefly, Button, Blast and more.",
     "images": [
      "g-digital-arts-1-19.jpg",
      "g-digital-arts-1-20.png",
      "g-digital-arts-1-21.jpg",
      "g-digital-arts-1-22.jpg",
      "g-digital-arts-1-23.jpg",
      "g-digital-arts-1-24.jpg",
      "g-digital-arts-1-25.jpg",
      "g-digital-arts-1-26.jpg",
      "g-digital-arts-1-27.png",
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
      "g-digital-arts-1-40.png",
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
      "g-digital-arts-2-01.png",
      "g-digital-arts-2-02.png",
      "g-digital-arts-2-03.png",
      "g-digital-arts-2-04.png"
     ]
    },
    {
     "heading": "Adobe Express Animation",
     "body": "For my animation video in Adobe Express I used T's as the border with a bouncing effect — it represented my brand idea well with the purple, white and black.",
     "video": "express-animation.mp4",
     "images": []
    },
    {
     "heading": "Typography Challenge",
     "note": "1 / 2",
     "images": [
      "g-digital-arts-2-05.jpg",
      "g-digital-arts-2-06.png"
     ]
    },
    {
     "heading": "Famous Quote Typography",
     "body": "I chose the quote \"So many books, so little time.\" I made \"many\" bigger and \"little\" smaller to show their importance, and added B's on the side like book binding to fill the empty space. The simple, empty look makes it better.",
     "images": [
      "famous-quote.png",
      "g-digital-arts-2-07.png"
     ]
    },
    {
     "heading": "Typography Album Poster",
     "body": "A CD cover for the band Living Tombstone and the FNAF songs they make. Green and orange for their logo, plus the animatronics' colors for the FNAF text. I layered T's around the corner for structure.",
     "images": [
      "album-poster.png",
      "g-digital-arts-2-08.png"
     ]
    },
    {
     "heading": "Infographic Understanding",
     "body": "Creating a brand involves identity, presence, consistency, and uniqueness — consistent colors, fonts and images across your branding, relevant to you. Don't build a fake persona that's different from your real self, and don't copy others; have your own unique brand even in the same niche.",
     "note": "1 / 2",
     "images": [
      "g-digital-arts-2-09.png",
      "g-digital-arts-2-10.png"
     ]
    },
    {
     "heading": "Creating My Brand",
     "note": "A little about me! (1 / 4)",
     "images": [
      "g-digital-arts-2-11.png",
      "g-digital-arts-2-12.png",
      "g-digital-arts-2-13.png",
      "g-digital-arts-2-14.png"
     ]
    }
   ]
  },
  "portfolio": {
   "type": "text",
   "title": "My Portfolio",
   "body": "Portfolio coming soon — see my work on the <a href='#/digital-arts-1'>Digital Arts</a> and <a href='#/ace'>ACE</a> pages.",
   "images": [
    "portfolio-construction.png"
   ]
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
        "g-ace-08.png"
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
        "my-art-statefair.png"
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
        "cert-photoshop.png"
       ]
      },
      {
       "heading": "Adobe Animate Certification",
       "body": "I am officially certified in Adobe Animate! I'll retake it every 3 years. It was challenging and tough to remember some tool locations, but I pulled through. (Verify via the steps on the bottom-left of the certificate.)",
       "images": [
        "cert-animate.png"
       ]
      },
      {
       "heading": "Adobe Premiere Pro — Digital Video",
       "body": "Adobe Certified Professional in Digital Video Using Adobe Premiere Pro (earned December 19, 2025). Verify it with the code on the bottom-left of the certificate.",
       "images": [
        "cert-premiere.png"
       ]
      },
      {
       "heading": "Adobe InDesign — Print & Digital Media Publication",
       "body": "Adobe Certified Professional in Print & Digital Media Publication Using Adobe InDesign (earned January 9, 2026). Verify it with the code on the certificate.",
       "images": [
        "cert-indesign.png"
       ]
      },
      {
       "heading": "Adobe Express — Content Creation & Marketing",
       "body": "Adobe Certified Professional in Content Creation and Marketing Using Adobe Express (earned May 27, 2026).",
       "images": [
        "cert-express.png"
       ]
      },
      {
       "heading": "Visual Design Certification",
       "body": "Adobe Certified Professional in Visual Design (earned January 9, 2026).",
       "images": [
        "cert-visual-design.png"
       ]
      },
      {
       "heading": "Video Design Certification",
       "body": "Adobe Certified Professional in Video Design (earned December 19, 2025).",
       "images": [
        "cert-video-design.png"
       ]
      },
      {
       "heading": "Marketing Design Certification",
       "body": "Adobe Certified Professional in Marketing Design (earned May 27, 2026).",
       "images": [
        "cert-marketing-design.png"
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
        "cert-dm2.png"
       ]
      },
      {
       "heading": "Digital Media 1 Certification",
       "body": "Certified in Digital Media 1 (passed 12/12/25). Standards: Design Process · Color Theory · Typography · Vector Graphics · Raster Images · Project Management · Careers & Employability.",
       "images": [
        "cert-dm1.png"
       ]
      }
     ]
    }
   ]
  },
  "image-editing": {
   "type": "sections",
   "title": "Image Editing 1",
   "sections": [
    {
     "heading": "Image Editing 1",
     "body": "This is all my work from my 24-25 image editing class!",
     "images": [
      "g-image-editing-01.jpg"
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
