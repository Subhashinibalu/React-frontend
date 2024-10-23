import { Modal } from "flowbite-react";
import data from "../datas.json"

const Email = () => {
    return (
        <>
           <div className="bg-gray-800 text-white p-3 fixed top-0 left-0 w-full flex items-center pl-44 z-20">
        <p className="m-0">
          Email: <a href="mailto:support@posbytz.com" className="text-white hover:underline">{data.email}</a>
        </p>
      </div> 
      <Modal/>
        </>
    );
};

export default Email;