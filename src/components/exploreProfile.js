import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  updateFollowedUserFollowers,
  updateLoggedInUserFollowing,
} from "../services/firebase";

export default function ExploreProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);

  async function hadleFollowUser() {
    setFollowed(true);
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUserFollowers(profileDocId, userId, false);
  }
  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between p-4 border-b border-gray-primary">
      <div className="flex items-center justify-between">
        <img
          className="rounded-md object-cover object-center w-10 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
          onError={(e) => {
            e.target.src = `/images/avatars/default.png`;
          }}
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>

      <button
        className="text-xs font-bold py-1 px-4 rounded-xl text-blue-medium border border-blue-medium"
        type="button"
        onClick={hadleFollowUser}
      >
        Follow
      </button>
    </div>
  ) : null;
}

ExploreProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};
