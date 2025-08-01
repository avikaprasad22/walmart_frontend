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
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
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

  <script>
    let wishlist = [];
    let currentPage = 1;
    const pageSize = 5;

    const tableBody = document.getElementById('wishlistTable');
    const pageNum = document.getElementById('pageNum');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dropdown = document.getElementById('productDropdown');
    const searchInput = document.getElementById('searchInput');

    const user_uid = 'toby'; // Replace with dynamic user if needed

    // Load out-of-stock products
    async function loadOutOfStock() {
      const { data } = await axios.get('/api/inventory');
      const filtered = data.filter(p => p.availability.toLowerCase() !== 'in stock');
      dropdown.innerHTML = '<option value="">Select an out-of-stock product</option>';
      filtered.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.name} (ID: ${p.id})`;
        dropdown.appendChild(opt);
      });
    }

    // Load wishlist
    async function loadWishlist() {
      const { data } = await axios.get(`/api/wishlist/${user_uid}`);
      wishlist = data;
      renderTable();
    }

    function renderTable() {
      const filtered = wishlist.filter(item => {
        const query = searchInput.value.toLowerCase();
        return item.product_name.toLowerCase().includes(query);
      });

      const totalPages = Math.ceil(filtered.length / pageSize);
      currentPage = Math.max(1, Math.min(currentPage, totalPages));
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;

      tableBody.innerHTML = '';
      filtered.slice(start, end).forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
          <td class="px-4 py-2">${item.product_name}</td>
          <td class="px-4 py-2">${item.availability}</td>
          <td class="px-4 py-2">${item.date_added}</td>
          <td class="px-4 py-2">
            <input type="checkbox" ${item.notify ? 'checked' : ''} 
              onchange="toggleNotify(${item.id}, this.checked)"
              class="w-4 h-4 text-indigo-600 border-gray-300 rounded">
          </td>
          <td class="px-4 py-2">
            <button onclick="deleteItem(${item.product_id})" 
              class="text-red-600 hover:text-red-800">🗑️</button>
          </td>
        `;
        tableBody.appendChild(row);
      });

      pageNum.textContent = `Page ${currentPage} of ${totalPages || 1}`;
      prevBtn.disabled = currentPage === 1;
      nextBtn.disabled = currentPage === totalPages || totalPages === 0;
    }

    function toggleNotify(id, flag) {
      axios.patch(`/api/wishlist/${id}`, { notify: flag })
        .then(() => loadWishlist())
        .catch(err => console.error("Notify update failed", err));
    }

    function deleteItem(productId) {
      axios.delete(`/api/wishlist/${user_uid}/${productId}`)
        .then(() => loadWishlist())
        .catch(err => console.error("Delete failed", err));
    }

    document.getElementById('wishlistForm').addEventListener('submit', async e => {
      e.preventDefault();
      const productId = dropdown.value;
      if (!productId) return;

      await axios.post('/api/wishlist', {
        user_uid: user_uid,
        product_id: parseInt(productId),
        notify: true
      });
      await loadWishlist();
    });

    searchInput.addEventListener('input', renderTable);
    prevBtn.addEventListener('click', () => { currentPage--; renderTable(); });
    nextBtn.addEventListener('click', () => { currentPage++; renderTable(); });

    // Initial load
    loadOutOfStock();
    loadWishlist();
  </script>
</body>
</html>