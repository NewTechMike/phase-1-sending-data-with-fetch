// Add your code here
function submitData(name, email){
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }, 
    body: JSON.stringify({
      "name": name,
      "email": email
    })
  })
  .then(response => response.json())
   //console.log(response.JSON)
  .then(object => doThing(object))
  //console.log(document.body.textContent)

  .catch(function(error){
    document.body.append(error)
  });
}

function doThing(object){
  //console.log(body)
  const p = document.createElement("p")
  //document.querySelector("body").innerHTML = object.id
  p.textContent = object.id;
  console.log(p)
  //console.log(JSON.stringify(object.id))
  document.body.appendChild(p)
  console.log(p)
  return p

}

submitData('mike', 'xero5k@yahoo.com')

