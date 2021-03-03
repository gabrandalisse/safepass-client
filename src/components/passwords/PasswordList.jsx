import React, { useContext } from "react";
import passwordContext from "../../context/password/passwordContext";

// Material UI
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  table: {
    width: "90%",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10px",
    paddingBottom: "10px"
  }
}));


const PasswordList = () => {
  const classes = useStyles();

  // Extract password functions from context
  const PasswordContext = useContext(passwordContext);
  const { passwords, deletePassword } = PasswordContext;

  const handleClick = id => {
    deletePassword(id);
  };

  return (
    <Box className={classes.box}>
      <Table size="small" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Password</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {passwords.map((pass) => (
            <TableRow key={pass._id}>
              <TableCell>{pass.name}</TableCell>
              <TableCell>{pass.password}</TableCell>
              <TableCell align="right">
                <Button
                  color="secondary"
                  onClick={() => handleClick(pass._id)}
                >Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default PasswordList;
