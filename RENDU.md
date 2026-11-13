**GET /citations/1**

Statut : 200 OK
Content-Type : application/json; charset=utf-8
Contenu : {"id":1,"texte":"Apprendre en pratiquant.","auteur":"Équipe du TP"}
Format renvoyé : JSON

**POST /citations**

Statut : 201 Created
Content-Type : application/json; charset=utf-8
Contenu : {"id":2,"texte":"On progresse en essayant.","auteur":"Ada"}
Format renvoyé : JSON

**POST /citations — données invalides**

Statut : 400 Bad Request
Contenu : {"message":"Texte et auteur sont obligatoires"}
Format renvoyé : JSON

**PUT /citations/1**

Statut : 200 OK
Content-Type : application/json; charset=utf-8
Contenu : {"id":1,"texte":"Nouvelle version","auteur":"Ada"}
Format renvoyé : JSON

**DELETE /citations/1**

Statut : 204 No Content
Contenu : aucun
Format renvoyé : aucun

**GET /citations/1 — après suppression**

Statut : 404 Not Found
Contenu : {"message":"Citation introuvable"}
Format renvoyé : JSON

**Rôle de req.params.id et `req.body**

req.params.id contient l’identifiant indiqué dans l’URL par exemple 1 dans /citations/1 ensuite req.body contient les données JSON envoyées dans une requête POST ou PUT et express les rend accessibles grâce à express.json().
