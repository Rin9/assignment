import dummyData from '../dummyData';
import { getRewards } from './utils';

//mock api for getting all user data
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).send(getRewards(dummyData));
  } else {
    res.status(500).send({ error: 'Not Support' });
  }
}
