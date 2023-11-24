import img1 from '../../../assets/Collabration/WordPress-logotype-wmark-removebg-preview.png';
import img2 from '../../../assets/Collabration/image-removebg-preview (9).png';
import img3 from '../../../assets/Collabration/image-removebg-preview (8).png';
import img4 from '../../../assets/Collabration/image-removebg-preview (7).png';
import img5 from '../../../assets/Collabration/image-removebg-preview (6).png';
import img6 from '../../../assets/Collabration/image-removebg-preview (5).png';
import img7 from '../../../assets/Collabration/image-removebg-preview (11).png';
import img8 from '../../../assets/Collabration/image-removebg-preview (10).png';
const Collabration = () => {
    return (
        <div className='bg-slate-200  mb-4 p-20'>
            <h3 className='text-center text-slate-500 text-3xl'>Trusted by over 15,000 companies and millions of learners around the world</h3>
            <div className='flex mt-10 justify-center items-center gap-28 '>
            <img className='w-[100px]' src={img1} alt="" />
            <img className='w-[100px]' src={img2} alt="" />
            <img className='w-[100px]' src={img3} alt="" />
            <img className='w-[100px]' src={img4} alt="" />
            <img className='w-[100px]' src={img5} alt="" />
            <img className='w-[100px]' src={img6} alt="" />
            <img className='w-[100px]' src={img7} alt="" />
            <img className='w-[100px]' src={img8} alt="" />
        </div>
        </div>
    );
};

export default Collabration;