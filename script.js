var but = document.getElementById("but");
var num = 0
var img = document.getElementById("img")
var images = ["./account.jpg","./achieve.jpg","./airport.jpg","./balance.jpg","./bedroom.jpg","./biscuit.jpg"]
var ans = ["account","achieve","airport","balance","bedroom","biscuit"]
var input = document.getElementById("input");
var score = document.getElementById("score");
var content = document.getElementById("content");
var resp = document.getElementById("resp");
but.addEventListener("click",function(){
    var value = input.value
    if(value == ans[num]){
        num++;
        img.src = images[num]
        input.value = ""
        score.innerHTML = num
        resp.innerHTML  = "Correct";
        resp.style.color = "green";
    } 
    
    else{
         resp.innerHTML = "worng";
         resp.style.color = "red";
        }

        

        if(num == 6){
            content.style.display = "none"
            document.getElementById("cong").style.display = "inline"
        }

        setTimeout(function(){
            resp.style.display = "none"
        },100)

})