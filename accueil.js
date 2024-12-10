function discoverMore() {
    // Redirige vers la section des fonctionnalités
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

// Ajout d'une interactivité de changement de couleur sur le bouton Connexion
document.querySelector('.cta-button').addEventListener('mouseover', function () {
    this.style.backgroundColor = '#1b4332';
});

document.querySelector('.cta-button').addEventListener('mouseout', function () {
    this.style.backgroundColor = '#52b788';
});
