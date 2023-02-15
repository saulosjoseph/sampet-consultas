import { Animal } from "./animal.interface";
import { User } from "./user.interface";

export interface ConsultationInterface {
  user: User;
  animal: Animal;
  anamnese: string;
}
