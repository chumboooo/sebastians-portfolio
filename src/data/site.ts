export type Project = {
  name: string;
  label: string;
  description: string;
  focus: string;
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
};

export const site = {
  name: "Sebastian Davalos",
  role: "Computer Engineering Student at Florida State University",
  graduation: "Spring 2027",
  focus: "Software Engineering / AI & Data Systems / Full-Stack Development",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Awards", href: "#highlights" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Resume", href: "/Davalos_Sebastian_Resume.pdf" },
  ],
  links: {
    resume: "/Davalos_Sebastian_Resume.pdf",
    github: "https://github.com/chumboooo",
    linkedin: "https://www.linkedin.com/in/sebastian-davalos/",
    email: "mailto:sad24p@fsu.edu",
  },
  images: {
    about: [
      {
        src: "/images/chewie.png",
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
        label: "Planning",
      },
    ] satisfies SiteImage[],
  },
  projects: [
    {
      name: "StudyStack AI",
      label: "Full-stack AI study tool",
      description:
        "A study assistant for turning uploaded class materials into searchable notes, flashcards, and quizzes.",
      focus: "Designed around the student workflow: upload material, find the right context, and practice from it without jumping between tools.",
      stack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "OpenAI API",
        "Vercel",
      ],
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
      name: "The Actuary",
      label: "Machine learning analysis",
      description:
        "A machine learning project exploring claims data with classification, clustering, and anomaly detection.",
      focus: "Focused on comparing modeling approaches and surfacing patterns that could point to insurance risk.",
      stack: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Matplotlib",
        "Random Forest",
        "K-Means",
        "Isolation Forest",
      ],
      githubUrl: "https://github.com/Drexana/15A---Health-Insurance-Claims",
      demoUrl: "https://the-actuary-health-insurance-claims.streamlit.app/",
      demoLabel: "Open App",
      screenshot: {
        src: "/images/theactuary.png",
        alt: "The Actuary project screenshot",
        label: "The Actuary",
      },
    },
    {
      name: "SmartGallery",
      label: "AWS image analysis",
      description:
        "An AWS-powered image analysis project that reads images from S3 and uses Rekognition to produce searchable labels.",
      focus: "Built as a practical CLI workflow for making image collections easier to inspect and organize.",
      stack: ["Python", "boto3", "AWS Rekognition", "Amazon S3", "CLI tooling"],
      githubUrl: "https://github.com/FSU-CloudClub/CloudClub-Spring26-ImageManagementWebApp",
      demoUrl: "https://s26-aws-cloud-club-smartgallery.netlify.app/demo",
      demoLabel: "Open Demo",
      screenshot: {
        src: "/images/smartgallery.png",
        alt: "SmartGallery project screenshot",
        label: "SmartGallery",
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
      role: "Co-President",
      organization: "CompNeuroSociety at FSU",
      dates: "May 2026 - Present",
      description:
        "Help guide a technical student community through project planning, research-oriented collaboration, and practical workshops.",
    },
    {
      role: "ACM Project Lead",
      organization: "Association for Computing Machinery at FSU",
      dates: "May 2026 - Present",
      description:
        "Lead student software work by helping teams turn ideas into scoped projects with clear next steps.",
    },
    {
      role: "Lab Workshop Coordinator",
      organization: "CompNeuroSociety at FSU",
      dates: "February 2026 - May 2026",
      description:
        "Organize hands-on workshops that connect software skills with research-focused technical learning.",
    },
    {
      role: "Project Contributor",
      organization: "AWS Club at FSU",
      dates: "Spring 2026",
      description:
        "Contribute to cloud-focused student projects while building hands-on experience with AWS services and deployment workflows.",
    },
  ],
  skills: {
    Languages: ["Python", "Java", "C/C++", "SQL", "TypeScript"],
    "Full-Stack": ["Next.js", "React", "Tailwind CSS", "Supabase", "Vercel", "Express"],
    "AI/Data": [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "OpenAI API",
      "ML pipelines",
      "RAG",
    ],
    "Cloud/Tools": [
      "Git",
      "GitHub",
      "AWS Rekognition",
      "S3",
      "Prisma",
      "PostgreSQL",
    ],
  },
  about:
    "Hello! I am a sophomore Computer Engineering major at FSU with an interest in software development and AI/ML. I’m part of two technical organizations at FSU, where I hold leadership positions, most notably as Co-President of CompNeuroSociety and Project Lead in ACM.\n\nIn my free time, I enjoy exploring new technologies, such as experimenting with local AI tools and running language models on my own PC. I also enjoy drawing panels from my favorite manga and anime, especially One Piece and JJK, gaming, and all the joy that comes with owning my dog named Chewie.\n\nIf you would like to know more about me or ask about my projects, please feel free to send me a message through any of the platforms shown below!",
  contactCta: "",
};
