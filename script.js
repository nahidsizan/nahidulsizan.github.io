// Shared functionality across all pages
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
        });
    }

    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
    } else if (localStorage.getItem('darkMode') === 'false') {
        document.documentElement.classList.remove('dark');
    }

    // Load projects on homepage
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        loadProjects();
        loadCertificates();
    }
});

// Load sample projects for the homepage
function loadProjects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React frontend and Node.js backend.",
            tags: ["React", "Node.js", "MongoDB"],
            image: "http://static.photos/technology/640x360/1"
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather application with 5-day forecast and location search.",
            tags: ["JavaScript", "API", "CSS"],
            image: "http://static.photos/nature/640x360/2"
        },
        {
            title: "Task Management App",
            description: "Productivity application to organize and track daily tasks with drag-and-drop.",
            tags: ["React", "Firebase", "TailwindCSS"],
            image: "http://static.photos/workspace/640x360/3"
        }
    ];

    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 fade-in';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${project.title}</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(tag => `
                        <span class="bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-xs px-3 py-1 rounded-full">${tag}</span>
                    `).join('')}
                </div>
            </div>
        `;
        container.appendChild(projectCard);
    });
}

// Load sample certificates for the homepage
function loadCertificates() {
    const certificates = [
        {
            title: "Full Stack Web Development",
            issuer: "Coursera",
            date: "June 2023",
            image: "http://static.photos/education/640x360/4"
        },
        {
            title: "Machine Learning Fundamentals",
            issuer: "Udemy",
            date: "March 2023",
            image: "http://static.photos/science/640x360/5"
        }
    ];

    const container = document.getElementById('certificates-container');
    
    certificates.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 fade-in';
        certCard.innerHTML = `
            <img src="${cert.image}" alt="${cert.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">${cert.title}</h3>
                <div class="flex justify-between items-center">
                    <span class="text-gray-600 dark:text-gray-300">${cert.issuer}</span>
                    <span class="text-gray-500 dark:text-gray-400 text-sm">${cert.date}</span>
                </div>
            </div>
        `;
        container.appendChild(certCard);
    });
}