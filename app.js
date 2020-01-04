// imported modules
const express = require('express'),
  cors = require('cors'),
  path = require('path'),
  bodyParser = require('body-parser'),
  helmet = require('helmet'),
  userRouter = require('./routers/user.router'),
  movieRouter = require('./routers/movies.router'),
  dushbordRouter = require('./routers/dushbord.router'),
  seriesRouter = require('./routers/series.router'),
  dataSiteRouter = require('./routers/dataSite.router'),
  engines = require('consolidate');

// Setup Express.js
const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(helmet());
app.use(cors());

app.use(express.static(path.join(__dirname, 'veiws')))


app.set('views', __dirname + '/veiws');
app.engine('html', engines.mustache);
app.set('view engine', 'html');


// app.use((req, res, next) => {
//     let token = req.header('Authorization') || req.headers['Authorization'] || req.headers['x-access-token']
//     if (token) {
//         JWT.verify(token, 'RESTFULAPIs', (err, decode) => {
//             if (err) {
//                 res.json({msg: 'errer'})
//                 req.user = undefined
//             }
//             else {
//                 req.user = decode
//                 next()
//                 console.log(decode)
//             }

//         })
//     } else {
//         req.user = undefined
//         next();
//     }
// })

// app.use('/profile', userCont.loginRequired, (req, res) => res.json({ ftouh: 'ftouh' }))
app.use('/api/auth', userRouter)
app.use('/api/movies', movieRouter)
app.use('/api/series', seriesRouter)
app.use('/api/dushbord', dushbordRouter)
app.use('/api/datasite', dataSiteRouter)

app.get('*', (req, res) => {
  res.render('index')
})
//  POSRT server
let port = process.env.PORT || 3000
app.listen(port, () => {
  try {
    console.log('server runing on PORT ' + port)
  } catch (err) {
    console.log(err)
  }
})

// Error
app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error('Something went wrong'));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
