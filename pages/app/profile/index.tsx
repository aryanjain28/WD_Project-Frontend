import { Box, Grid } from "@mui/material";
import ComponentWrapper from "../../../components/ComponentWrapper";
import SelectField from "../../../components/SelectField";
import TextFieldComponent from "../../../components/TextField";
import { useGetStaff, usePatchStaff } from "../../../hooks/staff.hooks";
import { useEffect, useState } from "react";
import { Button } from "../../../components/Button";

const fields = [
  {
    name: "role",
    label: "Role",
    type: "select",
    options: [
      { key: "ADMIN", value: "ADMIN" },
      { key: "STAFF_MEMBER", value: "STAFF_MEMBER" },
    ],
    disabled: true,
  },
  { name: "staffId", label: "Staff ID", disabled: true },
  { name: "name", label: "Name" },
  { name: "password", label: "Password", hide: true },
  { name: "mobile", label: "Mobile" },
  { name: "email", label: "Email" },
  { name: "address", label: "Address" },
  { name: "dob", label: "Date of Birth", type: "date" },
  {
    name: "sex",
    label: "Sex",
    type: "select",
    options: [
      { key: "male", value: "Male" },
      { key: "female", value: "Female" },
      { key: "other", value: "Other" },
    ],
  },
];

const initData = {
  staffId: 1,
  name: "admin",
  mobile: 1234567890,
  email: "admin@gmail.com",
  password: "",
  address: "",
  dob: "1998-09-15",
  sex: "male",
  role: "ADMIN",
};

const EditProfileForm = () => {
  const { data: staff = [], isLoading } = useGetStaff();
  const { mutate: update } = usePatchStaff();

  const userData = staff.find(({ staffId }: { staffId: number }) => {
    return staffId === parseInt(localStorage.getItem("user_id") as string);
  });

  const [data, setData] = useState({ ...(userData || initData) });

  console.log(data);

  useEffect(() => {
    setData(userData ? { ...userData, password: "" } : {});
  }, [staff.length]);

  return (
    data && (
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Grid
          item
          px={4}
          py={2}
          m={1}
          lg={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          border="1px solid lightgray"
          borderRadius={2}
        >
          {fields.map(
            ({
              name,
              label,
              disabled = false,
              type,
              hide = false,
              options = [],
            }: {
              name: string;
              label: string;
              disabled?: boolean;
              type?: string;
              options?: { key: string; value: string }[];
              hide?: boolean;
            }) =>
              type == "select" ? (
                <SelectField
                  field={name}
                  label={label}
                  value={data && data[name]}
                  options={options}
                  disabled={disabled}
                  sx={{ m: 1, my: 2, width: "100%" }}
                />
              ) : (
                <TextFieldComponent
                  field={name}
                  label={label}
                  value={
                    data &&
                    data[name] &&
                    (type == "date"
                      ? new Date(data[name]).toISOString().slice(0, 10)
                      : data[name])
                  }
                  handleChange={(newData: any) => {
                    console.log(newData);
                    setData({ ...data, ...newData });
                  }}
                  disabled={disabled}
                  type={type}
                  InputLabelProps={
                    type === "date" ? { shrink: true } : undefined
                  }
                  sx={{ m: 1, my: 2, width: "100%" }}
                />
              )
          )}
          <Button
            onClick={() => {
              // console.log(data);
              update({ ...data, hostId: "1" });
            }}
            label="Update"
            color="success"
            sx={{ width: "50%", my: 2 }}
            variant="contained"
          />
        </Grid>
      </Grid>
    )
  );
};

const profile = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <ComponentWrapper
      title="Update Your Details"
      component={<EditProfileForm />}
    />
  );
};

export default profile;
