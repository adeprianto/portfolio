import ItemJobDescription from "@src/app/(home)/(sections)/(experience)/(content)/ItemJobDescription";

export default function ContentIndihealthJob() {
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
          PT. Inditek Global Medika (Indihealth)
        </h1>
      </div>
      <span className="mb-2 block font-sf-mono">
        August 2020 - December 2020
      </span>
      <ul className="space-y-4 p-4">
        <ItemJobDescription>
          Developing interactive mobile android apps to make a telemedicine
          system that can connect users with health practitioners, this
          application provides a feature to make consultations schedule with
          health practitioners via chat and video calls.
        </ItemJobDescription>
        <ItemJobDescription>
          Collaborating with other developers and the manager to solve technical
          problems and compose solutions according to stakeholder business
          requirements.
        </ItemJobDescription>
      </ul>
    </div>
  );
}
