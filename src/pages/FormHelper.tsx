import React from "react";
import { Banner } from "../componets/Banner";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { CircularProgress, FormControl } from "@mui/material";
import { FormService } from "../services/FormService";
import { toast } from "react-toastify";
import { TypingEffect } from "../componets/TypingEffect";



export default function FormHelper() {
  const [formType, setFormType] = React.useState<string>("");
  const [explanation, setExplanation] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent) => {
    setFormType(event.target.value);
  };

  const getHelp = () => {
    setIsLoading(true);
    new FormService().getHelp(formType)
        .then((res) => setExplanation(res.filled_form))
        .catch((error) => toast.error('An error occured'))
        .finally(() => setIsLoading(false))
  }

  return (
    <div className="mb-20">
      <Banner title="Fill application" currentPage="fill-application" />
      <div className="flex flex-row gap-6 mx-10">
        <div className="w-2/3 ">
           <FormControl className="w-full">
            <InputLabel id="demo-simple-select-helper-label">Type of form</InputLabel>
            <Select
                fullWidth
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={formType}
                label="Type of form"
                onChange={handleChange}
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={'Debt Relief Order (DRO)'}>Debt Relief Order (DRO)</MenuItem>
                <MenuItem value={'Form N349 (Application for a Third Party Debt Order)'}>
                Form N349 (Application for a Third Party Debt Order)
                </MenuItem>
                <MenuItem value={'Letter Before Action (LBA)'}>Letter Before Action (LBA)</MenuItem>
                <MenuItem value={'Debt Management Plan (DMP) Application Form'}>
                Debt Management Plan (DMP) Application Form
                </MenuItem>
                <MenuItem value={'Bankruptcy Application Form'}>Bankruptcy Application Form</MenuItem>
                <MenuItem value={'Administration Order Application Form'}>
                Administration Order Application Form
                </MenuItem>
            </Select>
            </FormControl> 
        </div>
        <input
          type="button"
          value="Help"
          onClick={getHelp}
          className=" px-5 py-1 text-base text-white transition duration-300 ease-in-out border rounded-md cursor-pointer border-primary bg-primary hover:bg-blue-dark"
        />
      </div>
      <div className="mx-10 mt-4">
        {isLoading ? <div className="flex justify-center"><CircularProgress/></div>: <TypingEffect text={explanation} speed={30} />}
      </div>
    </div>
  );
}
