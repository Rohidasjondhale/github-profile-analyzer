# GitHub Profile Analyzer API

## Project Overview

GitHub Profile Analyzer API is a backend application built using Node.js, Express.js, MySQL, and GitHub Public API.

This project fetches public GitHub profile data using a GitHub username, stores useful insights in a MySQL database, and provides APIs to retrieve analyzed profiles.

---

# Features

- Fetch GitHub profile using username
- Store GitHub profile insights in MySQL
- Get all analyzed profiles
- Get single profile details
- Prevent duplicate profile storage
- Error handling
- REST API architecture

---

# Tech Stack

- Node.js
- Express.js
- MySQL
- GitHub Public API
- Axios
- dotenv

---

# Folder Structure

```bash
github-profile-analyzer/

│
├── config/
│   └── db.js
│
├── controllers/
│   └── githubController.js
│
├── routes/
│   └── githubRoutes.js
│
├── .env
├── .gitignore
├── database.sql
├── package.json
├── server.js
└── README.md
