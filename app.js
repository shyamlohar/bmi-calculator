
$("#calc").click(function () {
    var age = $("#age").val();
    var weight = $("#weight").val();
    var height = $("#height").val() / 100;
    if (age != 0 && !isNaN(age) && weight != 0 &&
        !isNaN(weight) && height != 0 && !isNaN(weight)) {
        var bmi = weight / (Math.pow(height, 2))
        if (bmi < 18.5) {
            setTimeout(() => {
                console.log('lol')
                $('.header').empty()
                $('.header').css({ background: "white" })
                $('.header').html(`<h3> You are skinny af nigga if you dont start eating you wont ever get laid ${bmi.toFixed(2)}</h3>`)
                $("h1").css({ "margin-top": "30px" })
            }, 100);
        }
        else if (bmi > 18 && bmi < 25) {
            setTimeout(() => {
                console.log('lol')
                $('.header').empty()
                $('.header').css({ background: "white" })
                $('.header').html(`<h3> you are normal bitch just keep your shit the way it is, your bmi is ${bmi.toFixed(2)}</h3>`)
                $("h1").css({ "margin-top": "30px" })
            }, 1000);
        }
        else {
            setTimeout(() => {
                console.log('lol')
                $('.header').empty()
                $('.header').css({ background: "white" })
                $('.header').html(`<h3>you are the reason african kids are starving stop eating you fat fuck, your bmi is ${bmi.toFixed(2)}</h3>`)
                $("h1").css({ "margin-top": "30px" })
            }, 1000);
        }
    }
    else {
        setTimeout(() => {
            console.log('lol')
            $('.header').empty()
            $('.header').css({ background: "white" })
            $('.header').html(`<h3>blind fuck fill up all the details </h3>`)
            $("h1").css({ "margin-top": "30px" })
        }, 1000);
    }
})