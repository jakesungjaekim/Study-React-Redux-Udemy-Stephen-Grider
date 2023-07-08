import { GoTrashcan } from "react-icons/go"
import { useRemovePhotoMutation } from "../store"


const PhotosListItem = ({ photo }) => {
  const [removePhoto, results] = useRemovePhotoMutation()


  const handleRemovePhoto = () => {
    removePhoto(photo)
  }

  return (
    <div className='relative m-2 cursor-pointer'>
      <img className='w-20 h-20' src={photo.url} alt={photo.title}/>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:bg-gray-200 hover:opacity-80">
        <GoTrashcan onClick={handleRemovePhoto} className='text-3xl text-red-500'/>
      </div>
    </div>
  )
}

export default PhotosListItem
