const router = require('express').Router();

const {
    getTasks,
    postTasks,
    putTasks,
    deleteTasks,
} = require('../controllers/tasks.controllers')

router.get('/tasks', getTasks);

router.post('/tasks', postTasks);

router.put('/tasks/:id', putTasks);

router.delete('/tasks/:id', deleteTasks);




module.exports = router;