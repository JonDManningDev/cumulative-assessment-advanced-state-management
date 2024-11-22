import Call from "./Call";
import NewCallForm from "./NewCallForm";
import { useContext } from "react";
import { CallsContext } from "../../../contexts/CallsContext";
import { ContactsContext } from "../../../contexts/ContactsContext";

function Calls() {
  const { contacts } = useContext(ContactsContext);
  const { calls, setCalls } = useContext(CallsContext);

  // Update single call handler
  const updateCall = (call, saleId) => {
    const index = calls.findIndex((el) => el.id === call.id);
    setCalls([
      ...calls.slice(0, index),
      { ...call, saleId },
      ...calls.slice(index + 1),
    ]);
  };

  // Create new call handler
  const createCall = (contactId) => {
    const newCall = {
      id: calls.length + 1,
      contactId,
      createdAt: Date.now(),
      saleId: null,
    };

    setCalls([...calls, newCall]);
  };

  const callElements = calls.map((call) => (
    <Call
      key={call.id}
      call={call}
      updateCall={updateCall}
    />
  ));

  return (
    <section id="calls">
      <h3 className="text-center">Calls</h3>
      {callElements}
      <NewCallForm createCall={createCall} />
    </section>
  );
}

export default Calls;