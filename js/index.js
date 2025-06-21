// Toggle navbar
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick = () => {
  navbar.classList.toggle('active');
};

// Swiper untuk produk (jika ada 2 row, kita ambil semuanya)
const productSwipers = [];
document.querySelectorAll('.product-row').forEach((el, i) => {
  const instance = new Swiper(el, {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: el.querySelector('.swiper-pagination'),
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  productSwipers.push(instance);
});

// Swiper untuk blogs
const blogsSwiper = new Swiper(".blogs-row", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Swiper untuk review
const reviewSwiper = new Swiper(".review-row", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Pencarian Produk
const searchInput = document.getElementById('search-input');
const productBoxes = document.querySelectorAll('.product .swiper-slide.box');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();

  productBoxes.forEach(box => {
    const productName = box.querySelector('h3').textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });

  // Update semua Swiper produk setelah pencarian
  productSwipers.forEach(swiper => swiper.update());
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Hindari reload

    // Ambil nilai input
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    // Validasi dasar (opsional)
    if (!nama || !email || !subject || !pesan) {
      alert("Semua field harus diisi!");
      return;
    }

    // Notifikasi sukses
    alert("Pesan Anda berhasil dikirim! Terima kasih 😊");

    // Reset form
    form.reset();
  });
});

