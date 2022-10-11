import Layout from '@/components/layout';
import styles from '@/styles/about.module.css';

const About = () => {
  const bookTitles = [
    ['Essentialism', 'https://gregmckeown.com/books/essentialism/'],
    ['Think Again', 'https://adamgrant.net/book/think-again/'],
    [
      'Start With Why',
      'https://simonsinek.com/books/start-with-why/',
    ],
    ['Dare To Lead',
    'https://brenebrown.com/book/dare-to-lead/'],
  ];

  return (
    <Layout>
      <div className={styles.container}>
        <section className={styles.grid1}>
          <div className={styles.roleHeading}> Education</div>
          <hr></hr>
          <p className={styles.roleContent}>
            PhD Molecular Biology
            <br />
            <a
              className={styles.roleLink}
              href="https://www2.mrc-lmb.cam.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MRC Laboratory of Molecular Biology
            </a>
            <br />
            University of Cambridge (2012)
          </p>
          <p className={styles.roleContent}>
            BSc Molecular Biology (1st class)
            <br />
            <a
              className={styles.roleLink}
              href="www.st-andrews.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              University of St Andrews
            </a>{' '}
            (2007)
          </p>
          <p className={styles.roleContent}>
            3 A-levels, 10 GCSEs: all grade A/A* <br />
            <a
              className={styles.roleLink}
              href="https://www.habsmonmouth.org/boys/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Monmouth School
            </a>
          </p>
          <br />
          <div className={styles.roleHeading}>Roles</div>
          <hr></hr>
          <p className={styles.roleContent}>
            Senior Scientist | Team Lead <br />
            <a
              className={styles.roleLink}
              href="www.labgeni.us"
              target="_blank"
              rel="noopener noreferrer"
            >
              LabGenius
            </a>
            <br />
            (2018-2022)
          </p>
          <p className={styles.roleContent}>
            Senior Research Scientist <br />
            <a
              className={styles.roleLink}
              href="http://www.ismb.lon.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Institute of Structural and Molecular Biology, UCL
            </a>
            <br />
            (2015-2018)
          </p>
          <p className={styles.roleContent}>
            Research Scientist <br />
            <a
              className={styles.roleLink}
              href="https://www2.mrc-lmb.cam.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MRC Laboratory of Molecular Biology
            </a>
            <br />
            (2012-2015)
          </p>
        </section>

        <section className={styles.grid2}>
          <p className={styles.skillBlurb}>
            I am an experienced scientist with 13-year track record
            across academia and biotech in successfully conceiving,
            planning and delivering R&D projects with both watefall
            and agile. I have contributed as IC and team lead, and
            find I work best in fast-paced, cross-discipline
            environments with abundant challenges for teams to tackle.
          </p>
        </section>

        <section className={styles.grid3}>
          <div className={styles.skillHeading}>
            Creative problem solver
            <hr></hr>
          </div>
          <ul className={styles.skillContent}>
            <li>
              I consistently conceive, design and establish novel
              approaches, as a scientist and leader
            </li>
            <li>
              I developed new effective working practices during covid
              lockdown with 2-month old
            </li>
            <li>
              I support my creativity with learning. Favourites include:{' '}
              <a
                className={styles.skillLink}
                href={bookTitles[0][1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {bookTitles[0][0]}
              </a>
              ,{' '}
              <a
                className={styles.skillLink}
                href={bookTitles[1][1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {bookTitles[1][0]}
              </a>
              ,{' '}
              <a
                className={styles.skillLink}
                href={bookTitles[2][1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {bookTitles[2][0]}
              </a>
              ,{' '}
              <a
                className={styles.skillLink}
                href={bookTitles[3][1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {bookTitles[3][0]}
              </a>
              
            </li>
          </ul>
        </section>

        <section className={styles.grid4}>
          <div className={styles.skillHeading}>Self-motivated</div>
          <hr></hr>
          <ul className={styles.skillContent}>
            <li>
              I have conceived, designed, carried out and published{' '}
              <a
                className={styles.skillLink}
                href="https://academic.oup.com/nar/article/46/8/e51/4835052"
                target="_blank"
                rel="noopener noreferrer"
              >
                entire scientific projects{' '}
              </a>
              with minimal oversight
            </li>
            <li>
              I moved from Senior Scientist to Team Lead at LabGenius
              when I approached CEO and made my case for promotion
            </li>
            <li>
              I am an optimist. I believe all challenges can be overcome, given time and work.
            </li>
          </ul>
        </section>

        <section className={styles.grid5}>
          <div className={styles.skillHeading}>
            Clear communicator
          </div>
          <hr></hr>
          <ul className={styles.skillContent}>
            <li>
              Data-centred proposals and reports, with
              audience-appropriate language
            </li>
            <li>
              As team lead I conceived and shared a team vision,
              giving team members with clear purpose
            </li>
          </ul>
        </section>

        <section className={styles.grid6}>
          <div className={styles.skillHeading}>
            Scientific mindset
          </div>
          <hr></hr>
          <ul className={styles.skillContent}>
            <li>
              Authored{' '}
              <a
                className={styles.skillLink}
                href="https://bit.ly/CozensPapers"
                target="_blank"
                rel="noopener noreferrer"
              >
                12 scientific articles{' '}
              </a>
              and 3 patents
            </li>
            <li>
              Analytical approach: break down problems into smaller
              pieces
            </li>
            <li>
              Believe the data: hold off part 2 until part 1 works
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default About;
