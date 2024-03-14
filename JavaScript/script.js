document.getElementById("alertName").onclick=function(){
    let fullName="Umar Hayat";
    alert(fullName);
    let statement="let fullName = 'Umar Hayat' <br> alert(fullName)"
    document.getElementById("statement").innerHTML=statement
}
document.getElementById("alertNumber").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let number=123;
    alert(number);
    let statement="let number = 123 <br> alert(number)"
    document.getElementById("statement").innerHTML=statement
}
document.getElementById("showVariableName").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let statement="<u class='text-decoration-none' style='text-align:left;'><li>A variable name cannot contain space</li><li>A variable name can contain only letter, number, dollar sign and underscore</li><li>Though a variable name cannot any JavaScript keyword , it can contain keyword For example, <code>myVar</code> and <code>alertUser</code> is legal</li> <li>Capital letter can fine but carefully. Variable name are case sensitive. A <code>rose</code> is not <code>Rose</code>.If you assign string floribundas the <code>rose</code> and then ask the javascript to value assign <code>Rose</code>, you will come empty</li></u>"
    document.getElementById("statement").innerHTML=statement
}
document.getElementById("showCamelCase").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let statement="<u class='text-decoration-none' style='text-align:left;'><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li></u>"
    document.getElementById("statement").innerHTML=statement
}
document.getElementById("sumNumber").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let num1=2;
    let num2=3;
    let sum=num1+num2;
    let statement="let num1=2 <br> let num2=3 <br>let sum=num1+num2"
    document.getElementById("statement").innerHTML=statement
    document.getElementById("output").innerHTML=sum

}
document.getElementById("subtractNumber").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let num1=7;
    let num2=5;
    let subtract=num1-num2;
    let statement="let num1=7 <br> let num2=5 <br>let subtract=num1-num2"
    document.getElementById("statement").innerHTML=statement
    document.getElementById("output").innerHTML=subtract

}
document.getElementById("multiplyNumber").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let num1=2;
    let num2=3;
    let multiply=num1*num2;
    let statement="let num1=2 <br> let num2=3 <br>let multiply=num1*num2"
    document.getElementById("statement").innerHTML=statement
    document.getElementById("output").innerHTML=multiply

}
document.getElementById("divisionNumber").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let num1=6;
    let num2=3;
    let division=num1/num2;
    let statement="let num1=6 <br> let num2=3 <br>let division=num1/num2"
    document.getElementById("statement").innerHTML=statement
    document.getElementById("output").innerHTML=division

}
document.getElementById("calculateSomeNumber").onclick=function(){
    document.getElementById("statement").innerHTML=""
    document.getElementById("output").innerHTML=""
    let calculateSomeNumber=(10 + 3) * (10 - 3) / 3
    let statement="(10 + 3) * (10 - 3) / 3;"
    document.getElementById("statement").innerHTML=statement
    document.getElementById("output").innerHTML=calculateSomeNumber

}