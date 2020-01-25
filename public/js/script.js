const images = document.querySelectorAll('.carousel-item img');

images.forEach(image => {
    image.addEventListener('click', event => {
        const image = new Image();
        image.onload = function() {
            const canvasPlaceholder = document.querySelector('#canvasPlaceholder');
            const canvas = document.querySelector('#canvas');

            if (!canvasPlaceholder.classList.contains('d-none')) {
                canvasPlaceholder.classList.add('d-none');
            }
            
            if (canvas.classList.contains('d-none')) {
                canvas.classList.remove('d-none');
            }
                
            canvas.width  = image.width;
            canvas.height = image.height;
        
            const context = canvas.getContext("2d");
        
            context.drawImage(image, 0, 0);
    
        };

        image.src = event.target.src
    });

});