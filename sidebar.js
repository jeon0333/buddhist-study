(()=>{
  'use strict';
  const button=document.querySelector('#sidebar-toggle');
  const sidebar=document.querySelector('#reader-sidebar');
  const layout=document.querySelector('.layout');
  button.onclick=()=>{
    sidebar.hidden=!sidebar.hidden;
    const expanded=!sidebar.hidden;
    button.setAttribute('aria-expanded',String(expanded));
    button.textContent=expanded?'목차 접기':'목차 펼치기';
    layout.classList.toggle('sidebar-collapsed',!expanded);
    window.dispatchEvent(new Event('resize'));
  };
})();
