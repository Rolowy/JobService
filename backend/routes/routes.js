const express = require('express');
const Users = require('../models/Users');

const router = express.Router()

module.exports = router;

router.get('/post', async (req, res) => {
    const user = new Users({
        username: 'Test',
        password: '123'
    })
    await user.save()
    console.log(user)
})

router.get('/', (req, res) => {
    res.send('Get All API')
})

router.get('/get/:id', (req, res) => {
    res.send(req.params.id)
})

router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})