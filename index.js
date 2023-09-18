// Import server here and start the application
import app from './api/server.js'

const port = 9000

app.listen(port, () => console.log(`Server running on ${port}`))