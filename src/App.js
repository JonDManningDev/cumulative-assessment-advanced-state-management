import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import CurrentStats from "./components/CurrentStats";
import Dashboard from "./components/Dashboard/Dashboard";
import NoMatch from "./components/common/NoMatch";

import { TasksContextProvider } from "./contexts/TasksContext";
import { SalesContextProvider } from "./contexts/SalesContext";
import { ContactsContextProvider } from "./contexts/ContactsContext";
import { CallsContextProvider } from "./contexts/CallsContext";

import contactsData from "./data/contacts.json";
import tasksData from "./data/tasks.json";
import salesData from "./data/sales.json";
import callsData from "./data/calls.json";

function App() {
  return (
    <>
      <Header />
      <TasksContextProvider initialData={tasksData}>
        <ContactsContextProvider initialData={contactsData}>
          <CallsContextProvider initialData={callsData}>
            <SalesContextProvider initialData={salesData}>
              <CurrentStats />
              <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </SalesContextProvider>
          </CallsContextProvider>
        </ContactsContextProvider>
      </TasksContextProvider>
    </>
  );
}

export default App;
