import createAction from '../create-action'

export const CREATE_INFO = 'CREATE_INFO';
export const DELETE_INFO = 'DELETE_INFO'

export const pushInfo = (data) => createAction( CREATE_INFO, data);

export const deleteInfo = (data) => createAction(DELETE_INFO, data)

