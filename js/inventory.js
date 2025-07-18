// DOM Elements
const searchBar = document.getElementById('searchBar');
const productTable = document.getElementById('productTable');
const addProductModal = document.getElementById('addProductModal');

// Fetch and display products
async function loadProducts(query = '') {
  try {
    const endpoint = query ? `/api/inventory/search?query=${query}` : '/api/inventory/';
    const response = await axios.get(endpoint);
    
    productTable.innerHTML = response.data.map(product => `
      <tr class="hover:bg-blue-50" data-id="${product.id}">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${product.product_id}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.name}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${product.aisle}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm ${product.stock < 5 ? 'text-red-600 font-bold' : 'text-gray-500'}">
          ${product.stock}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$${product.price.toFixed(2)}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <button onclick="editProduct('${product.product_id}')" class="text-blue-600 hover:text-blue-800 mr-3">✏️</button>
          <button onclick="deleteProduct('${product.product_id}')" class="text-red-600 hover:text-red-800">🗑️</button>
        </td>
      </tr>
    `).join('');
  } catch (error) {
    console.error("Error loading products:", error);
  }
}

// Search functionality
searchBar.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') loadProducts(searchBar.value);
});

// Load products on page load
document.addEventListener('DOMContentLoaded', () => loadProducts());