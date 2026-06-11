import axios from "axios";

const ADMIN_URL = "http://localhost:9191/admin";
const DRIVER_URL = "http://localhost:9191/driver";
const PASSENGER_URL = "http://localhost:9191/passenger";

// Admin
export const assignDriver = (rideId, driverId) => {
  return axios.put(`${ADMIN_URL}/assign/${rideId}/${driverId}`);
};

// Driver
export const startRide = (rideId) => {
  return axios.put(`${DRIVER_URL}/start/${rideId}`);
};

export const completeRide = (rideId) => {
  return axios.put(`${DRIVER_URL}/complete/${rideId}`);
};

// Passenger
export const requestRide = (passengerId, rideData) => {
  return axios.post(
    `${PASSENGER_URL}/ride/${passengerId}`,
    rideData
  );
};
//Register
export const registerUser = (userData) => {
  return axios.post(
    "http://localhost:9191/register",
    userData
  );
};