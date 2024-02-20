import {
  FetchUserAttributesOutput,
  fetchUserAttributes,
} from "aws-amplify/auth";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AttributesContext } from "../../utils/contexts";

const AuthedLayout: React.FC = () => {
  const navigate = useNavigate();
  const [attributes, setAttributes] = useState<FetchUserAttributesOutput>({});
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetchUserAttributes()
      .then((data) => {
        setAttributes(data);
        setLoading(false);
      })
      .catch(() => {
        navigate("/login");
      });
  }, [navigate]);

  return (
    <AttributesContext.Provider value={{ attributes, setAttributes, loading }}>
      <Outlet />
    </AttributesContext.Provider>
  );
};

export default AuthedLayout;
