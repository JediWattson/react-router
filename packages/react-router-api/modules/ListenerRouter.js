import React, {Component} from 'react'
import http from 'http'
import PropTypes from 'prop-types'

import { matchPath } from 'react-router'
import { onMessage, CREATE_CONNECTION } from './actions'


class ListenerRouter extends Component {

  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.node
  }

  static contextTypes = {
    store: PropTypes.object
  }

	componentWillMount(){ 
		const { store:propsStore, history } = this.props
    this.store = propsStore || this.context.store
		const { dispatch } = this.store

		const conn = http.createServer((req, res) => {
			req.on('data', (chunk) => { dispatch(onMessage({data: chunk.toString(), url: req.url})) })

			res.writeHead(200, {'Content-Type' : 'application/json'})
			res.end()
		}).listen('4545', 'localhost')

		dispatch({type: CREATE_CONNECTION, payload: conn})
	}

	render(){
		console.log(this.store.getState())
		return(<div/>)
	}

}

export default ListenerRouter