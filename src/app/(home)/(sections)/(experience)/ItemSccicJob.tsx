import ItemJobDescription from "@src/app/(home)/(sections)/(experience)/ItemJobDescription";

export default function ItemSccicJob() {
  return (
    <div className="space-y-2">
      <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-start sm:space-x-2 sm:space-y-0">
        <h1 className="font-title-large font-semibold sm:w-min">
          Mobile&nbsp;Android Engineer
        </h1>
        <h1 className="font-title-large hidden font-semibold text-green sm:block">
          @
        </h1>
        <h1 className="font-title-large font-semibold text-green">
          Smart City and Community Innovation Center (SCCIC) - ITB
        </h1>
      </div>
      <span className="mb-2 block font-sf-mono">
        January 2021 - December 2021
      </span>
      <div className="space-y-4 p-4">
        <ItemJobDescription>
          Collaborating with other developers to transform business requirements
          of the client into real world solution mobile Android apps.
        </ItemJobDescription>
        <ItemJobDescription>
          Built and delivered technical solutions according to stakeholder
          business requirements.
        </ItemJobDescription>
      </div>
    </div>
  );
}
