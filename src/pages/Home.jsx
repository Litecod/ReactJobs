import React from "react";
import Hero from "../component/Hero";
import HomeCards from "../component/HomeCards";
import JobListin from "../component/JobListin";
import ViewAllJobs from "../component/ViewAllJobs";

const Home = () => {
  return (
    <>
      <Hero
        title="Become a React Dev"
        subTitle="Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobListin isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default Home;
