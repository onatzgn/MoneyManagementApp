import { UserSignInType } from "./UserSignInType";

export interface UserSignUpType extends UserSignInType {
    id?: string;
    fullName: string;
    phone: string;
  }
  