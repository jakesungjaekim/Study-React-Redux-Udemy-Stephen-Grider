import { useFetchPhotosQuery, useAddAlbumMutation } from '../store'
import Button from './Button';


const PhotosList = ({ album }) => {
  useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddAlbumMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  }

  return (
    <div>
      <div className='flex flex-row items-center justify-between m2'>
        <h3 className='text-lg font-bold'>Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>

      </div>
    </div>
  )
}

export default PhotosList