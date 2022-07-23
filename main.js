canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	image_tag=new Image();
	image_tag.src=get_image;
	image_tag.onload=uploadimage()
}
function uploadimage(){
	ctx.drawImage(image_tag,block_x,block_y,100,100);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image("rr.jpg");
		block_x=1
		block_y=1
	}
	if(keyPressed == '71')
	{
		new_image("gr.png")
		block_x = 100;
		block_y=100;
	}
	
	if(keyPressed == '89')
	{
		new_image("yr.png")
		block_x =200;
		block_y=200;
	
	}
	if(keyPressed == '80')
	{
		new_image("pr.png")
		block_x = 300;
		block_y=300;
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		new_image(br.png)
		block_x = 400;
		block_y=400;
	// upload blue ranger
	}
	
}

