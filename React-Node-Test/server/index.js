const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 4000; // Choose any available port you prefer

app.use(cors());

app.get('/recipe', (req, res) => {
  console.log("liii");
  const description = req.query.description; // Access the description query parameter
  console.log(description);

  const recipeData = {
    id: 0,
    recipe_image: 'string',
    title: 'string',
    description: 'string',
    making_time: 'string',
    is_valid: true,
    is_feature: true,
    rating: '-8.',
    user: {
      id: 0,
      username: '7bOMPCgx8IpVxFcP4nnxuKQc5zxJw.Dbtx4P0ChUs@r4424ws@jrcYHE',
      email: 'user@example.com',
      first_name: 'string',
      last_name: 'string',
      image_path: 'string',
      points: '-1513307.84',
      registration_date: '2023-09-08T13:14:18.196Z',
    },
  };

  // Send the JSON response
  res.json(recipeData);
  console.log("test");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
