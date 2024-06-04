//index

$(document).ready(function () {
    $('.stonehenge').stonehenge({
        speed: 0.5,
        autoscroll: true,
    });
});



// contact form

$(document).ready(function () {

    $("#contact_button").click(function (e) {
        e.preventDefault()
        $("#namefill").text("");
        $("#emailfill").text("");
        $("#numberfill").text("");
        $("#feedbackfill").text("");
       
        var name = $("#nam").val();
        var email = $("#mail").val();
        var number = $("#number").val();
        var feedback = $("#feedback").val();

        if (name == "") {
            $("#namefill").text("Name is required!");
        }
        else if (!isvalidname(name)) {
            $("#namefill").text("Invalid name format*")
        }

        if (email == "") {
            $("#emailfill").text("Email is required!");
        }
        else if (!isvalidemail(email)) {
            $("#emailfill").text("Invalid email format*")
        }
        if (number == "") {
            $("#numberfill").text("Number is required!");
        }
        else if (!isvalidnumber(number)) {
            $("#numberfill").text("Invalid number format*")
        }
        if (feedback == "") {
            $("#feedbackfill").text("Feedback is required!");
        }
        if (isvalidname(name) && isvalidemail(email) && isvalidnumber(number)) {
        $("#nam, #mail, #number, #feedback").val("");
    }
    });

    function isvalidname(name) {
        var namePattern = /^[a-zA-Z]+$/;
        return namePattern.test(name)
    };
    function isvalidemail(email) {
        var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return emailPattern.test(email)
    }
    function isvalidnumber(number) {
        var numberPattern = /^(\+92|0|92)[0-9]{10}$/
        return numberPattern.test(number)
    }
});

//signUp form

$(document).ready(function () {

    $("#signup_button").click(function (e) {
        e.preventDefault()
        $("#namefill").text("");
        $("#lastNamefill").text("");
        $("#emailfill").text("");
        $("#passfill").text("");

        var name = $("#nam").val();
        var lastName = $("#lastnam").val();
        var email = $("#mail").val();
        var pass = $("#password").val();


        if (name == "") {
            $("#namefill").text("Name is required!");
        }
        else if (!isvalidname(name)) {
            $("#namefill").text("Invalid name format*")
        }

        if (lastName == "") {
            $("#lastNamefill").text("Last Name is required!");
        }
        else if (!isvalidlastName(lastName)) {
            $("#lastNamefill").text("Invalid Last Name format*")
        }

        if (email == "") {
            $("#emailfill").text("Email is required!");
        }
        else if (!isvalidemail(email)) {
            $("#emailfill").text("Invalid email format*")
        }
        if (pass == "") {
            $("#passfill").text("Password is required!");
        }
        else if (!isvalidpassword(pass)) {
            $("#passfill").text("Invalid Password format*")
        }
        if (isvalidname(name) && isvalidlastName(lastName) && isvalidemail(email) && isvalidpassword(pass)) {
            signup();
            $("#nam, #lastnam, #mail, #password").val("");
        }
    });

    function isvalidname(name) {
        var namePattern = /^[a-zA-Z]+$/;
        return namePattern.test(name)
    };
    function isvalidlastName(lastName) {
        var namePattern = /^[a-zA-Z]+$/;
        return namePattern.test(lastName)
    };
    function isvalidemail(email) {
        var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return emailPattern.test(email)
    }
    function isvalidpassword(pass) {
        var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        return passwordPattern.test(pass)
    }
});

function signup() {
    var email = $("#mail").val();
    console.log(email);
    var pass = $("#password").val();
    console.log(pass);
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);
    email.value = "";
    pass.value = "";
    alert("Your data successfully stored in local storage")
    window.location.replace("login.html")
}
$(document).ready(function () {

    $("#button").click(function (e) {
        e.preventDefault()
        $("#emailfill").text("");
        $("#passfill").text("");

        var email = $("#mail").val();
        var pass = $("#password").val();

        if (email == "") {
            $("#emailfill").text("Email is required!");
        }
        else if (!isvalidemail(email)) {
            $("#emailfill").text("Invalid email format*")
        }
        if (pass == "") {
            $("#passfill").text("Password is required!");
        }
        else if (!isvalidpassword(pass)) {
            $("#passfill").text("Invalid Password format*")
        }
        if (isvalidemail(email) && isvalidpassword(pass)) {
            login();
            $("#mail, #password").val("");
        }
    });

    function isvalidemail(email) {
        var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return emailPattern.test(email)
    }
    function isvalidpassword(pass) {
        var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        return passwordPattern.test(pass)
    }

});
function login() {
    var enteredEmail = document.getElementById("mail").value;
    var enteredPassword = document.getElementById("password").value;

    var email = localStorage.getItem("email");
    var password = localStorage.getItem("pass");
   



    if (enteredPassword === password && enteredEmail === email) {
        alert("Login successful");
    } else {
        alert("Login failure");
    }
}
 //bmi page 
 $(document).ready(function () {

    $("#bmi_button").click(function (e) {
        var height = $("#height").val();
        var weight = $("#weight").val();
        e.preventDefault()
     $("#heightfill").text("");
     $("#weightfill").text("");
     if (height == "") {
        $("#heightfill").text("Height is required!");
    }
        if (weight == "") {
        $("#weightfill").text("Weight is required!");
    }
    else if (height != "" && weight != "") {
        const bmi = calculateBMI(weight, height);
        $("#calculate").text(`Your BMI is ${bmi.toFixed(2)} `);
        $("#classified").text(`You are classified as: ${classifyBMI(bmi)}`);
    }
      
    });
    function calculateBMI(weight, height) {
        const h = height / 100; // converting cm to meter
        const h2 = Math.pow(h, 2); // converting m to m²
        const bmi = weight / h2; // formula of BMI
        return bmi;
    }

    function classifyBMI(bmi) {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            return "Overweight";
        } else if (bmi >= 30 && bmi <= 34.9) {
            return "Obese";
        } else {
            return "Extremely obese";
        }
    }
    $("#bmi_reset").click(function (e) {
        $("#height , #weight ").val("");    
        $("#heightfill , #weightfill").empty();        
        $("#calculate, #classified").empty();
    
     });

});

   //Word Counter
   $(document).ready(function () {

    $("#wordCounter_button").click(function (e) {
        $("#textfill").text("");
        var text = $("#text").val();

        if (text == "") {
            $("#textfill").text("Text is required!");
        } else {
            let vowels = 0;
            let consonants = 0;
            let digits = 0;
            let spaces = 0;
            let words = 0;
            const wordArray = text.split(/\s+/).filter(word => word.length > 0);
            words = wordArray.length;

            for (let i = 0; i < text.length; ++i) {
                if (/[aeiouAEIOU]/.test(text[i])) {
                    ++vowels;
                } else if (/[a-zA-Z]/.test(text[i])) {
                    ++consonants;
                } else if (/[0-9]/.test(text[i])) {
                    ++digits;
                } else if (text[i] === ' ') {
                    ++spaces;
                }
            }

            $("#words").text(`Total Words = ${words}`);
            $("#digits").text(`Total Digits = ${digits}`);
            $("#vowels").text(`Vowels = ${vowels}`);
            $("#consonants").text(`Consonants = ${consonants}`);
            $("#spaces").text(`Spaces = ${spaces}`);
            $("#wordCounter_box").show().css("background-color", "#FFCACA");

        }
    });
    $("#wordCounter_reset").click(function (e) {
        $("#text").val("");   
        $("#words , #digits , #vowels ,#consonants ,#spaces , #textfill").empty();
        $("#box").hide().css("background-color", "");
       

    });
});

// simple calculator 
$(document).ready(function () {

    $("#simpleCalc_button").click(function (e) {
        e.preventDefault()
        $("#expressionfill").text("");

        var expression = $("#calc").val();

        if (expression == "") {
            $("#expressionfill").text("expression is required!");
        }
        else if (!isvalidexpression(expression)) {
            $("#expressionfill").text("Invalid expression format*")
        }
        else {
            const result = calculate(expression);
            $("#answer").text(`Your Answer is ${result}`);
        }

    });
    function isvalidexpression(expression) {
        var expressionPattern = /^[-+]?(\d+(\.\d*)?|\.\d+)([-+*/]([-+]?(\d+(\.\d*)?|\.\d+)))*$/;
        return expressionPattern.test(expression)
    };
    $("#simpleCalc_reset").click(function (e) {
        $("#calc").val("");
        $("#expressionfill , #answer").empty();
    });
    function calculate(expression) {
        const operators = ['+', '-', '*', '/'];
        const operatorStack = [];
        const valueStack = [];
        let currentValue = '';

        function calculateOperation() {
            const operator = operatorStack.pop();
            const b = valueStack.pop();
            const a = valueStack.pop();
            switch (operator) {
                case '+': return a + b;
                case '-': return a - b;
                case '*': return a * b;
                case '/': return a / b;
            }
        }

        for (let i = 0; i < expression.length; i++) {
            const char = expression[i];
            if (operators.includes(char)) {
                valueStack.push(parseFloat(currentValue));
                currentValue = '';
                while (operatorStack.length > 0 && operators.indexOf(operatorStack[operatorStack.length - 1]) >= operators.indexOf(char)) {
                    valueStack.push(calculateOperation());
                }
                operatorStack.push(char);
            } else {
                currentValue += char;
            }
        }
        valueStack.push(parseFloat(currentValue));

        while (operatorStack.length > 0) {
            valueStack.push(calculateOperation());
        }
        return valueStack[0];
    }
})

