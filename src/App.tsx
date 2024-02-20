import { useNavigate } from "react-router-dom";
import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";
import { useEffect } from "react";
import { getOnboardStatus } from "./utils/helpers";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    getCurrentUser()
      .then(() => {
        fetchUserAttributes().then((userAttributes) => {
          switch (getOnboardStatus(userAttributes)) {
            case "not started":
              navigate("/onboarding");
              break;
            default:
              navigate("/expenses");
              break;
          }
        });
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);
  return <></>;
}

export default App;
