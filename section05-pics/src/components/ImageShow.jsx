import React from 'react'

const ImageShow = ({ image }) => {
  console.log(image)
  return (
    <>
      <img src={image.urls.small} alt="" />
    </>
  )
}

export default ImageShow