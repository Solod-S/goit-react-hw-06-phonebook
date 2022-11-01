import { toast } from 'react-toastify';
// import { notifictation } from 'constants/notification';

const success = {
  position: 'bottom-right',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
};
const warn = {
  position: 'bottom-right',
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
};

const notifictationOptions = { success, warn };

export const notify = toShown => {
  if (toShown === 'addContact') {
    return toast.success(
      ' You have added contact!',
      notifictationOptions.success
    );
  }
  if (toShown === 'dellContact') {
    return toast.warn(
      'You have dellated the contact!',
      notifictationOptions.warn
    );
  }
};
