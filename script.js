const views=[...document.querySelectorAll('.view')],links=[...document.querySelectorAll('[data-v]')],nav=document.getElementById('nav');
function show(){
  let id=location.hash.slice(1)||'home';
  if(!document.getElementById(id))id='home';
  views.forEach(v=>v.classList.toggle('show',v.id===id));
  links.forEach(a=>a.classList.toggle('active',a.dataset.v===id));
  nav.classList.remove('open');window.scrollTo(0,0);
}
window.addEventListener('hashchange',show);show();
document.getElementById('burger').onclick=()=>nav.classList.toggle('open');
document.getElementById('yr').textContent=2021;


const list=document.getElementById('fblist');let items=[];
try{items=JSON.parse(localStorage.getItem('pm-fb')||'[]')}catch(e){}
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
function render(){
  if(!items.length)return;
  list.innerHTML=items.map(i=>'<div class="fb"><b>'+esc(i.n)+'</b><br>'+esc(i.m)+'</div>').join('');
}
render();
document.getElementById('fbform').onsubmit=e=>{
  e.preventDefault();
  items.unshift({n:document.getElementById('fn').value,m:document.getElementById('fm').value});
  try{localStorage.setItem('pm-fb',JSON.stringify(items))}catch(err){}
  render();e.target.reset();
  document.getElementById('fmsg').textContent='thanks for your feedback! 💗';
};
