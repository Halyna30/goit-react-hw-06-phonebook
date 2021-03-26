import React from 'react';
import { connect } from 'react-redux';
import actions from './Redux/actions';
import FormContacts from './Components/FormContacts/FormContacts';
import Filter from './Components/Filter/Filter';
import ListContacts from './Components/ListContacts/ListContacts';

const App = ({
  items,
  filter,
  onAddContact,
  onDeleteContact,
  onChangeFilter,
}) => {
  return (
    <>
      <h1 className="title">Phonebook</h1>
      <FormContacts onSubmit={onAddContact} />

      <h2 className="title">Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />

      <ListContacts contacts={items} onDelete={onDeleteContact} />
    </>
  );
};

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  items: getVisibleContacts(items, filter),
  filter: filter,
});

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(actions.addContact(contact)),
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
  onChangeFilter: value => dispatch(actions.changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
