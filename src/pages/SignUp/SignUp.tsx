import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import {
  Button,
  Divider,
  Input,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Error from "../../components/Error/Error";
import { signUp } from "aws-amplify/auth";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [error, setError] = useState("");

  const onSignUpSubmit = ({
    email,
    username,
    password,
    confirmPassword,
  }: FieldValues) => {
    if (password != confirmPassword) {
      setError("Your passwords do not match!");
      return;
    }
    signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          "custom:onboardStatus": "not started",
        },
      },
    })
      .then(({ userId }) => {
        navigate(`/confirm-sign-up/${userId}`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <Stack p={"xl"}>
      <Title fz={"xl"}>Sign Up</Title>
      <Text>Please enter the following details</Text>
      <form onSubmit={handleSubmit(onSignUpSubmit)}>
        <Stack>
          <Input.Wrapper label="Username">
            <TextInput {...register("username")} required />
          </Input.Wrapper>
          <Input.Wrapper label="Email">
            <TextInput {...register("email")} required />
          </Input.Wrapper>
          <Input.Wrapper label="Password">
            <TextInput {...register("password")} required />
          </Input.Wrapper>
          <Input.Wrapper label="Confirm Password">
            <TextInput {...register("confirmPassword")} required />
          </Input.Wrapper>
          {error && <Error label={error} />}
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
      <Divider />
      <Text ta={"center"}>
        Already have an account?{" "}
        <span className="link" onClick={goToLogin}>
          Log in
        </span>
      </Text>
    </Stack>
  );
};

export default SignUp;
