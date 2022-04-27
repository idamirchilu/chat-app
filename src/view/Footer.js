import {Button, Form} from "react-bootstrap";
import classes from "./Footer.module.css";
import { BsFillCursorFill } from 'react-icons/bs';
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { messageActions } from "../store/message-slice";
import avatar from '../assets/images/avatar.png';

export default function Footer(){
    const dispatch = useDispatch();
    const messageInputRef = useRef();

    const formSubmitHandler = event => {
        event.preventDefault();
        const date = new Date();
        const hour = date.getHours() === 0 ? '00' : date.getHours();
        const resultDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}-${hour}:${date.getMinutes()}`;
        const messageData = {
            text: messageInputRef.current.value,
            date: resultDate,
            id: Math.random() + date.getMinutes(),
        }
        dispatch(messageActions.add(messageData));
        messageInputRef.current.value = '';
    }

    return(
        <div className={classes.container}>
            <div>
                <img src={avatar} alt="avatar" width="50" height="50"/>
            </div>
            <Form onSubmit={formSubmitHandler} className={classes.form}>
                <Form.Control ref={messageInputRef} type="text" placeholder="Message"/>
                <Button type="submit">
                    <BsFillCursorFill size={25} />
                </Button>
            </Form>
        </div>
    );
}