import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { ContactsList, ListForContactsList } from './ContactList.styled';

const ContactList = () => {
  const storeContact = useSelector(state => state.reducer.contacts);
  const storeFilter = useSelector(state => state.reducer.filter);

  const getContacts = () => {
    const normalizedFilter = storeFilter.toLocaleLowerCase();
    const filtered = storeContact.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return filtered;
  };

  return (
    <ContactsList>
      <ListForContactsList>
        {getContacts().map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
      </ListForContactsList>
    </ContactsList>
  );
};

export default ContactList;
