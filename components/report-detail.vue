<template>
    <view class="post-detail">
      <h1 class="title">
        {{post_detail.title}}  
      </h1> 
      
      <view class="action star">
        <uni-icons :type="post_detail.isLike ? 'star-filled' : 'star'" size="30"></uni-icons>
        <text class="number">{{post_detail.likeUsersCount}}</text>
      </view>
      
      <h2>
        {{post_detail.desc}}
      </h2>
      
      <view class="clear"></view>
      
      <view class="element" v-for="(element,index) in post_detail.elements.nodes">
         <view class="order">
           {{index + 1}}
         </view>
         
         <div class="content">
           <view class="name">
             {{element.line.name}}
           </view>
           
           <view class="score">
             {{element.score}}
           </view>
           
           <view class="clear"></view>
           
           <view class="desc" v-html="element.desc">
           </view>
           
           <view class="action-bar">
             <view class="action comment">
               <uni-icons type="hand-up" size="30"></uni-icons>
               <text class="number">30</text>
             </view>
           
             <view class="action comment">
               <uni-icons type="hand-down" size="30"></uni-icons>
               <text class="number">30</text>
             </view>
             
             <view class="action comment">
               <uni-icons type="arrow-right" size="30"></uni-icons>
               <text class="number">30</text>
             </view>
           </view>
         </div>
      </view>
    </view>
</template>

<script>
  export default {
    name:"report-detail",
    data() {
      return {
        post_id: '',
      };
    },
    props: ['post_detail']
  }
</script>

<style lang="scss">
  .action {
    margin-top: 20rpx;
    display: block;
    float: left;
    width: 100rpx;
    margin-right: 20rpx;
    height: 50rpx; 
    
    .number {
      position: relative;
      top: -10rpx;
    }
  }
  
  .title {
    font-size: 36rpx;
    color: #333;
    margin-top: 10rpx;
    float: left
  }
  
  .star {
    position: relative;
    top: -10rpx;
    float: right;
  }
  
  .element {
    padding: 10rpx;
    overflow: auto;
    margin: 20rpx 0;
    
    .order {
      font-size: 30rpx;
      font-weight: 800;
      color: green;
      display: block;
      float: left;
      width: 50rpx;
      height: 50rpx;
      text-align: center;
      vertical-align: middle;
    }
    
    .content {
      float: left;
      width:600rpx;
    }
    
    .name {
      font-size: 30rpx;
      color: green;
      float: left;
    }
    
    .score {
      margin-bottom: 20rpx;
      float: right;
      font-size: 30rpx;
      color: blue;
    }
    
    .desc {
      max-height: 300rpx;
      overflow: scroll;
    }
    
    .action-bar {
      overflow: auto;
    }
  }
  
</style>
