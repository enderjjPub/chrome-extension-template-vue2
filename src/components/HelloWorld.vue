<template>
  <div>
    <p>{{ defaultText }}</p>
    <a-result title="Great, we have done all the operations!">
      <template #icon>
        <a-icon type="smile" theme="twoTone" />
      </template>
    </a-result>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    chrome.runtime.sendMessage({});
  },
  computed: {
    defaultText() {
      return chrome.i18n.getMessage('extName');
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
