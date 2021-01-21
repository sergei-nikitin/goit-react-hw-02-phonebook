import React, { Component } from "react";
import Form from "./components/form";
import ContactList from "./components/contacts";
import Filter from "./components/filter";
import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  changefilter = (filter) => {
    this.setState({ filter });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  addContact = (name, number) => {
    const user = {
      id: shortid.generate(),
      name: "",
      number: "",
    };

    user.name = name;
    user.number = number;
    this.setState((prevstate) => {
      return {
        contacts: [...prevstate.contacts, user],
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
    // console.log(filter.target.value);
  };

  render() {
    const visibleContact = this.getFilterContacts();
    return (
      <div>
        <h2>Phonebook</h2>
        <Form onAddContact={this.addContact} />
        <h2>Contacts</h2>

        {this.state.contacts.length > 0 ? (
          <div>
            <Filter
              value={this.state.filter}
              onChangeFilter={this.changeFilter}
            />
            <ContactList contacts={visibleContact} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default App;
