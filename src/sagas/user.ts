import { call, put, takeEvery } from 'redux-saga/effects';
const apiUrl = 'https://cross-platform.rp.devfactory.com/for_you';
function getApiData() {
 return fetch(apiUrl).then(response => response.json().catch(error => error));
}

function* fetchUsers(action:any) {
 try {
  const users = yield call(getApiData);
  yield put({ type: 'GET_USERS_SUCCESS', users: users });
 } catch (error:any) {
  yield put({ type: 'GET_USERS_FAILED', message: error.message });
 }
}

function* userSaga() {
 yield takeEvery('GET_ITEMS_REQUESTED', fetchUsers);
}

export default userSaga;