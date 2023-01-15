(() => {
    const imgList = document.getElementById('imgList');
    const alertZoneDiv = document.getElementById('alertZone');
    const alertContentDiv = document.getElementById('alertContent');
    const imgContent = document.getElementById('imgContent');

    const imgDB = ['images/house_1.jpg',
        'images/house_2.jpg',
        'images/house_3.jpg',
        'images/house_4.jpg',
        'images/house_5.jpg',
        'images/house_6.jpg',
        'images/house_7.jpg',];

    const render = () => {
        imgDB.map((value) => {
            const image = document.createElement('img')
            image.style.width = '100px';
            image.style.height = '100px';
            image.src = value
            //image.setAttribute('src', value);
            return image;
        }).forEach((value) => {
            imgList.appendChild(value);
        });

        imgList.addEventListener('click', ev => {
            if (ev.target.tagName.toLowerCase() === 'img') {
                alertZoneDiv.classList.remove('hide');
                alertContentDiv.classList.remove('hide');
                imgContent.src = ev.target.src
            }
        });
    }

    alertZoneDiv.addEventListener('click', ev => {
        if (ev.target.tagName.toLowerCase() === 'div') {
            alertZoneDiv.classList.add('hide');
            alertContentDiv.classList.add('hide');
        }
    })
    alertContentDiv.addEventListener('click', ev => {
        if (ev.target.id === 'close') {
            alertZoneDiv.classList.add('hide');
            alertContentDiv.classList.add('hide');
        }
    })
    render();

})();