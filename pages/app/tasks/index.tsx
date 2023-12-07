import { useEffect, useState } from "react";
import { TaskTable } from "../../../components/Task/TaskTable";
import ComponentWrapper from "../../../components/ComponentWrapper";

const Tasks = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return <ComponentWrapper title="Tasks" component={<TaskTable />} />;
};

export default Tasks;
