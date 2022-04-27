import MessageContainer from "./MessageContainer";
import { useSelector } from "react-redux";


export default function MessageList(props){
    const messageState = useSelector(state => state.message);
    return (
        <>
            {messageState.messages.map(item => <MessageContainer message={item}/>)}
        </>
    )
}