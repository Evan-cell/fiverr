import React from 'react'
import Featured from '../../featured/Featured'
import Trustedby from '../../Trusted/Trustedby'
import Slide from '../../slide/Slide'

import {cards} from '../../../data'
import Card from '../../cardcat/Card'

function Home() {
  return (
    <div>
      <Featured />
      <Trustedby />
      <Slide slidesToShow={5} arrowsScroll={5}>
      {cards.map(card=>(
        <Card item={card} key={card.id}/>)
      )}

      </Slide>
    </div>
  )
}

export default Home