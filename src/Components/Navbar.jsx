import { useState } from "react";
import { Button } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { FaDownload } from "react-icons/fa6";
import myCv from '../assets/Personal Resume ( CV ).pdf';
import logo from '../assets/logo.svg';

let Navbar = () => {
    const [loading, setLoading] = useState(false);
    const handleDownload = async () => {
        setLoading(true);
        try {
            const response = await fetch(myCv);
            const arrayBuffer = await response.arrayBuffer();
            const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
            const fileUrl = window.URL.createObjectURL(blob);

            const anchor = document.createElement('a');
            anchor.href = fileUrl;
            anchor.setAttribute('download', 'IsmaelAekCV.pdf');
            anchor.setAttribute('target', '_blank');

            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        } catch (error) {
            console.error('Failed to download PDF:', error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <nav className=" py-3 px-10 flex justify-between items-center bg-red-500">
            <a href="" className=" font-bold text-3xl text-white">
                <img src={logo} alt="$3Llogo" width={40} height={40} />
            </a>
            <ul className='flex gap-10'>
                <li className="nav-li">
                    <a href="" className="hover-underline-animation" >About</a>
                </li>
                <li className="nav-li">
                    <a href="" className="hover-underline-animation" >Projects</a>
                </li>
                <li className="nav-li">
                    <a href="" className="hover-underline-animation" >Contact</a>
                </li>
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
            </ul>
        </nav>
    )
}

export default Navbar;