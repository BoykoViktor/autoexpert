document.addEventListener('DOMContentLoaded', () => {
  tabSlider = new Swiper(".tabs-slider-js", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".tabs-slider__arrow--next",
      prevEl: ".tabs-slider__arrow--prev",
    },
  });


  const docWrapper = document.querySelector('body'),
        popupModal = document.querySelector('.popup-modal'),
        popupButton = document.querySelectorAll('.modal-btn-js'),
        modalClose = popupModal.querySelector('.popup-modal__close'),
        details = popupModal.querySelector('.details');

  let imgUrl = 'https://raw.githubusercontent.com/BoykoViktor/carsSite/preview/static/images/';

  popupModal.removeAttribute('style')

  function openModal(docWrapper, popupModal) {
    docWrapper.classList.add('overflow_h')
    popupModal.classList.add('open')
  }

  function closeModal(docWrapper, popupModal) {
    docWrapper.classList.remove('overflow_h')
    popupModal.classList.remove('open')
  }

  popupButton.forEach(button => {
    button.addEventListener('click', function () {
      const carName = button.dataset.car,
            selectedCar = carsInfo[carName]
      details.querySelector('.details__name').innerText = selectedCar.name
      details.querySelector('.details__type').innerText = selectedCar.type

      if (selectedCar.topImages) {
        const { mainImage, thumbnails } = selectedCar.topImages
        const topImage = document.createElement('img')
        topImage.setAttribute('src', `${imgUrl+mainImage}`)
        details.querySelector('.details__image').appendChild(topImage)

        thumbnails.forEach((thumbName) => {
          let thumb = document.createElement('img')
          thumb.setAttribute('src', `${imgUrl+thumbName}`)
          details.querySelector('.details__thumbs').appendChild(thumb)
        })
      }
      

      const {params} = selectedCar
      
      for (key in params) {
        details.querySelector(`.details__param [data-name="${key}"]`).innerText = params[key]
      }

      openModal(docWrapper, popupModal)
    })
  })

  modalClose.addEventListener('click', function () {
    closeModal(docWrapper, popupModal)
    setTimeout( () => {
      details.querySelector('.details__name').innerHTML = ''
      details.querySelector('.details__type').innerHTML = ''
      details.querySelector('.details__image').innerHTML = ''
      details.querySelector('.details__thumbs').innerHTML = ''
    }, 500)
  })
});