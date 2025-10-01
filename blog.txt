# HackerBlog — Frontend

> A modern, developer‑centric blogging platform frontend built with a terminal aesthetic and developer-friendly vibes.

## 🚀 About

HackerBlog is designed for coders to document their journey, share insights, and connect through stories — with a UI that speaks “developer.”  
This frontend project implements the client side of the HackerBlog platform, combining sleek animations, a terminal-inspired design, and smooth UX.

### Key Features

- Terminal‑inspired UI with MS‑DOS style cursors, typewriter animations  
- Custom purple/blue theme and clean design  
- Fully responsive (desktop / tablet / mobile)  
- Authentication flow (login / register) with validation  
- Context-based state / session management  
- Fast build & dev experience using Vite  
- Interactive animations, hover effects, and smooth transitions  

## 🛠 Tech Stack

| Area                   | Tool / Library                           | Version / Notes         |
|------------------------|------------------------------------------|--------------------------|
| Framework / UI         | React                                    | 18+                      |
| Build & Dev Server     | Vite                                     | 7.1.6+                   |
| Routing                | React Router                             | 7.9.3+                   |
| HTTP / API Integration | Axios                                    | 1.12.2+                  |
| Linting / Code Quality | ESLint                                   | 9.35.0+                  |
| Styling / Icons        | CSS / React Icons                        | —                        |

## 📁 Project Structure

```
src/
├── assets/                # static assets: images, icons, etc.
├── api/                   # API calls, configuration & interceptors
│   ├── api.config.js
│   ├── api.intercepter.js
│   └── auth/               # auth-related APIs
├── components/            # reusable UI components
│   ├── TopBar.jsx
│   └── TopBar.css
├── context/               # React Context / global state
│   └── MyContext.jsx
├── pages/                  # page-level components
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   └── AuthPages.css
├── routes/                # route protection wrappers
│   ├── ProtectedRoute.jsx
│   └── PublicRoute.jsx
└── utils/                  # helper / utility functions
```

Other root files include: `.env.example`, `vite.config.js`, `package.json`, `vercel.json`, `eslint.config.js`, etc.

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or above recommended)  
- npm or yarn  
- Git  

### Installation & Local Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/HacktoberBlog/hackerblog-frontend.git
   cd hackerblog-frontend
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start dev server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **View in browser**  
   Open `http://localhost:5173` (or the port indicated in your terminal)

### Available Scripts

| Command            | Description                                 |
|--------------------|---------------------------------------------|
| `npm run dev`       | Start local dev server with hot reload      |
| `npm run build`     | Build frontend for production               |
| `npm run preview`   | Preview the built production version locally |
| `npm run lint`      | Run ESLint analysis                         |

## ✅ Contributing

We welcome contributions of all kinds — whether it’s UI improvements, bug fixes, docs, or features. This repo is participating in Hacktoberfest 2025.

### How to Contribute

1. Fork this repository  
2. Create a branch (e.g. `feature/awesome-thing`)  
3. Make your changes (adhere to coding and style guidelines)  
4. Commit with a clear message  
5. Push to your fork  
6. Open a Pull Request  

### Contribution Areas

- Frontend components & pages  
- Animations, styling, UX enhancements  
- Bug fixes & testing  
- Documentation, code comments, README improvements  

### Issue Labels (for guidance)

- `good-first-issue` — for beginners  
- `hacktoberfest` — eligible issues for the event  
- `frontend` — frontend-specific tasks  
- `bug` — bug fixing  
- `enhancement` — new features or improvements  

## 🔗 Related Repositories

- **Backend**: [HacktoberBlog / SpringBootBackend](https://github.com/HacktoberBlog/SpringBootBackend)  
- **Organization**: [HacktoberBlog](https://github.com/HacktoberBlog)

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for full details.

## 🙏 Acknowledgments & Support

- Big thanks to the React and Vite teams  
- Shoutout to Hacktoberfest for encouraging open source contributions  
- To all contributors: thank you!  

For issues, questions or discussions, feel free to open an issue or a discussion on GitHub.
