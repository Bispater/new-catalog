import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarDataService {
  // data = {
  //   autos: [
  //     {
  //       name: 'Onix Sedán',
  //       image:
  //         'https://r.btcdn.co/11643/original/782765-onix-sedan-azul-llantas-bitono-cl.png',
  //       price: '$9.190.000',
  //       on_star: 'yes',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782780-01-onix-sedan-ext-cl.jpg',
  //           alt: 'Onix Sedán - 01-onix-sedan-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782779-02-onix-sedan-ext-cl.jpg',
  //           alt: 'Onix Sedán - 02-onix-sedan-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782774-05-onix-sedan-ext-cl.jpg',
  //           alt: 'Onix Sedán - 05-onix-sedan-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782776-04-onix-sedan-ext-cl.jpg',
  //           alt: 'Onix Sedán - 04-onix-sedan-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782775-03-onix-sedan-int-cl.jpg',
  //           alt: 'Onix Sedán - 03-onix-sedan-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782777-04-onix-sedan-int-cl.jpg',
  //           alt: 'Onix Sedán - 04-onix-sedan-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782778-02-onix-sedan-int-cl.jpg',
  //           alt: 'Onix Sedán - 02-onix-sedan-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782781-01-onix-sedan-int-cl.jpg',
  //           alt: 'Onix Sedán - 01-onix-sedan-int-cl.jpg',
  //         },
  //       ],
  //       colors: [
  //         {
  //           color: 'Rojo Metálico',
  //           image:
  //             'https://r.btcdn.co/11643/original/782989-onix-sedan-rojo-llantas-bitono-cl.png',
  //         },
  //         {
  //           color: 'Azul Metálico',
  //           image:
  //             'https://r.btcdn.co/11643/original/782769-onix-sedan-azul-llantas-bitono-cl.png',
  //         },
  //         {
  //           color: 'Plata Metálico',
  //           image:
  //             'https://r.btcdn.co/11643/original/782766-onix-sedan-plata-llantas-bitono-cl.png',
  //         },
  //         {
  //           color: 'Blanco',
  //           image:
  //             'https://www.chevrolet.cl/content/dam/chevrolet/south-america/chile/espanol/index/cars/2021-onix-sedan/mov/colorizer/03-images/04-onix-sedan-turbo-blanco.jpg?imwidth=1200',
  //         },
  //         {
  //           color: 'GRIS OSCURO METÁLICO',
  //           image:
  //             'https://r.btcdn.co/11643/original/953650-Onix-Sedan-gris-oscuro.webp',
  //         },
  //         {
  //           color: 'Negro Metálico',
  //           image:
  //             'https://r.btcdn.co/11643/original/953651-Onix-Sedan-negro.webp',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Sail',
  //       image: 'https://r.btcdn.co/11643/original/913269-SAIL_ROJO.png',
  //       price: '$9.990.000',
  //       on_star: 'no',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/912637-sail-1.jpg',
  //           alt: 'Sail - sail-1.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/912626-01-galeria-int-sail.jpg',
  //           alt: 'Sail - 01-galeria-int-sail.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/912627-02-galeria-int-sail.jpg',
  //           alt: 'Sail - 02-galeria-int-sail.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/912628-03-galeria-int-sail.jpg',
  //           alt: 'Sail - 03-galeria-int-sail.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/912629-04-galeria-int-sail.jpg',
  //           alt: 'Sail - 04-galeria-int-sail.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/912630-05-galeria-int-sail.jpg',
  //           alt: 'Sail - 05-galeria-int-sail.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/912632-07-galeria-int-sail.jpg',
  //           alt: 'Sail - 07-galeria-int-sail.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/912633-08-galeria-int-sail.jpg',
  //           alt: 'Sail - 08-galeria-int-sail.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/912634-09-galeria-int-sail.jpg',
  //           alt: 'Sail - 09-galeria-int-sail.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Sail Hatchback',
  //       image:
  //         'https://r.btcdn.co/11643/original/950693-SAIL-HB-LTZ-rojo-burdeo-metalico.webp',
  //       price: '$10.990.000',
  //       on_star: 'no',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950696-01-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 01-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950697-12-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 12-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950698-02-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 02-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950699-10-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 10-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950700-11-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 11-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950701-14-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 14-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950702-09-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 09-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950703-03-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 03-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950704-06-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 06-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950705-13-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 13-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950706-07-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 07-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950707-04-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 04-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950708-08-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 08-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950709-05-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 05-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950710-15-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 15-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950711-16-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 16-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950712-17-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 17-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950713-18-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 18-Sail-hb-ext.webp',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/950714-19-Sail-hb-ext.webp',
  //           alt: 'SAIL HATCHBACK - 19-Sail-hb-ext.webp',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Onix Turbo',
  //       image:
  //         'https://r.btcdn.co/11643/original/782753-01-onix-turbo-3_4-blanco-cl.png',
  //       price: '$12.990.000',
  //       on_star: 'yes',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782757-05-onix-turbo-blanco-cl.jpg',
  //           alt: 'Onix Turbo - 05-onix-turbo-blanco-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782756-02-onix-turbo-rojo-cl.jpg',
  //           alt: 'Onix Turbo - 02-onix-turbo-rojo-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782755-03-onix-turbo-blanco-cl.jpg',
  //           alt: 'Onix Turbo - 03-onix-turbo-blanco-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782754-04-onix-turbo-rojo-cl.jpg',
  //           alt: 'Onix Turbo - 04-onix-turbo-rojo-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/783755-20CHONHB45051_V5.jpg',
  //           alt: 'Onix Turbo - 20CHONHB45051_V5.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/783756-20CHONHB45058_V1.jpg',
  //           alt: 'Onix Turbo - 20CHONHB45058_V1.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/783754-20CHONHB_Global_Interior_f01.jpg',
  //           alt: 'Onix Turbo - 20CHONHB_Global_Interior_f01.jpg',
  //         },
  //       ],
  //     },
  //   ],
  //   pickups: [
  //     {
  //       name: 'N400',
  //       image:
  //         'https://r.btcdn.co/11643/original/782681-n400-colorizer-blanco-cl.png',
  //       price: '$10.898.100',
  //       on_star: 'no',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782683-GJCP0002000_Mercado-frente-tres-cuartos1.jpg',
  //           alt: 'N400 - GJCP0002000_Mercado-frente-tres-cuartos1.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782686-GJCP0002000_Mercado-frente-tres-cuartos2.jpg',
  //           alt: 'N400 - GJCP0002000_Mercado-frente-tres-cuartos2.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782685-GJCP0002000_Mercado-lateral-der2.jpg',
  //           alt: 'N400 - GJCP0002000_Mercado-lateral-der2.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782684-GJCP0002000_Bodega-frente-tres-cuartos-der.jpg',
  //           alt: 'N400 - GJCP0002000_Bodega-frente-tres-cuartos-der.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782687-GJCP0002000_Bodega-cajuela1.jpg',
  //           alt: 'N400 - GJCP0002000_Bodega-cajuela1.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782692-GJCP0003000_Tablero.jpg',
  //           alt: 'N400 - GJCP0003000_Tablero.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782689-GJCP0003000_Volante-lateral.jpg',
  //           alt: 'N400 - GJCP0003000_Volante-lateral.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782688-GJCP0002000_Bodega-interior-cajuela1.jpg',
  //           alt: 'N400 - GJCP0002000_Bodega-interior-cajuela1.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782690-GJCP0003000_Bolsa-de-aire.jpg',
  //           alt: 'N400 - GJCP0003000_Bolsa-de-aire.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782691-GJCP0002000_Bodega-interior-cajuela2.jpg',
  //           alt: 'N400 - GJCP0002000_Bodega-interior-cajuela2.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'MONTANA',
  //       image:
  //         'https://r.btcdn.co/11643/original/845924-01-montana-plata-gr2.png',
  //       price: '$17.738.100',
  //       on_star: 'yes',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/845929-01-montana-gallery.jpeg',
  //           alt: 'MONTANA - 01-montana-gallery.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/845926-02-montana-gallery.jpeg',
  //           alt: 'MONTANA - 02-montana-gallery.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/845925-03-montana-gallery.jpeg',
  //           alt: 'MONTANA - 03-montana-gallery.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/845930-04-montana-gallery.jpeg',
  //           alt: 'MONTANA - 04-montana-gallery.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/845927-05-montana-gallery.jpeg',
  //           alt: 'MONTANA - 05-montana-gallery.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/845928-06-montana-gallery.jpeg',
  //           alt: 'MONTANA - 06-montana-gallery.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/845933-01-int-montana.jpeg',
  //           alt: 'MONTANA - 01-int-montana.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/845936-02-int-montana.jpeg',
  //           alt: 'MONTANA - 02-int-montana.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/845932-03-int-montana.jpeg',
  //           alt: 'MONTANA - 03-int-montana.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/845935-04-int-montana.jpeg',
  //           alt: 'MONTANA - 04-int-montana.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/845931-05-int-montana.jpeg',
  //           alt: 'MONTANA - 05-int-montana.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/845934-06-int-montana.jpeg',
  //           alt: 'MONTANA - 06-int-montana.jpeg',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'COLORADO',
  //       image:
  //         'https://r.btcdn.co/11643/original/953636-05-Colorado_HC_MY24_front_blanco_GAZ.webp',
  //       price: '$33.308.100',
  //       on_star: 'yes',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782673-GMCWH2004-PG007_PLACA_S10_HC_0264-M.jpg',
  //           alt: 'COLORADO - GMCWH2004-PG007_PLACA_S10_HC_0264-M.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782669-02-colorado-gal-ext.jpg',
  //           alt: 'COLORADO - 02-colorado-gal-ext.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782670-GMCWH2004-PG007_PLACA_S10_HC_0041_M.jpg',
  //           alt: 'COLORADO - GMCWH2004-PG007_PLACA_S10_HC_0041_M.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782672-03-colorado-gal-ext.jpg',
  //           alt: 'COLORADO - 03-colorado-gal-ext.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782671-05-colorado-gal-ext.jpg',
  //           alt: 'COLORADO - 05-colorado-gal-ext.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782677-pantalla_espanol.jpg',
  //           alt: 'COLORADO - pantalla_espanol.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782679-S10_HC_0128.jpg',
  //           alt: 'COLORADO - S10_HC_0128.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782675-S10_HC_0113.jpg',
  //           alt: 'COLORADO - S10_HC_0113.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782674-S10_HC_0150.jpg',
  //           alt: 'COLORADO - S10_HC_0150.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782676-S10_HC_0123.jpg',
  //           alt: 'COLORADO - S10_HC_0123.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782678-S10_HC_0110.jpg',
  //           alt: 'COLORADO - S10_HC_0110.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'SILVERADO',
  //       image:
  //         'https://r.btcdn.co/11643/original/953666-01-Silverado_ZR2_front_azul_brillante_GLT.webp',
  //       price: '$57.298.100',
  //       on_star: 'yes',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/795540-22CHSLLD35169.jpg',
  //           alt: 'SILVERADO - 22CHSLLD35169.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/795541-22CHSLLD35004.jpg',
  //           alt: 'SILVERADO - 22CHSLLD35004.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/795542-22CHSLLD35039.jpg',
  //           alt: 'SILVERADO - 22CHSLLD35039.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/795543-22CHSLLD35005.jpg',
  //           alt: 'SILVERADO - 22CHSLLD35005.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/789196-02-zr2-int.jpg',
  //           alt: 'SILVERADO - 02-zr2-int.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/789197-03-Silverado-bose-interior.jpg',
  //           alt: 'SILVERADO - 03-Silverado-bose-interior.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/789199-04-zr2-int.jpg',
  //           alt: 'SILVERADO - 04-zr2-int.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/789228-int2.jpg',
  //           alt: 'SILVERADO - int2.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/789229-int1.jpg',
  //           alt: 'SILVERADO - int1.jpg',
  //         },
  //       ],
  //     },
  //   ],
  //   suvs: [
  //     {
  //       name: 'Groove',
  //       image:
  //         'https://r.btcdn.co/11643/original/782911-GROOVE_MCX_1XT26_LV3_LHD_GRQ.png',
  //       price: '$11.990.000',
  //       on_star: 'no',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782917-04-groove-rojo-ext-cl.jpg',
  //           alt: 'Groove - 04-groove-rojo-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782912-06-groove-rojo-ext-cl.jpg',
  //           alt: 'Groove - 06-groove-rojo-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782914-05-groove-rojo-ext-cl.jpg',
  //           alt: 'Groove - 05-groove-rojo-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782920-01-groove-rojo-ext-cl.jpg',
  //           alt: 'Groove - 01-groove-rojo-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782915-05-groove-sunroof-int-cl.jpg',
  //           alt: 'Groove - 05-groove-sunroof-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782913-03-groove-int-cl.jpg',
  //           alt: 'Groove - 03-groove-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782919-02-groove-tacometro-int-cl.jpg',
  //           alt: 'Groove - 02-groove-tacometro-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782916-04-groove-asientos-int-cl.jpg',
  //           alt: 'Groove - 04-groove-asientos-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782918-01-groove-consola-int-cl.jpg',
  //           alt: 'Groove - 01-groove-consola-int-cl.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Spin',
  //       image:
  //         'https://r.btcdn.co/11643/original/782874-05-spin-colorizer-plata-cl.png',
  //       price: '$12.290.000',
  //       on_star: 'no',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782996-07-spin-ext-cl.jpg',
  //           alt: 'Spin - 07-spin-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782997-08-spin-ext-cl.jpg',
  //           alt: 'Spin - 08-spin-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782998-02-spin-ext-cl.jpg',
  //           alt: 'Spin - 02-spin-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/783000-06-spin-ext-cl.jpg',
  //           alt: 'Spin - 06-spin-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782999-05-spin-ext-cl.jpg',
  //           alt: 'Spin - 05-spin-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782884-02-spin-int-cl.jpg',
  //           alt: 'Spin - 02-spin-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782885-04-spin-int-cl.jpg',
  //           alt: 'Spin - 04-spin-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782886-01-spin-int-cl.jpg',
  //           alt: 'Spin - 01-spin-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782887-05-spin-int-cl.jpg',
  //           alt: 'Spin - 05-spin-int-cl.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Tracker',
  //       image:
  //         'https://r.btcdn.co/11643/original/953682-06_Tracker-Premier-Front-acero_satinado_GR2.webp',
  //       price: '$14.490.000',
  //       on_star: 'yes',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782903-20CHTR37039.jpg',
  //           alt: 'Tracker - 20CHTR37039.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782896-21CHTRGE45021.jpg',
  //           alt: 'Tracker - 21CHTRGE45021.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782898-21CHTRGE45071.jpg',
  //           alt: 'Tracker - 21CHTRGE45071.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782899-21CHTRGE45013.jpg',
  //           alt: 'Tracker - 21CHTRGE45013.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782901-20CHTR37041.jpg',
  //           alt: 'Tracker - 20CHTR37041.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782902-04-tracker-ext-cl.jpg',
  //           alt: 'Tracker - 04-tracker-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782895-21CHTRGE45030.jpg',
  //           alt: 'Tracker - 21CHTRGE45030.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782897-21CHTRGE45027.jpg',
  //           alt: 'Tracker - 21CHTRGE45027.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782905-21CHTRGE45065.jpg',
  //           alt: 'Tracker - 21CHTRGE45065.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782900-21CHTRGE45033.jpg',
  //           alt: 'Tracker - 21CHTRGE45033.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782904-21CHTRGE45041.jpg',
  //           alt: 'Tracker - 21CHTRGE45041.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Captiva Turbo',
  //       image:
  //         'https://r.btcdn.co/11643/original/953630-Captiva_XL_front-burdeo-metalico_J0U.webp',
  //       price: '$15.490.000',
  //       on_star: 'no',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782849-06-captiva-turbo-gal-ext-cl.jpg',
  //           alt: 'Captiva Turbo - 06-captiva-turbo-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782846-01-captiva-turbo-gal-ext-cl.jpg',
  //           alt: 'Captiva Turbo - 01-captiva-turbo-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782848-03-captiva-turbo-gal-ext-cl.jpg',
  //           alt: 'Captiva Turbo - 03-captiva-turbo-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782851-02-captiva-turbo-gal-ext-cl.jpg',
  //           alt: 'Captiva Turbo - 02-captiva-turbo-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782847-07-captiva-turbo-gal-ext-cl.jpg',
  //           alt: 'Captiva Turbo - 07-captiva-turbo-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782852-03-captiva-turbo-gal-int-cl.jpg',
  //           alt: 'Captiva Turbo - 03-captiva-turbo-gal-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782853-04-captiva-turbo-gal-int-cl.jpg',
  //           alt: 'Captiva Turbo - 04-captiva-turbo-gal-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782855-05-captiva-turbo-gal-int-cl.jpg',
  //           alt: 'Captiva Turbo - 05-captiva-turbo-gal-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782854-06-captiva-turbo-gal-int-cl.jpg',
  //           alt: 'Captiva Turbo - 06-captiva-turbo-gal-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782856-02-captiva-turbo-gal-int-cl.jpg',
  //           alt: 'Captiva Turbo - 02-captiva-turbo-gal-int-cl.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'New Traverse',
  //       image:
  //         'https://r.btcdn.co/11643/original/782950-02-traverse-colorizer-blanco-cl.png',
  //       price: '$41.490.000',
  //       on_star: 'yes',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782958-10-traverse-gal-ext-cl.jpg',
  //           alt: 'New Traverse - 10-traverse-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782961-ddi210913_Chevy_RS_1547.jpg',
  //           alt: 'New Traverse - ddi210913_Chevy_RS_1547.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782957-11-traverse-gal-ext-cl.jpg',
  //           alt: 'New Traverse - 11-traverse-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782955-08-traverse-gal-ext-cl.jpg',
  //           alt: 'New Traverse - 08-traverse-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782956-09-traverse-gal-ext-cl.jpg',
  //           alt: 'New Traverse - 09-traverse-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782959-22CHTE_Global_MCX_Interior_Buck_Still.jpg',
  //           alt: 'New Traverse - 22CHTE_Global_MCX_Interior_Buck_Still.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782960-07-traverse-gal-int-cl.jpg',
  //           alt: 'New Traverse - 07-traverse-gal-int-cl.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Blazer',
  //       image: 'https://r.btcdn.co/11643/original/838461-rojo-blazer-2023.png',
  //       price: '$44.990.000',
  //       on_star: 'yes',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838297-blazer-rs-2500x1000.jpeg',
  //           alt: 'Blazer - blazer-rs-2500x1000.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838290-01-galeria-exterior-blazer-rs.jpeg',
  //           alt: 'Blazer - 01-galeria-exterior-blazer-rs.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838295-05-galeria-exterior-blazer-rs.jpeg',
  //           alt: 'Blazer - 05-galeria-exterior-blazer-rs.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838298-06-galeria-exterior-blazer-rs.jpeg',
  //           alt: 'Blazer - 06-galeria-exterior-blazer-rs.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838292-01-diseno-blazer-rs.jpeg',
  //           alt: 'Blazer - 01-diseno-blazer-rs.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838296-04-diseno-blazer-rs.jpeg',
  //           alt: 'Blazer - 04-diseno-blazer-rs.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838293-01-desempen%CC%83o-blazer-rs.jpeg',
  //           alt: 'Blazer - 01-desempeño-blazer-rs.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838289-01-tecno-blazer-rs.jpeg',
  //           alt: 'Blazer - 01-tecno-blazer-rs.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838288-02-tecno-blazer-rs.jpeg',
  //           alt: 'Blazer - 02-tecno-blazer-rs.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838291-03-galeria-interior-blazer-rs.jpeg',
  //           alt: 'Blazer - 03-galeria-interior-blazer-rs.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838294-04-galeria-interior-blazer-rs.jpeg',
  //           alt: 'Blazer - 04-galeria-interior-blazer-rs.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838299-galeria-interior-blazer-rs-07.jpeg',
  //           alt: 'Blazer - galeria-interior-blazer-rs-07.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838301-pop-up-tech-blazer-rs-01.jpeg',
  //           alt: 'Blazer - pop-up-tech-blazer-rs-01.jpeg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/838300-pop-up-tech-blazer-rs-04.jpeg',
  //           alt: 'Blazer - pop-up-tech-blazer-rs-04.jpeg',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Tahoe',
  //       image:
  //         'https://r.btcdn.co/11643/original/953674-07-Tahoe-Z71-Front-blanco-perla-G1W.webp',
  //       price: '$67.990.000',
  //       on_star: 'yes',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782833-01-tahoe-gal-ext-cl.jpg',
  //           alt: 'Tahoe - 01-tahoe-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782830-05-tahoe-gal-ext-cl.jpg',
  //           alt: 'Tahoe - 05-tahoe-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782831-04-tahoe-gal-ext-cl.jpg',
  //           alt: 'Tahoe - 04-tahoe-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782829-06-tahoe-gal-ext-cl.jpg',
  //           alt: 'Tahoe - 06-tahoe-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782832-03-tahoe-gal-ext-cl.jpg',
  //           alt: 'Tahoe - 03-tahoe-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782837-21CHTA45070_v2.jpg',
  //           alt: 'Tahoe - 21CHTA45070_v2.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782834-21CHTA45030_v2_hometile-RGB.jpg',
  //           alt: 'Tahoe - 21CHTA45030_v2_hometile-RGB.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782835-01-tahoe-gal-int-cl.jpg',
  //           alt: 'Tahoe - 01-tahoe-gal-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782836-02-tahoe-gal-int-cl.jpg',
  //           alt: 'Tahoe - 02-tahoe-gal-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782838-21CHTA45012_v3.jpg',
  //           alt: 'Tahoe - 21CHTA45012_v3.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782839-03-tahoe-gal-int-cl.jpg',
  //           alt: 'Tahoe - 03-tahoe-gal-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782840-21CHTA45029_v3.jpg',
  //           alt: 'Tahoe - 21CHTA45029_v3.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       name: 'Suburban',
  //       image:
  //         'https://r.btcdn.co/11643/original/783018-03-suburban-colorizer-plata-met-perla-cl.png',
  //       price: '$72.990.000',
  //       on_star: 'yes',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782993-02-suburban-gal-ext-cl.jpg',
  //           alt: 'Suburban - 02-suburban-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782995-04-suburban-gal-ext-cl.jpg',
  //           alt: 'Suburban - 04-suburban-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782990-01-suburban-gal-ext-cl.jpg',
  //           alt: 'Suburban - 01-suburban-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782991-05-suburban-gal-ext-cl.jpg',
  //           alt: 'Suburban - 05-suburban-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782992-03-suburban-gal-ext-cl.jpg',
  //           alt: 'Suburban - 03-suburban-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782994-06-suburban-gal-ext-cl.jpg',
  //           alt: 'Suburban - 06-suburban-gal-ext-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782815-04-suburban-gal-int-cl.jpg',
  //           alt: 'Suburban - 04-suburban-gal-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782816-02-suburban-gal-int-cl.jpg',
  //           alt: 'Suburban - 02-suburban-gal-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782817-03-suburban-gal-int-cl.jpg',
  //           alt: 'Suburban - 03-suburban-gal-int-cl.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/782818-01-suburban-gal-int-cl.jpg',
  //           alt: 'Suburban - 01-suburban-gal-int-cl.jpg',
  //         },
  //       ],
  //     },
  //   ],
  //   electrics: [
  //     {
  //       name: 'BOLT EUV',
  //       image:
  //         'https://r.btcdn.co/11643/original/915560-BOLT-EUV-1920x1080-azul-brillante-met.webp',
  //       price: '$44.490.000',
  //       on_star: 'yes',
  //       images: [
  //         {
  //           src: 'https://r.btcdn.co/11643/original/915575-01-bolt-galeria-ext.jpg',
  //           alt: 'BOLT EUV - 01-bolt-galeria-ext.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/915574-02-bolt-galeria-ext.jpg',
  //           alt: 'BOLT EUV - 02-bolt-galeria-ext.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/915573-03-bolt-galeria-ext.jpg',
  //           alt: 'BOLT EUV - 03-bolt-galeria-ext.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/915576-04-bolt-galeria-ext.jpg',
  //           alt: 'BOLT EUV - 04-bolt-galeria-ext.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/915571-01-bolt-galeria-int.jpg',
  //           alt: 'BOLT EUV - 01-bolt-galeria-int.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/915569-02-bolt-galeria-int.jpg',
  //           alt: 'BOLT EUV - 02-bolt-galeria-int.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/915572-03-bolt-galeria-int.jpg',
  //           alt: 'BOLT EUV - 03-bolt-galeria-int.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/915570-04-bolt-galeria-int.jpg',
  //           alt: 'BOLT EUV - 04-bolt-galeria-int.jpg',
  //         },
  //         {
  //           src: 'https://r.btcdn.co/11643/original/915568-05-bolt-galeria-int.jpg',
  //           alt: 'BOLT EUV - 05-bolt-galeria-int.jpg',
  //         },
  //       ],
  //     },
  //   ],
  // };

  private selectedCar: any;
  private data: any;

  constructor() {
    this.data = JSON.parse(localStorage.getItem('carData')!);
    this.selectedCar = JSON.parse(localStorage.getItem('selectedCar')!);  }

  setCar(car: any) {
    this.selectedCar = car;
    localStorage.setItem('selectedCar', JSON.stringify(car));
  }

  getCar() {
    return this.selectedCar;
  }

  getAutos() {
    return this.data.autos;
  }

  getCarByName(name: string) {
    return this.data.autos.find((car: any) => car.name === name);
  }

}
