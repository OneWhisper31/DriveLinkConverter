function onButtonClick() {//used when button click

    let inputValue = document.querySelector('input').value;
    const outputText = document.getElementById("output");
    const copyIcon = document.getElementById("copy-icon");



    if (inputValue === '' || inputValue.length < 33) {
        if (outputText.classList.contains("output")) {

            outputText.innerText = "Invalid input, try with the file id, or with the share url";

            outputText.classList.remove('output');
            outputText.classList.remove('link-primary');
            outputText.classList.add('output-error');
        }
        if(copyIcon.classList.contains("copy-icon-shown")){
            copyIcon.classList.add("copy-icon-hide");
            copyIcon.classList.remove("copy-icon-shown");
        }
        return;
    }
    if (inputValue.length >= 33) {
        if (inputValue.startsWith("https://drive.google.com/file/d/")) {//if only pass id, don't replace
            inputValue = inputValue.replace("https://drive.google.com/file/d/", "");
            inputValue = inputValue.replace("/view?usp=sharing", "");
        }
        if (outputText.classList.contains("output-error")) {

            outputText.classList.add('output');
            outputText.classList.add('link-primary');
            outputText.classList.remove('output-error');   
        }
        if(copyIcon.classList.contains("copy-icon-hide")){
            copyIcon.classList.add("copy-icon-shown");
            copyIcon.classList.remove("copy-icon-hide");
        }
        copyValue=`https://drive.google.com/uc?id=${inputValue}&export=download&authuser=0`;
        outputText.innerText = copyValue;
    }
}
function onCopyClick() {//used when copy click

    const outputText = document.getElementById("output").textContent;

    navigator.clipboard.writeText(outputText);

    console.log(outputText);
}