import { FcGoogle } from 'react-icons/fc';
import { BsGithub ,BsInstagram} from 'react-icons/bs';
import { CgFacebook } from 'react-icons/cg';
import { FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl font-semibold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle className='text-xl'></FcGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <BsGithub className='text-xl'></BsGithub>
                    Login With Github
                </button>
            </div>
            <div className='p-4  mb-6'>
                <h2 className="text-3xl font-semibold mb-4">Find Us On</h2>
                <a className="flex text-lg items-center border rounded-t-lg p-3 ">
                    <CgFacebook className='text-xl text-blue-600 mr-3'></CgFacebook>
                    Facebook
                </a>
                <a className="flex text-lg items-center border-x  p-3  ">
                    <FaTwitter className='text-xl text-sky-600 mr-3'></FaTwitter>
                    Twitter
                </a>
                <a className="flex text-lg items-center border rounded-b-lg p-3  ">
                    <BsInstagram className='text-xl text-red-400 mr-3'></BsInstagram>
                    Instagram
                </a>
            </div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl font-semibold">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />          
            </div>
            
        </div>
    );
};

export default RightSideNav;