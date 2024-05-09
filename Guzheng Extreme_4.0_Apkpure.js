requestScreenCapture(false);


while(true){
    var img = captureScreen();
let Buttontrang = images.findMultiColors(img,"#fefefe",[[3,-55,"#fefefe"],[-8,-56,"#fefefe"]],{region:[2,295,1277,10],threshold:[25]})


//let Taptocontinue  = images.findMultiColors(captureScreen(),"#fff437",[[24,-4,"#fefe45"],[36,4,"#feff47"]],{threshold:[26]})
if (Buttontrang!=null) {
    sleep(100)
    click(Buttontrang.x,Buttontrang.y+150);
    
}
let ButtonXanh = images.findMultiColors(img,"#42ded9",[[3,-55,"#42ded9"],[-8,-56,"#42ded9"]],{region:[2,295,1277,10],threshold:[50]})
if (ButtonXanh!=null) {
    sleep(100)
    click(ButtonXanh.x,ButtonXanh.y+350);
    
}
let ButtonVang = images.findMultiColors(img,"#e5b55a",[[3,-55,"#e5b55a"],[-8,-56,"#e5b55a"]],{region:[2,295,1277,10],threshold:[80]})
if (ButtonVang!=null) {
    sleep(100)
    click(ButtonVang.x,ButtonVang.y+350);
    
}
img.recycle();
sleep(50)
}
