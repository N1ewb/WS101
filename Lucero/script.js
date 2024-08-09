const fullName = document.getElementById("fullName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const telNumber = document.getElementById("telNumber")
const address = document.getElementById("address")
const subscribe = document.getElementById("subscribe")

const errorMessage = document.getElementById("error-message")
const displayMessage = document.getElementById("display-message")

document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault()
    const gender  = document.querySelector('input[name=gender]:checked')
    const undefinedField = []

    const IDs = [
        {
            name:"fullName", 
            value:fullName.value
        }, 
        {
            name:"email", 
            value:email.value
        }, 
        {
            name:"password", 
            value:password.value
        },
        {
            name:"gender",
            value:gender.value
        },
        {
            name:"telNumber",
            value:telNumber.value
        },
        {
            name:"address",
            value:address.value,
        }
          
    ]

    for (i = 0; i < IDs.length; i++) {
        if(IDs[i].value.length === 0){
            undefinedField.push(IDs[i].name)
            console.log(`${IDs[i].name} is undefined`) 
        } 
    }

    if (undefinedField.length > 0){
        errorMessage.classList.add("show")
        errorMessage.innerHTML = `Please full up form, missing fields ${undefinedField}`
    } else {
        displayMessage.classList.add("display")
        displayMessage.innerHTML = `Form filled up, Success`
    }

  });

