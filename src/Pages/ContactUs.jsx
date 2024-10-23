import { useEffect, useState } from 'react';
import FirstLayout from '../Layout/FirstLayout';
import { apicalls } from './API/Api';
const ContactUs = () => {


  const [contactus, setContactUs] = useState(null);

 
  useEffect(() => {
    const fetchData = async () => {
      const api = new apicalls();
      try {
        const data = await api.fetchContactData();
        setContactUs(data);
      } catch (err) {
        console.log(err);
      } 
    };

    fetchData();
  }, [contactus]);

  // Ensure home data is available before rendering components
  if (!contactus) {
    return <div>Loading...</div>;
  }

  return (
<FirstLayout transparent={true}>
<div className="w-full bg-[#957FB4] flex justify-center items-center pb-36 px-36 pt-48 top-12">
    <div >
      <h1 className='text-5xl font-bold text-white fontfam'>{contactus.contacttitle}</h1>
      <h3 className='font-semibold text-white text-center fontfam text-lg m-3'>{contactus.contactsub1} &nbsp; &gt; &nbsp; {contactus.contacttitle}</h3>

    </div>
  </div>

<div className="bg-gray-100 p-5 w-full ">
      <div className="flex justify-center">
        <div className="w-full max-w-xl">
          <h2 className="text-4xl font-bold text-center mb-4">{contactus.contacth}</h2>
          <p className="text-center text-gray-600 mb-6 text-lg">
            {contactus.contactp}
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 mb-3">
              <input
                type="text"
                className="w-full p-3 border-0 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Name"
                aria-label="First name"
              />
              <input
                type="email"
                className="w-full p-3 border-0 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Email"
                aria-label="Email"
              />
            </div>
            <div className="flex gap-4 mb-3">
              <input
                type="tel"
                className="w-full p-3 border-0 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Phone"
                aria-label="Phone number"
              />
              <select
                className="w-full p-3 border-0 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                id="country-select"
              >
                <option selected>INDIA</option>
                <option value="1">CHINA</option>
                <option value="2">RUSSIA</option>
                <option value="3">CANADA</option>
              </select>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="w-full p-3 border-0 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Subject"
                aria-label="Subject"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="w-full p-3 border-0 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your Message"
                id="message"
                rows="8"
              ></textarea>
            </div>
            <div className="flex  mt-4">
              <button
                className="orng text-white py-3 px-6 rounded-full shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                Submit Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</FirstLayout>






  );
};

export default ContactUs;
