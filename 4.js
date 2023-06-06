const boxes = document.querySelectorAll('.box');

addEventListener('scroll' , showBox)

function showBox(){
    const triggerBottom = innerHeight/1.4;

    console.log(innerHeight);

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().bottom;
        console.log(boxTop);
        if (boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })

}
