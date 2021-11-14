import 'material-icons/iconfont/material-icons.css';

import './sass/main.scss';
import { searchImage } from './js/apiService';
import { createMarkup, clearGallery } from './js/helpers';
import { onError, onWarning } from './js/notification';

import refs from './js/refs';
import card from './template/card.hbs';

const onSearch = event => {
  event.preventDefault();

  clearGallery(refs.gallery);

  const userRequest = event.currentTarget.elements.query.value.trim();

  if (!userRequest) return onError();

  searchImage(userRequest).then(photos => {
    if (photos.length === 0) return onWarning();

    const options = {
      ref: refs.gallery,
      template: card,
      data: photos,
    };

    createMarkup(options);
  });

  refs.form.reset();
};

refs.form.addEventListener('submit', onSearch);
