// 1. SELECT ALL HTML ELEMENTS
const doubtInput = document.querySelector('textarea');
const searchInput = document.querySelector('input[placeholder*="subjects"]');
const destinationSelect = document.querySelector('select');
const buttons = document.querySelectorAll('button');

// Create a single response box for AI answers and routing info
const answerBox = document.createElement('div');
answerBox.style.marginTop = '15px';
answerBox.style.padding = '10px';
answerBox.style.border = '1px solid #ccc';
answerBox.style.borderRadius = '5px';
answerBox.style.backgroundColor = '#f9f9f9';
document.body.appendChild(answerBox);

// Helper function to find buttons regardless of small typos or spaces
const findButton = (text) => [...buttons].find(b => b.textContent.trim().toLowerCase() === text.toLowerCase());

const getAnswerBtn = findButton('Get answer');
const clearBtn = findButton('clear');
const searchBtn = findButton('Search');
const routeBtn = findButton('Show my route');
const mapBtn = findButton('Find my way');

// -------------------------------------------------------------
// 2. STUDY HELP: AI ANSWER BUTTON
// -------------------------------------------------------------
if (getAnswerBtn) {
  getAnswerBtn.addEventListener('click', async () => {
    const question = doubtInput ? doubtInput.value : '';
    if (!question) {
      alert("Please enter a question first!");
      return;
    }

    answerBox.innerText = "Thinking...";

    try {
      const response = await fetch("https://api.featherless.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer YOUR_API_KEY_HERE" // <--- PASTE FEATHERLESS API KEY HERE
        },
        body: JSON.stringify({
          model: "meta-llama/Meta-Llama-3-8B-Instruct",
          messages: [{ role: "user", content: question }]
        })
      });

      const data = await response.json();
      answerBox.innerText = data.choices[0].message.content;
    } catch (error) {
      answerBox.innerText = "Error fetching answer. Check your API key or internet connection.";
      console.error(error);
    }
  });
}

// -------------------------------------------------------------
// 3. STUDY HELP: CLEAR BUTTON
// -------------------------------------------------------------
if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    if (doubtInput) doubtInput.value = '';
    answerBox.innerText = '';
  });
}

// -------------------------------------------------------------
// 4. STUDY THOUGHTS: SEARCH BUTTON
// -------------------------------------------------------------
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const query = searchInput ? searchInput.value : '';
    if (!query) {
      alert("Please enter a search topic!");
      return;
    }
    answerBox.innerText = Searching records for: "${query}"... (Connect your database/AI here!);
  });
}

// -------------------------------------------------------------
// 5. CAMPUS ROUTE & MAP LOCATOR
// -------------------------------------------------------------
if (routeBtn) {
  routeBtn.addEventListener('click', () => {
    const destination = destinationSelect ? destinationSelect.value : 'Admin block';
    answerBox.innerText = 📍 Directions to ${destination}: Head straight past the main gate, take the first right, and continue for 100 meters.;
  });
}

if (mapBtn) {
  mapBtn.addEventListener('click', () => {
    answerBox.innerHTML = `
      <p><b>Campus Map:</b></p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.827289139268!2d78.6662!3d17.4522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzA3LjkiTiA3OMKwMzknNTgzLjMiRQ!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
        width="100%" 
        height="250" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
      </iframe>`;
  });
}
      
