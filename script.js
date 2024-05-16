const box = document.querySelectorAll(".box");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

const arr = [];

const arr2 = [];

const arr3 = [];

let winner = false;

let count = 0;

let final = false;

let sign = "X";

button.addEventListener("click", () => {
    location.reload()
})

function restart() {
    button.style.cssText = `display:block;`;
}

h1.innerText = `turn ${sign}`

box.forEach(el => {
    arr.push({ sign: "", complited: false })
})

box.forEach(el => {
    el.addEventListener("click", () => {
        if(!final) {
            if(!arr[el.id].completed) {
                count += 1
                el.innerText = sign;
                arr[el.id].completed = !arr[el.id].completed;
                arr[el.id].sign = sign;
                arr2[el.id] = sign
                if(arr[el.id].sign === "X") {
                    el.style.cssText = `
                    color: #ff8331;
                    `
                } else {
                    el.style.cssText = `
                    color: #ffcc33;
                    `
                }
                h1.innerText = `turn ${sign}`
                const line1 = [arr2[0], arr2[1], arr2[2]];
                const line2 = [arr2[3], arr2[4], arr2[5]];
                const line3 = [arr2[6], arr2[7], arr2[8]];
                const vertical1 = [arr2[0], arr2[3], arr2[6]];
                const vertical2 = [arr2[1], arr2[4], arr2[7]];
                const vertical3 = [arr2[2], arr2[5], arr2[8]];
                const corner1 = [arr2[0], arr2[4], arr2[8]];
                const corner2 = [arr2[2], arr2[4], arr2[6]]
                if((line1.join("") === "XXX" || line1.join("") === "OOO") || (line2.join("") === "XXX" || line2.join("") === "OOO") || (line3.join("") === "XXX" || line3.join("") === "OOO") || (vertical1.join("") === "XXX" || vertical1.join("") === "OOO") || (vertical2.join("") === "XXX" || vertical2.join("") === "OOO") || (vertical3.join("") === "XXX" || vertical3.join("") === "OOO") || (corner1.join("") === "XXX" || corner1.join("") === "OOO") || (corner2.join("") === "XXX" || corner2.join("") === "OOO")) {
                    h1.innerText = `winner is ${sign}`;
                    final = !final
                    winner = !winner
                    restart()
                }
                if(sign === "X") {
                    sign = "O"
                } else {
                    sign = "X"
                }
                if(count === 9 && !winner) {
                    h1.innerText = "tie"
                    restart()
                }
            }
        }
    })
})
