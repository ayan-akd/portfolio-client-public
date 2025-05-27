export interface TEducation {
  degree: string;
  institution: string;
}

export interface TExperience {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
}


export interface TService {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface TAbout {
  _id?: string;
  image: string;
  name: string;
  phone: string;
  email: string;
  title: string;
  bio: string;
  education: TEducation[];
  experience: TExperience[];
  services: TService[];
  address: string;
  resumeLink?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
