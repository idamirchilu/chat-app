import MessageContainer from "./MessageContainer";


export default function MessageList(props){
    return (
        <>
            {props.messages.map(item => <MessageContainer message={item}/>)}
        </>
    )
}