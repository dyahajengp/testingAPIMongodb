const username = encodeURIComponent('ajeng');
const password = encodeURIComponent('ajeng');

module.exports = {
  url: `mongodb+srv://${username}:${password}@cluster0.fotmt.mongodb.net/foodinApp?retryWrites=true&w=majority`,
};
