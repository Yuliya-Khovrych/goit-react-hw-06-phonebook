import { useSelector } from 'react-redux';
import { getContact } from '../redux/contactsSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

export const App = () => {
  const contacts = useSelector(getContact);
  //console.log(contacts.length);

  return (
    <Section>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <h2>Contacts</h2>}
      {contacts.length > 0 && <Filter />}
      {contacts.length > 0 && <ContactList />}
    </Section>
  );
};
