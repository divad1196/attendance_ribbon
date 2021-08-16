# -*- coding: utf-8 -*-

from odoo import api, models, fields


class HREmployee(models.AbstractModel):
    _inherit = 'hr.employee.base'

    no_ribbon_alert = fields.Boolean(
        string="No Ribbon Alert",
        help="Do not display the ribbon for check in issues",
    )

    @api.model
    def current_employee_ribbon_data(self):
        employee_id = self.env.user.employee_ids
        return {
            'employee_id': employee_id,
            'employee_name': employee_id.name,
            'no_ribbon': employee_id.no_ribbon_alert,
            'checked_in': employee_id.attendance_state == 'checked_in',
            'hours_today': round(employee_id.hours_today, 2),
        }
