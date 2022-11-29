import React from "react";
import { Link, useParams } from "react-router-dom";

interface MemberDetail {
  login: string;
  id: number | null;
  name: string;
  company: string;
  bio: string;
  type: "pro" | "standard";
}

// type MemberDetailPartial = Partial<MemberDetail>;
// Pick -> toma las propiedades que te interesen
// Omit -> toma todas las propiedades menos las que omites

const createDefaultMember = (): MemberDetail => ({
  login: "",
  bio: "",
  id: null,
  company: "",
  name: "",
  type: "standard",
});

const handleFetchJsonResponse = (r: Response) => {
  if (r.ok) {
    return r.json();
  }
};

const retrieveMember = (login: string): Promise<MemberDetail> =>
  fetch(`https://api.github.com/users/${login}`)
    .then(handleFetchJsonResponse)
    .then((v) => {
      console.dir(v);
      return { ...v, type: "standard" };
    });

export const DetailPage: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetail>(createDefaultMember);
  const { id } = useParams();

  React.useEffect(() => {
    retrieveMember(id)
      .then(setMember)
      .catch(console.error);
  }, []);

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
      <p>id: {member.id}</p>
      <p>login: {member.login}</p>
      <p>name: {member.name}</p>
      <p>company: {member.company}</p>
      <p>bio: {member.bio}</p>
      <p>type: {member.type}</p>
      <Link to="/list">back to list page</Link>
    </>
  );
};
