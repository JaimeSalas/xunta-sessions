import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const { id } = useParams();

  // https://api.github.com/users/<id>
  // https://api.github.com/users/ajoulin

  /*
  {
    "login": "ajoulin",
    "id": 4343641,
    "name": null,
    "company": null,
    "bio": null
  }
  */

  return (
    <>
      <h2>Hello from Detail</h2>
      <h3>User Id: {id}</h3>
      <Link to="/list">back to list page</Link>
    </>
  );
};
