<template>
	<!-- 单个商品详情 -->
	<view class="details-back">
		<view class="goods-details coup-anim">
			<view class="goods-image">
				<image src="/static/tab/gouwuche.png" mode="aspectFill"></image>
				<image src="/static/tab/guanbi.png" mode="widthFix"></image>
			</view>
			<view class="details-padd">
				<view class="details-name">土豆丝</view>
				<view class="details-Thinning">已售 10</view>
				<view class="describe">
					<view class="details-unit-price">
						<text>¥</text>
						<text>10</text>
						<text>/份</text>
					</view>
					<view class="details-quantity">
						<view><image src="/static/tab/jianhao.png"></image></view>
						<view><text>10</text></view>
						<view><image src="/static/tab/jia.png"></image></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'DishDetail',
	data() {
		return {}
	}
}
</script>

<style>
@import '/style/shadow.css'
.goods-image {
	width: 100%;
	height: 500rpx;
	position: relative;
}
.goods-image image:nth-child(1) {
	display: block;
	width: 100%;
	height: 500rpx;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
}
.goods-image image:nth-child(2) {
	display: block;
	width: 50rpx;
	height: 50rpx;
	position: absolute;
	top: 20rpx;
	right: 20rpx;
	border-radius: 50%;
}
.details-padd {
	padding: 20rpx 20rpx 0 20rpx;
}
.describe {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.details-quantity image {
	width: 50rpx;
	height: 50rpx;
	display: block;
}
.details-quantity {
	display: flex;
	align-items: center;
	width: 200rpx;
	justify-content: space-between;
}
.details-name {
	font-size: 35rpx;
	font-weight: bold;
}
.details-Thinning {
	font-size: 30rpx;
	color: #a4a4a4;
	padding: 20rpx 0;
}
.details-unit-price {
	font-size: 30rpx;
	color: #ec702d;
	display: flex;
	align-items: baseline;
}
.details-unit-price text:nth-child(2) {
	font-size: 35rpx;
}
.details-unit-price text:nth-child(3) {
	color: #999999 !important;
}
</style>
