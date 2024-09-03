import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MetricsService } from './services/metrics.service';
import { Subjects } from './utils/subjects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  title = 'new-catalog';
}
