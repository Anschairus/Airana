var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "@angular/core";
var PatchNotesComponent = /** @class */ (function () {
    function PatchNotesComponent() {
        this.title = "Patch Notes";
        this.changelog = [
            {
                title: "Removemos los submenús provisionales",
                span: "(Navegación - 05/10/2017)",
                text: "<p>\n        <p>La web crece y por tanto ya carece de sentido mantener los men\u00FAs que no llevan a ning\u00FAn sitio operativo. Es por eso que se\n        han quitado esos men\u00FAs para que vay\u00E1is donde vay\u00E1is pod\u00E1is ver algo m\u00E1s que un t\u00EDtulo.</p>",
                ul: [
                    {
                        title: "news/ Best and Worst Rolls",
                        span: "(Eliminado)",
                        text: "Aunque la idea es genial y ha gustado no es conveniente mantener un apartado de una partida fuera de éstas. Buscaremos la manera de ponerla en el apartado de partidas privadas dentro de la partida que ahora está en curso ya que es llevada por el grupo de desarrollo de Airana, pero es decisión de cada GM el dedicar tiempo a hacer los apartados que desee en su partida o no."
                    },
                    {
                        title: "Lore/ Monsters",
                        span: "(Desactivado temporalmente)",
                        text: "Aún no tenemos una base de datos de monstruos con lo que éste apartado no tendrá sentido de forma inmediata."
                    },
                    {
                        title: "Secret Skills",
                        span: "(Desactivado temporalmente)",
                        text: "Ningún jugador tiene el nivel necesario para aprender las habilidades secretas y es por éste motivo que el apartado está desactivado hasta que las habilidades secretas sean asequibles."
                    },
                    {
                        title: "Ranking/ Guild",
                        span: "(Desactivado temporalmente)",
                        text: "Aún no tenemos un sistema de puntuaje adecuado para poner en marcha éste apartado."
                    },
                    {
                        title: "play/Your Stories y play/Quick Match",
                        span: "(Nuevo)",
                        text: "Nuevo apartado donde encontraréis los submenús de las diferentes formas de juego. El apartado Your Stories contiene las partidas en las que participais y el apartado Quick Match servirá para crear enfrentamientos rapidos una vez que esté terminado."
                    }
                ]
            },
            {
                title: "Arreglos en la interfaz",
                span: "Mejora de compatibilidad y Bugfixes",
                text: "En ésta ocasión hemos continuado mejorando la interfaz para que sea más útil y accesible desde cualquier dispositivo.",
                ul: [
                    {
                        title: "Airana fuera de casa.",
                        span: false,
                        text: "Lanzamiento de la página en su versión compatible con Android y iPhone para garantizar la accesibilidad de la web estéis donde estéis."
                    },
                    {
                        title: "Las Verion Classes ahora se pueden cerrar.",
                        span: false,
                        text: "Ahora la navegación por la pagina de clases Verion resultará mucho más cómoda."
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
                text: "\n        He comenzado a hacer funcionar los apartados de la web. Poco a poco espero ir a\u00F1adiendo m\u00E1s y mejor, pero la web ya tiene\n        alguna utilidad m\u00E1s que almacenar fichas.\n<br>\n\n    A\u00F1adidos elementos en:",
                ul: [
                    { title: "News/Best and Worst Rolls", span: "(BWR)", text: false },
                    { title: "News/Most Recent", text: false },
                    { title: "News/Patch Notes", text: false },
                    { title: "Lore/Verion Classes", span: "En construcción.", text: false },
                    {
                        title: "Botones no operativos en el men\u00FA de cuentas",
                        span: "En construcción.",
                        text: false
                    }
                ]
            }
        ];
    }
    PatchNotesComponent = __decorate([
        Component({
            selector: "patch-notes",
            templateUrl: "./patch-notes.component.html",
            styleUrls: ["./patch-notes.component.css"]
        })
    ], PatchNotesComponent);
    return PatchNotesComponent;
}());
export { PatchNotesComponent };
/*
{
        "title": false, "span": false, "text": false
        , "ul": [
            { "title": false, "span": false, "text": false }
            ,{ "title": false, "span": false, "text": false }
        ]
    }
*/
//# sourceMappingURL=patch-notes.component.js.map