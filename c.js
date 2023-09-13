function displaydata(data){

    display.value+=data

}

function allclear(){


    display.value=''
}

function find(){
    display.value=eval(display.value)
}

function backspace(){
display.value=display.value.slice(0,-1)
}
