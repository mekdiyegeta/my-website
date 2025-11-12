/* ------------------------------
   General Styles
--------------------------------*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: #f4f6f9;
  color: #222;
  line-height: 1.6;
}

/* ------------------------------
   Header
--------------------------------*/
.site-header {
  background: #1e293b;
  color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 10;
}

.header-inner {
  width: 90%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 0.75rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav a:hover,
.nav a.active {
  color: #38bdf8;
}

/* ------------------------------
   Page Intro
--------------------------------*/
.page-intro {
  text-align: center;
  margin: 4rem auto 2rem;
}

.page-intro h1 {
  font-size: 2.5rem;
  color: #0f172a;
  margin-bottom: 0.5rem;
}

.page-intro p {
  color: #475569;
  font-size: 1rem;
}

/* ------------------------------
   Skills Grid
--------------------------------*/
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 90%;
  max-width: 1100px;
  margin: 2rem auto 4rem;
}

.skill-card {
  background: #fff;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid transparent;
}

.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* Highlight when expanded */
.skill-card.expanded {
  border-color: #38bdf8;
  box-shadow: 0 12px 25px rgba(56, 189, 248, 0.3);
}

/* Skill Card Titles and Text */
.skill-card h4 {
  font-size: 1.2rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.skill-card p {
  color: #475569;
  font-size: 0.95rem;
}

/* Hidden extra info */
.more-info {
  margin-top: 1rem;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s ease;
}

/* Show extra info when expanded */
.skill-card.expanded .more-info {
  max-height: 300px; /* adjust for more content */
  opacity: 1;
}

/* ------------------------------
   Footer
--------------------------------*/
.site-footer {
  background: #1e293b;
  color: #cbd5e1;
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
}

.site-footer span {
  color: #38bdf8;
}

/* ------------------------------
   Responsive Design
--------------------------------*/
@media (max-width: 768px) {
  .header-inner {
    flex-direction: column;
    text-align: center;
  }

  .nav {
    margin-top: 0.75rem;
  }

  .page-intro h1 {
    font-size: 2rem;
  }

  .skill-card {
    padding: 1.2rem;
  }
}
