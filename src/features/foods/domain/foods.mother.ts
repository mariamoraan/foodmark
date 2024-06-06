import { Food } from './food';

export class FoodsMother {
  static foods(): Food[] {
    return [
      FoodsMother.buddahaBowl(),
      FoodsMother.spinachOmelet(),
      FoodsMother.vietnameseSummerRoll(),
      FoodsMother.grapsSalad(),
    ];
  }
  static buddahaBowl(): Food {
    return Food.fromPrimitives({
      id: 'buddaha-bowl',
      name: 'Sweet Potato Chickpea Buddha Bowl',
      image: 'https://eatwithclarity.com/wp-content/uploads/2021/03/sweet-potato-vegan-buddha-bowl.jpg',
      categories: [
        {
          id: 'buddaha-bowl',
          name: 'Buddaha Bowl',
          color: 'green',
        },
      ],
      preparationTime: 30,
      recipe: `
      1. Precalienta el horno a 200°C.

      2. Pela y corta el boniato en dados medianos. Ponlos en una bandeja de horno forrada con papel de aluminio, rocíalos con aceite de oliva, sal y pimienta, y ásalos durante 20-25 minutos, o hasta que estén tiernos.

      3. Mientras tanto, pica finamente la cebolla roja y el pimiento rojo. Corta el brócoli en floretes pequeños.
      
      4. En una sartén grande, calienta el aceite de oliva a fuego medio. Añade la cebolla y el pimiento rojo y saltea durante 5 minutos, o hasta que estén tiernos.

      5. Añade el brócoli y el comino molido, y saltea durante otros 2-3 minutos, o hasta que el brócoli esté tierno pero crujiente.

      6. Agrega los garbanzos escurridos y el zumo de limón a la sartén. Calienta durante un minuto más.

      7. Para servir, divide el boniato asado entre dos cuencos. Cubre con la mezcla de garbanzos y verduras, el aguacate en rodajas y el cilantro fresco. Salpimienta al gusto.`,
    });
  }
  static spinachOmelet(): Food {
    return Food.fromPrimitives({
      id: 'spinach-omelet',
      name: 'Spinach and Feta Omelet',
      image: 'https://i.pinimg.com/564x/00/ac/53/00ac539192ca76fff7fce278c3712229.jpg',
      categories: [
        {
          id: 'omelet',
          name: 'Omelet',
          color: 'yellow',
        },
      ],
      preparationTime: 40,
      recipe: `
      1. Lavar bien las espinacas y escurrirlas.

      2. Calentar el aceite de oliva en una sartén a fuego medio.

      3. Saltear las espinacas en el aceite durante un par de minutos, hasta que se ablanden.
      
      4. Batir los huevos en un bol con sal y pimienta.

      5. Añadir las espinacas salteadas y el queso rallado a la mezcla de huevos y mezclar bien.

      6. Verter la mezcla en la sartén con el aceite caliente.

      7. Cocinar la tortilla a fuego lento durante unos 5 minutos, hasta que los huevos cuajen.

      8. Doblar la tortilla por la mitad y servir caliente.`,
    });
  }
  static vietnameseSummerRoll(): Food {
    return Food.fromPrimitives({
      id: 'vietnamese-summer-roll',
      name: 'Vietnamese Summer Roll',
      image:
        'data:image/jpeg;base64,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',
      categories: [
        {
          id: 'summer',
          name: 'Summer',
          color: 'orange',
        },
      ],
      preparationTime: 60,
      recipe: `
      1. Hidratar los fideos de arroz: Cocer los fideos de arroz según las instrucciones del paquete. Escurrir y dejar enfriar.
      
      2. Preparar el relleno: Mezclar en un bol el pollo desmenuzado, las gambas, la zanahoria, el pepino, los brotes de soja, el cilantro, la hierbabuena y la cebolla tierna. Sazonar con salsa de pescado y zumo de lima al gusto.
      
      3. Humedecer las obleas de arroz: Llenar un bol con agua tibia. Sumergir una oblea de arroz en el agua durante unos segundos hasta que esté blanda. Escurrir bien y colocar sobre una superficie plana.
      
      4. Rellenar y enrollar los rollitos: Colocar una porción del relleno en el centro inferior de la oblea de arroz. Doblar los lados de la oblea sobre el relleno y luego enrollar desde abajo hacia arriba, apretando ligeramente para que quede bien cerrado.
      
      5. Servir: Cortar los rollitos en diagonal por la mitad.`,
    });
  }
  static grapsSalad(): Food {
    return Food.fromPrimitives({
      id: 'graps-salad',
      name: 'Graps Salad',
      image: 'https://i.pinimg.com/564x/0b/43/2c/0b432ce309e04eb8fbfd228f4815bd20.jpg',
      categories: [
        {
          id: 'summer',
          name: 'Summer',
          color: 'orange',
        },
        {
          id: 'salad',
          name: 'Salad',
          color: 'green',
        },
        {
          id: 'vegetarian',
          name: 'Vegetarian',
          color: 'green',
        },
        {
          id: 'greens',
          name: 'Greens',
          color: 'green',
        },
      ],
      preparationTime: 120,
      recipe: `
      1. Lavar bien la rúcula y escurrirla.

      2. Cortar las uvas por la mitad y quitarles las semillas.

      3. Picar el queso de cabra en trozos pequeños.

      4. Tostar las nueces en una sartén sin aceite durante un par de minutos.

      5. Preparar la vinagreta mezclando el aceite de oliva, el vinagre balsámico, la miel, la sal y la pimienta.

      6. En un bol grande, mezclar la rúcula, las uvas, el queso de cabra y las nueces.

      7. Aliñar con la vinagreta y remover bien para que todos los ingredientes se impregnen.

      8. Servir inmediatamente.`,
    });
  }
}
