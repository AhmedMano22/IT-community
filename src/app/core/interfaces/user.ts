export interface UserProfile {
    firstName: string;
    lastName: string;
    universityId: string | null;
    countryId: string | null;
    facultyId: string | null;
    phoneNumber: string | null;
    gender: string | null;
    dateOfBirth: string | null;
    languages: string[] | null;
    currency: string | null;
    bio: string | null;
    image: string | null;
  }
