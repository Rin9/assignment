import dummyData from '../dummyData';
import { getRewards } from './utils';

//mock api for getting user data by userID
export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  if (method === 'GET') {
    const userData = dummyData.filter(
      ({ userID }) => Number(userID) === Number(id),
    );
    if (userData.length === 0) {
      res.status(404).send({ error: 'failed to fetch data' });
    }
    res.status(200).send(getRewards(userData));
  } else {
    res.status(500).send({ error: 'Not Support' });
  }
}
