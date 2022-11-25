import { Carnivoro } from "./carnivoros";
import { Herviboro } from "./herviboros";
import { Insectivoro } from "./insectivoros"
import { Omnivoro } from "./omnivoros";


let carnivoroUno: Carnivoro = new Carnivoro(true, " Tigre " , " Carne");
let herviboroUno: Herviboro = new Herviboro(true, " Vaca ", " Vegetales");
let insectivoroUno: Insectivoro = new Insectivoro(true, " Araña " , " Insectos");
let omnivoroUno: Omnivoro = new Omnivoro(true, " Oso " , " Animales y Vegetales ");


carnivoroUno.alimentarse();
herviboroUno.alimentarse();
insectivoroUno.alimentarse();
omnivoroUno.alimentarse();
