loginBtn.addEventListener("click",function(){
    var nameInput = nameBtn.value;
    var atchecker = nameInput.includes("@");
    var dotchecker = nameInput.includes (".")
    var spacechecker = nameInput.includes (" ")
    console.log(nameInput.length);
    if(nameInput > 10 || atchecker == false || dotchecker == false || spacechecker == false){
        nameBtn.className += 'hint--bottom hint--info hint--rounded';
        console.log('error happened')
    }
})
