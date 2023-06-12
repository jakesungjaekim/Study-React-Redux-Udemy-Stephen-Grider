import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store"
import Skeleton from "./Skeleton"
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";

const AlbumList = ({ user }) => {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const handleAddAlbum = () => {
    addAlbum(user);
  }

  let content;

  if (isFetching) {
    content = <Skeleton times={3} className="w-full h-10"/>
  } else if (error) {
    content = <div>Error Loading Albums</div>
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />
    })
  }


  return (
    <div>
      <div className="flex flex-row justify-between m-2 itmes-center">
        <h3 className="text-lg font-bold"> Albums for {user.name} </h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>+ Album</Button>
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}

export default AlbumList