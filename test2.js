const tplobj = require('./tplobj')('${','}');
class test {
    constructor() {
        this.a = [];
        this.t = '${text}'
    }
    b;
    c;
    m() {
        console.log('foo %s', this.t);
    }
}
var t = new test();
var o = {
    text: 'bar'
}
t.m();
t = tplobj(t, o);
t.m();