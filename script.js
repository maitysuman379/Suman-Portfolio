

// let word = document.querySelectorAll(".word");
// words.forEach((word)=>{
//     let letters = word.textContent.split("");
//     word.textContent="";
//     letters.forEach((letter)=>{
//         let span = document.createElement("span");
//         span.textContent = letter;
//         span.className = "letter";
//         word.append(span);
//     })
// })

// let currentWordIndex = 0;
// let maxWordIndex = word.length -1;
// words[currentWordIndex].style.opacity = "1";


// const circles = document.querySelectorAll('.circle');
// circles.forEach(elem=>{
//     var dots = elem.getAttribute("data-dots");
//     var marked = elem.getAttribute("data-percent");
//     var percent = Math.floor(dots*marked/100);
//     var points = "";
//     var rotate = 360 / dots;


//     for(let i=0;i<dots;i++){
//         points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
//     }
//     elem.innerHTML = points;

//     const pointsMarked = elem.querySelectorAll('.points');
//     for(let i=0;i<percent;i++){
//         pointsMarked[i].classList.add('marked')
//     }
// })


var mixer = mixitup('.portfolio-gallery');