import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const actionBar = (
  <div>
    <Button primary onClick={handleClose}>I Accept</Button>
  </div>
  );

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>
      Here is an important agreement for you to accept
    </p>
  </Modal>;

  return (
    <div className='relative'>
        <Button onClick={handleClick} primary>Open Modal</Button>
      { showModal && modal }
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum molestie aliquam. Sed quis ante bibendum, gravida nibh in, mattis quam. Ut vel sodales sapien. Aliquam erat volutpat. Fusce lacinia quam eget mi pharetra pellentesque. Duis a pretium turpis. Phasellus facilisis odio id nulla auctor mattis. Duis ut purus felis. Sed non mollis risus. Nulla laoreet sem at facilisis rutrum.
      </p>
    </div>
  )
}

export default ModalPage 