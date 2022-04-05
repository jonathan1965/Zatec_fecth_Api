fetch("https://jsonplaceholder.typicode.com/users").then(
  response=>{
      response.json().then(
          data=>{
              console.log(data)
              if(data.length > 0) {
                 var temp = ""    
              data.forEach((u) => {
                  temp +="<tr>";
                  temp +="<td>"+u.id+"</td>";
                  temp +="<td>"+u.name+"</td>";
                  temp +="<td>"+u.username+"</td>";
                  temp +="<td>"+u.email+"</td>";
                  temp +="<td>"+u.address.street+"</td>";
              });
              document.getElementById("data").innerHTML = temp
              }
          }
      )
  }
)