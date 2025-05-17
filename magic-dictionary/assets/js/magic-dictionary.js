document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("mouseup", async function (e) {
        let selectedWord = window.getSelection().toString().trim();
        if (!selectedWord || selectedWord.includes(" ")) return;

        // Remove existing tooltip
        let existing = document.getElementById("dictionary-tooltip");
        if (existing) existing.remove();

        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`);
            if (!response.ok) return;

            const data = await response.json();
            const meaning = data[0]?.meanings[0]?.definitions[0]?.definition || "No definition found.";

            const tooltip = document.createElement("div");
            tooltip.id = "dictionary-tooltip";
            tooltip.innerHTML = `
                <div class="dict-header">
                    <strong>${selectedWord}</strong>
                    <span class="dict-close">&times;</span>
                </div>
                <div class="dict-body">${meaning}</div>
            `;

            tooltip.style.top = `${e.pageY + 10}px`;
            tooltip.style.left = `${e.pageX + 10}px`;

            document.body.appendChild(tooltip);

            document.querySelector(".dict-close").onclick = () => tooltip.remove();
        } catch (err) {
            console.error("Dictionary error:", err);
        }
    });

    document.addEventListener("click", function (e) {
        if (!e.target.closest("#dictionary-tooltip")) {
            const tip = document.getElementById("dictionary-tooltip");
            if (tip) tip.remove();
        }
    });
});
