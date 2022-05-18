/**
 * 1. Buatlah class dengan nama Tiger, yang mana class Tiger memiliki:
 *  attributes:
 *    - name          = (mengambil input dari constructor)
 *    - height        = (mengambil input dari constructor)
 *    - weight        = (mengambil input dari constructor)
 *    - energy        = 100
 *    - isDangerous   = true
 *  method:
 *    - roar          = mengeluarkan output/return "Roarrrrr"
 *    - die           = merubah isDangerous menjadi false
 */

class Tiger {
  constructor (name, height, weight){
  this.name = Tiger;
  this.height = 100cm;
  this.weight = 100kg;
  this.energy = 100
    }
  
 isDangerous = true;
  
  die () {
    this.isDangerous = false;
  }
  
  roar () {
    this.roar = Roarrrrr;
  }
  
}
 
  
  
/**
 * 2. Buatlah class dengan nama Cat yang mana adalah child dari class Tiger (extent Tiger)
 *  attributes:
 *    - name          = (mengambil input dari constructor)
 *    - height        = (mengambil input dari constructor)
 *    - weight        = (mengambil input dari constructor)
 *    - energy        = 10
 *    - isDangerous   = false
 *  method:
 *    - roar          = mengeluarkan output/return "Meoww"
 *    - die           = merubah isDangerous menjadi false
 */

 class Cat extends Tiger {
  constructor (name, height, weight){
    super (name, height, weight);
    }
  

  const Cat = new Tiger('cat', '100cm', '100kg', '10');
  
  const roar = new roar (Meoww);

}
