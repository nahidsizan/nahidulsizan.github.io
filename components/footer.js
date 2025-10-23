class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: white;
          color: #4b5563;
          padding: 2rem;
          text-align: center;
          margin-top: auto;
          border-top: 1px solid #e5e7eb;
        }
        
        .dark footer {
          background: #1f2937;
          color: #d1d5db;
          border-top: 1px solid #374151;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .social-link {
          color: #4b5563;
          transition: color 0.2s;
        }
        
        .dark .social-link {
          color: #d1d5db;
        }
        
        .social-link:hover {
          color: #6366f1;
        }
        
        .copyright {
          font-size: 0.875rem;
        }
        
        .back-to-top {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #6366f1;
          text-decoration: none;
          font-weight: 500;
          margin-top: 1rem;
        }
        
        .back-to-top:hover {
          text-decoration: underline;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="social-links">
            <a href="#" class="social-link" aria-label="GitHub">
              <i data-feather="github"></i>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <i data-feather="linkedin"></i>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <i data-feather="twitter"></i>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <i data-feather="instagram"></i>
            </a>
          </div>
          <p class="copyright">&copy; ${new Date().getFullYear()} Nahidul Islam Sizan. All rights reserved.</p>
          <a href="#" class="back-to-top">
            <i data-feather="arrow-up"></i>
            Back to top
          </a>
        </div>
      </footer>
    `;
    
    // Initialize feather icons after rendering
    setTimeout(() => {
      if (this.shadowRoot.querySelector('i')) {
        feather.replace({ class: 'feather', width: 20, height: 20 });
      }
      
      // Add back to top functionality
      const backToTop = this.shadowRoot.querySelector('.back-to-top');
      if (backToTop) {
        backToTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    }, 100);
  }
}

customElements.define('custom-footer', CustomFooter);