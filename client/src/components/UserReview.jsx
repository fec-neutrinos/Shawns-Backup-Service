import $ from 'jquery';

class UserReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      product_id: '',
      review_date: '',
      header: '',
      review_text: '',
      rating: '',
      would_recommend: '',
      hasBeenReviewed: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleReview = this.handleReview.bind(this);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleReview() {
    let productId = (window.location.pathname).substring(1);

    $.post(`http://localhost:3030/${productId}/submit_review`, {
      user_name: 'ShawnChambers',
      product_id: productId,
      review_date: '2019-10-30',
      header: 'This rocks yo',
      review_text: 'No really, it\'s the bee\'s knees',
      rating: '5',
      would_recommend: 1
    }); // practice
    this.setState({
      hasBeenReviewed: true
    });
  }

  render() {
    if (this.state.hasBeenReviewed) {
      return null;
    }
    return (
      <>
        <div>
          <input name='header' type='text' placeholder='What was your overall impression? (Optional)' onChange={this.handleChange}/>
        </div>
        <div>
          <input name='review_text' type='text' placeholder='Share your experience with the product. What did you like or dislike? (Optional)' onChange={this.handleChange}/>
        </div>
        <button onClick={this.handleReview}>POST REVIEW</button>
      </>
    )
  }

}


export default UserReview;