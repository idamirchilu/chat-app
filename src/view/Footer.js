import { Button, Card, Form } from "react-bootstrap";
import classes from "./Footer.module.css";
import { BsFillCursorFill } from "react-icons/bs";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user-slice";
import avatar from "../assets/images/avatar.png";
import { BsFillArrowUpLeftSquareFill, BsXLg } from "react-icons/bs";

export default function Footer() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const messageInputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const date = new Date();
    const hour = date.getHours() === 0 ? "00" : date.getHours();
    const resultDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}-${hour}:${date.getMinutes()}`;
    const messageData = {
      text: messageInputRef.current.value,
      date: resultDate,
      id: Math.random() + date.getMinutes(),
      replyTo: userState.replyTo,
    };
    dispatch(userActions.sendMessage(messageData));
    dispatch(userActions.closeReply());
    messageInputRef.current.value = "";
  };

  if (userState.reqly) {
    return (
      <div className={classes.container}>
        <div>
          <img src={avatar} alt="avatar" width="50" height="50" />
        </div>
        <Form onSubmit={formSubmitHandler} className={classes.form}>
          <div className={classes.input}>
            <Card className={classes.reqly}>
              <Button style={{ marginLeft: 0 }}>
                <BsFillArrowUpLeftSquareFill size="20" />
              </Button>

              <div style={{ marginLeft: "1rem" }}>
                <h5>soheil</h5>
                <em>woeubciweubv</em>
              </div>
              <Button onClick={() => dispatch(userActions.closeReply())}>
                <BsXLg size="20" />
              </Button>
            </Card>
            <Form.Control
              style={{ height: "3rem" }}
              ref={messageInputRef}
              type="text"
              placeholder="Message"
            />
          </div>
          <Button type="submit">
            <BsFillCursorFill size={25} />
          </Button>
        </Form>
      </div>
    );
  }

  return (
    <div style={{ height: "3rem" }} className={classes.container}>
      <div>
        <img src={avatar} alt="avatar" width="50" height="50" />
      </div>
      <Form onSubmit={formSubmitHandler} className={classes.form}>
        <Form.Control ref={messageInputRef} type="text" placeholder="Message" />
        <Button type="submit">
          <BsFillCursorFill size={25} />
        </Button>
      </Form>
    </div>
  );
}
