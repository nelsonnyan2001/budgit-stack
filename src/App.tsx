import { useNavigate } from "react-router-dom";
import { useUser } from "./utils/hooks";
import { fetchUserAttributes } from "aws-amplify/auth";

function App() {
  const user = useUser();
  const navigate = useNavigate();

  if (!user) {
    return <></>;
  }

  fetchUserAttributes().then((data) => {
    switch (data["custom:onboardStatus"]) {
      case "not started":
        navigate("/setup");
        break;
      case "finished":
        navigate("/retirement");
    }
  });

  return <></>;
}

export default App;
