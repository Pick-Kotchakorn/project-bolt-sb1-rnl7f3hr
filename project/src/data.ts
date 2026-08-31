import type { CreatorProfile } from './types';

export const completeCreator: CreatorProfile = {
  displayName: 'Nisa Saengsawang',
  username: 'nisafoodie',
  headline: {
    en: 'Thai Food & Lifestyle Creator',
    th: 'ครีเอเตอร์อาหารและไลฟ์สไตล์ไทย',
  },
  category: {
    en: 'Food & Lifestyle',
    th: 'อาหารและไลฟ์สไตล์',
  },
  location: {
    en: 'Bangkok, Thailand',
    th: 'กรุงเทพมหานคร ประเทศไทย',
  },
  bio: {
    en: 'Sharing the flavours of Thai home cooking and the stories behind every dish — from night-market finds to modern kitchen reinventions.',
    th: 'แชร์รสชาติของอาหารไทยและเรื่องราวเบื้องหลังทุกจาน ตั้งแต่ของอร่อยตลาดกลางคืนจนถึงการคิดค้นใหม่ในครัวยุคใหม่',
  },
  avatar:
    'https://images.pexels.com/photos/12673815/pexels-photo-12673815.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  platforms: [
    { key: 'tiktok', label: 'TikTok', handle: '@nisafoodie', followers: '1.2M' },
    { key: 'instagram', label: 'Instagram', handle: '@nisa.foodie', followers: '486K' },
    { key: 'youtube', label: 'YouTube', handle: 'Nisa Foodie', followers: '112K' },
  ],
  positioning: [
    {
      en: 'Thai food & lifestyle creator',
      th: 'ครีเอเตอร์อาหารและไลฟ์สไตล์ไทย',
    },
    {
      en: 'Bangkok-based, pan-Asian reach',
      th: 'ฐานอยู่กรุงเทพฯ เข้าถึงทั่วเอเชีย',
    },
    {
      en: 'Strong short-form video performance',
      th: 'ผลงานวิดีโอสั้นแข็งแรง',
    },
    {
      en: 'Suitable for restaurant · FMCG · lifestyle campaigns',
      th: 'เหมาะกับแคมเปญร้านอาหาร · FMCG · ไลฟ์สไตล์',
    },
  ],
  metrics: [
    {
      label: { en: 'Followers', th: 'ผู้ติดตาม' },
      value: '1.2M',
      sublabel: { en: 'TikTok', th: 'TikTok' },
      verification: 'SOURCE_VERIFIED',
      platform: 'tiktok',
    },
    {
      label: { en: 'Avg. views', th: 'ยอดวิวเฉลี่ย' },
      value: '840K',
      sublabel: { en: 'per video · TikTok', th: 'ต่อวิดีโอ · TikTok' },
      verification: 'SOURCE_VERIFIED',
      platform: 'tiktok',
    },
    {
      label: { en: 'Engagement rate', th: 'อัตราการมีส่วนร่วม' },
      value: '7.4%',
      sublabel: { en: '30-day average', th: 'เฉลี่ย 30 วัน' },
      verification: 'SOURCE_VERIFIED',
      platform: 'tiktok',
    },
    {
      label: { en: 'Total reach', th: 'ยอดเข้าถึงรวม' },
      value: '12.6M',
      sublabel: { en: 'last 30 days · all platforms', th: '30 วันล่าสุด · ทุกแพลตฟอร์ม' },
      verification: 'SOURCE_VERIFIED',
      platform: 'tiktok',
    },
    {
      label: { en: 'Instagram followers', th: 'ผู้ติดตาม Instagram' },
      value: '486K',
      sublabel: { en: 'Instagram', th: 'Instagram' },
      verification: 'SOURCE_VERIFIED',
      platform: 'instagram',
    },
    {
      label: { en: 'Story completion', th: 'อัตราดูจบสตอรี่' },
      value: '88%',
      sublabel: { en: 'avg. completion · Instagram', th: 'ดูจบเฉลี่ย · Instagram' },
      verification: 'EVIDENCE_PROVIDED',
      platform: 'instagram',
    },
    {
      label: { en: 'YouTube subscribers', th: 'สมาชิก YouTube' },
      value: '112K',
      sublabel: { en: 'YouTube', th: 'YouTube' },
      verification: 'SOURCE_VERIFIED',
      platform: 'youtube',
    },
    {
      label: { en: 'Avg. watch time', th: 'เวลาดูเฉลี่ย' },
      value: '4:12',
      sublabel: { en: 'per video · YouTube', th: 'ต่อวิดีโอ · YouTube' },
      verification: 'SELF_REPORTED',
      platform: 'youtube',
    },
  ],
  audience: {
    primaryAgeGroup: '25–34',
    genderSplit: [
      { label: { en: 'Women', th: 'หญิง' }, pct: 68 },
      { label: { en: 'Men', th: 'ชาย' }, pct: 31 },
      { label: { en: 'Other', th: 'อื่นๆ' }, pct: 1 },
    ],
    topLocations: [
      { label: { en: 'Thailand', th: 'ไทย' }, pct: 64 },
      { label: { en: 'Singapore', th: 'สิงคโปร์' }, pct: 9 },
      { label: { en: 'Malaysia', th: 'มาเลเซีย' }, pct: 7 },
      { label: { en: 'Philippines', th: 'ฟิลิปปินส์' }, pct: 5 },
      { label: { en: 'United States', th: 'สหรัฐอเมริกา' }, pct: 4 },
    ],
    topInterests: [
      { label: { en: 'Food & dining', th: 'อาหารและร้านอาหาร' }, pct: 82 },
      { label: { en: 'Travel & local', th: 'ท่องเที่ยวและท้องถิ่น' }, pct: 61 },
      { label: { en: 'Lifestyle & home', th: 'ไลฟ์สไตล์และบ้าน' }, pct: 48 },
      { label: { en: 'Wellness & health', th: 'สุขภาพและความเป็นอยู่' }, pct: 34 },
    ],
  },
  campaigns: [
    {
      id: 'c1',
      brand: 'Sri Trang Foods',
      campaignName: {
        en: 'Green Curry Reinvented',
        th: 'เขียวหวานเริ่มต้นใหม่',
      },
      type: { en: 'TikTok Video', th: 'วิดีโอ TikTok' },
      platform: 'tiktok',
      deliverable: {
        en: '1× 60s short-form video + 2× story reposts',
        th: 'วิดีโอสั้น 60 วินาที 1 คลิป + รีโพสต์สตอรี่ 2 ครั้ง',
      },
      date: 'มิ.ย. 2026',
      result: '2.1M',
      resultLabel: { en: 'views in 14 days', th: 'ยอดวิวใน 14 วัน' },
      verification: 'SOURCE_VERIFIED',
      image:
        'https://images.pexels.com/photos/28381598/pexels-photo-28381598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      id: 'c2',
      brand: 'Mama Kitchen',
      campaignName: {
        en: '30-Minute Thai Dinners',
        th: 'อาหารไทย 30 นาที',
      },
      type: { en: 'Instagram Reel', th: 'Instagram Reel' },
      platform: 'instagram',
      deliverable: {
        en: '1× Reel + 1× carousel',
        th: 'Reel 1 คลิป + คาร์ousel 1 ชุด',
      },
      date: 'เม.ย. 2026',
      result: '680K',
      resultLabel: { en: 'accounts reached', th: 'บัญชีที่เข้าถึง' },
      verification: 'EVIDENCE_PROVIDED',
      image:
        'https://images.pexels.com/photos/20994429/pexels-photo-20994429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      id: 'c3',
      brand: 'Fresh Market Co.',
      campaignName: {
        en: 'Farm-to-Wok Series',
        th: 'ฟาร์มสู่กระทะ',
      },
      type: { en: 'YouTube Integration', th: 'ช่วงโฆษณา YouTube' },
      platform: 'youtube',
      deliverable: {
        en: '1× 8-min integration video',
        th: 'วิดีโอช่วงโฆษณา 8 นาที',
      },
      date: 'ก.พ. 2026',
      result: '94K',
      resultLabel: { en: 'views · 9% CTR', th: 'ยอดวิว · คลิก 9%' },
      verification: 'SOURCE_VERIFIED',
      image:
        'https://images.pexels.com/photos/39269036/pexels-photo-39269036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
    {
      id: 'c4',
      brand: 'Urban Table',
      campaignName: {
        en: 'Night Market Tour',
        th: 'ทัวร์ตลาดกลางคืน',
      },
      type: { en: 'Instagram Story', th: 'Instagram Story' },
      platform: 'instagram',
      deliverable: {
        en: '5× story sequence',
        th: 'สตอรี่ต่อเนื่อง 5 ตอน',
      },
      date: 'ม.ค. 2026',
      result: '410K',
      resultLabel: { en: 'impressions', th: 'อิมเพรสชัน' },
      verification: 'SELF_REPORTED',
      image:
        'https://images.pexels.com/photos/38417317/pexels-photo-38417317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
  ],
  featuredCampaignId: 'c1',
  services: [
    {
      id: 's1',
      name: { en: 'TikTok Video', th: 'วิดีโอ TikTok' },
      description: {
        en: 'Original short-form video featuring your product in a natural cooking context.',
        th: 'วิดีโอสั้นต้นฉบับที่นำสินค้าของคุณเข้าสู่บริบทการทำอาหารอย่างเป็นธรรมชาติ',
      },
      platform: 'tiktok',
      deliverable: { en: '1× 30–90s video', th: 'วิดีโอ 30–90 วินาที 1 คลิป' },
      startingPrice: '฿45,000',
      popular: true,
    },
    {
      id: 's2',
      name: { en: 'Instagram Reel', th: 'Instagram Reel' },
      description: {
        en: 'Polished Reel with recipe integration and story amplification.',
        th: 'Reel คุณภาพสูง ผสานสูตรอาหารและขยายผลด้วยสตอรี่',
      },
      platform: 'instagram',
      deliverable: { en: '1× Reel + 2× Stories', th: 'Reel 1 คลิป + สตอรี่ 2 ตอน' },
      startingPrice: '฿38,000',
    },
    {
      id: 's3',
      name: { en: 'YouTube Integration', th: 'ช่วงโฆษณา YouTube' },
      description: {
        en: 'Long-form integration within a cooking episode, up to 90 seconds.',
        th: 'ช่วงโฆษณาในวิดีโอทำอาหารรูปแบบยาว ไม่เกิน 90 วินาที',
      },
      platform: 'youtube',
      deliverable: { en: '1× 8–12 min video', th: 'วิดีโอ 8–12 นาที 1 คลิป' },
      startingPrice: '฿65,000',
    },
    {
      id: 's4',
      name: { en: 'UGC Package', th: 'แพ็กเกจ UGC' },
      description: {
        en: 'Raw content assets for your own paid social — no posting required.',
        th: 'คอนเทนต์ดิบให้คุณนำไปโพสต์ในช่องที่จ่ายโฆษณาเอง — ไม่ต้องโพสต์ในช่องครีเอเตอร์',
      },
      platform: 'multi',
      deliverable: { en: '3× clips + 5× stills', th: 'คลิป 3 ชิ้น + ภาพนิ่ง 5 ภาพ' },
      startingPrice: '฿25,000',
    },
    {
      id: 's5',
      name: { en: 'Event Appearance', th: 'งานอีเวนต์' },
      description: {
        en: 'On-site cooking demo or hosting for brand launches and tastings.',
        th: 'สาธิตการทำอาหารหรือเป็นพิธีกรในงานเปิดตัวแบรนด์และงานชิม',
      },
      platform: 'multi',
      deliverable: { en: '2-hour appearance', th: 'ปรากฏตัว 2 ชั่วโมง' },
      startingPrice: '฿50,000',
    },
    {
      id: 's6',
      name: { en: 'Campaign Package', th: 'แพ็กเกจแคมเปญ' },
      description: {
        en: 'Multi-platform package — TikTok video, Reel, and Stories with shared concept.',
        th: 'แพ็กเกจหลายแพลตฟอร์ม — วิดีโอ TikTok, Reel และสตอรี่ ใช้คอนเซ็ปต์เดียวกัน',
      },
      platform: 'multi',
      deliverable: { en: '3× deliverables', th: 'ส่งมอบ 3 ชิ้น' },
      startingPrice: '฿110,000',
    },
  ],
  lastUpdated: '28 ส.ค. 2026',
};

export const partialCreator: CreatorProfile = {
  ...completeCreator,
  displayName: 'Kla Tananchai',
  username: 'klaeats',
  headline: {
    en: 'Street Food Explorer',
    th: 'นักสำรวจอาหารตามท้องถิ่น',
  },
  category: { en: 'Food', th: 'อาหาร' },
  location: {
    en: 'Chiang Mai, Thailand',
    th: 'เชียงใหม่ ประเทศไทย',
  },
  bio: {
    en: 'Documenting hidden street-food gems across Northern Thailand, one stall at a time.',
    th: 'บันทึกร้านอาหารตามสถานที่ต่างๆ ทั่วภาคเหนือของไทย ทีละร้าน',
  },
  avatar:
    'https://images.pexels.com/photos/39269035/pexels-photo-39269035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  platforms: [
    { key: 'tiktok', label: 'TikTok', handle: '@klaeats', followers: '340K' },
    { key: 'instagram', label: 'Instagram', handle: '@kla.eats', followers: '88K' },
  ],
  positioning: [
    {
      en: 'Street food explorer',
      th: 'นักสำรวจอาหารตามท้องถิ่น',
    },
    {
      en: 'Chiang Mai-based',
      th: 'ฐานอยู่เชียงใหม่',
    },
    {
      en: 'Growing short-form video performance',
      th: 'ผลงานวิดีโอสั้นกำลังเติบโต',
    },
    {
      en: 'Suitable for food & local-tourism campaigns',
      th: 'เหมาะกับแคมเปญอาหารและการท่องเที่ยวท้องถิ่น',
    },
  ],
  metrics: [
    {
      label: { en: 'Followers', th: 'ผู้ติดตาม' },
      value: '340K',
      sublabel: { en: 'TikTok', th: 'TikTok' },
      verification: 'SOURCE_VERIFIED',
      platform: 'tiktok',
    },
    {
      label: { en: 'Avg. views', th: 'ยอดวิวเฉลี่ย' },
      value: '210K',
      sublabel: { en: 'per video · TikTok', th: 'ต่อวิดีโอ · TikTok' },
      verification: 'SOURCE_VERIFIED',
      platform: 'tiktok',
    },
    {
      label: { en: 'Instagram followers', th: 'ผู้ติดตาม Instagram' },
      value: '88K',
      sublabel: { en: 'Instagram', th: 'Instagram' },
      verification: 'EVIDENCE_PROVIDED',
      platform: 'instagram',
    },
  ],
  audience: {
    primaryAgeGroup: '18–24',
    genderSplit: [
      { label: { en: 'Women', th: 'หญิง' }, pct: 54 },
      { label: { en: 'Men', th: 'ชาย' }, pct: 45 },
      { label: { en: 'Other', th: 'อื่นๆ' }, pct: 1 },
    ],
    topLocations: [
      { label: { en: 'Thailand', th: 'ไทย' }, pct: 78 },
      { label: { en: 'United States', th: 'สหรัฐอเมริกา' }, pct: 6 },
      { label: { en: 'Australia', th: 'ออสเตรเลีย' }, pct: 4 },
    ],
    topInterests: [
      { label: { en: 'Food & dining', th: 'อาหารและร้านอาหาร' }, pct: 74 },
      { label: { en: 'Travel & local', th: 'ท่องเที่ยวและท้องถิ่น' }, pct: 52 },
    ],
  },
  campaigns: [
    {
      id: 'c1',
      brand: 'Old Town Coffee',
      campaignName: {
        en: 'Northern Mornings',
        th: 'ตอนเช้าภาคเหนือ',
      },
      type: { en: 'TikTok Video', th: 'วิดีโอ TikTok' },
      platform: 'tiktok',
      deliverable: {
        en: '1× 45s short-form video',
        th: 'วิดีโอสั้น 45 วินาที 1 คลิป',
      },
      date: 'ก.ค. 2026',
      result: '510K',
      resultLabel: { en: 'views in 30 days', th: 'ยอดวิวใน 30 วัน' },
      verification: 'EVIDENCE_PROVIDED',
      image:
        'https://images.pexels.com/photos/28381598/pexels-photo-28381598.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    },
  ],
  featuredCampaignId: 'c1',
  services: [
    {
      id: 's1',
      name: { en: 'TikTok Video', th: 'วิดีโอ TikTok' },
      description: {
        en: 'Short-form video featuring your spot in a street-food tour context.',
        th: 'วิดีโอสั้นที่นำร้านของคุณเข้าสู่บริบททัวร์อาหารตามท้องถิ่น',
      },
      platform: 'tiktok',
      deliverable: { en: '1× 30–60s video', th: 'วิดีโอ 30–60 วินาที 1 คลิป' },
      startingPrice: '฿18,000',
      popular: true,
    },
    {
      id: 's2',
      name: { en: 'Instagram Story', th: 'Instagram Story' },
      description: {
        en: 'Story sequence covering a visit to your location.',
        th: 'สตอรี่ต่อเนื่องที่ครอบคลุมการแวะเยือนสถานที่ของคุณ',
      },
      platform: 'instagram',
      deliverable: { en: '3× story sequence', th: 'สตอรี่ต่อเนื่อง 3 ตอน' },
      startingPrice: '฿8,000',
    },
  ],
  lastUpdated: '20 ส.ค. 2026',
};

export const newCreator: CreatorProfile = {
  ...completeCreator,
  displayName: 'Pim Wichaidit',
  username: 'pimcooks',
  headline: {
    en: 'Home Cooking Storyteller',
    th: 'ผู้เล่าเรื่องจากครัวบ้าน',
  },
  category: { en: 'Food', th: 'อาหาร' },
  location: {
    en: 'Bangkok, Thailand',
    th: 'กรุงเทพมหานคร ประเทศไทย',
  },
  bio: {
    en: 'Sharing family recipes and everyday Thai home cooking with a focus on honest, simple ingredients.',
    th: 'แชร์สูตรอาหารครอบครัวและการทำอาหารไทยประจำวัน เน้นวัตถุดิบจริงใจและเรียบง่าย',
  },
  avatar:
    'https://images.pexels.com/photos/12674044/pexels-photo-12674044.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  platforms: [
    { key: 'instagram', label: 'Instagram', handle: '@pim.cooks', followers: '12K' },
  ],
  positioning: [
    {
      en: 'Home cooking storyteller',
      th: 'ผู้เล่าเรื่องจากครัวบ้าน',
    },
    {
      en: 'Bangkok-based',
      th: 'ฐานอยู่กรุงเทพฯ',
    },
    {
      en: 'Early-stage creator',
      th: 'ครีเอเตอร์ระยะเริ่มต้น',
    },
    {
      en: 'Suitable for niche food & ingredient campaigns',
      th: 'เหมาะกับแคมเปญอาหารและวัตถุดิบเฉพาะกลุ่ม',
    },
  ],
  metrics: [],
  audience: {
    primaryAgeGroup: '25–34',
    genderSplit: [
      { label: { en: 'Women', th: 'หญิง' }, pct: 71 },
      { label: { en: 'Men', th: 'ชาย' }, pct: 28 },
      { label: { en: 'Other', th: 'อื่นๆ' }, pct: 1 },
    ],
    topLocations: [{ label: { en: 'Thailand', th: 'ไทย' }, pct: 92 }],
    topInterests: [{ label: { en: 'Food & dining', th: 'อาหารและร้านอาหาร' }, pct: 65 }],
  },
  campaigns: [],
  featuredCampaignId: '',
  services: [
    {
      id: 's1',
      name: { en: 'Instagram Reel', th: 'Instagram Reel' },
      description: {
        en: 'A recipe Reel featuring your product in a home-cooking context.',
        th: 'Reel สูตรอาหารที่นำสินค้าของคุณเข้าสู่บริบทการทำอาหารที่บ้าน',
      },
      platform: 'instagram',
      deliverable: { en: '1× Reel', th: 'Reel 1 คลิป' },
      startingPrice: '฿6,000',
      popular: true,
    },
    {
      id: 's2',
      name: { en: 'UGC Package', th: 'แพ็กเกจ UGC' },
      description: {
        en: 'Raw content assets for your own social — no posting required.',
        th: 'คอนเทนต์ดิบให้คุณนำไปโพสต์เอง — ไม่ต้องโพสต์ในช่องครีเอเตอร์',
      },
      platform: 'multi',
      deliverable: { en: '3× clips + 5× stills', th: 'คลิป 3 ชิ้น + ภาพนิ่ง 5 ภาพ' },
      startingPrice: '฿4,000',
    },
  ],
  lastUpdated: '30 ส.ค. 2026',
};
