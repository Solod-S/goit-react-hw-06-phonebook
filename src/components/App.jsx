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

function App() {
  return (
    <>
      <AppImgLeft src={image} />
      <AppSection>
        <MainAppHeader>Phonebook</MainAppHeader>
        <ContactForm />
        <AppHeader>Contacts</AppHeader>
        <Filter />
        <ContactList />
      </AppSection>
      <AppImgRigth src={image2} />
    </>
  );
}

export default App;
