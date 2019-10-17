
function StarAverage(props) {
  return (
      <div>
        <div>Average review of {props.reviewsAverage}</div>
        <div>{'*'.repeat(props.reviewsAverage)} {(props.totalReviews > 0) ? props.totalReviews : ''}</div>
      </div>
    )
}

export default StarAverage;