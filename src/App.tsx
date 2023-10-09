import { getUser } from "./utils/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState<any>(null);

  const navigate = useNavigate();

  useEffect(() => {
    getUser()
      .then((cognitoUser) => setUser(cognitoUser))
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  if (!user) {
    return;
  }

  console.log(user.attributes["custom:onboardStatus"]);

  switch (user.attributes["custom:onboardStatus"]) {
    case "not started":
      navigate("/onboarding");
      break;
    case "finished":
      return <div>Onboarded</div>;
  }
  return <div></div>;
}

export default App;
