$("#calc").click(function(){
    var age = $("#age").val();
    var weight = $("#weight").val();
    var height = $("#height").val()/100;
    if (age != 0 && !isNaN(age) && weight != 0 && 
    !isNaN(weight) && height != 0 && !isNaN(weight) ){
        var bmi = weight/(Math.pow(height,2))
        if (bmi < 18.5){
            $("#result").text(`you are skinny af start eating or you wont ever get laid nigga, your bmi is ${bmi.toFixed(2)}`)
        }
        else if (bmi>18 && bmi < 25) {
            $("#result").text(`you are normal bitch just keep your shit the way it is, your bmi is ${bmi.toFixed(2)}`)
        }
        else{
            $("#result").text(`you are the reason african kids are starving stop eating you fat fuck, your bmi is ${bmi.toFixed(2)}`)
        }
    }
    else{
        $("#result").text('fill up all the details you blind ass') 
    }
})