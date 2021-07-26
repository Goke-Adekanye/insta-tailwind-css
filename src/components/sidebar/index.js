import { useContext } from "react";
import User from "./user";
import Suggestions from "./suggestion";
import LoggedInUserContext from "../../context/logged-in-user";

export default function Sidebar() {
  const { user: { docId = "", fullName, username, userId, following } = {} } =
    useContext(LoggedInUserContext);

  return (
    <div className="container p-4 mx-auto">
      <User username={username} fullName={fullName} />
      <Suggestions
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
}
