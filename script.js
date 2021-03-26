let icon = document.querySelector(".icon");
let close = document.querySelector(".close");
let navLinks = document.querySelector(".nav-links");
let navStyle = navLinks.style;
let iconStyle = icon.style;
let closeStyle = close.style;

icon.addEventListener("click", function() {
    if (navStyle.display === "block") {
        navStyle.display = "none";
        iconStyle.display = "none";
        closeStyle.display = "block";
    }
    else {

        navStyle.display = "block";
        iconStyle.display = "none";
        closeStyle.display = "block";
        close.addEventListener("click", function() {
            if (navStyle.display === "block") {
                navStyle.display = "none";
                closeStyle.display = "none";
                iconStyle.display = "block";
            }
        });
    }
});

 let connectBtn = document.querySelector(".connect-btn");
connectBtn.addEventListener("click", function() {
     document.querySelector(".dropdown-items").classList.toggle("show");
 });

window.onclick = function(event) {
    if (!event.target.matches('.connect-btn')) {
        let dropdowns = document.querySelector(".dropdown-items");
        let i;
        for ( i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
}