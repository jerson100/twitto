import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/common/Button";
import Paragraph from "../../../../../components/common/Paragraph";

const AuthLoginButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/i/flow/login");
  };
  return (
    <>
      <Paragraph as="p" type="h6">
        ¿Ya tienes una cuenta?
      </Paragraph>
      <Button rounded color="BLUE" type="GOSTH" handleClick={handleClick}>
        Iniciar sesión
      </Button>
    </>
  );
};

export default AuthLoginButton;
