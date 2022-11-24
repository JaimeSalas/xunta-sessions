import React from "react";
import { MemberEntity } from './model';

import { MemberTableRow } from './member-table-row';

// state
// props
export const MemberTable = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  

  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((r) => {
        if (r.ok) {
          return r.json();
        }
      })
      .then((json) => {
        setMembers((prev) => {
            console.log(prev);
            return json;
        });
      })
      .catch(console.error);
  }, []);

  return (
    <div className="user-list-container">
      <span className="header">Avatar</span>
      <span className="header">Id</span>
      <span className="header">Name</span>
      {members.map((m) => (
        <MemberTableRow key={m.id} member={m} />
      ))}
    </div>
  );
};
