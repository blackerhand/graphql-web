<template>
  <view class="sign_in">
    <view class="email">
      <input class="uni-input" v-model='username' focus placeholder="请输入邮箱" />
    </view>
    <view class="passwd">
      <input class="uni-input" v-model='passwd' focus placeholder="请输入密码" password />
    </view>
    
    <button @click="signIn">登录</button>
  </view>
</template>

<script>
  import { signInReq } from '@/utils/reqs/sign-in-req'
  
  export default {
    data() {
      return {
        'username': null,
        'passwd': null
      }
    },
    methods: {
      signIn () {
        signInReq(this.username, this.passwd)
      }
    }
  }
</script>

<style>
</style>
