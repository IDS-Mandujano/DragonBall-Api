export interface Transformaciones {
  id: number;
  name: string;
  image: string;
  ki: string;
  character: {
    id: number;
    name: string;
    ki: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
  };
}