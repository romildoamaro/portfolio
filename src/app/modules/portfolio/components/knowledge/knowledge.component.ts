import { Component, signal } from '@angular/core';
import { IKnowLedge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowLedge[]>([
    {
      src: 'assets/icons/knowlegde/angular.svg',
      alt: 'Ícone conhecimento Angular',
    },

    {
      src: 'assets/icons/knowlegde/css3.svg',
      alt: 'Ícone conhecimento CSS3',
    },

    {
      src: 'assets/icons/knowlegde/html5.svg',
      alt: 'Ícone conhecimento HTML5',
    },

    {
      src: 'assets/icons/knowlegde/java.svg',
      alt: 'Ícone conhecimento Java',
    },

    {
      src: 'assets/icons/knowlegde/javascript.svg',
      alt: 'Ícone conhecimento JavaScript',
    },

    {
      src: 'assets/icons/knowlegde/nodejs.svg',
      alt: 'Ícone conhecimento Node',
    },

    {
      src: 'assets/icons/knowlegde/react.svg',
      alt: 'Ícone conhecimento React',
    },
  ])
}
