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
      
