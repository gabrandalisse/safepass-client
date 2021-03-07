import React, { useContext, useEffect } from "react";
import passwordContext from "../../context/password/passwordContext";

// Components
import Layout from "../layout/Layout";
import NewPassword from "./NewPassword";
import PasswordList from "./PasswordList";

const Passwords = () => {
  // Extract password functions from context
  const PasswordContext = useContext(passwordContext);
  const { getAll } = PasswordContext;

  // Get all password when the component load for the first time
  useEffect(() => {
    getAll();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <NewPassword />
      <PasswordList />
    </Layout>
  );
};

export default Passwords;
