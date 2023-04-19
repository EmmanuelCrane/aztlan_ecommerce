import Image from 'next/image';
import details from '../../../styles/components/detailsProduct.module.css';
import utilities from '../../../styles/utilities/utilities.module.css';
import buttons from '../../../styles/components/buttons.module.css';

interface Props {
    params: {
      id:number
    }
}

const products = [
  {
    category: "tec",
    id: 1,
    images: [
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview4_a2vsca.png",
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
    ],
    brand: "rolex",
    description: "Timex Expedition Scout 40 Reloj para hombreTimex Expedition Scout 40 Reloj para hombre  ",
    offer: 5,
    price: 757.21,
    status: "Disponible",
    otherColors: [
      {
        images: [
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png',
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png',
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png'
        ],
        price: 1112.70,
        offer: 0,
        status: 'Disponible',
      },
      {
        images: [
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png',
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png',
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png'
        ],
        price: 1112.70,
        offer: 0,
        status: 'no disponible',
      },
      {
        images: [
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png',
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png',
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png'
        ],
        price: 1112.70,
        offer: 0,
        status: 'Disponible',
      },
      {
        images: [
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png',
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png',
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png'
        ],
        price: 1112.70,
        offer: 0,
        status: 'Disponible',
      },
      {
        images: [
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png',
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png',
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png'
        ],
        price: 1112.70,
        offer: 0,
        status: 'Disponible',
      },
      {
        images: [
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png',
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png',
          'https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png'
        ],
        price: 1112.70,
        offer: 0,
        status: 'Disponible',
      }
    ],
    about: [
      'Smartphone HONOR Pantalla Súper Curva OLED, con tasa de actualización de hasta 120 Hz',
      'Celular 8GB+256GB, Procesador Qualcomm Snapdragon 778G Plus, Ocho núcleos, 6.67 inches, 161.4mm X 73.3mm X 7.91mm, 178g',
      'Cámara principal de 54MP IMX800 Super Sensing ( apertura f/1.9 )+ Cámara de 50MP Ultra gran angular & Macro (apertura f/2.2 )+ cámara de profundidad de 2MP (apertura f/2.4) *Los pixeles de foto y video pueden variar dependiendo del modo de captura. Favor de referirse a la situación de uso real',
      'HONOR 66W SuperCharge Charger, Soporte de carga rápida de hasta 11V/6A, compatible con carga rápida de hasta 10V/4A.',
      'Magic UI 6.1 (basado en Android 12, Cuenta con google serveicio.'
    ],
    specification: {
      'Marca': 'Honor',
      'Fabricante': 'HONOR',
      'Modelo': 'FNE-NX9',
      'Nombre del modelo': 	'HONOR 70',
      'Año del modelo': 2022,
      'Número de parte': 'FNE-NX9',
      'Tamaño de RAM': '8 GB',
      'Capacidad de almacenamiento de la memoria': '256 GB',
      'Tamaño de memoria flash instalada': '256 GB',
      'Capacidad de almacenamiento digital': '256 GB',
      'Sistema operativo': 'Android 12.0',
      'Marca del procesador': 'Qualcomm',
      'Características especiales': 'Celular 120 Hz, 1.07 millones de colores, OLED Pantalla 6.67 inches, SONY IMX800 Cámara, Smartphone 8 RAM 256GB ROM, 5G Celular Honor 70 Smartphone',
      'Accesorios de montaje': 'Auriculares, Funda del teléfono, Cable USB, Cargador rapida 66w',
      'Número de productos': 1,
      'Tipo de pantalla': 'OLED',
      'Resolución de captura de video': '4k',
      'Baterías incluidas': 'No',
      'Baterías necesarias': 'No',
      'Composición de celdas de batería': 'Litio Ion',
      'Clasificación de potencia de la batería': '4800 Milliamp Hours',
      'Tecnología celular': '5G',
      'Tipo de conector': 'USB',
      'Entrada de interfaz humana': 'Touch Screen',
      'Factor de forma': 'Barra' 
    },
    infoAdditional: {
      'Dimensiones del paquete': '18.5 x 10 x 6.5 cm; 440 g',
      'Pilas': '1 Litio Ion (Tipo de pila necesaria)',
      'Número de modelo del producto': 'FNE-NX9',
      'ASIN': 'B0BF31LH71',
      'Producto en Amazon.com.mx desde': '12 septiembre 2022',
      'Opinión media de los clientes': '4.5 de 5 estrellas 26 calificaciones',
      'Clasificación en los más vendidos de Amazon': 'nº3,922 en Electrónicos (Ver el Top 100 en Electrónicos) nº143 en Celulares y Smartphones Desbloqueados' 
    }
  },
  {
    category: "tec",
    id: 2,
    images: [
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview4_a2vsca.png",
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
    ],
    brand: "rolex",
    description: "Timex Expedition Scout 40 Reloj para hombre ",
    offer: 5,
    price: 757.21,
    status: "Disponible",
    otherColors: [
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "no disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      }
    ],
    about: [
      "Smartphone HONOR Pantalla Súper Curva OLED, con tasa de actualización de hasta 120 Hz",
      "Celular 8GB+256GB, Procesador Qualcomm Snapdragon 778G Plus, Ocho núcleos, 6.67 inches, 161.4mm X 73.3mm X 7.91mm, 178g",
      "Cámara principal de 54MP IMX800 Super Sensing ( apertura f/1.9 )+ Cámara de 50MP Ultra gran angular & Macro (apertura f/2.2 )+ cámara de profundidad de 2MP (apertura f/2.4) *Los pixeles de foto y video pueden variar dependiendo del modo de captura. Favor de referirse a la situación de uso real",
      "HONOR 66W SuperCharge Charger, Soporte de carga rápida de hasta 11V/6A, compatible con carga rápida de hasta 10V/4A.",
      "Magic UI 6.1 (basado en Android 12, Cuenta con google serveicio."
    ],
    specification: {
      "Marca": "Honor",
      "Fabricante": "HONOR",
      "Modelo": "FNE-NX9",
      "Nombre del modelo": 	"HONOR 70",
      "Año del modelo": 2022,
      "Número de parte": "FNE-NX9",
      "Tamaño de RAM": "8 GB",
      "Capacidad de almacenamiento de la memoria": "256 GB",
      "Tamaño de memoria flash instalada": "256 GB",
      "Capacidad de almacenamiento digital": "256 GB",
      "Sistema operativo": "Android 12.0",
      "Marca del procesador": "Qualcomm",
      "Características especiales": "Celular 120 Hz, 1.07 millones de colores, OLED Pantalla 6.67 inches, SONY IMX800 Cámara, Smartphone 8 RAM 256GB ROM, 5G Celular Honor 70 Smartphone",
      "Accesorios de montaje": "Auriculares, Funda del teléfono, Cable USB, Cargador rapida 66w",
      "Número de productos": 1,
      "Tipo de pantalla": "OLED",
      "Resolución de captura de video": "4k",
      "Baterías incluidas": "No",
      "Baterías necesarias": "No",
      "Composición de celdas de batería": "Litio Ion",
      "Clasificación de potencia de la batería": "4800 Milliamp Hours",
      "Tecnología celular": "5G",
      "Tipo de conector": "USB",
      "Entrada de interfaz humana": "Touch Screen",
      "Factor de forma": "Barra" 
    },
    infoAdditional: {
      "Dimensiones del paquete": "18.5 x 10 x 6.5 cm; 440 g",
      "Pilas": "1 Litio Ion (Tipo de pila necesaria)",
      "Número de modelo del producto": "FNE-NX9",
      "ASIN": "B0BF31LH71",
      "Producto en Amazon.com.mx desde": "12 septiembre 2022",
      "Opinión media de los clientes": "4.5 de 5 estrellas 26 calificaciones",
      "Clasificación en los más vendidos de Amazon": "nº3,922 en Electrónicos (Ver el Top 100 en Electrónicos) nº143 en Celulares y Smartphones Desbloqueados" 
    }
  },
  {
    category: "tec",
    id: 3,
    images: [
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview4_a2vsca.png",
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
    ],
    brand: "rolex",
    description: "Timex Expedition Scout 40 Reloj para hombre ",
    offer: 5,
    price: 757.21,
    status: "Disponible",
    otherColors: [
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "no disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      }
    ],
    about: [
      "Smartphone HONOR Pantalla Súper Curva OLED, con tasa de actualización de hasta 120 Hz",
      "Celular 8GB+256GB, Procesador Qualcomm Snapdragon 778G Plus, Ocho núcleos, 6.67 inches, 161.4mm X 73.3mm X 7.91mm, 178g",
      "Cámara principal de 54MP IMX800 Super Sensing ( apertura f/1.9 )+ Cámara de 50MP Ultra gran angular & Macro (apertura f/2.2 )+ cámara de profundidad de 2MP (apertura f/2.4) *Los pixeles de foto y video pueden variar dependiendo del modo de captura. Favor de referirse a la situación de uso real",
      "HONOR 66W SuperCharge Charger, Soporte de carga rápida de hasta 11V/6A, compatible con carga rápida de hasta 10V/4A.",
      "Magic UI 6.1 (basado en Android 12, Cuenta con google serveicio."
    ],
    specification: {
      "Marca": "Honor",
      "Fabricante": "HONOR",
      "Modelo": "FNE-NX9",
      "Nombre del modelo": 	"HONOR 70",
      "Año del modelo": 2022,
      "Número de parte": "FNE-NX9",
      "Tamaño de RAM": "8 GB",
      "Capacidad de almacenamiento de la memoria": "256 GB",
      "Tamaño de memoria flash instalada": "256 GB",
      "Capacidad de almacenamiento digital": "256 GB",
      "Sistema operativo": "Android 12.0",
      "Marca del procesador": "Qualcomm",
      "Características especiales": "Celular 120 Hz, 1.07 millones de colores, OLED Pantalla 6.67 inches, SONY IMX800 Cámara, Smartphone 8 RAM 256GB ROM, 5G Celular Honor 70 Smartphone",
      "Accesorios de montaje": "Auriculares, Funda del teléfono, Cable USB, Cargador rapida 66w",
      "Número de productos": 1,
      "Tipo de pantalla": "OLED",
      "Resolución de captura de video": "4k",
      "Baterías incluidas": "No",
      "Baterías necesarias": "No",
      "Composición de celdas de batería": "Litio Ion",
      "Clasificación de potencia de la batería": "4800 Milliamp Hours",
      "Tecnología celular": "5G",
      "Tipo de conector": "USB",
      "Entrada de interfaz humana": "Touch Screen",
      "Factor de forma": "Barra" 
    },
    infoAdditional: {
      "Dimensiones del paquete": "18.5 x 10 x 6.5 cm; 440 g",
      "Pilas": "1 Litio Ion (Tipo de pila necesaria)",
      "Número de modelo del producto": "FNE-NX9",
      "ASIN": "B0BF31LH71",
      "Producto en Amazon.com.mx desde": "12 septiembre 2022",
      "Opinión media de los clientes": "4.5 de 5 estrellas 26 calificaciones",
      "Clasificación en los más vendidos de Amazon": "nº3,922 en Electrónicos (Ver el Top 100 en Electrónicos) nº143 en Celulares y Smartphones Desbloqueados" 
    }
  },
  {
    category: "tec",
    id: 4,
    images: [
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview4_a2vsca.png",
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
    ],
    brand: "rolex",
    description: "Timex Expedition Scout 40 Reloj para hombre ",
    offer: 5,
    price: 757.21,
    status: "Disponible",
    otherColors: [
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "no disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      }
    ],
    about: [
      "Smartphone HONOR Pantalla Súper Curva OLED, con tasa de actualización de hasta 120 Hz",
      "Celular 8GB+256GB, Procesador Qualcomm Snapdragon 778G Plus, Ocho núcleos, 6.67 inches, 161.4mm X 73.3mm X 7.91mm, 178g",
      "Cámara principal de 54MP IMX800 Super Sensing ( apertura f/1.9 )+ Cámara de 50MP Ultra gran angular & Macro (apertura f/2.2 )+ cámara de profundidad de 2MP (apertura f/2.4) *Los pixeles de foto y video pueden variar dependiendo del modo de captura. Favor de referirse a la situación de uso real",
      "HONOR 66W SuperCharge Charger, Soporte de carga rápida de hasta 11V/6A, compatible con carga rápida de hasta 10V/4A.",
      "Magic UI 6.1 (basado en Android 12, Cuenta con google serveicio."
    ],
    specification: {
      "Marca": "Honor",
      "Fabricante": "HONOR",
      "Modelo": "FNE-NX9",
      "Nombre del modelo": 	"HONOR 70",
      "Año del modelo": 2022,
      "Número de parte": "FNE-NX9",
      "Tamaño de RAM": "8 GB",
      "Capacidad de almacenamiento de la memoria": "256 GB",
      "Tamaño de memoria flash instalada": "256 GB",
      "Capacidad de almacenamiento digital": "256 GB",
      "Sistema operativo": "Android 12.0",
      "Marca del procesador": "Qualcomm",
      "Características especiales": "Celular 120 Hz, 1.07 millones de colores, OLED Pantalla 6.67 inches, SONY IMX800 Cámara, Smartphone 8 RAM 256GB ROM, 5G Celular Honor 70 Smartphone",
      "Accesorios de montaje": "Auriculares, Funda del teléfono, Cable USB, Cargador rapida 66w",
      "Número de productos": 1,
      "Tipo de pantalla": "OLED",
      "Resolución de captura de video": "4k",
      "Baterías incluidas": "No",
      "Baterías necesarias": "No",
      "Composición de celdas de batería": "Litio Ion",
      "Clasificación de potencia de la batería": "4800 Milliamp Hours",
      "Tecnología celular": "5G",
      "Tipo de conector": "USB",
      "Entrada de interfaz humana": "Touch Screen",
      "Factor de forma": "Barra" 
    },
    infoAdditional: {
      "Dimensiones del paquete": "18.5 x 10 x 6.5 cm; 440 g",
      "Pilas": "1 Litio Ion (Tipo de pila necesaria)",
      "Número de modelo del producto": "FNE-NX9",
      "ASIN": "B0BF31LH71",
      "Producto en Amazon.com.mx desde": "12 septiembre 2022",
      "Opinión media de los clientes": "4.5 de 5 estrellas 26 calificaciones",
      "Clasificación en los más vendidos de Amazon": "nº3,922 en Electrónicos (Ver el Top 100 en Electrónicos) nº143 en Celulares y Smartphones Desbloqueados" 
    }
  },
  {
    category: "tec",
    id: 5,
    images: [
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview4_a2vsca.png",
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
      "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
    ],
    brand: "rolex",
    description: "Timex Expedition Scout 40 Reloj para hombre ",
    offer: 5,
    price: 757.21,
    status: "Disponible",
    otherColors: [
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "no disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      },
      {
        images: [
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview1_r2akr9.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview2_ov4vvk.png",
          "https://res.cloudinary.com/drebk8qrx/image/upload/v1677047064/aztlan/preview3_up2yng.png"
        ],
        price: 1112.70,
        offer: 0,
        status: "Disponible",
      }
    ],
    about: [
      "Smartphone HONOR Pantalla Súper Curva OLED, con tasa de actualización de hasta 120 Hz",
      "Celular 8GB+256GB, Procesador Qualcomm Snapdragon 778G Plus, Ocho núcleos, 6.67 inches, 161.4mm X 73.3mm X 7.91mm, 178g",
      "Cámara principal de 54MP IMX800 Super Sensing ( apertura f/1.9 )+ Cámara de 50MP Ultra gran angular & Macro (apertura f/2.2 )+ cámara de profundidad de 2MP (apertura f/2.4) *Los pixeles de foto y video pueden variar dependiendo del modo de captura. Favor de referirse a la situación de uso real",
      "HONOR 66W SuperCharge Charger, Soporte de carga rápida de hasta 11V/6A, compatible con carga rápida de hasta 10V/4A.",
      "Magic UI 6.1 (basado en Android 12, Cuenta con google serveicio."
    ],
    specification: {
      "Marca": "Honor",
      "Fabricante": "HONOR",
      "Modelo": "FNE-NX9",
      "Nombre del modelo": 	"HONOR 70",
      "Año del modelo": 2022,
      "Número de parte": "FNE-NX9",
      "Tamaño de RAM": "8 GB",
      "Capacidad de almacenamiento de la memoria": "256 GB",
      "Tamaño de memoria flash instalada": "256 GB",
      "Capacidad de almacenamiento digital": "256 GB",
      "Sistema operativo": "Android 12.0",
      "Marca del procesador": "Qualcomm",
      "Características especiales": "Celular 120 Hz, 1.07 millones de colores, OLED Pantalla 6.67 inches, SONY IMX800 Cámara, Smartphone 8 RAM 256GB ROM, 5G Celular Honor 70 Smartphone",
      "Accesorios de montaje": "Auriculares, Funda del teléfono, Cable USB, Cargador rapida 66w",
      "Número de productos": 1,
      "Tipo de pantalla": "OLED",
      "Resolución de captura de video": "4k",
      "Baterías incluidas": "No",
      "Baterías necesarias": "No",
      "Composición de celdas de batería": "Litio Ion",
      "Clasificación de potencia de la batería": "4800 Milliamp Hours",
      "Tecnología celular": "5G",
      "Tipo de conector": "USB",
      "Entrada de interfaz humana": "Touch Screen",
      "Factor de forma": "Barra" 
    },
    infoAdditional: {
      "Dimensiones del paquete": "18.5 x 10 x 6.5 cm; 440 g",
      "Pilas": "1 Litio Ion (Tipo de pila necesaria)",
      "Número de modelo del producto": "FNE-NX9",
      "ASIN": "B0BF31LH71",
      "Producto en Amazon.com.mx desde": "12 septiembre 2022",
      "Opinión media de los clientes": "4.5 de 5 estrellas 26 calificaciones",
      "Clasificación en los más vendidos de Amazon": "nº3,922 en Electrónicos (Ver el Top 100 en Electrónicos) nº143 en Celulares y Smartphones Desbloqueados" 
    }
  }
]

const page = ({ params }: Props) => {

  const { id } = params;

  const specification = (options: object = {}) => { 
    return Object.entries(options).map(([key, value], index) => 
      <tr key={index} className={utilities.border_bottom_secondary}>
        <td>{key}</td>
        <td>{value}</td>
      </tr>
    )
  }

    return (
    <>
      {
        products.map((product, index) => id == product.id &&
        
          <section className={details.container__detail} key={index}>
            {/* carrasule */}

            <p className={details.sm_title}>{product.description}</p>

            <article className={details.carousel__product__view}>
              <div className={details.carousel__product__views}>
                {
                  product.images?.map((element, index) =>
                    <div key={index}>
                      <Image src={element} width={100} height={100} className={utilities.img_full} alt="image" />
                    </div>
                  )
                }
              </div>
            </article>

            {/*  */}

            <section className={utilities.w_100}>

              <article className={details.product__view}>
                <div className={details.product__view__content}>
                  <Image src={product.images[0]} width={100} height={100} className={utilities.img_full} alt="" />
                </div>
                <div className={details.product__views}>
                  {
                    product.images?.map((element, index) => <div className={details.product__view__content_img} key={index}><Image src={element} width={100} height={100} className={utilities.img_full} alt="" /></div>)
                  }
                </div>
              </article>

            </section>
            {/*  */}

            <section className={details.product__information}>
              <article className={details.sales__info}>

                <p className={details.info__brand}>marca: { product.brand }</p>
                <p className={details.md_title}>{product.description}</p>
                <p className={details.info__brand}>oferta</p>

                <p className={details.info__price}>
                  {
                    product.offer > 0 && <span>-{ product.offer } %</span>
                  }
                  <span className={`${utilities.container_flex} ${utilities.fs_4}`}>
                    <sup className={utilities.align_items_start}>$</sup>{ product.price }
                  </span>
                </p>
                <p className={details.info__price_old}>
                  precio anterior <span className={details.price__old}>${ product.price }</span>
                </p>
              </article>

              <article className={details.product__call_action}>
                <button className={`${buttons.btn} ${buttons.btn_lg} ${buttons.btn_border_primary}`}>buy now</button>
                <button className={`${buttons.btn} ${buttons.btn_lg} ${buttons.btn_brand}`}>add to car</button>
              </article>

              <article className={details.other__models}>
                <h4 className={details.other__models__title}>color: purpura, plateado</h4>
                <div className={details.other__models__content}>
                  {
                    product.otherColors?.map((element, index) => (
                      <div key={index}>
                        <Image src={element.images[0]} width={100} height={100} className={utilities.img_full} alt="si" />
                      </div>
                    ))
                  }
                </div>
              </article>

              <article className={details.about__details}>
                <h4 className={details.about__details__title}>acerca de este articulo</h4>
                <ul className={details.about__details__list}>
                  {
                    product.about?.map((element, index) => <li key={index} className={details.about__details__list__item} >{element}</li>)
                  }
                </ul>
              </article>
            </section>
            

            <article className={details.specification__details}>
              <h4 className={details.specification__details__title}>Especificaciones tecnicas</h4>
              <table className={details.specification__details__table}>
                <tbody>
                  {
                    specification(product.specification)
                  }
                </tbody>
              </table>
            </article>

            <article className={details.specification__details}>
              <h4 className={details.specification__details__title}>Informacion adicional</h4>
              <table className={details.specification__details__table}>
                <tbody>
                  {
                    specification(product.infoAdditional)
                  }
                </tbody>
              </table>
            </article>
          </section>
        )
      }
    </>
  )
}

export default page