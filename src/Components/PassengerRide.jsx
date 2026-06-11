import { useState } from "react";
import "../App.css";
import { requestRide } from "../Services/Services";

function PassengerRide() {
  const [passengerId, setPassengerId] = useState("");
  const [pickuplocation, setPickupLocation] = useState("");
  const [droplocation, setDropLocation] = useState("");
  const [ride, setRide] = useState(null);
  const [message, setMessage] = useState("");

  const handleRequestRide = async () => {
    const rideData = {
      pickuplocation,
      droplocation,
    };

    try {
      const response = await requestRide(passengerId, rideData);

      setRide(response.data);
      setMessage("Ride Requested Successfully");

      setPickupLocation("");
      setDropLocation("");
    } catch (error) {
      console.error(error);
      setMessage("Failed to Request Ride");
    }
  };



  return (
    <div className="container">
      <h2>Request Ride</h2>

      <input
        type="number"
        placeholder="Enter Passenger ID"
        value={passengerId}
        onChange={(e) => setPassengerId(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Pickup Location"
        value={pickuplocation}
        onChange={(e) => setPickupLocation(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Drop Location"
        value={droplocation}
        onChange={(e) => setDropLocation(e.target.value)}
      />

      <button onClick={handleRequestRide}>
        Request Ride
      </button>

      <p className="message">{message}</p>

      {ride && (
        <div className="ride-details">
          <h3>Ride Details</h3>

          <p>
            <strong>Ride ID:</strong> {ride.id}
          </p>

          <p>
            <strong>Pickup Location:</strong>{" "}
            {ride.pickuplocation}
          </p>

          <p>
            <strong>Drop Location:</strong>{" "}
            {ride.droplocation}
          </p>

          <p>
            <strong>Status:</strong> {ride.status}
          </p>

          <p>
            <strong>Fare:</strong> ₹{ride.fare}
          </p>

          {ride.passenger && (
            <p>
              <strong>Passenger:</strong>{" "}
              {ride.passenger.name}
            </p>
          )}

          {ride.driver && (
            <p>
              <strong>Driver:</strong>{" "}
              {ride.driver.name}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default PassengerRide;