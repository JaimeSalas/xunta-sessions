import React from "react";
import { Link } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/facebook/members`)
      .then((r) => r.json())
      .then(setMembers);
  }, []);

  return (
    <>
      <h2>Hello from List</h2>
      {/* <Link to="/detail">Navigate to detail page</Link> */}

      <div className="user-list-container">
        <span className="header">Avatar</span>
        <span className="header">Id</span>
        <span className="header">Name</span>
        {members.map((m) => (
          <React.Fragment key={m.id}>
            <img src={m.avatar_url} />
            <span>{m.id}</span>
            {/* <span>{m.login}</span> */}
            <Link to={`/detail/${m.login}`}>{m.login}</Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
