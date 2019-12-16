
1/ creer la base projet sous powershell lancer le shell mongo (c:\data\db>mongo) puis:

> use projet;

Sortir du shell
2/ copier le jeu de données

pour utiliser le 3/, deposer les données dans le repertoire data de mongo (c:\data\db)

Sinon penser à indiquer le repertoire, ex: --file c:\mon_repertoire\projet.basket.json
3/ importer les données

Revenir sous powershell et executer:


mongoimport -d projet -c basket --file projet.basket.json

mongoimport -d projet -c claim --file projet.claim.json

mongoimport -d projet -c comment --file projet.comment.json

mongoimport -d projet -c order --file projet.order.json

mongoimport -d projet -c products --file projet.products.json

mongoimport -d projet -c users --file projet.users.json

4/ exporter les données

mongoexport --collection=users --db=authrole --out=users.json

OU

C:\Program Files\MongoDB\Server\4.2\bin>mongoexport --collection=users --db=authrole --out=C:\MongoDB\Server\4.2\data\users.json