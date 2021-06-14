import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { AppComponent } from "../../index";

@Component({
  selector: "patch-notes",
  templateUrl: "./patch-notes.component.html",
  styleUrls: ["./patch-notes.component.scss"]
})
export class PatchNotesComponent {
  title = "Patch Notes";

  changelog = [
    {
      title: "Removemos los submenús provisionales",
      span: "(Navegación - 13/02/2021)",
      text: `<p>
        <p>Algunos apartados habían quedado obsoletos nuevamente con los cambios que han ido entrando éste año así que han sido remodelados.</p>`,
      ul: [
        {
          title: "play/your-stories",
          span: "(Añadido)",
          text:
            "La información personal de cada partida está añadida en éste apartado a partir de ahora. El bien conocido Best&Worst Rolls está en la partida que lo creó, de la misma forma que cada partida podrá crear sus propias tradiciones y adosarlas en su apartado."
        },
        {
          title: "play/quick-match",
          span: "(Eliminado)",
          text:
            "No se prevee la integración de la jugabilidad en partida a la web a corto plazo."
        }
      ]
    },{
      title: "Removemos los submenús provisionales",
      span: "(Navegación - 05/10/2017)",
      text: `<p>
        <p>La web crece y por tanto ya carece de sentido mantener los menús que no llevan a ningún sitio operativo. Es por eso que se
        han quitado esos menús para que vayáis donde vayáis podáis ver algo más que un título.</p>`,
      ul: [
        {
          title: "news/ Best and Worst Rolls",
          span: "(Eliminado)",
          text:
            "Aunque la idea es genial y ha gustado no es conveniente mantener un apartado de una partida fuera de éstas. Buscaremos la manera de ponerla en el apartado de partidas privadas dentro de la partida que ahora está en curso ya que es llevada por el grupo de desarrollo de Airana, pero es decisión de cada GM el dedicar tiempo a hacer los apartados que desee en su partida o no."
        },
        {
          title: "Lore/ Monsters",
          span: "(Desactivado temporalmente)",
          text:
            "Aún no tenemos una base de datos de monstruos con lo que éste apartado no tendrá sentido de forma inmediata."
        },
        {
          title: "Secret Skills",
          span: "(Desactivado temporalmente)",
          text:
            "Ningún jugador tiene el nivel necesario para aprender las habilidades secretas y es por éste motivo que el apartado está desactivado hasta que las habilidades secretas sean asequibles."
        },
        {
          title: "Ranking/ Guild",
          span: "(Desactivado temporalmente)",
          text:
            "Aún no tenemos un sistema de puntuaje adecuado para poner en marcha éste apartado."
        },
        {
          title: "play/Your Stories y play/Quick Match",
          span: "(Nuevo)",
          text:
            "Nuevo apartado donde encontraréis los submenús de las diferentes formas de juego. El apartado Your Stories contiene las partidas en las que participais y el apartado Quick Match servirá para crear enfrentamientos rapidos una vez que esté terminado."
        }
      ]
    },
    {
      title: "Arreglos en la interfaz",
      span: "Mejora de compatibilidad y Bugfixes",
      text:
        "En ésta ocasión hemos continuado mejorando la interfaz para que sea más útil y accesible desde cualquier dispositivo.",
      ul: [
        {
          title: "Airana fuera de casa.",
          span: false,
          text:
            "Lanzamiento de la página en su versión compatible con Android y iPhone para garantizar la accesibilidad de la web estéis donde estéis."
        },
        {
          title: "Las Verion Classes ahora se pueden cerrar.",
          span: false,
          text:
            "Ahora la navegación por la pagina de clases Verion resultará mucho más cómoda."
        },
        {
          title: "Error en la barra de navegación",
          span: false,
          text: "Corregidos elementos que se superponían en el menú."
        }
      ]
    },
    {
      title: "La web arranca",
      span: "Patch 0.1",
      text: `
        He comenzado a hacer funcionar los apartados de la web. Poco a poco espero ir añadiendo más y mejor, pero la web ya tiene
        alguna utilidad más que almacenar fichas.
<br>

    Añadidos elementos en:`,
      ul: [
        { title: `News/Best and Worst Rolls`, span: "(BWR)", text: false },
        { title: `News/Most Recent`, text: false },
        { title: `News/Patch Notes`, text: false },
        { title: `Lore/Verion Classes`, span: "En construcción.", text: false },
        {
          title: `Botones no operativos en el menú de cuentas`,
          span: "En construcción.",
          text: false
        }
      ]
    }
  ];
}
/*
{
        "title": false, "span": false, "text": false
        , "ul": [
            { "title": false, "span": false, "text": false }
            ,{ "title": false, "span": false, "text": false }
        ]
    }
*/
