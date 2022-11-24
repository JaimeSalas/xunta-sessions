import React from "react";
import { useDebounce } from 'use-debounce';

// const delay = (offset: number, cb?: Function) => {
//     return new Promise((res) => {
//         setTimeout(() => {
//             if (cb) {
//                 cb();
//             }
//             res(undefined);
//         }, offset);
//     })
// } 

// async function name(cb) {
    
// }

export const MyComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 500);
  const [userCollection, setUserCollection] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${debouncedFilter}`)
      .then((r) => r.json())
      .then((json) => setUserCollection(json));
  }, [debouncedFilter]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {userCollection.map((user, i) => (
          <li key={i}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
