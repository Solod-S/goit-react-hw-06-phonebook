import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, Flip } from 'react-toastify';

import {
  ItemsForContactsItem,
  NameForContactsItem,
  NamberForContactsItem,
  ButtonForContactsItem,
} from './ContactItem.styled';
const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <ItemsForContactsItem>
      <NameForContactsItem>{name}</NameForContactsItem>
      <NamberForContactsItem>{number}</NamberForContactsItem>
      <ButtonForContactsItem type="button" onClick={onDeleteContact}>
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
  onDeleteContact: PropTypes.func.isRequired,
};
