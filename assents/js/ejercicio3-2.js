
        let colores = '';

        
        function KeyColor(color) {
            let keyDiv = document.getElementById('key');
            keyDiv.style.backgroundColor = color;
        }

       
        document.addEventListener('keydown', function (tecla) {
            if (tecla.key === 'a') {
                colores = 'pink';
                  KeyColor(colores);
            } else if (tecla.key === 's') {
                colores = 'orange';
                KeyColor(colores);
            } else if (tecla.key === 'd') {
                colores = 'skyblue';
                KeyColor(colores);
            } else if (tecla.key === 'q') {
                NuevoDiv('purple');
            } else if (tecla.key === 'w') {
                NuevoDiv('gray');
            } else if (tecla.key === 'e') {
                NuevoDiv('brown');
            }
        });

         function NuevoDiv(color) {
            let nuevod = document.createElement('div');
            nuevod.style.width = '200px';
            nuevod.style.height = '200px';
            nuevod.style.backgroundColor = color;
            nuevod.style.border = '3px solid black';
            document.body.appendChild(nuevod);
        }


       
