# Developer Portfolio Website

This is a personal developer portfolio website built with HTML, CSS, and JavaScript. It's designed to showcase projects, skills, and provide a point of contact. The portfolio dynamically fetches and displays GitHub repositories.

## Features

- **Responsive Design**: Adapts to different screen sizes for a seamless experience on desktop and mobile devices.
- **Dark/Light Theme**: A theme switcher to toggle between dark and light modes, with the user's preference saved in local storage.
- **Dynamic GitHub Projects**: Automatically fetches and displays public repositories from a specified GitHub user using the GitHub API.
- **Project Search**: A search bar to filter projects by name or language.
- **Animations**: Smooth scroll-reveal animations and a typewriter effect for the hero section.
- **Contact Form**: A functional contact form integrated with EmailJS (requires configuration).
- **Preloader**: A simple preloader to enhance the initial loading experience.
- **Back to Top Button**: Appears on scroll for easy navigation.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Libraries**:
    - [Typed.js](https://github.com/mattboldt/typed.js/) for the typewriter animation.
    - [ScrollReveal](https://scrollrevealjs.org/) for scroll animations.
    - [EmailJS](https://www.emailjs.com/) for the contact form functionality.
    - [Font Awesome](https://fontawesome.com/) for icons.

## Customization

To customize this portfolio for your own use, follow these steps:

1.  **Update Personal Information**:
    - In `index.html`, change the text in the "About Me" section, social media links, and any other personal details.
    - Replace the profile photo URL in the `<img>` tag within the `about-container`.

2.  **Configure GitHub Repositories**:
    - In `script.js`, change the `GITHUB_USERNAME` constant to your GitHub username to fetch your repositories.
    ```javascript
    const GITHUB_USERNAME = 'your-github-username';
    ```

3.  **Set Up Contact Form**:
    - Sign up for [EmailJS](https://www.emailjs.com/).
    - In `script.js`, replace the placeholder values for `EMAILJS_USER_ID`, `EMAILJS_SERVICE_ID`, and `EMAILJS_TEMPLATE_ID` with your actual EmailJS credentials.
    ```javascript
    const EMAILJS_USER_ID = 'YOUR_USER_ID';
    const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
    const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    ```

4.  **Customize Appearance**:
    - Modify `style.css` to change colors, fonts, and layout to your liking. The CSS variables at the top of the file make it easy to change the color scheme.

## How to Run Locally

1.  Clone the repository:
    ```bash
    git clone https://github.com/nikodiani1234-debug/nikodiani1234-debug.git.io.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd nikodiani1234-debug.git.io
    ```
3.  Open the `index.html` file in your web browser. You can do this by double-clicking the file or by using a live server extension in your code editor (like Live Server for VS Code).
