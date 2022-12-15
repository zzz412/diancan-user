<script>
	export default {
		onLaunch: async function() {
			// 小程序登录
			const code = await wx.login()
			console.log(code);
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
