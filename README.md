# Final Year Project - FYP_22355561

This project is a comprehensive tool designed to collect, manage, and display user reviews across multiple platforms. It includes a **data collection pipeline**, a **React frontend**, a **Flask backend**, and a **browser extension**. The tool allows users to view, create, and manage reviews seamlessly.

---

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
4. [Data Collection](#data-collection)
5. [Backend](#backend)
6. [Frontend](#frontend)
7. [Browser Extension](#browser-extension)
8. [Running the Project](#running-the-project)

---

## Overview

The project integrates multiple components to provide a unified experience for managing user reviews:
- **Data Collection**: Scripts to categorize and visualize user reviews.
- **Backend**: A Flask API with SQLite database for storing and managing reviews.
- **Frontend**: A React-based UI for displaying and interacting with reviews.
- **Browser Extension**: A Chrome extension to display reviews in both the options page and popup.

---

## Features

- **Data Collection**:
  - Categorize user reviews based on themes.
  - Generate visualizations (e.g., pie charts) for review categories.

- **Backend**:
  - REST API for fetching and creating reviews.
  - SQLite database for persistent storage.

- **Frontend**:
  - Sidebar navigation with multiple sections (Dashboard, Reviews, Evaluations, etc.).
  - Reviews table with search, filtering, and dynamic updates.
  - Dialog for creating new reviews.

- **Browser Extension**:
  - Options page to display all reviews in a card-based layout.
  - Popup to display reviews in a compact format.

---

## Data Collection

### Scripts
1. **`Categorize Comments`**:
   - Categorizes reviews into predefined themes based on keywords.
   - Saves the categorized data to a csv.

2. **`Pie Chart`**:
   - Reads categorized reviews and generates a pie chart of category occurrences.
   - Saves the chart as a png.

### Categorized Themes
- **Feature Requests**: Keywords like "PWA", "feature", "missing".
- **Usability & Workflow**: Keywords like "UI", "workflow", "extension".
- **Performance & Accuracy**: Keywords like "accuracy", "performance".
- **Positive Feedback**: Keywords like "helpful", "great", "love".
- **Negative Feedback**: Keywords like "missing", "complaint", "bad".

---

## Backend

### Overview
The backend is built using Flask and provides a REST API for managing reviews. It uses SQLite for persistent storage.

### Endpoints
1. **GET `/api/reviews`**:
   - Fetch all reviews from the database.
2. **POST `/api/reviews`**:
   - Add a new review to the database.

### Database
- **Schema**:
  - `id`: Primary key.
  - `platform`: Name of the platform (e.g., Spotify, Reddit).
  - `url`: URL of the platform.
  - `review`: Review text.
  - `status`: Status of the review (Active/Inactive).

---

## Frontend

### Overview
The frontend is built using React and provides a user-friendly interface for managing reviews.

### Features
- **Sidebar Navigation**:
  - Links to Dashboard, Reviews, Evaluations, Insights, Forum, and Help.
- **Reviews Table**:
  - Displays reviews in a table format with search and filtering.
  - Allows creating new reviews via a dialog.
- **Dynamic Updates**:
  - New reviews are added to the table without requiring a page reload.

---

## Browser Extension

### Overview
The Chrome extension displays reviews in two contexts:
1. **Options Page**:
   - Displays all reviews in a card-based layout.
   - Styled for a larger viewport.
2. **Popup**:
   - Displays reviews in a compact format.
   - Styled for a smaller viewport with scrolling.

### Manifest
- **Permissions**:
  - `tabs`, `scripting`, `storage`: For interacting with browser tabs and storing data.
  - `host_permissions`: Access to the Flask backend (`http://localhost:5000`).

---

## Running the Project

### 1. Backend
Navigate to the `backend` directory and run:
```bash
python app.py
```

### 2. Frontend
Navigate to the `frontend` directory and run:
```bash
npm install
npm run dev
```

### 3. Browser Extension
1. Navigate to `chrome://extensions/` in your browser.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the `extension` folder.

### 4. Data Collection
Run the scripts in the `data_collection/scripts` directory:
```bash
python categorise_comments.py
python pie_chart_Heurio.py
```

---