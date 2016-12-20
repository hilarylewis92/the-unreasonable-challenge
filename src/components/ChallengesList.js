import React, { Component } from 'react'

import ChallengeCard from './ChallengeCard'

export default class ChallengesList extends Component {
   render() {
     const{ challengesList } = this.props;

     return (
       <div className="ChallengesList">
         <h3>Challenges</h3>
         <ul>
           {challengesList.map(challenge => {
             return (
               <ChallengeCard
                 challenge = {challenge}
                />
              )
           })}
         </ul>
       </div>
     )
   }
}
