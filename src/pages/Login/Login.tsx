import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  IconBrandGoogleFilled,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
import { FieldValues, useForm } from "react-hook-form";
import {
  Button,
  Divider,
  Group,
  Input,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Error from "../../components/Error/Error";
import { signIn } from "aws-amplify/auth";

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onFormSubmit = ({ username, password }: FieldValues) => {
    signIn({ username, password })
      .then(({ isSignedIn, nextStep }) => {
        if (!isSignedIn) {
          if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
            setError("Please check your email to verify your account.");
          }
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        setError(error?.message || "An unknown error occured.");
      });
  };

  const goToSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <Stack p={"xl"}>
      <Title fz={"xl"}>Welcome to Budgit, log in with</Title>

      <Group grow my="sm">
        <Button variant="default" radius="xl">
          <Group gap="md">
            <IconBrandGoogleFilled size="16px" />
            Google
          </Group>
        </Button>
        <Button variant="default" radius="xl">
          <Group gap="md">
            <IconBrandTwitterFilled size="16px" />
            Twitter
          </Group>
        </Button>
      </Group>

      <Divider label="or continue with email" />

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Stack>
          <Input.Wrapper label="Email or username">
            <TextInput {...register("username")} required />
          </Input.Wrapper>

          <Input.Wrapper label="Password">
            <TextInput type="password" {...register("password")} required />
          </Input.Wrapper>
          {error && (
            <>
              <Error label={error} />
              <Link to="/forgot-password">
                <Text c="dimmed" size="sm">
                  Forgot your password?
                </Text>
              </Link>
            </>
          )}
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
      <Divider />
      <Text ta={"center"}>
        Not a user yet?{" "}
        <span className="link" onClick={goToSignUp}>
          Sign up now.
        </span>
      </Text>
    </Stack>
  );
};

export default Login;
