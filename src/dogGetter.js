import axios from 'axios';

const getDogs = () => axios.get('https://random-dogs-api.herokuapp.com/dogs/23');

// const getDogs = () => new Promise((resolve, reject) => {
//   axios.get('https://random-dogs-api.herokuapp.com/dogs/23')
//     .done((data) => {
//       resolve(data);
//     })
//     .fail((error) => {
//       reject(error);
//     });
// });

export default getDogs;
