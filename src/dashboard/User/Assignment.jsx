import useAssignment from "../../Hooks/useAssignment";


const Assignment = () => {
    const [assighnment] = useAssignment()
    return (
        <div>
             <div className="bg-slate-300 p-16    mt-10">
              <div className="container mx-auto flex  justify-around"> <h2 className="text-6xl font-inter font-semibold  drop-shadow-lg ">Welcome to Assignment Page</h2>
               <h3 className=" drop-shadow-lg text-3xl text-right">“Start Your Exceptional Career With Instructory <br /> The Online Teaching Marketplace And eLearning  Platform”</h3></div>
        
         
           </div>
           <div className="container mx-auto">
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-xl font-inter text-black">
      <tr>
        <th>#</th>
    
        <th>Title</th>
        <th>Description</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        assighnment.map((item, i)=>   <tr className="font-inter font-bold" key={item._id}>
            <th>{i + 1}</th>
            <td>{item.title}</td>
            <td>{item.desc}</td>
            <td>{item.date}</td>
            <td className="px-1 py-1 font-inter text-xl cursor-pointer uppercase bg-yellow-400 rounded">Check</td>
          </tr> )
      }
    
      
    </tbody>
  </table>
</div>
        </div>
     
        </div>
    );
};

export default Assignment;