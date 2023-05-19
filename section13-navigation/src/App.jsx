import React from 'react'

import Sidebar from './components/Sidebar'
import Route from './components/Route'
import AccordionPage from './pages/AccodionPage'
import DropdownPage from './pages/DropdownPage'
import ButtonPage from './pages/ButtonPage'

const App = () => {
  return (
    <div className='container grid grid-cols-6 gap-4 mx-auto mt-4'>
     <Sidebar />
      <div className='col-span-5'>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/buttons'>
          <ButtonPage />
        </Route>
      </div>
    </div>

  )
}

export default App