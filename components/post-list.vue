<template>
  <view>
    <uni-list>
      <uni-list-item 
        v-for="post in posts"
        :title="post.title"
        :note='post.desc'
        link :to = '"/pages/posts/detail/detail?id="+post.id'
        clickable >
      </uni-list-item>
    </uni-list>     	
  </view>
</template>

<script>
  export default {
    name:"post-list",
    props: ['posts'],
    data() {
      return {
      };
    }, 
    methods: {
    }
  }
</script>

<style>

</style>