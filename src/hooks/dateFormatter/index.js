
function zeroAd(n){
    return n<10?'0'+n:n
}

export function dateFm(date) {
    const nd = new Date(date);
    let year = nd.getFullYear();
    let month = zeroAd(nd.getMonth()+1);
    let day = zeroAd(nd.getDate());
    let hours = zeroAd(nd.getHours());
    let minutes = zeroAd(nd.getMinutes());
    let second = zeroAd(nd.getSeconds());
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${second}`
}