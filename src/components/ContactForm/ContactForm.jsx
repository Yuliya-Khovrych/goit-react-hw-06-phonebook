import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { Form, Field, Input, Button } from './ContactForm.styled';
import { addContact, getContact } from '../../redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const newName = evt.target.name.value;
    const number = evt.target.number.value;
    contacts.find(({ name }) => name.toLowerCase() === newName.toLowerCase())
      ? Notiflix.Notify.failure(`${newName} is already  in contacts.`)
      : dispatch(addContact(newName, number)) && form.reset();
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
          id={nanoid()}
          required
        />
      </Field>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
