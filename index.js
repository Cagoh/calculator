// Get all the button elements with the class "btn"
const btns = document.querySelectorAll(".btn");

// Reference to the calculator's calculatorScreenBottom
const calculatorScreenBottom = document.querySelector('.calculator-screen-bottom');

const calculatorScreenTop = document.querySelector('.calculator-screen-top');

// Initialize a variable to store the current input
let currentInput = '';
let inputBottomScreen = '';

btns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        const btnId = btn.id; // Get the id of the clicked button
        // console.log("Clicked button id:", btnId);

        // Handle button clicks
        switch (btnId) {
            case 'btn-1':
            case 'btn-2':
            case 'btn-3':
            case 'btn-4':
            case 'btn-5':
            case 'btn-6':
            case 'btn-7':
            case 'btn-8':
            case 'btn-9':
            case 'btn-0':
                // Append the clicked number to the current input
                currentInput += btn.textContent;
                inputBottomScreen += btn.textContent;
                calculatorScreenBottom.textContent = inputBottomScreen;
                // console.log("currentInput", currentInput)
                break;
            case 'btn-add':
            case 'btn-min':
            case 'btn-mul':
            case 'btn-div':
                // Handle arithmetic operations
                // clear the bottom screen
                inputBottomScreen = '';
                currentInput += '' + btn.textContent + '';
                calculatorScreenTop.textContent = currentInput;
                calculatorScreenBottom.textContent = ""
                // console.log("currentInput", currentInput)
                break;
                case 'btn-point':
                // Handle decimal point input
                inputBottomScreen += btn.textContent
                if (!currentInput.includes('.')) {
                    currentInput += btn.textContent;
                    calculatorScreenBottom.textContent = currentInput;
                }
                // console.log("currentInput", currentInput)
                break;
            case 'btn-ac':
                // Clear all
                inputBottomScreen = '';
                currentInput = '';
                calculatorScreenTop.textContent = '';
                calculatorScreenBottom.textContent = '';
                // console.log("currentInput", currentInput)
                break;
            case 'btn-c':
                // Clear the last character
                currentInput = currentInput.slice(0, -1);
                calculatorScreenBottom.textContent = currentInput;
                // console.log("currentInput", currentInput)
                break;
            case 'btn-percentage':
                // Handle percentage calculation
                currentInput = (parseFloat(currentInput) / 100).toString();
                calculatorScreenBottom.textContent = currentInput;
                // console.log("currentInput", currentInput)
                break;
            case 'btn-equal':
                // Evaluate the expression and calculatorScreenBottom the result
                try {
                    calculatorScreenTop.textContent += inputBottomScreen
                    // clear the bottomscreen
                    inputBottomScreen = ''
                    currentInput = eval(currentInput);
                    calculatorScreenBottom.textContent = currentInput;
                } catch (error) {
                    // Handle any errors (e.g., division by zero)
                    calculatorScreenBottom.textContent = 'Error';
                }
                // console.log("currentInput", currentInput)
                break;
      }
    })
})