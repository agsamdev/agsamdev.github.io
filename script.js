// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Regex: Lookahead and Lookbehind Assertions",
        category: "programming",
        excerpt: "Learn how to use lookahead and lookbehind assertions in regular expressions.",
        image: "images/regex-bg.png",
        date: "2025-01-13",
        url: "blog/regex-lookahead-lookbehind.html"
    },
  
];

// Function to create blog card HTML
const createBlogCard = (post) => `
    <div class="blog-card" data-category="${post.category}">
        <img src="${post.image}" alt="${post.title}">
        <div class="blog-content">
            <div class="blog-category">${post.category.toUpperCase()}</div>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <a href="${post.url}" class="read-more">Read More →</a>
        </div>
    </div>
`;

// Function to filter blog posts by category
const filterBlogPosts = (category) => {
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
};

// Initialize blog grid
const initializeBlogGrid = () => {
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = blogPosts.map(createBlogCard).join('');
};

// Add event listeners for category buttons
const initializeCategoryButtons = () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter blog posts
            filterBlogPosts(button.dataset.category);
        });
    });
};

// Navbar scroll effect
const initializeNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            navbar.style.boxShadow = 'none';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }

        lastScroll = currentScroll;
    });
};

// Scroll Animation
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
    });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    observeElements();
    initializeBlogGrid();
    initializeCategoryButtons();
    initializeNavbarScroll();
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
