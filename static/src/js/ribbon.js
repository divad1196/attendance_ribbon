odoo.define('attendance_ribbon.ribbon', function(require) {
"use strict";

    var rpc = require('web.rpc');
    var core = require('web.core');
    var QWeb = core.qweb;

    var ribbon = null;
    core.bus.on('web_client_ready', null, function () {
        function show_ribbon(text) {
            if(ribbon != null)
                return;
            ribbon = $(QWeb.render("HRAttendanceAlertRibbon", {text: text}));
            $('nav.o_main_navbar').after(
                ribbon
            );
        }
        function show_attendance_ribbon(data) {
            if(!data || data.no_ribbon) {
                return;
            }

            if(!data.checked_in) {
                show_ribbon("You are currently checked out");
            } else if(data.hours_today > 12) {
                show_ribbon("You are currently checked in for " + data.hours_today + "hours. Please check your attendances");
            } else if(ribbon != null) {
                ribbon.remove();
                ribbon = null;
            }
        }
        setInterval(() => {
            rpc.query({
                model: 'hr.employee',
                method: 'current_employee_ribbon_data',
            }, {shadow: true}).then(show_attendance_ribbon);
        }, 1000);
    });
}); // odoo.define
