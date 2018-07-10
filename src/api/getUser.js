import env from '../env';

export default function getUser() {
  return fetch(`${env.API_BASE_URL}/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('get user data------------', data);
      return data;
    })
    .catch(err => {
      console.log('get user error: ', err);
    });
}
