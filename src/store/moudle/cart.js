export default {
    namespaced: true,
    state: {
        // 购物车列表
        cartList: [],
    },
    getters: {
        // 统计加入购物车的数量
        cartListTotal(state) {
            return state.cartList.length
        },
        // 选中商品列表
        selectedList(state) {
            return state.cartList.filter((item) => item.checked)
        },
        // 选中商品总金额
        selectedAmount(state, getters) {
            return getters.selectedList.reduce((p, c) => p + c.price * c.num, 0)
        },
    },
    mutations: {
        // 单个删除
        del(state, id) {
            // 根据id查找下标
            const idx = state.cartList.findIndex(item => item.id === id)
            // 执行删除操作
            state.cartList.splice(idx, 1)
        },
        // 批量删除
        delChoose(state) {
            state.cartList = state.cartList.filter((item) => item.checked === false)
        },
        // 修改购物车中商品的状态
        changeState(state, id) {
            // 1 根据id找下标
            const idx = state.cartList.findIndex(item => item.id === id)
            // 2 修改购物车中的商品的状态
            state.cartList[idx].checked = !state.cartList[idx].checked
        },
        chooseAll(state, val) {
            // 更改所有购物车商品的状态
            state.cartList.forEach(item => {
                item.checked = val
            })
        },
        // 加入购物车
        insertCart(state, payload) {
            // 加入购物车的字段 和后端一致
            // 插入数据的规则
            // 1 查找是否有相同的商品
            // 2 如果有相同的商品 查询数量 累加到payload上 再保存最新位置 原来的商品要删除
            // 3 如果没有相同的商品 保存到最新位置即可
            const someIndex = state.cartList.findIndex((goods) => goods.goodsId === payload.goodsId)
            if (someIndex > -1) { // 有相同的商品
                const count = state.cartList[someIndex].num
                payload.num += count
                // 删除原来的
                state.cartList.splice(someIndex, 1)
            }
            state.cartList.unshift(payload)
        }
    },
    actions: {
        // 加入购物车
        insertCart(ctx, goods) {
            return new Promise((resovle, reject) => {
                if (sessionStorage.getItem('token')) {
                    // 已登录
                    ctx.commit('insertCart', goods)
                    resovle()
                } else {
                    // 未登录
                    ctx.commit('insertCart', goods)
                    resovle()
                }
            })
        }
    }
}