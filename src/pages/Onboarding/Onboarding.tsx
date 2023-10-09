import { useNavigate } from "react-router-dom";
import { getUser } from "../../utils/auth";
import { useEffect } from "react";
import styles from "./Onboarding.module.scss";

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getUser().then((user) => {
      if (user?.attributes["custom:onboardStatus"] === "finished") {
        navigate("/");
      }
    });
  }, [navigate]);

  return <div className={styles.onboarding}></div>;
};

export default Onboarding;
