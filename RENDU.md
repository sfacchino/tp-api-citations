**GET /ping**

- Statut : 200 OK
- Content-Type : text/plain; charset=utf-8
- Contenu : Serveur de citations prêt.
- Format renvoyé : texte

**GET /citations**

- Statut : 200 OK
- Content-Type : application/json; charset=utf-8
- Contenu : [{"id":1,"texte":"Apprendre en pratiquant.","auteur":"Équipe du TP"}]
- Format renvoyé : JSON

**GET /inconnue**

- Statut : 404 Not Found
- Contenu : {"message":"Route introuvable"}
- Format renvoyé : JSON

  **Rôle de req et res**

req représente la requête envoyée au serveur par le client et res sert à construire et envoyer la réponse du serveur.