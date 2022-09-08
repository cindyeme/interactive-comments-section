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
// add comment
const addComment = async (body) => {
  const request = await axios.post(COMMENTS_URL, body);
  return request.data;
}
// update comment
const updateComment = async (id, newObject) => {
  const request = await axios.put(`${COMMENTS_URL}/${id}`, newObject);
  return request.data;
}

// delete comment
const deleteComment = async (id) => {
  const request = await axios.delete(`${COMMENTS_URL}/${id}`);
  return request.data;
};

export const ApiService = { getAllComments, getCurrentUserComments, addComment, updateComment, deleteComment };