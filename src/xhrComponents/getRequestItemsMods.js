
function getRequestItemsMods(uuidAndUser, callback) {
  const userName = uuidAndUser.user.nickname;
  const password = uuidAndUser.user.password;
  const uuid = uuidAndUser.uuid;
  const xhr = new XMLHttpRequest();
  const url = `/api/v1/items/item_details/${uuid || '510d47db-c463-a3d9-e040-e00a18064a99'}`;

  xhr.open('GET', url);
  xhr.setRequestHeader('Authorization', `Basic ${btoa(userName + ':' + password)}`);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const itemsMods = JSON.parse(xhr.response);
      callback(itemsMods);
    }
  };

  xhr.send();
}

export default getRequestItemsMods;
