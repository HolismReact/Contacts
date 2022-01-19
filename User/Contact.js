import InfoIcon from '@mui/icons-material/Info';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Tabs, Tab } from '@Tab'
import { List, app, get, post } from '@List'
import { Form, Text } from '@Form'

const tabs = <>
    <Tab
        title="Info"
        icon={InfoIcon}
        panel={<div>Info</div>}
    />
    <Tab
        title="Phones"
        icon={LocalPhoneIcon}
        panel={<div>Phones</div>}
    />
    <Tab
        title="Addresses"
        icon={LocationOnIcon}
        panel={<div>Addresses</div>}
    />
</>

const Contact = () => {
    return <Tabs
        title="Contact information"
        tabs={tabs}
    />
}

export default Contact