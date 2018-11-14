import express from 'express';
import Parcel from '../controllers/Parcel';

const ParcelInstance = new Parcel([], 'USER_001');

const router = express.Router();

router.route('/')
  .post(ParcelInstance.create)
  .get(ParcelInstance.getAll);

export default router;
