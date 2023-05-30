import React from 'react'

import Sidebar from './components/Sidebar'
import Route from './components/Route'
import AccordionPage from './pages/AccodionPage'
import DropdownPage from './pages/DropdownPage'
import ButtonPage from './pages/ButtonPage'
import ModalPage from './pages/ModalPage'
import TablePage from './pages/TablePage'
import CounterPage from './pages/CounterPage'

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
        <Route path='/modal'>
          <ModalPage />
        </Route>
        <Route path='/table'>
          <TablePage />
        </Route>
        <Route path='/counter'>
          <CounterPage initialCount={10}/>
        </Route>
      </div>
    </div>

  )
}

export default App