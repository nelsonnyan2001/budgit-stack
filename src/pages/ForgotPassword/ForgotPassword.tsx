import Error from "@/components/Error/Error";
import {
  Button,
  Input,
  Modal,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { confirmResetPassword, resetPassword } from "aws-amplify/auth";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [codeReqSuccess, setCodeReqSuccess] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>("");
  const [opened, { open, close }] = useDisclosure(true);

  const { register, handleSubmit } = useForm();
  const onRequestCode = ({ username }: FieldValues) => {
    resetPassword({ username })
      .then(() => {
        setCodeReqSuccess(true);
        setErrMessage("");
      })
      .catch((err) => {
        setErrMessage(err.message);
      });
  };
  const onResetPassword = ({
    username,
    confirmationCode,
    newPassword,
  }: FieldValues) => {
    confirmResetPassword({
      username,
      confirmationCode: confirmationCode.toString(),
      newPassword,
    })
      .then(() => {
        open();
      })
      .catch((err) => {
        setErrMessage(err.message);
      });
  };

  return (
    <Stack p="xl">
      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        closeOnClickOutside={false}
        closeOnEscape={false}
      >
        <Stack>
          <Text>You have successfully changed your password. </Text>
          <Button component={Link} to="/login">
            Return to login
          </Button>
        </Stack>
      </Modal>

      <Title fz="xl">Forgot password</Title>
      <form
        onSubmit={handleSubmit(
          codeReqSuccess ? onResetPassword : onRequestCode,
        )}
      >
        <Stack>
          <Text>
            Please enter the username of the account you signed up with.
          </Text>
          <Input.Wrapper label="Username">
            <TextInput {...register("username")} required />
          </Input.Wrapper>
          {codeReqSuccess && (
            <>
              <Input.Wrapper label="Confirmation Code">
                <Input
                  type="number"
                  {...register("confirmationCode", {
                    valueAsNumber: true,
                  })}
                  required
                />
              </Input.Wrapper>
              <Input.Wrapper label="New Password">
                <TextInput {...register("newPassword")} required />
              </Input.Wrapper>
            </>
          )}
          <Button type="submit">Submit</Button>
          {codeReqSuccess && (
            <Text c="dimmed" size="sm">
              Please check your inbox for a recovery code. Some email providers
              may flag multiple reset attempts. Please also check your junk
              mail.
            </Text>
          )}
          {errMessage && <Error label={errMessage} />}
        </Stack>
      </form>
    </Stack>
  );
}
