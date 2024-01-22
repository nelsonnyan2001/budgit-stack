import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthUser, getCurrentUser } from "aws-amplify/auth";

export const useUser = () => {
  const [user, setUser] = useState<AuthUser>();
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser()
      .then((amplifyUser) => {
        setUser(amplifyUser);
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  return user;
};
