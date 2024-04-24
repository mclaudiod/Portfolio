import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";

export const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-zinc-950 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transistion-all duration-500">
          <a
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-slate-200 hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </a>
          <a
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-slate-200 hover:border-white group/link"
            target="_blank"
          >
            <EyeIcon className="h-10 w-10 text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </a>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-zinc-950 pt-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-slate-200">{description}</p>
      </div>
    </div>
  );
};
