const fetch = require('node-fetch');
const seed = require('../database/seedFunctions.js');


// test 100 seeded into database

test('should make fake review with 7 parameters', done => {
  const fakeReview = seed.createFakeReview();
  var count = 0;
  for (var key in fakeReview) {
    if (fakeReview[key] !== undefined) {
      count ++;
    }
  }
  expect(count).toBe(7);
  done();
});


// test all reviews retrieved have product_id matching endpoint

test('should return reviews for products with product ID matching url endpoint', done => {
  const test_id = 5;
  return fetch(`http://localhost:3030/${test_id}/reviews`)
    .then((result) => {
      return result.json();
    })
    .then((reviews) => {
      reviews.forEach((review) => {
        expect(review.product_id).toBe(test_id);
      })
    })
    .then(() => {
      done();
    });
});