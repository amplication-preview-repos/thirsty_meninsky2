import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FormationList } from "./formation/FormationList";
import { FormationCreate } from "./formation/FormationCreate";
import { FormationEdit } from "./formation/FormationEdit";
import { FormationShow } from "./formation/FormationShow";
import { RecrueList } from "./recrue/RecrueList";
import { RecrueCreate } from "./recrue/RecrueCreate";
import { RecrueEdit } from "./recrue/RecrueEdit";
import { RecrueShow } from "./recrue/RecrueShow";
import { UtilisateurList } from "./utilisateur/UtilisateurList";
import { UtilisateurCreate } from "./utilisateur/UtilisateurCreate";
import { UtilisateurEdit } from "./utilisateur/UtilisateurEdit";
import { UtilisateurShow } from "./utilisateur/UtilisateurShow";
import { ContactParraineList } from "./contactParraine/ContactParraineList";
import { ContactParraineCreate } from "./contactParraine/ContactParraineCreate";
import { ContactParraineEdit } from "./contactParraine/ContactParraineEdit";
import { ContactParraineShow } from "./contactParraine/ContactParraineShow";
import { ParrainageList } from "./parrainage/ParrainageList";
import { ParrainageCreate } from "./parrainage/ParrainageCreate";
import { ParrainageEdit } from "./parrainage/ParrainageEdit";
import { ParrainageShow } from "./parrainage/ParrainageShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"SIRH"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Formation"
          list={FormationList}
          edit={FormationEdit}
          create={FormationCreate}
          show={FormationShow}
        />
        <Resource
          name="Recrue"
          list={RecrueList}
          edit={RecrueEdit}
          create={RecrueCreate}
          show={RecrueShow}
        />
        <Resource
          name="Utilisateur"
          list={UtilisateurList}
          edit={UtilisateurEdit}
          create={UtilisateurCreate}
          show={UtilisateurShow}
        />
        <Resource
          name="ContactParraine"
          list={ContactParraineList}
          edit={ContactParraineEdit}
          create={ContactParraineCreate}
          show={ContactParraineShow}
        />
        <Resource
          name="Parrainage"
          list={ParrainageList}
          edit={ParrainageEdit}
          create={ParrainageCreate}
          show={ParrainageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
