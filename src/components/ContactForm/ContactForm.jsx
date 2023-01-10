import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { Form, Field, Input, Button } from './ContactForm.styled';
import { addContact, getContact } from '../../redux/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  console.log(contacts);

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addContact({ name, number, id: nanoid() }));
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          id={nanoid()}
          required
        />
      </Field>
      <Field>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          id={nanoid()}
          required
        />
      </Field>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
