import React from 'react';
import PropTypes from 'prop-types';
import { notify } from 'components/Notify/notify';
import { ToastContainer, Flip } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactSlice';
import {
  ItemsForContactsItem,
  NameForContactsItem,
  NamberForContactsItem,
  ButtonForContactsItem,
} from './ContactItem.styled';
const ContactItem = ({ id, name, number }) => {
  const dipatch = useDispatch();
  const deleteContact = ContactId => {
    dipatch(removeContact(ContactId));
    notify('dellContact');
  };
  return (
    <ItemsForContactsItem>
      <NameForContactsItem>{name}</NameForContactsItem>
      <NamberForContactsItem>{number}</NamberForContactsItem>
      <ButtonForContactsItem type="button" onClick={() => deleteContact(id)}>
        Delete
      </ButtonForContactsItem>
      <ToastContainer
        transition={Flip}
        theme="dark"
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
    </ItemsForContactsItem>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
