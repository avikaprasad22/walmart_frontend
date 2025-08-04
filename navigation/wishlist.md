---
layout: tailwind
permalink: /wishlist/
show_reading_time: false
menu: nav/home.html
---

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>My Wishlist</title>
</head>
<body class="bg-gray-100 min-h-screen">

  <!-- Header -->
  <header class="bg-indigo-600 text-white shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">📝 Wishlist</h1>
      <div class="relative w-1/3">
        <input 
          type="text" 
          id="searchInput"
          placeholder="Search products..." 
          class="w-full py-2 px-4 rounded-full text-gray-800 focus:outline-none"
        >
      </div>
    </div>
  </header>

  <!-- Main Section -->
  <main class="container mx-auto px-4 py-6">
    
  <!-- Add to Wishlist -->
  <div class="mb-6">
      <h2 class="text-xl font-semibold mb-2 text-indigo-800">Add Product to Wishlist</h2>
      <form id="wishlistForm" class="flex space-x-4">
        <select id="productDropdown" class="w-1/2 p-2 rounded border">
          <option value="">Select an out-of-stock product</option>
        </select>
        <button 
          type="submit" 
          class="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-bold py-2 px-4 rounded"
        >Add</button>
      </form>
    </div>

  <!-- Wishlist Table -->
  <div class="bg-white shadow rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-indigo-100 text-indigo-800 text-left">
          <tr>
            <th class="px-4 py-2 text-sm font-semibold">Product</th>
            <th class="px-4 py-2 text-sm font-semibold">Availability</th>
            <th class="px-4 py-2 text-sm font-semibold">Date Added</th>
            <th class="px-4 py-2 text-sm font-semibold">Notify</th>
            <th class="px-4 py-2 text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody id="wishlistTable" class="divide-y divide-gray-100">
          <!-- Dynamically rendered -->
        </tbody>
      </table>
    </div>

  <!-- Pagination -->
   <div class="flex justify-between items-center mt-4">
      <button 
        id="prevBtn" 
        class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
      >Prev</button>
      <span id="pageNum" class="text-gray-700 font-medium"></span>
      <button 
        id="nextBtn" 
        class="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
      >Next</button>
    </div>
  </main>

<script type="module">
  import { pythonURI, fetchOptions } from "{{site.baseurl}}/assets/js/api/config.js";

  let wishlistData = [];
  let currentPage = 1;
  const itemsPerPage = 5;

  document.addEventListener("DOMContentLoaded", function () {
    loadDropdown();
    loadWishlist();
    document.getElementById("searchInput").addEventListener("input", renderWishlist);
    document.getElementById("addToWishlist").addEventListener("click", addToWishlist);
    document.getElementById("prevPage").addEventListener("click", () => changePage(-1));
    document.getElementById("nextPage").addEventListener("click", () => changePage(1));
  });

  function loadDropdown() {
    fetch(`${pythonURI}/api/inventory`, { ...fetchOptions, method: "GET" })
      .then(res => res.json())
      .then(products => {
        const dropdown = document.getElementById("productDropdown");
        dropdown.innerHTML = products
          .filter(p => p.stock === 0)
          .map(p => `<option value="${p.name}">${p.name}</option>`)  
          .join("");
      });
  }

  function loadWishlist() {
    fetch(`${pythonURI}/api/user`, { method: "GET", credentials: "include" })
      .then(res => res.json())
      .then(user => {
        return fetch(`${pythonURI}/api/wishlist`, {
          ...fetchOptions,
          method: "GET",
          credentials: "include"
        });
      })
      .then(res => res.json())
      .then(data => {
        wishlistData = data;
        renderWishlist();
      });
  }

  function renderWishlist() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const tableBody = document.getElementById("wishlistTable");
    const filtered = wishlistData.filter(item => item.name.toLowerCase().includes(searchTerm));
    const totalPages = Math.ceil(filtered.length / itemsPerPage);

    currentPage = Math.max(1, Math.min(currentPage, totalPages));
    const start = (currentPage - 1) * itemsPerPage;
    const pageItems = filtered.slice(start, start + itemsPerPage);

    tableBody.innerHTML = pageItems.map(item => `
      <tr>
        <td class="px-6 py-4 text-gray-800">${item.name}</td>
        <td class="px-6 py-4">
          <input type="checkbox" ${item.notify ? "checked" : ""} onchange="toggleNotify('${item.name}', this.checked)" class="form-checkbox text-blue-500">
        </td>
        <td class="px-6 py-4">
          <button onclick="deleteItem('${item.name}')" class="text-red-600 hover:text-red-800">Delete</button>
        </td>
      </tr>
    `).join("");

    document.getElementById("pageInfo").textContent = `Page ${currentPage} of ${totalPages || 1}`;
  }

  function changePage(delta) {
    currentPage += delta;
    renderWishlist();
  }

  window.toggleNotify = function(name, notify) {
    fetch(`${pythonURI}/api/user`, { method: "GET", credentials: "include" })
      .then(res => res.json())
      .then(user => {
        return fetch(`${pythonURI}/api/wishlist`, {
          ...fetchOptions,
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, notify, _name: user.uid }),
          credentials: "include"
        });
      })
      .then(res => res.json())
      .then(() => loadWishlist());
  }

  window.deleteItem = function(name) {
    fetch(`${pythonURI}/api/user`, { method: "GET", credentials: "include" })
      .then(res => res.json())
      .then(user => {
        return fetch(`${pythonURI}/api/wishlist/${name}`, {
          ...fetchOptions,
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ _name: user.uid }),
          credentials: "include"
        });
      })
      .then(res => res.json())
      .then(() => loadWishlist());
  }

  function addToWishlist() {
    const name = document.getElementById("productDropdown").value;
    fetch(`${pythonURI}/api/user`, { method: "GET", credentials: "include" })
      .then(res => res.json())
      .then(user => {
        return fetch(`${pythonURI}/api/wishlist`, {
          ...fetchOptions,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, notify: true, _name: user.uid }),
          credentials: "include"
        });
      })
      .then(res => res.json())
      .then(() => loadWishlist());
  }
</script>


</body>
</html>
