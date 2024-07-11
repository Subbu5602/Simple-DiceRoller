function rollDice(){
    const numofDice = document.getElementById("NumofDice").value;
    const diceResult = document.getElementById("DiceResult");
    const DiceImages = document.getElementById("DiceImages");
    const values = [];
    const images = [];

    for(let i=0; i<numofDice; i++){
        const diceValue = Math.floor(Math.random() * 6) + 1;
        values.push(diceValue);  //pushing random value onto the empty array
        images.push(`<img src="Images/dice_${diceValue}.png">`);  //formatting the random value into the string telling the location of each image
    
    } 
    
    //now we have two filled arrays
    
    diceResult.textContent = `dice : ${values.join(", ")}`;
    DiceImages.innerHTML = images.join("");





}

