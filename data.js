// BrightPath Learn — Module + learner data (BrightPath Claude Training Series)
// All "Pioneer" references rebranded to "BrightPath" while preserving original content.

window.BP_MODULES = [
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "m01",
    code: "BP-001",
    title: "The Reason for Claude",
    subtitle: "Why AI matters for BrightPath — and for the people we serve",
    duration: "20 min",
    category: "Foundations",
    description: "Why Claude — and why now. How AI helps BrightPath deliver better, faster, more person-centered care and services.",
    slides: [
      { type: "cover", eyebrow: "Module 01 · Foundations", title: "The Reason for Claude", subtitle: "Empowering our team to better serve the people we support.", body: "BrightPath exists to give individuals the freedom to pursue joy. Claude helps our team do that work better — every single day." },
      { type: "content", title: "Who We Are", body: "BrightPath is a team of dedicated professionals committed to providing person-centered, data-driven services to people with adversities.\n\nWe were established to enable individuals the freedom to pursue joy by providing quality home and community-based services for vulnerable adults, minors, and individuals with adversities.\n\nOur qualified staff embrace, support, and honor each person's individuality — emphasizing self-determination so each individual we support can maximize their independence." },
      { type: "pillars", title: "How Claude directly supports BrightPath's mission", items: [
        { k: "More time with people", v: "Automating documentation, scheduling, and reporting frees staff to focus on direct care — not paperwork." },
        { k: "Better documentation", v: "Claude helps write accurate, timely service notes — improving compliance and individual outcomes." },
        { k: "Faster information", v: "Staff can instantly surface answers about policies, plans, and resources — without waiting." },
        { k: "Stronger team support", v: "Training, onboarding, and communication become faster and more consistent across the organization." },
      ]},
      { type: "content", title: "The AI Imperative — We Are Here", body: "Agentic AI is no longer emerging — it is here. Organizations that embrace it now will serve their communities better, operate more efficiently, and attract stronger talent.\n\nBrightPath's commitment to person-centered, data-driven care makes us exactly the kind of organization that benefits most from AI tools. Claude helps us live our values at scale." },
      { type: "pillars", title: "What Claude brings to BrightPath", items: [
        { k: "Tool Integrations", v: "Claude works inside the apps your team already uses — Google Chat, Gmail, Google Docs, Google Sheets, and more." },
        { k: "Automations", v: "Repetitive tasks — recurring reports, routine messages, documentation drafts — handled automatically." },
        { k: "App-Building", v: "Build lightweight internal tools just by describing them — no developers needed." },
      ]},
      { type: "list", title: "BrightPath's Internal Transformation Pillars", items: [
        "Company-Wide Claude Adoption — every BrightPath team member uses Claude as a daily work tool.",
        "Smarter Documentation — Claude-assisted service notes, incident reports, and care plans.",
        "Agentic Workflow Maturity — intelligent scheduling, automated reporting, AI-assisted care coordination.",
        "Staff Training & Enablement — this very program. Build capability across the whole team.",
        "Custom Internal Tools — lightweight apps tailored to BrightPath's specific workflows.",
      ]},
      { type: "quote", quote: "We embrace, support, and honor each person's individuality. Claude helps us do that with more time, more accuracy, and more heart.", attrib: "BrightPath" },
      { type: "outro", title: "Ready for your knowledge check?", body: "Five questions on BrightPath's mission, how Claude supports it, and our transformation pillars." },
    ],
    quiz: [
      { q: "BrightPath's mission is to:", choices: [
        "Operate the largest home-care agency in Minnesota.",
        "Enable individuals the freedom to pursue joy through quality home and community-based services.",
        "Provide temporary crisis support only.",
        "Train AI systems for healthcare.",
      ], answer: 1 },
      { q: "How does Claude most directly support BrightPath's direct-care staff?", choices: [
        "By replacing case managers.",
        "By automating documentation and reporting so staff can spend more time with the people they support.",
        "By making clinical decisions.",
        "By managing billing only.",
      ], answer: 1 },
      { q: "Which is NOT one of the ways Claude benefits BrightPath?", choices: [
        "Faster, more accurate documentation.",
        "More time for staff to focus on direct care.",
        "Replacing the need for qualified human staff.",
        "Stronger internal training and communication.",
      ], answer: 2 },
      { q: "Scenario — A team member asks why BrightPath is investing in AI. The most accurate answer is:", choices: [
        "It's a cost-cutting measure.",
        "Claude helps BrightPath deliver more person-centered, efficient, and consistent care — living our values at scale.",
        "AI is required by our funders.",
        "To replace paper documentation only.",
      ], answer: 1 },
      { q: "Which is a BrightPath Internal Transformation Pillar?", choices: [
        "AI Maturity Assessments for clients",
        "Company-Wide Claude Adoption — every team member uses Claude daily",
        "Replacing staff with automation",
        "Launching a separate AI consulting division",
      ], answer: 1 },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "m02",
    code: "BP-101",
    title: "Navigating the Interface",
    subtitle: "Home screen, chats, projects, and history",
    duration: "20 min",
    category: "Getting Started",
    description: "Tour Claude's interface: conversations, model selector, file uploads, projects, and search.",
    slides: [
      { type: "cover", eyebrow: "Module 02 · Getting Started", title: "Navigating the Interface", subtitle: "Before you can work fast, you need to know where everything lives.", body: "In this module, I'm going to walk you through the Claude interface from top to bottom. By the end, you'll be able to start a conversation, attach a file, use Projects to stay organized, and find any past chat in seconds. Let's get oriented." },
      { type: "pillars", title: "Six things to find on your first day", items: [
        { k: "① Conversation history", v: "Every chat you've ever had with Claude lives in the left sidebar. Click any one to pick up where you left off." },
        { k: "② Change chat model", v: "The model selector sits at the bottom of your message input — the 'Sonnet 4.6' button. We'll cover which to choose in Module 03." },
        { k: "③ Files & more", v: "The + button lets you attach documents, images, spreadsheets, or code. Drag-and-drop works too." },
        { k: "④ Chat ↔ Cowork", v: "Two very different modes at the top of the sidebar. Chat is for conversation; Cowork is for multi-step tasks. Module 10 dives deep." },
        { k: "⑤ Connectors & skills", v: "Under Customize — this is where you link Claude to Google Chat, Gmail, Monday, and more (Modules 05 & 08)." },
        { k: "⑥ Settings", v: "Click your account name in the bottom-left footer to access settings, usage, and preferences." },
      ]},
      { type: "steps", title: "Starting your first conversation — three things to do", items: [
        { h: "Step 1 — Hit New Chat", b: "Click 'New Chat' in the top-left sidebar or press Ctrl+N. Every conversation starts here. Pro tip: rename it right away so you can find it later." },
        { h: "Step 2 — Pick your model", b: "See that model selector at the bottom of the input? That controls which version of Claude you get. We'll walk through model selection properly in Module 03 — for now, Sonnet is your safe default." },
        { h: "Step 3 — Know when to use Extended Thinking", b: "If you see this option, use it only for genuinely complex analytical tasks — it costs significantly more. Don't burn your allowance on a simple draft." },
      ]},
      { type: "content", title: "Uploading Files & Documents", body: "Claude can read and analyze documents you share. Two ways to attach:\n\n• Paperclip icon — click the attachment icon in the message bar to browse files.\n• Drag and drop — drop files directly into the conversation window.\n\nSupported: PDFs, Word, Excel, images, CSVs, code, plain text. Smaller files are easier for Claude to analyze. You can also paste content directly." },
      { type: "content", title: "Projects — your single most powerful organizational tool", body: "Here's something I want you to internalize early: Projects are not just folders. They are intelligent workspaces where Claude retains memory across every conversation inside them.\n\nThink of each Project as a dedicated workspace — one per client, engagement, or workstream.\n\nWhat that means in practice:\n• Add project knowledge — drop in your brand guide, SOW template, or client background. Claude reads it once and applies it every time.\n• Set custom instructions — define the tone, terminology, and rules for this work. Set it once. Never repeat yourself.\n• Group related conversations — no more hunting through hundreds of chats for that one thread about a specific client." },
      { type: "list", title: "Conversation History & Search", items: [
        "Search — find conversations by keyword from the sidebar.",
        "Rename — right-click any conversation to rename it for later.",
        "Continue anytime — click any past chat to pick up where you left off.",
        "Organize — sort chats into Projects to keep things tidy.",
      ]},
      { type: "outro", title: "Knowledge check next", body: "Five questions on the interface, projects, and history." },
    ],
    quiz: [
      { q: "How do you start a fresh conversation?", choices: [
        "Refresh the page.",
        "Click \"New Chat\" in the sidebar (or use Ctrl+N).",
        "Email support.",
        "Open a new browser tab.",
      ], answer: 1 },
      { q: "Which is true about Projects?", choices: [
        "They are temporary chat windows.",
        "They give Claude persistent context across related conversations.",
        "They replace the chat model.",
        "They are only for engineering teams.",
      ], answer: 1 },
      { q: "Scenario — You need Claude to remember your client's tone and terminology across many chats. Best move:", choices: [
        "Paste the same context into every chat.",
        "Create a Project, add knowledge and custom instructions, run related chats there.",
        "Email Claude the brand guide.",
        "Use Extended Thinking.",
      ], answer: 1 },
      { q: "When should you use \"Extended Thinking\"?", choices: [
        "Every chat — it's free.",
        "Never — it's broken.",
        "Sparingly, for extremely demanding tasks (it increases cost).",
        "Only for short replies.",
      ], answer: 2 },
      { q: "Which file behavior is correct?", choices: [
        "Claude can't read PDFs.",
        "You can attach via paperclip OR drag and drop; smaller files work better.",
        "Drag and drop is disabled.",
        "Excel is unsupported.",
      ], answer: 1 },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "m03",
    code: "BP-102",
    title: "Working Effectively with Claude",
    subtitle: "Prompt engineering & giving the right context",
    duration: "25 min",
    category: "Getting Started",
    description: "Why prompts matter, four principles for great ones, and how to give Claude the context it needs.",
    slides: [
      { type: "cover", eyebrow: "Module 03 · Getting Started", title: "Working Effectively with Claude", subtitle: "The difference between a mediocre tool and a superpower is how you ask.", body: "I'm going to be direct with you: most people using AI tools are getting maybe 20% of what they could. This module teaches you the two skills that separate power users from everyone else — how to write prompts that get exactly what you need, and how to give Claude the context to make it happen." },
      { type: "content", title: "Why this matters", body: "Claude is powerful, but the quality of its output depends entirely on what you give it. A clear, well-structured prompt gets exactly what you need.\n\nThis training covers two core skills:\n• Prompt Engineering — how to write prompts that get high-quality results.\n• Context — why giving Claude the right background information matters." },
      { type: "content", title: "A mental model that changes everything", body: "I want you to stop thinking of Claude as a search engine and start thinking of it as a brilliant colleague who just joined the team today.\n\nThey're extraordinarily capable. They read fast, write well, analyze deeply, and never complain. But — and this is critical — they have no idea who your clients are, what 'good' looks like to your team, or what format your deliverables take.\n\nYour job is to be a great manager: give clear instructions, share relevant context, define the output you need. The better you brief them, the better the work. This isn't a limitation — it's actually empowering, because you stay in control." },
      { type: "pillars", title: "Four principles I teach every team I train", items: [
        { k: "Be specific", v: "Vague in, vague out. Define your audience, the tone you need, the length, and the format. The more precise you are, the less back-and-forth." },
        { k: "Give it a role", v: "Start with: 'You are a [role].' This isn't fluff — it fundamentally shapes how Claude frames its thinking and vocabulary. A senior consultant sounds very different from a junior analyst." },
        { k: "Break it down", v: "If a task has five steps, give Claude five steps — not one long run-on request. Complex mega-prompts almost always produce mediocre results." },
        { k: "Show examples", v: "Nothing teaches Claude what 'great' looks like faster than a real example. Paste in a sample of output you love and say 'write in this style.' You'll be amazed." },
      ]},
      { type: "quote", quote: "Add \"Ask clarifying questions before beginning\" to any prompt to help Claude fill in the gaps.", attrib: "Power-move tip" },
      { type: "content", title: "Context is Everything", body: "Claude doesn't have access to your files, emails, or project history unless you share them. The more relevant context, the more tailored the response.\n\n• Add files or photos.\n• Organize multi-chat work into Projects to retain context.\n\nPro tip: nearly any file type works. Smaller files work better." },
      { type: "twocol", title: "Good vs. Great Prompts",
        left: { h: "Before", items: [
          "\"Write me a summary of this project.\"",
          "Vague. No audience. No format. No context. Claude has to guess.",
        ]},
        right: { h: "After", items: [
          "\"You are a management consultant. Summarize the attached project status report for our client's VP of Operations. Under 200 words. Focus on milestones, risks, next steps. Professional but approachable.\"",
          "Includes role, audience, format, length, focus, tone, example.",
        ]},
      },
      { type: "list", title: "Quick Reference", items: [
        "Start with: \"You are a [role]. I need you to [task] for [audience].\"",
        "Add context: paste in relevant docs, data, or background.",
        "Set constraints: length, tone, format, focus.",
        "Show examples: \"Here's what good looks like…\"",
        "Power move: add \"Ask clarifying questions before beginning.\"",
      ]},
      { type: "outro", title: "Knowledge check next", body: "Five questions on prompts and context." },
    ],
    quiz: [
      { q: "Which is NOT one of the Four Principles for Better Prompts?", choices: [
        "Be specific", "Give it a role", "Use the longest model", "Show examples",
      ], answer: 2 },
      { q: "The \"power move\" tip is to add:", choices: [
        "\"Be fast.\"",
        "\"Ask clarifying questions before beginning.\"",
        "\"Use bullet points only.\"",
        "\"Translate to English.\"",
      ], answer: 1 },
      { q: "Scenario — You ask: \"Write me a summary of this project.\" The result is generic. Best fix:", choices: [
        "Send the prompt again.",
        "Add role, audience, length, tone, and the actual project doc.",
        "Switch to a smaller model.",
        "Open a new chat.",
      ], answer: 1 },
      { q: "Why does context matter?", choices: [
        "Claude has live access to all your files by default.",
        "Claude only has the context you share — more relevant context = more tailored output.",
        "Claude is trained on your emails.",
        "Context doesn't affect output.",
      ], answer: 1 },
      { q: "Which is the most useful framing for Claude?", choices: [
        "\"Do something good.\"",
        "\"You are a [role]. I need you to [task] for [audience].\"",
        "\"Be creative.\"",
        "\"Generate output.\"",
      ], answer: 1 },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "m04",
    code: "BP-201",
    title: "Claude for Docs, Slides & Sheets",
    subtitle: "Side-by-side with Google Workspace",
    duration: "20 min",
    category: "Apps & Extensions",
    description: "Install the Claude extensions for Google Workspace and work on files directly inside Google Docs, Slides, and Sheets.",
    slides: [
      { type: "cover", eyebrow: "Module 04 · Apps & Extensions", title: "Claude for Docs, Slides & Sheets", subtitle: "Stop copy-pasting. Work where the file already is.", body: "One of the most common frustrations I hear from teams is the back-and-forth: copy text from Google Docs, paste into Claude, copy the response, paste it back. This module ends that. The Google Workspace extensions put Claude directly inside Google Docs, Slides, and Sheets — so you work on the file, not around it." },
      { type: "content", title: "Why this changes the game", body: "When Claude lives inside the file, two things happen that feel almost magical at first:\n\nFirst, you stop context-switching. Your document stays open; Claude stays open. You never have to copy-paste between windows again.\n\nSecond — and this is the part that surprises people — Claude can see what you have selected. If you highlight a paragraph and ask Claude to rewrite it, Claude knows exactly what you're talking about. No copying. No explaining. It just works.\n\nThis is how Claude should feel in your daily work: present, aware, and immediately useful." },
      { type: "steps", title: "Downloading the extensions", items: [
        { h: "Find the extension", b: "Look in the Google Workspace section on the downloads page." },
        { h: "Install", b: "Hit install on the extension you'd like to add. The installer for that app opens." },
        { h: "Log in", b: "After installing, log in. If prompted for a verification code, check your inbox — it can take up to 5 minutes." },
      ]},
      { type: "content", title: "Using the Extensions", body: "Find the Claude extension from the Extensions menu inside Google Docs, Slides, or Sheets.\n\nIn apps like Google Slides, Claude can see what you have selected — which helps guide its actions.\n\nAsk Claude to help revise, add content, or pull data from your Connectors (Module 05)." },
      { type: "callout", title: "Power up with settings", body: "Some extensions have settings — configure additional instructions for Claude to follow. Treat these as your house style and Claude will match it every time." },
      { type: "outro", title: "Knowledge check next", body: "Five questions on the Office extensions." },
    ],
    quiz: [
      { q: "Where do you find the Claude extension inside Google Docs or Slides after installing?", choices: [
        "Under the \"View\" tab", "From the Extensions menu", "It opens automatically as a popup", "In the Windows tray",
      ], answer: 1 },
      { q: "Why use extensions instead of the Claude app?", choices: [
        "They're cheaper.",
        "They let you work side-by-side on a file in Google Docs/Slides/Sheets without bouncing through the Claude app.",
        "They're required for all tasks.",
        "They replace your Google Workspace license.",
      ], answer: 1 },
      { q: "Scenario — You install the extension and it asks for a verification code. You should:", choices: [
        "Reinstall.",
        "Check your inbox — the code can take up to 5 minutes.",
        "Skip the step.",
        "Use a coworker's code.",
      ], answer: 1 },
      { q: "In Google Slides, what helps Claude give relevant actions?", choices: [
        "Closing all other windows",
        "Knowing what you have selected on the slide",
        "Disabling Connectors",
        "Using the smallest model",
      ], answer: 1 },
      { q: "Which is TRUE about extension settings?", choices: [
        "All extensions are configured identically.",
        "Some extensions have settings where you can configure additional instructions for Claude.",
        "Settings can't be changed.",
        "Settings are only for admins.",
      ], answer: 1 },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "m05",
    code: "BP-202",
    title: "Claude Connectors",
    subtitle: "Linking Claude to the tools you already use",
    duration: "25 min",
    category: "Apps & Extensions",
    description: "Enable Connectors to let Claude pull info, send messages, or take actions in tools like Google Chat, Gmail, and Monday.com.",
    slides: [
      { type: "cover", eyebrow: "Module 05 · Apps & Extensions", title: "Claude Connectors", subtitle: "One conversation. Every tool you use.", body: "What if you could ask Claude: 'What tasks do I have due in Monday this week, and are there any related emails in Gmail I should respond to?' — and get a real answer, instantly?\n\nThat's exactly what Connectors make possible. In this module, I'll show you which connectors are available, how to enable them in under two minutes, and how to start using them today." },
      { type: "content", title: "What Connectors actually do — and why they matter", body: "Most AI tools sit in isolation. You give them text; they give you text back. Connectors break that wall.\n\nWith Connectors enabled, Claude can reach into your tools and pull real information:\n\n• 'Summarize my unread emails from today' — Claude reads your Gmail inbox.\n• 'What's on my Monday board for the Henderson project?' — Claude queries your Monday workspace.\n• 'Find the Brand Guidelines doc in Google Drive' — Claude searches your Google Drive.\n\nThink of it as giving Claude real eyes and hands in the tools where your work actually lives. This is where AI stops being a writing assistant and starts being a genuine work partner." },
      { type: "twocol", title: "Currently Available Connectors",
        left: { h: "All Team Members", items: [
          "Google Workspace", "Canva", "Monday.com",
          "tldraw", "Claude in Chrome", "Mermaid Chart",
        ]},
        right: { h: "Leadership (Additional)", items: [
          "HubSpot", "NetSuite", "Need something else? Contact the BrightPath DA team — custom connectors may be possible.",
        ]},
      },
      { type: "steps", title: "Step 0 — Enable Your Connectors", items: [
        { h: "Open Connectors", b: "In the Customize → Connectors panel, find the tool you want to use." },
        { h: "Sign in", b: "You'll be prompted to sign in with your account the first time." },
        { h: "Set once", b: "Once enabled, the connector stays on for future conversations." },
      ]},
      { type: "steps", title: "Start using them", items: [
        { h: "Step 1 · Start chatting", b: "Open Claude Desktop, click \"New Chat,\" type your message." },
        { h: "Step 2 · Find the menu", b: "Click the '+' icon in the bottom-left to open the connectors panel. Keep available connectors enabled." },
        { h: "Step 3 · Use it in chat", b: "Just type naturally — Claude uses the connector automatically when relevant." },
      ]},
      { type: "list", title: "Try asking", items: [
        "\"Start a Monday board in [workspace] to track an upcoming project.\"",
        "\"What's on my calendar this week?\"",
        "\"Find the Google Drive doc on Brand Guidelines.\"",
        "Claude will let you know if it needs permission or if a connector isn't active.",
      ]},
      { type: "outro", title: "Knowledge check next", body: "Five questions on Connectors." },
    ],
    quiz: [
      { q: "What do Connectors let Claude do?", choices: [
        "Generate images only",
        "Link to tools like Google Chat, Gmail, Monday — pull info or take actions from one chat window",
        "Run a separate desktop app",
        "Replace your password manager",
      ], answer: 1 },
      { q: "Scenario — You want Claude to check your Monday tasks but the connector isn't on. Best step:", choices: [
        "Give up.",
        "Open Customize → Connectors, enable it, sign in once. It stays on after.",
        "Email the DA team for every chat.",
        "Switch to a different model.",
      ], answer: 1 },
      { q: "Which connector is restricted to Leadership?", choices: [
        "Google Workspace", "Canva", "HubSpot", "tldraw",
      ], answer: 2 },
      { q: "How do you invoke a connector once it's enabled?", choices: [
        "Type a special hex code.",
        "Just ask naturally — Claude uses it automatically when relevant.",
        "Open the connector's website first.",
        "Restart your laptop.",
      ], answer: 1 },
      { q: "Where do you open the Connectors panel during a chat?", choices: [
        "Top-right gear icon",
        "Click the '+' icon in the bottom-left of the chat window",
        "From the OS taskbar",
        "Inside your email client",
      ], answer: 1 },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "m06",
    code: "BP-203",
    title: "Using Claude Design",
    subtitle: "Slide decks and prototypes, fast",
    duration: "20 min",
    category: "Apps & Extensions",
    description: "A web-based tool for building slide decks (and prototypes) with the BrightPath Design System.",
    slides: [
      { type: "cover", eyebrow: "Module 06 · Apps & Extensions", title: "Using Claude Design", subtitle: "From rough notes to a polished deck — in one conversation.", body: "Every team has that person who's great at content but dreads building slides. Claude Design changes that equation entirely.\n\nIn this module, I'll walk you through creating a BrightPath-branded slide deck from scratch using Claude Design — no PowerPoint anxiety required. You describe what you need; Claude builds the first draft; you refine it together." },
      { type: "content", title: "What is Claude Design?", body: "Claude Design is a web-based tool specifically made for building slide decks and prototypes.\n\nVisit and bookmark Claude Design — log in with your same Claude account." },
      { type: "steps", title: "Getting Started", items: [
        { h: "Select \"Slide deck\"", b: "Choose the slide deck output." },
        { h: "Enter a project name", b: "Pick a name that maps to your engagement or topic." },
        { h: "Select \"BrightPath Design System\"", b: "A continuously updating set of brand standards that guide Claude's behavior. For client work, ask the DA team to create new design systems." },
        { h: "Click \"Create\"", b: "Your project opens." },
      ]},
      { type: "content", title: "Working in Design", body: "Design is similar to PowerPoint.\n\n• Create by typing in the chat window — add context (upload files, link other Design projects).\n• Click \"Edit\" in the top right to make your own changes. Don't make Claude do things you can do quickly yourself.\n• Share projects with teammates to collaborate, or present straight from the app.\n• Export via the \"Share\" button when needed." },
      { type: "callout", title: "Rule of thumb", body: "Don't make Claude do things you can do quickly yourself. A 2-second text edit is faster than a 30-second prompt." },
      { type: "outro", title: "Knowledge check next", body: "Five questions on Claude Design." },
    ],
    quiz: [
      { q: "Claude Design is primarily made for:", choices: [
        "Email", "Slide decks and prototypes", "Spreadsheets", "Video editing",
      ], answer: 1 },
      { q: "Which design system should you select for BrightPath-branded decks?", choices: [
        "Generic Slides", "BrightPath Design System", "Default", "Google Workspace",
      ], answer: 1 },
      { q: "Scenario — You need a 2-word typo fixed on a slide. Best move:", choices: [
        "Prompt Claude to rewrite the deck.",
        "Click \"Edit\" and change it yourself.",
        "Create a new project.",
        "Export to PowerPoint first.",
      ], answer: 1 },
      { q: "How do you collaborate with a teammate on a Design project?", choices: [
        "Email screenshots.",
        "Share the project from inside the app.",
        "Print and scan.",
        "You can't collaborate.",
      ], answer: 1 },
      { q: "Where do you log in to Claude Design?", choices: [
        "A separate account",
        "Your same Claude account",
        "Google Workspace only",
        "Anonymous access",
      ], answer: 1 },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "m07",
    code: "BP-204",
    title: "Managing Your Claude Allowance",
    subtitle: "Use it wisely — it resets weekly",
    duration: "15 min",
    category: "Apps & Extensions",
    description: "Check usage, understand what depletes it, and learn tips to stay within your weekly allowance.",
    slides: [
      { type: "cover", eyebrow: "Module 07 · Apps & Extensions", title: "Managing Your Claude Allowance", subtitle: "Work smarter, not heavier — your allowance is a tool, not a ceiling.", body: "Every BrightPath team member has a weekly Claude usage budget. I've seen people burn through it in two days and wonder why — and I've seen others accomplish twice as much with half the usage.\n\nThis module teaches you how to check where you stand, what eats your budget, and five habits that make your allowance go dramatically further." },
      { type: "content", title: "Understanding your allowance — what it is and why it exists", body: "Your Claude allowance resets every week and applies across Claude Desktop, claude.ai, and Claude Code combined.\n\nHere's something most people don't realize at first: both directions count. Every message you send costs allowance. Every response Claude generates costs allowance. Longer conversations cost more than short ones. Heavier models (Opus) cost far more than lighter ones (Haiku).\n\nAnthropics sets these limits to manage infrastructure fairly across all users. Think of it exactly like a data plan on your phone — not a punishment, just a reality to work with strategically." },
      { type: "steps", title: "How to Check Your Usage", items: [
        { h: "Open Settings", b: "Go to Settings → Usage." },
        { h: "Review progress bars", b: "See your current session usage and weekly limits." },
        { h: "Check back anytime", b: "Track how much allowance you have remaining." },
      ]},
      { type: "list", title: "What Depletes Your Usage", items: [
        "Your input — longer messages, file uploads, and images all cost more.",
        "Claude's output — longer, more complex responses use more.",
        "Model choice — Opus uses the most, Haiku the least.",
        "Tool usage — connectors, web search, and Cowork tasks are more intensive.",
        "Conversation length — longer chats accumulate more usage.",
      ]},
      { type: "list", title: "Tips to Control Your Usage", items: [
        "Skip unnecessary file uploads — avoid attaching things Claude doesn't need.",
        "Make small edits yourself — don't ask Claude to fix a typo.",
        "Switch to a lighter model — Haiku or Sonnet for simple tasks.",
        "Batch related questions — combine asks into one message.",
        "Be specific upfront — clear instructions reduce back-and-forth.",
      ]},
      { type: "callout", title: "Need more?", body: "Requesting extra usage goes through Brandon and is reviewed case-by-case. Approval isn't guaranteed — use the tips first. The admin team is adding org-wide settings to help Claude use less by default." },
      { type: "outro", title: "Knowledge check next", body: "Five questions on usage." },
    ],
    quiz: [
      { q: "Your Claude allowance resets:", choices: [
        "Daily", "Weekly", "Monthly", "Never",
      ], answer: 1 },
      { q: "Which model typically uses the most allowance?", choices: [
        "Haiku", "Sonnet", "Opus", "Mini",
      ], answer: 2 },
      { q: "Scenario — You're running low on allowance and need to fix a one-line typo. Best move:", choices: [
        "Ask Claude to fix it.",
        "Fix it yourself — don't burn allowance on tiny edits.",
        "Wait for next week.",
        "Switch to Opus.",
      ], answer: 1 },
      { q: "Which is NOT a tip to control usage?", choices: [
        "Skip unnecessary file uploads.",
        "Always use the heaviest model.",
        "Batch related questions.",
        "Be specific upfront.",
      ], answer: 1 },
      { q: "Where do you check your usage?", choices: [
        "Settings → Usage",
        "Connectors panel",
        "The Cowork tab",
        "Inbox",
      ], answer: 0 },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "m08",
    code: "BP-301",
    title: "Claude Skills",
    subtitle: "Pre-built playbooks for our team's workflows",
    duration: "20 min",
    category: "Advanced",
    description: "Skills guide Claude through specific tasks step-by-step. Discover available skills and how to request new ones.",
    slides: [
      { type: "cover", eyebrow: "Module 08 · Advanced", title: "Claude Skills", subtitle: "Expert playbooks — built for exactly how BrightPath works.", body: "By now you know Claude is powerful. Skills make it specific.\n\nWithout a Skill, Claude gives you a capable general answer. With a Skill, Claude follows a proven step-by-step process built for your team's tools, formats, and workflows.\n\nIn this module I'll show you every Skill available to you today, how to invoke them, and what the process looks like to request a new one." },
      { type: "content", title: "What makes a Skill different from a regular prompt?", body: "Imagine you hired the best SOW writer in the business and asked them to document exactly how they work — every question they ask, every format they follow, every quality check they run. Then you gave that process to Claude.\n\nThat's a Skill.\n\nWhen you invoke a Skill, Claude doesn't guess. It follows a specific, tested workflow our team designed for exactly that job. It asks the right clarifying questions. It connects to the right tools (Google Drive, Monday, Gmail) automatically. It produces output in the format we actually use.\n\nThe difference shows immediately. Compare asking Claude to 'write me a Statement of Work' versus invoking /draft-sow. The Skill version is in a different league." },
      { type: "twocol", title: "How to use a skill",
        left: { h: "Option 1 — Claude picks", items: [
          "Just describe your task naturally.",
          "If a matching skill exists, Claude detects and uses it automatically.",
        ]},
        right: { h: "Option 2 — Invoke manually", items: [
          "Type a slash command (e.g., /sow-writer) in your chat.",
          "Triggers a specific skill directly.",
        ]},
      },
      { type: "list", title: "Your Available Skills (as of 4/20/2026)", items: [
        "SOW Writer (/draft-sow) — drafts Statements of Work; reviews for scope creep & legal insights.",
        "PowerPoint Creator (/brightpath-pptx) — builds branded slide decks from your content.",
        "PTO Return Refresher (/pto-refresher) — catches you up on what you missed while out.",
        "Claude Artifact Creator (/brightpath-artifact-creator) — interactive web components with the BrightPath look.",
        "Process Diagram Creator (/diagram-creator) — workflow diagrams from your description.",
        "Monday Board Maker (/monday-board) — sets up Monday.com boards from project requirements.",
        "To-Do List (/to-do-list) — scans Gmail, Monday, Google Chat and arranges tasks by calendar.",
      ]},
      { type: "list", title: "Tips for getting the most out of skills", items: [
        "Be specific — the more detail, the better the output.",
        "Review the output — skills give great starting points, but always check before sending.",
        "Give feedback — if a skill could work better, tell the DA team.",
      ]},
      { type: "steps", title: "Requesting a new skill", items: [
        { h: "Message the DA team", b: "Tell us what you need Claude to do." },
        { h: "Review session", b: "We'll meet to scope the task, expected output, and tools involved." },
        { h: "Build & publish", b: "DA builds and tests with you. Once published, it's available to everyone." },
      ]},
      { type: "outro", title: "Knowledge check next", body: "Five questions on Skills." },
    ],
    quiz: [
      { q: "A Skill is:", choices: [
        "A new chat model.",
        "A pre-built instruction set that guides Claude through a specific task step-by-step.",
        "A keyboard shortcut.",
        "A pricing tier.",
      ], answer: 1 },
      { q: "Scenario — You want to draft a Statement of Work. Best move:", choices: [
        "Write from scratch.",
        "Describe the project — Claude detects /draft-sow — or invoke it manually.",
        "Use the PTO refresher skill.",
        "Open Cowork only.",
      ], answer: 1 },
      { q: "How are new skills built?", choices: [
        "Anyone can publish a skill.",
        "All skills are built and managed by the DA team to keep things consistent.",
        "Only admins can use them.",
        "They install themselves.",
      ], answer: 1 },
      { q: "Which is NOT a current available skill?", choices: [
        "SOW Writer", "Monday Board Maker", "Email Forwarder", "Process Diagram Creator",
      ], answer: 2 },
      { q: "Why review output from a Skill before sending?", choices: [
        "Skills are usually wrong.",
        "Skills produce great starting points, but you should always check before sending work out.",
        "It's a legal requirement.",
        "Skills don't produce text.",
      ], answer: 1 },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "m09",
    code: "BP-302",
    title: "Navigating and Using Files in Claude",
    subtitle: "Where to put files — and where not to",
    duration: "15 min",
    category: "Advanced",
    description: "File storage best practices, Google Drive sync warnings, and how to work with cloud files safely.",
    slides: [
      { type: "cover", eyebrow: "Module 09 · Advanced", title: "Navigating and Using Files in Claude", subtitle: "A small habit that prevents big headaches.", body: "File management with AI sounds simple until something goes wrong — a document saves in the wrong place, Claude can't find the file you meant, or you accidentally share more than you intended.\n\nThis module is short but important. The habits I'm going to teach you take five minutes to set up and will save you significant frustration down the road. Please don't skip this one." },
      { type: "twocol", title: "File Storage Best Practices",
        left: { h: "✗ Don't do this", items: [
          "Point Claude at your entire Windows user folder.",
          "Mixed personal + confidential files in one big space.",
        ]},
        right: { h: "✓ Do this", items: [
          "Make a dedicated folder for Claude with no confidential information.",
          "Limit files and subfolders within the space Claude can see.",
        ]},
      },
      { type: "callout", title: "Google Drive sync warning", body: "Sometimes our devices sync folders like \"Desktop\" or \"Documents\" with Google Drive. To avoid files saving improperly, don't work with Claude in these synced folders." },
      { type: "content", title: "Working on Cloud Files", body: "Documents in Google Drive or Shared Drives live on Google Cloud.\n\nTwo best options to work on them:\n\n1. Download the file to a local folder, point Claude there, then re-upload when done.\n2. Hit \"Open in Desktop,\" then use the Claude extension (see Module 04). The file stays in the cloud.\n\nSimilar in Google Sheets and Google Docs." },
      { type: "outro", title: "Knowledge check next", body: "Five questions on file storage." },
    ],
    quiz: [
      { q: "What's the recommended folder setup for Claude?", choices: [
        "Your entire user folder.",
        "A dedicated folder with no confidential info, limited files.",
        "Your Downloads folder.",
        "A shared network drive.",
      ], answer: 1 },
      { q: "Why avoid working with Claude inside Google Drive-synced folders?", choices: [
        "It's faster.",
        "Files may save improperly due to cloud sync.",
        "Google Drive is offline.",
        "Claude can't read Google Drive.",
      ], answer: 1 },
      { q: "Scenario — You need to edit a Google Drive document with Claude. Best approach:", choices: [
        "Copy text manually.",
        "Download locally, point Claude there, re-upload — OR \"Open in Desktop\" and use the Google Workspace extension.",
        "Forward the file by email.",
        "Wait for Google to send it.",
      ], answer: 1 },
      { q: "If you use \"Open in Desktop\" + Claude extension, where does the file live?", choices: [
        "Locally only", "It stays in the cloud", "It's deleted", "On a USB stick",
      ], answer: 1 },
      { q: "Which is a security principle for file access?", choices: [
        "Give Claude access to everything to be safe.",
        "Limit the files and subfolders Claude can see.",
        "Never share files.",
        "Always work in C:\\.",
      ], answer: 1 },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "m10",
    code: "BP-303",
    title: "Using Claude Cowork",
    subtitle: "Hand off multi-step work — get a finished deliverable",
    duration: "25 min",
    category: "Advanced",
    description: "When to use Cowork vs. Chat, file & folder access, scheduled tasks, and best practices.",
    slides: [
      { type: "cover", eyebrow: "Module 10 · Advanced", title: "Using Claude Cowork", subtitle: "Stop managing tasks. Start delegating outcomes.", body: "Everything you've learned so far has been conversational — you prompt, Claude responds, you iterate. Cowork is fundamentally different.\n\nWith Cowork, you describe what you need done — a weekly report, a folder of processed files, a Monday board build — and Claude plans the steps, executes them in sequence, and delivers a finished result. You can step away while it works.\n\nThis is the closest thing to having a capable analyst on your team 24/7." },
      { type: "callout", title: "Read Module 09 first", body: "Helping Claude find the right file location for its work will improve effectiveness and decrease security risks." },
      { type: "content", title: "Cowork — what it is and when it clicks", body: "Cowork is a separate mode in Claude Desktop. You'll find it by clicking the Cowork tab at the top.\n\nHere's the mental shift that makes Cowork make sense: in Chat, you have a conversation. In Cowork, you give an assignment.\n\nYou describe the outcome you want. Claude breaks it into steps, executes each one against the files and tools you've given it access to, and presents you with a completed deliverable.\n\nThe moment it clicked for me was when I asked Cowork to compile a weekly status report from six different project files. I described what I wanted, pointed it to a folder, and walked away. Ten minutes later, there was a formatted report waiting.\n\nThat's the Cowork experience: describe → delegate → done." },
      { type: "content", title: "File & Folder Access", body: "Cowork can read, create, and edit files directly on your computer — no uploading required.\n\n1. When starting a Cowork task, select a folder to work in.\n2. Claude works with those files to produce deliverables — documents, spreadsheets, presentations.\n\nDon't let Claude access what it shouldn't — pick an appropriate folder." },
      { type: "list", title: "Scheduled Tasks", items: [
        "Tasks Claude runs automatically — daily, weekly, on demand.",
        "Example: Morning briefing summarizing emails and calendar.",
        "Example: Weekly report compiling data from shared files.",
        "Example: Recurring file cleanup or organization.",
        "Note: Your computer and Claude Desktop must stay open for scheduled tasks to run.",
      ]},
      { type: "twocol", title: "When to use Cowork vs. Chat",
        left: { h: "Use Chat (most cases)", items: [
          "Task is simple or quick.",
          "You have a quick question or need a fast answer.",
          "You want to brainstorm or think through an idea.",
        ]},
        right: { h: "Use Cowork", items: [
          "Task has multiple steps or takes time.",
          "Claude needs to work with local files.",
          "You want a large, polished deliverable.",
          "You want to assign work and step away.",
        ]},
      },
      { type: "list", title: "Best Practices", items: [
        "Use a dedicated working folder — don't grant access to your entire drive.",
        "Avoid sensitive files — keep PII and credentials out of shared folders.",
        "Review outputs before sharing — always check Claude's work.",
        "Start scheduled tasks small — complex tasks have more chances to fail.",
      ]},
      { type: "callout", title: "Security note", body: "Our Claude Team Plan ensures your data is not used to train AI models — information is not persistent on Anthropic's servers. SSO and admin controls provide additional organizational oversight." },
      { type: "outro", title: "Knowledge check next", body: "Five questions on Cowork." },
    ],
    quiz: [
      { q: "Cowork is best for:", choices: [
        "Quick one-off questions",
        "Multi-step tasks, local file work, and large polished deliverables",
        "Brainstorming",
        "Replacing your email",
      ], answer: 1 },
      { q: "What must stay open for scheduled Cowork tasks to run?", choices: [
        "Your browser only",
        "Your computer AND Claude Desktop",
        "Gmail",
        "Nothing — they run in the cloud",
      ], answer: 1 },
      { q: "Scenario — You want Claude to compile a weekly report from a folder of files. Best mode:", choices: [
        "Chat", "Cowork with a scheduled task on a dedicated folder", "Email", "Don't use Claude",
      ], answer: 1 },
      { q: "Which is a Cowork best practice?", choices: [
        "Give Claude access to your entire drive.",
        "Use a dedicated working folder; avoid sensitive files; review outputs.",
        "Keep PII in the shared folder for easy access.",
        "Never review the output.",
      ], answer: 1 },
      { q: "Why does the Team Plan matter for security?", choices: [
        "It makes Claude free.",
        "Your data isn't used to train AI models; SSO + admin controls add oversight.",
        "It enables hardware encryption.",
        "It auto-deletes Word docs.",
      ], answer: 1 },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: "m11",
    code: "BP-304",
    title: "Building Prototypes in Claude",
    subtitle: "Artifacts — napkin sketch to demo in one conversation",
    duration: "25 min",
    category: "Advanced",
    description: "Use Artifacts to build working prototypes inside the conversation — calculators, mockups, dashboards.",
    slides: [
      { type: "cover", eyebrow: "Module 11 · Advanced", title: "Building Prototypes in Claude", subtitle: "From 'what if we had a tool for this' to a working demo in one conversation.", body: "I've seen this reaction dozens of times: someone describes a problem — 'we need a way to score bids faster' or 'I wish we had an ROI calculator clients could use' — and I say 'let's build it now.' Twenty minutes later there's a working, clickable demo in front of the client.\n\nThat's the Artifact. It's one of Claude's most impressive capabilities, and it's genuinely within reach for every member of this team." },
      { type: "content", title: "What exactly is an Artifact — and why does it matter for BrightPath?", body: "An Artifact is a working application — a real, interactive tool — that Claude builds right inside your conversation. No developers. No code knowledge required. You describe it; Claude builds it; you click on it immediately.\n\nFor BrightPath, Artifacts solve a real problem: the gap between 'we have an idea for a tool' and 'we have a tool.' That gap used to cost weeks and thousands of dollars. Now it costs a conversation.\n\nHere's what Claude can build for you today:\n• ROI calculators for client proposals — type in numbers, get instant outputs.\n• Interactive data visualizations from your Excel or CSV data.\n• Clickable UI mockups that demonstrate a proposed solution before a line of real code is written.\n• Internal decision frameworks and scoring tools for consistent team judgment.\n\nThis is one of the highest-leverage capabilities in your toolkit." },
      { type: "twocol", title: "Use cases for your work",
        left: { h: "For your team", items: [
          "Internal calculators (pricing, ROI, resource planning)",
          "Decision-making frameworks and scoring tools",
          "Turn frequent tasks into a tool",
        ]},
        right: { h: "For your clients", items: [
          "Interactive mockups demoing a proposed solution before development",
          "Data viz prototypes for stakeholder presentations",
        ]},
      },
      { type: "list", title: "Real BrightPath Examples", items: [
        "LinkedIn Recruiting keyword generator for new open roles.",
        "AI Stakeholder Change Analyzer built from raw Excel notes.",
      ]},
      { type: "steps", title: "How it works", items: [
        { h: "1. Describe what you need", b: "\"Build me an interactive ROI calculator in an artifact where I can input project cost and expected revenue.\"" },
        { h: "2. Claude builds it live", b: "A working artifact appears in the conversation. You can interact with it immediately." },
        { h: "3. Iterate naturally", b: "\"Add a bar chart below the inputs\" or \"Change the color scheme to match our brand.\"" },
      ]},
      { type: "content", title: "The BrightPath Artifact Skill", body: "We built a custom BrightPath skill (see Module 08) that makes creating on-brand POC artifacts easier.\n\nWhat it does:\n• Applies BrightPath brand colors and styling automatically.\n• Generates clean, professional artifacts ready for client review.\n• Gathers more info about POC functionality with you.\n• Simplifies language so non-technical users get polished results.\n\nMention you want to create a POC — or force it with /bp-artifact-builder." },
      { type: "list", title: "Tips for Great Artifacts", items: [
        "Start simple, then add complexity. Get the basic structure right first.",
        "Describe the tool from the user perspective.",
        "Share sample data so Claude builds something realistic.",
        "Mention your audience — \"non-technical executive\" produces a very different result than \"dev team.\"",
        "Use the BrightPath skill for client work — it saves time and looks professional from the start.",
      ]},
      { type: "quote", quote: "Claude can't read your mind. Comprehensible explanations help get things right in one go.", attrib: "Remember!" },
      { type: "outro", title: "Knowledge check next", body: "Five questions on Artifacts." },
    ],
    quiz: [
      { q: "An Artifact is:", choices: [
        "A type of file extension",
        "A working application Claude builds inside the conversation — no coding required",
        "A keyboard shortcut",
        "A chat history entry",
      ], answer: 1 },
      { q: "Scenario — You want a clickable ROI calculator demo for a client meeting tomorrow. Best move:", choices: [
        "Build it from scratch in code.",
        "Describe what you want in chat — Claude builds the artifact live. Use the BrightPath skill for brand styling.",
        "Use a spreadsheet only.",
        "Skip the demo.",
      ], answer: 1 },
      { q: "Which is a tip for great artifacts?", choices: [
        "Cram everything into one mega-prompt.",
        "Start simple, then add complexity one piece at a time.",
        "Avoid sample data.",
        "Don't mention the audience.",
      ], answer: 1 },
      { q: "The BrightPath Artifact Skill mainly:", choices: [
        "Replaces your IDE",
        "Applies BrightPath brand styling, gathers POC info, simplifies language",
        "Sends emails",
        "Manages your calendar",
      ], answer: 1 },
      { q: "How can you force-invoke the BrightPath artifact skill?", choices: [
        "Restart Claude",
        "Type /bp-artifact-builder in the chat",
        "Buy more allowance",
        "Email the DA team for every artifact",
      ], answer: 1 },
    ],
  },
];

// ─── FAQs ──────────────────────────────────────────────────────────────────
window.BP_FAQS = [
  // Getting Started
  { cat: "Getting Started", q: "Who can sign in to BrightPath Learn?",
    a: "Only staff and administrators with an @brightpath-mn.com Google Workspace account. Sign in is restricted by domain.",
    moduleId: null },
  { cat: "Getting Started", q: "Where do I start?",
    a: "Start with Module 01 — The Reason for Claude. This orientation module explains why AI is now a competitive necessity and outlines BrightPath's vision.",
    moduleId: "m01" },
  { cat: "Getting Started", q: "Can I retake a knowledge check?",
    a: "Yes. If you don't pass (80% required), click Retake Assessment on the results screen. There is no penalty for retakes.",
    moduleId: null },

  // About Claude
  { cat: "About Claude", q: "Why is BrightPath using Claude instead of other AI tools?",
    a: "Claude is an agentic AI — it integrates with your tools, automates multi-step work, and builds lightweight apps. Module 01 covers the full rationale.",
    moduleId: "m01" },
  { cat: "About Claude", q: "How do I navigate the Claude interface?",
    a: "Module 02 walks you through every part of the home screen: conversations, projects, model selector, file uploads, connectors, and search.",
    moduleId: "m02" },
  { cat: "About Claude", q: "How do I write better prompts?",
    a: "Module 03 teaches the four principles of great prompts, how to give context, and the power move of asking Claude to clarify before it starts.",
    moduleId: "m03" },
  { cat: "About Claude", q: "Can Claude work inside Google Docs, Slides, and Sheets?",
    a: "Yes — Claude has downloadable Google Workspace extensions. Module 04 shows how to install them and use Claude side-by-side with your files.",
    moduleId: "m04" },
  { cat: "About Claude", q: "What are Connectors and how do I enable them?",
    a: "Connectors link Claude to tools like Google Chat, Gmail, Monday.com, and Google Drive. Module 05 covers enabling, configuring, and using them.",
    moduleId: "m05" },
  { cat: "About Claude", q: "What is Claude Design and when should I use it?",
    a: "Claude Design is a web tool for building slide decks with the BrightPath Design System. Module 06 covers getting started and working with it.",
    moduleId: "m06" },
  { cat: "About Claude", q: "How do I manage my Claude usage allowance?",
    a: "Each team member has a weekly allowance. Module 07 explains how to check your usage, what depletes it, and tips to stay within budget.",
    moduleId: "m07" },
  { cat: "About Claude", q: "What are Skills and how do I use them?",
    a: "Skills are pre-built playbooks for specific tasks. Module 08 lists all available skills (SOW Writer, PPT Creator, etc.) and how to invoke them.",
    moduleId: "m08" },
  { cat: "About Claude", q: "Where should I store files I want Claude to work with?",
    a: "Module 09 covers safe file storage — use a dedicated folder, avoid Google Drive-synced directories, and how to handle Google Drive files.",
    moduleId: "m09" },
  { cat: "About Claude", q: "What is Cowork and when should I use it instead of Chat?",
    a: "Cowork handles multi-step tasks with local files — like compiling a weekly report. Module 10 explains when Chat vs Cowork is the right choice.",
    moduleId: "m10" },
  { cat: "About Claude", q: "Can Claude build a working prototype or tool for me?",
    a: "Yes — Artifacts are working apps Claude builds inside the conversation. Module 11 covers use cases, how to prompt for them, and the BrightPath skill.",
    moduleId: "m11" },

  // Modules
  { cat: "Modules", q: "Why is a module locked?",
    a: "Modules unlock sequentially. Complete the previous module's knowledge check (80% passing score) to unlock the next one.",
    moduleId: null },
  { cat: "Modules", q: "Can I review a module after completing it?",
    a: "Yes. Completed modules are always accessible from your dashboard for review.",
    moduleId: null },
  { cat: "Modules", q: "How long does each module take?",
    a: "Most modules take 15–25 minutes including the knowledge check. Estimated time is shown on each module card.",
    moduleId: null },

  // Certificates
  { cat: "Certificates", q: "When do I receive a certificate?",
    a: "Immediately after passing a module's knowledge check with 80% or higher — a Congratulations prompt will offer you the certificate.",
    moduleId: null },
  { cat: "Certificates", q: "How do I download my certificate?",
    a: "Click Download Certificate on the certificate screen. The print dialog opens — choose Save as PDF.",
    moduleId: null },
  { cat: "Certificates", q: "Where do I find all my certificates?",
    a: "All earned certificates are in the My Certificates tab in the top nav. Admins also maintain a back-end archive.",
    moduleId: null },

  // Account & Admin
  { cat: "Account", q: "What if I forget my password?",
    a: "Use Continue with Google on the login screen — your @brightpath-mn.com Workspace handles authentication.",
    moduleId: null },
  { cat: "Admin", q: "Can admins add or remove learners?",
    a: "Yes. The Admin → Learners tab lets administrators invite, edit, enroll, and remove learners.",
    moduleId: null },
  { cat: "Admin", q: "Can admins add or modify courses?",
    a: "Yes. The Admin → Modules tab lets administrators add, edit, and delete modules and curriculum.",
    moduleId: null },
];

// ─── Learners ──────────────────────────────────────────────────────────────
window.BP_LEARNERS = [
  { id: "u1", name: "Amara Okafor",     email: "amara.okafor@brightpath-mn.com",   role: "Direct Support Professional", joined: "2026-01-12", status: "Active" },
  { id: "u2", name: "Jordan Reyes",     email: "jordan.reyes@brightpath-mn.com",   role: "Case Manager",                joined: "2025-09-03", status: "Active" },
  { id: "u3", name: "Priya Shah",       email: "priya.shah@brightpath-mn.com",     role: "Direct Support Professional", joined: "2026-02-21", status: "Active" },
  { id: "u4", name: "Marcus Whitfield", email: "marcus.whitfield@brightpath-mn.com", role: "Program Lead",              joined: "2024-11-15", status: "Active" },
  { id: "u5", name: "Ana Sørensen",     email: "ana.sorensen@brightpath-mn.com",   role: "Direct Support Professional", joined: "2026-03-08", status: "Active" },
  { id: "u6", name: "Devin Park",       email: "devin.park@brightpath-mn.com",     role: "Direct Support Professional", joined: "2026-04-19", status: "Onboarding" },
  { id: "u7", name: "Rosa Mendoza",     email: "rosa.mendoza@brightpath-mn.com",   role: "Trainer",                     joined: "2024-06-02", status: "Active" },
  { id: "u8", name: "Hassan Yusuf",     email: "hassan.yusuf@brightpath-mn.com",   role: "Direct Support Professional", joined: "2026-05-01", status: "Onboarding" },
];

// Pre-seeded progress — kept consistent with sequential locking
window.BP_SEED_PROGRESS = {
  u1: { m01: { percent:100, status:"completed", score:100, completedOn:"2026-01-20" },
        m02: { percent:100, status:"completed", score:90,  completedOn:"2026-02-04" },
        m03: { percent:100, status:"completed", score:100, completedOn:"2026-02-18" },
        m04: { percent:60,  status:"in-progress" } },
  u2: { m01: { percent:100, status:"completed", score:100, completedOn:"2025-09-08" },
        m02: { percent:100, status:"completed", score:100, completedOn:"2025-09-22" },
        m03: { percent:100, status:"completed", score:80,  completedOn:"2025-10-06" },
        m04: { percent:100, status:"completed", score:90,  completedOn:"2025-10-20" },
        m05: { percent:100, status:"completed", score:100, completedOn:"2025-11-12" },
        m06: { percent:80,  status:"in-progress" } },
  u3: { m01: { percent:100, status:"completed", score:80,  completedOn:"2026-03-01" },
        m02: { percent:40,  status:"in-progress" } },
  u4: { m01: { percent:100, status:"completed", score:100, completedOn:"2024-11-22" },
        m02: { percent:100, status:"completed", score:100, completedOn:"2024-12-08" },
        m03: { percent:100, status:"completed", score:100, completedOn:"2025-01-14" },
        m04: { percent:100, status:"completed", score:100, completedOn:"2025-02-01" },
        m05: { percent:100, status:"completed", score:90,  completedOn:"2025-02-18" },
        m06: { percent:100, status:"completed", score:100, completedOn:"2025-03-05" },
        m07: { percent:100, status:"completed", score:90,  completedOn:"2025-04-12" },
        m08: { percent:100, status:"completed", score:100, completedOn:"2025-05-09" },
        m09: { percent:100, status:"completed", score:100, completedOn:"2025-06-01" },
        m10: { percent:100, status:"completed", score:100, completedOn:"2025-06-22" },
        m11: { percent:100, status:"completed", score:100, completedOn:"2025-07-15" } },
  u5: { m01: { percent:100, status:"completed", score:100, completedOn:"2026-03-14" },
        m02: { percent:100, status:"completed", score:80,  completedOn:"2026-04-02" },
        m03: { percent:20,  status:"in-progress" } },
  u6: { m01: { percent:25,  status:"in-progress" } },
  u7: { m01: { percent:100, status:"completed", score:100, completedOn:"2024-06-15" },
        m02: { percent:100, status:"completed", score:100, completedOn:"2024-07-01" },
        m03: { percent:100, status:"completed", score:100, completedOn:"2024-07-22" },
        m04: { percent:100, status:"completed", score:100, completedOn:"2024-08-14" },
        m05: { percent:100, status:"completed", score:100, completedOn:"2024-09-03" },
        m06: { percent:100, status:"completed", score:100, completedOn:"2024-09-25" } },
  u8: { m01: { percent:0,   status:"not-started" } },
};

window.BP_CURRENT_LEARNER = window.BP_LEARNERS[0]; // Amara

// ─── Helper: is a module unlocked for this user? ───────────────────────────
window.BP_isUnlocked = function(moduleId, progress) {
  const idx = window.BP_MODULES.findIndex(m => m.id === moduleId);
  if (idx <= 0) return true; // first module always unlocked
  const prev = window.BP_MODULES[idx - 1];
  return progress[prev.id]?.status === "completed";
};


// ─── Slide image map ── slideIndex is 0-based in our slides[] array ────────
window.BP_SLIDE_IMAGES = {
  m01: {
    3: ["assets/slides/m01/image2.png"],  // AI acceleration curve — slide 3 (The AI Imperative)
  },
  m02: {
    1: ["assets/slides/m02/image7.png"],  // Annotated Claude home screen
    2: ["assets/slides/m02/image9.png"],
    3: ["assets/slides/m02/image10.png"],
    4: ["assets/slides/m02/image12.png","assets/slides/m02/image11.png"],
    5: ["assets/slides/m02/image13.png"],
  },
  m03: {
    5: ["assets/slides/m03/image8.png","assets/slides/m03/image7.png"],
  },
  m04: {
    // slide 2 image7 removed (Pioneer workspace)
    3: ["assets/slides/m04/image9.png"],  // PPT interface with Claude panel (blurred)
    4: ["assets/slides/m04/image11.png","assets/slides/m04/image10.png"],
  },
  m05: {
    // slide 3 image7 removed (Ask Pioneer)
    4: ["assets/slides/m05/image8.png"],
    5: ["assets/slides/m05/image9.png"],
    6: ["assets/slides/m05/image10.png"],
  },
  m06: {
    2: ["assets/slides/m06/image7.png"],
    3: ["assets/slides/m06/image8.png"],
  },
  m07: {
    2: ["assets/slides/m07/image7.png"],
  },
  m08: {
    // slide 2 image7 removed (Pioneer tooltip text)
  },
  m09: {
    // slide 1 image8+image9 removed (PIONEER PROJECT SERVICES)
    2: ["assets/slides/m09/image10.png"],
    3: ["assets/slides/m09/image11.png"],
  },
  m10: {
    2: ["assets/slides/m10/image9.png"],
    3: ["assets/slides/m10/image10.png"],
  },
  m11: {
    3: ["assets/slides/m11/image8.png","assets/slides/m11/image7.png"],
  },
};
