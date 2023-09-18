import express from 'express';
import prisma from './lib/index.js';

const router = express.Router();

router.get("/", async (req, res) => {
 try {
    const bookStores = await prisma.bookStore.findMany();
    
 } catch (err) {
    
 }
});

router.get('/:id', async (req, res) => {
    try {
        
        const {id} = req.params;

        const bookStore = await prisma.bookStore.findUnique({
            where: {
                id: Number(id),
            },
        });

        if(!bookStore) {
            return res.status(404).json({status: 404, message: "no books in BookStore"})
        }

        res.json(bookStore)

    } catch (error) {
        res.status(500).json({status: 500, message: error.message})
    }
});

router.post('/create_bookStore', async (req, res) => {
    try {
        
        const {bookId, name, location} = req.body;

        const newBookStore = await prisma.bookStore.create({
            data: {
                bookId,
                name, 
                location,
            },
        });

        if(!newBookStore) {
            return res.status(400).json({status: 400, message: "err"})
        }

        res.status(200).json({status: 200, message: "BookStore created"})

    } catch (error) {
        res.status(500).json({status: 500, message: error.message})
    }
});

router.put('/update_bookStore/:id', async (req, res) => {
    try {
        
        const {id} = req.params;
        const {bookId, name, location} = req.body;

        const updateBookStore = await prisma.bookStore.update({
            where: {
                id: Number(id),
            },

            data: {
                bookId,
                name,
                location,
            }
        });

        if(!updateBookStore) {
            return res.status(400).json({status: 400, message: "not updated"})
        }

        res.status(200).json({status: 200, message: "BookStore  updated"})

    } catch (error) {
        res.status(500).json({status: 500, message: error.message})
    }
})

router.delete('/delete_bookStore/:id', async (req, res) => {
    try {
        
        const {id} = req.params;

        const deleteBookStore = await prisma.bookStore.delete({
            where: {
                id: Number(id),
            },
        });

        if(!deleteBookStore) {
            return res.status(400).json({status: 400, message: "err"})
        }

        res.status(200).json({status: 200, message: `BookStore ${id}  deleted!`})

    } catch (error) {
        res.status(500).json({status: 500, message: error.message})
    }
});

export default router