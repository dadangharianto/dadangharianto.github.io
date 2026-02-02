# QUEENS CATALOG - Katalog Elektronik Modern

Katalog produk elektronik modern dengan desain **Cyberpunk Luxury** menggunakan tema warna hitam dan pink hot. Website ini **fully responsive** dengan Tailwind CSS dan dapat diakses sempurna di semua perangkat (desktop, tablet, smartphone).

## 🎨 Fitur Utama

- **Katalog Produk Lengkap:** 12 produk elektronik dengan kategori (Smartphone, Laptop, Aksesori, Wearable)
- **Filter Produk:** Filter berdasarkan kategori, harga, dan rating
- **Pencarian Real-time:** Cari produk dengan instant search
- **Sorting:** Urutkan produk (Terbaru, Harga Terendah, Harga Tertinggi, Rating)
- **Harga & Diskon:** Tampilkan harga asli dan harga diskon dengan badge otomatis
- **Detail Produk:** Modal popup dengan spesifikasi lengkap dan fitur produk
- **Fully Responsive Design:** Optimal untuk mobile, tablet, dan desktop dengan Tailwind CSS
- **Cyberpunk Luxury Theme:** Desain modern dengan warna hitam (#0a0a0a) dan pink hot (#ff006e)
- **Mobile-First Approach:** Dioptimalkan khusus untuk pengalaman mobile yang sempurna

## 📁 Struktur Folder

```
queens-catalog-html/
├── index.html          # File HTML utama dengan Tailwind CSS
├── js/
│   └── app.js          # JavaScript vanilla untuk fungsionalitas
├── images/             # Folder gambar produk
│   ├── hero-banner.jpg
│   ├── featured-products-bg.jpg
│   ├── category-electronics.jpg
│   ├── category-accessories.jpg
│   └── category-wearables.jpg
└── README.md           # File dokumentasi ini
```

## 🚀 Cara Menggunakan

### 1. **Hosting di GitHub Pages**

#### Langkah 1: Buat Repository
- Buat repository baru di GitHub dengan nama `queens-catalog`
- Pastikan repository bersifat **Public**

#### Langkah 2: Upload Files
- Clone repository ke komputer Anda
- Copy semua file dan folder dari `queens-catalog-html/` ke dalam folder repository
- Struktur folder harus tetap sama seperti di atas

#### Langkah 3: Push ke GitHub
```bash
git add .
git commit -m "Initial commit: QUEENS CATALOG"
git push origin main
```

#### Langkah 4: Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Pergi ke **Settings** → **Pages**
3. Di bawah "Source", pilih branch `main`
4. Klik **Save**
5. Tunggu beberapa detik, GitHub akan memberikan URL website Anda

Website akan tersedia di: `https://username.github.io/queens-catalog`

### 2. **Hosting Lokal (Testing)**

Buka file `index.html` langsung di browser, atau gunakan local server:

```bash
# Menggunakan Python 3
python -m http.server 8000

# Menggunakan Node.js (jika sudah install)
npx http-server

# Menggunakan Live Server di VS Code
# Install extension "Live Server" kemudian klik "Go Live"
```

Kemudian buka browser dan akses: `http://localhost:8000`

## 📱 Responsive Breakpoints

Website ini menggunakan Tailwind CSS dengan breakpoints berikut:

| Breakpoint | Ukuran | Perangkat |
|-----------|--------|----------|
| `sm` | ≥ 640px | Tablet kecil |
| `md` | ≥ 768px | Tablet |
| `lg` | ≥ 1024px | Desktop |
| `xl` | ≥ 1280px | Desktop besar |

**Optimasi untuk setiap ukuran:**
- **Mobile (< 640px):** Single column grid, drawer menu, compact spacing
- **Tablet (640px - 1024px):** 2 column grid, collapsible sidebar
- **Desktop (> 1024px):** 3 column grid, permanent sidebar

## 🛠️ Teknologi yang Digunakan

- **HTML5:** Struktur semantic
- **Tailwind CSS 4:** Responsive design dengan utility classes
- **JavaScript (Vanilla):** Fungsionalitas interaktif tanpa dependencies
- **Google Fonts:** Poppins (heading) dan Inter (body)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)

## 🎨 Desain & Tema

### Warna
- **Primary:** Hot Pink (#ff006e)
- **Primary Dark:** Bright Pink (#ff1493)
- **Background:** Deep Black (#0a0a0a)
- **Card Background:** Dark Gray (#1a1a1a)
- **Secondary Background:** Medium Gray (#2a2a2a)
- **Text Primary:** Light Gray (#f5f5f5)
- **Text Secondary:** Medium Gray (#a0a0a0)

### Typography
- **Heading:** Poppins Bold (700, 800)
- **Body:** Inter Regular (400, 500, 600)

### Efek Visual
- Glow effect pada hover produk
- Smooth transitions dan animations
- Discount badge dengan rotasi
- Modal dengan backdrop blur
- Responsive spacing dengan `clamp()` untuk fluid typography

## 📝 Kustomisasi

### Menambah Produk Baru

Edit file `js/app.js` dan tambahkan object produk baru ke array `products`:

```javascript
{
  id: '13',
  name: 'Nama Produk',
  category: 'smartphones', // atau kategori lain
  price: 10000000,
  originalPrice: 12000000,
  image: 'images/nama-gambar.jpg',
  description: 'Deskripsi produk',
  rating: 4.5,
  reviews: 100,
  inStock: true,
  specs: {
    'Spek 1': 'Nilai 1',
    'Spek 2': 'Nilai 2',
  },
}
```

### Mengubah Warna

Edit konfigurasi Tailwind di `index.html` (dalam tag `<script>`):

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'primary': '#ff006e',           // Ubah warna pink
        'dark-bg': '#0a0a0a',           // Ubah warna background
        'dark-card': '#1a1a1a',         // Ubah warna card
        // ... warna lainnya
      }
    }
  }
}
```

### Menambah Kategori

Edit array `categories` di `js/app.js`:

```javascript
const categories = [
  { id: 'all', name: 'Semua Produk' },
  { id: 'smartphones', name: 'Smartphone' },
  // Tambahkan kategori baru di sini
];
```

## 🔍 SEO & Meta Tags

File `index.html` sudah dilengkapi dengan:
- Meta description
- Viewport meta tag untuk responsive design
- Theme color meta tag
- Semantic HTML5 structure

## 🌐 Deployment Options

### GitHub Pages (Recommended)
- Gratis dan unlimited
- Custom domain support
- Automatic HTTPS
- Lihat instruksi di atas

### Netlify
1. Push repository ke GitHub
2. Buat akun di netlify.com
3. Connect repository
4. Deploy otomatis

### Vercel
1. Push repository ke GitHub
2. Buat akun di vercel.com
3. Import project
4. Deploy otomatis

### Traditional Hosting
- Upload semua file ke server web hosting
- Pastikan struktur folder tetap sama

## 📧 Kontak & Support

Jika ada pertanyaan atau masalah, silakan hubungi atau buat issue di repository.

## 📄 Lisensi

Proyek ini bebas digunakan untuk keperluan pribadi maupun komersial.

---

**Dibuat dengan ❤️ menggunakan Tailwind CSS dan JavaScript Vanilla**

Selamat menggunakan QUEENS CATALOG! 🎉
