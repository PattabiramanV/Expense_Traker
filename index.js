
'use strict'

let All_span_tags=document.querySelectorAll("span");
let history_show_box=document.querySelector(".show_box_history");
let form_data=document.forms.amount_form;
let txet_input_box=form_data.elements.text_input;
let number_input_box=document.forms.amount_form.number_input;
let find_cost_type=0;

form_data.addEventListener("submit",(event)=>{
    event.preventDefault();

    if(txet_input_box.value!="" && number_input_box.value!=""){
 find_cost_type=number_input_box.value>0? true:false;
number_input_box.value>0? history_add_Fun(txet_input_box.value,"+"+number_input_box.value):history_add_Fun(txet_input_box.value,number_input_box.value);
console.log(find_cost_type);
form_data.reset();
    }
    
else{
    alert("plese enter value");
}
});

function history_add_Fun(x,y){

let X_btn = document.createElement("h4");
X_btn.className = "x_btn";
X_btn.innerHTML = "X";

let history_box = document.createElement("div");
history_box.className = "history_box";
let history_amount = document.createElement("h5");
history_amount.innerHTML=y;

let p_tag = document.createElement("p");
p_tag.innerHTML=x;

history_box.append(p_tag,history_amount);

let history_box_parent=document.createElement("div");
history_box_parent.className="history_box_parent";

history_box_parent.append(X_btn,history_box);

    document.querySelector(".history_show_box").append(history_box_parent);
    
    
if(find_cost_type){
    All_span_tags[1].innerHTML= Number(All_span_tags[1].innerHTML)+Number(y);
All_span_tags[0].innerHTML= Number(All_span_tags[0].innerHTML)+Number(y);
    
}
else{
All_span_tags[0].innerHTML= Number(All_span_tags[0].innerHTML)+Number(y);
    y=y.slice(1,y.length);
    All_span_tags[2].innerHTML= Number(All_span_tags[2].innerHTML)+Number(y);
    history_box.classList.add("border_chage");
}

    X_btn.addEventListener("click",()=>{
history_box_parent.remove();
 let value=Number(X_btn.parentElement.lastElementChild.lastElementChild.innerHTML);

if(value>0){
    All_span_tags[1].innerHTML= Number(All_span_tags[1].innerHTML)-value;
}
else{
    All_span_tags[2].innerHTML= Number(All_span_tags[2].innerHTML)+value;
    history_box.classList.add("border_chage");
}
All_span_tags[0].innerHTML= Number(All_span_tags[0].innerHTML)-value;

      });
}
























// document.querySelector(".history_show_box").addEventListener("mouseover",(event)=>{
   
// console.log(event.target);
//    if(event.target!=p_tag && event.target!=history_amount){
//     event.target.parentElement.firstChild.classList.add("x_button");

//    }
//         // X_btn.classList.add("x_button")
//     });

//     document.querySelector(".history_show_box").addEventListener("mouseout",(event)=>{
//         console.log(event.target);

//         // if(event.target!=p_tag && event.target!=history_amount){

//         // event.target.parentElement.firstChild.classList.remove("x_button");

//         }
//     });
    