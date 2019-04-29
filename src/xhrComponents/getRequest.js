
function getRequest(textAndUser, callback) {
  const userName = textAndUser.user.nickname;
  const password = textAndUser.user.password;
  const text = textAndUser.text;
  const xhr = new XMLHttpRequest();
  const url = `/api/v1/items/search.json?q=${text || 'cats'}`;

  xhr.open('GET', url);
  xhr.setRequestHeader('Authorization', `Basic ${btoa(userName + ':' + password)}`);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const array = JSON.parse(xhr.response);
      callback(array);
    }
  };
  xhr.send();
}

export default getRequest;
