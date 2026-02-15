import "./styles/Career.css";
import { config } from "../config";

const getDisplayYear = (period: string) => {
  if (period.includes("Present")) return "NOW";
  // Handle both en-dash and hyphen separators
  const sep = period.includes(" – ") ? " – " : " - ";
  if (period.includes(sep)) {
    const parts = period.split(sep);
    // Extract just the years for a cleaner display
    const startYear = parts[0].replace(/[^0-9]/g, "");
    const endYear = parts[1].replace(/[^0-9]/g, "");
    if (startYear && endYear) return `${startYear} – ${endYear}`;
    if (startYear) return startYear;
  }
  return period;
};

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="career-logo"
                    />
                  )}
                  <div>
                    <h4>{exp.position}</h4>
                    <h5>{exp.company}</h5>
                  </div>
                </div>
                <h3>{getDisplayYear(exp.period)}</h3>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
