import React from 'react'
import 'bulma/css/bulma.css'

import ProfileCard from './ProfileCard'

import AlexaImage from '../src/assets/images/alexa.png'
import CortanaImage from '../src/assets/images/cortana.png'
import SiriImage from '../src/assets/images/siri.png'


const App = () => {
  return (
    <div>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal Digital Assistants</p>
        </div>
      </section>

      {/* Profile Card */}
      {/* 서로 다른 데이터를 보여주기 위해서는 Props를 변경해 데이터를 전달한다. */}
      {/* 각기 다른 데이터를 전달하기 위해서는 ? */} {/* 이건 그 다음 문제구나 */}
      {/* 이제 하드코딩 방법을 하지 않기 위해서는 map과 배열이 필요한 것이구나. */}

    <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column is-4">
          <ProfileCard  
          title="Alexa" 
          handle="@alexa99" 
          image={AlexaImage}
          description="Alexa was created by Amazon and helps you buy things."
          />
          </div>
          <div className="column is-4">
          <ProfileCard  
          title="Cotana" 
          handle="@cotana32" 
          image={CortanaImage}
          description="Cortana was created by Microsoft and helps you find things."
          />
          </div>
          <div className="column is-4">
          <ProfileCard  
          title="Siri" 
          handle="@siri01" 
          image={SiriImage}
          description="Siri was created by Apple and helps you do things."
          />
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}

export default App