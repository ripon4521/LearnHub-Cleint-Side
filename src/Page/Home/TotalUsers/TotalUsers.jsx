import { FaAngellist } from "react-icons/fa";
import useUsers from "../../../Hooks/useUsers";
import useSales from "../../../Hooks/useSales";
import useCourse from "../../../Hooks/useCourse";



const TotalUsers = () => {
    const [users] = useUsers();
    const [sales] = useSales();
    const [courses] = useCourse()
  
    

  

    return (
        <div>
            <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="   text-center">
      
      <h2 className=" lg:ml-96  drop-shadow-lg font-inter  font-semibold  text-black sm:text-5xl">
         <span  className=" drop-shadow-lg flex items-center font-inter font-bold gap-1 text-4xl">Trusted by users<span className="text-4xl  "><FaAngellist /></span> <span>Learn<span className="bg-[#ffd24d] p-1 rounded  text-black">Hub</span></span></span>
      </h2>

      <p className="mt-4 font-inter drop-shadow-lg sm:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
        laborum labore provident impedit esse recusandae facere libero harum
        sequi.
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt className="order-last drop-shadow-lg font-inter text-lg font-medium text-gray-500">
            Total Users
          </dt>

          <dd className="text-4xl drop-shadow-lg text-yellow-400  font-rancho md:text-6xl">
            {users?.length}
          </dd>
        </div>

        <div
          className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt className="order-last drop-shadow-lg font-inter text-lg font-medium text-gray-500">
         Total Course
          </dt>

          <dd className="text-4xl font-rancho drop-shadow-lg text-yellow-400 md:text-6xl">{courses?.length}</dd>
        </div>

        <div
          className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt className="order-last   drop-shadow-lg font-inter text-lg font-medium text-gray-500">
            Total Sales
          </dt>

          <dd className="text-4xl text-yellow-400 font-rancho drop-shadow-lg md:text-6xl">{sales?.length}</dd>
        </div>
      </dl>
    </div>
  </div>
</section>
        </div>
    );
};

export default TotalUsers;