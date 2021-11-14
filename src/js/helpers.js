export const createMarkup = ({ ref, template, data }) => {
  ref.insertAdjacentHTML('beforeend', template(data));
};

export const clearGallery = ref => {
  ref.innerHTML = '';
};
