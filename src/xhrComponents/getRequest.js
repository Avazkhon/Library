
function getRequest (text , callback) {
  const xhr = new XMLHttpRequest();
  const url = `/api/v1/items/search.json?q=${text? text : "cats"}`;

  xhr.open('GET', url);
  // if you activate will always be an authentication request
  // xhr.setRequestHeader('Authorization', 'Token token=qqcvhrm19752modk');

  xhr.onreadystatechange = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
      let array = JSON.parse(xhr.response);
      callback(array)
    }
  }

  xhr.send();
}

export default getRequest 
