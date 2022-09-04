import axios from 'axios';

const BASE_URL = 'http://localhost:3000/comments';

const getAllComments = async () => {
  const request = await axios.get(BASE_URL);
  return request.data;
}

export default { getAllComments };