import { Card } from 'react-bootstrap';

export default function MessageContainer(props){
    return <Card>
        <Card.Text>{props.message}</Card.Text>
    </Card>
}