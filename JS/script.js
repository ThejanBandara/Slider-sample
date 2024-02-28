let slideIndex = 1;

        function showSlides() {
            let i;
            const slides = document.getElementsByClassName("slider-item");
            if (slideIndex > slides.length) { slideIndex = 1 }
            if (slideIndex < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "flex"; 
        }

        function nextSlide() {
            slideIndex++;
            showSlides();
        }

        function prevSlide() {
            slideIndex--;
            showSlides();
        }

        showSlides();