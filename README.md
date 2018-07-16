# hps-javascript-qunit
[![Build Status](https://travis-ci.org/hiptest/hps-javascript-qunit.svg?branch=master)](https://travis-ci.org/hiptest/hps-javascript-qunit)

Hiptest publisher samples with Javascript/qUnit

In this repository you'll find tests generated in Javascript/qUnit format from [Hiptest](https://hiptest.com), using [Hiptest publisher](https://github.com/hiptest/hiptest-publisher).

The goals are:

 * to show how tests are exported in Javascript/qUnit.
 * to check exports work out of the box (well, with implemented actionwords)

System under test
------------------

The SUT is a (not that much) simple coffee machine. You start it, you ask for a coffee and you get it, sometimes. But most of times you have to add water or beans, empty the grounds. You have an automatic expresso machine at work or at home? So you know how it goes :-)

Update tests
-------------


To update the tests:

    hiptest-publisher -c javascript-qunit.conf --only=tests

The tests are generated in [``tests/project_test.js``](https://github.com/hiptest/hps-javascript-qunit/blob/master/tests/project_test.js)

Run tests
---------


To build the project and run the tests, use the following command:

    grunt qunit_junit qunit

The SUT implementation can be seen in [``src/coffee_machine.js``](https://github.com/hiptest/hps-javascript-qunit/blob/master/src/coffee_machine.js)

The test report is generated in ```_build/test-reports/TEST-index.xml```