const array_lenth = document.querySelector(".array_lenth");
const button_enter = document.querySelector(".button_enter");
const button_clear = document.querySelector(".button_clear");
const container = document.querySelector(".container");
const text_result = document.querySelector(".text_result");
const text_result2 = document.querySelector(".text_result2");
const show_info = document.querySelector(".show_info");


function findMaxMin(low, high, array) {
    let max, min;
    
     // یک عنصر در آرایه
    if (low === high) { 
        max = min = array[low];
    }
     // دو عنصر در آرایه
    else if (high === low + 1) { 
        if (array[low] > array[high]) {
            max = array[low];
            min = array[high];
        } else {
            max = array[high];
            min = array[low];
        }
    }
     // بیش از دو عنصر در آرایه
    else { 
        const mid = Math.floor((low + high) / 2);

        // پیدا کردن بیشینه و کمینه در دو نیمه
        const left = findMaxMin(low, mid, array);
        const right = findMaxMin(mid + 1, high, array);

        // ترکیب نتایج
        if (left.max > right.max) {
            max = left.max;
        }
        else {
            max = right.max;
        }
        
        if (left.min < right.min) {
            min = left.min;
        }
        else {
            min = right.min;
        }
    }

    return { max, min };
}

button_enter.addEventListener("click", function(){
    //اگر کاربر مقدار وارد نکرده باشد
    if(!array_lenth.value){
        alert("لطفا طول ارایه را مشخص کنید")
        return
    }

    let i = 0 ;
    var array=[];
    //گرفتن مقادر ارایه
    for( i ; i <= array_lenth.value-1 ; i++){
        array[i] = parseInt(prompt(" enter index value "+i+" : "));
    }

    console.log(array);
    const result = findMaxMin(0, array.length - 1, array);
    console.log("Max:", result.max);
    console.log("Min:", result.min);

    container.classList.add("top");
    show_info.classList.add("top2");
    show_info.style.visibility="visible";
    text_result.innerHTML=`array is : {${array}}`;
    text_result2.innerHTML=`(max : ${result.max})</br>(min : ${result.min})`;

    return array;
})



button_clear.addEventListener("click" , function(){
    window.location.reload();
})


