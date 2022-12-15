<template>
	<view>
		<!-- 顶部 -->
		<view class="top-view">
			<view>10人就餐</view>
			<view class="top-view-flex">
				<image src="/static/tab/fenxiang.svg" mode="widthFix" class="top-search"></image>
				<image src="/static/tab/dingdan.svg" mode="widthFix"></image>
			</view>
		</view>
		<!-- 点餐界面 -->
		<view class="order-view">
			<view class="commodity">
				<!-- 左 -->
				<view class="order-left">
					<scroll-view scroll-y="true" class="scroll-Hei" :scroll-with-animation="true" :enhanced="true" :show-scrollbar="false">
						<view class="itemize-text">
							<text>素菜类</text>
							<text>10</text>
						</view>
					</scroll-view>
				</view>
				<!-- 右 -->
				<view class="order-right">
					<scroll-view
						scroll-y="true"
						class="scroll-Hei"
						@scrolltolower="tolower"
						:scroll-with-animation="true"
						:enhanced="true"
						:show-scrollbar="false"
						:scroll-into-view="scroll_into"
						@scroll="scroLl"
					>
						<view class="rig-height">
							<view class="classif">素菜类</view>
							<view class="classif-goods">
								<view class="goods-image"><image src="/static/tab/guanbi.png" mode="aspectFill"></image></view>
								<view class="goods-Price">
									<view class="goods-name">
										<text class="Bold">土豆丝</text>
										<text class="Thinning">已售 10</text>
									</view>
									<view class="unit-price">
										<text class="Symbol">¥</text>
										<text class="Bold">12</text>
										<text class="Thinning">/份</text>
									</view>
								</view>
								<view class="quantity">
									<view><image src="/static/tab/jianhao.png" mode="widthFix"></image></view>
									<view><text>10</text></view>
									<view><image src="/static/tab/jia.png" mode="widthFix"></image></view>
								</view>
							</view>
						</view>

						<view style="height: 400rpx;"></view>
					</scroll-view>
				</view>
			</view>
			<!-- 底部 -->
			<view class="order-bottom">
				<view class="Shopping" style="width: 115rpx;">
					<view class="Shopping-left"><image src="/static/tab/gouwuche.png" mode="widthFix"></image></view>
					<view class="Shopping-number">12</view>
				</view>
				<view class="Shopping-title">已点10份菜品</view>
				<view class="place-order"><button plain="true" open-type="getUserInfo">选好了</button></view>
			</view>
		</view>
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
.top-view {
	background: linear-gradient(to bottom, #f7d45f, #f7d562, #f8d561, #f9db76, #f9de80);
	height: 120rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20rpx;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
}
.top-view image {
	display: block;
	width: 35rpx;
	height: 35rpx;
}
.top-view-flex {
	display: flex;
	align-items: center;
}
.top-search {
	padding-right: 50rpx;
}
/* 点餐界面 */
.order-view {
	margin-top: 120rpx;
}
.commodity {
	display: flex;
	position: fixed;
	top: 120rpx;
	left: 0;
	right: 0;
}
.order-left {
	background-color: #fafafa;
	width: 150rpx;
	overflow-y: auto;
}
.itemize-text {
	font-size: 27rpx;
	padding: 30rpx 10rpx;
	display: flex;
	align-items: center;
	color: #797979;
}
.itemize-text text:nth-child(1) {
	flex: 1;
}
.itemize-text text:nth-child(2) {
	background-color: #eb5941;
	border-radius: 50%;
	font-size: 20rpx;
	color: #ffffff;
	width: 30rpx;
	height: 30rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 2rpx;
}
.scroll-Hei {
	height: 100vh;
	/* white-space: nowrap; */
}
.order-right {
	background-color: #ffffff;
	flex: 1;
	overflow-y: auto;
}
.classif {
	font-size: 27rpx;
	padding: 30rpx 20rpx;
	color: #797979;
}
/* 分类商品 */
.classif-goods {
	display: flex;
	justify-content: space-between;
	padding: 0 20rpx;
	height: 150rpx;
	font-size: 30rpx;
	margin-bottom: 45rpx;
}

.goods-image image {
	display: block;
	width: 150rpx;
	height: 150rpx;
	border-radius: 10rpx;
}
.goods-Price {
	flex: 1;
	position: relative;
	padding: 0 20rpx;
}
.goods-Price text {
	display: block;
}
.goods-name {
	display: flex;
	flex-direction: column;
	position: relative;
	top: 0;
}
.goods-name text:nth-child(1) {
	padding-bottom: 9rpx;
}
.unit-price {
	position: absolute;
	bottom: 0;
	display: flex;
	align-items: baseline;
}
.Bold {
	font-weight: bold;
}
.Symbol {
	font-size: 20rpx;
}
.Thinning {
	font-size: 25rpx;
	color: #cccccc;
}
.quantity image {
	width: 50rpx;
	height: 50rpx;
}
.quantity view {
	width: 50rpx;
	height: 50rpx;
	text-align: center;
	line-height: 50rpx;
}
.quantity {
	display: flex;
	align-items: center;
	align-self: flex-end;
	width: 200rpx;
	justify-content: space-between;
}
.order-bottom {
	background-color: #fefefe;
	height: 120rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	box-shadow: 0rpx -1.9rpx 1rpx 1rpx #f9f9f9;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20rpx;
	z-index: 9;
}
.Shopping image {
	width: 75rpx;
	height: 75rpx;
	display: block;
}
.Shopping-left {
	width: 75rpx;
	height: 75rpx;
}
.Shopping {
	display: flex;
	align-items: center;
	/* height: 120rpx; */
}
.Shopping-number {
	align-self: flex-start;
	background: #eb5941;
	color: #ffff;
	width: 40rpx;
	border-radius: 50rpx;
	text-align: center;
	font-size: 20rpx;
	/* margin-top: 15rpx; */
}
.Shopping-title {
	flex: 1;
	padding: 0 25rpx;
	color: #999999;
	/* height: 120rpx;
		line-height: 120rpx; */
}
.place-order button {
	border: none;
	background: linear-gradient(to right, #f8da81, #f8d771, #f7d362, #f6cb4a);
	width: 200rpx;
	height: 75rpx;
	line-height: 75rpx;
	border-radius: 50rpx;
	font-weight: bold;
	z-index: 9;
}
/* 点击分类列表加上背景色 */
.active {
	background-color: #ffffff;
	color: #000000 !important;
}
</style>
