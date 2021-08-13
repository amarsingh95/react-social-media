import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './service/Reducers/index';
import ReduxThunk from 'redux-thunk';


import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react';

import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig={

key:'root',
storage,
}




const persistedReducer=persistReducer(persistConfig,rootReducer);



const store=createStore(persistedReducer, composeWithDevTools(applyMiddleware(ReduxThunk))); 


const persistor=persistStore(store);
 


ReactDOM.render(

              <BrowserRouter>
	       <Provider store={store}>

                 <PersistGate persistor={persistor}>
	              <App />

	         </PersistGate>
              </Provider>
             </BrowserRouter>
,
document.getElementById('root')
);


 




