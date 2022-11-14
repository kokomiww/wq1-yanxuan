import { getProvince, getCitys } from '@/api/register'
// 获取县区数据
const getCount = async (pid) => {
    const countData = await getCitys(pid)
    // 如果countData存在,就循环所有县区的数据
    countData && countData.forEach(item => {
        areaList['county_list'][item.id] = item.name
    })
}
// 获取城市数据
const getCity = async (pid) => {
    const cityData = await getCitys(pid)
    // 如果data存在,就循环所有城市的数据
    cityData && cityData.forEach(item => {
        areaList['city_list'][item.id] = item.name
        item.id && getCount(item.id)
    })
}

// 获取省市区的数据
const getProvinceList = async () => {
    const data = await getProvince()
    // 循环获取到所有的省份数据
    data && data.forEach(item => {
        // 将数据中的id作为key值,name作为value,以键值对的形式保存到province_list对象中
        areaList['province_list'][item.id] = item.name
        // 调用获取城市数据的方法
        item.id && getCity(item.id)
    })
}
getProvinceList()