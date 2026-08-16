export type Skill = {
  id: number;
  name: string;
  logo: string;
  category: string;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
};
