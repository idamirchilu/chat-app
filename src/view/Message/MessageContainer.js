import { Card, Dropdown } from "react-bootstrap";
import classes from "./MessageContainer.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { messageActions } from "../../store/message-slice";

export default function MessageContainer({ message }) {
  const dispatch = useDispatch();

  const deleteMessageHandler = () =>
    dispatch(messageActions.delete(message.id));

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <Card.Text className={classes.text}>{message.text}</Card.Text>
        <Dropdown className={classes.tooltip}>
          <Dropdown.Toggle
            as={BsThreeDotsVertical}
            id="dropdown-autoclose-true"
          />
          <Dropdown.Menu>
            <Dropdown.Item href="#">Reply</Dropdown.Item>
            <Dropdown.Item href="#" onClick={deleteMessageHandler}>
              Delete
            </Dropdown.Item>
            <Dropdown.Item href="#">Edit</Dropdown.Item>
            <Dropdown.Item href="#">Copy</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card>
      <div className={classes.date}>
        <p>{message.date}</p>
      </div>
    </div>
  );
}
