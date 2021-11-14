import Swal from 'sweetalert2';

export const onError = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oh no!',
    text: 'Input empty!',
  });
};

export const onWarning = () => {
  Swal.fire({
    icon: 'warning',
    title: 'Oops...',
    text: 'Image not found!',
  });
};
