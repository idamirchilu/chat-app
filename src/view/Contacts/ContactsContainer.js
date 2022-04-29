//import {Card} from 'react-bootstrap';
import classes from "./ContactsContainer.module.css";

export default function ContactsContainer(props) {
  const { data } = props;

  const changeContactHandler = () => {
    alert(`contact changed to ${data.userName}`);
  };

  return (
    <div className={classes.container} onClick={changeContactHandler}>
      <div>
        <img src={data.avatar} alt="avatar" width="45" height="45" />
      </div>
      <div className={classes.box2}>
        <h4>{data.userName}</h4>
      </div>
      <div>
        <p>{data.date}</p>
      </div>
    </div>
  );
}
