import loginStyles from "../Login/Login.module.scss";
import Separator from "../../components/Separator/Separator";
import { useNavigate } from "react-router-dom";
import { confirmSignUp, signUp } from "../../utils/auth";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { IconExclamationCircle } from "@tabler/icons-react";
import { handleAmplifyErr } from "../../utils/amplify";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [error, setError] = useState("");

  const [username, setUsername] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);

  const onFormSubmit = (data: FieldValues) => {
    if (data.password != data.confirmPassword) {
      setError("Your passwords do not match!");
      return;
    }
    signUp({
      email: data.email,
      username: data.username,
      password: data.password,
    })
      .then((data: any) => {
        setError("");
        setUsername(data?.username);
        setIsSignUpSuccess(true);
      })
      .catch((error) => {
        setError(handleAmplifyErr(error.code));
      });
  };

  const onConfirmSubmission = () => {
    confirmSignUp({
      username,
      code: confirmationCode,
    })
      .catch((error) => {
        setError(error.message);
      })
      .then(() => {
        navigate("/login");
      });
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className={loginStyles.loginForm}>
      {!isSignUpSuccess ? (
        <>
          <h3 className={loginStyles.clientLogin}>Sign Up</h3>
          <p>Please enter the following details</p>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor="username" className={loginStyles.label}>
              Username
            </label>
            <input
              {...register("username")}
              required
              className={loginStyles.input}
            ></input>
            <label htmlFor="email" className={loginStyles.label}>
              Email
            </label>
            <input
              {...register("email")}
              required
              type="email"
              className={loginStyles.input}
            ></input>
            <label htmlFor="password" className={loginStyles.label}>
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              required
              className={loginStyles.input}
            ></input>
            <label htmlFor="password" className={loginStyles.label}>
              Confirm Password
            </label>
            <input
              {...register("confirmPassword")}
              type="password"
              required
              className={loginStyles.input}
            ></input>
            {error && (
              <div className={loginStyles.error}>
                <IconExclamationCircle
                  stroke={1.5}
                  color="red"
                ></IconExclamationCircle>
                <span>{error}</span>
              </div>
            )}
            <button className={loginStyles.button} type="submit">
              Submit
            </button>
          </form>
          <Separator text="or" />
          <div className={loginStyles.signUp}>
            Already have an account?{" "}
            <span className="link" onClick={goToLogin}>
              Log in
            </span>
          </div>
        </>
      ) : (
        <div>
          <h3 className={loginStyles.clientLogin}>Confirmation Email Sent</h3>
          <p>
            Please check your inbox and enter the confirmation number. It is a
            six-digit code.{" "}
          </p>
          <form>
            <label htmlFor="confirmation" className={loginStyles.label}>
              Confirmation Code
            </label>
            <input
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
              required
              className={loginStyles.input}
            ></input>
            {error && (
              <div className={loginStyles.error}>
                <IconExclamationCircle
                  stroke={1.5}
                  color="red"
                ></IconExclamationCircle>
                <span>{error}</span>
              </div>
            )}
            <button
              className={loginStyles.button}
              type="button"
              onClick={onConfirmSubmission}
            >
              Confirm Account
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUp;
