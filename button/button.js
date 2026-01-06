// Simple click handler for the WeWeb button snippet.
// Behavior:
// - If button has `data-action` and a global function with that name exists, call it with the button element.
// - Otherwise dispatch a `ww-button-click` CustomEvent on `document` with { action, element }.

(function(){
	function onClick(e){
		var btn = e.target.closest && e.target.closest('.ww-btn');
		if(!btn) return;
		if(btn.disabled) return;
		var action = btn.getAttribute('data-action');

		if(action && typeof window[action] === 'function'){
			try{ window[action](btn); }catch(err){ console.error('ww-btn handler error', err); }
			return;
		}

		// dispatch event for external handlers
		var ev = new CustomEvent('ww-button-click', { detail: { action: action, element: btn } });
		document.dispatchEvent(ev);
		console.log('ww-button-click', action, btn);
	}

	if(document.readyState === 'loading'){
		document.addEventListener('DOMContentLoaded', function(){ document.addEventListener('click', onClick); });
	} else {
		document.addEventListener('click', onClick);
	}
})();

