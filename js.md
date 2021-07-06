## Où placer son code ?

Le JS est chargé après que le HTML soit interprété par le navigateur, ce qui permet à JS d'accéder au contenu HTML, ne créant pas de bugs ou de soucis d'affichage :

```html
<!DOCTYPE HTML>
<html lang="en">
    <head>
        <!-- Notre contenu de header -->
    </head>
    <body>
        <!-- Notre contenu HTML -->
        <script src="./index.js"></script>
    </body>
</html>
```

index.js :

// Mon code JavaScript

### Les variables

Déclarer des variables sur JS. 

**let** + **nom de la variable** = **maValeur**

```javascript
let myVariable = "blabla";
```

```javascript 
const myVariable = "Some content";
```
Variable non modifiable.

**Obligatoire de déclarer les variables avant de les utiliser**

```javascript
let name;
name = "Mathis";
```

### Intégrer des variables dans des string

```javascript
`Hi ${userName}, it's ${hour}.`;
```

```javascript
function myScreamingFunction(myArgument) {
    return myArgument.toUpperCase();
}

myScreamingFunction("Hey you !");
// Retourne "HEY YOU !"
```

```javascript
const myScreamingFunction = myArgument => {
    return myArgument.toUpperCase();
};
myScreamingFunction("Hey you !")
// Retourne "HEY YOU !"
```

```javascript
const myScreamingFunction = myArgument => myArgument.toUpperCase();
myScreamingFunction("Hey you !")
// Retourne "HEY YOU !"
```

```javascript 
const myFunction = (arg1, arg2) => arg1 + arg2;
myFunction(4, 9);
// Retourne 13
```

#### Les arguments par défaut
Si pas d'arguments pas renseignés par l'user, en ajouter par défaut. 
**Définir un comportement par défaut pour la fonction modifiable par la suite**

```javascript
const myScreamingFunction = (myArgument = "aaaaaaah") => {
    return myArgument.toUpperCase()
};

myScreamingFunction();
// Retourne "AAAAAAAAAAH"

myScreamingFunction("hello");
// Retourne "HELLO"
```

#### Propriétés du prototype 

**Les propriétés sont les "données internes" d'un type de variable.* 

Direction la doc MDN 
[Voici un lien pour les Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#)

[Voici un lien pour les String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String)


```javascript
const myArray = [2, 3, 5, 7, 11, 13, 17, 19];
myArray.length; 
// Retourne 8
```

```javascript
const myString = "Hey you";
myString.length;
// Retourne 7
```

#### Méthodes du prototype
**Fonctions qui permettent d'accéder à nos données ou de les modifier.**

```javascript
const yourVar = 179;
yourVar.toString();
// Retourne "179"
```

```javascript
const yourVar = "Hello The Hacking Project";
yourVar.toUpperCase(); 
// Retourne "HELLO THE HACKING PROJECT"
```

#### Le Scope : portée des variables
C'est l'étendue du code dans laquelle elle peut être utilisée. 
Si une var est défniie dans une fonction, elle ne peut pas être appelée à l'extérieur de la fonction. 

```javascript
const davidLafargePokemon = () => {
    const davidText = "Hey, salut à tous !"
    const missJirachiText = "COUCOU !";
    console.log(missJirachiText); 
    // écrit "COUCOU !"
};

console.log(davidText);
// écrit undefined dans la console
// Non accessible en dehors de la fonction davidLafargePokemon
```
console.log() = print()

#### Calculs simples

Direction la doc MDN
[Voici un lien pour les Opérateurs](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators)

##### Comparateurs et conditions

```javascript
>   // Strictement supérieur
<   // Strictement inférieur
>=  // Supérieur ou égal
<=  // Inférieur ou égal
==  // Égal (ne prends pas le type en compte)
=== // Strictement égal (prends le type en compte)
!=  // Différent (sans le type)
!== // Strictement différent (avec le type)
```

#### Les conditions

if..else... :)

[Voici un lien pour les Conditions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else)


_Les ternaires_

```javascript
const mood = isSunny ? "good" : "bad";
// Translate : Si isSunny est "vrai" (évalué à true), alors mood est défini à "good", sinon à "bad". 
```

#### Les Arrays

[Voici un lien pour les Conditions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### Les Loops

[Voici un lien pour les Conditions](https://jstutorial.medium.com/the-complete-guide-to-loops-cfa6522157e9)


