import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelLateral } from './components/panel-lateral/panel-lateral';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PanelLateral],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gestordeudas-front');
}
