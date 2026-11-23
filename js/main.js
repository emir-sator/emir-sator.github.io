// ========================================
// Emir Šator — Portfolio JS
// ========================================

// ---------- Translations ----------
const translations = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Home
    'hero.greeting': "Hi, I'm",
    'hero.title': 'I build things for the web & desktop.',
    'hero.desc': 'Software Developer with several years of professional experience building and maintaining applications using C#, .NET, SQL, REST APIs, and Angular. Passionate about creating reliable, user-friendly software that solves real problems.',
    'hero.btn.work': 'View My Work',
    'hero.btn.contact': 'Get In Touch',
    'skill.backend': 'Backend Development',
    'skill.frontend': 'Frontend Development',
    'skill.desktop': 'Desktop & Tools',
    'footer.credit': 'Designed & Built by <a href="https://github.com/emir-sator">Emir Šator</a>',

    // About
    'about.label': 'About Me',
    'about.title': 'A bit about myself',
    'about.desc': "I'm a software developer based in Sarajevo, Bosnia & Herzegovina. I enjoy building reliable software — whether it's a web application, desktop tool, or anything in between.",
    'exp.label': 'Experience',
    'exp.title': 'Work Experience',
    'exp.gdi.date': 'Sep 2023 — Present',
    'exp.gdi.role': 'Software Developer',
    'exp.gdi.location': 'Sarajevo, Bosnia & Herzegovina',
    'exp.gdi.1': 'Designed, implemented, and maintained user-friendly desktop applications using WPF',
    'exp.gdi.2': 'Collaborated closely with a database developer to develop and maintain a robust database layer',
    'exp.gdi.3': 'Implemented data synchronization between multiple applications, ensuring consistency and accuracy',
    'exp.gdi.4': 'Refactored existing code to enhance performance, maintainability, and scalability',
    'exp.gdi.5': 'Built GIS features combining AngularJS, ArcGIS Pro, and Python for geospatial data solutions',
    'exp.source.date': 'Nov 2021 — Jul 2023',
    'exp.source.role': 'Software Developer',
    'exp.source.location': 'Sarajevo, Bosnia & Herzegovina',
    'exp.source.1': 'Worked on the development of an ERP system (<a href="https://www.onwork.no" target="_blank" rel="noopener">onwork.no</a>), contributing to both frontend and backend',
    'exp.source.2': 'Developed frontend components using Angular 2 with TypeScript and Angular Material UI',
    'exp.source.3': 'Built and maintained RESTful APIs using ASP.NET Web API and Entity Framework',
    'exp.source.4': 'Implemented integrations with Tripletex, XaitPorter, and Microsoft Graph API',
    'exp.source.5': 'Managed CI/CD pipelines and multiple deployment environments using Azure DevOps',
    'exp.source.6': 'Investigated and resolved software defects across frontend and backend services',
    'edu.label': 'Education',
    'edu.title': 'Academic Background',
    'edu.fit.degree': 'Bachelor of Information Technology',
    'edu.fit.year': 'Graduated May 2021',
    'edu.hs.degree': 'High School — General Gymnasium',
    'edu.hs.year': 'Graduated May 2015',
    'cert.label': 'Certificates',
    'cert.title': 'Certifications & Courses',

    // Projects
    'projects.label': 'Projects',
    'projects.title': "Things I've Built",
    'projects.desc': "A selection of projects I've worked on.",
    'project.dentio.type': 'Full-Stack Application',
    'project.dentio.desc': 'A complete dental management system featuring a desktop app (C#, .NET 8, SQLite) and a responsive web app (Angular, Firebase). Includes patient & appointment management, interactive odontograms, offline functionality with automatic sync, online booking, and clinic communication tools.',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Get In Touch',
    'contact.desc': "I'm currently open to new opportunities. Whether you have a question, a project idea, or just want to say hi — my inbox is always open.",
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.location.value': 'Sarajevo, Bosnia & Herzegovina',
    'contact.phone': 'Phone',
    'form.name': 'Name',
    'form.name.placeholder': 'Your name',
    'form.name.error': 'Please enter your name.',
    'form.email': 'Email',
    'form.email.placeholder': 'your@email.com',
    'form.email.error': 'Please enter a valid email address.',
    'form.phone': 'Phone',
    'form.phone.placeholder': '+387 6X XXX XXX',
    'form.phone.error': 'Please enter your phone number.',
    'form.message': 'Message',
    'form.message.placeholder': 'Your message...',
    'form.message.error': 'Please enter a message.',
    'form.submit': 'Send Message',
    'form.success': 'Thank you! Your message has been sent successfully.',
  },
  bs: {
    // Nav
    'nav.home': 'Početna',
    'nav.about': 'O meni',
    'nav.projects': 'Projekti',
    'nav.contact': 'Kontakt',

    // Home
    'hero.greeting': 'Zdravo, ja sam',
    'hero.title': 'Razvijam web i desktop aplikacije.',
    'hero.desc': 'Softver developer sa višegodišnjim profesionalnim iskustvom u razvoju i održavanju aplikacija koristeći C#, .NET, SQL, REST API-je i Angular. Strastveno posvećen kreiranju pouzdanog softvera koji rješava stvarne probleme.',
    'hero.btn.work': 'Moji radovi',
    'hero.btn.contact': 'Kontaktiraj me',
    'skill.backend': 'Backend razvoj',
    'skill.frontend': 'Frontend razvoj',
    'skill.desktop': 'Desktop i alati',
    'footer.credit': 'Dizajnirao i razvio <a href="https://github.com/emir-sator">Emir Šator</a>',

    // About
    'about.label': 'O meni',
    'about.title': 'Nešto o meni',
    'about.desc': 'Softver developer iz Sarajeva, fokusiran na razvoj kvalitetnih web i desktop aplikacija, prateći najnovije trendove i tehnologije u industriji.',
    'exp.label': 'Iskustvo',
    'exp.title': 'Radno iskustvo',
    'exp.gdi.date': 'Sep 2023 — Trenutno',
    'exp.gdi.role': 'Software Developer',
    'exp.gdi.location': 'Sarajevo, Bosna i Hercegovina',
    'exp.gdi.1': 'Dizajnirao i razvijao desktop aplikacije u WPF-u, prilagođene krajnjim korisnicima',
    'exp.gdi.2': 'Sarađivao sa database developerom na izgradnji i održavanju baze podataka',
    'exp.gdi.3': 'Razvio sinhronizaciju podataka između više aplikacija, osiguravajući tačnost i konzistentnost',
    'exp.gdi.4': 'Refaktorisao postojeći kod radi boljih performansi i lakšeg održavanja',
    'exp.gdi.5': 'Razvijao GIS funkcionalnosti spajajući AngularJS, ArcGIS Pro i Python za rad sa geoprostornim podacima',
    'exp.source.date': 'Nov 2021 — Jul 2023',
    'exp.source.role': 'Software Developer',
    'exp.source.location': 'Sarajevo, Bosna i Hercegovina',
    'exp.source.1': 'Učestvovao u razvoju ERP sistema (<a href="https://www.onwork.no" target="_blank" rel="noopener">onwork.no</a>), radeći na frontend i backend dijelu aplikacije',
    'exp.source.2': 'Razvijao korisničko sučelje u Angular 2 sa TypeScript-om i Angular Material komponentama',
    'exp.source.3': 'Kreirao i održavao RESTful API-je kroz ASP.NET Web API i Entity Framework',
    'exp.source.4': 'Integrisao eksterne servise — Tripletex, XaitPorter i Microsoft Graph API',
    'exp.source.5': 'Postavljao i upravljao CI/CD procesima te okruženjima za deploy putem Azure DevOps-a',
    'exp.source.6': 'Pronalazio i rješavao bugove kroz cijeli stack — od frontenda do backenda',
    'edu.label': 'Obrazovanje',
    'edu.title': 'Akademska pozadina',
    'edu.fit.degree': 'Bakalaureat informacijskih tehnologija',
    'edu.fit.year': 'Diplomirao maj 2021',
    'edu.hs.degree': 'Srednja škola — Opća gimnazija',
    'edu.hs.year': 'Završio maj 2015',
    'cert.label': 'Certifikati',
    'cert.title': 'Certifikati i kursevi',

    // Projects
    'projects.label': 'Projekti',
    'projects.title': 'Moji radovi',
    'projects.desc': 'Projekti na kojima sam radio:',
    'project.dentio.type': 'Full-Stack aplikacija',
    'project.dentio.desc': 'Kompletni sistem za upravljanje stomatološkom ordinacijom sa desktop aplikacijom (C#, .NET 8, SQLite) i responzivnom web aplikacijom (Angular, Firebase). Uključuje upravljanje pacijentima i terminima, interaktivne odontograme, offline funkcionalnost sa automatskom sinhronizacijom, online zakazivanje i komunikacijske alate.',

    // Contact
    'contact.label': 'Kontakt',
    'contact.title': 'Stupite u kontakt',
    'contact.desc': 'Trenutno sam otvoren za nove saradnje. Bilo da imate pitanje, ideju za projekat ili se samo želite javiti — moj inbox je uvijek otvoren.',
    'contact.email': 'Email',
    'contact.location': 'Lokacija',
    'contact.location.value': 'Sarajevo, Bosna i Hercegovina',
    'contact.phone': 'Telefon',
    'form.name': 'Ime',
    'form.name.placeholder': 'Vaše ime',
    'form.name.error': 'Molimo unesite vaše ime.',
    'form.email': 'Email',
    'form.email.placeholder': 'vaš@email.com',
    'form.email.error': 'Molimo unesite validnu email adresu.',
    'form.phone': 'Telefon',
    'form.phone.placeholder': '+387 6X XXX XXX',
    'form.phone.error': 'Molimo unesite vaš broj telefona.',
    'form.message': 'Poruka',
    'form.message.placeholder': 'Vaša poruka...',
    'form.message.error': 'Molimo unesite poruku.',
    'form.submit': 'Pošalji poruku',
    'form.success': 'Hvala! Vaša poruka je uspješno poslana.',
  }
};

// ---------- Language ----------
function getLang() {
  return localStorage.getItem('portfolio-lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('portfolio-lang', lang);
  applyTranslations(lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang === 'bs' ? 'bs' : 'en';
}

function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key]) el.innerHTML = t[key];
  });
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Scroll-triggered fade-in
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.borderBottomColor = window.scrollY > 50
        ? 'rgba(56, 189, 248, 0.15)' : '';
    });
  }

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  setLang(getLang());

  // Contact form — AJAX submit + success message
  const form = document.querySelector('.contact-form');
  if (form) {
    const successMsg = document.querySelector('.form-success');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.classList.add('submitted');

      // Check validity before sending
      if (!form.checkValidity()) return;

      const data = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(res => {
        if (res.ok) {
          form.style.display = 'none';
          const t = translations[getLang()];
          successMsg.textContent = t['form.success'];
          successMsg.classList.add('show');

          setTimeout(() => {
            successMsg.classList.remove('show');
            form.style.display = '';
            form.reset();
            form.classList.remove('submitted');
          }, 5000);
        }
      });
    });
  }
});
