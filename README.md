# 🚀 BeyondChats – AI-Powered Blog Automation Platform

A full-stack application that scrapes blog articles, enhances them using competitor analysis and Large Language Models (LLMs), and displays both original and AI-updated versions through a clean React frontend.

Built as part of the **BeyondChats Full Stack Developer Intern Assignment**.

The project demonstrates backend development, automation pipelines, AI integration, and frontend API consumption in a real-world scenario.


## 📖 Overview

This project automates the process of improving blog content using AI.

The system:
- Scrapes the oldest blog articles from BeyondChats
- Stores original articles in MongoDB
- Uses competitor analysis and Google Gemini LLM to generate improved versions
- Preserves both original and updated articles
- Exposes REST APIs for data access
- Displays articles in a responsive React frontend


## ✨ Key Features

- Web scraping with correct chronological ordering
- MongoDB storage with original and updated article versions
- RESTful CRUD APIs using Node.js and Express
- Automated AI content enhancement using Google Gemini
- Competitor article discovery via Google Search API
- Fault-tolerant automation pipeline
- React (Vite) frontend displaying original vs updated articles
- Clean monorepo structure (frontend + backend)


## 📂 Project Structure

```text
beyondchats/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── scrapers/
│   │   └── automation/
│   ├── package.json
│   └── .env (ignored)
│
├── frontend/
│   ├── src/
│   ├── index.html
│   └── package.json
│
└── README.md

```

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Axios
- Cheerio

### Automation & AI
- Google Search API (Serper.dev)
- Google Gemini LLM (gemini-2.5-flash)
- Prompt Engineering

### Frontend
- React (Vite)
- JavaScript
- Basic CSS / Inline Styling

### Tooling
- Git & GitHub
- Postman
- Nodemon


## 🧪 Local Development Notes

- Backend runs on port 5000
- Frontend expects backend at `/api/articles`
- Cold-start retry logic implemented for cloud deployments



## ⚙️ Backend

The backend is responsible for scraping articles, storing data, running automation, and exposing REST APIs.

### Backend Setup
```bash
cd backend
npm install
npm run dev
```
#### Environment Variables:-
Create a .env file inside backend/:
```bash
PORT=5000
MONGO_URI=your_mongodb_uri
SERPER_API_KEY=your_serper_api_key
GEMINI_API_KEY=your_gemini_api_key
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|------|--------|------------|
| GET | /api/articles | Fetch all articles |
| GET | /api/articles/:id | Fetch article by ID |
| POST | /api/articles | Create article |
| PUT | /api/articles/:id | Update article |
| DELETE | /api/articles/:id | Delete article |


## 🔁 Automation Pipeline

The automation pipeline performs AI-based content enhancement:

1. Fetch original articles from the database
2. Search for competitor articles using Google Search API
3. Scrape competitor content
4. Generate improved content using Google Gemini LLM
5. Create a new updated article linked to the original
6. Preserve original content without overwriting

Automation can be run using:
```bash
cd backend
node src/automation/runAutomation.js
```


## 🖥 Frontend

The frontend is a React (Vite) application that consumes backend APIs and displays articles.

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
### Frontend Features
-Fetches articles from backend APIs
-Displays both original and AI-updated articles
-Visual distinction using badges
-Responsive and clean UI


## ⚠️ Design Decisions & Error Handling

- Original and updated articles are stored as separate records
- Updated articles reference originals using `parentArticleId`
- Automation skips already-processed articles
- External scraping failures do not crash the pipeline
- Sequential processing avoids API rate limits


## 🚀 Future Improvements

- Frontend filtering (Original vs Updated)
- Side-by-side comparison view
- Scheduled automation (cron jobs)
- SEO scoring and analysis
- Authentication and role-based access


## 👤 Author

**Palash Bhivgade**  
Final Year Electronics & Telecommunication Engineering Student  
Aspiring Backend / Full Stack Developer  

📧 Email: pdbhivgade77@gmail.com  
🔗 GitHub: https://github.com/palashx7  
🔗 LinkedIn: https://www.linkedin.com/in/palash-bhivgade-54089a191


⭐ This project demonstrates real-world backend automation, AI integration, and frontend API consumption rather than simple CRUD functionality.
