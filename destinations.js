// --- LOCATION DESCRIPTIONS ---
// This data is used to populate the modal pop-ups.
const locationInfo = {
    "La Hanul lui Hanganu": "Situated in Lalova village, Rezina, this guesthouse offers a wonderful escape in the traditional Moldovan style. It's renowned for its authentic local cuisine, especially its tiny 'sarmale'. Located near the Dniester River, it provides boat trips and is a short distance from the famous Țipova and Saharna monasteries.",
    "Rezervația Naturală Codrii": "The oldest scientific reserve in Moldova, located near Lozova, Strășeni. This protected area spans over 5,000 hectares and preserves a unique Central European forest ecosystem, rich with oak and beech trees. It's a vital habitat for over 1,000 plant species, 43 mammal species (like red deer and wildcats), and 145 bird species. A 'Nature Museum' within the reserve showcases its biodiversity.",
    "La Hâlboc": "A stunning lookout point near Vălcineț, Călărași, famously nicknamed 'Little Brașov' for its breathtaking panoramic view over the Codrii forests. Located at the edge of the deepest natural hollow in the region, it's a rapidly growing hotspot for hikers and nature lovers seeking fresh air and incredible scenery.",
    "Castel Mimi": "A world-class winery and architectural monument in Bulboaca, Anenii Noi. Built around 1900 by Constantin Mimi, it's considered the first authentic château in Bessarabia and is listed among the top 15 most beautiful wineries in the world. The complex now features a museum, art gallery, a luxury hotel, a spa, and a fine-dining restaurant.",
    "Complex Tur. Costești": "Located in Costești, Ialoveni, this is a large tourist complex designed for relaxation and events. It offers a wide range of facilities including a modern hotel, private gazebos, a large swimming pool, elegant banquet halls, professional conference rooms, and a dedicated camping area, making it ideal for both holidays and corporate functions.",
    "Butoiaș": "A well-known restaurant in Chișinău, 'Butoiaș' is celebrated for its traditional Moldovan cuisine and rustic, folk-inspired atmosphere. It's a popular choice for those looking to experience authentic local dishes and hospitality right in the capital city.",
    "Imperial Palace": "Located in Cojușna, Imperial Palace is an accommodation and event complex. It provides hotel services and facilities for hosting private events like weddings and parties in a grand setting.",
    "Murmur de Izvor": "A tranquil guesthouse located in Ratuș, near Chișinău. It offers a peaceful retreat from the city with comfortable accommodation, often praised for its natural surroundings and relaxing atmosphere.",
    "Camping pe Toloacă": "This campsite in Milești, Nisporeni, offers a genuine connection with nature. It's a place for visitors to enjoy the simplicity of the outdoors, set up tents, and experience the Moldovan countryside.",
    "Pensiunea La Iepurași": "A charming guesthouse in Lunga, Florești, known for its cozy atmosphere and family-friendly environment. It's a great spot to experience rural Moldovan life and hospitality.",
    "ILLU Glamping": "Located in Trebujeni, near the famous Orheiul Vechi cultural complex, ILLU Glamping offers a luxury camping experience. Guests can stay in stylish, well-equipped domes with stunning views of the Răut River valley.",
    "Equestrian Glamping": "Situated in Bardar, Ialoveni, this unique glamping site combines luxury camping with a passion for horses. It's located near a horse club, offering guests a special opportunity to interact with horses and enjoy nature in comfort.",
    "Radisson Blu Leogrand Hotel": "A prominent 5-star hotel in the heart of Chișinău. It offers luxury accommodation, multiple restaurants, a spa, and extensive conference facilities, catering to both business travelers and tourists seeking high-end services.",
    "Restaurant Oscar": "A popular restaurant in Bălți, 'Oscar' is known for its diverse menu, pleasant ambiance, and quality service, making it a go-to spot for dining in the city.",
    "Mi Piace": "An elegant restaurant in Chișinău, 'Mi Piace' is known for its Italian and European cuisine. It's located in the picturesque Valea Trandafirilor park, offering a beautiful setting for a meal.",
    "Sobor Family Resort": "A modern resort in Stăuceni, just outside Chișinău, designed for family fun and relaxation. It features swimming pools, recreational areas, and restaurants, making it a popular summer destination.",
    "La Bădiş": "A well-regarded restaurant located on the Chișinău-Ungheni route. It serves traditional Moldovan food in a rustic setting, making it a convenient and popular stop for travelers."
};


document.addEventListener("DOMContentLoaded", () => {
    
    // --- PAGINATION SCRIPT ---
    const cardsPerPage = 6;
    let allCards = document.querySelectorAll(".locations .box_location");
    const pageButtonsContainer = document.querySelector(".pagination");
    const pageJump = document.querySelector(".page-jump");
    const pageInput = document.getElementById("page-input");
    const pageGoBtn = document.getElementById("page-go-btn");
    
    let totalPages = Math.ceil(allCards.length / cardsPerPage);

    function createPageButtons() {
        if (!pageButtonsContainer) return;
        
        // Clear existing buttons (except for the page-jump div)
        pageButtonsContainer.innerHTML = '';
        if (pageJump) {
            pageButtonsContainer.appendChild(pageJump);
        }

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.className = "page-btn";
            btn.dataset.page = i;
            btn.textContent = i;
            if (i === 1) {
                btn.classList.add("active");
            }
            if (pageJump) {
                pageButtonsContainer.insertBefore(btn, pageJump);
            } else {
                pageButtonsContainer.appendChild(btn);
            }
        }
        
        // Re-add event listeners to new buttons
        pageButtonsContainer.querySelectorAll(".page-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const page = parseInt(btn.dataset.page);
                showPage(page);
            });
        });
    }

    function updatePagination() {
        allCards = document.querySelectorAll(".locations .box_location");
        totalPages = Math.ceil(allCards.length / cardsPerPage);
        
        createPageButtons();
        
        if (pageInput) {
            pageInput.max = totalPages > 0 ? totalPages : 1;
            pageInput.value = 1;
        }
        
        if (totalPages <= 1) {
            pageButtonsContainer.style.display = "none";
        } else {
            pageButtonsContainer.style.display = "flex";
        }

        showPage(1);
    }

    function showPage(pageNumber) {
        if (pageNumber < 1) pageNumber = 1;
        if (pageNumber > totalPages) pageNumber = totalPages;

        allCards.forEach(card => {
            card.classList.remove("visible");
        });

        const startIndex = (pageNumber - 1) * cardsPerPage;
        const endIndex = pageNumber * cardsPerPage;

        for (let i = startIndex; i < endIndex && i < allCards.length; i++) {
            if (allCards[i]) {
                allCards[i].classList.add("visible");
            }
        }

        pageButtonsContainer.querySelectorAll(".page-btn").forEach(btn => {
            btn.classList.remove("active");
            if (parseInt(btn.dataset.page) === pageNumber) {
                btn.classList.add("active");
            }
        });
        
        if (pageInput) {
            pageInput.value = pageNumber;
        }
    }

    function goToPage() {
        if (!pageInput) return;
        const page = parseInt(pageInput.value);
        if (page >= 1 && page <= totalPages) {
            showPage(page);
        } else {
            showPage(1); // Reset to 1 if input is invalid
        }
    }

    if (pageGoBtn) {
        pageGoBtn.addEventListener("click", goToPage);
    }

    if (pageInput) {
        pageInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                goToPage();
            }
        });
    }

    // Initial setup for pagination
    updatePagination();

    // --- MODAL SCRIPT ---
    const modalOverlay = document.getElementById('location-modal-overlay');
    const modalContent = document.getElementById('location-modal-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const readMoreLinks = document.querySelectorAll('.infoabout a');

    // Modal UI Elements
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalLocation = document.getElementById('modal-location');
    const modalRating = document.getElementById('modal-rating');
    const modalDescription = document.getElementById('modal-description');

    function openModal(card) {
        // 1. Extract data from the card
        const title = card.querySelector('h4').textContent;
        const location = card.querySelector('.locat p').textContent;
        const rating = card.querySelector('.rating p').textContent;
        
        // Extract background-image URL
        const rawImgUrl = card.querySelector('.top').style.backgroundImage;
        const cleanImgUrl = rawImgUrl.replace(/url\(['"]?(.*?)['"]?\)/, '$1');
        
        // 2. Get description from our data object
        const description = locationInfo[title] || "More information about this wonderful location is coming soon!";

        // 3. Populate modal
        modalImage.style.backgroundImage = `url(${cleanImgUrl})`;
        modalTitle.textContent = title;
        modalLocation.textContent = location;
        modalRating.textContent = rating;
        modalDescription.textContent = description;

        // 4. Show modal
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scrolling
    }

    // Add click listeners to all "Read More" links
    readMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Stop the link from trying to navigate
            const card = e.target.closest('.box_location');
            if (card) {
                openModal(card);
            }
        });
    });

    // Add close listeners
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            // Only close if the click is on the overlay itself, not the content
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    // Optional: Close modal with 'Escape' key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

});
