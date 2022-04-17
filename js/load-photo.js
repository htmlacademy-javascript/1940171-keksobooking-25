const loadAvatar = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const loadPhoto= document.querySelector('#images');
const photoPreview = document.querySelector('.ad-form__photo');
const newPhotoElement = document.createElement('img');

const FILE_TYPES = [
  'gif',
  'jpg',
  'jpeg',
  'png'
];


const uploadAvatar = () => {
  loadAvatar.addEventListener('change', () => {
    const file = loadAvatar.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      avatarPreview.src = URL.createObjectURL(file);
    }
  });
};

const uploadPhotos = () => {
  loadPhoto.addEventListener('change', () => {
    const file = loadPhoto.files[0];
    const fileName = file.name.toLowerCase();
    newPhotoElement.style.width = '200px';
    newPhotoElement.style.height = '200px';
    photoPreview.appendChild(newPhotoElement);

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      newPhotoElement.src = URL.createObjectURL(file);
    }
  });
};

uploadAvatar();

uploadPhotos();

export {uploadAvatar, uploadPhotos, newPhotoElement};
