function preload(){

}

function setup(){
canvas= createCanvas(640,480);
canvas.position(110,250);
video= createCapture(VIDEO);
video.hide();

tint_color="";
}

function draw(){
    background("blue");
image(video,20,20,600,440);
tint(tint_color);


}


function  filter_tint(){
    tint_color= document.getElementById("color_name").value;
}

function take_snapshot(){
    save("student_name.png");
}