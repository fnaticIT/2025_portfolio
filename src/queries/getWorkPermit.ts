// queries/getWorkPermit.ts
import { WorkPermit } from '../types';

// No work permit info in resume, so return placeholder or empty object
export async function getWorkPermit(): Promise<WorkPermit> {
  return {
    visaStatus: '',
    expiryDate: new Date(),
    summary: '',
    additionalInfo: ''
  };
}
