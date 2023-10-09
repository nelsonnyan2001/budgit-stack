import styles from "./AuthLayout.module.scss";
import logo from "/logo.png";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout: React.FC = () => {
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.page}>
      <div className={styles.pageBG}></div>
      <div className={styles.logoHolder} onClick={onLogoClick}>
        <img src={logo} className={styles.logo} />
        <h2 className={styles.logoText}>Budgit</h2>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
