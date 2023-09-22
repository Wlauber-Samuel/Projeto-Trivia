import md5 from 'crypto-js/md5';

export const GRAVATAR_REQUEST_STARTED = 'GRAVATAR_REQUEST_STARTED';
export const gravatarRequestStarted = () => ({ type: GRAVATAR_REQUEST_STARTED });

export const GRAVATAR_REQUEST = 'GRAVATAR_REQUEST';
export const gravatarRequest = (gravatar) => ({ type: GRAVATAR_REQUEST, gravatar });

export const GRAVATAR_REQUEST_FAIL = 'GRAVATAR_REQUEST_FAIL';
export const gravatarRequestFail = (error) => ({ type: GRAVATAR_REQUEST_FAIL, error });

export const EMAIL_CHANGE = 'EMAIL_CHANGE';
export const NAME_CHANGE = 'NAME_CHANGE';

export const emailChange = (email) => ({
  type: EMAIL_CHANGE,
  email,
});

export const nameChange = (completeName) => ({
  type: NAME_CHANGE,
  completeName,
});

export function fetchGravatar(gravatarEmail) {
  return async (dispatch) => {
    try {
      dispatch(gravatarRequestStarted());
      const gravatarHash = await md5(gravatarEmail).toString();
      const gravatar = `https://www.gravatar.com/avatar/${gravatarHash}`;
      dispatch(gravatarRequest(gravatar));
    } catch (erro) {
      dispatch(gravatarRequestFail());
    }
  };
}
