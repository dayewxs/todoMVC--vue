(function (window) {
	'use strict';

	// 准备vue
	const vm = new Vue({
		el: '#app',
		data: {
			list: [
				{id: 1, name: '吃饭', done: true},
				{id: 2, name: '睡觉', done: false},
				{id: 3, name: '打豆豆', done: false}
			],
			todoName: '',
			// 添加一个editId 用作双出现对应的编辑框
			editId: -1
		},
		computed: {
			isFootShow() {
				return this.list.length > 0
			}
		},
		methods: {
			// 删除数据
			isDel(id) {
				console.log(id);
				
				// 方法1 splice  根据索引index删除数据 传入index参数
				// console.log(index);
				// this.list.splice(index,1)

				// 方法2 传id 通过findIndex
				let index = this.list.findIndex(item => item.id == id)
				this.list.splice(index,1)

				// 方法3 使用filter过滤调不是id的数据
				// this.list = this.list.filter(item => item.id != id)
			},
			// 添加数据 回车键添加
			isAdd() {
				// 当输入的是空格时，禁止输入
				if (this.todoName.trim() == '') {
					return
				}

				// 获取到input框中最后一行数据的id ，让其加1 赋值给新添加的一行中的id
				// 需要注意的是 当list中没有数据时，需要给一个初始值，不然报错
				const id = this.list.length == 0 ? 1 : this.list[this.list.length - 1].id + 1
				// console.log(id);
				
				// 像文本框中添加数据
				this.list.push({
					id: id,
					name: this.todoName,
					done: false
				})
				// 清空文本框
				this.todoName = ''
			},
			// 双击显示编辑框
			isShow(id) {
				this.editId = id
			},
			// 隐藏编辑框 回车键隐藏  编辑框中的内容，使用v-model已经同步
			isHide() {
				// 使editId的值变为-1
				this.editId = -1
			},
			// 底部的显示与隐藏 
			isFootShow1() {
				return this.list.length > 0
			}
		}
	})

})(window);
