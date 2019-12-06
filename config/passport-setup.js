const passport = require('passport')
const keys = require('./keys')
const User = require('../models/user-model')
const GoogleStrategy = require('passport-google-oauth20');


// passport.serializeUser((user, done) => {
//   // id mongo created automatically, being used here
//   // grabbing info for cookie
//   done(null, user.id)
// });
// passport.deserializeUser((id, done) => {
//   User.findById(id).then((user) => {
//     done(null, user.id)
//   });
// });
// // setup to tell that i want to use google api and this is my credentials
// passport.use(new GoogleStrategy({
//   // options for the google strategy
//   callbackURL: 'http://localhost:3000/auth/google/redirect',
//   clientID: keys.google.clientID,
//   clientSecret: keys.google.clientSecret
//   }, (accessToken, refreshToken, profile, done) => {

//     console.log('ENTERING')
//     // passport callback function. save is async, so we need to wait. console.log profile here if you want to view object
//     // check if user already exists in our db. findOne is async, use promise to wait for aync
//     User.findOne({googleId: profile.id}).then((currentUser) => {
//       if(currentUser) {
//         // already have user
//         console.log('user is' + currentUser);
//         done(null, currentUser);
//       } else {
//         // if not, create user in db
//         new User({
//           username: profile.displayName,
//           googleId: profile.id
//         }).save().then((newUser) => {
//           console.log('new user created' + newuser);
//           done(null, newUser);
//         });
//       }
//     })
//   })
// );

const GitHubStrategy = require('passport-github').Strategy;

// passport.use(new GitHubStrategy({
//     clientID: GITHUB_CLIENT_ID,
//     clientSecret: GITHUB_CLIENT_SECRET,
//     callbackURL: "http://127.0.0.1:3000/auth/github/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ githubId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
  