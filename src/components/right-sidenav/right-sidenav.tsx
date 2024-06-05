import Button from "@mui/material/Button";
import data from "../salaries/mock-data";
import { Box, Stack, Typography } from "@mui/material";
import { SingleSalaryCard } from "./single-salary-card";

export default function RightSidenav() {
  return (
    <div className="col-span-4 hidden xl:block pb-5">
      {/* <div className="bg-white h-fit dark:bg-darkGrey-10 rounded-[16px] grid p-[24px] border-grey-20  dark:border-darkGrey-20 border"> */}
      <div className="bg-white h-fit rounded-[16px] grid p-[24px] border-grey-20 border">
        <Box>
          <div className="border-b pb-4">
            <Typography variant="h3" className="title-large-MB text-Neutral900">
              {data.length} Salaries
            </Typography>
          </div>
          <div className="flex flex-col gap-3 max-h-[70vh] overflow-auto pt-3">
            {data.map((item) => (
              <SingleSalaryCard {...item} />
            ))}
          </div>
        </Box>
      </div>
    </div>
  );
}
