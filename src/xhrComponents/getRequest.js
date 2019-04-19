function getRequest (text , callback) {
  const xhr = new XMLHttpRequest();
  const url = 'http://api.repo.nypl.org/api/v1/items/search?q=cats&publicDomainOnly=true';

  xhr.open('GET', url);
  xhr.setRequestHeader('Authorization', 'Token token=qqcvhrm19752modk');

  xhr.onreadystatechange = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
      let array = JSON.parse(xhr.response);
      callback(array)
    }
  }

   xhr.send(null);
}

export default getRequest 