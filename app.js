let weightinput = document.querySelector(".weight-input");
let heightinput = document.querySelector(".height-input");
let submitbtn = document.querySelector(".submit-input");
let bmicontainer = document.querySelector(".input-container");
let resetbtn = document.querySelector(".reset-btn");

submitbtn.addEventListener("click", () => 
    {
        if(weightinput.value.length == 0 || heightinput.value.length == 0)
        {
            alert("Please ensure that both fields are filled!");
        }

        else if(isNaN(weightinput.value) || isNaN(heightinput.value))
        {
            alert("Please ensure field input are numbers only!");
        }

        else if(weightinput.value < 0 || heightinput.value < 0)
        {
            alert("Please ensure values are positive numbers only!");
        }

        else
        {
            let weight = weightinput.value;
            let height = heightinput.value;
            height = height / 100;
            let total = weight / (height * height);
            total = Math.round(total * 10)/10;
            console.log(total);
            
            if(total < 23 && total > 18.5)
            {
                let heading = document.createElement("h5");
                let text = document.createElement("span");
                let bmioutput = document.createElement("p");
                bmioutput.innerHTML = "Your BMI is " + total;
                bmioutput.classList.add("bmioutput");
                heading.innerHTML = "You're at LOW risk for obesity-related diseases";
                text.innerHTML = "Achieve a healthy weight by balancing your caloric input (diet) and output (physical activity).";
                heading.classList.add("greenbmiheader");
                text.classList.add("bmitext");
                bmicontainer.appendChild(bmioutput);
                bmicontainer.appendChild(heading);
                bmicontainer.appendChild(text);
            
            }

            else if(total > 23 && total < 27.5)
            {
                let heading = document.createElement("h5");
                let text = document.createElement("span");
                let bmioutput = document.createElement("p");
                bmioutput.innerHTML = "Your BMI is " + total;
                bmioutput.classList.add("bmioutput");
                heading.innerHTML = "You're at MODERATE risk for obesity-related diseases";
                text.innerHTML = "Aim to lose 5% to 10% of your body weight over 6 to 12 months by increasing physical activity and reducing caloric intake";
                heading.classList.add("yellowbmiheader");
                text.classList.add("bmitext");
                bmicontainer.appendChild(bmioutput);
                bmicontainer.appendChild(heading);
                bmicontainer.appendChild(text);
            }

            else if(total <= 18.5)
            {
                let heading = document.createElement("h5");
                let warning = document.createElement("p");
                let text = document.createElement("span");
                let bmioutput = document.createElement("p");
                bmioutput.innerHTML = "Your BMI is " + total;
                bmioutput.classList.add("bmioutput");
                heading.innerHTML = "You are AT LOW RISK* for obesity-related diseases";
                warning.innerHTML = "*But increased risk of other clinical problems";
                text.innerHTML = "AT RISK of nutritional deficiency and osteoporosis. You are encouraged to eat a balanced meal and to seek medical advice if necessary.";
                heading.classList.add("bmiheader");
                text.classList.add("bmitext");
                warning.classList.add("bmiwarning");
                bmicontainer.appendChild(bmioutput);
                bmicontainer.appendChild(heading);
                bmicontainer.appendChild(warning);
                bmicontainer.appendChild(text);
            }

            else
            {
                let heading = document.createElement("h5");
                let warning = document.createElement("p");
                let text = document.createElement("span");
                let bmioutput = document.createElement("p");
                bmioutput.innerHTML = "Your BMI is " + total;
                bmioutput.classList.add("bmioutput");
                heading.innerHTML = "You are AT HIGH RISK for obesity-related diseases";
                warning.innerHTML = "*Cardiovascular risks of metabolic syndrome, including Type 2 Diabetes, Hypertension and Hyperlipidemia.";
                text.innerHTML = "Aim to lose 5% to 10% of your body weight over 6 to 12 months by increasing physical activity and reducing caloric intake. Go for regular health screening to keep co-morbid conditions* in check.";
                heading.classList.add("redbmiheader");
                text.classList.add("bmitext");
                warning.classList.add("bmiwarning");
                bmicontainer.appendChild(bmioutput);
                bmicontainer.appendChild(heading);      
                bmicontainer.appendChild(text);
                bmicontainer.appendChild(warning);
            }
            
            submitbtn.disabled = true;
        }
    }
)

resetbtn.addEventListener("click", function(){
    weightinput.value="";
    heightinput.value="";
    submitbtn.disabled = false;
    location.reload();
})