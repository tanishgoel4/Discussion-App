var subject= document.getElementById("subject");
var description= document.getElementById("description");
var submit=document.getElementById("submit");
var question_container=document.getElementById("question_container");
var data=localStorage.getItem("questions");
var right_container=document.getElementById("right_container");
var response_section=document.getElementById("response_section")
var response_name=document.getElementById("response_name");
var response_desc=document.getElementById("response_desc");
var response_sub=document.getElementById("response_sub");
var response_body=document.getElementById("response_body");


 if(data){
     data = JSON.parse(data)
 }
   var array = data || [];
  
 
array.forEach(function(data,index)
{
    
    var subject_title = data.title;
    var description_text = data.description;

    var container=document.createElement("div");
    var subject_heading=document.createElement("h2");

    subject_heading.innerText=subject_title;

    var description_node=document.createElement("p");
    description_node.innerText=description_text;

    var horizontal=document.createElement('hr');

    container.appendChild(subject_heading);
    container.appendChild(description_node);
    container.appendChild(horizontal);
    question_container.appendChild(container);
     
       container.addEventListener("click",function(){
         right_container.innerHTML="";
         console.log(index);
      
         var question=document.createElement("h2");
         question.innerHTML="Question:";
         question.setAttribute("class","questionn");

         var ques_div=document.createElement("div");
         ques_div.setAttribute("class","ques");


         var ques_head=document.createElement("h2");
         ques_head.innerHTML=subject_title;
         ques_head.setAttribute("class","ques_head");

         var ques_desc=document.createElement("p");
         ques_desc.innerHTML=description_text;
         ques_desc.setAttribute("class","ques_des");

         var resolve= document.createElement("button");
         resolve.innerHTML="Resolve";
         resolve.setAttribute("class","Submit")

         ques_div.appendChild(ques_head);
         ques_div.appendChild(ques_desc);
         ques_div.appendChild(resolve);
         
         right_container.appendChild(question);
         right_container.appendChild(ques_div);
         right_container.appendChild(resolve);

         resolve.addEventListener("click",function(){
            question_container.removeChild(container);
            array.splice(index,1);
            localStorage.setItem("questions",JSON.stringify(array))
           
           window.location.reload();
          
        })
    
          
         response_section.style.display="block";
        
         response_sub.addEventListener("click",function(){
             var response_tile=response_name.value;
             var response_text=response_desc.value;

             var response_div =document.createElement("div");

             var response_head=document.createElement("h2");
            
             response_head.innerText=response_tile;
             response_head.setAttribute("class","ques_head");

             var desc_node=document.createElement("p");
             desc_node.innerText=response_text;
             desc_node.setAttribute("class","ques_des");

             var hor_line=document.createElement("hr");

             response_div.appendChild(response_head);
             response_div.appendChild(desc_node);
             response_div.appendChild(hor_line);
             response_div.setAttribute("class","ques");
             

             response_body.appendChild(response_div);
         })

     })
    

})



submit.addEventListener("click",function(){
    window.location.reload();
  
    var subject_title=subject.value;
    var description_text=description.value;

    var container=document.createElement("div");
    var subject_heading=document.createElement("h2");

    subject_heading.innerText=subject_title;

    var description_node=document.createElement("p");
    description_node.innerText=description_text;

    var horizontal=document.createElement('hr');

    container.appendChild(subject_heading);
    container.appendChild(description_node);
    container.appendChild(horizontal);
    question_container.appendChild(container);
     
       container.addEventListener("click",function(){
         right_container.innerHTML="";
         console.log();
         var question=document.createElement("h2");
         question.innerHTML="Question:";
         question.setAttribute("class","questionn");

         var ques_div=document.createElement("div");
         ques_div.setAttribute("class","ques");


         var ques_head=document.createElement("h2");
         ques_head.innerHTML=subject_title;
         ques_head.setAttribute("class","ques_head");

         var ques_desc=document.createElement("p");
         ques_desc.innerHTML=description_text;
         ques_desc.setAttribute("class","ques_des");

         var resolve= document.createElement("button");
         resolve.innerHTML="Resolve";
         resolve.setAttribute("class","Submit")

         ques_div.appendChild(ques_head);
         ques_div.appendChild(ques_desc);
         ques_div.appendChild(resolve);
         
         right_container.appendChild(question);
         right_container.appendChild(ques_div);
         right_container.appendChild(resolve);

         resolve.addEventListener("click",function(index){
             
           
            question_container.removeChild(container);
            array.splice(index,1);
            localStorage.setItem("questions",JSON.stringify(array))
            window.location.reload();
          
        })
       
         response_section.style.display="block";
        
         response_sub.addEventListener("click",function(){
             var response_tile=response_name.value;
             var response_text=response_desc.value;

             var response_div =document.createElement("div");

             var response_head=document.createElement("h2");
            
             response_head.innerText=response_tile;
             response_head.setAttribute("class","ques_head");

             var desc_node=document.createElement("p");
             desc_node.innerText=response_text;
             desc_node.setAttribute("class","ques_des");

             var hor_line=document.createElement("hr");

             response_div.appendChild(response_head);
             response_div.appendChild(desc_node);
             response_div.appendChild(hor_line);
             response_div.setAttribute("class","ques");
             

             response_body.appendChild(response_div);
            })

        })

    array.push({
        title:subject_title,
        description: description_text
    });
  
   localStorage.setItem("questions",JSON.stringify(array));

     
})