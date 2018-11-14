import logger from 'console';
import express, { Router } from 'express';

const app = express();
const router = Router();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', router);

router.get('/', (req, res) => res.status(200).json({
  success: true,
  message: 'Send It API',
}));

app.listen(PORT, () => {
  logger.log(`Server is running on localhost:${PORT}`);
});

export default app;

