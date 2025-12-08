async function loadQuote() {
    try {
        let res = await fetch("https://api.quotable.io/random");
        let data = await res.json();
        document.getElementById("quote").innerText = data.content;
    } catch (e) {
        document.getElementById("quote").innerText =
            "Stay Strong. Stay Hopeful. 💖";
    }
}

loadQuote();
