import { ISingleSalary } from "@/types";

function CustomSalaryTooltip({
  companyName,
  experience,
  jobFunction,
  salary,
}: Omit<ISingleSalary, "domain" | "stage">) {
  return (
    <div className="bg-white border shadow p-4 rounded">
      <h3>{companyName}</h3>
      <div className="flex flex-col gap-1.5">
        <span>Experience: {experience} yrs</span>
        <span>{jobFunction}</span>
        <span>Rs {salary}</span>
      </div>
    </div>
  );
}

export default CustomSalaryTooltip;
