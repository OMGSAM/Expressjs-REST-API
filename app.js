const express = require('express');
const app = express();
app.use(express.json());

let joueurs = []; 

 
app.post('/joueur', (req, res) => {
    joueurs.push(req.body);
    res.status(200).json(joueurs);
});

 
app.put('/joueur/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = joueurs.findIndex(j => j.id === id);

    if (index !== -1) {
        joueurs[index] = {
            id: req.body.id,
            nom: req.body.nom
        };
        res.status(200).json(joueurs);
    } else {
        res.status(404).json({ message: 'Joueur non trouvé' });
    }
});

 
app.delete('/joueur/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = joueurs.findIndex(j => j.id === id);

    if (index !== -1) {
        joueurs.splice(index, 1);
        res.status(200).json(joueurs);
    } else {
        res.status(404).json({ message: 'Joueur non trouvé' });
    }
});
 
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
