import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
  const[removeAlbum, results] = useRemoveAlbumMutation()

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  }

  const header  = (
    <div>
      <Button loading={results.isLoading}>
        <GoTrashcan onClick={handleRemoveAlbum}/>
      </Button>
      {album.title}
    </div>
  )

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album}/>
    </ExpandablePanel>
  )
}

export default AlbumsListItem;