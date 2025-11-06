// --- PAGINATION SCRIPT (UPDATED) ---
document.addEventListener("DOMContentLoaded", () => {
    const cardsPerPage = 6;
    const allCards = document.querySelectorAll(".locations .box_location");
    const pageButtons = document.querySelectorAll(".pagination .page-btn");
    
    // New elements for page jump
    const pageInput = document.getElementById("page-input");
    const pageGoBtn = document.getElementById("page-go-btn");
    
    // Calculate total pages and set max for input
    const totalPages = Math.ceil(allCards.length / cardsPerPage);
    if (pageInput) {
        pageInput.max = totalPages;
    }

    function showPage(pageNumber) {
        // Ensure pageNumber is valid
        if (pageNumber < 1) pageNumber = 1;
        if (pageNumber > totalPages) pageNumber = totalPages;

        // Hide all cards
        allCards.forEach(card => {
            card.classList.remove("visible");
        });

        // Calculate start and end index
        const startIndex = (pageNumber - 1) * cardsPerPage;
        const endIndex = pageNumber * cardsPerPage;

        // Show cards for the current page
        for (let i = startIndex; i < endIndex && i < allCards.length; i++) {
            if (allCards[i]) {
                allCards[i].classList.add("visible");
            }
        }

        // Update active button state
        pageButtons.forEach(btn => {
            btn.classList.remove("active");
            if (parseInt(btn.dataset.page) === pageNumber) {
                btn.classList.add("active");
            }
        });
        
        // Update input field value
        if (pageInput) {
            pageInput.value = pageNumber;
        }
    }

    // Add click event listeners to static page buttons
    pageButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const page = parseInt(btn.dataset.page);
            showPage(page);
        });
    });

    // Function to handle page jump
    function goToPage() {
        const page = parseInt(pageInput.value);
        if (page >= 1 && page <= totalPages) {
            showPage(page);
        } else {
            // Optionally, reset to current page if input is invalid
            showPage(1); // or reset to 1
        }
    }

    // Add click listener for 'Go' button
    if (pageGoBtn) {
        pageGoBtn.addEventListener("click", goToPage);
    }

    // Add keypress listener for 'Enter' in input
    if (pageInput) {
        pageInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault(); // Stop form submission
                goToPage();
            }
        });
    }

    // Show the first page initially
    showPage(1);
});
