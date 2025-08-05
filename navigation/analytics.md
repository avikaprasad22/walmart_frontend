---
layout: tailwind
permalink: /analytics/
show_reading_time: false
menu: nav/home.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background-color: #b3dafe;
      color: #1a1a1a;
    }

    header {
      background-color: #1c60ff;
      color: #fff;
      padding: 16px 24px;
      font-size: 22px;
      font-weight: bold;
    }

    .container {
      max-width: 1000px;
      background-color: #f1dc73ff; /* baby yellow */
      margin: 40px auto;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }

    .flex-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
    }

    .form-section {
      flex: 1 1 45%;
      background-color: #0c1a2b; /* darker form background */
      padding: 20px;
      border-radius: 10px;
      color: #fff;
    }

    form label {
      display: block;
      margin-bottom: 14px;
      font-size: 16px;
    }

    input[type="number"] {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 6px;
      width: 100%;
      font-size: 14px;
      margin-top: 4px;
    }

    .btn-group {
      margin-top: 20px;
      display: flex;
      gap: 15px;
    }

    button {
      padding: 10px 20px;
      font-size: 15px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
    }

    .calculate-btn {
      background-color: #1c60ff;
      color: white;
    }

    .export-btn {
      background-color: #ffc107;
      color: black;
    }

    .chart-wrapper {
      flex: 1 1 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    canvas {
      max-width: 100%;
    }

    #result {
      font-weight: bold;
      margin-top: 10px;
      font-size: 16px;
      color: #1a1a1a;
    }

    .chart-title {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 10px;
      text-align: center;
      color: #0C1A2C
    }

    .net-profit-display {
      font-size: 16px;
      margin-top: 8px;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>

<header>
  <span class="text-yellow-300">Walmart</span>Poway - Net Revenue Calculator
</header>

<div class="container" id="report-section">
  <div class="flex-wrapper">
    <!-- Form Section -->
    <div class="form-section">
      <form id="expense-form">
        <label>Total Revenue: $
          <input type="number" id="revenue" required>
        </label>
        <label>Cost of Goods Sold (COGS): $
          <input type="number" id="cogs" required>
        </label>
        <label>Rent: $
          <input type="number" id="rent">
        </label>
        <label>Utilities: $
          <input type="number" id="utilities">
        </label>
        <label>Labor: $
          <input type="number" id="labor">
        </label>
        <label>Shipping: $
          <input type="number" id="shipping">
        </label>
        <label>Other Expenses: $
          <input type="number" id="other">
        </label>

        <div class="btn-group">
          <button type="submit" class="calculate-btn">Calculate</button>
          <button type="button" id="exportBtn" class="export-btn">Export as PDF</button>
        </div>
      </form>
    </div>

    <!-- Chart Section -->
    <div class="chart-wrapper">
      <div class="chart-title">Business Expense Breakdown</div>
      <canvas id="expenseChart" height="300"></canvas>
      <div id="result" class="net-profit-display"></div>
    </div>
  </div>
</div>

<script>
  const ctx = document.getElementById('expenseChart').getContext('2d');
  const result = document.getElementById('result');
  const form = document.getElementById('expense-form');
  const inputs = form.querySelectorAll('input');

  let chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['COGS', 'Rent', 'Utilities', 'Labor', 'Shipping', 'Other', 'Net Profit'],
      datasets: [{
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56',
          '#4BC0C0', '#9966FF', '#FF9F40', '#4CAF50'
        ]
      }]
    },
    options: {
      responsive: true,
      animation: {
        animateScale: true
      },
      plugins: {
        legend: { position: 'right' },
        title: {
          display: false
        }
      }
    }
  });

  function updateChart() {
    const revenue = parseFloat(document.getElementById('revenue').value) || 0;
    const cogs = parseFloat(document.getElementById('cogs').value) || 0;
    const rent = parseFloat(document.getElementById('rent').value) || 0;
    const utilities = parseFloat(document.getElementById('utilities').value) || 0;
    const labor = parseFloat(document.getElementById('labor').value) || 0;
    const shipping = parseFloat(document.getElementById('shipping').value) || 0;
    const other = parseFloat(document.getElementById('other').value) || 0;

    const totalExpenses = cogs + rent + utilities + labor + shipping + other;
    const netProfit = revenue - totalExpenses;

    chart.data.datasets[0].data = [
      cogs, rent, utilities, labor, shipping, other, netProfit > 0 ? netProfit : 0
    ];
    chart.update();

    result.innerText = `Net Profit: $${netProfit.toFixed(2)}`;
  }

  // Live update chart on input
  inputs.forEach(input => {
    input.addEventListener('input', updateChart);
  });

  // Prevent form from refreshing
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    updateChart();
  });

  document.getElementById('exportBtn').addEventListener('click', () => {
    const report = document.getElementById('report-section');
    const opt = {
      margin: 0,
      filename: 'business-report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 4,        // higher scale to fix image cut off
        useCORS: true,
        logging: false
      },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(report).save();
  });
</script>

</body>
</html>
