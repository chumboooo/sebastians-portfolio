export type Project = {
  name: string;
  label: string;
  arcLabel?: string;
  description: string;
  focus: string;
  details?: string[];
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  screenshot?: SiteImage;
};

export type SiteImage = {
  src: string;
  alt: string;
  label: string;
  caption?: string;
};

export type ExperienceItem = {
  role: string;
  organization: string;
  dates: string;
  description: string;
  details?: string[];
  tags?: string[];
  previousRole?: { role: string; dates: string };
  category: "Research & Technical Experience" | "Technical Leadership" | "Campus & Student Support" | "AI / Evaluation Work";
  featured?: boolean;
};

const resumePath = "/Davalos_Sebastian_Resume.pdf";

export const site = {
  name: "Sebastian Davalos",
  school: "Florida State University",
  degree: "B.S. in Computer Engineering",
  role: "Computer Engineering Student at Florida State University",
  graduation: "Spring 2029",
  focus: "Software Engineering / AI & ML / Cloud Systems / Computer Vision",
  bio: "Computer Engineering student at FSU focused on software engineering, AI/ML, cloud systems, and computer vision.",
  seo: {
    title: "Sebastian Davalos | Portfolio",
    description: "Personal portfolio for Sebastian Davalos, a Computer Engineering student at Florida State University focused on software development, AI/ML, cloud systems, and computer vision.",
  },
  experiencePage: {
    title: "Experience | Sebastian Davalos",
    description: "Undergraduate research, technical leadership, hardware repair, and campus support experience from Sebastian Davalos.",
    intro: "Research, technical leadership, hardware repair, and campus support roles.",
  },
  heroCallout: "You should try Inca Kola and Sublime sometime!",
  profileTags: [
    "Local AI",
    "Drawing",
    "Gaming",
    "Chewie",
  ],
  nav: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Awards", href: "#highlights" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: resumePath },
  ],
  links: {
    portfolio: "https://www.sebasad.com",
    resume: resumePath,
    github: "https://github.com/chumboooo",
    linkedin: "https://www.linkedin.com/in/sebastian-davalos",
    email: "mailto:sad24p@fsu.edu",
  },
  images: {
    about: [
      {
        src: "/images/chewie.jpg",
        alt: "Chewie relaxing at home",
        label: "Chewie",
      },
      {
        src: "/images/friends.jpg",
        alt: "Sebastian Davalos with his best friends",
        label: "Friends",
      },
      {
        src: "/images/drawing.jpg",
        alt: "A detailed pencil drawing by Sebastian Davalos",
        label: "Art",
      },
    ] satisfies SiteImage[],
    hackathon: [
      {
        src: "/images/nextbud.jpg",
        alt: "Sebastian Davalos and teammates presenting NextBud at the NextEra Energy Hackathon",
        label: "Presentation",
      },
      {
        src: "/images/nextbudplanning.jpg",
        alt: "NextBud planning notes from the NextEra Energy Hackathon",
        label: "Planning / Whiteboard",
      },
    ] satisfies SiteImage[],
  },
  projects: [
    {
      name: "StudyStack AI",
      label: "Full-stack AI study tool",
      arcLabel: "Study Tool",
      description:
        "Full-stack AI study platform for PDF-grounded chat, flashcards, quizzes, and persistent study threads.",
      focus: "Hybrid PDF retrieval, source-grounded responses, and private study history.",
      details: [
        "Developed a PDF pipeline for extraction, chunking, reprocessing, hybrid retrieval, and source-grounded AI responses.",
        "Implemented Supabase authentication, private storage, secure preview/download, and persistent Q&A history.",
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
      githubUrl: "https://github.com/chumboooo/studystack-ai",
      demoUrl: "https://studystack-aii.vercel.app/",
      demoLabel: "Open App",
      screenshot: {
        src: "/images/studystack ai.png",
        alt: "StudyStack AI project screenshot",
        label: "StudyStack AI",
      },
    },
    {
      name: "SmartGallery",
      label: "AWS image analysis",
      arcLabel: "Cloud Build",
      description:
        "Python CLI that analyzes S3-hosted images with AWS Rekognition and returns labels and confidence data.",
      focus: "Configurable inputs and raw JSON exports for testing and response inspection.",
      details: [
        "Added configurable inputs and raw JSON exports for testing, debugging, and response inspection.",
        "Contributed within a 40-person development environment using GitHub branches, pull requests, and shared review workflows.",
      ],
      stack: ["Python", "AWS Rekognition", "Amazon S3", "Git/GitHub"],
      githubUrl: "https://github.com/FSU-CloudClub/CloudClub-Spring26-ImageManagementWebApp",
      demoUrl: "https://s26-aws-cloud-club-smartgallery.netlify.app/demo",
      demoLabel: "Open Demo",
      screenshot: {
        src: "/images/smartgallery.png",
        alt: "SmartGallery team application showing the demo dashboard",
        label: "SmartGallery",
        caption: "Team application shown · My contribution: Python CLI",
      },
    },
    {
      name: "The Actuary",
      label: "Machine learning analysis",
      arcLabel: "AI / Data",
      description:
        "Insurance-risk ML analysis combining classification, clustering, and anomaly detection.",
      focus: "98.5% Random Forest accuracy; roughly 5% of records flagged for review.",
      details: [
        "Trained a Random Forest model using applicant features including age, BMI, and smoking status, achieving 98.5% accuracy.",
        "Applied K-means to identify risk segments and Isolation Forest to flag roughly 5% of records as anomalous cases.",
      ],
      stack: ["Python", "Scikit-learn", "Pandas"],
      githubUrl: "https://github.com/Drexana/15A---Health-Insurance-Claims",
      demoUrl: "https://the-actuary-health-insurance-claims.streamlit.app/",
      demoLabel: "Open App",
      screenshot: {
        src: "/images/theactuary.png",
        alt: "The Actuary project screenshot",
        label: "The Actuary",
      },
    },
  ] satisfies Project[],
  highlights: [
    {
      title: "NextEra Energy Hackathon — 3rd Place",
      description:
        "Conceptualized and pitched NextBud with a team during the FSU Innovation Hub NextEra Energy Hackathon, placing 3rd overall.",
    },
  ],
  experience: [
    {
      role: "Undergraduate Researcher — Dr. Zhengguang Lu Lab / UROP",
      organization: "Florida State University, Department of Physics",
      dates: "Fall 2026 – Present",
      description:
        "Prepare graphene-flake datasets and train RF-DETR object detection in Roboflow for van der Waals quantum-material assembly. Validation: 86.8% mAP@50.",
      details: [
        "Annotated and curated roughly 400–500 optical microscope images at 20–50× magnification, distinguishing graphene flakes from dust, contamination, and chip edges.",
        "Prepared training, validation, and test splits in Roboflow and trained/evaluated multiple RF-DETR Object Detection Medium iterations.",
        "Validation metrics: 86.8% mAP@50, 74.4% precision, 85.1% recall, and 79.4% F1.",
      ],
      tags: ["Computer Vision", "Object Detection", "RF-DETR", "Roboflow"],
      category: "Research & Technical Experience",
      featured: true,
    },
    {
      role: "Project Chair",
      organization: "AWS Cloud Club at ACM at FSU",
      dates: "May 2026 – Present",
      description:
        "Conceived and co-lead Matchob, an AI-assisted resume-tailoring browser extension with 15+ contributors across frontend, backend/AWS, AI, data, and QA/testing.",
      details: [
        "Coordinate project scope, technical ownership, contributor onboarding, GitHub issues/epics, milestones, and cross-team integration.",
        "Matchob is designed to compare resumes with job descriptions, explain evidence-grounded recommendations, and avoid inventing unsupported experience.",
        "Help define AWS architecture with API Gateway, Lambda, Amazon Bedrock, S3, IAM, and CloudWatch; the extension uses WXT, React, and TypeScript.",
      ],
      tags: ["WXT", "React", "TypeScript", "AWS", "Amazon Bedrock"],
      category: "Technical Leadership",
      featured: true,
    },
    {
      role: "Co-President",
      organization: "CompNeuroSociety at Florida State University",
      dates: "Apr. 2026 – Present",
      previousRole: { role: "Workshop Coordinator", dates: "Feb. 2026 – May 2026" },
      description:
        "Co-lead a roughly 40-member computational neuroscience organization, coordinating board operations, GBMs, funding, and programming. The organization was awarded a $13,000 ORCA grant.",
      details: [
        "Coordinate event logistics and room scheduling for events that can draw 20+ attendees, delegating outreach to fellow officers.",
        "The Open Research Community Accelerator grant supports open-science and reproducible-research training.",
        "Support workshop leaders in an 8-workshop series covering calculus, Python, Brian2, AI in research, and computational neuroscience fundamentals, with accompanying member mini-projects.",
      ],
      category: "Technical Leadership",
      featured: true,
    },
    {
      role: "ACM Project Lead",
      organization: "Association for Computing Machinery at FSU",
      dates: "2026 – Present",
      description:
        "Lead software project development, contributor onboarding, Git/GitHub workflows, task delegation, and technical communication for ACM at FSU.",
      details: [
        "Helped run a GitHub/Codex workshop covering repo setup, cloning, Git workflows, and AI-assisted development.",
      ],
      category: "Technical Leadership",
    },
    {
      role: "Technician Intern",
      organization: "Campus Phone Repair",
      dates: "Oct. 2026 – Present",
      description:
        "Support diagnosis and repair of smartphones, tablets, and computers; gain hands-on experience with hardware troubleshooting, component replacement, and device repair workflows.",
      category: "Research & Technical Experience",
    },
    {
      role: "Handshake AI Fellow",
      organization: "Handshake",
      dates: "June 2026 – Present",
      description:
        "Contribute to AI training and evaluation workflows through flexible project-based tasks.",
      category: "AI / Evaluation Work",
    },
    {
      role: "Community Assistant",
      organization: "American Campus Communities",
      dates: "June 15, 2026 – Present",
      description:
        "Support resident-facing operations, communication, and community engagement.",
      category: "Campus & Student Support",
    },
    {
      role: "Illuminate Ambassador",
      organization: "Florida State University",
      dates: "June 22, 2026 – August 2026",
      description:
        "Assist with CARE-related student support, outreach, and campus programming.",
      category: "Campus & Student Support",
    },
    {
      role: "Engineering Orientation Aide",
      organization: "Florida State University",
      dates: "May 2026 – June 2026, Volunteer",
      description:
        "Volunteered with engineering orientation programming and helped incoming engineering students navigate campus resources.",
      category: "Campus & Student Support",
    },
  ] satisfies ExperienceItem[],
  skills: {
    Languages: ["Python", "C/C++", "Java", "SQL", "TypeScript"],
    "Frameworks / Libraries": ["React", "Next.js", "Scikit-learn", "Pandas", "NumPy"],
    "Engineering Concepts": [
      "Machine Learning",
      "Computer Vision",
      "Object Detection",
      "Data Structures & Algorithms",
      "RESTful APIs",
    ],
    "Cloud / Tools": [
      "AWS",
      "AWS Lambda",
      "Amazon Bedrock",
      "Amazon S3",
      "API Gateway",
      "Supabase",
      "Git",
      "GitHub",
      "Linux",
      "Roboflow",
    ],
  },
  about:
    "Hello! I’m a Computer Engineering student at FSU focused on software engineering, AI/ML, cloud systems, and computer vision.\n\nOutside of class, I enjoy experimenting with local AI tools, drawing panels from One Piece and JJK, gaming, and spending time with my dog, Chewie.",
  contactCta: "Reach out through email, LinkedIn, or GitHub.",
};
