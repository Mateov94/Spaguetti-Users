const router = require('express').Router()

const usersServices = require('./users.services')

//? /users
//? /users/:id

router.get('/users', usersServices.getAllUsers)
router.post('/users', usersServices.postUser)

router.get('/users/:id', usersServices.getUserById)
router.patch('/users/:id', usersServices.patchUser)
router.delete('/users/:id', usersServices.deleteUser)

module.exports = router