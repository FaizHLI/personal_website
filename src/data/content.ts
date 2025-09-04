export interface Skill {
  name: string;
  icon: string;
  category: "languages" | "frameworks" | "tools" | "databases" | "cloud";
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "Python", icon: "🐍", category: "languages" },
  { name: "Java", icon: "☕", category: "languages" },
  { name: "JavaScript", icon: "🟨", category: "languages" },
  { name: "TypeScript", icon: "📘", category: "languages" },
  { name: "SQL", icon: "🗄️", category: "languages" },
  { name: "Golang", icon: "🐹", category: "languages" },
  { name: "Rust", icon: "🦀", category: "languages" },
  { name: "Terraform", icon: "🏗️", category: "languages" },
  { name: "HTML/CSS", icon: "🌐", category: "languages" },
  
  // Frameworks/Libraries
  { name: "React", icon: "⚛️", category: "frameworks" },
  { name: "Next.js", icon: "▲", category: "frameworks" },
  { name: "Node.js", icon: "🟢", category: "frameworks" },
  { name: "Pandas", icon: "🐼", category: "frameworks" },
  { name: "Scikit-learn", icon: "🔬", category: "frameworks" },
  { name: "TensorFlow", icon: "🧠", category: "frameworks" },
  { name: "Matplotlib", icon: "📊", category: "frameworks" },
  { name: "Seaborn", icon: "📈", category: "frameworks" },
  { name: "NumPy", icon: "🔢", category: "frameworks" },
  
  // Tools
  { name: "Git/GitHub", icon: "📝", category: "tools" },
  { name: "Docker", icon: "🐳", category: "tools" },
  { name: "Jenkins", icon: "🤖", category: "tools" },
  { name: "JIRA", icon: "📋", category: "tools" },
  { name: "Eclipse", icon: "🌙", category: "tools" },
  { name: "Insomnia", icon: "🦋", category: "tools" },
  
  // Cloud
  { name: "AWS Lambda", icon: "⚡", category: "cloud" },
  { name: "AWS Step Functions", icon: "🔄", category: "cloud" },
];

export const projects: Project[] = [
  {
    title: "Game Backlog Manager",
    description: "Engineered a full-featured game backlog management platform using Supabase and the IGDB API, supporting a catalog of over 400,000 titles with cover images, genre filters, and search autocompletion. Built performant REST API endpoints and Supabase triggers to handle real-time game list updates, cover art sync, and user preference persistence with 500ms average response times and 99% uptime.",
    tech: ["Next.js", "React", "Supabase", "IGDB API", "TypeScript"],
    github: "https://github.com/FaizHLI/game-backlog-manager"
  },
  {
    title: "OptimizeAI",
    description: "Engineered an NLP pipeline using semantic similarity to route queries, reducing costly LLM usage by 30%. Developed a gamified CO2 tracker in Next.js to visualize real-time user impact and savings. Diverted simple queries to web search, saving an estimated 2.5 kg of CO2 per 1,000 requests.",
    tech: ["Python", "JavaScript", "Scikit-learn", "Next.js", "NLP"],
    github: "https://github.com/FaizHLI/gardenofsalvation"
  },
  {
    title: "Shrinkflation Analytics",
    description: "Developed a sentiment analysis tool that processed 100,000+ tweets about shrinkflation. Created a Twitter API-based data pipeline for automated data collection, preprocessing, and tokenization, achieving an 85% model accuracy rate. Discovered a 20% increase in consumer mentions of shrinkflation over six months.",
    tech: ["Python", "Twitter API", "Scikit-learn", "Pandas", "Sentiment Analysis"],
    github: ""
  },
  {
    title: "Automatic Concrete Hydration System",
    description: "Developed wireless sensor network using Arduino BLE modules capturing hydration data at 5-min intervals. Built React Native app with real-time BLE data sync to Firebase, triggering push alerts when thresholds exceeded. Reduced time spent for Duke ASCE team hydrating concrete by 85% using sensor-based soaker hose mechanism.",
    tech: ["React Native", "Arduino", "Firebase", "BLE", "IoT"],
    github: ""
  },
  {
    title: "Technify Website",
    description: "Developed and deployed a responsive website using React and Netlify, improving engagement 40%. Implemented CI/CD via Netlify, reducing deployment time by 30% and enabling agile content updates. Restructured website architecture for better SEO, increasing organic traffic by 25% and partner inquiries by 30%.",
    tech: ["React", "Netlify", "CI/CD", "SEO", "Responsive Design"],
    github: "https://github.com/faizali/technify-website"
  }
];

export const socialLinks = {
  github: "https://github.com/FaizHLI",
  linkedin: "https://linkedin.com/in/faiz-husnain-ali",
  email: "faizhusnainali@gmail.com"
};

export const personalInfo = {
  name: "Faiz Ali",
  title: "Software Engineer",
  location: "Greenville, SC",
  education: "Duke University: BSE in Electrical and Computer Engineering & Computer Science",
  bio: "I'm a passionate software engineer with expertise in full-stack development, cloud infrastructure, and machine learning.",
  about: "Currently pursuing my degree at Duke University, I've gained hands-on experience through internships at Fidelity Investments and various software engineering roles."
};
