
import express from 'express';
import bodyParser from 'body-parser';
import routes from './src/routes/index';

const app = express();

// to parse body json
app.use(bodyParser.json());
// extended false means we are not going to handle nested object in body
app.use(bodyParser.urlencoded({
  extended: false
}));

// add routes
app.use('/api/v1',
  routes);

// default route
app.get('*', (req, res) => {
  res.send('End point not found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
