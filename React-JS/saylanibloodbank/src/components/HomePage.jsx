import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [donors, setDonors] = useState([]);
  const [requesters, setRequesters] = useState([]);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  // Fetch all users
  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const usersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(usersData);

        // Separate donors and requesters
        const donorsData = usersData.filter((user) => user.donationStatus);
        const requestersData = usersData.filter((user) => !user.donationStatus);
        setDonors(donorsData);
        setRequesters(requestersData);
      },
      (err) => {
        console.error("Error fetching users:", err);
        setError("Error fetching users.");
      }
    );

    return () => unsubscribe();
  }, []);

  // Fetch chat messages
  useEffect(() => {
    if (selectedUser) {
      const q = query(
        collection(db, "chat_messages"),
        where("chatId", "in", [
          `${auth.currentUser.uid}_${selectedUser.id}`,
          `${selectedUser.id}_${auth.currentUser.uid}`,
        ]),
        orderBy("timestamp", "asc")
      );
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const messagesData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setChatMessages(messagesData);
        },
        (err) => {
          console.error("Error fetching chat messages:", err);
          setError("Error fetching chat messages.");
        }
      );

      return () => unsubscribe();
    }
  }, [selectedUser]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (message.trim() && selectedUser) {
      try {
        const chatId = `${user.uid}_${selectedUser.id}`;
        await addDoc(collection(db, "chat_messages"), {
          senderId: user.uid,
          receiverId: selectedUser.id,
          message,
          timestamp: Timestamp.now(),
          chatId,
        });
        setMessage("");
      } catch (err) {
        console.error("Error sending message:", err);
        setError("Error sending message.");
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Welcome to SaylaniBloodBank</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {requesters.map((user) => (
            <div key={user.id} className="border p-4 rounded-lg shadow-md">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Blood Group:</strong> {user.bloodGroup}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <div className="mt-4">
                <Link to="/request-blood">
                  <button className="bg-blue-500 text-white p-2 mr-2 rounded">
                    Request Blood
                  </button>
                </Link>
                <Link to="/request-blood">
                  <button className="bg-green-500 mr-2 text-white p-2 rounded">
                    Donate Blood
                  </button>
                </Link>
                <button
                  onClick={() => setSelectedUser(user)}
                  className="bg-purple-500 mr-4 text-white p-2 rounded"
                >
                  Chat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat interface */}
      {selectedUser && (
        <div className="border-t pt-4">
          <h2 className="text-xl mb-4">Chat with {selectedUser.name}</h2>
          <div className="border p-4 mb-4 h-64 overflow-y-scroll">
            {chatMessages.map((msg) => (
              <div key={msg.id} className="mb-2">
                <p>
                  <strong>
                    {msg.senderId === auth.currentUser?.uid
                      ? "You"
                      : selectedUser.name}
                    :
                  </strong>{" "}
                  {msg.message}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(msg.timestamp.seconds * 1000).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border p-2 flex-grow mr-2 rounded"
              placeholder="Type your message"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HomePage;
