import AboutData from "@/components/AboutData";
import SocialLinks from "@/components/SocialLinks";

const About = () => {
  return (
    <div>
      <h1 className="text-2xl text-center font-bold mt-4 text-green-500">
        About Page
      </h1>
      <div className="flex ml-8 mt-10">
      
      <div className='mt-[5vh] ml-8'>
      <AboutData />
      </div>
              <div className="border-1 rounded-md w-[60%] h-[400px] ml-[10%] text-justify p-4 shadow-xl">
          <div className="text-[#f3ca20] font-semibold">
            I am a Full Stack Web Developer, Mastered In New-Age Technologies,
            where I use my knowledge of following Web Techs:
            <ol className="list-disc p-4 text-sky-500">
              <li>Typescript</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Tailwind CSS</li>
              <li>ReactJS</li>
              <li>NextJS</li>
            </ol>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default About;
