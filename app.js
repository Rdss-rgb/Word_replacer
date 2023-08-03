var contain=document.querySelector('.container');





//DIV
var dib=document.createElement('div');
dib.className="wrapper";
//REFRESH
var btn_reload=document.createElement('button');
btn_reload.setAttribute('class','btn_class reload');
btn_reload.setAttribute('id','reload');
btn_reload.setAttribute('title','Reload Page');
//IMG REFRESH
var reload_img=document.createElement('img');
reload_img.src="https://img.icons8.com/ios/50/FFFFFF/synchronize.png";
reload_img.style.width="30px";
reload_img.style.height="30px";
//PAGE INSERT
var page1=document.createElement('div');
page1.setAttribute('class','page1');
page1.setAttribute('id','page1');
//LABEL
var lbl=document.createElement('label');
lbl.setAttribute('for','para');
lbl.setAttribute('class','lblpara');
lbl.textContent="Enter Paragraph";
//textarea
var txtarea=document.createElement('textarea');
txtarea.setAttribute('name','para');
txtarea.setAttribute('id','forpara');
txtarea.setAttribute('cols','30');
txtarea.setAttribute('rows','11');
//p
var p=document.createElement('p');
p.setAttribute('id','display_parag');
//add
var btn1=document.createElement('button');
btn1.setAttribute('class','btn_class insert');
btn1.setAttribute('id','btn_insert');
btn1.setAttribute('title','Add This Paragraph');
//IMG add
var insert_img=document.createElement('img');
insert_img.src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png";
insert_img.style.width="30px";
insert_img.style.height="30px";
//total search
var lbltotal=document.createElement('label');
lbltotal.setAttribute('class','totali');
//div container header
var header_div=document.createElement('div');
header_div.style.position="absolute";
header_div.style.top="40px";
header_div.style.width="80%";
header_div.style.display="flex";
header_div.style.flexDirection="row";
header_div.style.gap="0.5rem";
header_div.style.justifyContent="space-between";
//div replace
var replace_div=document.createElement('div');
replace_div.style.position="relative";
//input replace
var rep=document.createElement('input');
rep.setAttribute('type', 'text');
rep.setAttribute('name', 'paragrep');
rep.setAttribute('placeholder', 'Enter a word to be replaced here');
rep.setAttribute('id', 'rep');
//btn_replace
var rep_btn=document.createElement('button');
rep_btn.setAttribute("class","btn_change");
var replace_img=document.createElement('img');
replace_img.src="https://img.icons8.com/ios/50/replace.png";
replace_img.style.width="20px";
replace_img.style.height="20px";
//search div
var search_div=document.createElement('div');
search_div.style.position="relative";
search_div.style.marginBottom="5px";
//input div
var btnsearch=document.createElement('input');
btnsearch.setAttribute('type', 'text');
btnsearch.setAttribute('name', 'search');
btnsearch.setAttribute('placeholder', 'Search');
btnsearch.setAttribute('id', 'search');
btnsearch.setAttribute('disabled', 'disabled');

var search_img=document.createElement('img');
search_img.style.position="absolute";
search_img.style.backgroundColor="white";
search_img.style.left="5px";
search_img.style.top="6px";
search_img.src="https://img.icons8.com/color/search";
search_img.style.width="30px";
search_img.style.height="30px";
search_img.style.position="absolute";





contain.appendChild(dib);
dib.appendChild(btn_reload);
dib.appendChild(lbltotal);
dib.appendChild(header_div);
header_div.appendChild(search_div);
header_div.appendChild(replace_div);
search_div.appendChild(btnsearch);
search_div.appendChild(search_img);
page1.appendChild(btn1);
replace_div.appendChild(rep);
replace_div.appendChild(rep_btn);
rep_btn.appendChild(replace_img);
dib.appendChild(page1);
btn_reload.appendChild(reload_img);
btn1.appendChild(insert_img);
page1.appendChild(lbl);
page1.appendChild(txtarea);
dib.appendChild(p);




btn_reload.addEventListener('click', ()=>{
    location.reload();
})

btn1.addEventListener('click',()=>{

    var textvalue= txtarea.value;
    console.log(textvalue);
    if(textvalue !==''){
        p.innerHTML=textvalue;
        page1.style.display="none";
        p.style.display="block";

        btnsearch.removeAttribute("disabled");
    }
    else{
        alert('Please enter your sample paragraph');
    }
  
})

btnsearch.addEventListener('keyup',()=>{
    var textvalue;
    var ss=document.querySelector('#search').value;
    const specialchar=/[!@#$%^&*(),.?":{}|<>]/g; 
  if(textvalue !==""){
    let regex = new RegExp(ss,'gi');
    p.innerHTML=(p.textContent).replace(regex,"<mark>$&</mark>");
    if(btnsearch.value !== ''){
        var countmark=document.getElementsByTagName('mark').length;
    console.log(countmark);
    lbltotal.textContent="Total Text Matches: "+countmark;
    }
    else{
        lbltotal.textContent="";
        // var countmark=document.getElementsByTagName('mark').length;
        // console.log(countmark);
        // lbltotal.textContent=countmark-1;
    }
  }
 
})

function replacedone(){
    var ss=document.querySelector('#search').value;
    let regex = new RegExp(ss,'gi');
    p.innerHTML=(p.textContent).replace(regex,"<mark>$&</mark>");
    
}

rep_btn.addEventListener('click',()=>{
    var sss=document.querySelector('#rep').value;
    var ss=document.querySelector('#search').value;
    let regex = new RegExp(ss,'gi');
    p.innerHTML=(p.textContent).replaceAll(regex,sss);
    var ss=document.querySelector('#search').value=sss;
    replacedone();
    
})










