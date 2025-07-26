---
layout: tailwind
permalink: /inventory/
show_reading_time: false
menu: nav/home.html
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Walmart Poway - Inventory</title>
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>
<body class="bg-gray-100 min-h-screen">
  <!-- Header -->
  <header class="bg-blue-600 text-white shadow-md">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <h1 class="text-2xl font-bold flex items-center">
        <span class="text-yellow-300">Walmart</span> Poway Inventory
      </h1>
      <div class="relative w-1/3">
        <input 
          type="text" 
          id="searchBar"
          placeholder="Search products..." 
          class="w-full py-2 px-4 rounded-full text-gray-800 focus:outline-none"
        >
        <button id="searchBtn" class="absolute right-2 top-2 text-blue-600">
          🔍
        </button>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto px-4 py-6">
    <!-- Action Buttons -->
    <div class="flex justify-end mb-6 space-x-3">
      <button 
        id="addProductBtn"
        class="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-2 px-4 rounded"
      >
        + Add Product
      </button>
      <button 
        id="lowStockBtn"
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        🔔 Low Stock
      </button>
    </div>

    <!-- Product Table -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-blue-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase">Product</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase">Aisle</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase">Stock</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase">Price</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-blue-800 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody id="productTable" class="divide-y divide-gray-200">
          <!-- Products will load here dynamically -->
        </tbody>
      </table>
    </div>
  </main>

  <!-- Add Product Modal (Hidden by default) -->
  <div id="addProductModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center">
    <div class="bg-white rounded-lg p-6 w-1/3">
      <h2 class="text-xl font-bold text-blue-800 mb-4">Add New Product</h2>
      <form id="productForm">
        <input type="hidden" id="editProductId">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Product ID</label>
            <input type="text" id="productId" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
          </div>
          <!-- Other form fields (name, stock, etc.) -->
        </div>
        <div class="mt-6 flex justify-end space-x-3">
          <button type="button" id="cancelBtn" class="px-4 py-2 border rounded-md">Cancel</button>
          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Save</button>
        </div>
      </form>
    </div>
  </div>

  <script src="/assets/js/inventory.js"></script>
</body>
</html>