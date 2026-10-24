// service worker — ให้ติดตั้งเป็นแอปบนมือถือ/คอมได้ (ดึงของใหม่ก่อนเสมอ ออฟไลน์ค่อยใช้ของในเครื่อง)
const C='endo-tech-trial-v4';
const SHELL=['./','./index.html','./config.js','./data.js','./zone.js','./manifest.json','./icon-192.png','./icon-512.png','./favicon-32.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin)return; // ไม่ยุ่งกับ Apps Script / Drive
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r;}).catch(()=>caches.match(e.request)));
});
