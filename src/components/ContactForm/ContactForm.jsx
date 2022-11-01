import React, { useState } from 'react';
import shortid from 'shortid';
import { Formik } from 'formik';
import schema from './schema';
import { notify } from 'components/Notify/notify';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ContactsForm,
  ListForContactsForm,
  ItemsForContactsForm,
  LabelForContactsForm,
  InputForContactsForm,
  ButtonForContactsForm,
  ErrorForContactsForm,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';

function ContactForm() {
  const [name] = useState('');
  const [number] = useState('');

  const storeContact = useSelector(state => state.reducer.contacts);
  const dipatch = useDispatch();

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

  const handleSubmit = (values, actions) => {
    creatingContact(values);

    actions.resetForm();
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  return (
    <Formik
      validationSchema={schema}
      initialValues={{ name, number }}
      onSubmit={handleSubmit}
    >
      <ContactsForm autoComplete="off">
        <ListForContactsForm>
          <ItemsForContactsForm>
            <LabelForContactsForm htmlFor={nameInputId}>
              Name
            </LabelForContactsForm>

            <InputForContactsForm
              id={nameInputId}
              type="text"
              name="name"
              required
            />
            <ErrorForContactsForm name="name" component="div" />
          </ItemsForContactsForm>
          <ItemsForContactsForm>
            <LabelForContactsForm htmlFor={numberInputId}>
              Number
            </LabelForContactsForm>
            <InputForContactsForm
              id={numberInputId}
              type="tel"
              name="number"
              required
            />
            <ErrorForContactsForm name="number" component="div" />
          </ItemsForContactsForm>
        </ListForContactsForm>
        <ButtonForContactsForm type="submit">Add contact</ButtonForContactsForm>
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
      </ContactsForm>
    </Formik>
  );
}

export default ContactForm;
