
async function userCreation(){
  const newUser = ()=> {
    try{
    const name = document.getElementById("name-input");
    const password = document.getElementById("password-input");
    console.log(`then us: ${name.textContent} pass: ${password.textContent}`)
    } 
    catch(err){
        alert(`Sorry we have error with ${err}`);
    }
    finally{
        alert('The register is done =)');
    }
}  
}


let pokeconume = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
console.log(pokeconume)

//const submitButton = document.getElementById("submit-btn");
//submitButton.addEventListener('click',userCreation());

