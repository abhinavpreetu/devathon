<template>
  <div id="app">
    <layout/>
  </div>
</template>

<script>
import layout from './components/layout';

export default {
  name: 'App',
  components: {
    layout,
  },
};
</script>

<style>
@import "sass/_base.scss";
</style>
