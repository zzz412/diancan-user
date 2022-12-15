<template>
	<view>
		<view class="my-order-view">
			<view class="my-order-name">
				<text>云南耿哥餐饮店</text>
				<text>已完成</text>
			</view>
			<view class="my-order-number">
				<view>
					<view>
						<text>桌台名称 ：</text>
						<text>001</text>
					</view>
					<view class="my-order-time">
						<text>下单时间 ：</text>
						<text>2021-10-10</text>
					</view>
				</view>
				<view class="my-order-price">¥100</view>
			</view>
		</view>

		<view style="height: 100rpx;"></view>
	</view>
</template>

<script setup>
// vue3小程序生命周期函数
import { onShareAppMessage, onLoad, onShow, onHide } from '@dcloudio/uni-app'

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
	background-color: #f4f4f4;
}
.my-order-view {
	background-color: #ffffff;
	border-radius: 10rpx;
	margin: 20rpx;
	padding: 20rpx;
}
.my-order-name {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 20rpx;
	border-bottom: 1rpx solid #e5e5e5;
}
.my-order-name text:nth-child(1) {
	font-weight: bold;
}
.my-order-number {
	padding-top: 20rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #999999;
}
.my-order-time {
	padding-top: 20rpx;
}
.my-order-price {
	color: #000000 !important;
	font-weight: bold;
}
</style>
