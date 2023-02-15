import { Animal } from "./animal.interface";

export interface User {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  address: string;
  animals: Animal[];
}
