/* eslint-disable react-refresh/only-export-components */
import { BsFillPenFill, BsFillInboxFill, BsFillTrash3Fill, BsFillExclamationOctagonFill, BsFillSendFill } from 'react-icons/bs'

import { Inbox } from '../pages/Inbox'
import { Sent } from '../pages/Sent'
import { Spam } from '../pages/Spam'
import { Trash } from '../pages/Trash'
import { Compose } from '../pages/Compose'

import { GrantPermission } from '../pages/GrantPermission'

export const REQUIRE_PERMISSIONS = {
    "/me": "h",
    "/me/compose": "w",
    "/me/sent": "h",
    "/me/spam": "h",
    "/me/trash": "h",
}

export const NAV = [
    {
        link: "",
        title: "Inbox",
        icon: <BsFillInboxFill />,
        // element: <Inbox permissions="hr"/>,
        component: Inbox,
        // permissions: "hr",
    },
    {
        link: "compose",
        title: "Compose",
        icon: <BsFillPenFill />,
        component: Compose,
        // permissions: "w",
    },
    {
        link: "sent",
        title: "Sent",
        icon: <BsFillSendFill />,
        component: Sent,
        // permissions: "hr",
    },
    {
        link: "spam",
        title: "Spam",
        icon: <BsFillExclamationOctagonFill />,
        component: Spam,
        // permissions: "hr",
    },
    {
        link: "trash",
        title: "Trash",
        icon: <BsFillTrash3Fill />,
        component: Trash,
        // permissions: "hr",
    },
    {
        link: "grant",
        component: GrantPermission,
        hidden: true,
    }
]
