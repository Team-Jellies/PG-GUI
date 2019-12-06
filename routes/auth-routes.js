const router = require('express').Router()
const passport = require('passport')


// auth login
router.get('/login', (req, res) => {
    res.render('login')
})

// auth logout
router.get('/logout', (req, res) => {
    //handle with passport
    res.send('loggin out')
})


// auth with github
router.get('/github', passport.authenticate('github', {
    scope: ['profile']
}))

router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
    res.send('you reached the callback URI', req.user)
})
 
module.exports = router