import {ArrowUpRight, GraduationCap} from 'lucide-react';

export default function ScholarshipProject() {
  return (
    <article className="project featured-project scholarship-project" id="scholarpath">
      <div className="project-overview">
        <p className="eyebrow">02 / FULL STACK PROJECT</p>
        <GraduationCap size={48} strokeWidth={1}/>
        <h3>ScholarPath<span>.</span></h3>
        <p>A student scholarship eligibility application that makes funding requirements easier to understand.</p>
        <div className="tags">Python / FastAPI / PostgreSQL / JavaScript</div>
        <div className="project-links">
          <a className="primary" href="https://scholarpath-jdx5.onrender.com" target="_blank" rel="noreferrer">Open live demo <ArrowUpRight size={18}/></a>
          <a className="text-link" href="https://github.com/Codewithpraveenk/scholarship-eligibility-prediction" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={16}/></a>
        </div>
      </div>
      <div className="project-story">
        <h4>The problem</h4>
        <p>Scholarship requirements can be difficult to compare across providers. Students need a clear way to understand which listed criteria they meet and what to check before applying.</p>
        <h4>My approach</h4>
        <p>I built a full-stack application that compares academic marks, annual household income, study level, and deadlines against administrator-managed scholarship policies. Each result explains every check, with private accounts, saved assessments, and downloadable results.</p>
        <ol className="care-flow">
          <li><span>01</span><div><strong>Check eligibility transparently</strong><p>Compare a student profile against published rules and explain which requirements are met.</p></div></li>
          <li><span>02</span><div><strong>Keep a private assessment history</strong><p>Save results with the exact policy version used, revisit past assessments, and download them as JSON.</p></div></li>
          <li><span>03</span><div><strong>Manage policies with accountability</strong><p>Administrator access, official source links, policy versioning, and audit records support responsible publication.</p></div></li>
        </ol>
        <p className="prototype-note">Rules-based screening, not a trained ML prediction or a funding guarantee. Example policies stay unpublished until verified criteria are supplied. Hosted on Render with persistent Neon PostgreSQL; the free service may take a moment to wake up. Integration tests cover both SQLite and PostgreSQL.</p>
      </div>
    </article>
  );
}
