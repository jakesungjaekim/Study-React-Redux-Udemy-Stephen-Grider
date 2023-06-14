import React from 'react'
import { useRemoveAlbumMutation } from '../store'
import { GoTrashcan } from 'react-icons/go'

const PhotosListItem = ({ photo }) => {
  const [removePhoto, results] = useRemoveAlbumMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  }

  return (
    <div className='relative m-2 cursor-pointer'>
      <img src={photo.url} alt="random pic" className='object-cover w-32 h-32' />
      <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:bg-gray-200 hover:opacity-80'>
        <GoTrashcan className='text-3xl' onClick={handleRemovePhoto}/>
      </div>
    </div>
  )
}

export default PhotosListItem