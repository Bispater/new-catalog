import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule, MatCardModule ],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent implements OnInit {

  title: string = '';

  autos = [
    { name: 'Onix Sedan', image: 'https://r.btcdn.co/11643/original/782765-onix-sedan-azul-llantas-bitono-cl.png', price: '$9,190,000' },
    { name: 'Sail', image: 'https://r.btcdn.co/11643/original/913269-SAIL_ROJO.png', price: '$9,990,000' },
    { name: 'Sail Hatchback', image: 'https://r.btcdn.co/11643/original/950693-SAIL-HB-LTZ-rojo-burdeo-metalico.webp', price: '$10,990,000' },
    { name: 'Onix Turbo', image: 'https://r.btcdn.co/11643/original/782753-01-onix-turbo-3_4-blanco-cl.png', price: '$12,990,000' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title') || '';
      console.log("title ", this.title)
    });
  }


}
