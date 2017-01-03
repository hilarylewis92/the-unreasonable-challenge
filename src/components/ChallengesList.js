import React, { Component } from 'react'
import Masonry from 'react-masonry-component'


var masonryOptions = {
  transitionDuration: 0
}

export default class ChallengesList extends Component {

   render() {
     const{ challengesList } = this.props;

     var childElements = challengesList.map(challenge => {
       return (
         <li className = 'challenge-elements'>
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
           classname={'my-gallery-class'}
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
