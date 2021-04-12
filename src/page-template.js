
 //This is the template for html structure for output file
let GenTeamProfile = teamArray => {
 
    console.log('team array', teamArray)
  
   //Let initialize empty card

    let card = ""  
    
    // Here we loop over array of objects

    for(let i = 0; i < teamArray.length; i++) {
        
        //to catch the final property of each class. Noticed we are using the two pipe symbols || for OR operator
    
        let finalThing = teamArray[i].school || teamArray[i].gitHub || teamArray[i].office
        let objectKeys = Object.keys(teamArray[i])
        let lastAtt = objectKeys[4]
        let finalProp = lastAtt + ": " + finalThing

        if(lastAtt === undefined){
            finalProp = " ";
            console.log(finalProp)
           }else if(lastAtt === 'gitHub'){
             finalProp = (`GitHub : <a href = 'https://www.github.com/${teamArray[i].gitHub}'> ${teamArray[i].gitHub}</a>`)
             console.log(finalProp)
           }
           else{
             console.log(finalProp)
           
         }
        //Here we are making cards for Team Profile Layout. 
        //We used backtick (fancy strings/template strings/template literals), 
        //because we want to interpolate an expression within your string. 

        let {name, role, email, id,} = teamArray[i]

       card+= `
        <div class="card col-md-4" style="width: 18rem; margin:0 auto;">
            <div class="card-body card-header">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
        </div>
        
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
            <li class="list-group-item">Employee ID: ${id}</li>
            <li class="list-group-item"> ${finalProp}</li>
                   
        </ul>
        </div>`
        
    }
    
    //Here we are going to return the complete html necessary
    
    return `

    <!DOCTYPE html>

    <html lang="en">
    
    <head>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      
     
    
    </head>
    
    <body>

        <nav class="navbar">
            <div class="navbar-header">
                <span class="navbar-brand mb-0 h1">Our Team</span>
            </div>
        </nav>
    
        <main class="container">
            <div class="row">
    
             ${card}
    
                
            </div>
    
        </main>
        
    
    
    </body>
    
    </html>` 
}

module.exports = GenTeamProfile;



