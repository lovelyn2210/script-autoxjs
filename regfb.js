var common=require('/sdcard/Download/common.js')
shell("pm clear com.facebook.katana");
shell("am force-stop com.facebook.katana");
app.launch("com.facebook.katana");
className("android.widget.Button").desc("Create new Facebook account").click();
text("Next").click();
var Fname
[Fname,Lname,Username,Pass,Day,Month,Year,gioitinh] = common.RandomProfile();
toast(util.format("username: %s Password: %s First name: %s Giới Tính : %s", Username, Pass, Fname , gioitinh));
text("First Name").setText(Fname);
sleep(500);
text("Last Name").setText(Lname);
text("Next").click();

if (Month==1){
    var MonthText = "Jan";}
else if (Month==2){
    var MonthText = "Fe";}
else if (Month==3){
    var MonthText = "Mar";}
else if (Month==4){
    var MonthText = "Apr";}
else if (Month==5){
    var MonthText = "May";}
else if (Month==6){
    var MonthText = "Jun";}
else if (Month==7){
    var MonthText = "Jul";}
else if (Month==8){
    var MonthText = "Aug";}
else if (Month==9){
    var MonthText = "Sep";}
else if (Month==10){
    var MonthText = "Oct";}
else if (Month==11){
    var MonthText = "Nov";}
else if (Month==12){
    var MonthText = "Dec";}
//lấy ngày tháng hôm nay để tìm text 
var dateObj = new Date(Date.now());
var month1 = dateObj.toString().split(' ')[1];
var date1 = ('0' + dateObj.getDate()).slice(-2);
var year1 = dateObj.getFullYear();
year1 = year1 -1 ;

text(month1).setText(MonthText)
text(date1).setText(Day);
text(year1).setText(Year);

className("android.widget.EditText").click();
sleep(100);
className("android.widget.EditText").click();
sleep(500);
text("Next").click();
text(gioitinh).click();
text("Next").click();
text("Sign up with email address").click();
//text("Yes").click();
var email = Username +"@hotmail.com";
className("android.widget.EditText").text("Email address").setText(email);
text("Next").click();
className("android.widget.EditText").text("Password").setText(Pass);
sleep(500);
text("Next").click();
sleep(1000);
text("Sign up").click();
sleep(5000);
while (text("Something went wrong. Please try again.").exists()) {
    toast("Something went wrong. Please try again.");
    text("Next").click();
    //text("Yes").click();
    //className("android.widget.EditText").text("Password").setText(Pass);
    sleep(1500);
    text("Next").click();
    sleep(1500);
    text("Next").click();
    sleep(1000);
    text("Sign up").click();
    sleep(5000);
}
className("android.widget.ProgressBar").findOne(10000);
