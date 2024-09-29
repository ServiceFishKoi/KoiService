import Service from "./components/Service";

export default function Home() {
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="about-col-left">
                <img className="img-fluid" src="img/about-us.jpg" />
              </div>
            </div>

            <div className="col-lg-7 col-md-6">
              <div className="about-col-right">
                <header className="section-header">
                  <h3>About Dr. Johnson</h3>
                </header>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam convallis quam sed tincidunt accumsan. Aliquam at
                  tincidunt tortor, ac porta turpis. Curabitur lacinia venenatis
                  semper.
                </p>
                <p>
                  Aliquam ut nibh ut lacus posuere facilisis. Vestibulum
                  ullamcorper arcu et bibendum ultrices. Suspendisse rutrum
                  turpis vitae.
                </p>
                <a href="about.html">Read More</a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="about-col">
                <h4>Education</h4>
                <p>
                  Medical School - University of Dulton Health Science Center.
                </p>
                <p>
                  Residency in Family Medicine - University of Dulton Health
                  Science Center.
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="about-col">
                <h4>Experience</h4>
                <p>
                  Medical School - University of Dulton Health Science Center.
                </p>
                <p>
                  Residency in Family Medicine - University of Dulton Health
                  Science Center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Service />

      <section id="team">
        <div className="container">
          <div className="section-header">
            <h3>Meet Your Fish Veterinarian</h3>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="box8">
                <img src="img/team-1.jpg" alt="" />
              </div>
              <h4>Maureen L. Reidy</h4>
              <span>Assistant Nurse</span>
              <p>
                Lorem ipsum dolor sit amet adipiscing elit. Proin consequat
                cursus sit amet elit proin consequat.
              </p>
            </div>

            <div className="col-md-4">
              <div className="box8">
                <img src="img/team-2.jpg" alt="" />
              </div>
              <h4>Janelle J. Hittle</h4>
              <span>Assistant Nurse</span>
              <p>
                Lorem ipsum dolor sit amet adipiscing elit. Proin consequat
                cursus sit amet elit proin consequat.
              </p>
            </div>

            <div className="col-md-4">
              <div className="box8">
                <img src="img/team-3.jpg" alt="" />
              </div>
              <h4>Michael C. Powell</h4>
              <span>Assistant Nurse</span>
              <p>
                Lorem ipsum dolor sit amet adipiscing elit. Proin consequat
                cursus sit amet elit proin consequat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
