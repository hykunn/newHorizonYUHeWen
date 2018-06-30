import axios from 'axios'
import querystring from 'querystring'

axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

//POST
const creatQuestion = (params) => axios.post('/v1/questions',querystring.stringify(params))
  .then(response => response.data)
  .catch(error => console.log(error));
const login = (params) => axios.post('/v1/login',querystring.stringify(params))
  .then(response => response.data)
  .catch(error => console.log(error));
const regist = (params) => axios.post('/v1/register',querystring.stringify(params))
  .then(response => response.data)
  .catch(error => console.log(error));

//GET
const queryQuestion = () => axios.get('/v1/questions')
  .then(response => response.data)
  .catch(error => console.log(error));
const queryLessons = () => axios.get('/v1/lessons')
  .then(response => response.data)
  .catch(error => console.log(error));


  const Aboutus = () => axios.get('/v1/aboutus')
  .then(response => response.data)
  .catch(error => console.log(error));

export { creatQuestion, queryQuestion, queryLessons, login, regist ,Aboutus};
