const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-7xl px-4 pt-24 mx-auto flex flex-col justify-center w-full md:px-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
        <p className="text-xl">
          I am <strong>Agnes Omolola Oladeinde</strong>, a distinguished Data
          Analyst trained by DataCamp and ALX. With expertise in SQL, Excel, and
          Python, I seamlessly navigate the complexities of data, unveiling
          hidden narratives. My approach to data is meticulous: every data point
          offers a story, and I specialize in bringing those stories to the
          fore. Across industries, I harness data to inform strategic decisions,
          striving for precision and impact in every analysis.
        </p>

        <br />

        <p className="text-xl">
          My dedication to precision and efficiency, coupled with a
          goal-oriented mindset, empowers me to deliver impactful results and
          make a positive impact in the healthcare industry.
        </p>
      </div>
    </div>
  );
};

export default About;
