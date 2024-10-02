import React, { useState } from 'react';
import { db, auth } from '../firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';

const BloodRequest = () => {
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [requestType, setRequestType] = useState('request');
  const [message, setMessage] = useState('');

  const handleBloodRequest = async (e) => {
    e.preventDefault();
    try {
      const user = auth.currentUser;

      await addDoc(collection(db, 'blood_requests'), {
        user_id: user.uid,
        name,
        bloodGroup,
        requestType,
        message,
        timestamp: Timestamp.now()
      });

      alert('Your request has been submitted.');
      setName('');
      setBloodGroup('');
      setMessage('');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl mb-4">Blood {requestType === 'request' ? 'Request' : 'Donate'}</h2>
      <form onSubmit={handleBloodRequest}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-2 w-full"
          required
        />

        <select
          value={requestType}
          onChange={(e) => setRequestType(e.target.value)}
          className="border p-2 mb-2 w-full"
        >
          <option value="request">Request Blood</option>
          <option value="donate">Donate Blood</option>
        </select>

        <select
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          className="border p-2 mb-2 w-full"
          required
        >
          <option value="" disabled>Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <textarea
          placeholder="Message (Optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 mb-2 w-full"
        />

        <button type="submit" className="bg-red-500 text-white p-2 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BloodRequest;
