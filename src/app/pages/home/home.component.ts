import { Component, OnInit } from '@angular/core';
import { CollectionsComponent } from '../collections/collections.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Listeners } from '../../utils/listeners';
import { MetricsService } from '../../services/metrics.service';
import { Subjects } from '../../utils/subjects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CollectionsComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  subsidiaryId: string | null = null;
  subsidiaryName: string | null = null;
  origin: string | null = null;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private listener : Listeners,
    private service: MetricsService,
    ) {
    }

  ngOnInit(): void {
    // this.listener.events(this);
  }

  navigateToCollection(collectionName: string) {
    const formattedName = collectionName.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate([`/collections/${formattedName}`]);
  }


  metricService(params: any) {
    this.service.sendMetrics(params).subscribe(
      (response: any) => {
        console.log('checkStatus OK', response);
      },
      (error: any) => {
        console.log('Error', error);
      }
    );
  }

}
