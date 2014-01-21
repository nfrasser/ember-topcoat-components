Em.run.next(function () {

	Em.Application.NAMESPACES.forEach(function (namespace) {

		var componentMatch = /^Topcoat.*Component$/;

		if (namespace !== TC && Em.Application.detect(namespace.constructor)) {

			for (var prop in TC) {
				if (componentMatch.test(prop)) {
					namespace.set(prop, TC[prop]);
				}
			}
		}

	});
});
