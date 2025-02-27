// Hide splash screen after 3 seconds
setTimeout(() => {
    document.getElementById('splashScreen').style.display = 'none';
    document.getElementById('mainContent').classList.remove('hidden');
}, 3000);

// Function to show sections
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => section.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
}

// Soil Analysis
function analyzeSoil() {
    const fileInput = document.getElementById('soilImage');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('soilPreview').src = e.target.result;
            document.getElementById('soilPreview').style.display = "block";

            // Random Fertilizer Suggestions
            const fertilizers = [
                "Use organic compost for better soil health.",
                "Add potassium-rich fertilizer for root development.",
                "Apply nitrogen fertilizer for greener leaves.",
                "Use phosphorus-based fertilizer for stronger stems."
            ];
            document.getElementById('soilRecommendations').textContent = fertilizers[Math.floor(Math.random() * fertilizers.length)];
        };
        reader.readAsDataURL(file);
    }
}

// Plant Disease Detection
async function analyzePlant() {
    const fileInput = document.getElementById("uploadImage");
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async function(e) {
            document.getElementById("plantImage").src = e.target.result;
            document.getElementById("plantImage").style.display = "block";

            const model = await mobilenet.load();
            const img = document.getElementById("plantImage");
            const predictions = await model.classify(img);

            alert("Detected Disease: " + predictions[0].className);
        };
        reader.readAsDataURL(file);
    }
}
