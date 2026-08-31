import type { LocaleString } from './i18n';

export const ui: Record<string, LocaleString> = {
  // TopBar / nav
  nav_performance: { en: 'Performance', th: 'ผลงาน' },
  nav_audience: { en: 'Audience', th: 'กลุ่มผู้ติดตาม' },
  nav_campaigns: { en: 'Campaigns', th: 'แคมเปญ' },
  nav_services: { en: 'Services', th: 'บริการ' },
  nav_view_evidence: { en: 'View full evidence', th: 'ดูหลักฐานทั้งหมด' },
  nav_work_with_me: { en: 'Work with me', th: 'ร่วมงานกับฉัน' },
  nav_toggle_menu: { en: 'Toggle menu', th: 'เปิด/ปิดเมนู' },
  lang_label: { en: 'EN', th: 'TH' },

  // Hero
  hero_best_platform: { en: 'Best platform', th: 'แพลตฟอร์มหลัก' },
  hero_source_verified: { en: 'Source verified', th: 'ยืนยันจากแหล่งข้อมูล' },
  hero_performance_data: { en: 'Performance data', th: 'ข้อมูลผลงาน' },
  hero_work_with_me: { en: 'Work with me', th: 'ร่วมงานกับฉัน' },
  hero_see_performance: { en: 'See performance', th: 'ดูผลงาน' },

  // Performance
  perf_eyebrow: { en: 'Performance proof', th: 'ข้อมูลผลงาน' },
  perf_title: { en: 'How strong is the performance?', th: 'ผลงานแข็งแค่ไหน?' },
  perf_desc: {
    en: 'Commercially relevant metrics, grouped by platform. Each metric carries its own verification status.',
    th: 'ตัวเลขที่สำคัญต่อการตัดสินใจ จัดกลุ่มตามแพลตฟอร์ม แต่ละตัวชี้วัดมีสถานะการยืนยันแยกกัน',
  },
  perf_empty_title: { en: 'Performance data is being gathered', th: 'กำลังรวบรวมข้อมูลผลงาน' },
  perf_empty_desc: {
    en: 'This creator is new to PROVENA. Verified performance metrics will appear here once the creator connects a platform.',
    th: 'ครีเอเตอร์รายนี้เพิ่งเข้าร่วม PROVENA ตัวชี้วัดที่ผ่านการยืนยันจะปรากฏที่นี่เมื่อเชื่อมต่อแพลตฟอร์มแล้ว',
  },
  perf_empty_note: {
    en: 'Brands can still evaluate this creator through identity, positioning, and the services offered below.',
    th: 'แบรนด์ยังสามารถประเมินครีเอเตอร์รายนี้ได้จากตัวตน จุดเด่น และบริการที่เสนอด้านล่าง',
  },
  perf_all_platforms: { en: 'All platforms', th: 'ทุกแพลตฟอร์ม' },
  perf_view_evidence: { en: 'View full evidence', th: 'ดูหลักฐานทั้งหมด' },
  perf_verified_count: {
    en: '{verified} of {total} metrics are source-verified from connected platforms.',
    th: '{verified} จาก {total} ตัวชี้วัดได้รับการยืนยันจากแพลตฟอร์มที่เชื่อมต่อ',
  },
  perf_updated: { en: 'Updated {date}', th: 'อัปเดตเมื่อ {date}' },
  perf_view_proof: { en: 'View proof →', th: 'ดูหลักฐาน →' },

  // Audience
  aud_eyebrow: { en: 'Audience fit', th: 'กลุ่มผู้ติดตาม' },
  aud_title: { en: 'Who does this creator reach?', th: 'ครีเอเตอร์รายนี้เข้าถึงใคร?' },
  aud_desc_full: {
    en: 'A decision-level snapshot of who watches, engages, and buys. Deeper audience detail lives on the evidence page.',
    th: 'ภาพรวมระดับการตัดสินใจของผู้ชม ผู้ที่มีส่วนร่วม และผู้ซื้อ รายละเอียดเพิ่มเติมอยู่ในหน้าหลักฐาน',
  },
  aud_desc_minimal: {
    en: 'A snapshot of the audience. Fuller detail is available on the evidence page as the creator connects more data.',
    th: 'ภาพรวมของกลุ่มผู้ติดตาม รายละเอียดเพิ่มเติมจะอยู่ในหน้าหลักฐานเมื่อครีเอเตอร์เชื่อมต่อข้อมูลเพิ่มขึ้น',
  },
  aud_primary_age: { en: 'Primary age group', th: 'ช่วงอายุหลัก' },
  aud_age_desc: {
    en: 'Largest audience segment across platforms',
    th: 'กลุ่มผู้ติดตามที่ใหญ่ที่สุดในทุกแพลตฟอร์ม',
  },
  aud_gender: { en: 'Gender distribution', th: 'สัดส่วนเพศ' },
  aud_top_locations: { en: 'Top locations', th: 'สถานที่หลัก' },
  aud_interests: { en: 'Audience interests', th: 'ความสนใจของผู้ติดตาม' },
  aud_note: {
    en: "Audience data is aggregated from connected platform analytics. It reflects an estimate across the creator's connected accounts and may differ per platform.",
    th: 'ข้อมูลกลุ่มผู้ติดตามรวบรวมจากการวิเคราะห์ของแพลตฟอร์มที่เชื่อมต่อ เป็นการประมาณการจากบัญชีที่เชื่อมต่อทั้งหมด และอาจแตกต่างกันในแต่ละแพลตฟอร์ม',
  },
  aud_view_breakdown: { en: 'View per-platform breakdown →', th: 'ดูสัดส่วนรายแพลตฟอร์ม →' },
  aud_women: { en: 'Women', th: 'หญิง' },
  aud_men: { en: 'Men', th: 'ชาย' },
  aud_other: { en: 'Other', th: 'อื่นๆ' },

  // Campaigns
  camp_eyebrow: { en: 'Brand & campaign experience', th: 'ประสบการณ์งานแบรนด์' },
  camp_title: { en: 'Commercial track record', th: 'ผลงานงานพาณิชย์' },
  camp_desc: {
    en: 'Past collaborations with brands — what was delivered, how it performed, and how the result was verified.',
    th: 'งานที่ผ่านมากับแบรนด์ต่างๆ — ส่งมอบอะไร ผลออกมาอย่างไร และยืนยันผลลัพธ์อย่างไร',
  },
  camp_empty_title: { en: 'No published campaigns yet', th: 'ยังไม่มีแคมเปญที่เผยแพร่' },
  camp_empty_desc: {
    en: "This creator hasn't added commercial campaigns to their profile. Ask about past work directly through the inquiry form.",
    th: 'ครีเอเตอร์รายนี้ยังไม่ได้เพิ่มแคมเปญงานพาณิชย์ลงในโปรไฟล์ สอบถามงานที่ผ่านมาได้โดยตรงผ่านแบบฟอร์ม',
  },
  camp_featured: { en: 'Featured campaign', th: 'แคมเปญเด่น' },
  camp_deliverable: { en: 'Deliverable', th: 'สิ่งที่ส่งมอบ' },
  camp_platform: { en: 'Platform', th: 'แพลตฟอร์ม' },
  camp_view_proof: { en: 'View proof', th: 'ดูหลักฐาน' },

  // Services
  svc_eyebrow: { en: 'Ways to work together', th: 'รูปแบบการทำงานร่วมกัน' },
  svc_title: { en: 'What you can hire this creator for', th: 'จ้างครีเอเตอร์รายนี้ทำอะไรได้บ้าง' },
  svc_desc: {
    en: 'Starting rates for each service format. Final scope and pricing are confirmed directly in the inquiry.',
    th: 'ราคาเริ่มต้นของแต่ละรูปแบบบริการ ขอบเขตและราคาสุดท้ายจะยืนยันกันในแบบฟอร์มสอบถาม',
  },
  svc_empty_title: { en: 'Services will be available soon', th: 'บริการจะเปิดให้เร็วๆ นี้' },
  svc_empty_desc: {
    en: 'This creator is still setting up their commercial offerings.',
    th: 'ครีเอเตอร์รายนี้กำลังตั้งค่าบริการงานพาณิชย์',
  },
  svc_popular: { en: 'Popular', th: 'ยอดนิยม' },
  svc_starting_from: { en: 'Starting from', th: 'เริ่มต้นที่' },
  svc_inquire: { en: 'Inquire', th: 'สอบถาม' },
  svc_custom_title: { en: 'Need a custom package?', th: 'ต้องการแพ็กเกจเฉพาะ?' },
  svc_custom_desc: {
    en: 'Describe your campaign and get a tailored proposal.',
    th: 'บอกลักษณะแคมเปญของคุณแล้วรับข้อเสนอที่ปรับให้เหมาะกับงาน',
  },
  svc_start_inquiry: { en: 'Start an inquiry', th: 'เริ่มสอบถาม' },

  // WorkWithMe
  wwm_eyebrow: { en: 'Primary conversion', th: 'การดำเนินการหลัก' },
  wwm_title: { en: 'Work with {name}', th: 'ร่วมงานกับ {name}' },
  wwm_desc: {
    en: 'Send a commercial inquiry. {name} typically responds within two business days with availability and a tailored proposal.',
    th: 'ส่งคำสอบถามงานพาณิชย์ {name} มักตอบกลับภายในสองวันทำการ พร้อมแจ้งความพร้อมและข้อเสนอที่ปรับให้เหมาะกับงาน',
  },
  wwm_next_steps: { en: 'What happens next', th: 'ขั้นตอนต่อไป' },
  wwm_step_1: {
    en: 'You submit your campaign brief and contact details.',
    th: 'คุณส่งรายละเอียดแคมเปญและข้อมูลติดต่อ',
  },
  wwm_step_2: {
    en: 'The creator reviews fit and responds with availability.',
    th: 'ครีเอเตอร์พิจารณาความเหมาะสมและตอบกลับความพร้อม',
  },
  wwm_step_3: {
    en: 'You confirm scope, deliverables, and timeline together.',
    th: 'คุณยืนยันขอบเขต สิ่งที่ส่งมอบ และกำหนดการ together',
  },
  wwm_step_3_fix: {
    en: 'You confirm scope, deliverables, and timeline together.',
    th: 'คุณและครีเอเตอร์ยืนยันขอบเขต สิ่งที่ส่งมอบ และกำหนดการร่วมกัน',
  },
  wwm_prefer_verify: {
    en: 'Prefer deeper verification first?',
    th: 'อยากตรวจสอบหลักฐานเพิ่มก่อน?',
  },
  wwm_view_evidence: { en: 'View full evidence →', th: 'ดูหลักฐานทั้งหมด →' },
  wwm_inquiry_eyebrow: { en: 'Commercial inquiry', th: 'คำสอบถามงานพาณิชย์' },
  wwm_form_title: { en: 'Tell us about your campaign', th: 'บอกเราเกี่ยวกับแคมเปญของคุณ' },
  wwm_your_name: { en: 'Your name', th: 'ชื่อของคุณ' },
  wwm_company: { en: 'Company / brand', th: 'บริษัท / แบรนด์' },
  wwm_work_email: { en: 'Work email', th: 'อีเมลที่ทำงาน' },
  wwm_interested_in: { en: 'Interested in', th: 'สนใจบริการ' },
  wwm_select_service: { en: 'Select a service (optional)', th: 'เลือกบริการ (ไม่บังคับ)' },
  wwm_campaign_info: { en: 'Campaign / project info', th: 'ข้อมูลแคมเปญ / โปรเจกต์' },
  wwm_message: { en: 'Message', th: 'ข้อความ' },
  wwm_ph_name: { en: 'Jane Marketing', th: 'ชื่อ-นามสกุล' },
  wwm_ph_company: { en: 'Brand name', th: 'ชื่อแบรนด์' },
  wwm_ph_email: { en: 'you@brand.com', th: 'you@brand.com' },
  wwm_ph_campaign: {
    en: 'e.g. Q4 launch, product seeding, event',
    th: 'เช่น ลอนช์ Q4, ส่งตัวอย่างสินค้า, งานอีเวนต์',
  },
  wwm_ph_message: {
    en: 'Tell the creator about your campaign, timeline, and goals.',
    th: 'บอกครีเอเตอร์เกี่ยวกับแคมเปญ กำหนดการ และเป้าหมายของคุณ',
  },
  wwm_send: { en: 'Send commercial inquiry', th: 'ส่งคำสอบถามงานพาณิชย์' },
  wwm_sending: { en: 'Sending…', th: 'กำลังส่ง…' },
  wwm_consent: {
    en: 'By sending, you agree to be contacted about this inquiry.',
    th: 'การส่งแสดงว่าคุณยินยอมให้ติดต่อเกี่ยวกับคำสอบถามนี้',
  },
  wwm_sent_title: { en: 'Inquiry sent', th: 'ส่งคำสอบถามแล้ว' },
  wwm_sent_desc: {
    en: 'Thanks{name}. The creator has received your commercial inquiry and will respond to your email within two business days.',
    th: 'ขอบคุณ{name} ครีเอเตอร์ได้รับคำสอบถามงานพาณิชย์ของคุณแล้ว และจะตอบกลับอีเมลภายในสองวันทำการ',
  },
  wwm_send_another: { en: 'Send another', th: 'ส่งอีกครั้ง' },
  wwm_there: { en: 'there', th: '' },

  // Footer
  footer_tagline: {
    en: 'Turn your work into proof. A commercial creator profile that helps brands decide with confidence.',
    th: 'เปลี่ยนผลงานของคุณให้เป็นหลักฐาน โปรไฟล์ครีเอเตอร์เชิงพาณิชย์ที่ช่วยให้แบรนด์ตัดสินใจได้อย่างมั่นใจ',
  },
  footer_copyright: {
    en: '© 2026 PROVENA. This is a fictional profile for demonstration.',
    th: '© 2026 PROVENA โปรไฟล์นี้เป็นตัวอย่างสมมติเพื่อการสาธิต',
  },

  // Sticky CTA
  sticky_title: { en: 'Work with this creator', th: 'ร่วมงานกับครีเอเตอร์รายนี้' },
  sticky_sub: { en: 'Send a commercial inquiry', th: 'ส่งคำสอบถามงานพาณิชย์' },

  // State switcher
  switcher_label: { en: 'Profile state', th: 'สถานะโปรไฟล์' },
  state_complete: { en: 'Complete', th: 'ข้อมูลครบ' },
  state_partial: { en: 'Partial', th: 'ข้อมูลบางส่วน' },
  state_new: { en: 'New creator', th: 'ครีเอเตอร์ใหม่' },

  // Verification
  ver_verified_short: { en: 'Verified', th: 'ยืนยันแล้ว' },
  ver_evidence_short: { en: 'Evidence', th: 'มีหลักฐาน' },
  ver_self_short: { en: 'Self-reported', th: 'แจ้งเอง' },
  ver_verified_label: { en: 'Source verified', th: 'ยืนยันจากแหล่งข้อมูล' },
  ver_evidence_label: { en: 'Evidence provided', th: 'มีหลักฐานประกอบ' },
  ver_self_label: { en: 'Self-reported', th: 'แจ้งด้วยตนเอง' },
  ver_verified_desc: {
    en: 'Obtained from an approved platform or provider.',
    th: 'ได้มาจากแพลตฟอร์มหรือผู้ให้บริการที่ได้รับการอนุมัติ',
  },
  ver_evidence_desc: {
    en: 'Creator provided a screenshot, report, or export.',
    th: 'ครีเอเตอร์แนบภาพหน้าจอ รายงาน หรือไฟล์ส่งออกประกอบ',
  },
  ver_self_desc: {
    en: 'Manually entered by the creator. Not verified by PROVENA.',
    th: 'ครีเอเตอร์กรอกข้อมูลเอง ไม่ได้รับการยืนยันโดย PROVENA',
  },
  ver_verified_rank: { en: 'High confidence', th: 'ความน่าเชื่อถือสูง' },
  ver_evidence_rank: { en: 'Supporting evidence', th: 'มีหลักฐานประกอบ' },
  ver_self_rank: { en: 'Entered by creator', th: 'ครีเอเตอร์แจ้งเอง' },
};
