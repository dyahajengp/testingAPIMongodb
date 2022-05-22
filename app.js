const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected!');
  }).catch((error) => {
    console.log('Cannot connect to database!', error);
    process.exit();
  });

app.get('/', (req, res) => {
  res.json({
    message: 'welcome',
  });
});

require('./app/routes/post.routes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
