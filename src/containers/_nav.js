import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Val Main',
    to: '/vhome',
    icon: <CIcon name="cil-shield-alt" customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Users',
    to: '/vhome',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '/base',
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage Users',
        icon: 'cil-color-border',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add User',
        to: '/base/breadcrumbs',
      }
    ],
  },
]

export default _nav
