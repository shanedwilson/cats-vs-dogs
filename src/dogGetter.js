import axios from 'axios';

// const getDogs = () => {
//   return new Promise ((resolve, reject) => {
//     axios.get('https://random-dogs-api.herokuapp.com/dogs/23');
//     .then((data) => {
//       resolve(data);
//     })
//     .catch((err) => {
//       reject(err);
//     })
//   });
// };

const getDogs = () => axios.get('https://random-dogs-api.herokuapp.com/dogs/23');

export default { getDogs };
