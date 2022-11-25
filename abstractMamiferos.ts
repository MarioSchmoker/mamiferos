export abstract class Mamiferos {
    protected pelaje: string;
    protected glandulasMamarias: boolean;
    protected lactancia: boolean;
    protected dientes: boolean;
    protected nombre: string;

    constructor(pGlandulasMamarias: boolean, pNombre: string) {
        this.glandulasMamarias = pGlandulasMamarias;
        this.pelaje = "abundante";
        this.lactancia = true;
        this.dientes = true;
        this.nombre = pNombre;
    }

    public avanzar(): void {
      
    }
    public descansar(): void {

    }
    public alimentarse(): void {

    }

}  