#1.下载模版
#2.缺少样式  使用npm i 依赖包下载
#3.配置vue
#4.准备数据，列表渲染

1. list : [{ id,name,done },{},{}]
2. 遍历 v-for='item in list'
3. 展示名称 : <label>{{ item.name }}</label>
4. 处理选中状态 : <input  v-model='item.done' />
5. 处理名称横线 : :class='{ completed : item.done }'

# 6. 删除任务

- 传 id
- 过滤出来不等于 当前 id 的元素即可

# 7. 添加任务

- 拿到文本框内容,组成对象,添加到数组里

# 8. 按键修饰符

> 参考链接 : https://cn.vuejs.org/v2/guide/events.html#%E6%8C%89%E9%94%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6

8.1 if(e.keyCode === 13) { }
8.2 @keyup.13 = ''
8.3 @keyup.enter=''

# 9. 修改任务 (难度)

9.1 双击-显示编辑框

- 1.  添加 editId data : { editId : -1 }
- 2.  判断 : editing : item.id == editId
- 3.  双击 : showEdit(id) { this.editId = id }

  9.2 修改任务名称 (已经做好了因为之前进行了双向数据绑定)
  9.3 隐藏编辑框 `this.editId = -1`

# 10. 底部的显示与隐藏

- 方式 1 :表达式
- 方式 2 : 函数
  问题 : 底部的显示与隐藏于数组的长度有关,与文本框修改 todoName 无关的
  但是,修改了文本框的内容,判断会重新计算,性能不好,
  原因 : 文本框内容变了, todoName 内容变了, data 中数据一旦发生了变化,当前页面中的指令和表达式会重新计算
  希望的 : 只和数组的长度变化有关的,才会重新计算
  接下来 : 学习计算属性
  vue中的computed属性   写起来是方法  但是用起来是属性
