class ReportPopupModal {
  constructor(popup, buttons) {
    this.popup = popup
    this.buttons = buttons
    this.body = document.querySelector('body')
    this.details = this.popup.querySelector('.details')
    this.closeButton = this.popup.querySelector('.popup-close-js')

    this.cars = carsInfo
    this.imagesUrl = '/static/images/'

    this.buttons.forEach((button) => {
      button.addEventListener('click', this.open.bind(this))
    })

    this.popup.addEventListener('click', this.close.bind(this))
    this.closeButton.addEventListener('click', this.close.bind(this))
    window.addEventListener('hashchange', this.hashChanged.bind(this));
    
  }

  hashChanged() {
    if (location.hash.includes('#modalOpened')) return
    this.body.classList.remove('overflow_h')
    this.popup.classList.remove('open')
    setTimeout( () => {
      this.clearParams()
    }, 500);
  }
  
  open(event) {
    const car = event.target.dataset.car
    this.setParams(car)

    this.body.classList.add('overflow_h')
    this.popup.classList.add('open')
    window.location.hash = 'modalOpened'
  }

  close(event) {
    if (event.target.closest('.popup-modal__body') && !event.target.classList.contains('popup-close-js')) return
    this.body.classList.remove('overflow_h')
    this.popup.classList.remove('open')
    
    setTimeout( () => {
      this.clearParams()
    }, 500);

    console.log(location.hash)

  }

  setParams(car) {
    const selectedCar = this.cars[car]

    this.details.querySelector('.details__name').innerText = selectedCar.name
    this.details.querySelector('.details__type').innerText = selectedCar.type

    if (selectedCar.topImages) {
      const { mainImage, thumbnails } = selectedCar.topImages
      const topImage = document.createElement('img')
      topImage.setAttribute('src', `${this.imagesUrl + mainImage}`)
      this.details.querySelector('.details__image').appendChild(topImage)

      thumbnails.forEach((thumbName) => {
        let thumb = document.createElement('img')
        thumb.setAttribute('src', `${this.imagesUrl + thumbName}`)
        this.details.querySelector('.details__thumbs').appendChild(thumb)
      })
    }

    const { params } = selectedCar
    for (const key in params) {
      const paramField = this.details.querySelector(`.details__param [data-name="${key}"]`)
      paramField.innerText = params[key] || '-'
    }
  }

  clearParams() {
    this.details.querySelector('.details__name').innerHTML = ''
    this.details.querySelector('.details__type').innerHTML = ''
    this.details.querySelector('.details__image').innerHTML = ''
    this.details.querySelector('.details__thumbs').innerHTML = ''
    const paramFields = this.details.querySelectorAll('.details__param .details__params-body')
    paramFields.forEach((field) => {
      field.innerText = '-'
    })
  }
}

function verticalSlider() {
  return verticalSwiper = new Swiper(".vertical-swiper-js", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-arrow--next",
      prevEl: ".swiper-arrow--prev",
    },
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const reportModalButtons = document.querySelectorAll('.modal-btn-js'),
        reportModal = document.querySelector('.popup-modal');

  reportModal.removeAttribute('style')

  verticalSlider();

  new ReportPopupModal(reportModal, reportModalButtons)

});