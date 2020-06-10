import React from "react";
import { Link } from 'react-router-dom;'

export default function Error() {

  return (
    <section className="error-page container">
      <div className="error-container">
        <h1>oops! it is  a dead end</h1>
        <link to="/" className="btn btn-primary">
          Back Home
      </link>
      </div>
    </section>
  );
}