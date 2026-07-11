/* ==========================
   FINAL SURPRISE
========================== */

const surpriseBtn = document.getElementById("surpriseBtn");
const finalMessage = document.getElementById("finalMessage");

surpriseBtn.addEventListener("click", () => {

    finalMessage.style.display = "block";
    surpriseBtn.style.display = "none";

    finalMessage.scrollIntoView({
        behavior: "smooth"
    });

});