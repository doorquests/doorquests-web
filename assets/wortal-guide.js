/* Wortal 3.0 — shared curated catalog of verified repository experience routes.
   A route's presence is not a final gameplay acceptance or a live-browser availability claim.
   Directory-only and concept-preview destinations are deliberately excluded. */
(()=>{'use strict';
const items=[["Doortals","The Unremembered King","/stories/the-unremembered-king/","read","wonder","Doortals","","Playable experience"],["Doortals","The Stranger in Every Photograph","/stories/the-stranger-in-every-photograph/","read","suspense","Doortals","","Playable experience"],["Cluortals","The Nightingale Sleeper","/cases/the-nightingale-sleeper/","think","suspense","Cluortals","","Playable experience"],["Cluortals","The Oxygen Ledger","/cases/the-oxygen-ledger/","think","curiosity","Cluortals","","Playable experience"],["Chaortals","The Door of Three Keys","/challenges/the-door-of-three-keys/","think","challenge","Chaortals","","Playable experience"],["Chaortals","The Clockwork Latch","/challenges/the-clockwork-latch/","think","curiosity","Chaortals","","Playable experience"],["Gamortals","Last Candle","/games/last-candle/","act","suspense","Gamortals","","Playable experience"],["Gamortals","Keysmith","/games/keysmith/","act","challenge","Gamortals","","Playable experience"],["Gamortals","Holes Between Rooms","/games/holes-between-rooms/","act","wonder","Gamortals","","Playable experience"],["Techortals","The Brightening at Harrow Hall","/electortals/the-brightening-at-harrow-hall/","think","curiosity","Techortals","","Playable experience"],["Techortals","The House That Drinks at Night","/plumbortals/the-house-that-drinks-at-night/","think","suspense","Techortals","","Playable experience"],["Techortals","The Door That Knew First","/buildortals/the-door-that-knew-first/","explore","curiosity","Techortals","","Playable experience"],["Techortals","Ice in August","/climortals/ice-in-august/","explore","challenge","Techortals","","Playable experience"],["Techortals","The Carousel That Ate Bearings","/mechortals/the-carousel-that-ate-bearings/","think","challenge","Techortals","","Playable experience"],["Techortals","The Car That Wouldn't Leave the Bakery","/autortals/the-car-that-wouldnt-leave-the-bakery/","think","curiosity","Techortals","","Playable experience"],["Discortals","The Uncatalogued Room","/histortals/the-uncatalogued-room/","explore","curiosity","Discortals","","Playable experience"],["Discortals","The Slow Clock of Meridian Station","/sciortals/the-slow-clock-of-meridian-station/","think","wonder","Discortals","","Playable experience"],["Discortals","The Maillard Laboratory","/culinortals/the-maillard-laboratory/","explore","challenge","Discortals","","Playable experience"],["Discortals","The Ship That Wasn’t","/philosortals/the-ship-that-wasnt/","read","curiosity","Discortals","","Playable experience"],["Dwortals","The Porter’s Lantern","/dwortals/fantortals/thesilenttongue/porterslantern/","act","adventure","Dwortals","Fantortals · The Silent Tongue","Playable preview"],["Possibortals","Fogbound: The Grayhaven Light","/sonortals/fogbound-the-grayhaven-light/","act","suspense","Sonortals","Original Possibortals","Playable experience"],["Possibortals","The Sluice Keeper of Wren Hollow","/dilemmortals/the-sluice-keeper-of-wren-hollow/","think","challenge","Dilemmortals","Original Possibortals","Playable experience"],["Possibortals","The Lost Property Office at Hollin Cross","/mystortals/the-lost-property-office-at-hollin-cross/","read","curiosity","Mystortals","Original Possibortals","Playable experience"],["Possibortals","Twelve Clocks Till Midnight","/chronortals/twelve-clocks-till-midnight/","think","challenge","Chronortals","The Boundless Wing","Playable experience"],["Possibortals","House Rules at the Lantern Inn","/paradoxortals/house-rules-at-the-lantern-inn/","think","curiosity","Paradoxortals","The Boundless Wing","Playable experience"],["Possibortals","Twin Globes","/multivortals/twin-globes/","explore","wonder","Multivortals","The Boundless Wing","Playable experience"],["Possibortals","The Map They Followed","/echortals/the-map-they-followed/","explore","curiosity","Echortals","The Boundless Wing","Playable experience"],["Possibortals","Where the Shadows Hold","/dreamortals/where-the-shadows-hold/","read","wonder","Dreamortals","The Boundless Wing","Playable experience"],["Possibortals","The Last Harvest Bell","/randortals/the-last-harvest-bell/","think","challenge","Randortals","The Boundless Wing","Playable experience"],["Possibortals","The Window on Lantern Street","/perceptortals/the-window-on-lantern-street/","explore","curiosity","Perceptortals","The Resonance Wing","Playable experience"],["Possibortals","The Ship in the Bottle","/sensortals/the-ship-in-the-bottle/","act","challenge","Sensortals","The Resonance Wing","Playable experience"],["Possibortals","The Answering Light","/communortals/the-answering-light/","think","curiosity","Communortals","The Resonance Wing","Playable experience"],["Possibortals","The Meeting in the Mountain","/collabortals/the-meeting-in-the-mountain/","think","adventure","Collabortals","The Resonance Wing","Playable experience"],["Possibortals","The Butler Has Noticed","/evolvortals/the-butler-has-noticed/","act","challenge","Evolvortals","The Genesis Wing","Playable experience"],["Possibortals","The Town That Grew Around a Door","/generortals/the-town-that-grew-around-a-door/","explore","wonder","Generortals","The Genesis Wing","Playable experience"],["Possibortals","Nine Rooms for the Midnight Guest","/creatortals/nine-rooms-for-the-midnight-guest/","act","challenge","Creatortals","The Genesis Wing","Playable experience"],["Possibortals","The Unstrung House","/morphortals/the-unstrung-house/","think","curiosity","Morphortals","The Genesis Wing","Playable experience"],["Possibortals","Three Knocks at Sorrel Pass","/invertortals/three-knocks-at-sorrel-pass/","read","suspense","Invertortals","The Genesis Wing","Playable experience"],["Possibortals","The Word Too Common to Find","/glitchortals/the-word-too-common-to-find/","think","curiosity","Glitchortals","The Enigma Wing","Playable experience"],["Possibortals","The Drummer of Ostrey Bridge","/scaleortals/the-drummer-of-ostrey-bridge/","explore","wonder","Scaleortals","The Enigma Wing","Playable experience"],["Possibortals","The Pruning of Hollowbough","/fragmortals/the-pruning-of-hollowbough/","think","challenge","Fragmortals","The Enigma Wing","Playable experience"],["Techortals","The Ugly Weld Held","/techortals/weldortals/001/","think","challenge","Weldortals","","Playable experience"],["Techortals","Forty Perfect Mistakes","/techortals/fabriortals/001/","think","curiosity","Fabriortals","","Playable experience"],["Techortals","No Fault Found","/techortals/aviortals/001/","think","curiosity","Aviortals","","Playable experience"],["Techortals","The Ship That Went Dark on Purpose","/techortals/marinortals/001/","explore","suspense","Marinortals","","Playable experience"],["Techortals","Every Drop Delivered","/techortals/agortals/001/","think","challenge","Agortals","","Playable experience"],["Techortals","The Stone That Stayed Put","/techortals/survortals/001/","explore","curiosity","Survortals","","Playable experience"],["Techortals","The Ghost Shift","/techortals/robortals/001/","act","challenge","Robortals","","Playable experience"],["Techortals","Mail for the Empty Building","/techortals/netortals/001/","think","curiosity","Netortals","","Playable experience"],["Techortals","Logged In While at Sea","/techortals/cybortals/001/","think","suspense","Cybortals","","Playable experience"]];
const families=[["Doortals","Stories & adventures"],["Cluortals","Mysteries & investigations"],["Chaortals","Challenges & puzzles"],["Gamortals","Games & strategy"],["Possibortals","Imagination & possibilities"],["Techortals","Technology & real-world systems"],["Discortals","Discovery & learning"],["Dwortals","Immersive worlds & epic adventures"]];
const styles=[['read','Read & Imagine'],['think','Think & Investigate'],['act','Act & Play'],['explore','Explore & Discover']];
const moods=[['wonder','Wonder'],['suspense','Suspense'],['curiosity','Curiosity'],['adventure','Adventure'],['challenge','Challenge']];
const labels={read:'reading and imagination',think:'investigation and reasoning',act:'active play',explore:'exploration and discovery'};
const moodLabels=Object.fromEntries(moods);
const form=document.getElementById('warden-form')||document.getElementById('warden-form-enhanced');
if(!form)return;
const classic=form.id==='warden-form';
const result=document.getElementById(classic?'warden-result':'guide-result');
if(!result)return;
const options=(label,name,data,describe)=>'<fieldset class="w2-field"><legend>'+label+'</legend><div class="w2-options">'+data.map(([v,t])=>'<label class="w2-option"><input type="radio" name="'+name+'" value="'+v+'" required><span>'+(describe?v:t)+(describe?'<small>'+t+'</small>':'')+'</span></label>').join('')+'</div></fieldset>';
form.innerHTML=options('1. What kind of door calls to you?','kind',families,true)
  +options('2. How do you want to engage?','style',styles,false)
  +options('3. What mood suits you?','mood',moods,false)
  +'<div class="w2-actions"><button class="w2-primary" type="submit">Find My Door →</button><button type="button" id="w2-random">Surprise Me ✦</button></div>'
  +'<p class="w2-note">Wortal chooses from curated, playable experience routes in eight established families. Some flagships are previews awaiting further testing. Developing concepts are not recommended as playable doors.</p>';
if(!classic)result.textContent='Choose a family, how you want to play, and a mood.';
let current=null,choices=null,shown=new Set(),rotation=0;
function ranked(c,omit){
  return items.map((o,i)=>({o,i,score:(o[0]===c.kind?100:0)+(o[3]===c.style?8:0)+(o[4]===c.mood?5:0)}))
    .filter(v=>v.o[0]===c.kind&&v.o[2]!==omit)
    .sort((x,y)=>y.score-x.score||x.i-y.i);
}
function select(c,omit){
  const pool=ranked(c,omit);if(!pool.length)return null;
  const fresh=pool.filter(v=>!shown.has(v.o[2]));const candidates=fresh.length?fresh:pool;
  // Rotate between equally suitable experiences instead of always taking the first.
  const top=candidates[0].score,tied=candidates.filter(v=>v.score===top);
  return tied[(rotation++)%tied.length].o;
}
function addText(tag,cl,value){const n=document.createElement(tag);if(cl)n.className=cl;n.textContent=value;result.appendChild(n);return n;}
function show(o,c){
  if(!o)return;
  current=o;choices=c;shown.add(o[2]);result.hidden=false;result.replaceChildren();
  addText('p','w2-quote','Ah, traveler. I believe I have found your door.');
  addText('strong','w2-title',o[1]);
  addText('p','w2-note',[o[0],o[5]!==o[0]?o[5]:null,o[6]||null,o[7]].filter(Boolean).join(' · '));
  const rationale=c
    ?('You chose '+c.kind+'. '+(o[3]===c.style?'This door fits your preferred '+labels[c.style]+'. ':'It offers another way to engage within your chosen family. ')+(o[4]===c.mood?'Its atmosphere also fits '+moodLabels[c.mood].toLowerCase()+'.':'Your mood may take a different turn.'))
    :('A surprise from '+o[0]+(o[6]?' — '+o[6]:'')+'. Its focus is '+labels[o[3]]+'.');
  addText('p','w2-reason',rationale);
  const actions=document.createElement('div');actions.className='w2-actions';
  const enter=document.createElement('a');enter.className='w2-primary';enter.href=o[2];enter.target='_blank';enter.rel='noopener noreferrer';enter.textContent='Enter Experience ↗';
  const another=document.createElement('button');another.type='button';another.textContent='Try Another Door';
  const familyCount=c?items.filter(x=>x[0]===c.kind).length:items.length;
  if(familyCount<2){another.disabled=true;another.title='Only one curated experience is available in this family. Change your answers to explore other families.';}
  another.addEventListener('click',()=>{
    if(choices){
      if(items.filter(x=>x[0]===choices.kind).every(x=>shown.has(x[2])))shown=new Set([current[2]]);
      const next=select(choices,current[2]);show(next||current,choices);
    }else{surprise(current[2]);}
  });
  const change=document.createElement('button');change.type='button';change.textContent='Change My Answers';
  change.addEventListener('click',()=>{result.hidden=true;form.querySelector('input')?.focus();});
  actions.append(enter,another,change);result.appendChild(actions);
  result.scrollIntoView({block:'nearest',behavior:'smooth'});
}
function surprise(exclude){
  const pool=items.filter(x=>x[2]!==exclude);
  let fresh=pool.filter(x=>!shown.has(x[2]));
  if(!fresh.length){shown.clear();fresh=pool;}
  const pick=fresh[Math.floor(Math.random()*fresh.length)];show(pick,null);
}
form.addEventListener('submit',e=>{
  e.preventDefault();if(!form.reportValidity())return;
  const d=new FormData(form),c={kind:d.get('kind'),style:d.get('style'),mood:d.get('mood')};
  shown.clear();rotation=0;show(select(c,null),c);
});
form.querySelector('#w2-random')?.addEventListener('click',()=>surprise(current&&current[2]));
if(classic){
  const start=document.getElementById('warden-start'),panel=document.getElementById('warden-quiz');
  start?.addEventListener('click',()=>{panel.hidden=!panel.hidden;start.setAttribute('aria-expanded',String(!panel.hidden));if(!panel.hidden)panel.querySelector('input')?.focus();});
  document.getElementById('warden-surprise')?.addEventListener('click',()=>{panel.hidden=false;start?.setAttribute('aria-expanded','true');surprise(current&&current[2]);});
}
})();