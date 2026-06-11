import { useState } from "react";
import "./App.css";

import Register from "./Components/Register";
import PassengerRide from "./Components/PassengerRide";
import AssignDriver from "./Components/AssignDriver";
import DriverRide from "./Components/DriverRide";

function App() {
  const [page, setPage] = useState("register");

  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">🚖 Cab Booking System</h1>

        <div className="nav-links">
          <button onClick={() => setPage("register")}>
            Register
          </button>

          <button onClick={() => setPage("passenger")}>
            Passenger Ride
          </button>

          <button onClick={() => setPage("assign")}>
            Assign Driver
          </button>

          <button onClick={() => setPage("driver")}>
            Driver Ride
          </button>
        </div>
      </nav>

      <div className="page-content">
        {page === "register" && <Register />}
        {page === "passenger" && <PassengerRide />}
        {page === "assign" && <AssignDriver />}
        {page === "driver" && <DriverRide />}
      </div>
    </div>
  );
}

export default App;