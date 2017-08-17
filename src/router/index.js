export let routes = [{
		path: '/',
		redirect: '/form'
	},
	{
		path: '/form',
		component: resolve => require(['../components/common/index.vue'], resolve),
		children: [{
				path: '/custom',
				component: resolve => require(['../components/page/custom.vue'], resolve)
			},
			{
				path: '/form',
				component: resolve => require(['../components/page/form.vue'], resolve)
			},
			{
				path: '/table',
				component: resolve => require(['../components/page/table.vue'], resolve)
			}
		]
	}
]