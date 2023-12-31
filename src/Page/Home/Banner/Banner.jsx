import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/42393650-removebg-preview.png'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import toast from 'react-hot-toast';
const Banner = () => {
    const {user}=useContext(AuthContext);
    const handleteaxhing=()=>{
        toast.error('Plase Login First')
    }
    return (
  
            <div className='flex p-4 flex-col lg:flex-row justify-center mt-5 lg:mt-20'>
            <div className='lg:mt-28'>
                <p className='font-inter text-3xl font-semibold drop-shadow-lg '>Online Teaching Maretplace & E-learning Platfrom</p>
                <h1 className='text-7xl font-inter font-bold mt-4 drop-shadow-lg'>Teach Anything, Learn Anytime</h1>
                <p className='text-xl font-inter drop-shadow-lg mt-4'>Upload your course tutorial & become an online teacher. Earn as much as you can, its FREE! Also, Browse our course categories where you can develop your skills anytime from the best professionals.</p>
                <div className='mt-5 flex gap-5'>
        {
            user ?     <Link to='/startTeaching' className='px-3 py-2 bg-gradient-to-r from-yellow-500 drop-shadow-lg font-inter font-bold text-xl rounded'>Start Teaching</Link> :     <Link onClick={handleteaxhing}  className='px-3 py-2 bg-gradient-to-r from-yellow-500 drop-shadow-lg font-inter font-bold text-xl rounded'>Start Teaching</Link>
        }
            <Link to='/allClasses' className='px-3 py-2 bg-gradient-to-r from-purple-500  drop-shadow-lg font-inter font-bold text-xl rounded '>Start Learning</Link>
        </div>
            </div>
            <img className='  lg:w-[1400px] mt-5 lg:mt-0' src={bannerImg} alt="" />
        </div>
      
    );
};

export default Banner;