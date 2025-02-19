import '../App.css';
import Nav from '../components/Navbar';

function Interns() {
    const intern=[{
        "id": 1,
        "name": "Oliver J D",
        "Role": "Web Lead"
    }
,{
    "id": 2,
        "name": "Jacqueline Sequeira",
        "Role": "Full Stack Developer"
},
{"id": 3,
        "name": "Royson DSouza",
        "Role": "Full Stack Developer"
    },
        {
            "id": 4,
        "name": "Anusha Nayak",
        "Role": "Full Stack Developer"
        },
        {
            "id": 5,
        "name": "Vaishali",
        "Role":"Full Stack Developer"
        },
        {
            "id": 6,
        "name": "Jocelyene",
        "Role": "UI/UX intern"
        },
        {
            "id": 7,
        "name": "Tryphena",
        "Role": "Wordpress Developer"
        },
        {
            "id": 8,
        "name": "Mareena",
        "Role": "Wordpress Developer"
        }
];
const intern2=[{
    "id": 1,
    "name": "Intern1",
    "Role": "Web Lead"
}
,{
"id": 2,
    "name": "Intern2",
    "Role": "Full Stack Developer"
},
{"id": 3,
    "name": "Intern3",
    "Role": "Full Stack Developer"
},
    {
        "id": 4,
    "name": "Intern4",
    "Role": "Full Stack Developer"
    },
    {
        "id": 5,
    "name": "Intern5",
    "Role":"Full Stack Developer"
    },
    {
        "id": 6,
    "name": "Intern6",
    "Role": "UI/UX intern"
    },
    {
        "id": 7,
    "name": "Intern7",
    "Role": "Wordpress Developer"
    },
    {
        "id": 8,
    "name": "Intern8",
    "Role": "Wordpress Developer"
    }
];
  return (
    <>
      <Nav />
        <h2 className="text-5xl sm:text-9xl text-white font-bold w-full text-center opacity-70 mt-17 ">Our Team</h2>
        <div className="hidden md:block w-full  mb-[150px] top-[100px] whitespace-nowrap flex-row gap-x-3 relative">
  <div className="flex gap-3 relative mx-3">
   {intern.map((items)=>
    <div className="relative w-[200px] h-[140px] bg-transparent  p-2 flex flex-col justify-center items-center  animate-car z-7 " key={items.id}>
      <img
        src="https://imageplaceholder.net/600x400"
        alt="intern"
        className="w-[200px] h-[240px]  object-cover rounded-xl shadow-md"
      />
      <h2 className="mt-5 text-white justify-left align-left font-bold text-lg sm:text-xl">{items.name}</h2>
      <h3>{items.Role}</h3>
    </div>
    )}

    
    
  </div>
 
 
  
  
</div>
<div className="hidden md:block w-full  mb-[150px] top-[140px] whitespace-nowrap flex-row gap-x-3 relative">
  <div className="flex gap-3 relative mx-3">
   {intern2.map((items)=>
    <div className="relative w-[200px] h-[140px] bg-transparent  p-2 flex flex-col justify-center items-center  animate-carousel z-7 " key={items.id}>
      <img
        src="https://imageplaceholder.net/600x400"
        alt="intern"
        className="w-[200px] h-[240px]  object-cover rounded-xl shadow-md"
      />
      <h2 className="mt-5 text-white justify-left align-left font-bold text-lg sm:text-xl">{items.name}</h2>
      <h3>{items.Role}</h3>
    </div>
    )}

    
    
  </div>
 
 
  
  
</div>
<div className="hidden md:block w-full  mb-[150px] top-[140px] whitespace-nowrap flex-row gap-x-3 relative">
  <div className="flex gap-3 relative mx-3">
   {intern2.map((items)=>
    <div className="relative w-[200px] h-[140px] bg-transparent  p-2 flex flex-col justify-center items-center  animate-car z-7 " key={items.id}>
      <img
        src="https://imageplaceholder.net/600x400"
        alt="intern"
        className="w-[200px] h-[240px]  object-cover rounded-xl shadow-md"
      />
      <h2 className="mt-5 text-white justify-left align-left font-bold text-lg sm:text-xl">{items.name}</h2>
      <h3>{items.Role}</h3>
    </div>
    )}

    
    
  </div>
 
 
  
  
</div>
<div className="hidden md:block w-full  mb-[180px] top-[140px] whitespace-nowrap flex-row gap-x-3 relative">
  <div className="flex gap-3 relative mx-3">
   {intern2.map((items)=>
    <div className="relative w-[200px] h-[140px] bg-transparent  p-2 flex flex-col justify-center items-center  animate-carousel z-7 " key={items.id}>
      <img
        src="https://imageplaceholder.net/600x400"
        alt="intern"
        className="w-[200px] h-[240px]  object-cover rounded-xl shadow-md"
      />
      <h2 className="mt-5 text-white justify-left align-left font-bold text-lg sm:text-xl">{items.name}</h2>
      <h3>{items.Role}</h3>
    </div>
    )}

    
    
  </div>
 
 
  
  
</div>

    </>
  )
}

export default Interns