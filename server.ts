import express from 'express';
import morgan from 'morgan';
import { flipCoin } from './flipCoin';

const app = express();
const apiPort = 3000;

app.use(morgan('combined'));

app.get('/flip', (_req: express.Request, res: express.Response) => {
  res.status(200).json({ result: flipCoin() });
});

app.listen(apiPort, () => {
  console.log('Express server listening on port ' + apiPort);
});
