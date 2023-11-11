
let checkbox = document.getElementById('checkbox-menu');
let menu = document.getElementById('menu');

function clickMenu(){
    if(checkbox.checked){
        menu.style.display='block';
    }else{
        menu.style.display='none';
    }

}