import express from 'express';
import { threadList } from '../controllers/thread.js';

const threadRouter = express.Router();

threadRouter.get('/thread', threadList);
threadRouter.put('/thread/:id', threadList);
threadRouter.post('/thread/:id/', threadList);
threadRouter.delete('/thread/:id/', threadList);

export default threadRouter;
