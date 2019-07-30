default: test
.PHONY: default

install_prerequisites:
	npm install
.PHONY: install_prerequisites

generate_tests:
	hiptest-publisher -c javascript-qunit.conf -t "$(SECRET_TOKEN)" --without=actionwords
.PHONY: generate_tests

test: install_prerequisites
	node_modules/node-qunit-phantomjs/bin/node-qunit-phantomjs ./tests/index.html --verbose
.PHONY: test
