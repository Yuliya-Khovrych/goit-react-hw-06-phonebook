import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { Button } from '../ContactForm/ContactForm.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {name}: {number}
      <Button onClick={() => dispatch(deleteContact(id))} type="submit">
        Delete
      </Button>
    </div>
  );
};
