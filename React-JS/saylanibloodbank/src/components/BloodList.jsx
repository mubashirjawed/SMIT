import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const BloodRequestsList = () => {
  const [requests, setRequests] = useState([]);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "blood_requests"),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const requestsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Separate requests and donations
      const requestsList = requestsData.filter(
        (request) => request.requestType === "request"
      );
      const donationsList = requestsData.filter(
        (request) => request.requestType === "donate"
      );

      setRequests(requestsList);
      setDonations(donationsList);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl mb-4">Blood Requests & Donations</h2>

      {/* Blood Requests */}
      <div className="mb-6">
        <h3 className="text-lg mb-2 font-semibold">Blood Requests</h3>
        {requests.length > 0 ? (
          requests.map((request) => (
            <div key={request.id} className="border p-2 mb-2 rounded-lg shadow-md">
              <p>
                <strong>Name:</strong> {request.name}
              </p>
              <p>
                <strong>Blood Group:</strong> {request.bloodGroup}
              </p>
              <p>
                <strong>Message:</strong> {request.message || "No message provided"}
              </p>
              <p>
                <strong>Posted on:</strong>{" "}
                {new Date(request.timestamp.seconds * 1000).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p>No blood requests available.</p>
        )}
      </div>

      {/* Blood Donations */}
      <div>
        <h3 className="text-lg mb-2 font-semibold">Blood Donations</h3>
        {donations.length > 0 ? (
          donations.map((donation) => (
            <div key={donation.id} className="border p-2 mb-2 rounded-lg shadow-md">
              <p>
                <strong>Name:</strong> {donation.name}
              </p>
              <p>
                <strong>Blood Group:</strong> {donation.bloodGroup}
              </p>
              <p>
                <strong>Message:</strong> {donation.message || "No message provided"}
              </p>
              <p>
                <strong>Posted on:</strong>{" "}
                {new Date(donation.timestamp.seconds * 1000).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p>No blood donations available.</p>
        )}
      </div>
    </div>
  );
};

export default BloodRequestsList;
