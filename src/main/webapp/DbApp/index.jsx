'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Great  from 'approot/DbApp/container/Greeting.js';
import  {Provider} from 'react-redux';
import {createStore} from 'redux';
import newFriend from 'approot/DbApp/reducer/hiFriend.js';

let store=createStore(newFriend)

ReactDOM.render(
    <Provider store={store}>
        <Great />
    </Provider>
    , document.getElementById("dbapp")
);
