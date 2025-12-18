document.addEventListener('DOMContentLoaded', () => {
    const charactersContainer = document.getElementById('characters-container');

    const characters = [
        {
            name: "Tanjiro Kamado",
            breathing: "Water Breathing / Sun Breathing",
            weapon: "Black Nichirin Sword",
            description:
                "A kind-hearted boy who becomes a Demon Slayer after his family is massacred. Tanjiro possesses an extraordinary sense of smell and unwavering empathy, even toward demons.",
            icon: "🌊",
            color: "var(--water)"
        },
        {
            name: "Nezuko Kamado",
            breathing: "Blood Demon Art",
            weapon: "Exploding Blood",
            description:
                "Tanjiro’s younger sister who was turned into a demon. Despite this, she retains her humanity and fights alongside Tanjiro to protect humans.",
            icon: "🩸",
            color: "var(--blood)"
        },
        {
            name: "Zenitsu Agatsuma",
            breathing: "Thunder Breathing",
            weapon: "Yellow Nichirin Sword",
            description:
                "A cowardly yet talented Demon Slayer who unleashes terrifying power when unconscious. His Thunder Breathing is lightning-fast and deadly.",
            icon: "⚡",
            color: "var(--thunder)"
        },
        {
            name: "Inosuke Hashibira",
            breathing: "Beast Breathing",
            weapon: "Dual Serrated Nichirin Blades",
            description:
                "Raised by wild boars, Inosuke has an aggressive fighting style and incredible spatial awareness. His combat instincts are purely animalistic.",
            icon: "🐗",
            color: "var(--beast)"
        }
    ];

    if (charactersContainer) {
        characters.forEach(char => {
            const card = document.createElement('div');
            card.classList.add('character-card');
            card.style.borderTop = `4px solid ${char.color}`;

            card.innerHTML = `
                <div class="char-icon" style="font-size: 3rem; margin-bottom: 1rem;">${char.icon}</div>
                <h2 style="color: ${char.color}; margin-bottom: 0.5rem;">${char.name}</h2>
                <div class="char-info">
                    <p><strong>Breathing:</strong> ${char.breathing}</p>
                    <p><strong>Weapon:</strong> ${char.weapon}</p>
                </div>
                <p class="char-desc">${char.description}</p>
            `;
            charactersContainer.appendChild(card);
        });
    }
});
