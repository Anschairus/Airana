import { Component } from '@angular/core';

import { AppComponent } from '../../index';


@Component({
    selector: 'careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
    title = 'Careers';
    selectedClass = false;

    isSelected(e: boolean) {
        if (this.selectedClass == e) {
            this.selectedClass = false;
        } else {

            this.selectedClass = e;
        }
    }
    Classes = [
        {
            "name": "Warrior",
            "subclasses": [
                {
                    "name": "Technic",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Fury",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Sentinel",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Arms",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Hunter",
            "subclasses": [
                {
                    "name": "Survival",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Sniper",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Inner Beast",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Battle Shooting",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Thief",
            "subclasses": [
                {
                    "name": "Spell-Thief",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Trickery",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Scammer",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Subtely",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Transmuter",
            "subclasses": [
                {
                    "name": "Chemist",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "1.35",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Alchemy Stamp",
                            "description": "Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.(Req. Superficie de sellado y Tiza de alquimia)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno, luego se desmoronará. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "1.0125",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Activate Stamp [I]",
                            "description": "Activas un sello previamente dibujado entrando en contacto con él.",
                            "cost": "0",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Prana Stamp Activation [I]",
                            "description": "Activas un sello a distancia, como más lejos más dificil és activarlo.",
                            "cost": "1*(Distancia entre el sello y el taumaturgo)",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Wall",
                            "description": "Deformas el suelo creando un muro de 3 de ancho por 2 de alto y endureciendolo como si fuera un metal. La vida de la pared dependerá de tu poder mágico.",
                            "cost": "6",
                            "formulation": "1.42",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Platform",
                            "description": "Invocas varias manos para intentar que cojan uno o varios objetivos. Este ataque puede usarse para inmovilizar a objetivos o simplemente para que no se caigan entre otros. Cada mano invocada son 2 de maná y un objetivo solo puede ser afectado por una mano. (Por defecto un sello invocara 3 manos, si se quiere invocar más se tendrá que gastar maná adicional).",
                            "cost": "12",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Repair",
                            "description": "Devuelve el objeto tiempo atrás, cuando estaba en buen estado. Puede requerir bastante tiempo dependiendo de lo complejo que sea el objeto. (Req. Mayor Stat máximo que el item a reparar)",
                            "cost": "4*(turno)",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Separate Atoms",
                            "description": "Permite \"deshacer\" cualquier material en polvo. Solo se puede usar con cosas inertes, los objetos del vacío son inmunes a éste efecto y los mágicos tienen dificultad x4. Se puede usar con una parte del equipo del enemigo, teniendo un CD de 3 turnos y teniendo que superarlo en tirada de Luk.",
                            "cost": "4*(turno)",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Nuclear Fission",
                            "description": "Se desestabiliza un átomo de alto peso por medio de una inserción nuclear volviéndolo reactivo. En unos segundos éste átomo empezará una desintegración nuclear dando lugar a una liberación de energía. (Req. Átomos pesados como los del Uranio o Plutonio.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Fusión Nuclear / Nucleosíntesis estelar",
                            "description": "En trabajo conjunto con un maestro de la cronogravedad, el alquimista puede crear el entorno perfecto para que una gran gravedad pueda evitar la repulsión electroestática entre los dos núcleos livianos. La unión de los dos núcleos en uno solo formará estrella inestable que dará lugar a un colapso estelar. (Req. Átomos livianos como los del Deuterio y Trito además de la colaboración de Cronomantes y Alquimistas.)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Potion-Maker",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Mutant",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Homonculist",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Elementalist",
            "subclasses": [
                {
                    "name": "Earth",
                    "skills": [
                        {
                            "name": "Earth Spike",
                            "description": "Haces crecer una punta de tierra desde el suelo, puede desequilibrar el enemigo y hacerlo caer, lo que hará que tenga que gastar un turno adicional si quiere moverse.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Earth Shield",
                            "description": "Augmenta les defenses del objectiu durant 3 atacs i fa que absorbeixi vida del seu voltant, fent que recuperi vida per torn.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Metal",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Water",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Ice",
                    "skills": [
                        {
                            "name": "Cold Bolt ",
                            "description": "Creas una estaca de hielo que puede ser lanzada a gran velocidad. Aplica un 15% de congelación. M.Atk",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Congelación [P]",
                            "description": "Tus ataques aplican un % de congelación, ralentizando al objetivo en ese %, cuando se llega al 100% el objetivo es congelado durante 1d4 turnos.  ",
                            "cost": "8",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                },{
                    "name": "Fire Element",
                    "skills": [
                        {
                            "name": "Firebolt",
                            "description": "Active: Creas una esfera de fuego y la puedes lanzar a un enemigo. Quema durante 2 turnos.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Incandescent Orbs",
                            "description": `Pasiva: Cada vez que haces una Skill de fuego acumulas un orbe de fuego que girará a tu alrededor. (max 5 cargas).<br>
                            Activa: Las esferas rodean un area y hacen un gran tornado de fuego que reduce la velocidad de movimiento en ½ durante un turno y culmina en la siguiente con una gran explosión dentro de ella.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    
                    ]
                }, {
                    "name": "Molten",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Wind",
                    "skills": [
                        {
                            "name": "Lightning Bolt",
                            "description": "Conjuras un rayo hacia un enemigo, es un ataque muy rápido, por lo que tendrá un 25% más de tu hit en la tirada.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Thunder  Storm [AOE]",
                            "description": "Invocas un rayo que caerá del cielo dañando a todos los enemigos en una area de 3x3.",
                            "cost": "0",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Electric",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Paladin",
            "subclasses": [
                {
                    "name": "Retribution",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Protection",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Holy",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Motivation",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Ninja",
            "subclasses": [
                {
                    "name": "Ninjutsu",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Shinobi Iri",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Bukijutsu",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Taijutsu",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Coder",
            "subclasses": [
                {
                    "name": "Defense Systems",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Colectionist",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Prana-Pilot",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Enhancer",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Sorcerer",
            "subclasses": [
                {
                    "name": "Spellcraft",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Hexia",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Anti-Magia",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Prania",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Druid",
            "subclasses": [
                {
                    "name": "Teroia",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Beasts",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Astral",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Chimera",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },
        {
            "name": "Warlock",
            "subclasses": [
                {
                    "name": "Curser",
                    "skills": [
                        {
                            "name": "Triple Attack",
                            "description": "Hace 3 golpes a una velocidad de vértigo. Atk",
                            "cost": "3",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Chain Combo",
                            "description": "Se puede usar algunas veces después de triple attack, asestas un cuarto golpe con mucha potencia. Solo se puede usar si se lanza una tirada crítica.",
                            "cost": "6",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Demonologist",
                    "skills": [
                        {
                            "name": "Bodyblock",
                            "description": "Tienes un 40% de probabilidades de poder interceptar un ataque dirigido hacia un aliado con menor vida que tú. Recibiendo un 50% del daño que tu aliado iba a recibir. D10: Bloqueo si 1-4",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": ": Perfect Concentration",
                            "description": "Te concentras en un enemigo y evades el 100% de sus ataques físicos individuales durante 2 turnos, cuando termina le devuelves el daño por 1,5. No puedes usar acciones mientras estás concentrado ni esquivar ataques de otros enemigos.",
                            "cost": "4",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Nechroia",
                    "skills": [
                        {
                            "name": "Call Spirit",
                            "description": "[I]: Llamas a un espíritu para que te siga. M.Atk. <br>Active: Lanzas todos los espíritus que tengas acumulados.",
                            "cost": "2",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Critical Explosion",
                            "description": "Absorbes  espíritus para aumentar tu destreza y rapidez durante X turnos. X = espíritus absorbidos.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Obskuria",
                    "skills": [
                        {
                            "name": "Chant: Barrier of Gods",
                            "description": "Oras para que los dioses te protejan, creando una barrera de 3 metros de radio que no dejará que nada ni nadie la atraviese sin romperla. És más efectiva contra artes oscuras, reduciendo el daño que recibe de estas en un 50%.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Chant: Seal of Three Paths",
                            "description": "Oras para invocar 3 haces de luz que saliendo de tus manos se dirigirán hacia un enemigo para rodearlo y sellarlo.  Un enemigo sellado no puede hacer acciones. El sello niega 3 acciones al objetivo pero puede ser roto antes de intentar hacer cada acción.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },
        {
            "name": "Witchblade",
            "subclasses": [
                {
                    "name": "Prana Blade",
                    "skills": [
                        {
                            "name": "Imbuir Arma",
                            "description": "Pasiva: Cada golpe que acierte el usuario le dará una carga de energía a su espada, el máximo de cargas son 10, se usan para hacer otras habilidades.<br>Activa: La energía que estaba acumulando tu espada despierta y la imbuye toda ella. Nota: Mientras tengas la espada imbuida no podrás robar energía, pero si usar habilidades que la gasten. Las habilidades y ataques aplicarán el efecto del arma imbuida. Mixed.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Estocada Mágica",
                            "description": "3 de prana,1 Carga imbuida: Realizas una estocada mágica. Aplica el daño de Imbuir Arma 10 de prana,10 Cargas imbuidas: Al tener diez cargas imbuidas en el arma, las desatará todas aumentando el poder y causando quemaduras durante 3 turnos. Mixed",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Chronogravity",
                    "skills": [
                        {
                            "name": "Energetic Distortion [I]",
                            "description": "[ROMPANTE, DIMENSIO] <Daño verdadero> Creas una esfera que se quedara donde el usuario la ha invocado. M.Atk",
                            "cost": "2",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Unleashed Gravity",
                            "description": "[SPAN, PHAY, GOR] Haces que todas tus esferas energéticas vayan hacia un objetivo, explotando y haciendo daño.",
                            "cost": "8",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Fencing",
                    "skills": [
                        {
                            "name": "Step of Death",
                            "description": "El usuario se impulsa para moverse de forma instantánea (la gran mayoría lo ven desaparecer) asestando un corte técnico pero de poco daño. Cuando el enemigo se mueva Consumirá los sangrados que tenga, en caso de no tenerlos aplicará un potente sangrado. Debes estar a melé. 3 turnos de sangrado, 3 Turnos de CD",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Counterattack [p]",
                            "description": "Esquiva o bloquea un ataque físico del enemigo para realizar un ataque normal.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Singularity",
                    "skills": [
                        {
                            "name": "Prana Star",
                            "description": "Creas una esfera de prana que se dirige hacia el objetivo atravesándolo. Ésta quedará justo al otro lado del oponente. Si su HP baja a 0 hará un prana explosión, sin posibilidad de recuperar el prana.",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Prana Comet",
                            "description": "Puedes realizar ataques normales con la Estrella de Prana. En lugar de imbuir el arma con cargas, acumula maná en la Estrella de Maná. Almacena 3 puntos de maná por cada golpe con éxito.",
                            "cost": "0",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },
        {
            "name": "Monk",
            "subclasses": [
                {
                    "name": "Punishment",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Guardian",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Spiritist",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Orator",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Engineer",
            "subclasses": [
                {
                    "name": "Artillery",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Infantry",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Mecha-Pilot",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Artifacts",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Spirit Linker",
            "subclasses": [
                {
                    "name": "Posession",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Summoner",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Balance",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Synchronism",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Assassin",
            "subclasses": [
                {
                    "name": "Combat",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Mauler",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Prowler",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Poisonist",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Musician",
            "subclasses": [
                {
                    "name": "Inspiration",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Daunt",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Dancer",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Hipnotism",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Psychic",
            "subclasses": [
                {
                    "name": "Kinethic",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Psyonic",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Telepathic",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Etheric",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Priest",
            "subclasses": [
                {
                    "name": "Divine Punishment",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Healing",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Ward",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Prophet",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        },{
            "name": "Specialist",
            "subclasses": [
                {
                    "name": "Phisic",
                    "skills": [
                        {
                            "name": "Terrain Morphing:Needle",
                            "description": "Deformas el suelo creando una estaca del material del suelo que se dirigirá hacia tu objetivo clavandose en este y dañándole. La estaca tiene un rango máximo de 5 m y una vez usada queda en medio del terreno como un obstaculo que tiene 1 punto de vida.",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Terrain Morphing:Column",
                            "description": "Se crea una columna en la area seleccionada que crecerá perpendicularmente a esta. Hace daño y puede hacer knock-up. En caso de que haya una superficia plana contraria a donde está el sello el enemigo puede quedar atrapado entre la columna y la pared. Quedando inmobil durante 1 turno. (Tiempo de preparacion: 1 turno)",
                            "cost": "5",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Magic",
                    "skills": [
                        {
                            "name": "Master of Sigils",
                            "description": `Passive: Permite crear y llevar al alquimista algunos sellos dibujados antes de los combates para no gastar maná al usarlos. <br>
                            Los sellos de nivel 2 usan 2 espacios de nivel 1; los sellos de nivel 3 usan 4 espacios de nivel 1.<br>
                            Active: Puedes gastar turnos para crear un sello y activarlo cuando quieras, esto no gastará maná pero si tiempo. Los sellos de Lvl 1 costaran 2 acciones, los de Lvl 2 costaran 3 acciones y los de Lvl 3 costaran 4.
                            `,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Overpowering Sigil",
                            "description": "Dibujas un sello en la mano de una persona, el siguiente ataque que haga hará más daño, ya sea físico o mágico. (Puedes decidir la cantidad de maná que gastas y la potenciación será mayor como más prana, máximo 10 de prana).",
                            "cost": "10",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Commiseration",
                    "skills": [
                        {
                            "name": "Master of Potions",
                            "description": `Passive: Solo un alquimista tiene el suficiente cuidado para poder transportar las pociones que este mismo hace. Tendrás una caja imbuida con magia que permitirá que estas se conserven y no se rompan pudiendo transportar 6 viales. Tomarse una poción en combate es una instantánea si la usas en ti mismo y una habilidad normal si la pasas a un objetivo, los compañeros tendrán que gastar acción para tomársela. También permite aprender pociones.<br>
                            Active: Creas una poción de vida que recuperará 10% de la vida máxima del objetivo + una cantidad dependiendo de tu magia. Ingredientes: 3 Salma (planta bastante común en la mayoría de los bosques), 2 cucharadas de Alzor (un azúcar mágico que se puede comprar en cualquier tienda mágica por un precio asequible) y zumo de zanahoria. Si se crea en combate se tarda 2 acciones en hacerla.`,
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Sticky vial",
                            "description": "Creas una poción muy pegajosa que puedes lanzar y que cubra un área de 5x5, todo objetivo que pase por esa área se verá ralentizado en un 50%. Ingredientes: 1 hoja de Rafflesia Arnoldii (raro, al encontrar 1 tiene de 6 a 12 hojas) y 1 hongo diente sangrante (poco común, común en zonas muy húmedas).",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }, {
                    "name": "Speciality",
                    "skills": [
                        {
                            "name": "Homunculist Master",
                            "description": "Permite aprender a crear homúnculos y a invocarlos. El alquimista aprenderá a crear unos homúnculos básicos que le ayudarán en sus combates, pero también podrá aprender a crear homúnculos nuevos si busca por los libros de alquimia o alguien le enseña. Solo se puede tener un homúnculo invocado a la vez.",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        },
                        {
                            "name": "Homunculus 01: Trif",
                            "description": "Trif es una homúnculo poco inteligente que solo posee un ataque, heal. Curará siempre al objetivo del grupo con menos vida.  Ingredientes: Cualquier tipo de hierba, planta o árbol. (Tiene que haber en cantidad)",
                            "cost": "",
                            "formulation": "",
                            "slot1": "slotTypeA",
                            "slot2": "slotTypeA",
                            "slot3": "slotTypeA",
                            "slot4": "slotTypeA"
                        }
                    ]
                }]
        }
    ].sort((a, b) => a['name'].localeCompare(b['name']))
}
