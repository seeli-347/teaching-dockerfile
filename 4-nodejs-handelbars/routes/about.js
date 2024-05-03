const express = require('express');
const router = express.Router();



router.get('/' , (req,res) => {
    const myArr = ['Kiran' , 'Trideep' , 'Jo'];
    res.render('about', { text: 'This about page' , values: myArr});
})

router.get('/admin' , (req,res) => {
    const isAdmin = false ;
    res.render('admin', {isAdmin})
})



module.exports = router ;