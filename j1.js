async function fetchData(){
    console.log("async function executed")
    const data =await fetch('https://jsonplaceholder.typicode.com/users');
    console.log('async function complete',data)
}









// const colors = ['red', 'orange', 'pink', 'green', 'aqua', 'purple', 'brown', 'grey', 'magenta', 'cyan']

// function fetchData() {
//     console.log("hello")

//     let d = null;
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(function (data) {
//             console.log("promise success", data);

//             return data.json()

//         })
//         .then(function (data) {
//             console.log("final data", data);
//             console.log(data[1].username);
//             let para = document.getElementById('username')

//             for (let i = 0; i <= data.length; i++) {
//                 let eachuser = document.createElement('h6');
//                 eachuser.innerHTML = "welcome" + data[i].username.toUpperCase()
//                 eachuser.style.color = colors[i]
//                 para.appendChild(eachuser)
//             }


//             para.style.color = "red"
//             d = data;



//         })
//         .catch(function (err) {
//             console.log("promise fail", err)
//         })
//     console.log(d)
// }
let timeinseconds = 120;
let updatedtimer;

let interval;
function updatetimer() {
    if (timeinseconds < 0) {
        clearInterval(updatedtimer); //stop the timer
        alert('boom!!!');

    }
    else {
        const minutes = math.floor(timeinseconds / 60);
        const seconds = timerinseconds % 60;
        const formattedtime = (minutes + ":" + seconds);
        document.getElementById('timebomb').innerHTML = formattedtime;
        document.getElementById('timebomb').style.color = 'red';
        timeinseconds = timeinseconds - 1;
    }

}
 interval= setInterval(updatedtimer, 1000);//call every seconds