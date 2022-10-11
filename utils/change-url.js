export const changeUrl = (url) => {
  uni.navigateTo({ 
      url: url,
      fail: (res) => {
        uni.switchTab({url: url,})
      }
  })
}
 