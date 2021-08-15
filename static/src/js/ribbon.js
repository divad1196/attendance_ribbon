odoo.define('attendance_ribbon.ribbon', function(require) {
"use strict";

    var rpc = require('web.rpc');
    var core = require('web.core');
    var QWeb = core.qweb;

    core.bus.on('web_client_ready', null, function () {
        function show_ribbon(text) {
            $('nav.o_main_navbar').after(
                QWeb.render("HRAttendanceAlertRibbon", {text: text})
            )
        }
        function show_attendance_ribbon(data) {
            console.log(data);
            if(!data.checked_in) {
                console.log(data.checked_in);
                show_ribbon("You are currently checked out");
            } else if(data.hours_today > 12) {
                show_ribbon("You are currently checked in for " + data.hours_today + "hours. Please check your attendances");
            }
        }
        rpc.query({
            model: 'hr.employee',
            method: 'current_employee_ribbon_data',
        }).then(show_attendance_ribbon);
    });
}); // odoo.define
