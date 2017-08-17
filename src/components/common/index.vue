<style scoped>
	.layout {
		border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
	}
	
	.layout-breadcrumb {
		padding: 10px 15px 0;
	}
	
	.layout-content {
		min-height: 600px;
		margin: 15px;
		overflow: hidden;
		background: #fff;
		border-radius: 4px;
	}
	
	.layout-content-main {
		padding: 20px 10px;
	}
	
	.layout-copy {
		text-align: center;
		padding: 10px 0 20px;
		color: #9ea7b4;
	}
	
	.layout-menu-left {
		background: #464c5b;
		/*min-width: 100px;*/
	}
	
	.layout-header {
		height: 60px;
		background: #fff;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
	}
	
	.layout-logo-left {
		width: 90%;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		margin: 15px auto;
		line-height: 30px;
		color: white;
		text-align: center;
		vertical-align: middle;
		overflow: hidden;
	}
	
	.layout-ceiling-main a {
		color: #9ba7b5;
	}
	
	.layout-hide-text .layout-text {
		display: none;
	}
	
	.ivu-col {
		transition: width .2s ease-in-out;
	}
</style>

<template>
	<!--对于绑定的东西要使用(:)-->
	<div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
		<Row type="flex">
			<i-col :span="spanLeft" class="layout-menu-left">
				<Menu :active-name="setActive" theme="dark" width="auto" @on-select="routeTo">
					<div class="layout-logo-left">
					</div>
					<Menu-item v-for = "item in menuData" :name="item.name" >
						<Icon :type="item.type" :size="iconSize"></Icon>
						<span class="layout-text">{{item.text}}</span>
					</Menu-item>
					
				</Menu>
			</i-col>
			<i-col :span="spanRight">
				<div class="layout-header">
					<i-button type="text" @click.native="toggleClick">
						<Icon type="navicon" size="32"></Icon>
					</i-button>
				</div>
				<div class="layout-breadcrumb">
					<Breadcrumb>
						<Breadcrumb-item>首页</Breadcrumb-item>
						<Breadcrumb-item>页面</Breadcrumb-item>
						<Breadcrumb-item>{{this.$route.path.replace('/','')}}</Breadcrumb-item>
					</Breadcrumb>
				</div>
				<div class="layout-content">
					<div class="layout-content-main">
						<transition mode="out-in">
							<router-view></router-view>
						</transition>
					</div>
				</div>
				<div class="layout-copy">
					2011-2016 &copy; NSLab
				</div>
			</i-col>
		</Row>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				menuData:[{
					name:"form",
					type:"document",
					text:"表单"
				},{
					name:"custom",
					type:"ios-navigate",
					text:"自定义"					
				},{
					name:"table",
					type:"navicon",
					text:"表格"
				}],
				spanLeft: 5,
				spanRight: 19,
				page: ['custom', 'form', 'table']
			}
		},
		computed: {
			iconSize() {
				return this.spanLeft === 5 ? 14 : 24;
			},
			setActive() {
				return this.$route.path.replace('/', '');
			}
		},
		methods: {
			toggleClick() {
				if(this.spanLeft === 5) {
					this.spanLeft = 2;
					this.spanRight = 22;
				} else {
					this.spanLeft = 5;
					this.spanRight = 19;
				}
			},
			routeTo(e) {
				this.$router.push(e);
			}
		}
	}
</script>