import { useSelector, useDispatch } from 'react-redux';
import { getFilterContact, onFilter } from '../../redux/filterSlice';
import { Field, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilterContact);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(onFilter(evt.currentTarget.value));
  };

  return (
    <Field>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </Field>
  );
};
