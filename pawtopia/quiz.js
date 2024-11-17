document.getElementById("dogQuiz").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Collect form responses
    const temperature = document.getElementById("temperature").value;
    const rarity = document.getElementById("rarity").value;
    const maintenance = document.getElementById("maintenance").value;
    const coat = document.getElementById("coat").value;
    const exercise = document.getElementById("exercise").value;
    const training = document.getElementById("training").value;

    // Initialize result
    let recommendedBreed = "";

    // Decision logic
    if (temperature === "hot") {
        recommendedBreed = "Basenji";
    } else if (temperature === "cold") {
        recommendedBreed = "Siberian Husky";
    } else if (temperature === "warm") {
        recommendedBreed = "Labrador Retriever";
    } else if (temperature === "moderate") {
        recommendedBreed = "Golden Retriever";
    } else if (temperature === "humid") {
        recommendedBreed = "American Water Spaniel";
    }

    if (rarity === "rare") {
        recommendedBreed = "Tibetan Mastiff";
    } else if (rarity === "common") {
        recommendedBreed = "German Shepherd";
    }

    if (maintenance === "easy") {
        recommendedBreed = "Beagle";
    } else if (maintenance === "grooming") {
        recommendedBreed = "Shih Tzu";
    }

    if (coat === "short") {
        recommendedBreed = "Boxer";
    } else if (coat === "medium") {
        recommendedBreed = "Australian Shepherd";
    } else if (coat === "long") {
        recommendedBreed = "Afghan Hound";
    }

    if (exercise === "high") {
        recommendedBreed = "Border Collie";
    } else if (exercise === "medium") {
        recommendedBreed = "Cocker Spaniel";
    } else if (exercise === "low") {
        recommendedBreed = "French Bulldog";
    }

    if (training === "easy") {
        recommendedBreed = "Golden Retriever";
    } else if (training === "hard") {
        recommendedBreed = "Chow Chow";
    }

    // Display result
    document.getElementById("result").innerText = `Recommended Dog Breed: ${recommendedBreed}`;
});
