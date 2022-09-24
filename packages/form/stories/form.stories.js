import AxuForm from '../'
import AxuFormItem from '../../formitem'
import AxuInput from '../../input'
import AxuButton from '../../button'

export default {
  title: 'AxuForm',
  component: AxuForm
}

export const Login = () => ({
  components: { AxuForm, AxuFormItem, AxuInput, AxuButton },
  template: `
    <axu-form class="form" ref="form" :model="user" :rules="rules">
      <axu-form-item label="用户名" prop="username">
        <!-- <axu-input v-model="user.username"></axu-input> -->
        <axu-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></axu-input>
      </axu-form-item>
      <axu-form-item label="密码" prop="password">
        <axu-input type="password" v-model="user.password"></axu-input>
      </axu-form-item>
      <axu-form-item>
        <axu-button type="primary" @click="login">登 录</axu-button>
      </axu-form-item>
    </axu-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})
