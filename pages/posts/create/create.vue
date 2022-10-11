<template>
  <view class="uni-common-mt">
    <view class="uni-form-item uni-column">
      <view class="title">
        <input class="uni-input" focus placeholder="请输入标题" v-bind='title'/>
      </view>
      
      <view class="desc">
        <editor id="editor" class="ql-container" :placeholder="placeholder" @ready="onEditorReady"></editor>
        <button type="warn" @tap="undo">撤销</button>
        
      </view>
      
      <button>保存</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        placeholder: '请输入描述',
        title: '',
        desc: ''
      }
    },
    methods: {
      
    }
  }
</script>

<style>
</style>
