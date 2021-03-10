# Fractal-Tree-animated-with-canvas
Création d'un arbre fractal qui pousse avec requestAnimationFrame

La création de Fractal est basé sur la récurrence. Pour créer une branche, on répette à l'infini une fonction qui "s'auto-modifie" à chaque itération.
Nous prendrons en compte le côté esthétique, et nous mettrons en place des limitations permettant de choisir le nombre de branche et leur positionrlative.

L'arbre se divise en deux parties : 
 - la racine: appel de la fonction racine(); basée sur la fonction mathématique y = 1/(ln(x-0.64))+1 pour crée la demi-racine qui est ensuite projettée sur un axe de symétrie verticale.
 - la branche: appel de la fonction init(); pour créer une branche fractal en appelant deux fonctions draw(); et firstbranche();
 
     
