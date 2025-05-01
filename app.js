app.post('/joueur,(req,res)=>{
joueurs.push.(req.body);
res.status(200).json(joueurs);
});

app.put('joueur/:id,(req,res)=>{
const id = parseint(req.params.id);
const player=joueurs.find(i=>i.id=id);
player.nom=req.body.nom;
player.id=req.body.id;
res.status(200).json(joueurs);
});


app.delete('joueur/:id,(req,res)=>{
const id = parseint(req.params.id);
const joueur=joueurs.filter(i=>i.id=id);
joueurs.splice(joueurs.indexOf(joueur),1);
res.status(200).json(joueurs);
});
