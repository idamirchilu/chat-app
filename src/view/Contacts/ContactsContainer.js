//import {Card} from 'react-bootstrap';
import classes from "./ContactsContainer.module.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user-slice";

export default function ContactsContainer(props) {
  const dispatch = useDispatch();
  const { data } = props;

  const changeContactHandler = () => {
    dispatch(userActions.changeActiveUser(data.userName));
  };

  // if (data.avtive) {
  //   return (
  //     <div
  //       className={classes.container}
  //       onClick={changeContactHandler}
  //       style={{ border: "1px solid #2a2a72", background: "red" }}
  //     >
  //       <div>
  //         <img src={data.avatar} alt="avatar" width="45" height="45" />
  //       </div>
  //       <div className={classes.box2}>
  //         <h4>{data.userName}</h4>
  //       </div>
  //       <div>
  //         <p>{!data.date ? "NOT messages" : data.date}</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className={classes.container} onClick={changeContactHandler}>
      <div className={classes.box1}>
        <img src={data.avatar} alt="avatar" width="45" height="45" />
        <h4>{data.userName}</h4>
      </div>
      <div>
        <p>{!data.date ? "NOT messages" : data.date}</p>
      </div>
    </div>
  );
}
