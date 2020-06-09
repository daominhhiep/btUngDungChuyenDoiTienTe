function validateForm() {
    let amount = document.getElementById("amount").value; //khai bao
    let first = document.getElementById("FormCurrency").value;
    let last = document.getElementById("ToCurrency").value;
    if(first === "VND"){
        if(last ==="VND"){
            document.getElementById("output").innerHTML = amount;
        } else if(last === "USD"){
            let changeA = amount/23000;
            document.getElementById("output").innerHTML = changeA;
        }
    }

    if (first === "USD"){
        if(last === "USD"){
            document.getElementById("output").innerHTML = amount;
        }else if(last === "VND"){
            let changeB = amount*23000;
            document.getElementById("output").innerHTML = changeB;
        }
    }
}
