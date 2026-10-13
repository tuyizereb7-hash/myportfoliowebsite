// let messages = JSON.parse(localStorage.getItem("messages")) || [];

// let table = document.getElementById("messageTable");


// messages.forEach(function(msg){

//     table.innerHTML += `

//     <tr>

//     <td>${msg.name}</td>

//     <td>${msg.email}</td>

//     <td>${msg.message}</td>

//     <td>
//     <span class="new">${msg.status}</span>
//     </td>

//     </tr>

//     `;

// });




// let messages = JSON.parse(localStorage.getItem("messages")) || [];


// let table = document.getElementById("messageTable");


// messages.forEach(function(msg){


//     let row = document.createElement("tr");


//     row.innerHTML = `

//     <td>${msg.name}</td>

//     <td>${msg.email}</td>

//     <td>${msg.message}</td>

//     <td>${msg.status}</td>

//     `;


//     table.appendChild(row);


// });



let messages = JSON.parse(localStorage.getItem("messages")) || [];

let table = document.getElementById("messageTable");


messages.forEach(function(msg){

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${msg.name}</td>
        <td>${msg.email}</td>
        <td>${msg.message}</td>
        <td>${msg.status}</td>
    `;

    table.appendChild(row);

});