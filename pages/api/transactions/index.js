import dummyData from '../dummyData';

//mock api for getting all data
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).send(dummyData);
  } else {
    res.status(500).send({ error: 'Not Support' });
  }
}
