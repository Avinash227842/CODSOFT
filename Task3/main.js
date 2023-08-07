// this is used to take all the inputs of key as querry from the key  in keySection
const keys = document.querySelectorAll('.key');

//screen_in and screen_out will store input and calculated output values
const screen_in = document.querySelector('.screen .input');
const screen_out = document.querySelector('.screen .output');

//initially input is empty
let input = "";

for (let key of keys) {
    //the below line targets the key like 1 2 4 DEL etc
    const val = key.dataset.key;

    //this will handle the onclick event of keys
    key.addEventListener('click', () => {
        //if we press "C" it will clear the screen by targeting innerhtml 
        if (val == 'clear') {
            input = "";
            screen_in.innerHTML = "";
            screen_out.innerHTML = "";
        }
        // if press "DEL" we slice operator to decrement inp by 1
        else if (val == "delete") {
            input = input.slice(0, -1);
            screen_in.innerHTML = makein(input);
        }
        //if we press "=" we take help of eval function in js to evaluate the input given
        else if (val == "=") {
            let ans = eval(expression(input));
            screen_out.innerHTML = makeoutput(ans);
        }
        //to evaluate the expression after applying operators 
        else{
            if(evaluate(val)){
                input+=val;
                screen_in.innerHTML=makein(input);
            }
        }
    })
}
//func to create the input expression
function makein(input){
    let arr_in=input.split("");
    let n=arr_in.length;
    let i;
    for(i=0;i<n;i++){
        if(arr_in[i]=="*")
        arr_in[i]=`<span class="operator">X</span>`;
        else if(arr_in[i]=="/")
        arr_in[i]=`<span class="operator">÷</span>`;
        else if(arr_in[i]=="+")
        arr_in[i]=`<span class="operator">+</span>`;
        else if(arr_in[i]=="-")
        arr_in[i]=`<span class="operator">-</span>`;
        else if(arr_in[i]=="%")
        arr_in[i]=`<span class="operator">%</span>`;
    }
    return arr_in.join("");
}
//function to solve or evaluate the expression created about
//it is done by recognizing the operators used
function evaluate(val){
    let last_in=input.slice(-1);
    let symbols = ["+","*","-","/"];

    if(val=="." && last_in==".")
    return false;
    if(symbols.includes(val)){
        if(symbols.includes(last_in))
        return false;
        else
        return true;
    }

    return true;
}

//this function is to display out after evaluating expression
function makeoutput(output){
    let out_string=output.toString();
    let decimal=out_string.split(".")[1];

    out_string=out_string.split(".")[0];
    
    let arr_out=out_string.split("");
    let m=arr_out.length;

    if(m>3){
        for(let i=m-3;i>0;i-=3){
            arr_out.splice(i,0,",");
        }
    }
    if(decimal){
        arr_out.push(".");
        arr_out.push(decimal)
    }

    return arr_out.join("");
}


function expression (input){
    let arr_in=input.split("");
    for(let i=0;i<arr_in.length;i++){
        if(arr_in[i]=="%")
        arr_in[i]="/100";
    }

    return arr_in.join("");
}