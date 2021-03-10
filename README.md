# Fractal-Tree-animated-with-canvas
Création d'un arbre fractal qui pousse avec requestAnimationFrame

La création de Fractal est basé sur la récurrence. Pour créer une branche, on répette à l'infini une fonction qui "s'auto-modifie" à chaque itération.
Nous prendrons en compte le côté esthétique, et nous mettrons en place des limitations permettant de choisir le nombre de branche et leur position relative.

L'arbre se divise en trois parties : 
 - la racine: appel de la fonction racine(); basée sur la fonction mathématique y = 1/(ln(x-0.64))+1 pour crée la demi-racine qui est ensuite projettée sur un axe de symétrie verticale.
 - la branche: appel de la fonction init(); pour créer une branche fractal en appelant deux fonctions draw(); et firstBranch();
 - les sous-branches: appel de la fonction littleBranchRight();

La fonction init(); reçoit trois arguments 

      init(largeur de branche en pixel, angle de rotation initial en degré, longueur première branche en pixel);
      
Pour rajouter une branche à l'arbe, il suffit de rajouter une fonction init(); dans la fonction racine();. Un seTimeout sur chaque fonction permet de différer les départs et ainsi donner une impression plus naturelle de la croissance des branches.
 
     
