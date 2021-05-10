import { Injectable } from '@angular/core';
import { Pregunta } from '../models/pregunta';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta = 0;
  opcionSeleccionada: Respuesta;
  deshabilitarBtn = true;
  pregConfirmada = false;
  indexRespuesta = null;
  respuestasUsuario: Array<number> = [];

  public preguntas: Pregunta[] = [
    new Pregunta('¿Quien es más lindo?', [
      new Respuesta('Marti', 1),
      new Respuesta('Flash', 0),
    ]),
    new Pregunta('¿Que nombre no corresponde?', [
      new Respuesta('Francë', 0),
      new Respuesta('Tokyo', 0),
      new Respuesta('Ever', 1),
      new Respuesta('Alaska', 0),
    ]),
    new Pregunta('¿Como se llama el barrio de la DH?', [
      new Respuesta('Calabasas', 0),
      new Respuesta('Woodland Hills', 1),
      new Respuesta('Beverly Hills', 0),
      new Respuesta('Encino', 0),
    ]),
    new Pregunta('¿Como es mi DNI?', [
        new Respuesta('40520562', 0),
        new Respuesta('40652520', 0),
        new Respuesta('40256602', 0),
        new Respuesta('40562520', 1),
    ]),
    new Pregunta('¿Quien está más enamorado?', [
        new Respuesta('Flash', 1),
        new Respuesta('Marti', 0),
    ]),
  ];
  constructor() { }

  getPreguntas() {
    return this.preguntas.slice();
  }
}
