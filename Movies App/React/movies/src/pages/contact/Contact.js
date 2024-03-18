import React from "react";

export default function Contact() {
  return (
    <div className="container mt-5">
      <h1>Contact Us</h1>

      <ul>
        <li>Email: contact@example.com</li>
        <li>Phone: 123-456-7890</li>
        <li>Address: 1234 Street Name, City, Country</li>
      </ul>
      <p>
        You can also fill out the form below and we'll get back to you as soon
        as possible:
      </p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
