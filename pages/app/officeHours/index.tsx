import { useEffect, useState } from "react";
import ComponentWrapper from "../../../components/ComponentWrapper";
import { OfficeHoursTable } from "../../../components/OfficeHours/OfficeHoursTable";

const OfficeHours = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ComponentWrapper title="Office Hours" component={<OfficeHoursTable />} />
  );
};

export default OfficeHours;
