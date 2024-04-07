const columns = new Map([
    ['VIRINFOS', [
        { property: 'name', label: '名称', },
        { property: 'version', label: '版本号', },
    ]],
    ['QFS', [
        { property: 'departName', label: '发车口名称', },
        { property: 'fqj', label: '发车请求(FQJ)', },
        { property: 'fsj', label: '发车锁闭(FSJ)', },
        { property: 'ffaj', label: '发车辅助按钮(FFAJ)', },
        { property: 'jfaj', label: '接车辅助按钮(JFAJ)', },
    ]],

    ['JL', [
        { property: 'number', label: '进路号', },
        { property: 'state', label: '信号状态', },
        { property: 'lockState', label: '区段锁闭状态', },
        { property: 'name', label: '名称', },
    ]],
    ['DJ', [
        { property: 'name', label: '进站信号名称', },
        { property: 'state', label: '信号状态', },
    ]],
    ['DXJ', [
        { property: 'name', label: '信号机名称', },
        { property: 'state', label: '状态', },
    ]],
    ['WPXXJS', [
        { property: 'name', label: '名称', },
        { property: 'state', label: '状态', },
    ]],


    ['VIRINFOR', [
        { property: 'name', label: '名称', },
        { property: 'version', label: '版本号', },
    ]],
    ['QFR', [
        { property: 'name', label: '发车口名称', },
        { property: 'yfj', label: '允许发车(YFJ)', },
        { property: 'qjzt', label: '区间状态(QJZT)', },
        { property: 'jqj', label: '监督区间(jqj)', },
        { property: 'fj', label: '区间方向(fj)', },
        { property: 'fj', label: '辅助灯', },
    ]],

    ['QGJ', [
        { property: 'name', label: '名称', },
        { property: 'state', label: '状态', },
    ]],
    ['QDJ', [
        { property: 'name', label: '名称', },
        { property: 'xhj1', label: '信号机1', },
        { property: 'xhj2', label: '信号机2', },
        { property: 'xhj3', label: '信号机3', },
        { property: 'xhj4', label: '信号机4', },
    ]],

    ['XHJJ', [
        { property: 'name', label: '名称', },
        { property: 'sign', label: '限速标志', },
    ]],

    ['YWJ', [
        { property: 'name', label: '名称', },
        { property: 'state', label: '状态', },
    ]],

    ['WPXQF', [
        { property: 'name', label: '名称', },
        { property: 'bol', label: '允许发出(YFJ)', },
        { property: 'state', label: '区间状态(QJZT)', },
    ]],

    ['WPXGJ', [
        { property: 'name', label: '名称', },
        { property: 'state', label: '状态', },
    ]],

    ['WPXQDJ', [
        { property: 'name', label: '名称', },
        { property: 'xhj1', label: '信号机1', },
        { property: 'xhj2', label: '信号机2', },
        { property: 'xhj3', label: '信号机3', },
        { property: 'xhj4', label: '信号机4', },
    ]],

    ['WPXXJR', [
        { property: 'name', label: '名称', },
        { property: 'state', label: '状态', },
    ]],

    ['GFZT', [
        { property: 'name', label: '名称', },
        { property: 'state', label: '改方状态', },
    ]],

    
    ['RBC进路信息', [
        { property: 'oid', label: '0ID', },
        { property: 'said', label: 'SAID', },
        { property: 'type', label: '进路类型', },
        { property: 'jlState', label: '进路状态', },
        { property: 'jjState', label: '降级状态', },
        { property: 'name', label: '名称', },
    ]],
    
    ['RBC紧急区', [
        { property: 'name', label: '紧急区名称', },
        { property: 'oid', label: '0ID', },
        { property: 'state', label: '状态', },
    ]],


    ['发送信息', [
        { property: 'name', label: '名称', },
        { property: 'state', label: '状态', },
    ]],
    ['发送数据', [
        { property: 'data', label: '数据', },
    ]],
    ['接收信息', [
        { property: 'name', label: '名称', },
        { property: 'state', label: '状态', },
    ]],
    ['接收数据', [
        { property: 'data', label: '数据', },
    ]],


])

const tabsName = new Map([
    ['VIRINFOS', '版本信息'],
    ['QFS', '区间方向控制命令信息'],
    ['JL', '进路信息'],
    ['DJ', '进站信号机红灯断丝信息'],
    ['DXJ', '信号机调车状态信息'],
    ['WPXXJS', '无配线站信号机控制信息'],
    ['VIRINFOR', '版本信息'],
    ['QFR', '区间方向'],
    ['QGJ', '区间闭塞分区'],
    ['QDJ', '发车口区间防护信号机红灯断丝'],
    ['XHJJ', '信号限速'],
    ['YWJ', '异物侵害灾害'],
    ['WPXQF', '无配线站区间方向'],
    ['WPXGJ', '无配线站轨道状态'],
    ['WPXQDJ', '无配线站区间信号机红灯断丝'],
    ['WPXXJR', '无配线站信号采集'],
    ['GFZT', '改方信息'],
])

export function getTableColumn(name) {
    if (columns.get(name)) {
        return columns.get(name)
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

