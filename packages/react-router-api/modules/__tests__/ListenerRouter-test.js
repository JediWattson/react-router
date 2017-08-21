import React from 'react'
import renderer from 'react-test-renderer'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import {listenerReducer} from '../reducer'
import ListenerRouter from '../ListenerRouter'

describe("build and test <ListenerRouter>", () => {
	let store

	beforeEach(() => {
		store = createStore(combineReducers({
			listenerReducer
		}))
	})
	
	it("creates a connection", () => {

	    renderer.create(
    		<Provider store={store}>
    			<ListenerRouter>
    				<div/>
    			</ListenerRouter>
    		</Provider>)

   		expect(store.getState()).toHaveProperty('listenerReducer.c')

	})
})
