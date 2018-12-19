function createStore(reducer){
	let state;
	let listenrs=[];
	function getState(){
		// return JSON.parse(JSON.stringify(state))
		return state
	}
	function dispatch(action){
		state=reducer(state,action)
		listenrs.forEach(l => l())
	}
	function subscribe(listenr){ //订阅
		listenrs.push(listenr)
		// return function(){
		// 	listenrs = listenrs.filter(item => item!=listenr)
		// }
	}
	dispatch({type:'@@INIT'});

	return {
		getState,
		dispatch,
		subscribe
	}
}



let initState={
	title:{
		color:'green',
		text:'qqqq'
	},
	content:{
		text:'qqq'
	}
}
let UPDATE_TITLE = 'UPDATE_TITLE'
let UPDATE_CONTENT = 'UPDATE_CONTENT'

function reducer(state=initState,action){
	switch (action.type){

		case UPDATE_TITLE:
		return {...state,title:{...state.title, color: action.color }}
		break;

		case UPDATE_CONTENT:
		return {...state,content:{...state.content, text: action.text }}
		break;

		default:
		return state
	}
}
let store = createStore(reducer)

function renderApp (state) {
		document.getElementById('title').style.color = state.title.color
		document.getElementById('title').innerHTML= state.title.text
		document.getElementById('content').innerHTML= state.content.text
}

function render(){
	renderApp(store.getState());
}
render();

store.subscribe(render)

setTimeout(function(){
	store.dispatch({type:UPDATE_TITLE,color:'red'})
	store.dispatch({type:UPDATE_CONTENT,text:'123qweasdzxc'})
	// renderApp(store.getState())
	//render()
},3000);
