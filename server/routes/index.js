const router = require('express').Router()
router.get('/',(req, res, next)=>{
    console.log('connected')
})

module.exports = router