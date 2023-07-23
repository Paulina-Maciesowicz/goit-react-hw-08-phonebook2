import { createAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get(
      'https://connections-api.herokuapp.com/contacts'
    );
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    console.log(name);
    console.log(phone);
    const sendData = {
      name: name,
      number: phone,
    };
    const response = await axios.post(
      'https://connections-api.herokuapp.com/contacts',
      sendData
    );
    console.log(response);
    return response.data;
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async contactId => {
    await axios.delete(
      `https://connections-api.herokuapp.com/contacts/${contactId}`
    );
    return contactId;
  }
);

export const setFilter = createAction('contacts/setFilter');
