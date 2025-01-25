import ItemJobDescription from "@src/app/(home)/(sections)/(experience)/(content)/ItemJobDescription";

export default function ContentFiveCornerJob() {
  return (
    <div className="space-y-2">
      <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-start sm:space-x-2 sm:space-y-0">
        <h1 className="font-title-large font-semibold sm:w-min">
          Fullstack&nbsp;Engineer
        </h1>
        <h1 className="font-title-large hidden font-semibold text-green sm:block">
          @
        </h1>
        <h1 className="font-title-large font-semibold text-green">
          Five Corner Techno
        </h1>
      </div>
      <span className="mb-2 block font-sf-mono">January 2023 - Present</span>
      <ul className="space-y-4 p-4">
        <ItemJobDescription>
          Collaborating with designer and other developers to ensure the
          functionality of the apps yet still bring high user experience by
          paying high attention to the user friendliness.
        </ItemJobDescription>
        <ItemJobDescription>
          Developed, maintained, and shipped production code for client web apps
          using HTML, CSS, Javascript, React.JS, Next.JS for the front-side and
          using PHP, Laravel, Javascript, Node.JS for the back-side.
        </ItemJobDescription>
        <ItemJobDescription>
          Developed, maintained, and shipped high-quality of Android apps using
          primarly Dart, Flutter, Kotlin.
        </ItemJobDescription>
      </ul>
    </div>
  );
}
