document.addEventListener('DOMContentLoaded', () => {
    const hashiraContainer = document.getElementById('hashira-grid');

    const hashira = [
        {
            name: "Giyu Tomioka",
            title: "Water Hashira",
            philosophy: "Justice through calm resolve",
            description:
                "A stoic swordsman who believes emotions should never interfere with duty. He was the first to recognize Tanjiro’s potential.",
            icon: "🌊",
            color: "var(--water)"
        },
        {
            name: "Kyojuro Rengoku",
            title: "Flame Hashira",
            philosophy: "Live with passion and honor",
            description:
                "A man of burning spirit who inspires everyone around him. His belief in protecting the weak never wavers, even in death.",
            icon: "🔥",
            color: "var(--fire)"
        },
        {
            name: "Shinobu Kocho",
            title: "Insect Hashira",
            philosophy: "Smiling through pain",
            description:
                "A calm and intelligent Hashira who uses poison instead of brute strength. Her smile hides deep hatred toward demons.",
            icon: "🦋",
            color: "#b084f7" // Custom purple for Shinobu if not in vars
        }
    ];

    if (hashiraContainer) {
        hashira.forEach(h => {
            const card = document.createElement('div');
            card.classList.add('hashira-card');
            card.style.borderTop = `4px solid ${h.color}`;

            card.innerHTML = `
                <div class="hashira-icon" style="font-size: 3rem; margin-bottom: 1rem;">${h.icon}</div>
                <h2 style="color: ${h.color};">${h.name}</h2>
                <h3 class="subtitle">${h.title}</h3>
                <p class="philosophy"><em>"${h.philosophy}"</em></p>
                <p>${h.description}</p>
            `;
            hashiraContainer.appendChild(card);
        });
    }
});
