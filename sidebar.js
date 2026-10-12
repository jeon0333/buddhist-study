(()=>{
  'use strict';
  const button=document.querySelector('#sidebar-toggle');
  const opener=document.querySelector('#sidebar-open');
  const sidebar=document.querySelector('#reader-sidebar');
  const layout=document.querySelector('.layout');
  const key='sutta-sidebar-collapsed';
  function setCollapsed(collapsed){
    sidebar.hidden=collapsed;
    const expanded=!collapsed;
    button.setAttribute('aria-expanded',String(expanded));
    opener.hidden=expanded;
    layout.classList.toggle('sidebar-collapsed',!expanded);
    window.dispatchEvent(new Event('resize'));
  }
  try{setCollapsed(localStorage.getItem(key)==='true')}catch{setCollapsed(false)}
  button.onclick=()=>{
    setCollapsed(!sidebar.hidden);
    (sidebar.hidden?opener:button).focus();
    try{localStorage.setItem(key,String(sidebar.hidden))}catch{}
  };
  opener.onclick=button.onclick;
})();
