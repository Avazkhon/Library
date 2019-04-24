
function getRequestItemsMods (uuid , callback) {
  const xhr = new XMLHttpRequest();
  const url = `/api/v1/mods/${uuid ? uuid : "510d47db-c463-a3d9-e040-e00a18064a99"}`;

  xhr.open('GET', url);

  xhr.onreadystatechange = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
      let mods = JSON.parse(xhr.response);
      callback(mods)
    }
  }

  xhr.send();
}

export default getRequestItemsMods 
