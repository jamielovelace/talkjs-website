<template>
  <div>
    <svg
      v-if="type === 1"
      width="566"
      height="123"
      viewBox="0 0 566 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="504.774" cy="61.226" r="61.226" fill="currentColor" />
      <circle cx="61.226" cy="61.226" r="61.226" fill="currentColor" />
      <circle cx="283" cy="61.226" r="61.226" fill="currentColor" />
    </svg>

    <svg
      v-if="type === 2"
      width="549"
      height="461"
      viewBox="0 0 549 461"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="390.077" height="101.42" rx="37.5892" fill="currentColor" />
      <rect
        y="126.952"
        width="317.026"
        height="78.0154"
        rx="37.5892"
        fill="currentColor"
      />
      <rect
        x="231.918"
        y="230.5"
        width="317.026"
        height="78.0154"
        rx="37.5892"
        fill="currentColor"
      />
      <rect
        x="139.719"
        y="334.048"
        width="409.226"
        height="126.952"
        rx="37.5892"
        fill="currentColor"
      />
    </svg>

    <svg
      v-if="type === 3"
      width="521"
      height="362"
      viewBox="0 0 521 362"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="521" height="289" fill="currentColor" />
      <path d="M69 289H175L69 362V289Z" fill="currentColor" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style lang="scss" scoped></style>
