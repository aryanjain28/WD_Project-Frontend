import { useEffect, useState } from "react";
import ComponentWrapper from "../../../components/ComponentWrapper";
import { MeetingTable } from "../../../components/Meeting/MeetingTable";

const Meetings = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return <ComponentWrapper title="Meetings" component={<MeetingTable />} />;
};

export default Meetings;
