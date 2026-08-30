const button=document.querySelector('button');
const colorDiv=document.querySelector('#colorDiv')
const heading=document.querySelector('#head');

button.addEventListener("click" ,()=>{
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);

    let randomColor=`rgb(${r},${g},${b})`;

    colorDiv.style.backgroundColor=randomColor;

    heading.innerText=`RGB :(${r},${g},${b})`;
});