import { useState } from "react";
import { Button , Drawer, Space , message} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaDownload } from "react-icons/fa6";
import myCv from '../assets/Personal Resume ( CV ).pdf';
import logo from '../assets/logo.svg';

let Navbar = () => {
    const [loading, setLoading] = useState(false);
    const handleDownload = async () => {
        setLoading(true);
        downloadCV()
    };
    return (
        <nav className=" py-3 px-10 flex justify-between items-center bg-red-500">
            <a href="" className=" font-bold text-3xl text-white">
                <img src={logo} alt="$3Llogo" width={40} height={40} />
            </a>
            <ul className='flex gap-10'>
                <li className="nav-li">
                    <a href="#about" className="hover-underline-animation" >About</a>
                </li>
                <li className="nav-li">
                    <a href="#projects" className="hover-underline-animation" >Projects</a>
                </li>
                <li className="nav-li">
                    <a href="#contact" className="hover-underline-animation" >Contact</a>
                </li>
                <Button
                    type="primary"
                    shape="round"
                    icon={loading ? <LoadingOutlined/> : <FaDownload/>}
                    id="download-button"
                    onClick={handleDownload}
                >
                    {loading ? 'Downloading...' : 'Download Resume'}
                </Button>
                <div className="toggle"> <DrawerMenu/></div>
            </ul>
        </nav>
    )
}

export default Navbar;


const DrawerMenu = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const handleDownload = async () => {
        downloadCV()
    };
    return (
        <>
        <Space>
            <span onClick={showDrawer}>
                <GiHamburgerMenu className=" text-3xl text-white"/>
            </span>
        </Space>
        <Drawer
            placement='right'
            closable={false}
            onClose={onClose}
            open={open}
            width={250}
            key='right'
        >
            <ul className="drawer-menu-list">
                <li>
                    <a href="#about" >About</a>
                </li>
                <li>
                    <a href="#projects"  >Projects</a>
                </li>
                <li>
                    <a href="#contact" >Contact</a>
                </li>
                <li>
                    <Button
                        type="primary"
                        shape="round"
                        icon={loading ? <LoadingOutlined/> : <FaDownload/>}
                        className=" text-gray-800 bg-white hover:text-white cursor-pointer"
                        id="download-button"
                        onClick={handleDownload}
                    >
                        {loading ? 'Downloading...' : 'Download Resume'}
                    </Button>
                </li>
            </ul>
        </Drawer>
        </>
    );
};

const downloadCV = async () => {
    setLoading(true);
    try {
        const response = await fetch(myCv);
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
        const fileUrl = window.URL.createObjectURL(blob);

        const anchor = document.createElement('a');
        anchor.href = fileUrl;
        anchor.setAttribute('download', 'Ismaelaek CV.pdf');
        anchor.setAttribute('target', '_blank');

        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    } catch (error) {
        message.error('Failed to download PDF:', error);
    } finally {
        setLoading(false);
    }
}