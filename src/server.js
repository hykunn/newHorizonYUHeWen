import axios from 'axios'
import querystring from 'querystring'
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

const queryLessons = () => axios.get('/v1/lessons')
  .then(response => response.data)
  .catch(error => console.log(error));
  
const queryDetails = (lesson_id) => axios.get('/v1/lessons',{parmas:{id:lesson_id}})
	.then(response => response.data)
  .catch(error => console.log(error));
  
const queryTeachers = () => axios.get('/v1/teachers')
  .then(response => response.data)
  .catch(error => console.log(error));

export { queryLessons, queryTeachers };
