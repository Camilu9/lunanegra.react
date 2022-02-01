const misProductos = [
    {
        id: 1,
        nombre: "Shampoo sólido de romero",
        cantidad: "110 gr",
        precio: 700,
        descripcion: "Limpia el cabello y el cuero cabelludo sin dejar exceso de oleosidad. Para cabellos grasos.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto1.jpg'
    },
    {
        id: 2,
        nombre: "Shampoo sólido de geranio",
        cantidad: "110 gr",
        precio: 700,
        descripcion: "Limpia el cabello y el cuero cabelludo sin dejar exceso de oleosidad. Para cabellos secos.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto1.jpg'
    },
    {
        id: 3,
        nombre: "Acondicionador sólido de vainilla",
        cantidad: "50 gr",
        precio: 580,
        descripcion: "Nutre el cabello y sella las cutículas del mismo post lavado. Para cabellos débiles.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto3.jpg'
    },
    {
        id: 4,
        nombre: "Acondicionador sólido de azahar",
        cantidad: "50 gr",
        precio: 580,
        descripcion: "Nutre el cabello y sella las cutículas del mismo post lavado. Para cabellos secos.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto4.jpg'
    },
    {
        id: 5,
        nombre: "Aceite de coco",
        cantidad: "100 gr",
        precio: 400,
        descripcion: "Humectante corporal, serum para cabellos con rulos u ondulados.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto5.jpg'
    },
    {
        id: 6,
        nombre: "Gel dental",
        cantidad: "100 gr",
        precio: 530,
        descripcion: "Limpia y desinfecta la boca. Poder antibacteriano y antifúngico.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto6.jpg'
    },
    {
        id: 7,
        nombre: "Desodorante sólido",
        cantidad: "45 gr",
        precio: 470,
        descripcion: "Evita la proliferación de olores en las axilas sin obstruir los poros. Antibacteriano y antifúngico.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto7.jpg'
    },
    {
        id: 8,
        nombre: "Desodorante en crema",
        cantidad: "100 gr",
        precio: 470,
        descripcion: "Evita la proliferacion de olores en las axilas sin obstruir los poros. Antibacteriano y antifúngico.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto8.jpg'
    },
    {
        id: 9,
        nombre: "Bálsamo labial",
        cantidad: "13 gr",
        precio: 300,
        descripcion: "Humecta y repara la piel de los labios. Vainilla.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto9.jpg'
    },
    {
        id: 10,
        nombre: "Óleo corporal",
        cantidad: "35 gr",
        precio: 350,
        descripcion: "Humecta y nutre la piel del cuerpo. Trata areas resecas. Azahar.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto10.jpg'
    },
    {
        id: 11,
        nombre: "Crema para manos",
        cantidad: "100 gr",
        precio: 620,
        descripcion: "Humecta y repara la piel de las manos.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto11.jpg'
    },
    {
        id: 12,
        nombre: "Crema corporal",
        cantidad: "250 gr",
        precio: 1160,
        descripcion: "Hidrata, humecta y nutre la piel del cuerpo. Brinda protección y suavidad.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto12.jpg'
    },
    {
        id: 13,
        nombre: "Jabón facial Madagascar",
        cantidad: "30 gr",
        precio: 350,
        descripcion: "Realiza una limpieza profunda del rostro de acuerdo a sus necesidades. Pieles secas. Uso diario.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto13.jpg'
    },
    {
        id: 14,
        nombre: "Jabón facial Amazonia",
        cantidad: "30 gr",
        precio: 350,
        descripcion: "Realiza una limpieza profunda del rostro de acuerdo a sus necesidades. Pieles grasas. Uso diario.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto14.jpg'
    },
    {
        id: 15,
        nombre: "Jabón facial Malesia",
        cantidad: "30 gr",
        precio: 350,
        descripcion: "Realiza una limpieza profunda del rostro de acuerdo a sus necesidades. Pieles sensibles y maduras. Uso diario.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto15.jpg'
    },
    {
        id: "16",
        nombre: "Gel de limpieza facial",
        cantidad: "100 gr",
        precio: 530,
        descripcion: "Limpia e hidrata la piel del rostro delicadamente. Quita el maquillaje. Lavanda.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto16.jpg'
    },
    {
        id: 17,
        nombre: "Hidrolato de lavanda",
        cantidad: "100 cc",
        precio: 520,
        descripcion: "Tónico natural.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto17.jpg'
    },
    {
        id: 18,
        nombre: "Hidrolato de romero",
        cantidad: "100 cc",
        precio: 520,
        descripcion: "Tónico natural.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto18.jpg'
    },
    {
        id: 19,
        nombre: "Agua micelar de azahar y geranio",
        cantidad: "100 cc",
        precio: 470,
        descripcion: "Limpia y nutre la piel del rostro. Pieles normales a secas.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto19.jpg'
    },
    {
        id: 20,
        nombre: "Agua micelar de romero y árbol de té",
        cantidad: "100 cc",
        precio: 470,
        descripcion: "Limpia y nutre la piel del rostro. Pieles grasas.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto20.jpg'
    },
    {
        id: 21,
        nombre: "Crema facial de dia",
        cantidad: "100 gr",
        precio: 760,
        descripcion: "Hidrata, humecta y nutre el rostro acorde a sus necesidades durante el dia. Para pieles normales a secas.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto21.jpg'
    },
    {
        id: 22,
        nombre: "Crema facial de dia",
        cantidad: "100 gr",
        precio: 760,
        descripcion: "Hidrata, humecta y nutre el rostro acorde a sus necesidades durante el dia. Para pieles grasas.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto22.jpg'
    },
    {
        id: 23,
        nombre: "Crema facial de noche",
        cantidad: "100 gr",
        precio: 800,
        descripcion: "Regenerante y antioxidante. Apta para todo tipo de pieles.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto23.jpg'
    },
    {
        id: "24",
        nombre: "Protector solar",
        cantidad: "100 gr",
        precio: 760,
        descripcion: "FPS 40. Protege la piel de los rayos solares, UVA y UV. Filtro físico.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto24.jpg'
    },
    {
        id: 25,
        nombre: "Gel arce",
        cantidad: "100 gr",
        precio: 530,
        descripcion: "Humecta, calma y desinflama la piel luego del rasurado o depilado.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto25.jpg'
    },
    {
        id: 26,
        nombre: "Mascarilla facial de arcilla blanca",
        cantidad: "100 gr",
        precio: 500,
        descripcion: "Nutre la piel en profundidad, absorbe impurezas y sebo. Arcilla blanca y árbol de té.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto26.jpg'
    },
    {
        id: 27,
        nombre: "Mascarilla facial de carbón activado",
        cantidad: "100 gr",
        precio: 500,
        descripcion: "Nutre la piel en profundidad, absorbe impurezas y sebo. Carbón activado y limón",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto27.jpg'
    },
    {
        id: 28,
        nombre: "Mascarilla facial de cacao",
        cantidad: "100 gr",
        precio: 500,
        descripcion: "Nutre la piel en profundidad, absorbe impurezas y sebo. Cacao y vainilla",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto28.jpg'
    },
    {
        id: 29,
        nombre: "Discos desmaquillantes",
        cantidad: "4 unidades",
        precio: 550,
        descripcion: "Kit de 4 unidades, 2 simples y 2 dobles.",
        imgUrl: 'https://camilu9.github.io/lunaNegra/multimedia/productos/producto29.jpg'
    }
];

const promesaProductos = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(misProductos)
    }, 2000);
})

function getItems(){
    return promesaProductos;
}

export {
    getItems,
}