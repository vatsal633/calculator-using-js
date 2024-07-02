
//fucntion for displaying values on screen
let buttons = document.querySelectorAll('.num-buttons')
let string = ""

Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string)
            document.querySelector('.input-bar').value = string
            
        }

        else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('.input-bar').value = string
        }

        else{
            console.log(e.target)
            string = string + e.target.innerHTML
            document.querySelector('.input-bar').value = string
        }
        })
})