function bombilla(params) {
    if (true) {
        //var luz = 'on';
        let luz = 'on';
        console.log(luz);
    }
    console.log(luz);// ReferenceError
    luz = 'off';
    console.log(luz);
}
bombilla();