import React from "react";
import { Link } from "react-router-dom";
import { routes } from 'core';
import { AppLayout } from '@/layouts';

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
    <AppLayout>
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
            {/* <Link to={generatePath("/detail/:id", { id: m.login })}>
              {m.login}
            </Link> */}
            <Link to={routes.details(m.login)}>
              {m.login}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </AppLayout>
  );
};
