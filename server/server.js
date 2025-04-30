require('dotenv').config();
const app = require('./app');
const connectMongoDB = require('./config/mongo.js');
const sequelize = require('./config/postgres');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectMongoDB();
    console.log('connectedToMongoDB')
    await sequelize.sync(); 
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();
