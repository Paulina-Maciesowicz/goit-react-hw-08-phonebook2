import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'Redux/CreateAction';
import { Loader } from 'components/Loader/Loader';

export default function Phonebook() {
  const loading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Your tasks</title>{' '}
      </Helmet>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loading ? <Loader /> : <ContactList />}
    </>
  );
}
