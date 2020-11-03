import React, { useState, useEffect, useContext } from "react";
// import firebase from "../config/firebase";
import "firebase/firestore";
// import { AuthContext } from "../AuthService";
import TableChart from "../components/TableChart";

const Room = () => {
  //   const [messages, setMessages] = useState(null);
  //   const [value, setValue] = useState("");
  //   const DB = firebase.firestore(); //DB=DataBase

  //   useEffect(() => {
  //     DB.collection("messages")
  //       .orderBy("date_added", "desc")
  //       .onSnapshot((snapshot) => {
  //         const messages = snapshot.docs.map((doc) => {
  //           return doc.data();
  //         });
  //         setMessages(messages);
  //         console.log(messages);
  //       });
  //   }, []);

  //   const user = useContext(AuthContext);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setValue(""); // document.myForm.reset(); //中身がリセットされる
  //     DB.collection("messages").add({
  //       content: value,
  //       user: user.displayName,
  //       date_added: DB.FieldValue.serverTimestamp(), //new Date() でも良い
  //     });
  //   };

  return (
    <>
      <TableChart />
      {/* <h1>Room</h1>
      <ul>
        <p>メッセージの投稿</p>
        {messages &&
          messages.map((message) => (
            <li key={message.content}>{message.content}</li>
          ))}
      </ul> */}
      {/* <form onSubmit={handleSubmit}>
        <input
          name="text"
          type="text"
          id="text"
          placeholder="message"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit">送信</button>
      </form> */}
      {/* <button onClick={() => firebase.auth().signOut()}>Logout</button> */}
    </>
  );
};

export default Room; //
