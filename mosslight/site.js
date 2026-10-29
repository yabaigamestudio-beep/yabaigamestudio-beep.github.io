/* No analytics, cookies or tracking. This selector only changes text on this page. */
fetch('catalog.json').then(r=>{if(!r.ok)throw Error('copy unavailable');return r.json()}).then(data=>{
 const select=document.getElementById('intro-language'),text=document.getElementById('intro-text');
 const render=()=>{const item=data.locales.find(x=>x.locale===select.value);if(item){text.textContent=item.description;text.lang=item.locale;}};
 select.addEventListener('change',render);render();
}).catch(()=>{});
