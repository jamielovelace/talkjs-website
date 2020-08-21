<template>
  <div class="c-triangle"></div>
</template>

<style>
.c-triangle {
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 75px 0 0;
  border-color: currentColor transparent transparent transparent;
}
@screen md {
  .c-triangle {
    border-width: 75px 125px 0 0;
  }
}
@screen lg {
  .c-triangle {
    border-width: 100px 150px 0 0;
  }
}
</style>
