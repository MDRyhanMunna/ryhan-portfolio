export const profile = {
  github: "https://github.com/MDRyhanMunna",
  linkedin: "",
  email: "mryhanmunna@gmail.com",
  resume: "/Md_Ryhan_Munna_Resume.docx",
};

export const skills = [
  { title: "Programming", items: ["Python", "C", "C++", "Java"] },
  {
    title: "Data & analytics",
    items: ["SQL", "Pandas", "NumPy", "Power BI", "Excel", "Matplotlib"],
  },
  { title: "Web development", items: ["HTML", "CSS", "JavaScript", "PHP", "React", "FastAPI", "WebSockets", "Streamlit"] },
  { title: "AI & machine learning", items: ["scikit-learn", "TensorFlow", "Keras"] },
  { title: "Database systems", items: ["MySQL", "SQLite", "Relational databases", "SQL queries"] },
  { title: "Deployment & integrations", items: ["Render", "Netlify", "EmailJS", "JWT authentication"] },
  { title: "Development tools", items: ["Git", "GitHub", "Google Colab", "VS Code"] },
];

export const featured = [
  {
    id: "olist",
    title: "Olist E-Commerce Sales & Customer Analytics",
    label: "E-commerce analytics",
    image: "/projects/olist.png",
    description:
      "An end-to-end look at sales, customers, delivery performance, and satisfaction in the Brazilian Olist dataset.",
    metrics: [
      ["96,478", "delivered orders"],
      ["R$13.22M", "product revenue"],
    ],
    tags: ["MySQL", "Python", "Power BI"],
    github: "https://github.com/MDRyhanMunna/olist-ecommerce-analytics",
    detail:
      "Validated relational data in MySQL, explored patterns with Python, and built a three-page Power BI report. The analysis connects sales and customer behavior with delivery performance and review scores.",
    finding:
      "Careful joins and consistent order definitions keep sales and customer metrics from being overstated.",
  },
  {
    id: "bank",
    title: "Bank Loan Default & Credit Risk Analytics",
    label: "Credit risk analytics",
    image: "/projects/bank.png",
    description:
      "An exploratory analysis of borrower profiles and observed default rates across loan and customer groups.",
    metrics: [
      ["255,347", "loan records"],
      ["11.61%", "observed default rate"],
    ],
    tags: ["MySQL", "Python", "Power BI"],
    github: "https://github.com/MDRyhanMunna/bank-loan-default-risk-analytics",
    detail:
      "Checked data quality with SQL, explored borrower and loan groups in Python, and created a three-page Power BI report covering the loan portfolio, borrower profiles, and default risk.",
    finding:
      "This is descriptive analysis of a learning dataset. It does not predict individual defaults or establish cause and effect.",
  },
];

export const projects = [
  {
    title: "DataMate AI",
    category: "Web & software",
    description: "An interactive data workspace for extracting, cleaning, analyzing and exporting data from files, public webpages and pasted text. Includes editable tables, missing-value handling, undo history and an EmailJS contact form.",
    tags: ["Python", "Streamlit", "EmailJS"],
    github: "https://github.com/MDRyhanMunna/DataMate-AI",
  },
  {
    title: "FastAPI WebSocket Chatroom",
    category: "Web & software",
    description: "A real-time chat application with public and private rooms, direct messages, JWT authentication and persistent message history. Includes typing indicators, read receipts and file sharing.",
    tags: ["FastAPI", "WebSockets", "SQLite", "JavaScript"],
    github: "https://github.com/MDRyhanMunna/fastapi-websocket-chat",
  },
  {
    title: "AI-Driven YouTube Automation",
    category: "AI/ML",
    description: "A content pipeline connecting AI-generated scripts, voice narration, generated visuals and video processing.",
    tags: ["Python", "LLM APIs", "Text-to-speech"],
    github: "https://github.com/MDRyhanMunna/AI-Driven-YouTube-Automation",
  },
  {
    title: "Deepfake Detection",
    category: "AI/ML",
    description: "An academic project exploring the detection of manipulated visual media.",
    tags: ["Computer vision", "Classification"],
    github: "",
  },
  {
    title: "Number Duel",
    category: "Web & software",
    description: "A browser-based multiplayer number game with private rooms, live chat and turn-based logic using JavaScript and PeerJS.",
    tags: ["JavaScript", "PeerJS", "Multiplayer"],
    github: "https://github.com/MDRyhanMunna/GuessTheNumber",
  },
  {
    title: "Airline Management System",
    category: "Database systems",
    description: "A web-based system for flight booking, schedules, and passenger records.",
    tags: ["HTML / CSS", "JavaScript", "PHP"],
    github: "https://github.com/MDRyhanMunna/Airline_Management_System",
  },
  {
    title: "Android Malware Detection",
    category: "AI/ML",
    description: "An academic project exploring malware detection for Android applications.",
    tags: ["Security", "Machine learning"],
    github: "",
  },
  {
    title: "School Management System",
    category: "Database systems",
    description:
      "A Java application for student, teacher and administrative records using object-oriented programming.",
    tags: ["Java", "OOP"],
    github: "https://github.com/MDRyhanMunna/School-Management-System",
  },
  {
    title: "AI Image Classification",
    category: "AI/ML",
    description: "An image classification project exploring convolutional neural networks.",
    tags: ["Python", "TensorFlow", "Keras"],
    github: "",
  },
];
