import React, { useState, useEffect, useContext } from "react";
import Chart from "./Chart";
import firebase from "../config/firebase";
import "firebase/firestore";
import { AuthContext } from "../AuthService";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
  TextField,
  Button,
} from "@material-ui/core";

const TableChart = () => {
  const [subData, setSubrData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const DB = firebase.firestore(); //DB=DataBase

  useEffect(() => {
    DB.collection("messages").onSnapshot((snapshot) => {
      const messages = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setSubrData(messages);
      console.log(messages);
    });
  }, []);

  const user = useContext(AuthContext);

  const handleSubmit = (subData) => {
    // subData.preventDefault();
    setFinalData((finalData) => [...finalData, subData]);
    setSubrData((subData = {}));
    document.myForm.reset(); //中身がリセットされる
    DB.collection("messages").add({
      content: finalData,
      user: user.displayName,
      date_added: new Date(), //new Date() でも良い
    });
  };

  return (
    <div>
      <form name="myForm" onSubmit={handleSubmit}>
        <Table style={{ width: "50%", justifyContent: "center" }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <TextField
                  value={subData["sem"]}
                  onChange={(e) =>
                    setSubrData({ ...subData, sem: e.target.value })
                  }
                  label="Study Hours"
                  margin="normal"
                  variant="outlined"
                  color="secondary"
                />{" "}
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  onClick={() => handleSubmit(subData)}
                  color="primary"
                >
                  Dot
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((data) => (
              <TableRow>
                <TableCell>{data.sub}</TableCell>
                <TableCell>{data.sem}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br />
        <Chart data={finalData} />
      </form>
    </div>
  );
};

export default TableChart;
