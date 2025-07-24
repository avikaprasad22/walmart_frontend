---
layout: tailwind
permalink: /about/
show_reading_time: false 
menu: nav/home.html
---

<style>
  body {
    font-family: Arial, sans-serif;
  }
  .page-content { text-align: center; }
  .header {
    background: linear-gradient(to bottom, #cce4ff, white);
    padding: 20px 6px;
    color: black;
    text-align: center;
  }
  .header h1 {
    font-size: 40px;
    font-weight: bold;
    color: #1e3a8a;
  }
  .content {
    max-width: 800px;
    margin: 0 auto;
    font-size: 18px;
    color: #4b5563;
  }
  .section {
    max-width: 900px;
    margin: 40px auto;
    padding: 16px;
  }
  .section h2 {
    font-size: 30px;
    font-weight: bold;
    color: #1e3a8a;
  }
  .section-highlight {
    margin-bottom: 40px;
    background: linear-gradient(to bottom, #93c5fd, #3b82f6);
    padding: 20px 6px;
    color: white;
  }
  .section-highlight h2 {
    font-size: 40px;
    font-weight: bold;
    color: #1e3a8a;
    margin-bottom: 12px;
  }
  .section-highlight .content {
    max-width: 800px;
    margin: 0 auto;
    font-size: 18px;
    color: white;
  }
  .section-documentation {
    background: linear-gradient(to bottom, #1e3a8a, #0f172a);
    padding: 24px 6px;
    color: #e5e7eb;
  }
  .section-documentation h2 {
    font-size: 40px;
    font-weight: bold;
    color: #93c5fd;
    margin-bottom: 12px;
  }
  .section-documentation .content {
    max-width: 800px;
    margin: 0 auto;
    font-size: 18px;
    color: #e5e7eb;
  }
  .section-documentation a {
    color: #60a5fa;
    text-decoration: underline;
  }
  .section-documentation a:hover {
    color: #bfdbfe;
  }
  .buttons button {
    background-color: #2563eb;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    margin: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }
  .buttons button:hover {
    background-color: #1d4ed8;
  }
  .popup {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: none;
    align-items: center;
    justify-content: center;
  }
  .popup-content {
    background: white;
    color: black;
    padding: 20px;
    border-radius: 10px;
    width: 350px;
    position: relative;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.3);
  }
  .popup-content button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
  }
  .popup ul {
    text-align: left;
    color: #4b5563;
  }
</style>

<div class="header">
  <h1>About StockSmart</h1>
  <p class="content">
    StockSmart is a digital platform built to make shopping and working at Walmart faster, easier, and more transparent. Whether you're a customer planning your trip or a Walmart associate tracking stock and deliveries, StockSmart helps you locate items, check real-time restocks, and explore store layouts—all in one place.
  </p>
</div>

<div class="page-content">
  <div class="section-highlight">
    <h2>Our Mission & Vision</h2>
    <p class="content">
      Our mission is to create a modern, user-friendly solution that enhances the Walmart experience for shoppers and employees alike. We envision a system where item availability, restock locations, and delivery updates are accessible instantly—saving time, reducing frustration, and increasing productivity across the board.
    </p>
  </div>

  <div class="section-documentation">
    <h2>Resources & Support</h2>
    <p class="content">
      Need to get in touch with Walmart directly? Here are some official resources:
      <ul class="mt-4" style="text-align: center; margin: 0 auto;">
        <li><a href="https://www.walmart.com/help" target="_blank"> Walmart Customer Service Portal</a></li>
        <li><a href="https://one.walmart.com" target="_blank"> Walmart Employee Portal (OneWalmart)</a></li>
        <li><a href="https://walmartethics.com/" target="_blank"> Walmart Ethics & Concern Reporting</a></li>
      </ul>
    </p>
  </div>

  <div class="buttons">
    <button onclick="openPopup('teamPopup')">Meet Our Team</button>
  </div>
</div>

<div id="teamPopup" class="popup" onclick="closePopup(event, 'teamPopup')">
  <div class="popup-content">
    <button onclick="closePopup(event, 'teamPopup')">&times;</button>
    <h2>Our Team</h2>
    <ul>
      <li><strong>Avika</strong> – Project Manager</li>
      <li><strong>Nora</strong> – UI/UX Designer </li>
      <li><strong>Vibha</strong> – Backend & Inventory API</li>
    </ul>
  </div>
</div>

<script>
  function openPopup(id) {
    document.getElementById(id).style.display = "flex";
  }
  function closePopup(event, id) {
    if (event.target.classList.contains("popup") || event.target.tagName === "BUTTON") {
      document.getElementById(id).style.display = "none";
    }
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      document.querySelectorAll(".popup").forEach(popup => popup.style.display = "none");
    }
  });
</script>
