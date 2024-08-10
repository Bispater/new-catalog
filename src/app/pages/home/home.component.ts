import { Component } from '@angular/core';
import { CollectionsComponent } from "../collections/collections.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CollectionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {}

  navigateToCollection(collectionName: string) {
    const formattedName = collectionName.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate([`/collections/${formattedName}`]);
  }
}
