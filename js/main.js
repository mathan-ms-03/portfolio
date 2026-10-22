/**
 * MATHAN S - PERSONAL DEVELOPER PORTFOLIO
 * Modern ES6+ Interactive Script
 */

// Project Data Store for Dynamic Modal Previews
const projectData = {
  placement: {
    title: 'Placement Management System',
    subtitle: 'Campus Recruitment & Candidate Pipeline Web Application',
    category: 'Full Stack / Enterprise Web App',
    duration: 'Academic Project & Prototype',
    role: 'Lead Full-Stack Developer',
    image: 'assets/images/placement-system.jpg?v=2',
    github: 'https://github.com/mathan-ms-03/placement-management-system',
    demo: 'https://github.com/mathan-ms-03/placement-management-system',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'JWT Auth', 'CSS3'],
    overview: 'The Placement Management System is a centralized, role-based web platform designed for higher education institutions to modernize the campus placement cycle. It bridges the gap between graduating students, campus placement officers, and corporate recruiters by replacing manual spreadsheets with automated workflows.',
    features: [
      'Role-based Access Control (RBAC) supporting three distinct portals: Student, Placement Coordinator, and Corporate Recruiter.',
      'Secure authentication using JSON Web Tokens (JWT) with hashed password encryption.',
      'Student profile builder with real-time academic records, CGPA tracking, resume upload, and skill tagging.',
      'Recruiter dashboard to post job vacancies, define eligibility cutoffs (minimum CGPA, allowed arrears), and review applicants.',
      'Automated eligibility filtration engine instantly matching student pools against company job criteria.',
      'Interview schedule coordinator with notification badges and round-by-round selection tracking.'
    ],
    architecture: 'Built on a decoupled client-server architecture. The frontend is powered by React.js single-page application with modular component architecture, communicating via Axios to an Express.js REST API gateway connected to a normalized MySQL relational database.',
    databaseHighlights: 'Designed with 3NF relational schema encompassing students, companies, job_postings, applications, and placement_status with foreign key constraints, indexing on student register number and company ID for sub-second query latency.',
    challenges: 'Designing dynamic eligibility filtration that could handle variable recruitment criteria (e.g., minimum 7.0 CGPA + zero active backlogs) across hundreds of students simultaneously without slowing down the database query performance.'
  },

  phoneStore: {
    title: 'Phone Shopping Website',
    subtitle: 'Responsive Smartphone & Accessories E-Commerce Storefront',
    category: 'E-Commerce / Full Stack',
    duration: 'Personal & Showcase Project',
    role: 'Frontend & Backend Developer',
    image: 'assets/images/phone-store.jpg?v=2',
    github: 'https://github.com/mathan-ms-03/e-commerce',
    demo: 'https://github.com/mathan-ms-03/e-commerce',
    techStack: ['HTML5', 'CSS3 / Flexbox & Grid', 'JavaScript (ES6+)', 'Node.js', 'MySQL', 'LocalStorage API'],
    overview: 'A sleek, mobile-first e-commerce web application engineered to deliver a frictionless smartphone discovery and purchasing experience. Features instant client-side search, brand/price multi-facet filtering, dynamic cart management, and responsive product showcase modals.',
    features: [
      'Interactive product catalog showcasing smartphones from top manufacturers (Apple, Samsung, Google, OnePlus, Xiaomi).',
      'Real-time instant search by keyword, model name, and price threshold slider with zero reload lag.',
      'Persistent shopping cart engine utilizing localStorage and session synchronization with cart counter badge.',
      'Product specification comparison viewer displaying RAM, storage, chipset, camera, and battery capacities side-by-side.',
      'Simulated multi-step checkout workflow with customer shipping details, order summary calculation, and validation.',
      '100% mobile-friendly responsive layout optimized with CSS Grid and smooth micro-animations.'
    ],
    architecture: 'Client-driven frontend utilizing vanilla ES6+ modules for maximum performance and lightning-fast load times, paired with a lightweight Node.js/Express backend managing phone inventory datasets in MySQL.',
    databaseHighlights: 'Structured inventory table with product SKU, brand enum, specs JSON, pricing, inventory stock level, and discount tiers with full-text search capability.',
    challenges: 'Ensuring seamless cart synchronization across multiple tabs while maintaining instantaneous product filtering without external heavy dependencies or frameworks.'
  },

  portfolio: {
    title: 'Personal Developer Portfolio & Showcase',
    subtitle: 'Ultra-Responsive Modern Developer Portfolio & Project Showcase',
    category: 'Frontend Engineering & Showcase',
    duration: 'Current Live Version',
    role: 'Designer & Developer',
    image: 'assets/images/portfolio-showcase.jpg?v=2',
    github: 'https://github.com/mathan-ms-03',
    demo: '#',
    techStack: ['HTML5', 'Modern CSS3', 'JavaScript ES6+', 'Glassmorphism', 'Responsive Grid', 'GitHub Pages'],
    overview: 'A bespoke, production-ready developer portfolio built from scratch with zero framework overhead. Engineered to deliver a striking visual impression with dark/light themes, fluid micro-interactions, modal dialogs, and comprehensive resume presentation.',
    features: [
      'Dual-theme engine with automatic system dark/light preference detection and localStorage persistence.',
      'Glassmorphic design system using CSS backdrop-filter, radial gradients, and responsive layouts.',
      'Filterable projects and technical skills grid with real-time DOM updates and smooth transitions.',
      'Interactive project deep-dive modal system with keyboard accessibility (ESC to close) and focus trapping.',
      'Quick printable resume modal allowing recruiters to view and print Mathan\'s resume directly.',
      '1-click clipboard copy utility for email & phone with interactive feedback toast notifications.'
    ],
    architecture: 'Zero-build static web application compatible with instantaneous deployment on GitHub Pages, Vercel, and Netlify.',
    databaseHighlights: 'In-memory dynamic JavaScript state store with decoupled data objects for seamless extensibility and rapid maintenance.',
    challenges: 'Creating rich visual aesthetics and interactive animations while maintaining 100/100 Lighthouse performance and zero external framework dependencies.'
  }
};

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initTypingEffect();
  initSkillFilters();
  initTimelineTabs();
  initProjectFilters();
  initProjectModals();
  initResumeModal();
  initClipboardAndToasts();
  initContactForm();
  initBackToTop();
  initStatsCounter();
});

/* ===================================================================
   1. THEME ENGINE (DARK / LIGHT MODE)
=================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set initial theme
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);
  updateThemeIcon(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  if (theme === 'light') {
    themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
  } else {
    themeToggle.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    themeToggle.setAttribute('aria-label', 'Switch to Light Mode');
  }
}

/* ===================================================================
   2. NAVIGATION & MOBILE DRAWER
=================================================================== */
function initNavigation() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const expanded = navLinks.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', expanded);
    });

    // Close when clicking any nav item
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Active section scroll spy
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ===================================================================
   3. HERO TYPING EFFECT
=================================================================== */
function initTypingEffect() {
  const typedTarget = document.getElementById('typedTarget');
  if (!typedTarget) return;

  const words = [
    'Full Stack Developer',
    'React.js & Node.js Engineer',
    'MySQL & Backend Architect',
    'Computer Science Engineer'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typedTarget.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      typedTarget.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typeSpeed = 1600; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400; // Pause before next word
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* ===================================================================
   4. SKILLS FILTERING
=================================================================== */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  if (!filterBtns.length || !skillCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ===================================================================
   5. TIMELINE TABS (EXPERIENCE / EDUCATION)
=================================================================== */
function initTimelineTabs() {
  const tabBtns = document.querySelectorAll('.timeline-tab-btn');
  const experienceContainer = document.getElementById('experienceTimeline');
  const educationContainer = document.getElementById('educationTimeline');

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-tab');

      if (target === 'experience') {
        if (experienceContainer) experienceContainer.style.display = 'block';
        if (educationContainer) educationContainer.style.display = 'none';
      } else if (target === 'education') {
        if (experienceContainer) experienceContainer.style.display = 'none';
        if (educationContainer) educationContainer.style.display = 'block';
      } else {
        if (experienceContainer) experienceContainer.style.display = 'block';
        if (educationContainer) educationContainer.style.display = 'block';
      }
    });
  });
}

/* ===================================================================
   6. PROJECTS FILTERING
=================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ===================================================================
   7. PROJECT DETAILS MODAL
=================================================================== */
function initProjectModals() {
  const modalOverlay = document.getElementById('projectModal');
  const closeBtn = document.getElementById('closeProjectModal');
  const detailBtns = document.querySelectorAll('.view-project-details-btn');

  if (!modalOverlay) return;

  detailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const data = projectData[projectId];

      if (data) {
        populateProjectModal(data);
        openModal(modalOverlay);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal(modalOverlay));
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal(modalOverlay);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal(modalOverlay);
    }
  });
}

function populateProjectModal(data) {
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalImg = document.getElementById('modalProjectImg');
  const modalRole = document.getElementById('modalProjectRole');
  const modalCategory = document.getElementById('modalProjectCategory');
  const modalDuration = document.getElementById('modalProjectDuration');
  const modalOverview = document.getElementById('modalProjectOverview');
  const modalFeatures = document.getElementById('modalProjectFeatures');
  const modalArchitecture = document.getElementById('modalProjectArchitecture');
  const modalTechStack = document.getElementById('modalProjectTechStack');
  const modalGithub = document.getElementById('modalProjectGithub');
  const modalDemo = document.getElementById('modalProjectDemo');

  if (modalTitle) modalTitle.textContent = data.title;
  if (modalImg) {
    modalImg.src = data.image;
    modalImg.alt = data.title;
  }
  if (modalRole) modalRole.textContent = data.role;
  if (modalCategory) modalCategory.textContent = data.category;
  if (modalDuration) modalDuration.textContent = data.duration;
  if (modalOverview) modalOverview.textContent = data.overview;
  if (modalArchitecture) modalArchitecture.textContent = data.architecture;

  if (modalFeatures) {
    modalFeatures.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
  }

  if (modalTechStack) {
    modalTechStack.innerHTML = data.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('');
  }

  if (modalGithub) modalGithub.href = data.github;
  if (modalDemo) modalDemo.href = data.demo;
}

/* ===================================================================
   8. RESUME MODAL & PRINT HANDLER
=================================================================== */
function initResumeModal() {
  const resumeModal = document.getElementById('resumeModal');
  const openBtns = document.querySelectorAll('.open-resume-modal');
  const closeBtn = document.getElementById('closeResumeModal');
  const printBtn = document.getElementById('printResumeBtn');

  if (!resumeModal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(resumeModal);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal(resumeModal));
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeModal(resumeModal);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
      closeModal(resumeModal);
    }
  });
}

function openModal(modalElement) {
  modalElement.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalElement) {
  modalElement.classList.remove('active');
  document.body.style.overflow = '';
}

/* ===================================================================
   9. CLIPBOARD UTILITY & TOAST NOTIFICATIONS
=================================================================== */
function initClipboardAndToasts() {
  const copyButtons = document.querySelectorAll('.copy-trigger');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Text';

      if (navigator.clipboard && textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied ${label} to clipboard!`);
        }).catch(() => {
          fallbackCopyText(textToCopy, label);
        });
      } else if (textToCopy) {
        fallbackCopyText(textToCopy, label);
      }
    });
  });
}

function fallbackCopyText(text, label) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(`Copied ${label} to clipboard!`);
  } catch (err) {
    showToast(`Failed to copy: ${text}`);
  }
  document.body.removeChild(textarea);
}

function showToast(message) {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger entrance
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Remove after 3.2s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 400);
  }, 3200);
}

/* ===================================================================
   10. CONTACT FORM VALIDATION & HANDLING
=================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const subjectInput = document.getElementById('senderSubject');
    const messageInput = document.getElementById('senderMessage');
    const submitBtn = document.getElementById('contactSubmitBtn');

    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      showToast('Please fill in all required fields.');
      return;
    }

    // Email format regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showToast('Please provide a valid email address.');
      return;
    }

    // Simulate submission
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      Sending...
    `;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      showToast(`Thank you, ${nameInput.value.trim()}! Your message was sent successfully.`);
      contactForm.reset();
    }, 1200);
  });
}

/* ===================================================================
   11. BACK TO TOP BUTTON
=================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ===================================================================
   12. STATS COUNTER ANIMATION
=================================================================== */
function initStatsCounter() {
  const statItems = document.querySelectorAll('.stat-number[data-target]');
  if (!statItems.length) return;

  let animated = false;

  function triggerAnimation() {
    if (animated) return;
    animated = true;
    statItems.forEach(item => {
      const target = parseFloat(item.getAttribute('data-target'));
      const isDecimal = item.getAttribute('data-decimal') === 'true';
      const duration = 1800; // ms
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = easeOut * target;

        if (item.childNodes.length > 0) {
          if (isDecimal) {
            item.childNodes[0].nodeValue = currentVal.toFixed(2);
          } else {
            item.childNodes[0].nodeValue = Math.floor(currentVal);
          }
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          if (item.childNodes.length > 0) {
            if (isDecimal) {
              item.childNodes[0].nodeValue = target.toFixed(2);
            } else {
              item.childNodes[0].nodeValue = target;
            }
          }
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerAnimation();
      }
    });
  }, { threshold: 0.1 });

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    observer.observe(statsSection);
    // Check if statsSection is already in view on load
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      triggerAnimation();
    }
  }
}
