import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import ExploreProfile from "../components/exploreProfile";
import Header from "../components/header";
import useUser from "../hooks/use-user";
import { getSuggestedProfiles } from "../services/firebase";

export default function Explore({ user: loggedInUser }) {
  const { user: { docId = "", userId, following } = {} } = useUser(
    loggedInUser.uid
  );
  console.log("userId, following :>> ", userId, following);
  const [profiles, setProfiles] = useState();
  console.log("profiles :>> ", profiles);

  useEffect(() => {
    document.title = "Explore - Instagram";
  }, []);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }

    if (userId) {
      suggestedProfiles();
    }
  }, [following, userId]);

  return (
    <div className="bg-gray-background">
      <Header />

      {!profiles ? (
        <div className="items-center justify-center sm:max-w-screen-sm sm:mx-auto px-2">
          <Skeleton count={5} height={200} className="mt-1" />
        </div>
      ) : profiles.length > 0 ? (
        <div className="items-center justify-center sm:max-w-screen-sm sm:mx-auto px-2">
          <div className="text-sm flex items-center justify-between mb-2">
            <p className="font-bold text-lg text-gray-base">Suggestions</p>
          </div>

          <div className="mt-1 flex flex-col bg-white rounded-lg">
            {profiles.map((profile) => (
              <ExploreProfile
                key={profile.docId}
                loggedInUserDocId={docId}
                profileDocId={profile.docId}
                username={profile.username}
                profileId={profile.userId}
                userId={userId}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
