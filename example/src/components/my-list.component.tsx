import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

// const members = [
//   {
//     id: "1",
//     name: "foo",
//     login: "",
//     avatar_url: "",
//   },
//   {
//     id: "2",
//     name: "boo",
//     login: "",
//     avatar_url: "",
//   },
// ];

export const MyListComponent: React.FC = () => {
  const [members, setMembers] = React.useState<
    { id: string; login: string; avatar_url: string }[]
  >([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/facebook/members`)
      .then((r) => r.json())
      .then(setMembers);
  }, []);

  return (
    <List sx={{ width: 300 }}>
      {members.map((m) => (
        <>
          <ListItem key={m.id} disablePadding>
            <ListItemButton
              role={undefined}
              onClick={() => console.log("Clicked")}
              dense
            >
              <ListItemAvatar>
                <Avatar alt={m.login} src={m.avatar_url} />
              </ListItemAvatar>
              <ListItemText
                primary={m.login}
                secondary={<Typography>{m.id}</Typography>}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
};
