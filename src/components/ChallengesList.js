import React, { Component } from 'react'
import Masonry from 'react-masonry-component'


var masonryOptions = {
  transitionDuration: 0
}

export default class ChallengesList extends Component {

   render() {
     const{ challengesList, removeChallenge } = this.props;

     var childElements = challengesList.map(challenge => {
       return (
         <li className = 'challenge-elements' key={challenge.key}>
           <button
             className='remove-challenge-btn'
             onClick={() => removeChallenge(challenge.key)}>
             x
           </button>

           <img className='single-challenge-image'
             src={challenge.image}
           />

           <div className='single-challenge-title'>
             {challenge.title}
           </div>

           <div className='single-challenge-body'>
             {challenge.body}
           </div>

         </li>
       )
     })

     return (
       <div className="ChallengesList">
         <Masonry
           className={'my-gallery-class'}
           elementType={'ul'}
           options={masonryOptions}
           disableImagesLoaded={false}
           updateOnEachImageLoad={false}
           >
          {childElements}
        </Masonry>
       </div>
     )
   }
}
