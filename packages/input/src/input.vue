<template>
  <div>
    <input v-bind="$attrs" :type="type" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'AxuInput',
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput (evt) {
      this.$emit('input', evt.target.value)
      const findParent = parent => {
        while (parent) {
          if (parent.$options.name === 'AxuFormItem') {
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }
      const parent = findParent(this.$parent)
      if (parent) {
        parent.$emit('validate')
      }
    }
  }
}
</script>

<style>

</style>
