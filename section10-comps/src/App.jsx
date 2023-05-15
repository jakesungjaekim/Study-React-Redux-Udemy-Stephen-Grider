import React from 'react'
import Button from './Button'
import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'

const App = () => {
  const handleClick = () => {
    console.log('Clicked!')
  }

  return (
    <div className='container flex flex-col items-center justify-center mx-auto'>
      <h1 className='mb-10 text-4xl font-bold text-rose-300'>TEST TAILWINDCSS</h1>
      <div>
        <Button success primary rounded outline onClick={handleClick} className="mb-12">
          <GoBell />
          Click Me!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick} >
          <GoCloudDownload/>
          안녕하세요
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase/>
          이것보세요
        </Button>
      </div>
      <div>
        <Button secondary outline>클릭클릭</Button>
      </div>
      <div>
        <Button primary rounded>칠런칠런</Button>
      </div>
    </div>
  )
}

export default App 

