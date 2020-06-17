import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemController = new ItemsController();

routes.get('/items', itemController.index);

routes.post('/points', upload.single(), pointsController.create);
routes.get('/points/', pointsController.index);
routes.get('/points/:id', pointsController.show);
export default routes;