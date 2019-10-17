function Review(props) {
  return(
    <>
      {props.reviews.map(review => (
        <div>
          <h4>{review.user_name}</h4>
          <div>{'*'.repeat(review.rating)}</div>
          <h3>{review.header}</h3>
          <div>{review.review_text}</div>
        </div>
      ))}
    </>
  )
}

export default Review;