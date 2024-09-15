import React from "react";

function card({ userName = "Harsha", post = "not assigned yet" }) {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:rounded-full mx-auto"
          src="https://images.pexels.com/photos/28164876/pexels-photo-28164876/free-photo-of-a-man-climbing-a-rock-face-with-a-backpack.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="sarah dayan"
          width="384"
          height="512"
        />

        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              at?
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{userName}</div>
            <div className="text-slate-700 dark:text-slate-500">{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default card;
