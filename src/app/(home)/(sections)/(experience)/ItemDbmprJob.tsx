import ItemJobDescription from "@src/app/(home)/(sections)/(experience)/ItemJobDescription";

export default function ItemDbmprJob() {
  return (
    <div className="space-y-2">
      <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-start sm:space-x-2 sm:space-y-0">
        <h1 className="font-title-large font-semibold sm:w-min">
          Software&nbsp;Engineer
        </h1>
        <h1 className="font-title-large hidden font-semibold text-green sm:block">
          @
        </h1>
        <h1 className="font-title-large font-semibold text-green">
          Dinas Bina Marga dan Penataan Ruang Provinsi Jawa Barat
        </h1>
      </div>
      <span className="mb-2 block font-sf-mono">January 2022 - Present</span>
      <div className="space-y-4 p-4">
        <ItemJobDescription>
          Designing and developing high-quality, reliable, and user-centric web
          and mobile applications tailored to streamline work processes and
          reporting across multiple divisions, achieving a 70% improvement in
          overall operational efficiency.
        </ItemJobDescription>
        <ItemJobDescription>
          Conducting data-driven reports and visualization to support
          stakeholders in making informed business decisions.
        </ItemJobDescription>
        <ItemJobDescription>
          Collaborating with cross-functional teams to gather requirements,
          align on goals, and transform it into production realities that met
          business objectives.
        </ItemJobDescription>
        <ItemJobDescription>
          Managing servers infrastructure to ensure development-to-production
          workflows and to address technical issues promptly to minimize
          downtime.
        </ItemJobDescription>
      </div>
    </div>
  );
}
