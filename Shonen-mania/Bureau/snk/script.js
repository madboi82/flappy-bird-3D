document.addEventListener('DOMContentLoaded', () => {
    const episodes = [
        {
            season: 1,
            episodes: [
                { number: 1, title: "L'Attaque des Titans" },
                { number: 2, title: "Le Mur du Régime" },
                { number: 3, title: "Une Rébellion Éclatante" },
                { number: 4, title: "L'Armée de l'Humanité" },
                { number: 5, title: "Le Candidat" },
                { number: 6, title: "Le Combat des Titans" },
                { number: 7, title: "La Bataille de Trost" },
                { number: 8, title: "L'Exploration" },
                { number: 9, title: "Le Mur Rose" },
                { number: 10, title: "Le Titan Féminin" },
                { number: 11, title: "Le Titan Féminin" },
                { number: 12, title: "L'Armée de l'Humanité" },
                { number: 13, title: "Le Titan Féminin" },
                { number: 14, title: "L'Armée de l'Humanité" },
                { number: 15, title: "Le Titan Féminin" },
                { number: 16, title: "La Bataille de Trost" },
                { number: 17, title: "Le Titan Féminin" },
                { number: 18, title: "L'Armée de l'Humanité" },
                { number: 19, title: "Le Titan Féminin" },
                { number: 20, title: "Le Titan Féminin" },
                { number: 21, title: "Le Titan Féminin" },
                { number: 22, title: "Le Titan Féminin" },
                { number: 23, title: "Le Titan Féminin" },
                { number: 24, title: "L'Armée de l'Humanité" },
                { number: 25, title: "Le Titan Féminin" },
            ]
        },
        {
            season: 2,
            episodes: [
                { number: 1, title: "Le Mur de la Terreur" },
                { number: 2, title: "Le Titan du Mur" },
                { number: 3, title: "L'Infiltré" },
                { number: 4, title: "Le Titan Léger" },
                { number: 5, title: "Le Titan du Mur" },
                { number: 6, title: "Le Titan du Mur" },
                { number: 7, title: "Le Titan du Mur" },
                { number: 8, title: "Le Titan Léger" },
                { number: 9, title: "Le Titan Léger" },
                { number: 10, title: "Le Titan du Mur" },
                { number: 11, title: "Le Titan du Mur" },
                { number: 12, title: "Le Titan Léger" },
                { number: 13, title: "Le Titan du Mur" },
                { number: 14, title: "Le Titan Léger" },
                { number: 15, title: "Le Titan Léger" },
                { number: 16, title: "Le Titan du Mur" },
                { number: 17, title: "Le Titan Léger" },
                { number: 18, title: "Le Titan du Mur" },
                { number: 19, title: "Le Titan Léger" },
                { number: 20, title: "Le Titan Léger" },
                { number: 21, title: "Le Titan du Mur" },
                { number: 22, title: "Le Titan Léger" },
                { number: 23, title: "Le Titan du Mur" },
                { number: 24, title: "Le Titan Léger" },
                { number: 25, title: "Le Titan Léger" },
            ]
        },
        {
            season: 3,
            episodes: [
                { number: 1, title: "La Bataille du Mur" },
                { number: 2, title: "Le Titan Sauvage" },
                { number: 3, title: "Les Crêtes du Mur" },
                { number: 4, title: "L'Armée du Mur" },
                { number: 5, title: "La Révélation" },
                { number: 6, title: "La Bataille de Trost" },
                { number: 7, title: "La Révélation" },
                { number: 8, title: "Le Titan Sauvage" },
                { number: 9, title: "La Bataille du Mur" },
                { number: 10, title: "Les Crêtes du Mur" },
                { number: 11, title: "L'Armée du Mur" },
                { number: 12, title: "La Bataille de Trost" },
                { number: 13, title: "La Révélation" },
                { number: 14, title: "La Bataille de Trost" },
                { number: 15, title: "Le Titan Sauvage" },
                { number: 16, title: "La Bataille du Mur" },
                { number: 17, title: "Les Crêtes du Mur" },
                { number: 18, title: "L'Armée du Mur" },
                { number: 19, title: "La Bataille de Trost" },
                { number: 20, title: "La Révélation" },
                { number: 21, title: "La Bataille de Trost" },
                { number: 22, title: "Le Titan Sauvage" },
                { number: 23, title: "La Bataille du Mur" },
                { number: 24, title: "Les Crêtes du Mur" },
                { number: 25, title: "L'Armée du Mur" },
            ]
        },
        {
            season: 4,
            episodes: [
                { number: 1, title: "Le Dernier Mur" },
                { number: 2, title: "Les Héritiers de la Guerre" },
                { number: 3, title: "Le Combat des Titans" },
                { number: 4, title: "Les Révélations" },
                { number: 5, title: "La Bataille de Marley" },
                { number: 6, title: "Les Derniers Secrets" },
                { number: 7, title: "Les Héritiers de la Guerre" },
                { number: 8, title: "Le Combat des Titans" },
                { number: 9, title: "Les Révélations" },
                { number: 10, title: "La Bataille de Marley" },
                { number: 11, title: "Les Derniers Secrets" },
                { number: 12, title: "Les Héritiers de la Guerre" },
                { number: 13, title: "Le Combat des Titans" },
                { number: 14, title: "Les Révélations" },
                { number: 15, title: "La Bataille de Marley" },
                { number: 16, title: "Les Derniers Secrets" },
                { number: 17, title: "Les Héritiers de la Guerre" },
                { number: 18, title: "Le Combat des Titans" },
                { number: 19, title: "Les Révélations" },
                { number: 20, title: "La Bataille de Marley" },
                { number: 21, title: "Les Derniers Secrets" },
                { number: 22, title: "Les Héritiers de la Guerre" },
                { number: 23, title: "Le Combat des Titans" },
                { number: 24, title: "Les Révélations" },
                { number: 25, title: "La Bataille de Marley" },
                { number: 26, title: "Les Derniers Secrets" },
                { number: 27, title: "Le Dernier Mur" },
                { number: 28, title: "Les Héritiers de la Guerre" },
                { number: 29, title: "Le Combat des Titans" },
                { number: 30, title: "Les Révélations" },
                { number: 31, title: "La Bataille de Marley" },
                { number: 32, title: "Les Derniers Secrets" },
                { number: 33, title: "Les Héritiers de la Guerre" },
                { number: 34, title: "Le Combat des Titans" },
                { number: 35, title: "Les Révélations" },
                { number: 36, title: "La Bataille de Marley" },
                { number: 37, title: "Les Derniers Secrets" },
                { number: 38, title: "Les Héritiers de la Guerre" },
                { number: 39, title: "Le Combat des Titans" },
                { number: 40, title: "Les Révélations" },
                { number: 41, title: "La Bataille de Marley" },
                { number: 42, title: "Les Derniers Secrets" },
                { number: 43, title: "Les Héritiers de la Guerre" },
                { number: 44, title: "Le Combat des Titans" },
                { number: 45, title: "Les Révélations" },
                { number: 46, title: "La Bataille de Marley" },
                { number: 47, title: "Les Derniers Secrets" },
                { number: 48, title: "Le Dernier Mur" }
            ]
        }
    ];

    const episodesContainer = document.getElementById('episodes');
    
    episodes.forEach(season => {
        const seasonDiv = document.createElement('div');
        seasonDiv.classList.add('season');
        
        const seasonTitle = document.createElement('h3');
        seasonTitle.textContent = `Saison ${season.season}`;
        seasonDiv.appendChild(seasonTitle);
        
        const episodeList = document.createElement('ul');
        episodeList.classList.add('episode-list');
        
        season.episodes.forEach(ep => {
            const episodeItem = document.createElement('li');
            episodeItem.innerHTML = `<h3>Épisode ${ep.number}: ${ep.title}</h3>`;
            episodeList.appendChild(episodeItem);
        });
        
        seasonDiv.appendChild(episodeList);
        episodesContainer.appendChild(seasonDiv);
    });
});
