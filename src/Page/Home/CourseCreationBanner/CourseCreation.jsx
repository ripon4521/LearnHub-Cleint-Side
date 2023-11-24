import courseCreationBanner from '../../../assets/Course Creation/image-removebg-preview (12).png';
const CourseCreation = () => {
    return (
        <div className=' bg-black p-5 mb-10 mt-24'>
            <div className='flex justify-center md:mr-60  items-center gap-10'>
            <img className='w-48 ' src={courseCreationBanner} alt="" />
            <div className='text-white'>
                <p className='md:text-xl text-sm font-inter font-semibold'>LearnHub Ai Assistant</p>
                <h2 className='md:text-4xl   font-bold drop-shadow-lg font-inter'>Course Creation With Ai-Enhanced Quality Output</h2>
                <p className='md:text-xl text-sm text-red-500 underline'>Learn More</p>
            </div>
            </div>
        </div>
    );
};

export default CourseCreation;