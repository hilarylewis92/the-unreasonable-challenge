import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import ChallengeCard from './ChallengeCard'

var masonryOptions = {
  transitionDuration: 0
}

export default class ChallengesList extends Component {

   render() {
     const{ challengesList, removeChallenge } = this.props;

     var singleCard = challengesList.map(challenge => {
       return (
         <li className='challenge-elements' key={challenge.key} >

           <img className='single-challenge-image'
             src={challenge.image}
           />

           <div className='single-challenge-title'>
             {challenge.title}
           </div>

           <div className='author-date'>
             ~ {challenge.user.displayName} on {challenge.createdAt} ~
           </div>

           <div className='single-challenge-body'>
             {challenge.body}
           </div>
           <ul>
             <ChallengeCard
               challenge={challenge}
               />
           </ul>
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
          {singleCard}
        </Masonry>
       </div>
     )
   }
}

// <ChallengeCard singleCard={this.singleCard} removeChallenge={removeChallenge()}/>

// <button
//   className='remove-challenge-btn'
//   onClick={() => removeChallenge(challenge.key)}>
//   x
// </button>
