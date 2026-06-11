import { useState } from "react";
import "../App.css";
import { startRide, completeRide } from "../Services/Services";

function DriverRide() {
  const [rideId, setRideId] = useState("");
  const [ride, setRide] = useState(null);
  const [message, setMessage] = useState("");

  const handleStartRide = async () => {
    try {
      const response = await startRide(rideId);

      setRide(response.data);
      setMessage("Ride Started Successfully");
    } catch (error) {
      console.error(error);
      setMessage("Failed to Start Ride");
    }
  };

  const handleCompleteRide = async () => {
    try {
      const response = await completeRide(rideId);

      setRide(response.data);
      setMessage("Ride Completed Successfully");
    } catch (error) {
      console.error(error);
      setMessage("Failed to Complete Ride");
    }
  };

  return (
    <div className="container">
      <h2>Driver Ride Management</h2>

      <input
        type="number"
        placeholder="Enter Ride ID"
        value={rideId}
        onChange={(e) => setRideId(e.target.value)}
      />

      <div className="button-group">
        <button onClick={handleStartRide}>
          Start Ride
        </button>

        <button onClick={handleCompleteRide}>
          Complete Ride
        </button>
      </div>

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

          {ride.driver && (
            <p>
              <strong>Driver:</strong> {ride.driver.name}
            </p>
          )}

          {ride.passenger && (
            <p>
              <strong>Passenger:</strong>{" "}
              {ride.passenger.name}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default DriverRide;