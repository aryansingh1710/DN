document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('timeline');

    const storyArcs = [
        {
            title: "Final Selection",
            icon: "⚔️",
            description:
                "Tanjiro undergoes brutal training and survives Final Selection, officially becoming a Demon Slayer and beginning his journey."
        },
        {
            title: "Mugen Train Arc",
            icon: "🚆",
            description:
                "Tanjiro and friends join Flame Hashira Rengoku to defeat a powerful demon aboard the Mugen Train, facing loss and growth."
        },
        {
            title: "Entertainment District Arc",
            icon: "🎭",
            description:
                "The team battles Upper Rank demons in a flashy, deadly fight alongside Sound Hashira Tengen Uzui."
        },
        {
            title: "Swordsmith Village Arc",
            icon: "⚒️",
            description:
                "Tanjiro awakens new powers while protecting the village responsible for forging Nichirin swords."
        }
    ];

    if (timelineContainer) {
        storyArcs.forEach((arc, index) => {
            const item = document.createElement('div');
            item.classList.add('timeline-item');

            // Add even/odd logic for timeline side if CSS supports it, otherwise simple stacking
            // For now, simple cards as per request structure
            item.innerHTML = `
                <div class="timeline-icon" style="font-size: 2.5rem; margin-bottom: 0.5rem;">${arc.icon}</div>
                <div class="timeline-content">
                    <h2>${arc.title}</h2>
                    <p>${arc.description}</p>
                </div>
            `;
            timelineContainer.appendChild(item);
        });
    }
});
