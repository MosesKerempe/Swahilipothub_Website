# Swahilipot Hub Website

## Overview
This project aims to create a website that provides information about **Swahilipot Hub**, with a focus on delivering a stunning UI, optimized performance, and accessibility for users with disabilities. The website will follow the structure and design of the current Swahilipot Hub website, using React and Vite (or Next.js, depending on team preference) along with a pages router. The project will include all the core pages of the current website, utilizing the same images and content available.

## Tech Stack
- **Frontend:** React, Vite / Next.js (Choose between JavaScript and TypeScript)
- **Pages Router:** React Router (or Next.js built-in routing)
- **HTML/CSS:** For layout and design
- **Images:** Using the images available from the existing website

## Key Features
1. **Performance Optimization:** The website must load quickly, with minimal loading times.
2. **UI Design:** The website should be visually appealing, balanced in terms of colors (not too bright or dull), and user-friendly.
3. **Accessibility:** Ensure the website is usable by people with disabilities, meeting accessibility standards (WCAG).
4. **Collaboration:** Every team member should contribute to the development, showcasing teamwork and communication.
5. **Planning and Strategy:** The team should document the planning and strategy that went into developing the website.

## Development Instructions
- **UI and Design:** Use the current Swahilipot Hub website as inspiration for layout, styling, and images.
- **Accessibility:** Pay close attention to accessibility features, such as keyboard navigation, color contrast, and screen reader support.
- **Pages Structure:** Replicate the pages and structure of the current website. This includes the homepage, about page, and any other relevant pages.
- **Images:** Use the same images as those on the current website. No additional images will be provided.

## Collaboration Setup

1. **Fork the Repository:**
   - First, **fork** this repository to your own GitHub account by clicking the "Fork" button on the top right of the repository page.

2. **Clone the Repository:**
   - After forking, **clone** the repository to your local machine:
     ```bash
     git clone https://github.com/yourusername/Swahilipothub_Website.git
     ```

3. **Create Your Own Branch:**
   - Navigate into the project directory:
     ```bash
     cd Swahilipothub_Website
     ```
   - Create a **new branch** based on the `main` branch:
     ```bash
     git checkout -b your-branch-name
     ```
     Example: `git checkout -b feature/setup`

4. **Upstream the Main Branch:**
   - Set up the **upstream remote** to keep your fork synced with the original repository (so you can pull in changes from the main project):
     ```bash
     git remote add upstream https://github.com/MosesKerempe/Swahilipothub_Website.git
     ```

5. **Pull Latest Changes from Upstream:**
   - Before starting your work, make sure you pull the latest changes from the upstream repository:
     ```bash
     git fetch upstream
     git checkout main
     git merge upstream/main
     ```

6. **Push Changes to Your Fork:**
   - After making changes, commit your changes and push them to your fork:
     ```bash
     git add .
     git commit -m "Describe your changes here"
     git push origin your-branch-name
     ```

7. **Create a Pull Request:**
   - Once your feature or changes are ready, create a **pull request** to the main repository from your branch, and make sure to describe the changes you made.

## Branches and Workflow

- **Main Branch:** The main branch will contain the stable version of the website.
- **Feature Branches:** Each feature or task will be worked on in separate branches, such as `feature/setup`, `feature/landing-page`, etc.
- **Pull Requests:** All changes should be made through pull requests for review and discussion before merging into the main branch.

## Guidelines for Development
- **Performance:** Optimize images and code to reduce loading times. Use techniques like lazy loading for images, code splitting, and minification.
- **UI and Design:** Ensure that the UI is visually appealing and does not overwhelm the user with too bright or dull colors. Keep the design simple, modern, and user-friendly.
- **Accessibility:** Implement accessibility features such as:
  - Proper use of `alt` attributes for images
  - Keyboard navigation support
  - ARIA roles for assistive technologies
  - High contrast text for readability
- **Collaboration:** Each team member should take responsibility for a specific section of the website, ensuring that work is divided and managed efficiently.
- **Planning and Strategy:** Plan the project structure, feature implementation, and task allocation carefully. Communication among team members is crucial for timely delivery.

## Performance Metrics
- **Page Load Time:** We will measure and optimize the load time using tools like Lighthouse and WebPageTest.
- **Accessibility Score:** We will ensure the website meets accessibility guidelines, with an accessibility score of at least 90% (using tools like Lighthouse).

## Contact

For any questions or contributions, feel free to open an issue or contact the project maintainer.

---

**Note:** This project is a collaborative effort. Please ensure clear communication and regular updates with your team to meet deadlines and expectations.
