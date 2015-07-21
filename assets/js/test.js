var Firebase = require('firebase');
var Rx = require('rx');

var rootRef = new Firebase("myFirebaseUrl");
var messageBusRef = rootRef.child("message-bus");

var valueObservable = Rx.Observable.create(function(observer){
	var listenerHandle = messageBusRef.on('value', function(snapshot){
		if (snapshot.val() != null) {
			observer.onNext(snapshot.val());
		}
	});
	return function(){
		messageBusRef.off('value', listenerHandle);
	};
});



