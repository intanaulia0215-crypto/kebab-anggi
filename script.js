// Data daftar menu
const daftarMenu = [
    { nama: "Kebab Original", kategori: "kebab", harga: "Rp 15.000" },
    { nama: "Kebab Keju Spesial", kategori: "kebab", harga: "Rp 20.000" },
    { nama: "Burger Sapi Original", kategori: "burger", harga: "Rp 15.000" },
    { nama: "Burger Double Cheese", kategori: "burger", harga: "Rp 22.000" },
    { nama: "Roti Bakar Coklat Keju", kategori: "roti-bakar", harga: "Rp 12.000" },
    { nama: "Roti John Special Anggi", kategori: "roti-john", harga: "Rp 25.000" }
];

// Fungsi merender daftar menu ke layar
function renderMenu(data) {
    const container = document.getElementById('menuContainer');
    if (!container) return;
    
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#777; padding:20px;">Menu tidak ditemukan.</p>';
        return;
    }

    data.forEach(item => {
        container.innerHTML += `
            <div class="menu-card">
                <h3>${item.nama}</h3>
                <p>${item.harga}</p>
            </div>
        `;
    });
}

// Fungsi Pencarian
function filterMenu(event) {
    const keyword = event.target.value.toLowerCase();
    const hasilPencarian = daftarMenu.filter(item => 
        item.nama.toLowerCase().includes(keyword)
    );
    renderMenu(hasilPencarian);
}

// Fungsi Filter Kategori (seperti yang terlihat di layar Anda)
function filterCategory(kategori, element) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    if (element) element.classList.add('active');

    if (kategori === 'semua') {
        renderMenu(daftarMenu);
    } else {
        const hasilFilter = daftarMenu.filter(item => item.kategori === kategori);
        renderMenu(hasilFilter);
    }
}

// Jalankan otomatis saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    renderMenu(daftarMenu);
});