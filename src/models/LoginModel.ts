import { UserModel } from "./UserModel";

export interface LoginModel{
        success: string;
        token: string;
        user: UserModel;
        plan: string;
        paid: boolean;
}