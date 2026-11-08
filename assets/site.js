(function(){
  const btn = document.querySelector('[data-nav-toggle]');
  const links = document.querySelector('[data-nav-links]');
  if(btn && links){
    btn.addEventListener('click', ()=> links.classList.toggle('open'));
  }
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
