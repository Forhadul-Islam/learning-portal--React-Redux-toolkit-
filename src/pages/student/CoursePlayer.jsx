import React from "react";
import Video from "../../components/course-player/Video";
import VideoList from "../../components/course-player/VideoList";

const CoursePlayer = () => {
  return (
    <>
      <section className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <Video />
            <VideoList />
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursePlayer;
