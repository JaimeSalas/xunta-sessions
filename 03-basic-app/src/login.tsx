import React from "react";
import { useNavigate } from "react-router-dom";

// user: admin
// password: test
export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isValidCredentials = (username: string, password: string) =>
    username === "admin" && password === "test";

  const handleNavigate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isValidCredentials(username, password)) {
      navigate("/list");
    } else {
        alert('Username / Password wrong... admin / test');
    }
  };

  return (
    <form onSubmit={handleNavigate}>
      <h2>Hello from Login Page</h2>
      <div>
        <div>
          <label>Username: </label>
          <input
            type="text"
            // value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            // value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {/* <button onClick={handleNavigate}>Login</button> */}
      <button type="submit">Login</button>
    </form>
  );
};
