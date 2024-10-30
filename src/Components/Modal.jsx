import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from 'uuid';

const SOCKET_SERVER_URL = 'ws://localhost:3007'; 

const Modal = ({ isOpen, onClose }) => {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [id, setid] = useState(); 

  useEffect(() => {
   
    if(!id){
      sessionStorage.setItem("sessionid", uuidv4());
      setid(sessionStorage.getItem("sessionid"));
    
    }    
    const newSocket = io(SOCKET_SERVER_URL);
    newSocket.on("join", (msg) => {
      console.log("Socket:", msg);       
    });

    newSocket.on("message", (msg) => {
      console.log("Message from server:", msg);
      setMessages(prevMessages => [...prevMessages, { text: msg.message, sender: msg.from,email:msg.email }]); 
    });
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, []);
 
 
   
  const handlesubmit = async(e) => {
    if (e.key === 'Enter' && message.trim()) {
        console.log("Sending message:", message);
        
        await socket.emit('join', { id, who: "user",to:"admin" }); // Include session ID
        await socket.emit('message', { message, id, who: "user",to:"admin" }); // Send message to admin
        setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
        setMessage(''); 
    }
};


  return (
    <div>
      {isOpen ? (
        <div className="fixed inset-0 rounded-3xl w-fit block -top-6 left-2/3 z-50">
          <div className="text-white shadow-lg relative m-10">
            <div className="bg-[#EC6800] rounded-t-3xl w-96 px-10 py-10" onClick={onClose}>
              <div className='flex justify-center'>
                <span className='ms-5 -mt-6 mb-4'><button className='bg-[#CE5B00] rounded-lg px-3'><i className="bi bi-wechat"></i> Chat</button></span>
                <span className='ms-5 -mt-6 mb-4'><button><i className="bi bi-book-fill"></i> Support</button></span>
                <button className="absolute top-2 right-2 inline text-white hover:text-gray-800" onClick={onClose}>
                  <i className="bi bi-x text-2xl"></i>
                </button>
              </div>

              <p className='text-center text-white font-bold text-sm'>Ask your questions anytime</p>
              <p className='text-sm text-slate-200 m-1 font-semibold text-center'>Typically replies in under 29 mins</p>
            </div>

            <div className='bg-white text-black rounded-b-3xl p-5'>
              <div className="flex flex-col">
                <div className='h-72 p-2 overflow-auto'>
                  <span className='text-gray-400 text-sm'><img src="https://image.crisp.chat/avatar/website/b21f93c5-b94e-40ff-8b48-071a822e5da1/120/?1729314687908" className='w-8 rounded-full inline'/> Posbytz</span>
                  <div className="p-2 text-white ms-6 bg-[#EC6800] rounded">
                    <p className="">Hello, how can I help you?</p>
                  </div>

                  {messages.map((msg, index) => (
                    <div key={index} className={`p-2 rounded m-3 ${msg.sender === 'user' ? ' text-black text-end ' : 'bg-[#EC6800] text-white'}`}>
                      {msg.email?<><span className='text-sm text-gray-200'>{msg.email}</span><br/> {msg.text}</>:<> {msg.text}</>}
    
                    </div>
                  ))}
                </div>
                <hr className='text-slate-600 m-2' />
                <input
                  className="outline-none border-none mb-2"
                  placeholder="Compose your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handlesubmit}
                />
                <div className='flex text-gray-500 font-semibold'>
                  <i className="bi bi-emoji-smile text-xl"></i>
                  <i className="bi bi-file-plus ms-2 text-xl"></i>
                  <i className="bi bi-soundwave ms-2 text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
