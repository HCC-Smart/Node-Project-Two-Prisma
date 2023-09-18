import express from 'express'
import booksRouter from './books.js'
import authorsRouter from './authors.js'
import bookStoreRouter from './bookstores.js'

const app = express();

app.use(express.json());

app.use('/api/books', booksRouter)
app.use('/api/authors', authorsRouter)
app.use('/api/bookStores', bookStoreRouter)

export default app