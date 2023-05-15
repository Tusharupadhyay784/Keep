const input = document.getElementById('myInput');
const btn = document.getElementById('myBtn');

const btnClick = () => {
    // alert(input.value);
    sessionStorage.setItem("key1", input.value);
}

btn.addEventListener('click', btnClick);