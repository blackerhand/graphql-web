<template>
  <view class="uni-content">
    <report-detail :post_detail="post_detail" v-if="Object.keys(post_detail).length > 0"></report-detail>
  </view>
</template>

<script>
  import reportDeatil from '@/components/report-detail.vue'
  import { postDetailReq } from '@/utils/reqs/post-detail-req.js'
  
  export default {
    data() {
      return {
        post_detail: {}
      }
    },
    components: {'report-detail': reportDeatil },
    methods: {
      async getPostDetail(id) {
        let req =  await postDetailReq(id)
        this.post_detail = req.data.postsDetail

        uni.setNavigationBarTitle({
          title: req.data.postsDetail.title
        })
      }
    },
    onLoad(params) {
      this.post_id = params.id
      this.getPostDetail(this.post_id)
    }
  }
</script>

<style lang="scss">
  .uni-content {
    padding: 20rpx;
  }
</style>
