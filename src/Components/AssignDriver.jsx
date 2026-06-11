import { useState } from "react";
import "../App.css";
import { assignDriver } from "../Services/Services";

function AssignDriver() {
  const [rideId, setRideId] = useState("");
  const [driverId, setDriverId] = useState("");
  const [ride, setRide] = useState(null);
  const [message, setMessage] = useState("");

  const handleAssign = async () => {
    try {
      const response = await assignDriver(
        rideId,
        driverId
      );

      setRide(response.data);
      setMessage("Driver Assigned Successfully");
    } catch (error) {
      console.error(error);
      setMessage("Assignment Failed");
    }
  };

  return (
    <div className="container">
      <h2>Assign Driver</h2>

      <input
        type="number"
        placeholder="Enter Ride ID"
        value={rideId}
        onChange={(e) => setRideId(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Driver ID"
        value={driverId}
        onChange={(e) => setDriverId(e.target.value)}
      />

      <button onClick={handleAssign}>
        Assign Driver
      </button>

      <p className="message">{message}</p>

      {ride && (
        <div className="ride-details">
          <h3>Assigned Ride Details</h3>

          <p>
            <strong>Ride ID:</strong> {ride.id}
          </p>

          <p>
            <strong>Pickup:</strong>{" "}
            {ride.pickuplocation}
          </p>

          <p>
            <strong>Drop:</strong>{" "}
            {ride.droplocation}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {ride.status}
          </p>

          <p>
            <strong>Fare:</strong> ₹{ride.fare}
          </p>

          {ride.driver && (
            <p>
              <strong>Driver:</strong>{" "}
              {ride.driver.name}
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

export default AssignDriver;