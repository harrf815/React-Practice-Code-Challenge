import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = ({sushi, nextFour}) => {
  return (
    <Fragment>
      <div className="belt">
        {
          /* 
             Render Sushi components here!
          */
         sushi.map(sushi => <Sushi sushi={sushi} />)
        }
        <MoreButton nextFour={nextFour} />
      </div>
    </Fragment>
  )
}

export default SushiContainer