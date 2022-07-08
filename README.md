# FOOT-A

  # **Création d'un API REST  (Avec Node .JS )**

  ### **`A Propos du Projet`** : 
  <br>
  Ceci est un  **`Bref project`** de mon parcours de formation `D-CLIC` .cet projet consiste à créer un API pour la Féderation de Football    

### **`les outils utiliser`** :
- Node .Js
- Express.js 
<br>
### **`les package installer`** :
-  nvm – Node Version Manager
  -  npm – Node Package Manager
  -  Node.js
  -  Express installed avec npm (**_npm install express body-parser morgan_**).

### **`Comment l'utiliser (Postman nous aidera à tester l'API) `** :
 
Ainsi, 
pour voir les status du joueur 101 ,on utilise :
<br>
- GET https://still-castle-38422.herokuapp.com/api/v1/stats/101 

``` json
// il retournera un fichier json comme ceci
{
    "id": 101,
    "wins": 10,
    "losses": 3,
    "points_scored": 7
}
```
pour ajoutyer une information  il utiliser la methode:

- POST https://still-castle-38422.herokuapp.com/api/v1/stats

```json
// Voici un exemples d'entrée
{
    "id": 120,
    "wins": 10,
    "losses": 3,
    "points_scored": 7
}
//et il retournera un fichier json comme ceci
{
    "id": 120,
    "wins": 10,
    "losses": 3,
    "points_scored": 7
}
```

 