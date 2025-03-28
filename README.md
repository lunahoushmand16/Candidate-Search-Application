# candidate-Search-Application

## Description

This application uses the GitHub API to retrieve public user data. It allows users to browse through random GitHub profiles, view more detailed information, and save potential candidates to a shortlist.

- **Motivation:** Learn how to build a modern front-end application using React + TypeScript with API integration.
- **Purpose:** Simulate a candidate sourcing tool that filters and manages potential developer profiles.
- **Problem Solved:** Browsing and filtering large lists of GitHub users manually is tedious. This app automates the process.
- **What I Learned:** React state management, async data fetching, localStorage, TypeScript interfaces, Vite dev environment, styling with CSS, and routing.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Render Link](#render-link)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/lunahoushmand16/candidate-Search-Application
   ```
2. Navigate to the project folder:
   ```sh
   cd GITHUB-API 
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Run the application:
   ```sh
   npm run dev
   ```

## Usage

Browse GitHub users, click ➕ to save them as potential candidates, or ➖ to skip. Then view, search, filter, and manage your saved candidates on the Potential Candidates page.

### Screenshots:

![App View](/Images/Page11.png)
![Potential Candidates page](/Images/Page22.png)


## Credits

- Created by **[Luna Houshmans](https://github.com/lunahoushmand16)**
- Built with [JavaScript XML, React](https://legacy.reactjs.org/docs/introducing-jsx.html)
- Deployed with [Render](https://render.com/)
- [Markdown help via](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## Badges

![GitHub repo size](https://img.shields.io/github/repo-size/lunahoushmand16/candidate-Search-Application)
![GitHub contributors](https://img.shields.io/github/contributors/lunahoushmand16/candidate-Search-Application)
![GitHub stars](https://img.shields.io/github/stars/lunahoushmand16/candidate-Search-Application?style=social)

## Features

- 🔍 GitHub API integration (user data & profiles)
- 💾 LocalStorage-based saving for accepted candidates
- 🔀 Search and filter by name, location, and company
- 🟢 Responsive buttons (Accept / Reject)
- 🌐 Routing via react-router-dom
- 🎨 Clean styling with CSS + dark mode look

## How to Contribute

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make changes and commit: `git commit -m 'Added new feature'`
4. Push changes: `git push origin feature-name`
5. Open a pull request

## Tests

1. Open the Render link
2. Wait for candidates to load
3. Click ➖ to reject a candidate
4. Click ➕ to accept and save the candidate
4. Navigate to Potential Candidates page to view, filter, and manage the saved list

## Render Link

[Render Link]()