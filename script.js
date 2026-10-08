/**
 * Vaibhav Portfolio — Lightweight Static Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const CONFIG = {
    email: 'vaibhav.student@example.com',
    resumeUrl: 'resume.pdf', // Drop your PDF file named 'resume.pdf' in this folder
  };

  // DOM Elements
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const toast = document.getElementById('toast');
  const resumeNavBtn = document.getElementById('resumeNavBtn');
  const heroResumeBtn = document.getElementById('heroResumeBtn');
  const contactResumeBtn = document.getElementById('contactResumeBtn');

  // Set resume hrefs
  [resumeNavBtn, heroResumeBtn, contactResumeBtn].forEach((btn) => {
    if (btn) {
      btn.setAttribute('href', CONFIG.resumeUrl);
    }
  });

  // Mobile Navigation Toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close mobile nav when clicking any link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Toast Helper
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  };

  // Copy Email Button
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(CONFIG.email);
        showToast('Email copied to clipboard!');
      } catch (err) {
        showToast(`Email: ${CONFIG.email}`);
      }
    });
  }

  // Active section scrollspy for navbar links
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-links .nav-link:not(.nav-resume-btn)');

  const handleScrollSpy = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinkItems.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.style.color = 'var(--text-primary)';
          } else {
            link.style.color = '';
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleScrollSpy, { passive: true });
  handleScrollSpy();
});
