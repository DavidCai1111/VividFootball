test:
	./node_modules/.bin/mocha test/*

cov test-cov:
	./node_modules/.bin/istanbul cover _mocha test/*

.PHONY: test cov test-cov