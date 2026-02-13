(function(){
  const btn = document.querySelector('[data-nav-toggle]');
  const links = document.querySelector('[data-nav-links]');
  if(btn && links){
    btn.addEventListener('click', ()=> links.classList.toggle('open'));
  }
})();
