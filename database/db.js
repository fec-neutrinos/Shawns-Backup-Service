const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'dropApp'
  }
});
// const seed = require('/seeding');

// const seedReviews = function() {
//   seed();
// }

const addReview = function(review, cb) {
  knex('reviews').insert(review)
    .then((review) => {
      console.log(`inserted ${review} into reviews table`);
    })
    .catch((err) => {
      cb(err);
    });
}

const getReviews = function(productId, cb) {
  // console.log('inside getReviews', productId['product_id']);
  knex.select().table('reviews').where('product_id', productId['product_id'].toString()).orderBy('review_date', 'desc')
    .then((data) => {
      cb(data);
    })
    .error((err) => {
      cb(err);
    })
}

module.exports = {
  getReviews,
  addReview
}