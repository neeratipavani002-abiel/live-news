
/* =========================================
   STREAMTUBE JAVASCRIPT
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const notificationBtn =
    document.getElementById("notificationBtn");

const categories =
    document.querySelectorAll(".category");

const videoCards =
    document.querySelectorAll(".video-card");


/* =========================================
   SIDEBAR TOGGLE
========================================= */

menuBtn.addEventListener("click", () => {

    if (sidebar.classList.contains("collapsed")) {

        sidebar.classList.remove("collapsed");

        sidebar.style.width = "220px";
        mainContent.style.marginLeft = "220px";

    } else {

        sidebar.classList.add("collapsed");

        sidebar.style.width = "75px";
        mainContent.style.marginLeft = "75px";

    }

});


/* =========================================
   SEARCH FUNCTION
========================================= */

function searchVideos() {

    const searchText =
        searchInput.value.trim().toLowerCase();

    if (searchText === "") {

        videoCards.forEach(card => {
            card.style.display = "block";
        });

        return;
    }


    videoCards.forEach(card => {

        const title =
            card.dataset.title.toLowerCase();

        if (title.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* SEARCH BUTTON */

searchBtn.addEventListener("click", () => {

    searchVideos();

});


/* SEARCH WHILE TYPING */

searchInput.addEventListener("input", () => {

    searchVideos();

});


/* ENTER KEY SEARCH */

searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        searchVideos();

    }

});


/* =========================================
   CATEGORY BUTTONS
========================================= */

categories.forEach(category => {

    category.addEventListener("click", () => {


        /* Remove active */

        categories.forEach(item => {

            item.classList.remove("active");

        });


        /* Add active */

        category.classList.add("active");


        const selectedCategory =
            category.textContent.trim().toLowerCase();


        /* ALL */

        if (selectedCategory === "all") {

            videoCards.forEach(card => {

                card.style.display = "block";

            });

            return;
        }


        /* FILTER VIDEOS */

        videoCards.forEach(card => {

            const title =
                card.dataset.title.toLowerCase();


            if (
                title.includes(selectedCategory)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================================
   NOTIFICATION BUTTON
========================================= */

notificationBtn.addEventListener("click", () => {

    alert("🔔 You have no new notifications.");

});


/* =========================================
   PROFILE BUTTON
========================================= */

const profileBtn =
    document.querySelector(".profile-btn");

profileBtn.addEventListener("click", () => {

    alert("👤 Profile section coming soon!");

});


/* =========================================
   SIDEBAR ITEMS
========================================= */

const sidebarItems =
    document.querySelectorAll(".sidebar-item");


sidebarItems.forEach(item => {

    item.addEventListener("click", (event) => {

        event.preventDefault();


        sidebarItems.forEach(sideItem => {

            sideItem.classList.remove("active");

        });


        item.classList.add("active");

    });

});


/* =========================================
   CATEGORY HORIZONTAL SCROLL
========================================= */

const categoryBar =
    document.querySelector(".category-bar");


categoryBar.addEventListener(
    "wheel",
    (event) => {

        if (event.deltaY !== 0) {

            event.preventDefault();

            categoryBar.scrollLeft +=
                event.deltaY;

        }

    },
    { passive: false }
);


/* =========================================
   VIDEO HOVER EFFECT
========================================= */

videoCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition =
            "transform 0.25s ease";

    });

});


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "🚀 StreamTube loaded successfully!"
    );

});

