onmessage=function(ev){
    postMessage(ev.data+",子线程1数据");
};