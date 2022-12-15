<template>
	<!-- 购物车 -->
	<view>
		<view class="details-back"></view>
		<view class="goods-details coup-anim">
			<view class="empty">
				<image src="/static/tab/qingkong.svg" mode="widthFix"></image>
				<text>清空已点</text>
			</view>
			<!-- 商品列表 -->

			<view class="goods-list">
				<view class="goods-list-image"><image src="/static/tab/gouwuche.png" mode="aspectFill"></image></view>
				<view class="goods-list-name">
					<view>土豆丝</view>
					<view class="list-text">
						<text>¥</text>
						<text>10</text>
					</view>
				</view>
				<view class="goods-quantity">
					<view><image src="/static/tab/jianhao.png" mode="widthFix"></image></view>
					<view>20</view>
					<view><image src="/static/tab/jia.png" mode="widthFix"></image></view>
				</view>
			</view>
			<view style="height: 100rpx;"></view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'ShopCart',
	data() {
		return {}
	}
}
</script>

<style>
@import '/style/shadow.css';
.empty image {
	width: 25rpx;
	height: 25rpx;
	display: block;
	padding-right: 10rpx;
}
.empty {
	font-size: 25rpx;
	color: #aaaaaa;
	height: 90rpx;
	border-bottom: 1rpx solid #f2f2f2;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin: 0 20rpx;
}
.goods-list-image image {
	display: block;
	width: 130rpx;
	height: 130rpx;
	border-radius: 10rpx;
}
.goods-quantity image {
	display: block;
	width: 50rpx;
	height: 50rpx;
}
.goods-quantity {
	display: flex;
	align-items: center;
	align-self: flex-end;
	width: 200rpx;
	justify-content: space-between;
}
.goods-list {
	display: flex;
	justify-content: space-between;
	padding: 0 20rpx;
	height: 130rpx;
	font-size: 30rpx;
	margin: 25rpx 0 45rpx 0;
}
.goods-list-name {
	flex: 1;
	position: relative;
	padding: 0 20rpx;
}
.list-text text {
	display: block;
}
.list-text {
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 0;
}
.list-text text:nth-child(1) {
	font-size: 25rpx;
	padding-right: 5rpx;
}
</style>
