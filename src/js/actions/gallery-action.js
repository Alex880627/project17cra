import { OPEN_GALLERY, CLOSE_GALLERY } from '../constants/constants';

const openGalleryAction = () => ({
  type: OPEN_GALLERY,
});
const closeGalleryAction = () => ({
  type: CLOSE_GALLERY,
});

export { openGalleryAction, closeGalleryAction };
