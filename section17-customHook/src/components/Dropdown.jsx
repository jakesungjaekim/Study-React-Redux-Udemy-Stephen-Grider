import React, { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';


const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(()=>{
    const handler = (event) => {
      console.log(divEl.current)
      console.log(event.target)
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handler)

    return () => {
      document.removeEventListener('click', handler)
    }
  },[])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    // CLOSE DROPDOWN
    setIsOpen(false)
    // WHAT OPTION DID THE USER CLICK ON?
    onChange(option)

  }

  const renderedOptions = options.map((option) => {
    return <div className='p-1 rounded hover:bg-sky-100 cursur-pointer' onClick={() => handleOptionClick(option)} key={option.value}>
      {option.label}
    </div>
  })

  // let content = 'Select...';
  // if (selection) {
  //   content = selection.label
  // }

  // CHANGE LIKE THIS
  // Question Mark is Check helper
  // 오류를 사전에 검사한다? 
  // Optional chaining을 사용하면 객체의 속성에 접근할 때, 해당 속성이 존재하지 않는 경우 에러가 발생하는 대신 undefined를 반환하게 됩니다

  // const content = selection?.label || 'Select...'

  return (
    <div ref={divEl} className='relative w-48'> 
      <Panel 
        className='flex items-center justify-between cursor-pointer' 
        onClick={handleClick}
      >
        { value?.label || 'Select...' }
        <GoChevronDown className='text-lg'/> 
      </Panel>
      { isOpen && (
        <Panel className='absolute top-full'>
          {renderedOptions}
        </Panel>
        )}
    </div>
  )
}

export default Dropdown 