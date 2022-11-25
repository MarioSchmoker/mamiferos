import { Mamiferos } from "./abstractMamiferos";

export class Carnivoro extends Mamiferos { 
    protected alimento : string;

  constructor(pGlandulasMamarias: boolean , pNombre: string, pAlimento: string) {
    super(pGlandulasMamarias,pNombre)
    this.alimento = pAlimento;
 }
  public avanzar(): void {
      
  }
  public descansar(): void {

  }
  public alimentarse(): void {
    console.log( "El ", this.nombre , " esta comiendo " , this.alimento);

  }

}
