import { useNavigate } from "react-router-dom";
import { getUser } from "./utils/auth";
import { useEffect } from "react";

function App() {
  const user = getUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      console.log("bato");
      navigate("/login");
    }
  }, [user, navigate]);
  
  if (!user) {
    return;
  }

  return <div>Welcome, {user.username}</div>;
}

export default App;
