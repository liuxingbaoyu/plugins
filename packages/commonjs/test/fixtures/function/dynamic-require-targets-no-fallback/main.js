/* eslint-disable import/no-dynamic-require, global-require */

function takeModule(withName) {
  return require(withName);
}

t.is(takeModule('./dep1.js'), 'dep');
t.throws(() => takeModule('./dep2.js'), {
  message:
    'Could not dynamically require/require.resolve "./dep2.js". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
});
