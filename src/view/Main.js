import {Card} from "react-bootstrap";
import classes from './Main.module.css';
import Footer from "./Footer";
import MessageList from "./Message/MessageList";
import avatar from '../assets/images/avatar.png';


function Main(){

    return (
        <Card className={classes.main}>
            <Card.Header className={classes.header}>
                <img src={avatar} alt="avatar" width="50" height="50"/>
                 <h3>user1</h3>
            </Card.Header>
            <Card.Body className={classes.body}>
                <MessageList />
            </Card.Body>
            <Card.Footer className={classes.footer}>
                <Footer />
            </Card.Footer>
        </Card>
    );
}

export default Main;