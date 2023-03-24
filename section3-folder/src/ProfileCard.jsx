

const ProfileCard = ({ title, handle, image, description }) => {
  // const { title, handle } = props
  console.log(title, handle)

  return( 
    <article className="card">
      <div className="card-image">
        <figure className="image is-1by1">
            <img src={image} alt="PDA-logo" />
          </figure>   
        </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">
            This is Title: {title}
          </p>
          <p className="subtitle is-6">
           This is Handle: {handle}
          </p>
        </div>
        <div className="content">
          {description}
        </div>
      </div>
    </article>
  )
}

export default ProfileCard

