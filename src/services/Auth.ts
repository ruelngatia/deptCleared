import axios from "axios";
import { paymentModel } from "../models/PaymentModel";
import { LoginModel } from "../models/LoginModel";

export class Auth {
  // public baseURL: string = "http://localhost:4004";
  public baseURL: string = "https://deptclearedserver.onrender.com";

  public async signin(form: any): Promise<any> {
    try {
      const res = await axios.post(`${this.baseURL}/login`, form);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  public async signup(form: any): Promise<any> {
    try {
      const res = await axios.post(`${this.baseURL}/signup`, form);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  public async verifyOTP(username: string,code: string):Promise<LoginModel>{
    try{
        const res = await axios.post(`${this.baseURL}/verify-login`, { username, code })
        return res.data
    }catch(error){
        throw error
    }
  }

  public async makePayment(payment: paymentModel): Promise<string> {
    try {
      const res = await axios.post(
        `${this.baseURL}/create-checkout-session`,
        payment
      );
      return res.data.url;
    } catch (error) {
      throw error;
    }
  }
}
