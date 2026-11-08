(function(){
  const btn = document.querySelector('[data-nav-toggle]');
  const links = document.querySelector('[data-nav-links]');
  if(btn && links){
    btn.addEventListener('click', ()=> links.classList.toggle('open'));
  }
})();

(function () {
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink?.href) return;
  const canonical = new URL(canonicalLink.href);
  if (canonical.hostname !== 'www.queenseviction.com') return;

  const isSitePath = (path) => /^\/(?:[a-z0-9-]+\.html)?$/.test(path);
  const page = canonical.pathname;
  if (!isSitePath(page)) return;

  const landingKey = 'queenseviction:landing-page';
  let landingPage = page;
  try {
    const savedPage = sessionStorage.getItem(landingKey);
    if (isSitePath(savedPage || '')) landingPage = savedPage;
    else sessionStorage.setItem(landingKey, landingPage);
  } catch {
    // Form attribution still works on the current page when storage is blocked.
  }

  const form = document.querySelector('form[action="https://formspree.io/f/mbdagvbk"]');
  if (form) {
    const source = document.createElement('input');
    source.type = 'hidden';
    source.name = 'landing_page';
    source.value = landingPage;
    form.append(source);
  }

  const websiteId = '331b5c6f-8ef5-42b6-8dc0-e1253c2ae40b';
  if (!websiteId || location.hostname !== canonical.hostname) return;

  const tracker = document.createElement('script');
  tracker.async = true;
  tracker.src = 'https://cloud.umami.is/script.js';
  tracker.dataset.websiteId = websiteId;
  tracker.dataset.autoTrack = 'false';

  function recordInquiry(name) {
    const send = () => window.umami?.track({
      website: websiteId,
      hostname: canonical.hostname,
      url: page,
      name,
      data: { landing_page: landingPage },
    });
    if (window.umami) send();
    else tracker.addEventListener('load', send, { once: true });
  }

  document.addEventListener('click', (event) => {
    if (event.target.closest('a[href^="tel:"]')) recordInquiry('phone_tap');
  });

  const chat = window.Tawk_API = window.Tawk_API || {};
  chat.onChatStarted = () => recordInquiry('chat_started');
  document.head.append(tracker);
})();

(function(){
  if (!window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

  const api = window.Tawk_API = window.Tawk_API || {};
  const label = document.createElement('button');
  label.type = 'button';
  label.className = 'live-chat-label';
  label.hidden = true;
  label.textContent = document.documentElement.lang === 'es'
    ? 'Pulse aquí para hablar con una persona'
    : 'Click here to speak with a live person';
  label.addEventListener('click', () => api.maximize());
  document.body.append(label);

  api.onStatusChange = (status) => {
    label.hidden = status !== 'online' || !api.isChatMinimized?.() || api.isChatHidden?.() === true;
  };
  api.onLoad = api.onChatMinimized = () => api.onStatusChange(api.getStatus());
  api.onChatMaximized = api.onChatHidden = () => { label.hidden = true; };
})();
