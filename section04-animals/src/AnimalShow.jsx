import './AnimalShow.css';
import { useState } from 'react'
import bird from './assets/svg/bird.svg'
import cat from './assets/svg/cat.svg'
import cow from './assets/svg/cow.svg'
import dog from './assets/svg/dog.svg'
import gator from './assets/svg/gator.svg'
import horse from './assets/svg/horse.svg'
import heart from './assets/svg/heart.svg'


const svgMap = {
  bird: bird,
  cat: cat,
  cow: cow,
  dog: dog,
  gator: gator,
  horse: horse,
};

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);


  const handleCilckHeart = () => {
    console.log('heart was clicked');
    setClicks(clicks + 1);
  }


  return (
    <>
      <div className='animal-show' onClick={handleCilckHeart}>
        <img className='animal' src={svgMap[type]} alt="animals" />
        <img className='heart' src={heart} alt="heart"
          style={{ width: 10 + 10 * clicks + 'px'}}
        />
      </div>
    </>
  );
};

export default AnimalShow;
