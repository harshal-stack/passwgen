const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const Lowercase = "abcdefghijklmnopqrstuvwxyz"
const Numbercase = "1234567890"
const character ="!@#$%^&*()_+"

const numbericon = document.getElementById("numbercase")
const lowericon = document.getElementById("lowercase")
const uppericon = document.getElementById("uppercase")
const symbolicon = document.getElementById("symbolcase")
const length =document.getElementById("length")



const randomdata = (dataset) => {

   return dataset[Math.floor(Math.random()*dataset.length)]

}

const passwords = (password = "" )=>{
 
   if(numbericon.checked){
      password += randomdata(Numbercase)
   }

   if(lowericon.checked){
      password += randomdata(Lowercase)
   }
   if(uppericon.checked){
      password += randomdata(Uppercase)
   }
   if(symbolicon.checked){
      password += randomdata(character)
   }

   if(password.length <= length.value){
     return passwords(password)
   }


   document.querySelector(".password_box").innerHTML= password
}
passwords()


