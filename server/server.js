import logger from 'console';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.status(200).json({
  success: true,
  message: 'Welcome home',
}));

app.listen(PORT, () => {
  logger.log(`Server is running on localhost:${PORT}`);
});
