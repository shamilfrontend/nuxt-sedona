<template>
  <el-card shadow="always" class="login-card">
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <h1>Авторизация</h1>

      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>

      <el-form-item label="Пароль" prop="password">
        <el-input v-model.trim="controls.password" type="password" />
      </el-form-item>

      <el-form-item class="mt-3">
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="isLoading"
          >Войти</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'ListPage',

  layout: 'empty',

  data() {
    const minLengthPassword = 6

    return {
      isLoading: false,
      controls: {
        login: '',
        password: ''
      },
      rules: {
        login: {
          required: true,
          message: 'Введите логин',
          trigger: 'blur'
        },
        password: [
          {
            required: true,
            message: 'Введите пароль',
            trigger: 'blur'
          },
          {
            min: minLengthPassword,
            message: `Пароль должен быть не менее ${minLengthPassword} символов`,
            trigger: 'blur'
          }
        ]
      }
    }
  },

  mounted() {
    const { message } = this.$route.query

    let text = ''

    switch (message) {
      case 'login':
        text = 'Для начала войдите в систему'
        break
      case 'logout':
        text = 'Вы вышли из системы'
        break
      default:
        text = ''
    }

    if (text) {
      this.$message.info(text)
    }
  },

  methods: {
    onSubmit() {
      this.$refs.form.validate(async (isValid) => {
        if (!isValid) return

        this.isLoading = true

        try {
          const formData = {
            login: this.controls.login,
            password: this.controls.password
          }
          console.log('formData', formData)
          await this.$store.dispatch('auth/login', formData)
          this.$router.push('/admin')
        } catch (e) {
          this.isLoading = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-card {
  width: 500px;
}

.mt-3 {
  margin-top: 3rem;
}
</style>
