import React from "react";

const useUserCollection = (url: string) => {
  const [filter, setFilter] = React.useState("");
  const [userCollection, setUserCollection] = React.useState([]);

//   React.useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//       .then((r) => r.json())
//       .then((json) => setUserCollection(json));
//   }, [filter]);
  const loadCollection = () => {
    fetch(`${url}${filter}`)
      .then((r) => r.json())
      .then((json) => setUserCollection(json));
  }

  return {
    userCollection,
    loadCollection,
    filter,
    setFilter
  };
};

export const MyComponent = () => {
  const {filter, setFilter, loadCollection, userCollection} = useUserCollection('https://jsonplaceholder.typicode.com/users?name_like=');
//   const {loadCollection, userCollection} = useUserCollection();

  React.useEffect(() => {
    loadCollection();
  }, [filter]);

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
