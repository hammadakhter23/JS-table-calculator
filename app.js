function myFunc() {
    let inp1 = parseInt(document.querySelector("#input1").value);
    let inp2 = parseInt(document.querySelector("#input2").value); 
    let containner = document.querySelector(".containner");
    containner.innerHTML = "";

    for (let i = 1; i <= inp2; i++) { 
        containner.innerHTML += `${inp1} X ${i} = ${inp1 * i}<br>`; 
    }
}
