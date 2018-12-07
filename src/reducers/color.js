import { handleAction } from 'redux-actions';

const defaultState = null;

export default handleAction('CHOOSE_COLOR', (_, { color }) => color, defaultState);
