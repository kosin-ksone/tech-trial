// ===== ตั้งค่าแอป — แก้ไฟล์นี้ไฟล์เดียว =====
window.APP_CONFIG = {

  // URL ของ Google Apps Script Web App (ต้องลงท้าย /exec) — เว้นว่าง = โหมดทดลอง (เก็บลงเครื่อง)
  // ลิงก์หลังบ้าน sales.kosin (ชีตกลาง + รูป Drive 3 เดือน) — Dashboard เห็นรายงานจริง · เว้นว่าง = เก็บในเครื่องอย่างเดียว
  SYNC_URL: "https://script.google.com/macros/s/AKfycbxdp2F0oxiP_8uQWeU8WoYo3-jr8QAIYm84YeQZ2P_PX-6UjFzg3tKu32lP2y1_wisDXQ/exec",

  SUBMIT_URL: "",   // ว่าง = โหมดทดลอง (เก็บในเครื่อง) · ใส่ลิงก์ /exec หลังบ้าน sales.kosin ตอนใช้จริง

  // ไม่ใช้ LINE แล้ว — ใช้ผ่านแอปที่ลงในมือถือ/คอมเท่านั้น (เว้นว่างไว้)
  LIFF_ID: "",

  // แนบรูปได้สูงสุดกี่รูปต่องาน
  PHOTO_MAX: 20,


  // ชื่อบริษัทบนหัวแอป (ตัวหนังสือลายเส้นแบบโลโก้)
  BRAND_NAME: "ENDOSCOPE &",
  BRAND_SUB:  "SERVICE · รายงานงานช่าง",

  // ===== สีของแอป — แก้ 3 ค่านี้ เปลี่ยนทั้งแอป =====
  THEME: {
    brand:   "#8A5A3C",   // สีหลัก (ปุ่ม/แท็บ/ตัวหนังสือโลโก้) — น้ำตาล ENDO
    onBrand: "#ffffff",   // สีตัวอักษรบนพื้นสีหลัก
    gold:    "#E0B44C",   // สีทอง (เส้นขอบ/ไฮไลต์)
    bg:      "#FFFCF7"    // สีพื้นหลังแอป

    // ── พรีเซ็ตสำเร็จรูป: ก็อปค่าไปวางแทน brand/gold ด้านบน ──
    // น้ำตาล ENDO   →  brand:"#8A5A3C", gold:"#E0B44C"
    // น้ำตาลเข้ม    →  brand:"#5E4539", gold:"#C9A24A"
    // แดงโกสิน      →  brand:"#C4271C", gold:"#D4AF37"
    // น้ำเงินเท่     →  brand:"#1F3C8F", gold:"#D4AF37"
  }
};

// ฉบับทดลองงาน (ลิงก์แยก)
window.APP_CONFIG.TRIAL=true; window.APP_CONFIG.SUBMIT_URL=''; window.APP_CONFIG.SYNC_URL='';   // ไม่ส่งเข้าระบบ/Dashboard · เก็บในเครื่องอย่างเดียว
window.APP_CONFIG.PLAN_URL='https://script.google.com/macros/s/AKfycbxdp2F0oxiP_8uQWeU8WoYo3-jr8QAIYm84YeQZ2P_PX-6UjFzg3tKu32lP2y1_wisDXQ/exec';   // อ่านตารางงานจากชีตอย่างเดียว
