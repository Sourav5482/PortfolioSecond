
import ChromaGrid from './ChromaGrid.jsx';

const FifthPage = () => {
     const items = [
  {
    image: "/images/prism.jpg",
    title: "Prism",
    subtitle: "Multimodal RAG System",
    handle: "@TeamAimers",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://prism-web-three.vercel.app/"
  },
  {
    image: "/images/margai.jpg    ",
    title: "Marg-AI",
    subtitle: "Public Transport System",
    handle: "@TeamAimers",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://marg-ai-web.vercel.app/"
  }
  ,
  {
    image: "/images/specialbite.jpg",
    title: "The Special Bite ",
    subtitle: "Order at Doorsteep",
    handle: "@Sourav5482",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://the-special-bite.vercel.app/"
  }
  ,
  {
    image: "/images/imggal.jpg",
    title: "Image Gallery",
    subtitle: "Image Gallery Practice",
    handle: "@Sourav5482",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://sourav5482.github.io/codealpha_image_galary/"
  }
  ,
  {
    image: "/images/bisectionmethod.jpg",
    title: "Bisection Method",
    subtitle: "Root Finder",
    handle: "@Sourav5482",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://sourav5482.github.io/Bisection-Method-Root-Finder/"
  }
  ,
  {
    image: "/images/userauth.jpg",
    title: "User Authentication",
    subtitle: "Using C",
    handle: "@Sourav5482",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Sourav5482/UserAuthenticationC"
  }
  ,
  {
    image: "/images/progresBar.jpg",
    title: "Progres Bar",
    subtitle: "Using C",
    handle: "@Sourav5482",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/Sourav5482/progressBarUsingC"
  }
  ,
  {
    image: "/images/medisetu.jpg",
    title: "MediSetu",
    subtitle: "Book your appointment",
    handle: "@Sourav5482",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://sourav5482.github.io/MediSetu/"
  }
  
];
    return (
        <div id='works' className='bg-black min-h-[100vh] w-full ' >
            <h1 className='text-[100px] text-gray-50 text-center'>SELECTED WORKS</h1>
    <div className='min-h-screen py-19' style={{ position: 'relative' }}>
  <ChromaGrid 
    items={items}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
//    
  />
</div>
 </div>
      
    );
};
export default FifthPage;