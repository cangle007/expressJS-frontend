import getUser from '../../api/getUser';

export default function getUserProcess() {
  return (dispatch, getState) => {
    return getUser().then(data => {
      console.log('what is my data---------', data);
    });
  };
}
