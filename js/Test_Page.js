// const dataToSave = {
//     message: "This is new data.",
//     timestamp: new Date().toISOString()
// };

// const jsonString = JSON.stringify(dataToSave, null, 2);

// // 이 함수가 실행되면 브라우저가 사용자에게 'new.json' 파일을 다운로드하도록 요청합니다.
// function downloadJsonFile(jsonString, filename) {
//     const blob = new Blob([jsonString], { type: 'application/json' });
//     const url = URL.createObjectURL(blob);
    
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = filename; // 파일 이름 지정
    
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a); 
    
//     URL.revokeObjectURL(url);
// }

// downloadJsonFile(jsonString, 'new.json');

const select_box = document.getElementById("select_box");
const results_box = document.getElementById("results_box");
const button = document.getElementsByClassName("profile");
const submit = document.getElementById("submit");

let html_code = "";
let html_code_results_box = "";
let drivers_selected_json = {};
let year = 2025;
let k = 0;

const driver_names = [
    "Alexander Albon",
    "Fernando Alonso",
    "Kimi Antonelli",
    "Oliver Bearman",
    "Valtteri Bottas",
    "Gabriel Bortoleto",
    "Franco Colapinto",
    "Jack Doohan",
    "Pierre Gasly",
    "Isack Hadjar",
    "Lewis Hamilton",
    "Nico Hülkenberg",
    "Daniil Kvyat",
    "Nicholas Latifi",
    "Liam Lawson",
    "Charles Leclerc",
    "Kevin Magnussen",
    "Lando Norris",
    "Esteban Ocon",
    "Sergio Pérez",
    "Oscar Piastri",
    "Kimi Räikkönen",
    "Daniel Ricciardo",
    "George Russell",
    "Carlos Sainz",
    "Mick Schumacher",
    "Lance Stroll",
    "Yuki Tsunoda",
    "Max Verstappen",
    "Sebastian Vettel",
    "Guanyu Zhou"
]
let driver_upper_name = []//[VER,HAM,PIA...]

for (let i=0;i < driver_names.length;i++){
    let name = driver_names[i];
    let space_index = name.indexOf(" ");
    let upper_name = `${name[space_index+1]}${name[space_index+2]}${name[space_index+3]}`;
    upper_name = upper_name.toUpperCase();
    driver_upper_name.push(upper_name);
}
// console.log(driver_upper_name);

html_code += `<button id="submit">SUBMIT</button>`;

for (let i=0;i < driver_names.length;i++){
    let fullname = driver_names[i];
    let firstname = fullname.slice(0,fullname.indexOf(" "));
    let lastname = fullname.slice(fullname.indexOf(" ")+1,fullname.length);
    html_code +=
    `
    <button class="profile">
        <div class="image_box">
            <image src="image/${driver_upper_name[i]}.jpg" class="driver_image"></image>
        </div>
        <div class="name_box">${firstname}<br>${lastname}</div>
    </button>
    `
    // console.log(firstname);
    // console.log(lastname);
}

// console.log(html_code);
select_box.innerHTML = html_code;

for (let i=0;i<button.length-1;i++){
    button[i].addEventListener("click",()=>{
    let name_selected = button[i].textContent.trim();
    console.log("---------------------------")
    console.log(name_selected);
    console.log(`add json : ${name_selected}`);
    drivers_selected_json[2025-k] = name_selected;
    k += 0.5;
    console.log(drivers_selected_json);
    console.log("---------------------------")
    html_code_results_box +=
    `
    <button class="profile">
        <div class="image_box">
            <image src="image/NULL.jpg" class="driver_image"></image>
        </div>
        <div class="name_box">${name_selected}</div>
    </button>
    `
    results_box.innerHTML = html_code_results_box;
    }); 
}
