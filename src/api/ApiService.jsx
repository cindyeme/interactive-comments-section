import axios from 'axios';
import { COMMENTS_URL, CURRENT_USER_URL } from './routes';

// get all comments
const getAllComments = async () => {
  const request = await axios.get(COMMENTS_URL);
  return request.data;
}
// get current user
const getCurrentUserComments = async () => {
  const request = await axios.get(CURRENT_USER_URL);
  return request.data;
}

export default { getAllComments, getCurrentUserComments };