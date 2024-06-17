window.addEventListener("scroll",show);
function show(){
    let section=document.querySelectorAll("section")
    for(i=0;i<section.length;i++){
        windowheight=window.innerHeight;
        revealtop=section[i].getBoundingClientRect().top
        let revealpoint=150;
        if(revealtop<windowheight-revealpoint){
            section[i].classList.add("active")
        }
    }
    // let height=window.innerHeight;
    // let reveal=200;
    // // let multipleItem=section[1].getBoundingClientRect();
    // console.log(multipleItem)
    // for(i=0;i<section.length;i++){
    //   let multipleItem=section[i].getBoundingClientRect().top;
    //   console.log(multipleItem)
    // }

}