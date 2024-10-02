import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'chat_messages'), orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesData);
    });
    return () => unsubscribe();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (message.trim()) {
      await addDoc(collection(db, 'chat_messages'), {
        user_id: user.uid,
        message,
        timestamp: Timestamp.now(),
      });
      setMessage('');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="border p-4 mb-4 h-64 overflow-y-scroll">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-2">
            <p><strong>{msg.user_id === auth.currentUser?.uid ? 'You' : 'Someone'}:</strong> {msg.message}</p>
            <p className="text-xs">{new Date(msg.timestamp.seconds * 1000).toLocaleString()}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 flex-grow mr-2"
          placeholder="Type your message"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
