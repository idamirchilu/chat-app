import { Card } from "react-bootstrap";
import classes from "./Contacts.module.css";

export default function Contacts() {
  return (
    <Card className={classes.container}>
      <Card.Header className={classes.header}>
        <h2>Contacts</h2>
      </Card.Header>
      <Card.Body className={classes.body}>Contacts</Card.Body>
    </Card>
  );
}
