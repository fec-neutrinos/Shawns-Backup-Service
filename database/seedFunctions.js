const faker = require('faker');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'dropApp'
  }
});

// var users = [];

// const createFakeUser = () => ({
//   user_name: faker.internet.userName()
// });

const createFakeReview = () => ({
  user_name: faker.internet.userName(),
  product_id: faker.random.number({min:0, max: 5}),
  review_date: faker.date.past(),
  header: faker.lorem.sentence(3),
  review_text: faker.lorem.sentences(3, 3),
  rating: faker.random.number({min:0, max: 5}),
  would_recommend: faker.random.boolean()
})

var seed = function() {
  const fakeReviews = [];
  const numOfFakeReviews = 100;
  for (var i = 0; i < numOfFakeReviews; i ++) {
    fakeReviews.push(createFakeReview());
  }
  // console.log(fakeReviews);
  knex('reviews')
    .insert(fakeReviews)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = {
  seed,
  createFakeReview
}