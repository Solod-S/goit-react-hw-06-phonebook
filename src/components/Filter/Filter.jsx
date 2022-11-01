import React from 'react';
import shortid from 'shortid';
import {
  ContactFilter,
  InputForContactFilter,
  LabelForContactFilter,
} from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/filterSlice';

const Filter = () => {
  const dipatch = useDispatch();
  const storeFilter = useSelector(state => state.reducer.filter);
  const onChangeFilter = event => {
    dipatch(filter(event.currentTarget.value));
  };
  const filterInputId = shortid.generate();
  return (
    <ContactFilter>
      <LabelForContactFilter htmlFor={filterInputId}>
        Find contacts by name
      </LabelForContactFilter>
      <InputForContactFilter
        id={filterInputId}
        type="text"
        value={storeFilter}
        onChange={onChangeFilter}
      />
    </ContactFilter>
  );
};
export default Filter;
