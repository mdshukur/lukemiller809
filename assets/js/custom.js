document.addEventListener("DOMContentLoaded", function () {
            // Initialize ScrollSpy
            var scrollSpy = new bootstrap.ScrollSpy(document.body, {
                target: "#navbar",
                offset: 100
            });

            // Adjust padding when clicking a navbar link
            let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

            navLinks.forEach((link) => {
                link.addEventListener("click", function (event) {
                    let targetId = this.getAttribute("href").substring(1); // Get section ID
                    let targetSection = document.getElementById(targetId);

                    // Add extra padding
                    if (targetSection) {
                        targetSection.style.paddingTop = "120px"; // Increase padding
                        setTimeout(() => {
                            targetSection.style.paddingTop = "80px"; // Reset after 500ms
                        }, 500);
                    }
                });
            });
        });
