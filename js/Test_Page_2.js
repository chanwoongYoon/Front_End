class select_And_Cancle{
    constructor(quiet){
        this.quiet = quiet;
        console.log(`test : ${quiet}`);
    }
}

const sAC =new select_And_Cancle("Hello world")

const select_box = document.getElementById("select_box");
const results_box = document.getElementById("results_box");
const button = document.getElementsByClassName("profile");
const submit = document.getElementById("submit");

let new_driver_names = []
let html_code_results_box = "";
let drivers_selected_json = {};
let selected_names = []
let cycle = 0;

const driver_names = [
    "Alexander Albon",
    "Carlos Sainz",
    "Charles Leclerc",
    "Esteban Ocon",
    "Fernando Alonso",
    "Franco Colapinto",
    "Gabriel Bortoleto",
    "George Russell",
    "Isack Hadjar",
    "Kimi Antonelli",
    "Lance Stroll",
    "Lando Norris",
    "Lewis Hamilton",
    "Liam Lawson",
    "Max Verstappen",
    "Nico Hülkenberg",
    "Oliver Bearman",
    "Oscar Piastri",
    "Pierre Gasly",
    "Yuki Tsunoda",

    "Daniel Ricciardo",
    "Daniil Kvyat",
    "Guanyu Zhou",
    "Jack Doohan",
    "Kevin Magnussen",
    "Kimi Räikkönen",
    "Mick Schumacher",
    "Nicholas Latifi",
    "Sebastian Vettel",
    "Sergio Pérez",
    "Valtteri Bottas"
];
function name_Abbreviation(name_lst) { //output:name_abbreviation_lst(list)
    let driver_upper_name = [];
    for (let i=0;i < name_lst.length;i++){
        let name = name_lst[i];
        let space_index = name.indexOf(" ");
        let upper_name = `${name[space_index+1]}${name[space_index+2]}${name[space_index+3]}`;
        upper_name = upper_name.toUpperCase();
        driver_upper_name.push(upper_name);
}
    return driver_upper_name;
}
function add_profiles(name_lst){ //output:profile html code(string)
    let html_code = "";
    html_code += `<button id="submit">SUBMIT</button>`;
    for (let i=0;i < name_lst.length;i++){
        let fullname = name_lst[i][0];
        let firstname = fullname.slice(0,fullname.indexOf(" "));
        let lastname = fullname.slice(fullname.indexOf(" ")+1,fullname.length);
        html_code +=
        `
        <button class="profile" id="${name_lst[i][1]}">
            ${firstname}<br>${lastname}
        </button>
        `;
    }
    return html_code;
}
function upperIndex(str){
    for (let i=1;i<str.length;i++){
        if(str[i] === str[i].toUpperCase()){
            return i;
        }
    }
}
function insert_Space(str){
    first_name = str.slice(0,upperIndex(str));
    last_name = str.slice(upperIndex(str),str.length);
    new_name = first_name + " " + last_name;
    return new_name;
}
for(let i=0;i<driver_names.length;i++){
    let empty = [driver_names[i],i];
    new_driver_names.push(empty);
} //don't touch


select_box.innerHTML = add_profiles(new_driver_names);

select_box.addEventListener("click",function(event){
    let name = event.target.textContent.trim();
    name = insert_Space(name);
    let empty = [name,cycle];
    selected_names.push(empty)
    results_box.innerHTML = add_profiles(selected_names);
    cycle += 1
    console.log(selected_names)
})

results_box.addEventListener("click",function(event){
    for (let i=0;i<selected_names.length;i++){
        if(selected_names[i][1] === Number(event.target.id)){
            console.log(`index : ${i}`)
            selected_names.splice(i,1);
            console.log(`delete ${selected_names}`)
        }
    }
    results_box.innerHTML = add_profiles(selected_names);
})


//1. 배열에서 선택한거 날리기
//2. 남은 배열에서 html코드 다시 짜기
//3. input

// for (let i=0;i<button.length-1;i++){
//     button[i].addEventListener("click",()=>{
//     let name_selected = button[i].textContent.trim();
//     console.log("---------------------------")
//     console.log(name_selected);
//     console.log(`add json : ${name_selected}`);
//     drivers_selected_json[2025-k] = name_selected;
//     k += 0.5;
//     console.log(drivers_selected_json);
//     console.log("---------------------------")
//     html_code_results_box +=
//     `
//     <button class="profile">
//         <div class="image_box">
//             <image src="image/NULL.jpg" class="driver_image"></image>
//         </div>
//         <div class="name_box">${name_selected}</div>
//     </button>
//     `
//     results_box.innerHTML = html_code_results_box;
//     }); 
// }

