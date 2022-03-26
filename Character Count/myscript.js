function check()
{
    var input = document.getElementById("word").value;

    console.log(input);

    var count=input.length;

    console.log(count);

    if(count > 5){
        console.log("more than 5");
    }
    else{
        console.log("less than 5");
    }
}