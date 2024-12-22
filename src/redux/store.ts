import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './Saga/rootSaga';
import { mainReducer } from './Reducers/reducers';


const rootReducer = combineReducers({
    api: mainReducer,
});


const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware as any)
);


sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
