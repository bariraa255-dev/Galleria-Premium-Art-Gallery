const paintings = [
  {
    id: 1,
    title: "Color Harmony",
    artist: "Ayesha Khan",
    category: "Abstract",
    medium: "Acrylic Color",
    surface: "Canvas",
    year: "2025",
    price: "PKR 30,000",
    image: "abstract1.jpg",
    artistBio: "Ayesha Khan is a contemporary abstract artist from Pakistan.",
  },

  {
    id: 2,
    title: "Creative Shapes",
    artist: "Bilal Ahmed",
    category: "Abstract",
    medium: "Charcoal",
    surface: "Paper",
    year: "2024",
    price: "PKR 22,000",
    image: "abstract2.jpg",
    artistBio: "Bilal Ahmed specializes in charcoal abstract compositions.",
  },

  {
    id: 3,
    title: "Mountain View",
    artist: "Fatima Ali",
    category: "Landscape",
    medium: "Oil Color",
    surface: "Canvas",
    year: "2023",
    price: "PKR 42,000",
    image: "landscape1.jpg",
    artistBio: "Fatima Ali paints beautiful mountain landscapes.",
  },

  {
    id: 4,
    title: "Spring Blossom",
    artist: "Sana Noor",
    category: "Flower",
    medium: "Water Color",
    surface: "Paper",
    year: "2024",
    price: "PKR 18,000",
    image: "flower1.jpg",
    artistBio: "Sana Noor creates elegant floral watercolor paintings.",
  },

  {
    id: 5,
    title: "Green Valley",
    artist: "Ahmed Raza",
    category: "Nature",
    medium: "Water Color",
    surface: "Paper",
    year: "2023",
    price: "PKR 20,000",
    image: "nature1.jpg",
    artistBio: "Ahmed Raza is known for peaceful nature scenes.",
  },

  {
    id: 6,
    title: "Forest Beauty",
    artist: "Hina Malik",
    category: "Nature",
    medium: "Acrylic Color",
    surface: "Fabric",
    year: "2025",
    price: "PKR 28,000",
    image: "nature2.jpg",
    artistBio: "Hina Malik paints forests using acrylic colors.",
  },

  {
    id: 7,
    title: "Silent Thoughts",
    artist: "Sarah Khan",
    category: "Figurative",
    medium: "Charcoal",
    surface: "Paper",
    year: "2022",
    price: "PKR 26,000",
    image: "figurative1.jpg",
    artistBio: "Sarah Khan focuses on expressive figurative artwork.",
  },
  {
    id: 8,
    title: "Divine Calligraphy",
    artist: "Muhammad Usman",
    category: "Religious",
    medium: "Ink Color",
    surface: "OHP Sheet",
    year: "2024",
    price: "PKR 35,000",
    image: "religious1.jpg",
    artistBio:
      "Muhammad Usman is a Pakistani Islamic calligraphy artist known for creating detailed religious artworks using ink on OHP sheets and canvas.",
  },
  {
    id: 9,
    title: "Faith and Light",
    artist: "Zain Ali",
    category: "Religious",
    medium: "Ball Point Pen",
    surface: "Acrylic Sheet",
    year: "2025",
    price: "PKR 32,000",
    image: "religious2.jpg",
    artistBio: "Zain Ali creates detailed religious calligraphy.",
  },

  {
    id: 10,
    title: "Golden Sunset",
    artist: "Hamza Ali",
    category: "Landscape",
    medium: "Oil Color",
    surface: "Canvas",
    year: "2024",
    price: "PKR 38,000",
    image: "landscape2.jpg",
    artistBio: "Hamza Ali specializes in sunset landscapes.",
  },

  {
    id: 11,
    title: "Red Rose",
    artist: "Areeba Noor",
    category: "Flower",
    medium: "Poster Color",
    surface: "Paper",
    year: "2025",
    price: "PKR 17,000",
    image: "flower2.jpg",
    artistBio: "Areeba Noor enjoys painting flowers with poster colors.",
  },

  {
    id: 12,
    title: "Color Splash",
    artist: "Ali Hassan",
    category: "Abstract",
    medium: "Acrylic Color",
    surface: "Fabric",
    year: "2024",
    price: "PKR 31,000",
    image: "abstract3.jpg",
    artistBio: "Ali Hassan is a modern abstract artist.",
  },

  {
    id: 13,
    title: "Blue River",
    artist: "Fatima Zahra",
    category: "Nature",
    medium: "Water Color",
    surface: "Paper",
    year: "2023",
    price: "PKR 24,000",
    image: "nature3.jpg",
    artistBio: "Fatima Zahra captures rivers and valleys beautifully.",
  },

  {
    id: 14,
    title: "The Thinker",
    artist: "Usman Khan",
    category: "Figurative",
    medium: "Charcoal",
    surface: "Canvas",
    year: "2025",
    price: "PKR 29,000",
    image: "figurative2.jpg",
    artistBio: "Usman Khan creates expressive figurative charcoal paintings.",
  },

  {
    id: 15,
    title: "Holy Words",
    artist: "Muhammad Bilal",
    category: "Religious",
    medium: "Ink Color",
    surface: "Canvas",
    year: "2024",
    price: "PKR 35,000",
    image: "religious3.jpg",
    artistBio: "Muhammad Bilal specializes in Islamic calligraphy artwork.",
  },
];

function getPaintingById(id) {
  return paintings.find(function (p) {
    return p.id === id;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      this.classList.add("active");

      const filter = this.getAttribute("data-filter").toLowerCase();

      galleryItems.forEach(function (item) {
        const category = item.getAttribute("data-category").toLowerCase();

        if (filter === "all") {
          item.style.display = "block";
        } else if (category.includes(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  const searchBox = document.getElementById("searchBox");

  if (searchBox) {
    searchBox.addEventListener("keyup", function () {
      const value = this.value.toLowerCase();

      galleryItems.forEach(function (item) {
        const text = item.innerText.toLowerCase();

        if (text.includes(value)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  }
});

function loadPaintingDetails() {
  const params = new URLSearchParams(window.location.search);

  const id = parseInt(params.get("id"));

  if (isNaN(id)) return;

  const painting = getPaintingById(id);

  if (!painting) {
    alert("Painting not found!");
    return;
  }

  const img = document.getElementById("paintingImage");
  if (img) {
    img.src = painting.image;
    img.alt = painting.title;
  }

  const title = document.getElementById("paintingTitle");
  if (title) title.textContent = painting.title;

  const artist = document.getElementById("artistName");
  if (artist) artist.textContent = painting.artist;

  const category = document.getElementById("category");
  if (category) category.textContent = painting.category;

  const medium = document.getElementById("medium");
  if (medium) medium.textContent = painting.medium;

  const surface = document.getElementById("surface");
  if (surface) surface.textContent = painting.surface;

  const year = document.getElementById("year");
  if (year) year.textContent = painting.year;

  const price = document.getElementById("price");
  if (price) price.textContent = painting.price;

  const bio = document.getElementById("artistBio");
  if (bio) bio.textContent = painting.artistBio;
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("paintingImage")) {
    loadPaintingDetails();
  }
});

function downloadWord() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const painting = getPaintingById(id);

  if (!painting) return;

  const content = `GALLERIA ART GALLERY

Painting Title: ${painting.title}

Artist: ${painting.artist}
Category: ${painting.category}
Medium: ${painting.medium}
Surface: ${painting.surface}
Year: ${painting.year}
Price: ${painting.price}

Artist Biography:
${painting.artistBio}
`;

  const blob = new Blob([content], {
    type: "application/msword",
  });

  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = painting.title + ".doc";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", function () {
  // Load painting details if on painting.html
  if (document.getElementById("paintingImage")) {
    loadPaintingDetails();
  }

  // Download button
  const btn = document.getElementById("downloadWord");

  if (btn) {
    btn.addEventListener("click", downloadWord);
  }
});
