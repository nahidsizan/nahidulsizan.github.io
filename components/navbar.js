class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        
        .dark nav {
          background: #1f2937;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        
        .logo {
          font-weight: bold;
          font-size: 1.25rem;
          color: #111827;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .dark .logo {
          color: white;
        }
        
        .logo-icon {
          color: #6366f1;
        }
        
        .nav-links {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        
        .nav-link {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
        }
        
        .dark .nav-link {
          color: #d1d5db;
        }
        
        .nav-link:hover {
          color: #6366f1;
        }
        
        .nav-link.active {
          color: #6366f1;
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #6366f1;
        }
        
        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: #4b5563;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }
        
        .dark .theme-toggle {
          color: #d1d5db;
        }
        
        .theme-toggle:hover {
          color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #4b5563;
        }
        
        .dark .mobile-menu-btn {
          color: #d1d5db;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          <i data-feather="code" class="logo-icon"></i>
          <span>Sizan</span>
        </a>
        
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        
        <ul class="nav-links">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#certificates" class="nav-link">Certificates</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
          <li>
            <button id="theme-toggle" class="theme-toggle">
              <i data-feather="moon" class="dark:hidden"></i>
              <i data-feather="sun" class="hidden dark:block"></i>
            </button>
          </li>
        </ul>
      </nav>
    `;
    
    // Initialize feather icons after rendering
    setTimeout(() => {
      if (this.shadowRoot.querySelector('i')) {
        feather.replace({ class: 'feather', width: 20, height: 20 });
      }
      
      // Add mobile menu functionality
      const mobileBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
      const navLinks = this.shadowRoot.querySelector('.nav-links');
      
      if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
          navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
          mobileBtn.innerHTML = navLinks.style.display === 'flex' ? 
            feather.icons.x.toSvg({ class: 'feather', width: 20, height: 20 }) : 
            feather.icons.menu.toSvg({ class: 'feather', width: 20, height: 20 });
        });
      }
    }, 100);
  }
}

customElements.define('custom-navbar', CustomNavbar);