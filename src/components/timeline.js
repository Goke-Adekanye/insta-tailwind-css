import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";

export default function Timeline() {
  const { photos } = usePhotos();
  console.log(photos);
  return (
    <div className="container col-span-2">
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : photos?.length > 0 ? (
        photos.map((content) => <p>this is the {content.username}</p>)
      ) : (
        <p>Follow people to see photos</p>
      )}
    </div>
  );
}
