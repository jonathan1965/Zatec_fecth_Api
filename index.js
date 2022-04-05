const displayUser = document.getElementById("users");

displayUser.addEventListener("click", allUsers)

function allUsers(){
fetch("https://jsonplaceholder.typicode.com/users").then(
  response=>{
      response.json().then(
          data=>{
              console.log(data)
              if(data.length > 0) {
                 var temp = ""    
              data.forEach((user) => {
                  temp +="<tr>";
                  temp +="<td>"+user.id+"</td>";
                  temp +="<td>"+user.name+"</td>";
                  temp +="<td>"+user.username+"</td>";
                  temp +="<td>"+user.email+"</td>";
                  temp +="<td>"+user.address.street+ ''+ user.address.catchPhrase+"</td>";
                  temp +="<td>"+user.phone+"</td>";
                  temp +="<td>"+user.website+"</td>";
                  temp +="<td>"+user.company.name+"</td>";

              });
              document.getElementById("data").innerHTML = temp
              }
          }
      )
  }
)
}