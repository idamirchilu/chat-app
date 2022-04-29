import ContactsContainer from './ContactsContainer';
import avatar from '../../assets/images/avatar.png';

const data = [
    {userName:"user1",date:"2022/4/27",avatar},
    {userName:"user2",date:"2022/4/27",avatar},
    {userName:"user3",date:"2022/4/27",avatar}

]

export default function ContactsList(){
    return <>
        {data.map(item => <ContactsContainer  data={item}/>)}
    </>
}