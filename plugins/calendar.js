import Vue from vue;
import vueCal from "VuePersianDatetimePicker"
if (process.client) {
    // const cal = require('vue-typer');
    Vue.use(vueCal);
}