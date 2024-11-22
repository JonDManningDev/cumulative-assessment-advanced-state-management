import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";
import { SalesContext } from "../contexts/SalesContext";
import { ContactsContext } from "../contexts/ContactsContext";
import { CallsContext } from "../contexts/CallsContext";

function CurrentStats() {
  const { calls } = useContext(CallsContext);
  const { contacts } = useContext(ContactsContext);
  const { tasks } = useContext(TasksContext);
  const { sales } = useContext(SalesContext);
  const completedTasks = tasks.filter((task) => task.complete).length;

  return (
    <section id="current-stats" className="container-fluid px-3">
      <div className="row my-4">
        <div className="col col-xs-12 col-sm-3 align-items-stretch">
          <aside
            style={{ height: "100%" }}
            className="p-5 bg-warning-subtle d-flex align-items-center justify-content-center"
          >
            <h2 className="text-dark text-center fs-3">
              <span className="display-5 text-warning">{contacts.length}</span>
              <br />
              Contacts
            </h2>
          </aside>
        </div>
        <div className="col col-xs-12 col-sm-3 align-items-stretch">
          <aside
            style={{ height: "100%" }}
            className="p-5 bg-primary-subtle d-flex align-items-center justify-content-center"
          >
            <h2 className="text-dark text-center fs-3">
              <span className="display-5 text-primary">{completedTasks}</span>
              <br />
              Tasks Complete
            </h2>
          </aside>
        </div>
        <div className="col col-xs-12 col-sm-3 align-items-stretch">
          <aside
            style={{ height: "100%" }}
            className="p-5 bg-danger-subtle d-flex align-items-center justify-content-center"
          >
            <h2 className="text-dark text-center fs-3">
              <span className="text-danger display-5">{sales.length}</span>
              <br />
              Sales
            </h2>
          </aside>
        </div>
        <div className="col col-xs-12 col-sm-3 align-items-stretch">
          <aside
            style={{ height: "100%" }}
            className="p-5 bg-success-subtle d-flex align-items-center justify-content-center"
          >
            <h2 className="text-dark text-center fs-3">
              <span className="text-success display-5">{calls.length}</span>
              <br />
              Calls Made
            </h2>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default CurrentStats;
