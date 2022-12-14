import { getHomeSwipe, getNewsList, getTuijianList } from "@/api/home";
import { ref } from 'vue'
export function getData() {

    /*
    Promise.all 用于将多个promise实例，包装成一个新的promise实例
    var p=Promise.all([p1,p2,p3])
    只有p1 p2 p3的状态都变成fulfilled,p的状态才会变成fulfilled,此时p1 p2 p3的返回值组成一个数组,传递给p的回调函数
    只有p1 p2 p3有一个被rejected,p的状态就会变成rejected
    */


    // 1-定义轮播图数据
    const swipeList = ref([]);
    // 2-定义精选专题的数据
    const concentrationList = ref([]);
    // 3-定义人气推荐的数据
    const recommendList = ref([]);

    Promise.all([getHomeSwipe(), getNewsList(), getTuijianList()])
        .then(result => {
            swipeList.value = result[0]
            concentrationList.value = result[1]
            recommendList.value = result[2].filter((item) => item.recommendStatusStr === '推荐')
        })
    return { swipeList, concentrationList, recommendList }
}
