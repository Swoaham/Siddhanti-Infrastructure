const projects = [
    {
        title: "The Horizon at Hiriketiya",
        year: 2024,
        category: "hotel",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607"
    },
    {
        title: "River Pavilion at Kithulgala",
        year: 2023,
        category: "bungalow",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607"
    },
    {
        title: "The Courtyard at Bangalore",
        year: 2023,
        category: "residential",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
        title: "Urban House at Colombo",
        year: 2022,
        category: "residential",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
    },
    {
        title: "Wellness Retreat at Habarana",
        year: 2019,
        category: "hotel",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    {
        title: "The Parallel Pavilions",
        year: 2022,
        category: "bungalow",
        image: "https://images.unsplash.com/photo-1599423300746-b62533397364"
    },
    {
        title: "Striated House at Rajagiriya",
        year: 2019,
        category: "residential",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    },
    {
        title: "Vantage Villas & Spa",
        year: 2021,
        category: "hotel",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
    },
    {
        title: "Lake View Bungalow",
        year: 2020,
        category: "bungalow",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
    },
    {
        title: "Modern Courtyard Residence",
        year: 2024,
        category: "residential",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
    }
];

const container = document.getElementById("projectContainer");

function displayProjects(category) {
    container.innerHTML = "";

    const filtered = category === "all"
        ? projects
        : projects.filter(p => p.category === category);

    filtered.forEach(project => {
        container.innerHTML += `
            <div class="col col-6 col-md-4 col-lg-3 mb-3"> 
                <div class="card h-100">
                 <img src="${project.image}" class="card-img-top">
                    <div class="card-body px-0">
                        <h6 class="card-title mb-1">${project.title}</h6>
                        <p class="card-text text-muted">${project.year}</p>
                    </div>
                </div>
            </div>
            `;
    });
}

// Filter click logic
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelectorAll(".filter-btn")
            .forEach(b => b.classList.remove("active"));

        btn.classList.add("active");
        displayProjects(btn.dataset.category);
    });
});

// Initial load
displayProjects("all");