// PROVENA demo data model — prototype content only, not production data.

export type Lang = 'en' | 'th';

export type VerificationState = 'SOURCE_VERIFIED' | 'EVIDENCE_PROVIDED' | 'SELF_REPORTED';
export type FreshnessState = 'fresh' | 'stale' | 'unknown';
export type ConnectionStatus = 'connected' | 'disconnected' | 'partial';

export interface Creator {
  name: string;
  nameThai: string;
  username: string;
  category: string;
  categoryThai: string;
  avatarInitials: string;
  profileStatus: 'published' | 'draft';
  profileUrl: string;
}

export interface Metric {
  id: string;
  label: string;
  labelThai: string;
  value: string;
  rawValue: number;
  unit?: string;
  change?: { value: string; direction: 'up' | 'down' | 'flat' };
  verification: VerificationState;
  freshness: FreshnessState;
  lastUpdated: string;
  measurementWindow?: string;
  source?: string;
  evidenceRef?: string;
  history?: { date: string; value: number }[];
}

export interface PlatformSource {
  id: string;
  name: string;
  handle: string;
  connection: ConnectionStatus;
  connectionLabel: string;
  lastSync: string;
  verificationCoverage: {
    sourceVerified: number;
    evidenceProvided: number;
    selfReported: number;
    total: number;
  };
  metrics: Metric[];
  topContent?: { title: string; views: string; engagement: string; date: string }[];
  audience?: AudienceData;
  hasHistory: boolean;
}

export interface AudienceData {
  ageRanges: { range: string; percentage: number }[];
  genders: { label: string; percentage: number }[];
  topCountries: { country: string; percentage: number }[];
  topCities: { city: string; percentage: number }[];
  interests: string[];
}

export interface Campaign {
  id: string;
  brand: string;
  name: string;
  platform: string;
  date: string;
  deliverables: string[];
  metrics: Metric[];
  verification: VerificationState;
  evidence: { label: string; type: string; date: string }[];
  status: 'completed' | 'in-progress' | 'pending';
}

export interface AttentionItem {
  id: string;
  severity: 'info' | 'warning' | 'action';
  message: string;
  messageThai: string;
  source: string;
  action?: string;
}

export interface PublicProfileCoverage {
  performance: { published: number; available: number };
  audience: { available: number };
  campaigns: { shown: number; total: number };
  services: { active: number };
  profile: 'published' | 'draft';
}

// ─── Creator ──────────────────────────────────────────────
export const creator: Creator = {
  name: 'Nisa Saengsawang',
  nameThai: 'นิสา แสงสว่าง',
  username: '@nisa.creates',
  category: 'Food & Lifestyle Creator',
  categoryThai: 'ผู้สร้างคอนเทนต์ อาหารและไลฟ์สไตล์',
  avatarInitials: 'NS',
  profileStatus: 'published',
  profileUrl: '/provena/nisa',
};

// ─── Platforms ─────────────────────────────────────────────
export const platforms: PlatformSource[] = [
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@nisa.eats',
    connection: 'connected',
    connectionLabel: 'Connected via official API',
    lastSync: '28 Aug 2026',
    verificationCoverage: { sourceVerified: 4, evidenceProvided: 0, selfReported: 0, total: 4 },
    hasHistory: true,
    metrics: [
      {
        id: 'tt-followers',
        label: 'Followers',
        labelThai: 'ผู้ติดตาม',
        value: '1.24M',
        rawValue: 1240000,
        change: { value: '+3.2%', direction: 'up' },
        verification: 'SOURCE_VERIFIED',
        freshness: 'fresh',
        lastUpdated: '28 Aug 2026',
        measurementWindow: 'Lifetime',
        source: 'TikTok connected account',
        history: [
          { date: 'May', value: 1180000 },
          { date: 'Jun', value: 1200000 },
          { date: 'Jul', value: 1215000 },
          { date: 'Aug', value: 1240000 },
        ],
      },
      {
        id: 'tt-avg-views',
        label: 'Average views',
        labelThai: 'ยอดวิวเฉลี่ย',
        value: '840K',
        rawValue: 840000,
        change: { value: '+12.4%', direction: 'up' },
        verification: 'SOURCE_VERIFIED',
        freshness: 'fresh',
        lastUpdated: '28 Aug 2026',
        measurementWindow: 'Last 30 days',
        source: 'TikTok connected account',
        history: [
          { date: 'May', value: 680000 },
          { date: 'Jun', value: 720000 },
          { date: 'Jul', value: 780000 },
          { date: 'Aug', value: 840000 },
        ],
      },
      {
        id: 'tt-engagement',
        label: 'Engagement rate',
        labelThai: 'อัตราการมีส่วนร่วม',
        value: '7.8%',
        rawValue: 7.8,
        unit: '%',
        change: { value: '+0.4 pts', direction: 'up' },
        verification: 'SOURCE_VERIFIED',
        freshness: 'fresh',
        lastUpdated: '28 Aug 2026',
        measurementWindow: 'Last 30 days',
        source: 'TikTok connected account',
        history: [
          { date: 'May', value: 6.9 },
          { date: 'Jun', value: 7.1 },
          { date: 'Jul', value: 7.4 },
          { date: 'Aug', value: 7.8 },
        ],
      },
      {
        id: 'tt-reach',
        label: 'Reach',
        labelThai: 'การเข้าถึง',
        value: '2.1M',
        rawValue: 2100000,
        change: { value: '+8.1%', direction: 'up' },
        verification: 'SOURCE_VERIFIED',
        freshness: 'fresh',
        lastUpdated: '28 Aug 2026',
        measurementWindow: 'Last 30 days',
        source: 'TikTok connected account',
        history: [
          { date: 'May', value: 1850000 },
          { date: 'Jun', value: 1920000 },
          { date: 'Jul', value: 1980000 },
          { date: 'Aug', value: 2100000 },
        ],
      },
    ],
    topContent: [
      { title: 'Bangkok street food tour — 24 hours', views: '3.2M', engagement: '9.1%', date: '22 Aug 2026' },
      { title: 'Hidden café in Ari you need to try', views: '1.8M', engagement: '8.4%', date: '15 Aug 2026' },
      { title: 'Cooking with my grandmother', views: '1.1M', engagement: '7.2%', date: '03 Aug 2026' },
    ],
    audience: {
      ageRanges: [
        { range: '18-24', percentage: 38 },
        { range: '25-34', percentage: 41 },
        { range: '35-44', percentage: 14 },
        { range: '45+', percentage: 7 },
      ],
      genders: [
        { label: 'Female', percentage: 64 },
        { label: 'Male', percentage: 34 },
        { label: 'Other', percentage: 2 },
      ],
      topCountries: [
        { country: 'Thailand', percentage: 72 },
        { country: 'United States', percentage: 9 },
        { country: 'Singapore', percentage: 5 },
        { country: 'Malaysia', percentage: 4 },
      ],
      topCities: [
        { city: 'Bangkok', percentage: 48 },
        { city: 'Chiang Mai', percentage: 12 },
        { city: 'Singapore', percentage: 5 },
        { city: 'Phuket', percentage: 4 },
      ],
      interests: ['Food & Drink', 'Travel', 'Lifestyle', 'Fashion', 'Music'],
    },
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@nisa.creates',
    connection: 'connected',
    connectionLabel: 'Connected via official API',
    lastSync: '26 Aug 2026',
    verificationCoverage: { sourceVerified: 2, evidenceProvided: 1, selfReported: 1, total: 4 },
    hasHistory: true,
    metrics: [
      {
        id: 'ig-followers',
        label: 'Followers',
        labelThai: 'ผู้ติดตาม',
        value: '486K',
        rawValue: 486000,
        change: { value: '+1.8%', direction: 'up' },
        verification: 'SOURCE_VERIFIED',
        freshness: 'stale',
        lastUpdated: '26 Aug 2026',
        measurementWindow: 'Lifetime',
        source: 'Instagram connected account',
        history: [
          { date: 'May', value: 472000 },
          { date: 'Jun', value: 478000 },
          { date: 'Jul', value: 482000 },
          { date: 'Aug', value: 486000 },
        ],
      },
      {
        id: 'ig-avg-views',
        label: 'Average views (Reels)',
        labelThai: 'ยอดวิวเฉลี่ย (Reels)',
        value: '312K',
        rawValue: 312000,
        change: { value: '+5.2%', direction: 'up' },
        verification: 'SOURCE_VERIFIED',
        freshness: 'stale',
        lastUpdated: '26 Aug 2026',
        measurementWindow: 'Last 30 days',
        source: 'Instagram connected account',
      },
      {
        id: 'ig-engagement',
        label: 'Engagement rate',
        labelThai: 'อัตราการมีส่วนร่วม',
        value: '5.4%',
        rawValue: 5.4,
        unit: '%',
        change: { value: '-0.2 pts', direction: 'down' },
        verification: 'EVIDENCE_PROVIDED',
        freshness: 'stale',
        lastUpdated: '20 Aug 2026',
        measurementWindow: 'Last 30 days',
        source: 'Manual report export',
        evidenceRef: 'IG-Engagement-Report-Aug2026.pdf',
      },
      {
        id: 'ig-reach',
        label: 'Reach',
        labelThai: 'การเข้าถึง',
        value: '680K',
        rawValue: 680000,
        verification: 'SELF_REPORTED',
        freshness: 'unknown',
        lastUpdated: '15 Aug 2026',
        measurementWindow: 'Last 30 days',
        source: 'Creator-entered',
      },
    ],
    topContent: [
      { title: 'Sunday brunch at home', views: '420K', engagement: '6.1%', date: '24 Aug 2026' },
      { title: 'Night market food crawl', views: '380K', engagement: '5.8%', date: '18 Aug 2026' },
    ],
    audience: {
      ageRanges: [
        { range: '18-24', percentage: 31 },
        { range: '25-34', percentage: 45 },
        { range: '35-44', percentage: 18 },
        { range: '45+', percentage: 6 },
      ],
      genders: [
        { label: 'Female', percentage: 71 },
        { label: 'Male', percentage: 27 },
        { label: 'Other', percentage: 2 },
      ],
      topCountries: [
        { country: 'Thailand', percentage: 68 },
        { country: 'United States', percentage: 12 },
        { country: 'Singapore', percentage: 7 },
        { country: 'Philippines', percentage: 5 },
      ],
      topCities: [
        { city: 'Bangkok', percentage: 42 },
        { city: 'Chiang Mai', percentage: 9 },
        { city: 'Manila', percentage: 5 },
        { city: 'Singapore', percentage: 7 },
      ],
      interests: ['Food & Drink', 'Travel', 'Photography', 'Lifestyle'],
    },
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@nisafood',
    connection: 'partial',
    connectionLabel: 'Manual evidence only',
    lastSync: '20 Aug 2026',
    verificationCoverage: { sourceVerified: 1, evidenceProvided: 1, selfReported: 1, total: 3 },
    hasHistory: false,
    metrics: [
      {
        id: 'yt-subs',
        label: 'Subscribers',
        labelThai: 'สมาชิก',
        value: '94.2K',
        rawValue: 94200,
        change: { value: '+2.1%', direction: 'up' },
        verification: 'SOURCE_VERIFIED',
        freshness: 'stale',
        lastUpdated: '20 Aug 2026',
        measurementWindow: 'Lifetime',
        source: 'YouTube connected account',
      },
      {
        id: 'yt-avg-views',
        label: 'Average views',
        labelThai: 'ยอดวิวเฉลี่ย',
        value: '52K',
        rawValue: 52000,
        verification: 'EVIDENCE_PROVIDED',
        freshness: 'stale',
        lastUpdated: '18 Aug 2026',
        measurementWindow: 'Last 30 days',
        source: 'Manual report export',
        evidenceRef: 'YT-Analytics-Aug2026.png',
      },
      {
        id: 'yt-watch-time',
        label: 'Average watch time',
        labelThai: 'เวลาดูเฉลี่ย',
        value: '4:12',
        rawValue: 252,
        unit: 'min:sec',
        verification: 'SELF_REPORTED',
        freshness: 'unknown',
        lastUpdated: '20 Aug 2026',
        measurementWindow: 'Last 30 days',
        source: 'Creator-entered',
      },
    ],
    topContent: [
      { title: 'I tried every noodle in Bangkok Chinatown', views: '180K', engagement: '4.8%', date: '12 Aug 2026' },
      { title: 'Cooking pad thai from scratch', views: '95K', engagement: '3.9%', date: '02 Aug 2026' },
    ],
  },
];

// ─── Campaigns ─────────────────────────────────────────────
export const campaigns: Campaign[] = [
  {
    id: 'camp-singha',
    brand: 'Singha Water',
    name: 'Summer Hydration Series',
    platform: 'TikTok',
    date: 'Aug 2026',
    deliverables: ['3 TikTok videos', '1 Instagram Reel'],
    status: 'completed',
    verification: 'SOURCE_VERIFIED',
    metrics: [
      { id: 'c1-views', label: 'Views', labelThai: 'ยอดวิว', value: '2.4M', rawValue: 2400000, verification: 'SOURCE_VERIFIED', freshness: 'fresh', lastUpdated: '28 Aug 2026', measurementWindow: 'Campaign period', source: 'TikTok connected account' },
      { id: 'c1-engagement', label: 'Engagement', labelThai: 'การมีส่วนร่วม', value: '8.9%', rawValue: 8.9, unit: '%', verification: 'SOURCE_VERIFIED', freshness: 'fresh', lastUpdated: '28 Aug 2026', source: 'TikTok connected account' },
      { id: 'c1-comments', label: 'Comments', labelThai: 'ความคิดเห็น', value: '12.3K', rawValue: 12300, verification: 'SOURCE_VERIFIED', freshness: 'fresh', lastUpdated: '28 Aug 2026', source: 'TikTok connected account' },
      { id: 'c1-shares', label: 'Shares', labelThai: 'การแชร์', value: '18.7K', rawValue: 18700, verification: 'SOURCE_VERIFIED', freshness: 'fresh', lastUpdated: '28 Aug 2026', source: 'TikTok connected account' },
    ],
    evidence: [
      { label: 'Campaign brief', type: 'PDF', date: '01 Aug 2026' },
      { label: 'TikTok analytics export', type: 'CSV', date: '28 Aug 2026' },
      { label: 'Final delivery report', type: 'PDF', date: '28 Aug 2026' },
    ],
  },
  {
    id: 'camp-central',
    brand: 'Central Embassy',
    name: 'Luxury Food Hall Launch',
    platform: 'Instagram',
    date: 'Jul 2026',
    deliverables: ['2 Instagram Reels', '1 Story set'],
    status: 'completed',
    verification: 'EVIDENCE_PROVIDED',
    metrics: [
      { id: 'c2-views', label: 'Views', labelThai: 'ยอดวิว', value: '680K', rawValue: 680000, verification: 'EVIDENCE_PROVIDED', freshness: 'stale', lastUpdated: '26 Aug 2026', source: 'Manual report export', evidenceRef: 'Central-Campaign-Jul2026.pdf' },
      { id: 'c2-engagement', label: 'Engagement', labelThai: 'การมีส่วนร่วม', value: '6.2%', rawValue: 6.2, unit: '%', verification: 'EVIDENCE_PROVIDED', freshness: 'stale', lastUpdated: '26 Aug 2026', source: 'Manual report export' },
      { id: 'c2-comments', label: 'Comments', labelThai: 'ความคิดเห็น', value: '4.1K', rawValue: 4100, verification: 'SELF_REPORTED', freshness: 'unknown', lastUpdated: '15 Jul 2026', source: 'Creator-entered' },
    ],
    evidence: [
      { label: 'Campaign brief', type: 'PDF', date: '01 Jul 2026' },
      { label: 'Instagram analytics screenshot', type: 'PNG', date: '26 Jul 2026' },
    ],
  },
  {
    id: 'camp-grab',
    brand: 'GrabFood',
    name: 'Local Favorites Campaign',
    platform: 'TikTok + Instagram',
    date: 'Jun 2026',
    deliverables: ['2 TikTok videos', '1 Instagram post'],
    status: 'completed',
    verification: 'EVIDENCE_PROVIDED',
    metrics: [
      { id: 'c3-views', label: 'Views', labelThai: 'ยอดวิว', value: '1.9M', rawValue: 1900000, verification: 'EVIDENCE_PROVIDED', freshness: 'stale', lastUpdated: '30 Jun 2026', source: 'Manual report export', evidenceRef: 'GrabFood-Jun2026.pdf' },
      { id: 'c3-engagement', label: 'Engagement', labelThai: 'การมีส่วนร่วม', value: '7.4%', rawValue: 7.4, unit: '%', verification: 'EVIDENCE_PROVIDED', freshness: 'stale', lastUpdated: '30 Jun 2026', source: 'Manual report export' },
    ],
    evidence: [
      { label: 'Campaign brief', type: 'PDF', date: '01 Jun 2026' },
      { label: 'Cross-platform report', type: 'PDF', date: '30 Jun 2026' },
    ],
  },
  {
    id: 'camp-bigc',
    brand: 'Big C',
    name: 'Home Cooking Series',
    platform: 'YouTube',
    date: 'Sep 2026',
    deliverables: ['1 YouTube video', '1 Instagram Reel'],
    status: 'in-progress',
    verification: 'SELF_REPORTED',
    metrics: [
      { id: 'c4-views', label: 'Views', labelThai: 'ยอดวิว', value: '—', rawValue: 0, verification: 'SELF_REPORTED', freshness: 'unknown', lastUpdated: '—', source: 'Creator-entered' },
    ],
    evidence: [],
  },
];

// ─── Attention Items ────────────────────────────────────────
export const attentionItems: AttentionItem[] = [
  {
    id: 'att-1',
    severity: 'warning',
    message: 'Instagram evidence has not been updated recently.',
    messageThai: 'หลักฐาน Instagram ยังไม่ได้อัปเดตล่าสุด',
    source: 'Instagram',
    action: 'Upload recent export',
  },
  {
    id: 'att-2',
    severity: 'info',
    message: 'YouTube watch time is self-reported.',
    messageThai: 'เวลาดู YouTube เป็นข้อมูลที่รายงานเอง',
    source: 'YouTube',
    action: 'Connect YouTube to verify',
  },
  {
    id: 'att-3',
    severity: 'action',
    message: '2 campaigns do not have supporting evidence.',
    messageThai: 'แคมเปญ 2 รายการไม่มีหลักฐานสนับสนุน',
    source: 'Campaigns',
    action: 'Review campaigns',
  },
  {
    id: 'att-4',
    severity: 'info',
    message: 'Connect a supported platform to verify additional metrics.',
    messageThai: 'เชื่อมต่อแพลตฟอร์มเพิ่มเติมเพื่อยืนยันเมตริก',
    source: 'General',
    action: 'Browse platforms',
  },
];

// ─── Public Profile Coverage ───────────────────────────────
export const publicProfileCoverage: PublicProfileCoverage = {
  performance: { published: 6, available: 11 },
  audience: { available: 3 },
  campaigns: { shown: 4, total: 4 },
  services: { active: 6 },
  profile: 'published',
};

// ─── Services ───────────────────────────────────────────────
export const services = [
  { name: 'Brand Collaboration', nameThai: 'ร่วมงานกับแบรนด์', active: true },
  { name: 'Content Creation', nameThai: 'การสร้างคอนเทนต์', active: true },
  { name: 'Recipe Development', nameThai: 'การพัฒนาสูตรอาหาร', active: true },
  { name: 'Food Photography', nameThai: 'การถ่ายภาพอาหาร', active: true },
  { name: 'Event Appearance', nameThai: 'เข้าร่วมงาน', active: true },
  { name: 'Cooking Workshop', nameThai: 'เวิร์กช็อปทำอาหาร', active: true },
];
