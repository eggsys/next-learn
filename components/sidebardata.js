import * as FaIcons from 'react-icon/fa'
import * as AiIcons from 'react-icon/ai'
import * as IoIcons from 'react-icon/io'
import * as RiIcons from 'react-icon/ri'

export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icons : <AiIcons.AiFillHome />
            }
        ]
    }
]