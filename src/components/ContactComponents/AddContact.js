import React from 'react';

function AddContacts({
  name,
  email,
  mobileNumber,
  officeNumber,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className="">
      <div className="form-group">
        <i className="fab fab-user" aria-hidden="true" />
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter your name"
          name="name"
          onChange={handleChange}
          value={name}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>

        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={email}
          required
          autoComplete="off"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Mobile Number</label>
        <input
          type="phone"
          className="form-control"
          id="mobileNumber"
          aria-describedby="phone"
          placeholder="Enter your Mobile Number"
          name="mobileNumber"
          onChange={handleChange}
          value={mobileNumber}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Office Number</label>
        <input
          type="phone"
          className="form-control"
          id="officeNumber"
          aria-describedby="office phone"
          placeholder="Enter your Mobile Number"
          name="officeNumber"
          onChange={handleChange}
          value={officeNumber}
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="ml-1 btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddContacts;
