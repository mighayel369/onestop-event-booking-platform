import app from './app.js';
import { connectDB } from './infrastructure/database/mongo.connection.js';
import "dotenv/config";
const PORT = process.env.PORT || 5000;
const startServer = async () => {

    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log('databse connected')
        })

    }
    catch (error) {
        console.log(error)
    }
}

startServer()