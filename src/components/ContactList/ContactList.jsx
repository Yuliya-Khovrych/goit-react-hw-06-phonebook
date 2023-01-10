import { useSelector } from 'react-redux';
import { getContact } from '../../redux/contactsSlice';
import { getFilterContact } from '../../redux/filterSlice';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilterContact);
  // console.log(contacts);
  // console.log(filter);

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
