// ========================================
// Emir Šator — Portfolio JS
// ========================================

// ---------- Google Analytics (conditional) ----------
const GA_ID = 'G-YEQ042ZKCX';

function loadGA() {
  if (document.querySelector('script[src*="googletagmanager"]')) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
}

function disableGA() {
  window['ga-disable-' + GA_ID] = true;
  // Remove GA cookies
  document.cookie.split(';').forEach(c => {
    const name = c.trim().split('=')[0];
    if (name.startsWith('_ga')) {
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.' + location.hostname;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }
  });
}

function getCookieConsent() {
  return localStorage.getItem('cookie-consent'); // 'accepted', 'declined', or null
}

function setCookieConsent(value) {
  localStorage.setItem('cookie-consent', value);
  if (value === 'accepted') {
    window['ga-disable-' + GA_ID] = false;
    loadGA();
  } else {
    disableGA();
  }
  const banner = document.querySelector('.cookie-banner');
  if (banner) banner.classList.remove('show');
}

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
    'hero.title': 'I create digital solutions for web & desktop.',
    'hero.desc': 'Software Developer with several years of professional experience building and maintaining applications using C#, .NET, SQL, REST APIs, and Angular. Passionate about creating reliable, user-friendly software that solves real problems.',
    'hero.btn.work': 'View My Work',
    'hero.btn.contact': 'Get In Touch',
    'hero.hint': "Don't be shy 😊",
    'home.skills': 'Skills',
    'skill.backend': 'Backend Development',
    'skill.frontend': 'Frontend Development',
    'skill.desktop': 'Desktop & Tools',
    'footer.privacy': 'Data Protection',
    'footer.credit': 'Designed & Built by <a href="https://github.com/emir-sator">Emir Šator</a>',

    // Privacy
    'privacy.label': 'Privacy',
    'privacy.title': 'Data Protection',
    'privacy.data.title': 'Data Protection',
    'privacy.data.text': 'Personal data provided on this website will be used strictly in accordance with EU data protection regulations. Personal data is collected voluntarily and is used for consultations, advertising, and marketing only with explicit consent. Please note that this website does not store your data in digital form on web servers.',
    'privacy.cookies.title': 'Cookies',
    'privacy.cookies.text': 'Cookies are small text files that are copied to your computer when you visit a website. They do not contain viruses and do not collect personal data. You can disable cookies in your browser settings. This website uses cookies exclusively for anonymous statistical processing and improving user experience.',
    'privacy.analytics.title': 'Google Analytics',
    'privacy.analytics.text': 'Our website uses Google Analytics to analyze website visits. Google Analytics uses cookies that are transferred to and stored on Google servers. Google may use this data to evaluate the use of the website. Google will not associate your IP address with other data held by Google. You can prevent the installation of cookies by selecting the appropriate settings in your browser. However, please note that in this case you may not be able to use all features of this website to their full extent. By using this website, you consent to the processing of data collected by Google in the manner described and for the stated purpose.',
    'privacy.contact.title': 'Contact Form',
    'privacy.contact.text': 'Users who contact us via the contact form on the website grant us the right to store personal data (first name, last name, phone number, email address, and message) exclusively for the purpose of responding to inquiries and providing requested information. This data is not shared with third parties nor used for commercial purposes without the explicit consent of the user. Users have the right to access, correct, and delete their personal data in accordance with applicable regulations.',

    // About
    'about.label': 'About Me',
    'about.title': 'A bit about myself',
    'about.desc': "I'm a software developer based in Sarajevo, Bosnia & Herzegovina. I enjoy building reliable software — whether it's a web application, desktop tool, or anything in between.<br><br>Outside of coding, I'm a curious and driven person who enjoys staying active. You'll often find me on the football pitch, tennis or basketball court, or at the gym — that sporting spirit keeps me balanced.",
    'exp.quote': '"Experience without theory is blind, but theory without experience is mere intellectual play." — Immanuel Kant',
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
    'cookie.text': 'This website uses cookies for analytics to improve your experience.',
    'cookie.accept': 'Accept',
    'cookie.decline': 'Decline',
    'cookie.settings': 'Cookie settings',
  },
  bs: {
    // Nav
    'nav.home': 'Početna',
    'nav.about': 'O meni',
    'nav.projects': 'Projekti',
    'nav.contact': 'Kontakt',

    // Home
    'hero.greeting': 'Zdravo, ja sam',
    'hero.title': 'Kreiram web i desktop digitalna rješenja.',
    'hero.desc': 'Softver developer sa višegodišnjim profesionalnim iskustvom u razvoju i održavanju aplikacija koristeći C#, .NET, SQL, REST API-je i Angular. Strastveno posvećen kreiranju pouzdanog softvera koji rješava stvarne probleme.',
    'hero.btn.work': 'Moji radovi',
    'hero.btn.contact': 'Kontaktiraj me',
    'hero.hint': 'Ne stidi se 😊',
    'home.skills': 'Tehnologije sa kojima baratam',
    'skill.backend': 'Backend razvoj',
    'skill.frontend': 'Frontend razvoj',
    'skill.desktop': 'Desktop i alati',
    'footer.privacy': 'Zaštita podataka',
    'footer.credit': 'Dizajnirao i razvio <a href="https://github.com/emir-sator">Emir Šator</a>',

    // Privacy
    'privacy.label': 'Privatnost',
    'privacy.title': 'Zaštita podataka',
    'privacy.data.title': 'Zaštita podataka',
    'privacy.data.text': 'Osobni podaci navedeni na prezentaciji koristit će se strogo u skladu s odredbama zakona o zaštiti podataka EU-a. Osobni podaci se prikupljaju dobrovoljno te se koriste za konzultacije, oglašavanje i marketing samo uz izričit pristanak. Napominjemo da ova web stranica ne pohranjuje Vaše podatke u digitalnom obliku na web poslužiteljima.',
    'privacy.cookies.title': 'Kolačići (Cookies)',
    'privacy.cookies.text': 'Kolačići su male tekstualne datoteke koje se kopiraju na vaše računalo kada posjetite web stranicu. Ne sadrže viruse i ne prikupljaju osobne podatke. Možete onemogućiti kolačiće u postavkama vašeg preglednika. Stranica koristi kolačiće isključivo za anonimnu statističku obradu i poboljšanje korisničkog iskustva.',
    'privacy.analytics.title': 'Google Analytics',
    'privacy.analytics.text': 'Web stranica koristi Google Analytics za analizu posjeta web stranici. Google Analytics koristi kolačiće koji se prenose na Google servere i pohranjuju na njima. Google može koristiti ove podatke u svrhu procjene korištenja web stranice. Google neće svrstati vašu IP adresu s drugim podacima koje Google posjeduje. Možete spriječiti instalaciju kolačića odabirom odgovarajućih postavki vašeg preglednika. Međutim, napominjemo da u tom slučaju možda nećete moći koristiti sve funkcionalnosti ove web stranice u potpunosti. Korištenjem ove web stranice pristajete na obradu podataka koje prikuplja Google na opisani način i u navedenu svrhu.',
    'privacy.contact.title': 'Kontakt forma',
    'privacy.contact.text': 'Korisnici koji nas kontaktiraju putem kontakt forme na web stranici daju nam pravo na pohranu osobnih podataka (ime, prezime, broj telefona, e-mail adresa i poruka) isključivo u svrhu odgovaranja na upite i pružanja traženih informacija. Ovi podaci se ne prenose trećim stranama niti se koriste u komercijalne svrhe bez izričitog pristanka korisnika. Korisnici imaju pravo uvida, ispravka i brisanja svojih osobnih podataka u skladu s važećim propisima.',

    // About
    'about.label': 'O meni',
    'about.title': 'Nešto o meni',
    'about.desc': 'Softver developer iz Sarajeva, fokusiran na razvoj kvalitetnih web i desktop aplikacija, prateći najnovije trendove i tehnologije u industriji.<br><br>Van kodiranja, radoznao sam i uporan, uz to sam i fizički aktivan. Često me možete naći na fudbalskom terenu, teniskom ili košarkaškom igralištu, ili u teretani — taj sportski duh me održava u balansu.',
    'exp.quote': '"Iskustvo bez teorije je slijepo, ali teorija bez iskustva puka je intelektualna igra." — Immanuel Kant',
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
    'cookie.text': 'Ova web stranica koristi kolačiće za analitiku kako bi poboljšala vaše iskustvo.',
    'cookie.accept': 'Prihvati',
    'cookie.decline': 'Odbij',
    'cookie.settings': 'Postavke kolačića',
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

  // Cookie consent
  const lang = getLang();
  const t = translations[lang];

  // Cookie popup (shared between mobile fab and desktop settings)
  const popup = document.createElement('div');
  popup.className = 'cookie-popup';
  popup.innerHTML = `
    <p class="cookie-popup-text"><svg class="cookie-popup-icon" viewBox="0 0 24 24"><path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1.004 1.004 0 0 0-1.099-1.244c-.297.04-.588.06-.874.06-3.309 0-6-2.691-6-6 0-.149.012-.293.036-.436a1.004 1.004 0 0 0-1.212-1.12C3.741 0.097 1 4.248 1 8.5 1 14.299 5.701 19 11.5 19c4.251 0 8.403-2.741 9.956-6.95a1.003 1.003 0 0 0 .142-.986zM11.5 17c-4.687 0-8.5-3.813-8.5-8.5 0-2.874 1.597-5.603 4.112-7.014C7.04 1.818 7 2.156 7 2.5 7 6.636 10.364 10 14.5 10c.344 0 .682-.04 1.014-.112C14.603 12.403 11.874 14 9 14a1 1 0 1 0 0 2c2.252 0 4.381-.895 5.96-2.479A7.496 7.496 0 0 1 11.5 17zM5 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg><span data-i18n="cookie.text">${t['cookie.text']}</span></p>
    <div class="cookie-popup-status"></div>
    <div class="cookie-popup-buttons">
      <button class="cookie-btn cookie-btn-decline" data-i18n="cookie.decline">${t['cookie.decline']}</button>
      <button class="cookie-btn cookie-btn-accept" data-i18n="cookie.accept">${t['cookie.accept']}</button>
    </div>
  `;
  document.body.appendChild(popup);

  function updatePopupStatus() {
    const status = popup.querySelector('.cookie-popup-status');
    const acceptBtn = popup.querySelector('.cookie-btn-accept');
    const declineBtn = popup.querySelector('.cookie-btn-decline');
    const c = getCookieConsent();
    const currentLang = getLang();
    if (c === 'accepted') {
      status.innerHTML = '<span class="dot accepted"></span>' + (currentLang === 'bs' ? 'Kolačići prihvaćeni' : 'Cookies accepted');
      acceptBtn.disabled = true;
      declineBtn.disabled = false;
    } else if (c === 'declined') {
      status.innerHTML = '<span class="dot declined"></span>' + (currentLang === 'bs' ? 'Kolačići odbijeni' : 'Cookies declined');
      acceptBtn.disabled = false;
      declineBtn.disabled = true;
    } else {
      status.innerHTML = '';
      acceptBtn.disabled = false;
      declineBtn.disabled = false;
    }
  }

  popup.querySelector('.cookie-btn-accept').addEventListener('click', () => {
    setCookieConsent('accepted');
    updatePopupStatus();
    setTimeout(() => popup.classList.remove('show'), 600);
  });

  popup.querySelector('.cookie-btn-decline').addEventListener('click', () => {
    setCookieConsent('declined');
    updatePopupStatus();
    setTimeout(() => popup.classList.remove('show'), 600);
  });

  // Desktop: banner for first visit
  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML = `
    <div class="container">
      <p class="cookie-text" data-i18n="cookie.text">${t['cookie.text']}</p>
      <div class="cookie-buttons">
        <button class="cookie-btn cookie-btn-decline" data-i18n="cookie.decline">${t['cookie.decline']}</button>
        <button class="cookie-btn cookie-btn-accept" data-i18n="cookie.accept">${t['cookie.accept']}</button>
      </div>
    </div>
  `;
  document.body.appendChild(banner);

  banner.querySelector('.cookie-btn-accept').addEventListener('click', () => {
    setCookieConsent('accepted');
    updatePopupStatus();
  });
  banner.querySelector('.cookie-btn-decline').addEventListener('click', () => {
    setCookieConsent('declined');
    updatePopupStatus();
  });

  // Desktop: cookie settings link in footer
  let settingsBtn = null;
  const footerLinks = document.querySelector('.footer .footer-links');
  if (footerLinks) {
    settingsBtn = document.createElement('button');
    settingsBtn.className = 'cookie-settings';
    settingsBtn.setAttribute('data-i18n', 'cookie.settings');
    settingsBtn.textContent = t['cookie.settings'];
    settingsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updatePopupStatus();
      popup.classList.toggle('show');
    });
    footerLinks.appendChild(settingsBtn);
  }

  // Mobile: floating cookie button
  const fab = document.createElement('button');
  fab.className = 'cookie-fab';
  fab.setAttribute('aria-label', 'Cookie settings');
  fab.innerHTML = '<svg viewBox="0 0 24 24"><path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1.004 1.004 0 0 0-1.099-1.244c-.297.04-.588.06-.874.06-3.309 0-6-2.691-6-6 0-.149.012-.293.036-.436a1.004 1.004 0 0 0-1.212-1.12C3.741 0.097 1 4.248 1 8.5 1 14.299 5.701 19 11.5 19c4.251 0 8.403-2.741 9.956-6.95a1.003 1.003 0 0 0 .142-.986zM11.5 17c-4.687 0-8.5-3.813-8.5-8.5 0-2.874 1.597-5.603 4.112-7.014C7.04 1.818 7 2.156 7 2.5 7 6.636 10.364 10 14.5 10c.344 0 .682-.04 1.014-.112C14.603 12.403 11.874 14 9 14a1 1 0 1 0 0 2c2.252 0 4.381-.895 5.96-2.479A7.496 7.496 0 0 1 11.5 17zM5 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm3-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>';
  document.body.appendChild(fab);

  fab.addEventListener('click', (e) => {
    e.stopPropagation();
    updatePopupStatus();
    popup.classList.toggle('show');
  });

  // Close popup when clicking outside
  document.addEventListener('click', (e) => {
    if (!popup.contains(e.target) && !fab.contains(e.target) && (!settingsBtn || !settingsBtn.contains(e.target))) {
      popup.classList.remove('show');
    }
  });

  // Init consent state
  updatePopupStatus();
  const consent = getCookieConsent();
  if (consent === 'accepted') {
    loadGA();
  } else if (consent === null) {
    popup.classList.add('show');
  }

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
