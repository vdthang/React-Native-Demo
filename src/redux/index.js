import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/index'
import createLogger from 'redux-logger';


export default function configureStore () {
  //const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })
    // const enhancer = compose(
    //   applyMiddleware(
    //     loggerMiddleware
    //   )
    // )

    const store = createStore(reducer)
  
    if (module.hot) {
      module.hot.accept(() => {
        const nextRootReducer = require('./reducers/index').default
        store.replaceReducer(nextRootReducer)
      })
    }

    return store
}