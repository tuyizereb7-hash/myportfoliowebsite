// document.getElementById("contactForm").addEventListener("submit", function(e){

//     e.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;


//     let messages = JSON.parse(localStorage.getItem("messages")) || [];


//     messages.push({
//         name: name,
//         email: email,
//         message: message,
//         status: "New"
//     });


//     localStorage.setItem("messages", JSON.stringify(messages));


//     alert("Message sent successfully!");

//     document.getElementById("contactForm").reset();

// });
// document.getElementById("contactForm").addEventListener("submit", function(e){

//     e.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;


//     console.log(name);
//     console.log(email);
//     console.log(message);


//     let messages = JSON.parse(localStorage.getItem("messages")) || [];


//     messages.push({
//         name: name,
//         email: email,
//         message: message,
//         status: "New"
//     });


//     localStorage.setItem("messages", JSON.stringify(messages));


//     alert("Message sent successfully!");

//     this.reset();

// });
// document.getElementById("contactForm").addEventListener("submit", function(e){

//     e.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;


//     console.log("NAME:", name);
//     console.log("EMAIL:", email);
//     console.log("MESSAGE:", message);


// });





// let name = document.getElementById("name").value;
// let email = document.getElementById("email").value;
// let message = document.getElementById("message").value;

// alert(name);
// alert(email);
// alert(message);

// document.getElementById("contactForm").addEventListener("submit", function(e){

//     e.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;


//     console.log(name);
//     console.log(email);
//     console.log(message);


//     let messages = JSON.parse(localStorage.getItem("messages")) || [];


//     messages.push({
//         name: name,
//         email: email,
//         message: message,
//         status: "New"
//     });


//     localStorage.setItem("messages", JSON.stringify(messages));


//     alert("Message sent successfully!");

//     this.reset();

// });





// document.getElementById("contactForm").addEventListener("submit", function(e){

//     e.preventDefault();


//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;


//     let messages = JSON.parse(localStorage.getItem("messages")) || [];


//     messages.push({
//         name:name,
//         email:email,
//         message:message,
//         status:"New"
//     });


//     localStorage.setItem("messages", JSON.stringify(messages));


//     alert("Message sent successfully!");

//     this.reset();

// });



document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;


    let messages = JSON.parse(localStorage.getItem("messages")) || [];


    messages.push({
        name: name,
        email: email,
        message: message,
        status: "New"
    });


    localStorage.setItem("messages", JSON.stringify(messages));


    alert("Message sent successfully!");

    this.reset();

});




