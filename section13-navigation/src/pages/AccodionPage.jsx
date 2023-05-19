import React from 'react'
import Accordion from '../components/Accordion'

const AccodionPage = () => {
  const items = [
    {
      id: 'sdafsf',
      label: 'Can I use React on a Project?',
      content: 'You can use React on any Project you want.You can use React on any Project you want.You can use React on any Project you want.'
    },
    {
      id: 'asfffff',
      label: 'Can I use JavaScript on a Project?',
      content: 'You can use React on any Project you want.You can use React on any Project you want.You can use React on any Project you want.'
    },
    {
      id: 'fffdfsfsf',
      label: 'Can I use CSS on a Project?',
      content: 'You can use React on any Project you want.You can use React on any Project you want.You can use React on any Project you want.'
    },
  ]


  return (
    <>
      <Accordion items={items}/>
    </>
  )
}

export default AccodionPage