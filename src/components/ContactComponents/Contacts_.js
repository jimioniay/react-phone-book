import React from 'react';
import uuid from 'uuid/v4';

import ContactContainer from './ContactContainer';
import Prompt from './Prompt';
import LsImp from '../Model/LsImp';

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: {
        id: '',
        name: '',
        email: '',
        mobileNumber: '',
      },
      prompt: {
        message: '',
        status: false,
      },
    };
  }

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.setState({ id: uuid.v4() });
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    const contactExists = contacts.map(contact => {
      return contact.mobileNumber === this.state.contact.mobileNumber;
    });

    if (contactExists) {
      return this.setState( );
    }
    this.setState({
      id: uuid(),
    });
    contacts.push(this.state.contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  redirect() {
    this.props.history.push(`/contact-list`);
  }

  duplicateMobileNumberCheck = () => {
    LsImp.fetchFromLS('contacts').forEach(item => {
      console.log(
        `  ${typeof item.mobileNumber} -- ${typeof this.state
          .mobileNumber} ${this.state.mobileNumber === item.mobileNumber}`,
      );
      return this.state.mobileNumber === item.mobileNumber ? true : false;
    });

  };

  render() {
    console.log('state', this.state);
    return (
      <div className="container-fluid">
        {this.state.prompt.status ? <Prompt {...this.state.prompt} /> : null}
        <ContactContainer
          id={this.state.contact.id}
          name={this.state.contact.name}
          email={this.state.contact.email}
          mobileNumber={this.state.contact.mobileNumber}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
export default Contacts;
