const columns = new Map([
    ['版本信息', [
        { property: 'name', label: '名称', },
        { property: 'version', label: '版本号', },
    ]],
    ['区间方向控制命令信息', [
        { property: 'name', label: '发车口名称', },
        { property: 'fqj', label: '发车请求(FQJ)', },
        { property: 'fsj', label: '发车锁闭(FSJ)', },
        { property: 'ffaj', label: '发车辅助按钮(FFAJ)', },
        { property: 'jfaj', label: '接车辅助按钮(JFAJ)', },
    ]],

    ['进路信息', [
        { property: 'number', label: '进路号', },
        { property: 'state', label: '信号状态', },
        { property: 'lockState', label: '区段锁闭状态', },
        { property: 'name', label: '名称', },
    ]],
    ['进站信号机红灯断丝信息', [
        { property: 'name', label: '进站信号名称', },
        { property: 'state', label: '信号状态', },
    ]],
    ['信号机调车状态信息', [
        { property: 'name', label: '信号机名称', },
        { property: 'state', label: '状态', },
    ]],
    ['无配线站信号机控制信息', [
        { property: 'name', label: '名称', },
        { property: 'state', label: '状态', },
    ]],


    ['区间方向', [
        { property: 'name', label: '发车口名称', },
        { property: 'yfj', label: '允许发车(YFJ)', },
        { property: 'qjzt', label: '区间状态(QJZT)', },
        { property: 'jqj', label: '监督区间(jqj)', },
        { property: 'fj', label: '区间方向(fj)', },
        { property: 'fj', label: '辅助灯', },
    ]],

    ['区间闭塞分区', [
        { property: 'name', label: '发车口名称', },
        { property: 'yfj', label: '允许发车(YFJ)', },
        { property: 'qjzt', label: '区间状态(QJZT)', },
        { property: 'jqj', label: '监督区间(jqj)', },
        { property: 'fj', label: '区间方向(fj)', },
        { property: 'fj', label: '辅助灯', },
    ]],
])

const tabsName = new Map([
    ['VIRINFOS', '版本信息'],
    ['QFS', '区间方向控制命令信息'],
    ['', ''],
    ['DJ', '进站信号机红灯断丝信息'],
    ['DXJ', '信号机调车状态信息'],
    ['WPXXJ', '无配线站信号机控制信息'],
    ['VIRINFOR', '版本信息'],
    ['QFR', '区间方向'],
    ['QGJ', '区间闭塞分区'],
    ['QDJ', '发车口区间防护信号机红灯断丝'],
    ['XHJJ', '信号限速'],
    ['YWJ', '异物侵害灾害'],
    ['WPXQF', '无配线站区间方向'],
    ['WPXGJ', '无配线站轨道状态'],
    ['WPXQDJ', '无配线站区间信号红灯断丝'],
    ['WPXXJ', '无配线站信号采集'],
    ['GFZT', '改方信息'],
])

export function getTableColumn(name) {
    let tabname = tabsName.get(name) || name
    if (columns.get(tabname)) {
        return columns.get(tabname)
    } else {
        return []
    }

}


export function getTabName(name) {
    if (tabsName.get(name)) {
        return tabsName.get(name)
    } else {
        return name
    }
}

