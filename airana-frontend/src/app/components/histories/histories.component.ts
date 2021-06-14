import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

import { AppComponent } from '../../index';


@Component({
    selector: 'histories',
    templateUrl: './histories.component.html',
    styleUrls: ['./histories.component.scss']
})
export class HistoriesComponent {
    title = 'Histories';
    selectedHistory = false;

    isSelected(e: boolean) {
        if (this.selectedHistory == e) {
            this.selectedHistory = false;
        } else {

            this.selectedHistory = e;
        }
    }
    histories = [{
        "title": "Los Profesian y la dimensión de los humanos: Baneforth",
        "text": `<p>El mundo de Baneforth ha sucumbido recientemente a una catástrofe internacional: La magia fue eliminada durante años que enseguida se volvieron muy oscuros. Los demonios conquistaron parte del mundo esclavizando sociedades enteras.</p><p>
        Todo comenzó cuando los demonios consiguieron acceder a las armas del consejo de magos y pudieron neutralizar la existencia de códigos mágicos empleando un repetidor de ondas del vacío. Por suerte, aunque todo el mundo utilizaba la magia para todo, había regiones y excepciones que lograron cerrar los portales prana impidiendo el acceso de los demonios a Baneforth y apagando el repetidor del vacío después de superar los demonios restantes. </p><p>
        A día de hoy el consejo ha sido restaurado y reestructurado, recuperando las antiguas artes perdidas del mundo y dando a todo un valor único y necesario para evitar que algo así pueda volver a suceder. </p><p>
        Si no sabes luchar, no te preocupes ya que el nuevo consejo ha reestructurado la sociedad con tal de encontrar la élite en cualquier profesión y conocimiento. El pasado nos ha enseñado que lo que conocemos no es suficiente para salvar Baneforth y que cualquier cosa puede salvar el mundo.</p><p>
        Únete a la Sociedad Profesian y desarrolla tus conocimientos, siembra la semilla del futuro y forma parte de la élite que salvaguarda la paz mundial.</p><p>
       <h4> Como Profesian tienes el derecho de:</h4>
        <ul>
        <li>Viajar de forma gratuita entre los países que forman parte de la Sociedad Profesian. </li><li>Acceso a cualquier tipo de aprendizaje relacionado con tu especialidad exceptuando clases individuales o no programadas en instituciones públicas o concertadas. </li><li> Libertad total de vida excepto en caso de emergencias relacionadas con la Sociedad Profesian.</li><li>Además, si eres un Verion (profesian de combate) la comida va a cuenta de la Sociedad Profesian durante las misiones. </li></ul></p>
        
        
        
        </ul>
        <h4>Como Profesian tienes el deber de:</h4>
        <ul>
        <li>Tener disponibilidad completa para actuar en nombre del consejo.</li>
       <li> Mantenerte limpio de antecedentes penales.</li>
        <li>Continuar en tu formación y desarrollo.</li> </ul>`
    },{
        "title": "La ciudad de Kendra",
        "text": `<p>La ciudad de Kendra es la capital de la CPP, el país de Kender y su provincia de Kendra.</p>
        <img src="assets/img/Mapa/Kender provincias.png" alt="provincias de kendra">
        <p><p>Mapa de la ciudad de Kendra
        <img src="assets/img/Mapa/kendra.png" alt="Ciudad de Kendra"></p>`
    }

    ]
}
