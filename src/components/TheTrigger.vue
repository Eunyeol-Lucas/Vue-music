<template>
  <span ref="trigger" />
</template>

<script>
export default {
  name: "TheTrigger",
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    const options = {
      root: null,
      threshold: "0",
    };
    this.observer = new IntersectionObserver((entries) => {
      this.handleIntersect(entries[0]);
    }, options);
    this.observer.observe(this.$refs.trigger);
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  methods: {
    handleIntersect(entry) {
      if (entry.isIntersecting) {
        return this.$emit("triggerIntersected");
      }
    },
  },
};
</script>

<style></style>
