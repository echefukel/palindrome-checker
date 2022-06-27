const button = document.querySelector('button');
const display = document.getElementById('display');
const input = document.querySelector('input');
const value = input.value;


const CheckPalindrome = () => {
          const value = input.value.toLowerCase();
          console.log(value);
    
    let str = input.value.toLowerCase().match(/[a-z0-9]/gi).reverse().join('');
    //  lets populate our UI below
    if(value === str){
        // display success in the div element
        display.textContent = 'Yes,This is a palindrome';
        display.style.color = 'green'
    } else{
        display.textContent = 'No,This is not a Palindrome';
        display.style.color = 'red';
    } 
    
}



// add event listener
button.addEventListener('click',CheckPalindrome);