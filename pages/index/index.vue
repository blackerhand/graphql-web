<template>
  <post-list :posts="posts"></post-list>
  
  <view class="isOver" v-if="!hasNextPage">
    已经到底啦    
  </view>
</template>

<script>
  import postList from '@/components/post-list.vue'
  import { postListReq } from '@/utils/reqs/post-list-req.js'
  
  export default {
		data() {
			return {
				title: 'Hello',
        per: 20,
        after: undefined,
        posts: [],
        hasNextPage: true
			}
		},
    components: {'post-list': postList},
    methods: {
      async getListData(callback){
        let res = await postListReq(this.after)
       
        this.posts = [...this.posts, ...res.data.postsList.nodes]
        this.after = res.data.postsList.pageInfo.endCursor
        this.hasNextPage = res.data.postsList.pageInfo.hasNextPage
      
        callback && callback()
      }
    },
		onLoad() {
      this.getListData()
		}, 
    onPullDownRefresh(){
      this.posts = []
      this.after = undefined
      this.hasNextPage = true
      this.getListData(()=>{
        uni.stopPullDownRefresh()      
      })
    },
    onReachBottom() {
      if(this.hasNextPage){
        this.getListData()
      }
    }
	}
</script>

<style>
  .isOver {
    color: #999;
    text-align: center;
    display: block;
    margin: 20px 0;
  }
  
</style>
