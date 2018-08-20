import axios from 'axios';
import store from '../index';
import { getCommentsSuccess, setCommentSuccess, getCommentsPostsSuccess, setCommentsPostSuccess} from '../actions/commentActions';
import _ from 'lodash';

export function getComments(category_id) {
  return axios.get('/api/v1/comments.json')
    .then(response => {
      store.dispatch(getCommentsSuccess(_.filter(response.data, comment => category_id == comment.category_id)));
    })
    .catch((error) => {console.log(error)})
}

export function addNewComment(category_id, author, content) {
  axios.post( '/api/v1/comments', { comment: {category_id, author, content} })
  .then(response => {
    store.dispatch(setCommentSuccess(response.data));
  })
  .catch((error) => {console.log(error)})
}

export function getCommentsPosts(post_id) {
  return axios.get('/api/v1/commentsposts.json')
    .then(response => {
      store.dispatch(getCommentsPostsSuccess(_.filter(response.data, comment => post_id == comment.post_id)));
    })
    .catch((error) => {console.log(error)})
}

export function addNewCommentPost(post_id, author, content) {
  axios.post( '/api/v1/commentsposts', { commentspost: {post_id, author, content} })
  .then(response => {
    store.dispatch(setCommentsPostSuccess(response.data));
  })
  .catch((error) => {console.log(error)})
}

export  function validateComment (author, content) { 
  const errors = [];
  if ( ( ((/(^)([A-ZА-Я][A-ZА-Яa-zа-я])/g).test(author)) ) === false ) {
    errors.push("Мінімум 2 слова по 2 літери, перше слово з великої літери");
  }

  if ( ((/\./g).test(author)) === false ) {
    errors.push("Має включати ‘.’");
  }

  if ( ((/(\s+)/g).test(author)) === false ) {
    errors.push("Має включати ‘ ’");
  }
    
  if (content.length === 0) {
    errors.push("Має включати description");
  }

  return errors;
}
