(()=>{
  'use strict';
  const button=document.querySelector('#sidebar-toggle');
  const sidebar=document.querySelector('#reader-sidebar');
  const layout=document.querySelector('.layout');
  const key='sutta-sidebar-collapsed';
  function setCollapsed(collapsed){
    sidebar.hidden=collapsed;
    const expanded=!collapsed;
    button.setAttribute('aria-expanded',String(expanded));
    button.textContent=expanded?'목차 접기':'목차 펼치기';
    layout.classList.toggle('sidebar-collapsed',!expanded);
    window.dispatchEvent(new Event('resize'));
  }
  try{setCollapsed(localStorage.getItem(key)==='true')}catch{setCollapsed(false)}
  button.onclick=()=>{
    setCollapsed(!sidebar.hidden);
    try{localStorage.setItem(key,String(sidebar.hidden))}catch{}
  };
})();
