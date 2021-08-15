# -*- coding: utf-8 -*-

{
    'name' : 'Attendance Ribbon',
    'version' : '1.0',
    'author' : 'Gallay David',
    'category' : 'Extra Tools',
    'website': 'https://www.open-net.ch',
    'license': 'AGPL-3',
    'summary': 'Show ribbon to alert when attendance is wrong',
    'description' : """
""",
    'depends' : [
        "hr_attendance",
    ],
    'data': [
        'views/web_asset_backend_template.xml',
    ],
    'qweb': [
        "static/src/xml/ribbon.xml",
    ],
    'installable': True,
    'auto_install': False,
}
