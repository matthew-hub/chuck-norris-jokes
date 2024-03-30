/* eslint-disable react/no-unescaped-entities */
import Header from "../../components/Header/Header";
import "./AboutChuck.css";
const AboutChuck = () => {
  return (
    <>
      <Header title="About Chuck Norris" />
      <div className="app-about-chuck">
        <div className="article">
          <h5>Matthew Ressel </h5>
          <h6>Updated March 20, 2024</h6>
        </div>
        <p>
          <span>
            Chuck Norris, born as "Carlos Ray Norris" on March 10, 1940, is a
            renowned American martial artist, actor, and screenwriter.
            <sup>1</sup>
          </span>

          <span>
            He is a black belt in Tang Soo Do, Brazilian jiu-jitsu, and judo.
            <sup>1</sup>
          </span>
          <span>
            After serving in the United States Air Force, Norris won many
            martial arts championships and later founded his own discipline,
            Chun Kuk Do.<sup>1</sup>
          </span>
        </p>
        <p>
          <span>
            In Hollywood, Norris trained celebrities in martial arts and went on
            to appear in a minor role in the spy film The Wrecking Crew (1969).
            His friend and fellow martial artist Bruce Lee invited him to play
            one of the main villains in The Way of the Dragon (1972).
            <sup>1</sup>
          </span>
          <span>
            Norris soon became a popular action film star, starring in films
            like Good Guys Wear Black (1978), A Force of One (1979), The Octagon
            (1980), and An Eye for an Eye (1981).<sup>1</sup>
          </span>
        </p>
        <p>
          <span>
            Norris also starred in a long-running CBS television series Walker,
            Texas Ranger from 1993 until 2001.<sup>1</sup>
          </span>
          <span>
            He continued taking lead roles in action movies until 2006.
            <sup>1</sup>
          </span>
          <span>
            Apart from his film and TV career, Norris is a noted writer, having
            penned books on martial arts, exercise, philosophy, politics,
            Christianity, Western fiction, and biography.
            <sup>1</sup>
          </span>
          <span>
            He was twice a New York Times bestselling author.
            <sup>1</sup>
          </span>
        </p>{" "}
        <div className="app-chuck-norris-source">
          Source:
          <a href="https://en.wikipedia.org/wiki/Chuck_Norris">
            (1) Chuck Norris - Wikipedia
          </a>
          <a href="https://www.imdb.com/name/nm0001569/bio/">
            (2) Chuck Norris - IMDb.
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutChuck;
