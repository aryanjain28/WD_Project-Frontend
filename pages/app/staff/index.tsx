import { useEffect, useState } from "react";
import ComponentWrapper from "../../../components/ComponentWrapper";
import { StaffTable } from "../../../components/Staff/StaffTable";

const Staff = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return <ComponentWrapper title="Staff" component={<StaffTable />} />;
};

export default Staff;
