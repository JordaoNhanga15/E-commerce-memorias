(function all(win,doc,even){

    let form=doc.querySelector('.form')
    let button=doc.querySelector('.btn_form')
    let text_box=[...doc.querySelectorAll('.text_box')] /*O objeto NodeList dentro de um array*/ 

    button.addEventListener('click',text_no,false)
    function text_no(){

        text_box.forEach((value,index,array)=>{
            if(text_box[index].value===""){
                return form.classList.add('no_no')
            }
            else{
                form.classList.add('button')
                button.style.display="none"
            }
        })

        form.addEventListener('animationend',(event)=>{
            if(event.animationName==='no_no'){ 
                form.classList.remove('no_no')
            }
            else { 
                text_box.forEach((value,index,array)=>{
                    text_box[index].value=""
                })
                form.classList.remove('button')
                button.style.display="block"
            }
        },false)
    }
})(window,document)