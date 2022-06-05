
const transition1 = document.getElementById(`z1`)
const transition2 = document.getElementById(`z2`)
const transition3 = document.getElementById(`z3`)
const transition4 = document.getElementById(`z4`)
const transition5 = document.getElementById(`z5`)
const transition8 = document.getElementById(`z8`)
const transition9 = document.getElementById(`z9`)
const transition10 = document.getElementById(`z10`)
const transition11 = document.getElementById(`z11`)
const transition12 = document.getElementById(`z12`)
const transition13 = document.getElementById(`z13`)
const transition14 = document.getElementById(`z14`)
const transition15 = document.getElementById(`z15`)
const transition16 = document.getElementById(`z16`)
const transition17 = document.getElementById(`z17`)
const transition18 = document.getElementById(`z18`)
const transition19 = document.getElementById(`z19`)
const transition20 = document.getElementById(`z20`)
const transition21 = document.getElementById(`z21`)
const transition22 = document.getElementById(`z22`)
const transition23 = document.getElementById(`z23`)



const uploadImage = (entrys, observer) => {
    // console.log(entrys)
    // console.log(observer)

    entrys.forEach((entry) => {
       if(entry.isIntersecting){
           entry.target.classList.add(`visible`);
       }
    })
}

const observer = new IntersectionObserver(uploadImage, {
    root:null,
    rootMargin: `0px 0px 0px 0px`,
    threshold: 1.0
});

observer.observe(transition1);
observer.observe(transition2);
observer.observe(transition3);
observer.observe(transition4);
observer.observe(transition5);
observer.observe(transition8);
observer.observe(transition9);
observer.observe(transition10);
observer.observe(transition11);
observer.observe(transition12);
observer.observe(transition13);
observer.observe(transition14);
observer.observe(transition15);
observer.observe(transition16);
observer.observe(transition17);
observer.observe(transition18);
observer.observe(transition19);
observer.observe(transition20);
observer.observe(transition21);
observer.observe(transition22);
observer.observe(transition23);