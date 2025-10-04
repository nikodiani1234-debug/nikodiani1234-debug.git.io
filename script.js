document.addEventListener('DOMContentLoaded', () => {
    // ---
    // --- CONSTANTS & VARIABLES ---
    // ---
    const GITHUB_USERNAME = 'nikodiani1234-debug';
    const API_URL_REPOS = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;
    let allRepos = []; // To store all fetched repositories

    // ---
    // --- DOM ELEMENTS ---
    // ---
    const preloader = document.getElementById('preloader');
    const themeToggle = document.getElementById('theme-toggle');
    const reposContainer = document.getElementById('repos-container');
    const searchBar = document.getElementById('search-bar');
    const contactForm = document.getElementById('contact-form');
    const backToTopButton = document.querySelector('.back-to-top');

    // ---
    // --- INITIALIZATION ---
    // ---
    const init = () => {
        setupTheme();
        setupTypewriter();
        setupScrollReveal();
        setupBackToTopButton();
        fetchGitHubRepos();
        addEventListeners();
    };

    // ---
    // --- THEME SWITCHER ---
    // ---
    const setupTheme = () => {
        const userTheme = localStorage.getItem('theme');
        if (userTheme) {
            document.documentElement.setAttribute('data-theme', userTheme);
        }
    };

    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // ---
    // --- TYPEWRITER ANIMATION ---
    // ---
    const setupTypewriter = () => {
        new Typed('#typewriter', {
            strings: ['Software Developer', 'Problem Solver', 'Tech Explorer'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });
    };

    // ---
    // --- SCROLL REVEAL ANIMATION ---
    // ---
    const setupScrollReveal = () => {
        const sr = ScrollReveal({
            distance: '50px',
            duration: 2000,
            reset: false,
        });
        sr.reveal('.hero-content, .about-container, .skills-container, .stats-container, .blog-container, .contact-form', { origin: 'bottom' });
        sr.reveal('.repo-card', { interval: 200 });
    };

    // ---
    // --- BACK TO TOP BUTTON ---
    // ---
    const setupBackToTopButton = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('hidden');
            } else {
                backToTopButton.classList.add('hidden');
            }
        });
    };

    // ---
    // --- GITHUB REPOSITORY FETCHER ---
    // ---
    const fetchGitHubRepos = async () => {
        try {
            const response = await fetch(API_URL_REPOS);
            if (!response.ok) throw new Error('Failed to fetch repositories.');
            
            allRepos = await response.json();
            allRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
            displayRepos(allRepos);
        } catch (error) {
            reposContainer.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
            console.error(error);
        } finally {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 500);
        }
    };

    const displayRepos = (repos) => {
        reposContainer.innerHTML = '';
        repos.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.classList.add('repo-card');
            repoCard.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></h3>
                <p>${repo.description || 'No description available.'}</p>
                <div class="repo-stats">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>${repo.language || 'N/A'}</span>
                </div>
                <div class="repo-links">
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn-secondary">View Code</a>
                    ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" class="btn">Live Demo</a>` : ''}
                </div>
            `;
            reposContainer.appendChild(repoCard);
        });
    };

    const filterRepos = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const filteredRepos = allRepos.filter(repo => 
            repo.name.toLowerCase().includes(lowerCaseQuery) ||
            (repo.language && repo.language.toLowerCase().includes(lowerCaseQuery))
        );
        displayRepos(filteredRepos);
    };

    // ---
    // --- CONTACT FORM (EMAILJS) ---
    // ---
    const setupContactForm = () => {
        // CUSTOMIZE: Replace with your EmailJS User ID, Service ID, and Template ID
        const EMAILJS_USER_ID = 'YOUR_USER_ID';
        const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
        const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

        emailjs.init(EMAILJS_USER_ID);

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
                .then(() => {
                    alert('Message sent successfully!');
                    contactForm.reset();
                }, (error) => {
                    alert('Failed to send message. Please try again.');
                    console.error('EmailJS Error:', error);
                });
        });
    };

    // ---
    // --- EVENT LISTENERS ---
    // ---
    const addEventListeners = () => {
        themeToggle.addEventListener('click', toggleTheme);
        searchBar.addEventListener('input', (e) => filterRepos(e.target.value));
        setupContactForm(); // Initialize EmailJS
    };

    // ---
    // --- RUN APP ---
    // ---
    init();
});
