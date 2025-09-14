// queries/getContactMe.ts
import { ContactMe } from '../types';
// Return static or empty contact data
export async function getContactMe(): Promise<ContactMe> {
  return {
    profilePicture: { url: '' },
    name: '',
    title: '',
    summary: '',
    companyUniversity: '',
    linkedinLink: '',
    email: '',
    phoneNumber: ''
  };
}
