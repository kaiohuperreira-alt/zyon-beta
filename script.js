const games=[
{name:"Afterlight",desc:"A calm endless glide."},
{name:"Drift",desc:"Float through a quiet night."},
{name:"Night Grid",desc:"A tiny puzzle in the dark."}
];
const cards=document.querySelector("#cards"),search=document.querySelector("#search"),toast=document.querySelector("#toast");
function render(list=games){cards.innerHTML=list.length?list.map(g=>`<article class="card" data-game="${g.name}"><div class="art"></div><h4>${g.name}</h4><p>${g.desc}</p></article>`).join(""):`<div class="card"><h4>No games found</h4><p>Try another search.</p></div>`;document.querySelector("#count").textContent=`${list.length} game${list.length===1?"":"s"}`;cards.querySelectorAll(".card").forEach(c=>c.onclick=()=>notify(`${c.dataset.game} selected — add its URL in script.js`))}
function notify(t){toast.textContent=t;toast.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>toast.classList.remove("show"),2200)}
function view(v){document.querySelectorAll(".side,.dockbtn").forEach(x=>x.classList.remove("active","selected"));document.querySelectorAll(`[data-view="${v}"]`).forEach(x=>x.classList.add(x.classList.contains("dockbtn")?"selected":"active"));let list=games;if(v==="recent"){document.querySelector("#title").textContent="Recently played";document.querySelector("#section").textContent="Recent";list=games.slice(0,2)}else if(v==="favorites"){document.querySelector("#title").textContent="Favorites";document.querySelector("#section").textContent="Favorites";list=games.slice(0,1)}else{document.querySelector("#title").textContent="Library";document.querySelector("#section").textContent="Quick picks"}render(list)}
document.querySelectorAll("[data-view]").forEach(x=>x.onclick=()=>view(x.dataset.view));
search.oninput=()=>{let q=search.value.toLowerCase();render(games.filter(g=>(g.name+" "+g.desc).includes(q)))};
document.querySelector("#home").onclick=()=>view("library");document.querySelector("#play").onclick=()=>notify("Afterlight selected — add its URL in script.js");document.querySelector("#about").onclick=()=>notify("Zyon beta · GitHub Pages");document.querySelector("#theme").onclick=()=>{document.body.classList.toggle("light");notify("Atmosphere changed")};
function clock(){let d=new Date();document.querySelector("#day").textContent=d.toLocaleDateString([],{weekday:"long"}).toUpperCase();document.querySelector("#clock").textContent=d.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}clock();setInterval(clock,30000);render();
