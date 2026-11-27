{
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const HAS=!!(window.gsap&&window.ScrollTrigger)&&!RM;
const store={get(k){try{return sessionStorage.getItem(k)}catch(e){return null}},set(k,v){try{sessionStorage.setItem(k,v)}catch(e){}}};
const A='<svg><use href="#arrow"/></svg>';

/* ---------- data ---------- */
const services=[
 ['property-law','Property Law','i-home','Legal help in buying, selling, renting, or disputes over property.',['Lease Deed','License Agreement','Conveyance Deed','Sale Deed','General Power of Attorney']],
 ['land-law','Land Law','i-land','Help with land rights, ownership, use, and disputes.',['Land Revenue Boards','High Courts','Supreme Court','Challenge to acquisition of land','Award of land acquisition challenge before authority']],
 ['civil-law','Civil Law','i-civil','Settling non-criminal disputes (contracts, property, private matters)',['Civil Injunctions including Permanent and Mandatory Injunctions','Suit for partition and other civil cases','Suit for Recovery of money','Civil lawyer for Suit Mesne Profits','Suit for recovery of civil damages']],
 ['title-investigation','Title Investigation','i-title','Verify ownership and check claims or liens on property.',null],
 ['real-estates','Real Estates','i-estate','Buying, selling, renting, or managing real estate.',['Title Clearance','Real Estate Litigation','RERA Compliance','Project Development work','Property Lease Registration']],
 ['corporate-law','Corporate Law','i-corp','Legal help with business laws, contracts, mergers, compliance.',['Incorporation, formation and registration services','Proprietorship firm','Partnership','Private Limited Company','Public Limited Company']],
 ['consumer-law','Consumer Law','i-consumer','Protecting consumer rights and solving unfair trade disputes.',['Legal advice on consumer protection cases','Drafting and filing of all types of complaints','Documentation on all consumer matters','Litigation services at all levels including filing and defending consumer complaints before District Consumer Redressal Forum, State Consumer Protection Forum, National Consumer Disputes Redressal Commission']],
 ['banking-laws','Banking Laws','i-bank','Legal advice on banking rules, compliance, transactions, disputes.',null],
 ['family-law','Family Law','i-family','Legal help with adoption, divorce, child custody, family matters.',null]
];
const nri=[
 ['Property & Land Matters',['Title verification of property','Transfer of ownership / Mutation in revenue records','Property disputes and litigation','Illegal possession or encroachment issues','Property sale, lease, and registration assistance']],
 ['Family & Inheritance Matters',['Succession certificate and probate of wills','Partition of ancestral property','Family settlement agreements','Divorce and matrimonial disputes']],
 ['Civil & Commercial Services',['Power of Attorney drafting & registration','Recovery of dues and debt settlement','Business advisory for investments in India','Contract drafting and dispute resolution']],
 ['Litigation & Dispute Resolution',['Representation before Indian courts and tribunals','Arbitration and mediation services','Enforcement of decrees and judgments in India']]
];
const why=['Over 15 years of expertise in property and civil law','A cross-disciplined team combining legal, financial, and property experts','Regular international visits to connect with NRIs directly','Tailored legal packages to avoid unnecessary travel to India','Transparent communication and regular case updates, no matter where you are in the world','Complete confidentiality and trusted representation'];
const roles=[['Member of Gujarat District Bar Association',''],['Working President of Surat the District Bar Association','2023'],['Vice President of Surat the District Bar Association','2023'],['Joint secretary of the Surat District Bar Association','2019–2021'],['Member of Council At the Surat District Bar Association','2018'],['Auditor of the Surat District Bar Association','2016'],['Life Member The Southern Gujarat Chamber of Commerce and Industry',''],['Member of Law & Compliance Committee, The Southern Gujarat Chamber of Commerce and Industry',''],['Managing Trustee-At Smt.L.N.B Daliya High School Adajan gam.',''],['Life Member of Vishva Umiya Foundation',''],['Vice President of the Law Committee – Shree Surat Olpad Choryasi Kadva Patidar Samaj.',''],['Vice President of Adajan Gam Kadwa Patidar Samaj Adajan','']];
const testi=[
 ['Pravin Patel','USA','I am Pravin Patel from USA. My friend who is living in Canada, who has properties and land issue here in Surat, Gujarat. As he was abroad he was confused about whom to contact and fortunately he came to know about Sahaj legal law firm and Adv. Amar V Patel. (They deal with land, property and NRI.) We reached his office and it was miracle after consulting with them. Very friendly and professional manner we were guided and learnt that my friend issues in Gujarat, India will be solved by Sahaj legal law firm, though he is abroad in Canada. Excellent.'],
 ['Sejal Patel','Surat','The most trustable and reliable firm as the name suggests “SAHAJ LEGAL FIRM”, their approach is simple and authentic and the most sustainable solution of teamwork and dedication. They have a vast experience and knowledge in their respective field. Your legal skills are strong, and your positive attitude makes a big difference in every case. People trust your work because you always give honest feedback, win win perspective and it’s easy to work with having a great communication. Keep it up your efforts, Highly admirable.'],
 ['Ahmed Kasuji','United Kingdom','I had the pleasure of speaking with Mr. Amar (Sahaj legal law firm) and I truly appreciate their professionalism and expertise. They provided clear and insightful advice, patiently addressing all my concerns. Their in-depth knowledge and ability to explain complex legal matters in a simple and understandable way made me feel confident and well-informed. I highly recommend Sahaj legal firm for anyone seeking reliable legal guidance. Thank you for your time and assistance!']
];

/* ---------- render ---------- */
const fill=(id,h)=>{const e=document.getElementById(id);if(e)e.innerHTML=h;return e};
fill('svcGrid',services.map(([sl,t,ic,d,l])=>`<article class="svc rv" id="${sl}"><div class="ic"><svg><use href="#${ic}"/></svg></div><h3>${t}</h3><p>${d}</p>${l?`<details><summary>What we handle<i></i></summary><ul>${l.map(x=>`<li>${x}</li>`).join('')}</ul></details>`:''}<a class="more" href="contact.html">Discuss your matter ${A}</a></article>`).join(''));
fill('svcTeaser',services.map(([sl,t,ic,d])=>`<a class="svc rv" href="services.html#${sl}"><div class="ic"><svg><use href="#${ic}"/></svg></div><h3>${t}</h3><p>${d}</p><span class="more">Read More ${A}</span></a>`).join(''));
fill('tablist',nri.map(([t],i)=>`<button class="tab" role="tab" id="tab${i}" aria-controls="pan${i}" aria-selected="${i==0}">${t}</button>`).join(''));
fill('panels',nri.map(([,l],i)=>`<div class="panel" role="tabpanel" id="pan${i}" aria-labelledby="tab${i}" ${i?'hidden':''}>${l.map((x,j)=>`<div class="item" style="animation-delay:${j*.07}s"><svg><use href="#check"/></svg>${x}</div>`).join('')}</div>`).join(''));
fill('why',why.map(x=>`<div class="why-row rv"><i><svg><use href="#check"/></svg></i>${x}</div>`).join(''));
const rolesEl=$('#roles');if(rolesEl)rolesEl.insertAdjacentHTML('beforeend',roles.map(([r,y])=>`<div class="role rv"><span>${r}</span>${y?`<em>${y}</em>`:''}</div>`).join(''));
fill('slider',testi.map(([n,c,q])=>`<figure class="tcard" style="margin:0"><div><div class="qm">“</div><p>${q}</p></div><figcaption class="who"><i>${n[0]}</i><div><b>${n}</b><small>${c}</small></div></figcaption></figure>`).join(''));
fill('fm',['NRI – Property & Land','NRI – Family & Inheritance',...services.map(s=>s[1]),'Other'].map(x=>`<option>${x}</option>`).join(''));
const places=['Surat, Gujarat','USA','Canada','UK','Africa','New Zealand','Australia','Legal Help, Across Miles'];
fill('track',[...places,...places,...places].map(x=>`<span>${x}</span>`).join(''));
const map=$('#map');
if(map){const P=(lo,la)=>[(lo+180)/360*1000,(90-la)/180*500],su=P(72.8,21.2);
 const D=[['USA',-98,39,0,40,'middle'],['Canada',-106,56,0,-18,'middle'],['UK',-2,54,0,-18,'middle'],['Africa',36.8,-1.3,0,40,'middle'],['Australia',134,-25,0,-18,'middle'],['New Zealand',174,-41,10,40,'end']];
 let dots='';for(let x=10;x<1000;x+=18)for(let y=10;y<500;y+=18)dots+=`<circle cx="${x}" cy="${y}" r="1.3"/>`;
 map.innerHTML=`<g fill="rgba(236,187,114,.16)">${dots}</g>`+D.map(([n,lo,la,dx,dy,an])=>{const[x,y]=P(lo,la);const my=Math.min(y,su[1])-Math.abs(x-su[0])*.28-30;return`<path class="arc" d="M${su[0]},${su[1]} Q${(x+su[0])/2},${my} ${x},${y}" fill="none" stroke="#ecbb72" stroke-width="1.8" stroke-linecap="round"/><circle cx="${x}" cy="${y}" r="6" fill="#ecbb72"/><text x="${x+dx}" y="${y+dy}" fill="#fff" font-size="24" font-weight="600" font-family="Manrope" text-anchor="${an}">${n}</text>`}).join('')+`<circle cx="${su[0]}" cy="${su[1]}" r="8" fill="#ecbb72"/><circle class="pulse" cx="${su[0]}" cy="${su[1]}" r="8" fill="none" stroke="#ecbb72" stroke-width="1.5"/><text x="${su[0]+14}" y="${su[1]+34}" fill="#ecbb72" font-size="26" font-weight="700" font-family="Manrope">Surat</text>`}

/* ---------- interactions ---------- */
$$('.tab').forEach((b,i,all)=>{b.onclick=()=>{all.forEach((x,j)=>x.setAttribute('aria-selected',j==i));$$('.panel').forEach((p,j)=>p.hidden=j!=i)};
 b.onkeydown=e=>{if(e.key=='ArrowRight'||e.key=='ArrowLeft'){const n=(i+(e.key=='ArrowRight'?1:-1)+all.length)%all.length;all[n].click();all[n].focus()}}});
$$('.svc').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')}));
const sl=$('#slider');if(sl){const step=d=>{const c=sl.querySelector('.tcard');sl.scrollBy({left:d*(c.offsetWidth+22),behavior:'smooth'})};
 $('#prev').onclick=()=>step(-1);$('#next').onclick=()=>step(1);sl.onkeydown=e=>{if(e.key=='ArrowRight')step(1);if(e.key=='ArrowLeft')step(-1)}}
const burger=$('#burger');const toggle=o=>{document.body.classList.toggle('menu-open',o);burger.setAttribute('aria-expanded',o);$('#mobile').setAttribute('aria-hidden',!o)};
burger.onclick=()=>toggle(!document.body.classList.contains('menu-open'));
const tIST=$('#tIST');if(tIST){const tick=()=>{const o={hour:'2-digit',minute:'2-digit'};tIST.textContent=new Date().toLocaleTimeString('en-IN',{...o,timeZone:'Asia/Kolkata'});$('#tYou').textContent=new Date().toLocaleTimeString([],o)};tick();setInterval(tick,30000)}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const form=$('#form');if(form)form.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(form);const name=String(f.get('name')||'').trim();
 if(!name){$('#fn').focus();$('#fn').style.borderColor='#c0392b';return}
 const txt=`Hello Sahaj Legal Law Firm,\n\nName: ${name}\nCountry: ${f.get('country')}\nPhone: ${f.get('phone')}\nEmail: ${f.get('email')}\nMatter: ${f.get('matter')}\n\n${f.get('msg')}`;
 const s=$('#sent');s.classList.add('on');s.innerHTML=`Thank you, ${esc(name)}. Your details are ready — <a href="https://wa.me/919825142401?text=${encodeURIComponent(txt)}" target="_blank" rel="noopener">tap here to send them to us on WhatsApp</a>, or call +91 98251 42401.`});
const news=$('#news');if(news)news.addEventListener('submit',e=>{e.preventDefault();$('#newsMsg').textContent='Thank you for subscribing.'});
const disc=$('#disc');const openD=()=>{disc.classList.add('on');$('#agree').focus()};
$('#agree').onclick=()=>{disc.classList.remove('on');store.set('sl-agree','1')};$('#openDisc').onclick=openD;
const nav=$('#nav');let last=0;const onScroll=y=>{nav.classList.toggle('solid',y>30);nav.classList.toggle('hide',y>last&&y>500&&!document.body.classList.contains('menu-open'));last=y};
addEventListener('scroll',()=>onScroll(scrollY),{passive:true});
const wa=$('.wa');const waCheck=()=>{if(wa)wa.classList.toggle('off',innerWidth<900&&scrollY<innerHeight*.7)};waCheck();addEventListener('scroll',waCheck,{passive:true});addEventListener('resize',waCheck);

/* services deep link: open + highlight the chosen practice area */
const deep=()=>{const id=location.hash.slice(1);const card=id&&document.getElementById(id);if(!card||!card.classList.contains('svc'))return;
 $$('.svc.hl').forEach(x=>x.classList.remove('hl'));card.classList.add('hl');const d=card.querySelector('details');if(d)d.open=true;
 card.style.opacity=1;card.style.transform='none';setTimeout(()=>scrollTo({top:card.getBoundingClientRect().top+scrollY-120,behavior:'smooth'}),150)};
addEventListener('hashchange',deep);

/* ---------- loader / page enter ---------- */
const loader=$('#loader');const first=!store.get('sl-seen');store.set('sl-seen','1');
if(loader&&!first){loader.querySelector('img').style.display='none';loader.querySelector('.bar').style.display='none'}
let started=false;
const start=()=>{if(started)return;started=true;if(loader){loader.classList.add('done');setTimeout(()=>loader.remove(),1100)}
 if(!store.get('sl-agree'))setTimeout(openD,first?900:500);if(HAS)intro();deep()};
addEventListener('load',()=>setTimeout(start,RM?0:(first?900:120)));setTimeout(start,3500);
/* leave animation for internal page links */
$$('a[href]').forEach(a=>{const h=a.getAttribute('href');if(!h||h.startsWith('#')||/^(https?:|mailto:|tel:)/.test(h)||a.target)return;
 a.addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||RM)return;const here=location.pathname.split('/').pop()||'index.html';const [file]=h.split('#');
  if(file===here)return;e.preventDefault();toggle(false);document.body.classList.add('leaving');setTimeout(()=>location.href=h,380)})});
addEventListener('pageshow',e=>{if(e.persisted)document.body.classList.remove('leaving')});

/* ---------- motion ---------- */
function intro(){
 const tl=gsap.timeline({defaults:{ease:'expo.out'}});
 tl.from('h1 .line>span',{yPercent:110,duration:1.4,stagger:.12})
   .from('.hx',{y:30,opacity:0,duration:1.2,stagger:.08},'-=1.1');
 if($('.hero2')){
  tl.from('.hero2 .pillars',{clipPath:'polygon(100% 0,100% 0,100% 100%,100% 100%)',duration:1.6,ease:'power3.inOut'},0)
    .from('.h-founder',{y:80,opacity:0,duration:1.6},.35)
    .from('.h-band',{xPercent:-100,duration:1.3,ease:'power4.inOut'},.2)
    .from('.hstat',{y:30,opacity:0,duration:1,stagger:.1},1)
    .from('.h-plate',{x:120,opacity:0,duration:1.2},1.1);
 }
 if($('.phead .pillars'))gsap.from('.phead .pillars',{clipPath:'polygon(100% 0,100% 0,100% 100%,100% 100%)',duration:1.5,ease:'power3.inOut'});
 $$('[data-count]').forEach(el=>{const end=+el.dataset.count,suf=el.dataset.suffix||'',o={v:el.dataset.from?+el.dataset.from:0};gsap.to(o,{v:end,duration:2.2,ease:'power3.out',delay:1.1,onUpdate:()=>el.textContent=Math.round(o.v)+suf})});
}
if(HAS){
 document.documentElement.classList.add('js');gsap.registerPlugin(ScrollTrigger);
 if(window.Lenis){const lenis=new Lenis({lerp:.09});lenis.on('scroll',e=>{ScrollTrigger.update();onScroll(e.scroll)});gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}
 ScrollTrigger.batch('.rv',{start:'top 90%',onEnter:b=>gsap.to(b,{opacity:1,y:0,duration:1.2,stagger:.07,ease:'expo.out',overwrite:true})});
 if($('.hero2')){gsap.to('.hero2 .pillars svg',{yPercent:8,ease:'none',scrollTrigger:{trigger:'.hero2',start:'top top',end:'bottom top',scrub:true}});
  gsap.to('.h-founder',{yPercent:6,ease:'none',scrollTrigger:{trigger:'.hero2',start:'top top',end:'bottom top',scrub:true}})}
 $$('.arc').forEach((p,i)=>{const L=p.getTotalLength();gsap.fromTo(p,{strokeDasharray:L,strokeDashoffset:L},{strokeDashoffset:0,duration:2,delay:i*.12,ease:'power2.inOut',scrollTrigger:{trigger:p.ownerSVGElement,start:'top 85%'}})});
 if($('.pulse'))gsap.to('.pulse',{attr:{r:32},opacity:0,duration:2,repeat:-1,ease:'power1.out'});
 const tr=$('#track');if(tr){let x=0,v=1;gsap.ticker.add(()=>{x-=v*.6;const w=tr.scrollWidth/3;if(-x>=w)x+=w;if(x>0)x-=w;tr.style.transform=`translateX(${x}px)`;v+=(1-v)*.05});
  ScrollTrigger.create({onUpdate:s=>{const vel=s.getVelocity();v=1+Math.min(Math.abs(vel)/300,8)*(vel<0?-1:1)}})}
 if($('#fArch')){gsap.from('#fArch',{clipPath:'inset(100% 0 0 0 round 999px 999px 28px 28px)',duration:1.6,ease:'expo.out',scrollTrigger:{trigger:'#fArch',start:'top 80%'}});
  gsap.fromTo('#fArch img',{yPercent:10},{yPercent:-4,ease:'none',scrollTrigger:{trigger:'#fArch',start:'top bottom',end:'bottom top',scrub:true}})}
 if($('#rolesFill'))gsap.to('#rolesFill',{height:'calc(100% - 16px)',ease:'none',scrollTrigger:{trigger:'#roles',start:'top 75%',end:'bottom 60%',scrub:true}});
 const motto=$('#motto');if(motto)gsap.from(motto,{y:60,opacity:0,duration:1.4,ease:'expo.out',scrollTrigger:{trigger:motto,start:'top 85%',onEnter:()=>setTimeout(()=>motto.classList.add('on'),500)}});
 if(sl)gsap.from('.tcard',{x:120,opacity:0,duration:1.3,stagger:.12,ease:'expo.out',scrollTrigger:{trigger:sl,start:'top 85%'}});
 if($('.closing'))gsap.from('.closing',{clipPath:'inset(0 12% round 28px)',duration:1.4,ease:'expo.out',scrollTrigger:{trigger:'.closing',start:'top 85%'}});
 gsap.from('.bigname',{yPercent:60,opacity:0,duration:1.6,ease:'expo.out',scrollTrigger:{trigger:'footer',start:'top 80%'}});
 if(matchMedia('(hover:hover)').matches)$$('.btn').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.18,y:(e.clientY-r.top-r.height/2)*.28,duration:.5})});b.addEventListener('pointerleave',()=>gsap.to(b,{x:0,y:0,duration:.7,ease:'elastic.out(1,.4)'}))});
}else{const m=$('#motto');if(m)m.classList.add('on')}
}
