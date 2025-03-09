import React, { useState } from "react";
import "./portfolio.css";
import List from "./List";
import Items from "./Items";
import { projects } from "../../Data";

function Portfolio() {
  const [projectsItems, setProjectsItems] = useState(projects);

  const allNavList = [
    "all",
    new Set(projects.map((project) => project.category))
  ];
  console.log(allNavList);
  return (
    <section className="portfolio section" id="work">
      <h2 className="section__title text-cs">Portfolio</h2>
      <p className="section__subtitle">
        My <span>Cases</span>
      </p>
      <List />
      <div className="portfolio__container container grid">
        <Items projectsItems={projectsItems} />
      </div>
    </section>
  );
}

export default Portfolio;
