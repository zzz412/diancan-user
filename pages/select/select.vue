<template>
	<view>
		<view class="welcome">
			<text>欢迎来到</text>
			<text>云南耿哥餐饮店</text>
		</view>
		<!-- 方块 -->
		<view class="people-view">
			<view class="hello">您好，请选择就餐人数</view>
			<view class="table-num">桌号：001</view>
			<!-- 滑动 -->
			<view class="table-num table-scroll">
				<scroll-view scroll-x="true" class="scroll-view_H" :enable-flex="true">
					<view class="table-block">
						<block v-for="(item, index) in people" :key="index">
							<view>{{ item }}</view>
						</block>
					</view>
				</scroll-view>
			</view>
			<!-- 按钮 -->
			<view class="start-diancan" @click="a">开始点餐</view>
		</view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'
import { ref } from 'vue'

const people = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

const a = async () => {
	const data = await uni.getUserProfile({ desc: '补充用户信息' })
	console.log(data);
}


// 页面加载
onLoad(message => {})

// 页面显示
onShow(() => {})

// 页面隐藏
onHide(() => {})

// 页面分享(不定义该函数 页面将无法分享)
onShareAppMessage(() => {})
</script>

<style lang="scss">
page {
	background-image: url('https://6469-diancan-8gckycem626162ec-1254250118.tcb.qcloud.la/other/beijing-a.jpg?sign=72205ee6bbf76a00bec6d6aafbc5d7ce&t=1628957699');
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
}
.welcome {
	color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 270rpx;
}
.welcome text {
	display: block;
	font-size: 50rpx;
}
.welcome text:nth-child(1) {
	font-family: monospace;
	padding-bottom: 20rpx;
}
/* 方块 */
.people-view {
	background-color: #ffffff;
	position: fixed;
	left: 30rpx;
	right: 30rpx;
	bottom: 100rpx;
	height: 550rpx;
	border-radius: 15rpx;
}
.hello {
	height: 80rpx;
	font-size: 35rpx;
	font-weight: bold;
	line-height: 80rpx;
	padding-left: 20rpx;
}
.table-num {
	font-size: 30rpx;
	padding-left: 20rpx;
}
.table-scroll {
	margin-top: 100rpx;
}
.scroll-view_H {
	white-space: nowrap;
	width: 100%;
	height: 75rpx;
}
.table-block {
	display: flex;
	align-items: center;
}
.table-block view {
	height: 75rpx;
	line-height: 75rpx;
	text-align: center;
	background-color: #f7f8f9;
	margin-right: 25rpx;
	padding: 0 70rpx;
	border-radius: 15rpx;
}
/* 按钮 */
.start-diancan {
	height: 90rpx;
	line-height: 90rpx;
	background-color: #fdf4d7;
	color: #c2c2c2;
	text-align: center;
	margin: 130rpx 20rpx 0 20rpx;
	border-radius: 15rpx;
}
/* 点击后加上颜色*/
.activetext {
	background-color: #f9dd89 !important;
}
.start-activ {
	/* background-color: #f6c947 !important; */
	color: #000000 !important;
	background: linear-gradient(to right, #f8da81, #f8d771, #f7d362, #f6cb4a) !important;
}
</style>
