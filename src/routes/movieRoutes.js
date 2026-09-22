import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'movies get endpoint reached.'})
})

router.post('/', (req, res) => {
    res.json({message: 'movies post endpoint reached.'})
})

router.put('/', (req, res) => {
    res.json({message: 'movies put endpoint reached.'})
})

router.delete('/', (req, res) => {
    res.json({message: 'movies delete endpoint reached.'})
})


export default router;