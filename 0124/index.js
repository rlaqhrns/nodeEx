function outFunction(arg1, arg2) {
    var local = 8;
    function innerfunction(innerArg) {
        console.log((arg1 + arg2) / (innerArg + local));
    }
    return innerfunction;
}
var exam = outfunction(2, 1);
alert(exam);