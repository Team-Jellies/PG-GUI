const router = require('express').Router()
const passport = require('passport')

// auth login
router.get('/login', (req, res) =>{
    res.render('login')
  });
  //auth logout
router.get('/logout', (req,res) => {
//handle with passport
res.render('logout');
})

router.get('/settings', (req,res) => {
    //handle with passport
    res.render('settings');
    })
  //auth with google to go to the consent screen NOTE: first time it runs authenticate
  // specifying the scope
  router.get('/google', passport.authenticate('google', {
      scope: ['profile']
    }, (req, res) => {
        console.log(req)
        console.log(res)
    }));
    // callback router for google to redirect. at this point we recieve a code in query string. use this code to respond to google what we want. 
    router.get('/google/redirect', passport.authenticate('google'), (err, req, res, next) => {
        console.log('?????')
    // access current user
      //custom error handler to catch any erros, such as TokenError
    if(err.name === 'TokenError') {
      // redirect them back to the login page
      res.redirect('/');
    } else {
      // handle other errors here
    }
  }, (req,res) => {
    // On success, redirect back to dashboard
    res.send(req.user);
  });
  // router.get('/google/redirect', passport.authenticate(‘google’), (req, res) => {
  //   // access current user
  //   res.send(req.user);
  // })
  module.exports = router;
  

