// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';
// Return static or empty profile banner
export async function getProfileBanner(): Promise<ProfileBanner> {
  return {
    backgroundImage: { url: '' },
    headline: '',
    resumeLink: { url: '' },
    linkedinLink: '',
    profileSummary: ''
  };
}
