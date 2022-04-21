console.log(this); //global아님 빈객체

function a(){
    console.log(this === global);
}

a(); //true
