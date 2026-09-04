const doubtInput=
document.querySelector('text area');
const  subjectInput=
  document.querySelector('input[placeholder*="subjects"]');
const buttons=
  document.querySelectorALL('button');
const getAnserButton=
  [...button].find(
     button=>
   button.textContent.trim()==='Get Answer'
   );
const clearButton=
  [...buttons].find(
      button=>
button.textContent.trim()==== 'Clear'
    );
// Create an area to display the AI answer
const answerBox=
  document.createElement('div');
answerBox.style.marginTop='20px';
  answerBox.style.padding='15px';
document.body.appendChild(answerBox):
const doubtInput=document.quarySelector('textarea');
const getAnswerButton=[...document.quarySelectorAll('button)].find(b=>b.textcontent.trim()==='Get Answer);
//Create the answer box
const answerBox =document.createElement('div');
document.body.appendChild(answerBox);
//WHEN "Get Answer" button is clicked
getAnswerButton.addEventListen('click', async ()=>{
  answerBox.innerText="Thinking...";
  const res=await fetch("https://api.featherless.ai/v1/chat/completions",{
    method: "POST",
    headers:{
      "content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY_HERE"
    },
    body: JSON.stringify({
      model:"meta-llama/Meta-Llama-3-8B-Instuct",
      messages: [{ role: "user", content: doubtInput.value }]
    })
  });
  const data = await res.json();
  answerBox.innerText = data.choices[0].message.content;
});
answerBox.style.borderRadius=
  '15px';
answerBox.style.background='#fff';
answerBox.style.border='1px solid
 #f3c4d5';
  answerBox.innerHTML='<strong>AI
  Answer:</strong><p>Ask me a question!
  </p>';
doubtInput.parentElement.appendChild(
  answerBox);
// Get Answer button
getAnswerButton.addEventListener('click',()=>{
  const subject =
    subjectInput.value.trim();
const doubt =
  doubtInput.value.trim();
  if (!doubt) {
    answerBox.innerHTML=
      '<strong>AI Answer:</
      strong><p>Please enter your doubt
    first.</p>Please enter your doubt first.</p>;
    return;
  }
  answerBox.innerHTML='<strong>AI Answer:</strong>
    </p>Your AI answerwill appear here.</p>;
});
//Clear button
clearButton.addEventListener('click', ()=>{
  doubleInput.value=' ';
  subjectInput.value=' ';

  answerBox.innerHTML='<strong>AI answer:</strong><p>Ask me question!</p>';
});
      
