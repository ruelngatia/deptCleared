import axios from "axios";

export class FormService {

  private baseURL = "https://debtscleared-backend.onrender.com";

  public async getHelp(form_type: string): Promise<any> {
    try {
      const res = await axios.post(
        `${this.baseURL}/fill-application?form_type=${form_type}`
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  public async AiChat(message: string): Promise<any> {
    try {
      const res = await axios.post(
        `${this.baseURL}/chatbot`,{query: message }
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }



}
