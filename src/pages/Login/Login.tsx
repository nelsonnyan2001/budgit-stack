import styles from "./Login.module.scss";
import Separator from "../../components/Separator/Separator";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../utils/auth";
import { FormEvent, useState } from "react";
import { handleAmplifyErr } from "../../utils/amplify";
import { IconExclamationCircle } from "@tabler/icons-react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const changeUsername = (e: FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const changePassword = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const navigate = useNavigate();

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Empty username or password.");
      return;
    }
    signIn({
      username: username,
      password: password,
    })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(handleAmplifyErr(error.code));
      });
  };

  const goToSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <div className={styles.loginForm}>
      <h3 className={styles.clientLogin}>Client Login</h3>
      <p>Enter your account details</p>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="username" className={styles.label}>
          Email or username
        </label>
        <input
          id="username"
          value={username}
          onChange={changeUsername}
          className={styles.input}
        ></input>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          id="password"
          value={password}
          type="password"
          onChange={changePassword}
          className={styles.input}
        ></input>
        {error && (
          <div className={styles.error}>
            <IconExclamationCircle
              stroke={1.5}
              color="red"
            ></IconExclamationCircle>
            <span>{error}</span>
          </div>
        )}
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
      <Separator text="or" />
      <div className={styles.signUp}>
        Not a user yet?{" "}
        <span className="link" onClick={goToSignUp}>
          Sign up now.
        </span>
      </div>
    </div>
  );
};

export default Login;
