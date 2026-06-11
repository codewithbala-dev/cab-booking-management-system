import { useState } from "react";
import "../App.css";
import { registerUser } from "../Services/Services";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      role,
    };

    try {
      const response = await registerUser(userData);

      console.log(response.data);
      setMessage("Registration Successful");

      setName("");
      setEmail("");
      setPassword("");
      setRole("");
    } catch (error) {
      console.error(error);
      setMessage("Registration Failed");
    }
  };

  return (
    <div className="container">
      <h2>User Registration</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="PASSENGER">Passenger</option>
          <option value="DRIVER">Driver</option>
          <option value="ADMIN">Admin</option>
        </select>

        <button type="submit">
          Register
        </button>
      </form>

      <p className="message">{message}</p>
    </div>
  );
}

export default Register;