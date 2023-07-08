import { useFetchPhotosQuery, useAddPhotoMutation } from "../store"
import Button from "./Button"
import Skeleton from "./Skeleton"
import PhotosListItem from "./PhotosListItem"

const PhotosList = ({ album }) => {
  const {data, isFetching, error} = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation(album);

  const handleAddPhoto = () => {
    addPhoto(album);
  }

  let content;

  if (isFetching) {
    content = <Skeleton className="w-8 h-8" times={3}/>
  } else if (error) {
    content = <div>Error Loading Photos</div>
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo}/>
    })
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-2">
        <h3 className="text-lg font-bold">Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo 
        </Button>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {content}
      </div>
    </div>
  )
} 

export default PhotosList