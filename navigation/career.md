---
layout: tailwind
permalink: /career/
show_reading_time: false
menu: nav/home.html
---

<title>Biotechnology Career Quiz</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">

<style>
  .biotech-quiz-page {
    font-family: 'Poppins', sans-serif;
    /* background: linear-gradient(135deg, rgb(0, 0, 0), rgb(0, 0, 0)); */
    color: rgb(170, 255, 237);
    padding: 20px;
  }

  .biotech-quiz-page h1 {
    text-align: center;
    background: linear-gradient(to right, #00bfa5, #1de9b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 25px;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  .biotech-quiz-page h3 {
    color: rgb(228, 249, 243);
  }

  .biotech-quiz-page label {
    font-weight: 500;
  }

  .biotech-quiz-page .quiz-section {
    background-color: rgb(0, 197, 151);
    padding: 25px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 700px;
    margin: 20px auto;
  }

  .biotech-quiz-page button {
    background: rgb(122, 212, 175);
    color: white;
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.3s ease;
    margin-top: 10px;
  }

  .biotech-quiz-page button:hover {
    background: rgb(40, 217, 173);
  }

  .biotech-quiz-page #career-result {
    display: none;
    margin-top: 30px;
    padding: 25px;
    border: 2px dashed rgb(151, 234, 205);
    border-radius: 16px;
    background-color: rgb(0, 198, 152);
    animation: fadeIn 0.5s ease-in-out;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  .biotech-quiz-page .spinner {
    margin-top: 10px;
    border: 4px solid rgb(209, 219, 215);
    border-top: 4px solid rgb(153, 121, 204);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
    display: inline-block;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  #biotech-popup h2 {
  color: #0d9488;
  }

  #reopen-popup-btn {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

</style>

<div class="biotech-quiz-page">
  <h1>🔬 Biotechnology Career Quiz</h1>
<!-- Reopen Button -->
<button onclick="openPopup()" id="reopen-popup-btn"
  style="position: fixed; top: 120px; right: 24px; background-color: #14b8a6; 
         color: white; padding: 8px 16px; border-radius: 9999px; 
         box-shadow: 0 4px 6px rgba(0,0,0,0.1); z-index: 9999;">
  ℹ️ About Biotech
</button>
  <div class="quiz-section">
    <h3>Answer these questions to discover your future career in Biotechnology💡:</h3>
    <form id="quiz-form">
      <p><strong>1.</strong> Are you interested in working with genetic data?</p>
      <input type="radio" name="q1" value="5"> Yes<br>
      <input type="radio" name="q1" value="0"> No<br><br>
      <p><strong>2.</strong> Do you enjoy conducting experiments in a lab?</p>
      <input type="radio" name="q2" value="5"> Yes<br>
      <input type="radio" name="q2" value="0"> No<br><br>
      <p><strong>3.</strong> Are you interested in coding and analyzing biological data?</p>
      <input type="radio" name="q3" value="5"> Yes<br>
      <input type="radio" name="q3" value="0"> No<br><br>
      <p><strong>4.</strong> Do you want to contribute to developing new medical treatments?</p>
      <input type="radio" name="q4" value="5"> Yes<br>
      <input type="radio" name="q4" value="0"> No<br><br>
      <p><strong>5.</strong> Are you curious about how living organisms function at the molecular level?</p>
      <input type="radio" name="q5" value="5"> Yes<br>
      <input type="radio" name="q5" value="0"> No<br><br>
      <button type="button" onclick="calculateScore()">Submit Quiz</button>
    </form>
  </div>
  <!-- Biotech Info Pop-up -->
  <div id="biotech-popup" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 hidden">
    <div class="bg-white text-black p-6 rounded-2xl shadow-xl max-w-xl w-full relative">
      <button onclick="closePopup()" class="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl font-bold">&times;</button>
      <h2 class="text-2xl font-semibold mb-3"> What is Biotechnology?</h2>
      <p class="mb-4 text-sm leading-relaxed">
      Biotechnology is a rapidly growing field that applies biology and technology to improve healthcare, agriculture, and environmental sustainability. From gene editing (like CRISPR) to vaccine development, biotech is changing our world.<br><br>
      Biotechnology stands at the forefront of scientific advancement, blending biology, chemistry, engineering, and data science to push the boundaries of what is possible. Its applications are vast and continually expanding, promising a future where we can better understand life itself and apply that knowledge to improve the quality of life for people and the planet alike.<br><br>
      Careers range from lab researchers and pharmaceutical engineers to data scientists and regulatory analysts. Whether you're into coding, chemistry, or environmental science, there's a path for you in biotech.<br><br>
      🧠 Want to explore more? Here are some trusted resources to get started:
      <ul class="list-disc list-inside mt-2 text-teal-700">
        <li><a href="https://www.khanacademy.org/science/biology" target="_blank" class="underline hover:text-teal-800">Khan Academy – Biology</a></li>
        <li><a href="https://www.nature.com/nbt/" target="_blank" class="underline hover:text-teal-800">Nature Biotechnology</a></li>
        <li><a href="https://www.genome.gov/" target="_blank" class="underline hover:text-teal-800">National Human Genome Research Institute (NHGRI)</a></li>
        <li><a href="https://learn.genetics.utah.edu/" target="_blank" class="underline hover:text-teal-800">Learn Genetics – University of Utah</a></li>
      </ul>
    </p>
      <button onclick="closePopup()" class="mt-3 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md shadow transition">
        Got it!
      </button>
    </div>
  </div>


  <div id="career-result">
    <h2>Your Suggested Career in Biotechnology:</h2>
    <p id="career-result-text"></p>
    <div id="spinner" class="spinner" style="display: none;"></div>
  </div>

  <div style="text-align:center; margin-top: 30px;">
    <a
      href="/genescope/college/"
      class="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-semibold text-white bg-teal-500 rounded-md shadow-lg group hover:bg-teal-600 transition-all duration-300 ease-in-out"
      style="width: auto; max-width: 250px;"
    >
      <span
        class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-teal-700 rounded group-hover:-mr-4 group-hover:-mt-4"
      >
        <span
          class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
        ></span>
      </span>
      <span
        class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-teal-700 rounded group-hover:-ml-4 group-hover:-mb-4"
      >
        <span
          class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
        ></span>
      </span>
      <span
        class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-teal-600 rounded-md group-hover:translate-x-0"
      ></span>
      <span
        class="relative text-sm text-center transition-colors duration-200 ease-in-out group-hover:text-white"
      >
        🎓 Interested in Colleges?
      </span>
    </a>
  </div>
</div>

<script>
  let displayedCareers = new Set();
  let allCareers = [];
  let currentIndex = 0;

  async function calculateScore() {
    let score = 0;
    const form = document.getElementById("quiz-form");
    const radios = form.querySelectorAll('input[type="radio"]:checked');

    radios.forEach(radio => {
      score += parseInt(radio.value);
    });

    const biologyScore = Math.round((score / 25) * 100);

    const resultDiv = document.getElementById("career-result");
    const resultText = document.getElementById("career-result-text");
    const spinner = document.getElementById("spinner");

    resultDiv.style.display = "block";
    resultText.innerHTML = `<strong>🎓 Your quiz score:</strong> ${score} out of 25<br><strong>🧬 Estimated Biotechnology Score:</strong> ${biologyScore}/100<br><br>🔍 Finding the best match...`;
    spinner.style.display = "inline-block";

    const careerData = await fetchCareersByBiologyScore(biologyScore);

    spinner.style.display = "none";
    resultText.innerHTML += `<br><br>${careerData}`;
  }

  async function fetchCareersByBiologyScore(score) {
    try {
      const response = await fetch(`http://127.0.0.1:8504/api/get_careers?biology_score=${score}`);
      const result = await response.json();

      if (result && result.careers && result.careers.length > 0) {
        const careers = result.careers.filter(career => {
          const careerName = career.career_aspiration.toLowerCase();
          if (careerName !== "unknown" && !displayedCareers.has(careerName)) {
            displayedCareers.add(careerName);
            return true;
          }
          return false;
        });

        allCareers = careers;
        currentIndex = 0;
        return showCareers();
      } else {
        return "No matching career data found.";
      }
    } catch (error) {
      console.error("Error fetching career data:", error);
      return "Error fetching career data.";
    }
  }

  function showCareers() {
    const careersToShow = allCareers.slice(currentIndex, currentIndex + 5);
    currentIndex += careersToShow.length;

    const careersText = careersToShow.map(career => `${career.career_aspiration}`).join('<br>');
    let resultHTML = `Based on your answers, consider exploring:<br><strong>${careersText}</strong>`;

    if (currentIndex < allCareers.length) {
      resultHTML += `<br><br><button onclick="showMoreCareers()">Show More</button>`;
    }

    return resultHTML;
  }

  function showMoreCareers() {
    const careersToShow = allCareers.slice(currentIndex, currentIndex + 5);
    currentIndex += careersToShow.length;

    const careersText = careersToShow.map(career => `${career.career_aspiration}`).join('<br>');
    const resultText = document.getElementById("career-result-text");

    resultText.innerHTML += `<br><br><strong>${careersText}</strong>`;

    if (currentIndex >= allCareers.length) {
      const showMoreButton = document.querySelector("button");
      if (showMoreButton) showMoreButton.style.display = "none";
    }
  }
  window.addEventListener('DOMContentLoaded', () => {
  const popupShown = sessionStorage.getItem('biotechPopupShown');
  if (!popupShown) {
    document.getElementById('biotech-popup').classList.remove('hidden');
    sessionStorage.setItem('biotechPopupShown', 'true');
  }
});

function closePopup() {
  document.getElementById('biotech-popup').classList.add('hidden');
}

function openPopup() {
  document.getElementById('biotech-popup').classList.remove('hidden');
}
</script>