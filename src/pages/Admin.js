import { useContext } from "react";
import { ApiContext } from "./Contexts/ApiContext.js";

import TermekekAdmin from "./Admin/TermekekAdmin.js";
import UjTermek from "./Admin/UjTermek.js";

function Admin() {
  const { apiData } = useContext(ApiContext);
  return (
    <main className="row g-5">
      <section>
        <UjTermek />
      </section>
      <article>
        {apiData ? <TermekekAdmin termekek={apiData} /> : "Nincs adat"}
      </article>
    </main>
  );
}

export default Admin;
