import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor Java(Estagiário)",
        p: "Gw Sistemas | Setembro 2021 - Maio 2022"
      },
      text: '<p>Atuei na criação de novas funcionalidades para o sistema, na correção e identificação de erros.</p>',
    }
  ]);
}
