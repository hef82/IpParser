var IpParser=require('./ipparser.js');


var test = function(){
    var ip = 16779263;
    var d = IpParser.getIpInfo(ip);
    console.log('ip info for:%s - %s',ip, JSON.stringify(d));
}
// IpParser.init('resources/ips.dat', test);
IpParser.init('/tmp/ip.txt', test);

var loop = function(){
    setTimeout(loop, 1000);
}
loop();
