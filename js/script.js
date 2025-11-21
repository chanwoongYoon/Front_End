const driver_lst = ["Max Verstappen","Lewis Hamilton","Oscar Piastri"];
const dirver_short_cut = {'Max Verstappen': 'VER', 'Lewis Hamilton': 'HAM', 'Oscar Piastri': 'PIA'};
let driver_order = ["Lewis Hamilton","Max Verstappen"];

const card_holder = document.getElementById("card_holder");


let paragraph = ""

for(let i = 0;i < driver_order.length;i++){
    let name = driver_order[i];
    paragraph += 
    `<div class="prodile_card">
        <img src="image/${dirver_short_cut[name]}.jpg" alt="Driver image" class="driver_image">
        <div class="name_div">
            <p class="name_tag">${name}</p>
        </div>
    </div>`
}
console.log(paragraph);
if (card_holder) { // card_holder 요소가 실제로 존재할 때만 실행
    card_holder.innerHTML = paragraph;
} else {
    console.error("ID가 'card_holder'인 요소를 찾을 수 없습니다.");
}

card_holder.innerHTML = paragraph;