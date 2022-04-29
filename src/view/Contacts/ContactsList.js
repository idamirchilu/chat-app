import ContactsContainer from "./ContactsContainer";
import { useSelector } from "react-redux";

// const data = [
//     {userName:"user1",date:"2022/4/27",avatar},
//     {userName:"user2",date:"2022/4/27",avatar},
//     {userName:"user3",date:"2022/4/27",avatar}
// ]

export default function ContactsList() {
  const userState = useSelector((state) => state.user);
  const data = [];
  userState.users.forEach((element) => {
    const lastDate = element.messages[element.messages.length - 1]?.date;
    //const lastDate = "2022/4/27";
    data.push({
      userName: element.userName,
      date: lastDate,
      avatar: element.avatar,
      active: element.active,
    });
  });
  return (
    <>
      {data.map((item) => (
        <ContactsContainer key={item.userName} data={item} />
      ))}
    </>
  );
}
