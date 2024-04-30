let menu = document.querySelector("#menu-bars");
let header = document.querySelector('header');

menu.addEventListener('click' , ()=>{
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
})
menu.addEventListener('scroll' , ()=>{
    menu.classList.remove("fa-times");
    header.classList.remove("active");
})

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.addEventListener('mousemove' , (e)=>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';

});

let links = document.querySelectorAll('a');
links.forEach(links=>{
    links.addEventListener('mouseenter' , ()=>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    });

    links.addEventListener('mouseleave' , ()=>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    })
})

function sendEmail()
{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}