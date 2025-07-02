// A4Studio JavaScript Animation Engine Demo

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Enhanced hero demo animations
function enhanceHeroDemo() {
    const demoElements = document.querySelectorAll('.demo-element');
    
    demoElements.forEach((element, index) => {
        element.addEventListener('mouseenter', () => {
            element.style.animationPlayState = 'paused';
            element.style.transform = `scale(1.2) rotate(${index * 45}deg)`;
            element.style.transition = 'transform 0.3s ease';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.animationPlayState = 'running';
            element.style.transform = '';
        });
    });
}

// Interactive code examples
function enhanceCodeExamples() {
    const exampleCards = document.querySelectorAll('.example-card');
    
    exampleCards.forEach(card => {
        const demo = card.querySelector('.example-demo');
        const demoElement = demo.querySelector('div');
        
        if (!demoElement) return;
        
        card.addEventListener('mouseenter', () => {
            if (demoElement.classList.contains('demo-square')) {
                demoElement.style.animationDuration = '0.5s';
            } else if (demoElement.classList.contains('demo-shape')) {
                demoElement.style.animationDuration = '1s';
            } else if (demoElement.parentElement.classList.contains('demo-dots')) {
                const dots = demo.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    dot.style.animationDuration = '0.8s';
                });
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (demoElement.classList.contains('demo-square')) {
                demoElement.style.animationDuration = '2s';
            } else if (demoElement.classList.contains('demo-shape')) {
                demoElement.style.animationDuration = '3s';
            } else if (demoElement.parentElement.classList.contains('demo-dots')) {
                const dots = demo.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    dot.style.animationDuration = '2s';
                });
            }
        });
    });
}

// Intersection Observer for fade-in animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elements to animate on scroll
    const animateElements = document.querySelectorAll('.feature-card, .example-card, .section-title, .section-subtitle');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Button click effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const diameter = Math.max(this.clientWidth, this.clientHeight);
            const radius = diameter / 2;
            
            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${e.clientX - this.offsetLeft - radius}px`;
            ripple.style.top = `${e.clientY - this.offsetTop - radius}px`;
            ripple.classList.add('ripple');
            
            // Add ripple styles
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        .btn {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
}

// Typing animation for hero title
function initTypingAnimation() {
    const titleElement = document.querySelector('.title-line');
    const originalText = titleElement.textContent;
    
    function typeText() {
        titleElement.textContent = '';
        titleElement.style.borderRight = '2px solid #00d9ff';
        
        let i = 0;
        const timer = setInterval(() => {
            titleElement.textContent += originalText.charAt(i);
            i++;
            
            if (i > originalText.length) {
                clearInterval(timer);
                setTimeout(() => {
                    titleElement.style.borderRight = 'none';
                }, 1000);
            }
        }, 100);
    }
    
    // Start typing animation after a delay
    setTimeout(typeText, 1000);
}

// Parallax effect for hero section
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            const rate = scrolled * -0.5;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Copy code functionality
function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(code => {
        const pre = code.parentElement;
        const copyBtn = document.createElement('button');
        copyBtn.textContent = 'Copy';
        copyBtn.className = 'copy-btn';
        copyBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #00d9ff;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s;
        `;
        
        pre.style.position = 'relative';
        pre.appendChild(copyBtn);
        
        pre.addEventListener('mouseenter', () => {
            copyBtn.style.opacity = '1';
        });
        
        pre.addEventListener('mouseleave', () => {
            copyBtn.style.opacity = '0';
        });
        
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(code.textContent).then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            });
        });
    });
}

// Initialize all animations and effects
document.addEventListener('DOMContentLoaded', () => {
    enhanceHeroDemo();
    enhanceCodeExamples();
    initScrollAnimations();
    initButtonEffects();
    initTypingAnimation();
    initParallaxEffect();
    initCodeCopy();
    
    // Loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// A4Studio Animation Engine Mock Functions (for demonstration)
const A4Studio = {
    animate: function(selector, options) {
        console.log(`A4Studio: Animating ${selector} with options:`, options);
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (options.rotate) {
                element.style.transform = `rotate(${options.rotate}deg)`;
            }
            if (options.scale) {
                element.style.transform += ` scale(${options.scale})`;
            }
            if (options.x || options.y) {
                element.style.transform += ` translate(${options.x || 0}px, ${options.y || 0}px)`;
            }
        });
    },
    
    createTimeline: function() {
        return {
            add: function(selector, options, delay) {
                console.log(`A4Studio Timeline: Adding ${selector} with delay ${delay}`);
                setTimeout(() => {
                    A4Studio.animate(selector, options);
                }, delay || 0);
                return this;
            }
        };
    },
    
    random: function(min, max) {
        return Math.random() * (max - min) + min;
    },
    
    stagger: function(values) {
        return Array.isArray(values) ? values : [values];
    }
};

// Expose A4Studio globally for demo purposes
window.A4Studio = A4Studio;
window.animate = A4Studio.animate;
window.createTimeline = A4Studio.createTimeline;
window.random = A4Studio.random;
window.stagger = A4Studio.stagger;
