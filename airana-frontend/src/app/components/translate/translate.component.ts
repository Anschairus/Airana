import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { Router } from '@angular/router';
import { findKey } from 'lodash';


// import { AlertService, UserService } from '../../_services/index';




@Component({
    selector: 'translate',
    templateUrl: './translate.component.html',
    styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {
    title = 'Translate';
    loaded = true;
    inputLanguage = (`Com un àngel cruel
    Noi, converteix-te en un mite
    
    El vent blau és ara
    Fins i tot si toques la porta al pit
    Només mirant-me
    Vostè somrient
    Coses a tocar suaument
    Estic boig de trobar
    Encara no conec la meva sort
    Bons ulls
    
    Però algun dia ho notareu a l’esquena
    Hi ha ales per apuntar cap al futur llunyà
    
    Tesi de l’Àngel Cruel
    Aviat enlairar-se de la finestra
    Amb un patet calent que s’esquitxa
    Si traieu els vostres records
    Abraça aquest univers i brilla
    Noi, converteix-te en un mite
    
    Dormo per sempre
    Bressol del meu amor
    Només tu ets el missatger dels teus somnis
    Arriba el matí per ser anomenat
    Coll prim
    La llum de la lluna es reflecteix
    Atura el temps a tot el món
    Vull tancar-lo
    
    Si té sentit conèixer-los
    Sóc la bíblia per conèixer la llibertat
    
    Tesi de l’Àngel Cruel
    Comença i comença la tristesa
    La forma de vida que vaig adoptar
    Quan em vaig despertar amb aquell somni
    Brilla més que ningú
    Noi, converteix-te en un mite
    
    La gent fa història mantenint l'amor
    Visc sense ser una deessa
    
    Tesi de l’Àngel Cruel
    Aviat enlairar-se de la finestra
    Amb un patet calent que s’esquitxa
    Si traieu els vostres records
    Abraça aquest univers i brilla
    Noi, converteix-te en un mite `);

    outputLanguage = (`Zankoku na tenshi no you ni
    Shounen yo, shinwa ni nare...
    
    Aoi kaze ga ima mune no doa wo tataitemo,
    Watashi dake wo tada mitsumete
    Hohoenderu Anata
    Sotto Fureru mono
    Motomeru koto ni muchuu de,
    Unmei sae mada shiranai itaike na hitomi
    
    Dakedo itsuka kizuku deshou
    Sono senaka ni wa
    Haruka mirai mezasu tame no
    Hane ga aru koto...
    
    Zankoku na tenshi no tēze
    Madobe kara yagate tobitatsu
    Hotobashiru atsui patosu de
    Omoide wo uragiru nara
    Kono sora wo daite kagayaku
    Shounen yo, shinwa ni nare 
    
    Zutto nemutteru watashi no ai no yurikago
    Anata dake ga yume no shisha ni
    Yobareru asa ga kuru
    Hosoi kubisuji wo tsukiakari ga utsushiteru
    Sekai jū no toki wo tomete
    Tojikometai kedo...
    
    Moshi mo futari aeta koto ni imi ga aru nara,
    Watashi wa, sou, jiyū wo shiru
    Tame no Baiburu
    
    Zankoku na tenshi no tēze
    Kanashimi ga soshite hajimaru
    Dakishimeta inochi no katachi
    Sono yume ni mezameta toki
    Dare yori mo hikari wo hanatsu
    Shounen yo, shinwa ni nare
    
    Hito wa ai wo tsumugi nagara rekishi wo tsukuru
    Megami nante narenai mama
    Watashi wa ikiru...
    
    Zankoku na tenshi no tēze
    Madobe kara yagate tobitatsu
    Hotobashiru atsui patosu de
    Omoide wo uragiru nara
    Kono sora wo daite kagayaku
    Shounen yo, shinwa ni nare`);
    inputLanguageAnalisis;
    outputLanguageAnalisis;
    inputVocalindexes = []
    outputVocalindexes = []

    vocals = ["a", "i", "u", "e", "o"];
    excludedSymbols = [" ", ".", "'", "-", "!", "?", ",", "\n", "’", '\"', '&nbsp', '&#160']
    excludedChars = this.excludedSymbols.concat(this.vocals);

    inputVocalAdyacentes: string[] = []
    outputVocalAdyacentes: string[] = [];

    inputEntreVocales: string[] = [];
    outputEntreVocales: string[] = [];

    inputVocalesSolas: string[] = [];
    outputVocalesSolas: string[] = [];


    inputVocalAdyacentesFrec = []
    outputVocalAdyacentesFrec = [];

    inputEntreVocalesFrec = [];
    outputEntreVocalesFrec = [];

    inputVocalesSolasFrec = [];
    outputVocalesSolasFrec = [];


    textoEjemplo = "Tenemos garbanzos para comer";





    // inputAnalisis = [];
    // outputAnalisis = [];


    // entreConsonantes = [];
    // vocalesSolas = [];
    // indexOfA = [];

    ngOnInit() {

        this.inputLanguage = this.normalizerFunction(this.inputLanguage);
        this.outputLanguage = this.normalizerFunction(this.outputLanguage);

        this.inputVocalindexes = this.indexesFunction(this.inputLanguage);
        this.outputVocalindexes = this.indexesFunction(this.outputLanguage);

        this.inputVocalAdyacentes = this.adyacentesFunction(this.inputLanguage, this.inputVocalindexes);
        this.outputVocalAdyacentes = this.adyacentesFunction(this.outputLanguage, this.outputVocalindexes);

        
        this.inputEntreVocales = this.entreVocalesFunction(this.inputLanguage, this.inputVocalindexes);
        this.outputEntreVocales = this.entreVocalesFunction(this.outputLanguage, this.outputVocalindexes);

        this.inputVocalesSolas = this.vocalesSolasFunction(this.inputLanguage, this.inputVocalindexes);
        this.outputVocalesSolas = this.vocalesSolasFunction(this.outputLanguage, this.outputVocalindexes);


        this.inputVocalAdyacentesFrec = this.sortFrecuencia(this.conteoFrecuenciaFunction(this.inputVocalAdyacentes));
        this.outputVocalAdyacentesFrec = this.sortFrecuencia(this.conteoFrecuenciaFunction(this.outputVocalAdyacentes));

        this.inputEntreVocalesFrec = this.sortFrecuencia(this.conteoFrecuenciaFunction(this.inputEntreVocales));
        this.outputEntreVocalesFrec = this.sortFrecuencia(this.conteoFrecuenciaFunction(this.outputEntreVocales));

        this.inputVocalesSolasFrec = this.sortFrecuencia(this.conteoFrecuenciaFunction(this.inputVocalesSolas));
        this.outputVocalesSolasFrec = this.sortFrecuencia(this.conteoFrecuenciaFunction(this.outputVocalesSolas));
    

        ///

        var inputGlobal = this.inputVocalAdyacentesFrec.concat(this.inputVocalesSolasFrec,this.inputEntreVocalesFrec);

        var outputGlobal = this.outputVocalAdyacentesFrec.concat(this.outputVocalesSolasFrec,this.outputEntreVocalesFrec);

        var inputDuos = this.selectParticles(inputGlobal,2);
        var inputTrios = this.selectParticles(inputGlobal,3);
        

        var outputDuos = this.selectParticles(outputGlobal,2);
        var outputTrios = this.selectParticles(outputGlobal,3);

        inputDuos = this.truncateFunction(inputDuos, outputDuos);
        outputDuos = this.truncateFunction(outputDuos, inputDuos);

        inputTrios = this.truncateFunction(inputTrios, outputTrios);
        outputTrios = this.truncateFunction(outputTrios, inputTrios);


        var noOriginal = this.inputLanguage;

        var duos = this.occurrencesSync(inputDuos, outputDuos);
        var trios = this.occurrencesSync(inputTrios, outputTrios);

        console.log(duos);
        console.log(trios);
        
        
        noOriginal = this.replaceOccurrences(noOriginal, duos, trios);


        // noOriginal = this.replaceOccurrences(noOriginal, inputGlobalArr,outputGlobalArr);
        // var original = this.replaceOccurrencesInv(noOriginal, outputGlobalArr.reverse(), inputGlobalArr.reverse());
    
        // console.log(noOriginal);
        // console.log(original);



    }

    normalizerFunction(language) {
        var map = {
            'a': 'á|à|ã|â|À|Á|Ã|Â',
            'e': 'é|è|ê|É|È|Ê',
            'i': 'í|ì|î|Í|Ì|Î',
            'o': 'ó|ò|ô|õ|Ó|Ò|Ô|Õ|ō|Ō',
            'u': 'ú|ù|û|ü|Ú|Ù|Û|Ü|ū|Ū',
            //'c' : 'ç|Ç',
            //'n' : 'ñ|Ñ'
        };

        for (var pattern in map) {
            language = language.replace(new RegExp(map[pattern], 'g'), pattern).toLowerCase();
        };
        return language;

    }
    indexesFunction(language) {
        var indexes: any = [[], [], [], [], []];
        for (let i = 0; i < this.vocals.length; i++) {
            for (let j = -1; language.indexOf(this.vocals[i], j + 1) >= 0;) {
                indexes[i].push(language.toLowerCase().indexOf(this.vocals[i], j + 1));
                j = language.toLowerCase().indexOf(this.vocals[i], j + 1);
            }

        }

        return [].concat(indexes[0], indexes[1], indexes[2], indexes[3], indexes[4]).sort((n1, n2) => n1 - n2); //uneix la posicio de totes les vocals i les ordena numericament.
    }
    adyacentesFunction(language, vocalIndexes) {
        var vocalAdyacentes = [];
        for (var i = 0; i < vocalIndexes.length; i++) {
            var adyacentes = [];
            var anterior = false;
            var posterior = false;



            if ((vocalIndexes[i] != 0) && !this.excludedChars.includes(language.charAt(vocalIndexes[i] - 1))) {
                anterior = true;
            }
            if ((vocalIndexes[i] != language.length) && !this.excludedChars.includes(language.charAt(vocalIndexes[i] + 1))) {
                posterior = true;
            }

            if (anterior && posterior) {
                adyacentes.push(language.charAt(vocalIndexes[i] - 1));
                adyacentes.push(language.charAt(vocalIndexes[i]));
                adyacentes.push(language.charAt(vocalIndexes[i] + 1));
                vocalAdyacentes.push(adyacentes.join('').trim().toLowerCase());
            }
            else if (anterior && !posterior) {
                adyacentes.push(language.charAt(vocalIndexes[i] - 1));
                adyacentes.push(language.charAt(vocalIndexes[i]));
                vocalAdyacentes.push(adyacentes.join('').trim().toLowerCase());
            }
            else if (!anterior && posterior) {
                adyacentes.push(language.charAt(vocalIndexes[i]));
                adyacentes.push(language.charAt(vocalIndexes[i] + 1));
                vocalAdyacentes.push(adyacentes.join('').trim().toLowerCase());
            }

        }
        return vocalAdyacentes;
    }
    entreVocalesFunction(language, vocalIndexes) {
        var entreVocales = [];
        var entreVocalesAux = [];
        for (var i = 0; i < vocalIndexes.length; i++) {
            if ((vocalIndexes[i + 1] - 1) - (vocalIndexes[i]) >= 2) {
                var entreVocalesAuxChars = [];
                for (var j = 0; j <= ((vocalIndexes[i + 1] - 1) - (vocalIndexes[i])) - 1; j++) {
                    entreVocalesAuxChars.push(language.charAt(vocalIndexes[i] + 1 + j));
                }
                entreVocalesAux.push(entreVocalesAuxChars);
            }
        }

        var entreVocalesChars = [];
        for (var i = 0; i < entreVocalesAux.length; i++) {
            var consonantsChunk = [];
            var consonantDetective = 0;

            for (var j = 0; j < entreVocalesAux[i].length; j++) {
                if (!this.excludedChars.includes(entreVocalesAux[i][j])) {
                    consonantsChunk.push(entreVocalesAux[i][j]);
                    consonantDetective++;
                    if (consonantDetective >= 2) {
                        entreVocalesChars.push(consonantsChunk);
                        consonantsChunk = [];
                        consonantDetective = 0;
                    }
                }
                else if (consonantDetective >= 2) {
                    entreVocalesChars.push(consonantsChunk);
                    consonantsChunk = [];
                    consonantDetective = 0;
                }
                else {
                    consonantsChunk = [];
                    consonantDetective = 0;
                }
            }
        }
        for (var i = 0; i < entreVocalesChars.length; i++) {
            entreVocales.push(entreVocalesChars[i].join('').trim().toLowerCase());
        }
        return entreVocales;
    }
    vocalesSolasFunction(language, vocalIndexes) {
        var vocalesSolas = [];
        for (var i = 0; i < vocalIndexes.length; i++) {
            if (vocalIndexes[i] == 0 && this.excludedSymbols.includes(language.charAt(vocalIndexes[i] + 1))) {
                vocalIndexes.push(language.charAt(vocalIndexes[i]));
            } else if (vocalIndexes[i] == language.length && this.excludedSymbols.includes(language.charAt(vocalIndexes[i] - 1))) {
                vocalIndexes.push(language.charAt(vocalIndexes[i]));
            } else if (this.excludedSymbols.includes(language.charAt(vocalIndexes[i] + 1)) && this.excludedSymbols.includes(language.charAt(vocalIndexes[i] - 1))) {
                vocalesSolas.push(language.charAt(vocalIndexes[i]));

            }
        }
        return vocalesSolas;
    }
    conteoFrecuenciaFunction(example) {

        let values = [];
        let keys = [];
        let a = [];

        var b = example.reduce((a, c) => {
            if (a.has(c)) a.set(c, a.get(c) + 1);
            else a.set(c, 1);
            return a;
        }, new Map())
            .forEach((value, key, map) => {
                a.push([key, value]);
                //   a[0].push(key);
                //   a[1].push(value);
            });
        return a;
        // var element = [];
        // var frecuencia = [];
        // var prev;
        // example.sort();

        // for (var i = 0; i < example.length; i++) {
        //     if (example[i] !== prev) {
        //         element.push(example[i]);
        //         frecuencia.push(1);
        //     } else {
        //         frecuencia[frecuencia.length - 1]++;
        //     }
        //     prev = example[i];
        // }

        // return [element, frecuencia]
    }
    sortFrecuencia(example) {
        example.sort(function (a, b) {
            return b[1] - a[1];
        })
        return example;
    }
    truncateFunction(arr1, arr2) {
        if (arr1.length > arr2.length) {
            return arr1.slice(0, arr2.length);
        }
        else {
            return arr1;
        }
    }
    selectParticles(particles, length){
        var fragments = [];
        for (var i = 0; i < particles.length; i++) {
            if(particles[i][0].toString().length == length) {
                fragments.push(particles[i]);
            }
        }
        return fragments;
    }
    occurrencesSync (inputArr:string[], outputArr:string[]) {
        var mapObj:object = [];
        inputArr.forEach((key, i) => mapObj[key[0]] = outputArr[i][0]);
        return mapObj;
    }


    replaceOccurrences (text, duos, trios) {
        if(this.occurrenceFound(text.slice(0,0+3), trios) ) {
            console.log("trobat");
            return this.occurrenceFound(text.slice(0,0+3), trios);
        }
        for(var i=0; i < text.length; i++ ){    
        }

        return text;
    }

    occurrenceFound (occurrence:string, occurrencesArray) {
        console.log();
        if(Object.keys(occurrencesArray).includes(occurrence)){
            return findKey(occurrencesArray,occurrence);
        } else {
            return false;
        }
        
    }



    



}


    // TRADUCCION ALBHED
    // e2a['a'] = 'e'; e2a['b'] = 'p'; e2a['c'] = 'l'; e2a['d'] = 't';
    // e2a['e'] = 'a'; e2a['f'] = 'v'; e2a['g'] = 'k'; e2a['h'] = 'r';
    // e2a['i'] = 'u'; e2a['j'] = 'z'; e2a['k'] = 'g'; e2a['l'] = 'm';
    // e2a['m'] = 's'; e2a['n'] = 'h'; e2a['o'] = 'u'; e2a['p'] = 'b';
    // e2a['q'] = 'x'; e2a['r'] = 'n'; e2a['s'] = 'c'; e2a['t'] = 'd';
    // e2a['u'] = 'o'; e2a['v'] = 'j'; e2a['w'] = 'f'; e2a['x'] = 'q';
    // e2a['y'] = 'o'; e2a['z'] = 'w';

// Consonants = [{ character: "" }, { character: "k" }, { character: "s" }, { character: "t" }, { character: "n" }, { character: "h" }, { character: "m" }, { character: "y" }, { character: "r" }, { character: "w" }, { character: "n" }, { character: "g" }, { character: "z" }, { character: "d" }, { character: "b" }, { character: "p" }, { character: "ky" }, { character: "ny" }, { character: "by" }, { character: "my" }, { character: "j" }, { character: "ch" }, { character: "sh" }]