<template>
  <ul>
    <li><router-link :to="{ name: 'dodge' }">Dodge</router-link></li>
    <li><router-link :to="{ name: 'snake' }">Snake</router-link></li>
  </ul>
</template>

<script>
export default {
  name: "Home"
};
</script>