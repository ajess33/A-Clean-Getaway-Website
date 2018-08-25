import React from 'react'
import styled from 'styled-components'

class ReviewsCard extends React.Component {
  state = {
    review: {
      comment: 'Very good stuff',
      author: 'Mookie Betts',
    },
  }

  render() {
    const review = this.state.review
    return (
      <div>
        <p>{review.comment}</p>
        <p>- {review.author}</p>
      </div>
    )
  }
}

export default ReviewsCard
