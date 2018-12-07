import { createAction } from 'redux-actions';

export const chooseColor = createAction('CHOOSE_COLOR', color => ({ color }));
