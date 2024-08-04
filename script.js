function Age() {
    const DOB = document.getElementById("dob").value;
    const currdate = document.getElementById("currentdate").value;
    
    if (DOB === ""){
        alert("Please Enter your Date of Birth");
        return false;
    }
    else if(currdate === ""){
        alert("Please Enter your Current Date");
        return false;
    }

    let DateBirth = new Date(DOB);
    let PresentDate = new Date(currdate);

    let Ageyear = PresentDate.getFullYear() - DateBirth.getFullYear();
    let AgeMonth = PresentDate.getMonth() - DateBirth.getMonth();
    let AgeDay = PresentDate.getDate() - DateBirth.getDate();

    if (AgeMonth < 0) {
        Ageyear--;
        AgeMonth += 12;
    }
    if (AgeDay < 0) {
        AgeMonth--;
        if (AgeMonth < 0) {
            Ageyear--;
            AgeMonth += 11;
        }
        let pMonth = PresentDate.getMonth() - 1;
        if (pMonth < 0) pMonth = 11;
        let daysInPMonth = new Date(PresentDate.getFullYear(), pMonth + 1, 0).getDate();
        AgeDay += daysInPMonth;
    }

    document.getElementById("head").innerHTML="Your Age is!!!";
    document.getElementById("lab1").innerHTML = "Age : ";
    document.getElementById("inp1").innerHTML =`<input type="text" name="age" class="age-year" value="${Ageyear}" readonly>`;
    document.getElementById("lab2").innerHTML="Months : ";
    document.getElementById("inp2").innerHTML =`<input type="text" name="age" class="age-year" value="${AgeMonth}" readonly>`;
    document.getElementById("lab3").innerHTML="Days : ";
    document.getElementById("inp3").innerHTML =`<input type="text" name="age" class="age-year" value="${AgeDay}" readonly>`;
}
