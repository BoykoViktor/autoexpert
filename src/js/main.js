document.addEventListener('DOMContentLoaded', () => {
  const reportModalButtons = document.querySelectorAll('.modal-btn-js'),
    reportModal = document.querySelector('.popup-modal');

  reportModal.removeAttribute('style')
  verticalSlider('.vertical-swiper-js')
  new ReportPopupModal(reportModal, reportModalButtons)
});

class ReportPopupModal {
  constructor(popup, buttons) {
    this.popup = popup
    this.buttons = buttons
    this.body = document.querySelector('body')
    this.details = this.popup.querySelector('.details')
    this.closeButton = this.popup.querySelector('.popup-close-js')
    this.form = this.popup.querySelector('form')

    this.cars = carsInfo
    this.imagesUrl = '/static/images/'

    this.buttons.forEach((button) => {
      button.addEventListener('click', this.open.bind(this))
    })

    this.popup.addEventListener('click', this.close.bind(this))
    this.closeButton.addEventListener('click', this.close.bind(this))
    window.addEventListener('hashchange', this.hashChanged.bind(this))

    this.form.addEventListener('submit', (e) => { e.preventDefault() })
  }

  hashChanged() {
    if (location.hash.includes('#modalOpened')) return
    this.body.classList.remove('overflow_h')
    this.popup.classList.remove('open')
    this.clearParams()
  }

  open(event) {
    const car = event.target.dataset.car
    this.popup.scrollTop = 0
    this.setParams(car)
    this.body.classList.add('overflow_h')
    this.popup.classList.add('open')
    window.location.hash = 'modalOpened'
  }

  close(event) {
    event.stopPropagation()
    if (event.target.closest('.popup-modal__body') && !event.target.classList.contains('popup-close-js')) return
    this.body.classList.remove('overflow_h')
    this.popup.classList.remove('open')
    this.clearParams()
    window.history.back()
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

    const { params, detailedView, conclusion } = selectedCar
    for (const key in params) {
      const paramField = this.details.querySelector(`.details__param [data-name="${key}"]`)
      paramField.innerText = params[key] || '-'
    }
    this.details.querySelector('.details__review-note').innerText = detailedView.description

    if (detailedView.slides.length) {
      const { slides } = detailedView
      console.log(slides);

      const popupSlider =
        `<div class="swipe-slider-wrapper">
        <div class="popup-slider swiper popup-slider-js">
          <div class="swiper-wrapper"></div>
          <div class="swiper-pagination"></div>
          <div class="swiper-arrows">
            <button class="swiper-arrow swiper-arrow--prev">
              <span></span>
            </button>
            <button class="swiper-arrow swiper-arrow--next">
              <span></span>
            </button>
          </div>
        </div>
      </div>`

      this.details.querySelector('.details__review-slider').innerHTML = popupSlider

      const list = slides.map(({ image, text }) => {
        return (
          `<div class="swiper-slide">
            <div class="popup-slider__item">
              <div class="popup-slider__item-image">
                <img src="${this.imagesUrl}${image}" alt="bentley">
              </div>
              <div class="popup-slider__item-note">${text}</div>
            </div>
          </div>`
        )
      });
      this.details.querySelector('.swiper-wrapper').innerHTML = list.join('')
      verticalSlider('.popup-slider-js', 1)
    }

    this.details.querySelector('.details__conclusion-title').innerText = conclusion.title
    this.details.querySelector('.details__conclusion-text').innerText = conclusion.text
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

    this.details.querySelector('.details__review-note').innerText = ''
    this.details.querySelector('.details__review-slider').innerHTML = ''
  }
}

function verticalSlider(selector, items = 3) {
  const space = items > 1 ? 30 : 0
  return verticalSwiper = new Swiper(`${selector}`, {
    slidesPerView: items,
    spaceBetween: space,
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