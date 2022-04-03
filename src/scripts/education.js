//кнопки переключения табов с инфой
export const buttonEducation = document.querySelector('.education__button-container');

// кнопка табов аспирантов
export const aspiranteButton = document.querySelector('#aspirante');

// кнопка табов магистрантов
export const magistracyButton = document.querySelector('#magistracy');

// табы
export const educationContext = document.querySelector('.education__container_unvisible');

export function handleChangeVisibleContext() {
  educationContext.classList.toggle('education__container_visible');
}

export function handleChangeEducation() {
  aspiranteButton.classList.toggle('education__button_active');
  magistracyButton.classList.toggle('education__button_active');
  handleChangeVisibleContext();
}


