import { Button, Input, Stack, Text, TextInput } from "@mantine/core";
import { updateUserAttributes } from "aws-amplify/auth";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Setup: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (values: FieldValues) => {
    updateUserAttributes({ userAttributes: values });
    navigate("/onboarding");
  };

  return (
    <Stack>
      <Text size={"lg"}>
        Let's get you set up. Please help us by answering a few questions about
        yourself.
      </Text>
      <Text c="dimmed" size="sm">
        You can change these answers at any time later. We just use this
        information to help personalize the platform for you.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Input.Wrapper label="First Name">
            <TextInput {...register("given_name")} required />
          </Input.Wrapper>
          <Input.Wrapper label="Last Name">
            <TextInput {...register("family_name")} required />
          </Input.Wrapper>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default Setup;
