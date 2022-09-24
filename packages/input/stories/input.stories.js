import AxuInput from '../'

export default {
  title: 'AxuInput',
  component: AxuInput
}

export const Text = () => ({
  components: { AxuInput },
  template: '<axu-input v-model="value"></axu-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { AxuInput },
  template: '<axu-input type="password" v-model="value"></axu-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})
