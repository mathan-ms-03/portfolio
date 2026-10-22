# 🌟 Mathan S — Full Stack Developer Portfolio & Project Showcase

[![GitHub Profile](https://img.shields.io/badge/GitHub-mathan--ms--03-6366f1?style=for-the-badge&logo=github)](https://github.com/mathan-ms-03)
[![Placement Management System](https://img.shields.io/badge/Repo-Placement%20System-06b6d4?style=for-the-badge&logo=github)](https://github.com/mathan-ms-03/placement-management-system)
[![Phone E-Commerce](https://img.shields.io/badge/Repo-Phone%20Store-8b5cf6?style=for-the-badge&logo=github)](https://github.com/mathan-ms-03/e-commerce)
[![License: MIT](https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Open%20for%20Opportunities-f59e0b?style=for-the-badge)]()

A sleek, ultra-responsive modern developer portfolio and technical project showcase tailored for **Mathan S**, an aspiring **Full Stack Developer** and Computer Science undergraduate at **Adithya Institute of Technology** (CGPA: 7.04).

Built from the ground up using **semantic HTML5**, **vanilla CSS3** with a custom design system, and modular **ES6+ JavaScript** — delivering 100/100 Lighthouse performance, zero build dependencies, and instant one-click deployment to **GitHub Pages**, **Vercel**, or **Netlify**.

---

## 📸 Portfolio Preview

| Dark Mode (Default) | Light Mode |
|:-------------------:|:----------:|
| High-contrast obsidian dark palette (`#07090e`) with vibrant cyan and violet glows | Clean slate palette (`#f8fafc`) with deep navy typography |

---

## ✨ Key Features & Architectural Highlights

- **⚡ Zero-Build, High-Performance Architecture**: Built with clean, native web standards (HTML5, CSS3, JavaScript ES6+). No npm build step required to run or deploy.
- **🌓 Dual-Theme Engine (Dark / Light Mode)**:
  - Automatic system color scheme detection via `matchMedia('(prefers-color-scheme: dark)')`.
  - Manual toggle with animated SVG Sun/Moon icons.
  - Persistent state saved to `localStorage`.
- **📱 Mobile-First Responsive Design**:
  - Fluid layouts powered by **CSS Grid** and **Flexbox**.
  - Accessible mobile hamburger navigation drawer with focus management.
  - Tested across mobile (320px+), tablet, laptop, and ultra-wide desktop screens.
- **🎯 Dynamic Typing Subtitle & Interactive Stats**:
  - Live typing effect cycling through technical roles.
  - Animated stats counters for projects, certifications, internship, and CGPA.
- **🗂️ Interactive Project Case Study Modals**:
  - Deep-dive architectural breakdowns for featured projects (*Placement Management System* & *Phone Shopping Website*).
  - Includes problem statements, system architectures, database schema highlights, and engineering challenges.
  - Keyboard accessible (`Escape` to close, click-outside to dismiss).
- **📄 In-Browser Printable Curriculum Vitae (CV Modal)**:
  - Dedicated resume viewer matching Mathan S's verified resume.
  - One-click **Print / Save as PDF** functionality with tailored print media styles (`@media print`).
- **📋 1-Click Clipboard Utility with Toast Alerts**:
  - Instant copy for email (`mathansuresh315@gmail.com`) and phone (`+91 9962418084`) with animated toast feedback.
- **🏷️ Real-Time Filterable Skills & Projects**:
  - Filter technical capabilities across *Languages*, *Frontend*, *Backend & DB*, and *Tools & Analytics*.
  - Real-time DOM updates with smooth entrance animations.
- **📬 Interactive Contact Form**:
  - Front-end validation for name, email regex, and message body.
  - Simulated async submission with loading spinner and confirmation notification.

---

## 🛠️ Tech Stack & Skills Summary

| Domain | Technologies & Tools |
|---|---|
| **Programming Languages** | JavaScript (ES6+), Python, Java |
| **Frontend Engineering** | HTML5, CSS3 (Modern Flexbox & Grid), React.js, DOM APIs |
| **Backend & Services** | Node.js, Express.js, RESTful APIs, JWT Authentication |
| **Database Management** | MySQL, Relational Database Modeling (3NF), Query Optimization |
| **Data & Analytics Tools** | Power BI, Microsoft Excel, VS Code |
| **Version Control & Hosting** | Git, GitHub, GitHub Pages, Vercel, Netlify |

---

## 📂 Project Structure

```text
task1/
├── index.html              # Semantic HTML5 single-page application & accessibility tags
├── css/
│   └── style.css           # Modern design system, tokens, dark/light themes, animations & print styles
├── js/
│   └── main.js             # Modular ES6+ script: themes, modals, filters, copy-to-clipboard, toast engine
├── assets/
│   └── images/             # Optimized project mockups & developer avatar
│       ├── avatar.jpg               # Developer portrait avatar
│       ├── placement-system.jpg     # Campus Placement System laptop mockup
│       ├── phone-store.jpg          # Phone Shopping E-Commerce laptop mockup
│       └── portfolio-showcase.jpg   # Responsive portfolio device mockup
└── README.md               # Complete project documentation & deployment manual
```

---

## 🚀 Live Deployment Guide

This portfolio requires **zero build steps** or build servers. You can deploy it live in under 2 minutes using any of the following platforms:

### Option 1: Deploy to GitHub Pages (Recommended)

1. Create a new public repository on GitHub named `portfolio` (or `mathan-ms-03.github.io`).
2. Initialize and push your repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Mathan S developer portfolio"
   git branch -M main
   git remote add origin https://github.com/mathan-ms-03/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Navigate to **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select **Branch**: `main` and folder: `/ (root)`.
   - Click **Save**.
4. Your portfolio will be live at:
   `https://mathan-ms-03.github.io/portfolio/`

---

### Option 2: Deploy to Vercel (1-Click Instant Deploy)

1. Install Vercel CLI (optional) or visit [vercel.com](https://vercel.com).
2. Connect your GitHub account and import your repository `mathan-ms-03/portfolio`.
3. Keep default settings:
   - **Framework Preset**: `Other`
   - **Root Directory**: `./`
4. Click **Deploy**. Vercel will immediately deploy the website with a global CDN and automatic HTTPS.

---

### Option 3: Deploy to Netlify

1. Sign in to [netlify.com](https://netlify.com).
2. Either drag-and-drop the project folder directly into **Netlify Drop**, or select **Import from Git** and link your GitHub repository.
3. Publish directory: `.` (root).
4. Click **Deploy Site**.

---

## 💻 Local Development Setup

To run and preview the website locally on your machine:

```bash
# Clone the repository
git clone https://github.com/mathan-ms-03/portfolio.git

# Navigate into the project folder
cd portfolio

# Option A: Start a local server with Python 3
python -m http.server 3000

# Option B: Start with Node.js npx serve
npx serve . -p 3000

# Open in your browser:
# http://localhost:3000/
```

---

## 📑 Resume Credentials Reference

### Education
- **Bachelor of Engineering (B.E.) in Computer Science and Engineering**  
  *Adithya Institute of Technology, Coimbatore* (2023–2027) | **CGPA: 7.04**
- **Higher Secondary Certificate (12th Standard)**  
  *Government Higher Secondary School, Nedumanur, Kallakurichi* (2022–2023) | **Percentage: 75.5%**

### Professional Experience
- **Web Development Intern** — *Wee Qub Technologies* (30 Days Internship, 2026)  
  Built responsive web applications utilizing HTML, CSS, JavaScript, React.js, Node.js, and MySQL.

### Verified Certifications
1. **Full Stack Development** — Novi Tech
2. **HTML and CSS** — Udemy
3. **JavaScript Fundamentals** — Udemy
4. **Basics of Python** — Infosys Springboard
5. **Java Programming Fundamentals** — Infosys Springboard
6. **Python Foundation Certificate** — Infosys Springboard
7. **Java Foundation Certificate** — Infosys Springboard

### Technical Achievements
- Actively participated in multiple technical paper presentations across college and state symposiums, showcasing research analysis and technical communication skills.

---

## 📬 Contact & Connect

- **Name:** Mathan S
- **Location:** Coimbatore, Tamil Nadu, India
- **Email:** [mathansuresh315@gmail.com](mailto:mathansuresh315@gmail.com)
- **Phone:** [+91 9962418084](tel:+919962418084)
- **GitHub:** [https://github.com/mathan-ms-03](https://github.com/mathan-ms-03)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
