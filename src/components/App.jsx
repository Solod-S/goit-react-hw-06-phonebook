import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { notifictation } from 'constants/notification';
import 'react-toastify/dist/ReactToastify.css';
import contactdata from './contact-data.json';
import {
  AppHeader,
  MainAppHeader,
  AppSection,
  AppImgLeft,
  AppImgRigth,
} from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import shortid from 'shortid';
import image from '../img/left.png';
import image2 from '../img/right.png';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('myContacts')) ?? contactdata
  );
  const [filter, setFilter] = useState('');
  //!!!
  const isFirsRender = useRef(true);
  //!!!
  useEffect(() => {
    //!!!
    //!!!
    if (isFirsRender.current) {
      console.log(isFirsRender.current);
      isFirsRender.current = false;
      return;
    }
    //!!!
    // не могу понять, почему не работает пропуск первого рендера
    //!!!

    console.log(`contacts has been saved to local storage`);
    console.log(isFirsRender.current);
    localStorage.setItem('myContacts', JSON.stringify(contacts));
  }, [contacts]);

  const notify = toShown => {
    if (toShown === 'addContact') {
      return toast.success(' You have added contact!', notifictation.success);
    }
    if (toShown === 'dellContact') {
      return toast.warn('You have dellated the contact!', notifictation.warn);
    }
  };
  const creatingContact = data => {
    const namesInContacts = contacts.map(contact => contact.name);
    if (namesInContacts.includes(data.name)) {
      alert(` ${data.name} is already in contacts`);
      // если имя из входящих данных === имени в любом имеющемся контакте выдаем ошибку
    } else {
      notify('addContact');
      return setContacts(contacts => [
        ...contacts,
        { id: shortid.generate(), name: data.name, number: data.number },
      ]);
    }
  };

  const getContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    const filtered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return filtered;
  };
  const onChangeFilter = event => {
    // console.log(event.currentTarget.value);
    setFilter(event.currentTarget.value);
  };
  const deleteContact = ContactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== ContactId)
    );
    notify('dellContact');
  };

  return (
    <>
      <AppImgLeft src={image} />
      <AppSection>
        <MainAppHeader>Phonebook</MainAppHeader>
        <ContactForm creatingContact={creatingContact} />
        <AppHeader>Contacts</AppHeader>
        <Filter value={filter} onChange={onChangeFilter} />
        <ContactList contacts={getContacts()} onDeleteContact={deleteContact} />
      </AppSection>
      <AppImgRigth src={image2} />
    </>
  );
}

export default App;

//----------------------
//----------------------
// state
//----------------------
//----------------------
// class App extends React.Component {
//   state = {
//     contacts: contactdata,
//     filter: '',
//   };
//   componentDidUpdate(__, prevState) {
//     const thisContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;
//     if (thisContacts !== prevContacts) {
//       console.log(`!!Обновилось поле Contacts !!`);
//       localStorage.setItem('myContacts', JSON.stringify(this.state.contacts));
//     }
//   }
//   componentDidMount() {
//     const savedContacts = localStorage.getItem('myContacts');
//     const parsedSavedContacts = JSON.parse(savedContacts);
//     if (parsedSavedContacts) {
//       this.setState({
//         contacts: JSON.parse(savedContacts),
//       });
//     }
//   }
//   notify = toShown => {
//     if (toShown === 'addContact') {
//       return toast.success(' You have added contact!', notifictation.success);
//     }
//     if (toShown === 'dellContact') {
//       return toast.warn('You have dellated the contact!', notifictation.warn);
//     }
//   };
//   creatingContact = data => {
//     const namesInContacts = this.state.contacts.map(contact => contact.name);
//     if (namesInContacts.includes(data.name)) {
//       alert(` ${data.name} is already in contacts`);
//       // если имя из входящих данных === имени в любом имеющемся контакте выдаем ошибку
//     } else {
//       this.notify('addContact');
//       return this.setState({
//         ...this.state,
//         // распыливаем все стейты которые были
//         contacts: [
//           ...this.state.contacts,
//           // распыливаем все предведущии контакты
//           { id: shortid.generate(), name: data.name, number: data.number },
//           // + добавляем новый
//         ],
//       });
//     }
//   };
//   getContacts = () => {
//     const normalizedFilter = this.state.filter.toLocaleLowerCase();
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
//   onChangeFilter = event => {
//     // console.log(event.currentTarget.value);
//     this.setState({ filter: event.currentTarget.value });
//   };
//   deleteContact = ContactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== ContactId),
//     }));
//     this.notify('dellContact');
//   };
//   render() {
//     const { filter } = this.state;
//     const contactsToShow = this.getContacts();
//     return (
//       <>
//         <AppImgLeft src={image} />
//         <AppSection>
//           <MainAppHeader>Phonebook</MainAppHeader>
//           <ContactForm creatingContact={this.creatingContact} />
//           <AppHeader>Contacts</AppHeader>
//           <Filter value={filter} onChange={this.onChangeFilter} />
//           <ContactList
//             contacts={contactsToShow}
//             onDeleteContact={this.deleteContact}
//           />
//         </AppSection>
//         <AppImgRigth src={image2} />
//       </>
//     );
//   }
// }
