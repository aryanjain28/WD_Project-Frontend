import { useEffect, useState } from "react";
import ComponentWrapper from "../../../components/ComponentWrapper";
import { TaskTypesTable } from "../../../components/TaskTypes/TaskTypesTable";

const TaskTypes = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return <ComponentWrapper title="Task Types" component={<TaskTypesTable />} />;
};

export default TaskTypes;
