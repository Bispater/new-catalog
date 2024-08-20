import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule, MatCardModule],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss',
})
export class CollectionsComponent implements OnInit {
  title: string = '';
  selectedTabIndex: number = 0;

  autos = [
    {
      name: 'Onix Sedán',
      image: 'https://r.btcdn.co/11643/original/782765-onix-sedan-azul-llantas-bitono-cl.png',
      price: '$9.190.000',
      images: [
        {
          "src": "https://r.btcdn.co/11643/original/782780-01-onix-sedan-ext-cl.jpg",
          "alt": "Onix Sedán - 01-onix-sedan-ext-cl.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/782779-02-onix-sedan-ext-cl.jpg",
          "alt": "Onix Sedán - 02-onix-sedan-ext-cl.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/782774-05-onix-sedan-ext-cl.jpg",
          "alt": "Onix Sedán - 05-onix-sedan-ext-cl.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/782776-04-onix-sedan-ext-cl.jpg",
          "alt": "Onix Sedán - 04-onix-sedan-ext-cl.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/782775-03-onix-sedan-int-cl.jpg",
          "alt": "Onix Sedán - 03-onix-sedan-int-cl.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/782777-04-onix-sedan-int-cl.jpg",
          "alt": "Onix Sedán - 04-onix-sedan-int-cl.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/782778-02-onix-sedan-int-cl.jpg",
          "alt": "Onix Sedán - 02-onix-sedan-int-cl.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/782781-01-onix-sedan-int-cl.jpg",
          "alt": "Onix Sedán - 01-onix-sedan-int-cl.jpg"
        }
      ],
      "colors": [
        {
          "color": "Rojo Metálico",
          "image": "https://www.chevrolet.cl/content/dam/chevrolet/south-america/chile/espanol/index/cars/2021-onix-sedan/mov/colorizer/03-images/01-onix-sedan-turbo-rojo-met.jpg?imwidth=1200"
        },
        {
          "color": "Azul Metálico",
          "image": "https://www.chevrolet.cl/content/dam/chevrolet/south-america/chile/espanol/index/cars/2021-onix-sedan/mov/colorizer/03-images/02-onix-sedan-turbo-azul-met.jpg?imwidth=1200"
        },
        {
          "color": "Plata Metálico",
          "image": "https://www.chevrolet.cl/content/dam/chevrolet/south-america/chile/espanol/index/cars/2021-onix-sedan/mov/colorizer/03-images/03-onix-sedan-turbo-plata-met.jpg?imwidth=1200"
        },
        {
          "color": "Blanco",
          "image": "https://www.chevrolet.cl/content/dam/chevrolet/south-america/chile/espanol/index/cars/2021-onix-sedan/mov/colorizer/03-images/04-onix-sedan-turbo-blanco.jpg?imwidth=1200"
        },
        {
          "color": "GRIS OSCURO METÁLICO",
          "image": "https://www.chevrolet.cl/content/dam/chevrolet/south-america/chile/espanol/index/cars/2021-onix-sedan/mov/colorizer/03-images/05-onix-sedan-turbo-gris-osc.jpg?imwidth=1200"
        },
        {
          "color": "Negro Metálico",
          "image": "https://www.chevrolet.cl/content/dam/chevrolet/south-america/chile/espanol/index/cars/2021-onix-sedan/mov/colorizer/03-images/06-onix-sedan-turbo-negro.jpg?imwidth=1200"
        }
      ]
    },
    {
      name: 'Sail',
      image: 'https://r.btcdn.co/11643/original/913269-SAIL_ROJO.png',
      price: '$9.990.000',
      images: [
        {
          "src": "https://r.btcdn.co/11643/original/912637-sail-1.jpg",
          "alt": "Sail - sail-1.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/912626-01-galeria-int-sail.jpg",
          "alt": "Sail - 01-galeria-int-sail.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/912627-02-galeria-int-sail.jpg",
          "alt": "Sail - 02-galeria-int-sail.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/912628-03-galeria-int-sail.jpg",
          "alt": "Sail - 03-galeria-int-sail.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/912629-04-galeria-int-sail.jpg",
          "alt": "Sail - 04-galeria-int-sail.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/912630-05-galeria-int-sail.jpg",
          "alt": "Sail - 05-galeria-int-sail.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/912632-07-galeria-int-sail.jpg",
          "alt": "Sail - 07-galeria-int-sail.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/912633-08-galeria-int-sail.jpg",
          "alt": "Sail - 08-galeria-int-sail.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/912634-09-galeria-int-sail.jpg",
          "alt": "Sail - 09-galeria-int-sail.jpg"
        }
      ]      
    },
    {
      name: 'Sail Hatchback',
      image: 'https://r.btcdn.co/11643/original/950693-SAIL-HB-LTZ-rojo-burdeo-metalico.webp',
      price: '$10.990.000',
      images: [
        {
          "src": "https://r.btcdn.co/11643/original/950696-01-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 01-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950697-12-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 12-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950698-02-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 02-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950699-10-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 10-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950700-11-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 11-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950701-14-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 14-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950702-09-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 09-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950703-03-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 03-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950704-06-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 06-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950705-13-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 13-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950706-07-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 07-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950707-04-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 04-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950708-05-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 05-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950709-08-Sail-hb-ext.webp",
          "alt": "SAIL HATCHBACK - 08-Sail-hb-ext.webp"
        },
        {
          "src": "https://r.btcdn.co/11643/original/950722-07-Sail-hb-int.jpg",
          "alt": "SAIL HATCHBACK - 07-Sail-hb-int.jpg"
        }
      ]
    },
    {
      name: 'Onix Turbo',
      image: 'https://r.btcdn.co/11643/original/782753-01-onix-turbo-3_4-blanco-cl.png',
      price: '$12.990.000',
      images: [
        {
          "src": "https://r.btcdn.co/11643/original/782757-05-onix-turbo-blanco-cl.jpg",
          "alt": "Onix Turbo - 05-onix-turbo-blanco-cl.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/782756-02-onix-turbo-rojo-cl.jpg",
          "alt": "Onix Turbo - 02-onix-turbo-rojo-cl.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/782755-03-onix-turbo-blanco-cl.jpg",
          "alt": "Onix Turbo - 03-onix-turbo-blanco-cl.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/782754-04-onix-turbo-rojo-cl.jpg",
          "alt": "Onix Turbo - 04-onix-turbo-rojo-cl.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/783755-20CHONHB45051_V5.jpg",
          "alt": "Onix Turbo - 20CHONHB45051_V5.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/783756-20CHONHB45058_V1.jpg",
          "alt": "Onix Turbo - 20CHONHB45058_V1.jpg"
        },
        {
          "src": "https://r.btcdn.co/11643/original/783754-20CHONHB_Global_Interior_f01.jpg",
          "alt": "Onix Turbo - 20CHONHB_Global_Interior_f01.jpg"
        }
      ]
    }
  ];
  
  pickups = [
    {
      name: 'N400',
      image: 'https://r.btcdn.co/11643/original/782681-n400-colorizer-blanco-cl.png',
      price: '$10.898.100',
    },
    {
      name: 'MONTANA',
      image: 'https://r.btcdn.co/11643/original/845924-01-montana-plata-gr2.png',
      price: '$17.738.100',
    },
    {
      name: 'COLORADO',
      image: 'https://r.btcdn.co/11643/original/953636-05-Colorado_HC_MY24_front_blanco_GAZ.webp',
      price: '$33.308.100',
    },
    {
      name: 'SILVERADO',
      image: 'https://r.btcdn.co/11643/original/953666-01-Silverado_ZR2_front_azul_brillante_GLT.webp',
      price: '$57.298.100',
    },
  ];
  
  suvs = [
    { 
      name: 'Groove', 
      image: 'https://r.btcdn.co/11643/original/782911-GROOVE_MCX_1XT26_LV3_LHD_GRQ.png', 
      price: '$11.990.000' 
    },
    { 
      name: 'Spin', 
      image: 'https://r.btcdn.co/11643/original/782874-05-spin-colorizer-plata-cl.png', 
      price: '$12.290.000' 
    },
    { 
      name: 'Tracker', 
      image: 'https://r.btcdn.co/11643/original/953682-06_Tracker-Premier-Front-acero_satinado_GR2.webp', 
      price: '$14.490.000' 
    },
    { 
      name: 'Captiva Turbo', 
      image: 'https://r.btcdn.co/11643/original/953630-Captiva_XL_front-burdeo-metalico_J0U.webp', 
      price: '$15.490.000' 
    },
    { 
      name: 'New Traverse', 
      image: 'https://r.btcdn.co/11643/original/782950-02-traverse-colorizer-blanco-cl.png', 
      price: '$41.490.000' 
    },
    { 
      name: 'Blazer', 
      image: 'https://r.btcdn.co/11643/original/838461-rojo-blazer-2023.png', 
      price: '$44.990.000' 
    },
    { 
      name: 'Tahoe', 
      image: 'https://r.btcdn.co/11643/original/953674-07-Tahoe-Z71-Front-blanco-perla-G1W.webp', 
      price: '$67.990.000' 
    },
    { 
      name: 'Suburban', 
      image: 'https://r.btcdn.co/11643/original/783018-03-suburban-colorizer-plata-met-perla-cl.png', 
      price: '$72.990.000' 
    }
  ];
  
  electrics = [
    { 
      name: 'BOLT EUV', 
      image: 'https://r.btcdn.co/11643/original/915560-BOLT-EUV-1920x1080-azul-brillante-met.webp', 
      price: '$44.490.000' 
    }
  ];
  

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.title = params.get('title') || '';
      const tab = this.title;
      console.log("param name", tab);
      switch (tab) {
        case 'autos':
          this.selectedTabIndex = 0;
          break;
        case 'pick-ups-&-vans':
          console.log("param name case pick", tab);
          this.selectedTabIndex = 1;
          break;
        case 'suvs':
          this.selectedTabIndex = 2;
          break;
        case 'electricos':
          this.selectedTabIndex = 3;
          break;
        default:
          this.selectedTabIndex = 0;
          break;
      }
    });
  }

  goToProduct(car: any) {
    const carName = car.name.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/products', carName], { state: { car } });
  }

  selectCar(car: any) {
    console.log('Car selected:', car);
  }
}
