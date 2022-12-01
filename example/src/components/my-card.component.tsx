import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export const MyCardComponent: React.FC = () => {
  return (
    <Card sx={{ padding: "20px", width: 500 }}>
      <CardHeader title="My Card Component" />
      <CardContent>
        <h3>This will be a Login</h3>
      </CardContent>
      <Button variant="contained" onClick={() => console.log("Clicked!")}>
        Submit
      </Button>
    </Card>
  );
};
