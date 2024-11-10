let level = 9
let barki = 1050

let intModifier = 4;
let dexModifier = 3;
let chaModifier = 1;
let conModifier = 1;
let wisModifier = -1;
let strModifier = 0;
let proficiencyBonus = 4;
let hp = 8 + 4 + 4 + 5 + 6 + 3 + 4 + 5 + 5 + (level * conModifier);

function formatBonus(...score) {
    // sum up all scores if scores is higher than 0 add a + in front of the number if it's lower than 0 add a - in front of the number
    let sum = score.reduce((a, b) => a + b, 0);
    return sum > 0 ? `+${sum}` : sum;
}

document.getElementById("barki").innerHTML = barki;
//blade song
document.getElementById("acModifier").innerHTML = formatBonus(intModifier);
//core stats
document.getElementById("baseAc").innerHTML = 13 + dexModifier;
document.getElementById("hp").innerHTML = hp;
//saves
document.getElementById("intSave").innerHTML = formatBonus(intModifier, proficiencyBonus);
document.getElementById("dexSave").innerHTML = formatBonus(dexModifier, proficiencyBonus);
document.getElementById("chaSave").innerHTML = formatBonus(chaModifier);
document.getElementById("conSave").innerHTML = formatBonus(conModifier);
document.getElementById("wisSave").innerHTML = formatBonus(wisModifier);
document.getElementById("strSave").innerHTML = formatBonus(strModifier);
//int
document.getElementById("arcana").innerHTML = formatBonus(intModifier);
document.getElementById("history").innerHTML = formatBonus(intModifier);
document.getElementById("investigation").innerHTML = formatBonus(intModifier, proficiencyBonus, proficiencyBonus);
document.getElementById("nature").innerHTML = formatBonus(intModifier);
document.getElementById("religion").innerHTML = formatBonus(intModifier);
//dex
document.getElementById("acrobatics").innerHTML = formatBonus(dexModifier, proficiencyBonus);
document.getElementById("sleightOfHand").innerHTML = formatBonus(dexModifier);
document.getElementById("stealth").innerHTML = formatBonus(dexModifier, proficiencyBonus);
//cha
document.getElementById("deception").innerHTML = formatBonus(chaModifier, proficiencyBonus);
document.getElementById("intimidation").innerHTML = formatBonus(chaModifier, proficiencyBonus, proficiencyBonus);
document.getElementById("performance").innerHTML = formatBonus(chaModifier, proficiencyBonus);
document.getElementById("persuasion").innerHTML = formatBonus(chaModifier);
//str
document.getElementById("athletics").innerHTML = formatBonus(strModifier, proficiencyBonus);
//wis
document.getElementById("animalHandling").innerHTML = formatBonus(wisModifier);
document.getElementById("insight").innerHTML = formatBonus(wisModifier);
document.getElementById("medicine").innerHTML = formatBonus(wisModifier);
document.getElementById("perception").innerHTML = formatBonus(wisModifier);
document.getElementById("survival").innerHTML = formatBonus(wisModifier);

//blade song
//select all elements with bladeSongModifier class and add the intModifier to the innerHTML
let bladeSongModifier = document.getElementsByClassName("bladeSongModifier");
for (let element of bladeSongModifier) {
    element.innerHTML = intModifier;
}
