
import route from '../route/route.js'

(function() {
	let urlStateChanged = false

	function changeUrlState(state) {
	    urlStateChanged = state
	}

	const event = () => {
	    document.querySelectorAll('a').forEach((item) => 
	        item.addEventListener('click',
	            function(evt) {
	                evt.preventDefault();

	                execute(evt)
	            }
	        )
	    )
	}

	function loadBody(pathName) {
	    document.querySelector('#app').innerHTML = route[pathName].view

	    route[pathName].callback()
	}

	function handlerUrl(evt) {
	    let pathName = '/' 
	    let url = ''

	    if (evt) {
	        pathName = evt.target.pathname
	        url = window.location.origin + window.location.pathname
	    }

	    window.location.href = `${url}#${pathName}`
	    
	    loadBody(pathName)    
	}


	function execute(evt) {
	    changeUrlState(true)
	    handlerUrl(evt)
	    event()
	}

	execute()

	window.addEventListener('popstate', function (event) {
	    if (!urlStateChanged) {
	        execute()
	    }
	    changeUrlState(false)
	});
})()