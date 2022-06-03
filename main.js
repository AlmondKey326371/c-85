canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
r_width = 100;
r_height = 90;
r_img = "rover.png";
nasa_mars_images_array = ["1.jpg","2.jpg","3.jpg","4.jpg"];
random_num = Math.floor(Math.random()*4);
console.log(random_num);
bg_Image = nasa_mars_images_array[random_num];
console.log("background image ="+bg_Image);
r_x = 10;
r_y = 10;
function add(){
         background_imgTag = new Image();
         background_imgTag.onload = uploadBackground;
         background_imgTag.src = bg_Image;
         rover_imgTag = new Image();
         rover_imgTag.onload = uploadrover;
         rover_imgTag.src = r_img;
}
function uploadBackground() {
              ctx.drawImage(background_imgTag, 0,0,canvas.width,canvas.height);
}
function uploadrover(){
              ctx.drawImage(rover_imgTag,r_x,r_y,r_width,r_height);
}
window.addEventListener('keydown',myKeydown);
function myKeydown(e) {
              key_pressed = e.keyCode;
              console.log(key_pressed);
      if (key_pressed == 37) {
                    left();
                    console.log("left");

      }

      if (key_pressed == 39) {
              right();
              console.log("right");
              
}

if (key_pressed == 38) {
              up();
              console.log("up");
            
}
if (key_pressed == '40') {
              down();
              console.log("down");
}
}
function left() {
              if (r_x >= 0) {
                            r_x = r_x - 10;
                            console.log("when left arrow is pressed, x = "+ r_x + "|y = " + r_y);
                            uploadBackground();
                            uploadrover();
              }
}

function right() {
              if (r_x <= 700) {
                            r_x = r_x + 10;
                            console.log("when right arrow is pressed, x = "+ r_x + "|y = " + r_y);
                            uploadBackground();
                            uploadrover();
              }
}

function up() {
              if (r_y >= 0) {
                            r_y = r_y - 10;
                            console.log("when up arrow is pressed, x = "+ r_x + "|y = " + r_y);
                            uploadBackground();
                            uploadrover();
              }
}

function down() {
              if (r_y <= 500) {
                            r_y = r_y + 10;
                            console.log("when down arrow is pressed, x = "+ r_x + "|y = " + r_y);
                            uploadBackground();
                            uploadrover();
              }
}