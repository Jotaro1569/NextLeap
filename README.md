# 🚀 NextLeap – AI-Powered Career Growth Platform

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19-61dafb?style=flat&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=flat&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat&logo=prisma)
![Clerk](https://img.shields.io/badge/Auth-Clerk-4B32C3?style=flat)
![Google AI](https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=flat&logo=google)
[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=flat)](https://next-leap-iota.vercel.app/)

NextLeap is a **full-stack web application** designed to help students and professionals **build resumes, track assessments, and gain personalized job market insights**.  

It combines **AI-generated suggestions**, **MCQ-based interview prep**, and **dynamic PDF export**  all wrapped in a modern, dark-themed UI.

---

## ✨ Features

- 📝 **Smart Resume Builder** – Create, preview, and download resumes as beautiful PDFs  
- 🧠 **Assessment Dashboard** – Take MCQ tests and track your performance over time  
- 📊 **Industry Insights** – Get AI-powered recommendations on skills & jobs to focus on  
- 🖋 **Cover Letter Generator** – Auto-generate professional cover letters in seconds  
- 🔒 **Secure Authentication** – Login & register with [Clerk](https://clerk.dev)  
- 🎨 **Modern UI/UX** – Built with [shadcn/ui](https://ui.shadcn.com) components + TailwindCSS 4  
- 📅 **Data Persistence** – All user data stored via [Prisma ORM](https://www.prisma.io)

---

## 🛠 Tech Stack

**Frontend:**  
- [Next.js 15](https://nextjs.org/) (App Router + Turbopack)  
- [React 19](https://react.dev)  
- [TailwindCSS 4](https://tailwindcss.com/)  
- [shadcn/ui](https://ui.shadcn.com) + Radix UI + Lucide Icons  

**Backend & Database:**  
- [Prisma ORM](https://www.prisma.io/)  
- Inngest (background tasks)  

**Authentication:**  
- [Clerk](https://clerk.com/)  

**AI & Utilities:**  
- [Google Generative AI](https://ai.google.dev) (Gemini 1.5 API)  
- `html2pdf.js` + `marked` for resume/cover letter generation  
- `react-hook-form` + `zod` for form validation  
- `recharts` for analytics  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```
git clone https://github.com/Jotaro1569/NextLeap.git
cd NextLeap
```
2️⃣ Install Dependencies
```
npm install
```
3️⃣ Configure Environment Variables

Create a .env.local file in the root folder and add:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_prisma_database_url
GOOGLE_API_KEY=your_google_ai_key
```

4️⃣ Run the Development Server
```
npm run dev
```
Then open http://localhost:3000
 in your browser.

5️⃣ Screenshots

# Landing Page : 
<img width="1899" height="958" alt="image" src="https://github.com/user-attachments/assets/92d2ae71-17f8-4012-9dfc-2058861233a0" />

# Dashboard/Industry Insights
<img width="1889" height="896" alt="image" src="https://github.com/user-attachments/assets/d2a291aa-a744-4493-a640-bcdc668bc69d" />

# Interview Preparation
<img width="1890" height="902" alt="image" src="https://github.com/user-attachments/assets/77b93c66-4d05-4819-a61b-9bb90da9c758" />

🎯 Roadmap

 - Export insights as PDF

 - Multi-language support

 - More test categories for interview prep

📜 License

This project is licensed under the MIT License. Feel free to fork and build on it.

⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub , it really helps <3
