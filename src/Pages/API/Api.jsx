import axios from "axios";

const api = import.meta.env.VITE_APP_API_URL;

export class apicalls {
 
     async fetchHomeData() {
    
        try {
          this.response = await axios.get(`${api}/api/home/`);
         return this.response.data.result[0];    
          
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
      async fetchAboutData() {
    
        try {
          this.response = await axios.get(`${api}/api/about/`);
         return this.response.data.result[0];    
          
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
      async fetchContactData() {
    
        try {
          this.response = await axios.get(`${api}/api/contact/`);
         return this.response.data.result[0];    
          
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
      async fetchSupportData() {
    
        try {
          this.response = await axios.get(`${api}/api/support/`);
         return this.response.data.result[0];    
          
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };
async fetchNavData(){
  try {
    this.response = await axios.get(`${api}/api/navbar/`);
    return this.response.data.result;    
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};
async fetchFooterData(){
  try {
    this.response = await axios.get(`${api}/api/footer/`);
    return this.response.data.result;    
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};


  }