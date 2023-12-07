import { useEffect, useState } from "react";
import ComponentWrapper from "../../../components/ComponentWrapper";
import { ClientTable } from "../../../components/Client/ClientTable";

const Clients = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return null;
  }

  return <ComponentWrapper title="Clients" component={<ClientTable />} />;
};

export default Clients;
