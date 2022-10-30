import { toast } from 'react-toastify';
import { notifictation } from 'constants/notification';
import 'react-toastify/dist/ReactToastify.css';
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
import image from '../img/left.png';
import image2 from '../img/right.png';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact } from 'redux/contactSlice';
import { filter } from 'redux/filterSlice';

function App() {
  const dipatch = useDispatch();
  const storeContact = useSelector(state => state.reducer.contacts);
  const storeFilter = useSelector(state => state.reducer.filter);

  const notify = toShown => {
    if (toShown === 'addContact') {
      return toast.success(' You have added contact!', notifictation.success);
    }
    if (toShown === 'dellContact') {
      return toast.warn('You have dellated the contact!', notifictation.warn);
    }
  };

  const creatingContact = data => {
    const namesInContacts = storeContact.map(contact => contact.name);
    if (namesInContacts.includes(data.name)) {
      alert(` ${data.name} is already in contacts`);
      // если имя из входящих данных === имени в любом имеющемся контакте выдаем ошибку
    } else {
      notify('addContact');

      return dipatch(addContact(data));
    }
  };

  const getContacts = () => {
    const normalizedFilter = storeFilter.toLocaleLowerCase();
    const filtered = storeContact.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return filtered;
  };
  const onChangeFilter = event => {
    dipatch(filter(event.currentTarget.value));
  };

  const deleteContact = ContactId => {
    dipatch(removeContact(ContactId));
    notify('dellContact');
  };
  return (
    <>
      <AppImgLeft src={image} />
      <AppSection>
        <MainAppHeader>Phonebook</MainAppHeader>
        <ContactForm creatingContact={creatingContact} />
        <AppHeader>Contacts</AppHeader>
        <Filter value={storeFilter} onChange={onChangeFilter} />
        <ContactList contacts={getContacts()} onDeleteContact={deleteContact} />
      </AppSection>
      <AppImgRigth src={image2} />
    </>
  );
}

export default App;
