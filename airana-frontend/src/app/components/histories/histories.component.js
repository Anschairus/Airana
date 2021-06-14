var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var HistoriesComponent = /** @class */ (function () {
    function HistoriesComponent() {
        this.title = 'Histories';
        this.selectedHistory = false;
        this.histories = [{
                "title": "Los Profesian y la dimensión de los humanos: Baneforth",
                "text": "<p>El mundo de Baneforth ha sucumbido recientemente a una cat\u00E1strofe internacional: La magia fue eliminada durante a\u00F1os que enseguida se volvieron muy oscuros. Los demonios conquistaron parte del mundo esclavizando sociedades enteras.</p><p>\n        Todo comenz\u00F3 cuando los demonios consiguieron acceder a las armas del consejo de magos y pudieron neutralizar la existencia de c\u00F3digos m\u00E1gicos empleando un repetidor de ondas del vac\u00EDo. Por suerte, aunque todo el mundo utilizaba la magia para todo, hab\u00EDa regiones y excepciones que lograron cerrar los portales prana impidiendo el acceso de los demonios a Baneforth y apagando el repetidor del vac\u00EDo despu\u00E9s de superar los demonios restantes. </p><p>\n        A d\u00EDa de hoy el consejo ha sido restaurado y reestructurado, recuperando las antiguas artes perdidas del mundo y dando a todo un valor \u00FAnico y necesario para evitar que algo as\u00ED pueda volver a suceder. </p><p>\n        Si no sabes luchar, no te preocupes ya que el nuevo consejo ha reestructurado la sociedad con tal de encontrar la \u00E9lite en cualquier profesi\u00F3n y conocimiento. El pasado nos ha ense\u00F1ado que lo que conocemos no es suficiente para salvar Baneforth y que cualquier cosa puede salvar el mundo.</p><p>\n        \u00DAnete a la Sociedad Profesian y desarrolla tus conocimientos, siembra la semilla del futuro y forma parte de la \u00E9lite que salvaguarda la paz mundial.</p><p>\n       <h4> Como Profesian tienes el derecho de:</h4>\n        <ul>\n        <li>Viajar de forma gratuita entre los pa\u00EDses que forman parte de la Sociedad Profesian. </li><li>Acceso a cualquier tipo de aprendizaje relacionado con tu especialidad exceptuando clases individuales o no programadas en instituciones p\u00FAblicas o concertadas. </li><li> Libertad total de vida excepto en caso de emergencias relacionadas con la Sociedad Profesian.</li><li>Adem\u00E1s, si eres un Verion (profesian de combate) la comida va a cuenta de la Sociedad Profesian durante las misiones. </li></ul></p>\n        \n        \n        \n        </ul>\n        <h4>Como Profesian tienes el deber de:</h4>\n        <ul>\n        <li>Tener disponibilidad completa para actuar en nombre del consejo.</li>\n       <li> Mantenerte limpio de antecedentes penales.</li>\n        <li>Continuar en tu formaci\u00F3n y desarrollo.</li> </ul>"
            }
        ];
    }
    HistoriesComponent.prototype.isSelected = function (e) {
        if (this.selectedHistory == e) {
            this.selectedHistory = false;
        }
        else {
            this.selectedHistory = e;
        }
    };
    HistoriesComponent = __decorate([
        Component({
            selector: 'histories',
            templateUrl: './histories.component.html',
            styleUrls: ['./histories.component.css']
        })
    ], HistoriesComponent);
    return HistoriesComponent;
}());
export { HistoriesComponent };
//# sourceMappingURL=histories.component.js.map