import type { LocaleString } from './i18n';

export type VerificationState = 'SOURCE_VERIFIED' | 'EVIDENCE_PROVIDED' | 'SELF_REPORTED';

export type PlatformKey = 'tiktok' | 'instagram' | 'youtube';

export interface Platform {
  key: PlatformKey;
  label: string;
  handle: string;
  followers: string;
}

export interface Metric {
  label: LocaleString;
  value: string;
  sublabel?: LocaleString;
  verification: VerificationState;
  platform: PlatformKey;
}

export interface AudienceAgeGroup {
  range: string;
  pct: number;
}

export interface AudienceLocation {
  label: LocaleString;
  pct: number;
}

export interface AudienceInterest {
  label: LocaleString;
  pct: number;
}

export interface AudienceData {
  primaryAgeGroup: string;
  genderSplit: { label: LocaleString; pct: number }[];
  topLocations: AudienceLocation[];
  topInterests: AudienceInterest[];
}

export interface Campaign {
  id: string;
  brand: string;
  campaignName: LocaleString;
  type: LocaleString;
  platform: PlatformKey;
  deliverable: LocaleString;
  date: string;
  result: string;
  resultLabel: LocaleString;
  verification: VerificationState;
  image: string;
}

export interface Service {
  id: string;
  name: LocaleString;
  description: LocaleString;
  platform: PlatformKey | 'multi';
  deliverable: LocaleString;
  startingPrice: string;
  popular?: boolean;
}

export interface CreatorProfile {
  displayName: string;
  username: string;
  headline: LocaleString;
  category: LocaleString;
  location: LocaleString;
  bio: LocaleString;
  avatar: string;
  platforms: Platform[];
  positioning: LocaleString[];
  metrics: Metric[];
  audience: AudienceData;
  campaigns: Campaign[];
  featuredCampaignId: string;
  services: Service[];
  lastUpdated: string;
}
