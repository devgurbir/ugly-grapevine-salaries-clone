import { ISingleSalary } from "@/types";
import { Stack, Typography } from "@mui/material";

export function SingleSalaryCard({
  companyName,
  experience,
  jobFunction,
  salary,
}: Omit<ISingleSalary, "domain" | "stage">) {
  return (
    <Stack direction="column">
      <div className="flex items-center gap-3">
        <Typography component="h4" className="heading-medium-M">
          {companyName}
        </Typography>
        <span className="block h-1.5 w-1.5 rounded-full bg-neutral-300"></span>
        <Typography className="heading-medium-S">{experience} Yrs</Typography>
      </div>

      {/* Job Function  */}
      <Typography className="font-semibold">{jobFunction}</Typography>
      {/* Salary */}
      <Typography>{salary}</Typography>
    </Stack>
  );
}
