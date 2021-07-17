import React from "react";
import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestions from "./suggestion";

export default function Sidebar() {
  const { user } = useUser();

  console.log(user);
  return (
    <div className="p-4">
      <User />
      <Suggestions />
    </div>
  );
}
