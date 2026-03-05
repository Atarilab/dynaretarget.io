import { SparklesText } from "@/components/ui/sparkles-text";
import { GlassTextOverlay } from "@/components/ui/glass-text-overlay";

function App() {
  return (
    <>
      <section className="hero hero-with-video-bg">
        <video className="hero-video-bg" autoPlay muted loop playsInline>
          <source src="./static/videos/video_submission/real_world_experiments/exp3.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
        <div className="hero-body">
          <div className="container is-max-desktop hero-body-container">
            <div className="columns is-centered">
              <div className="column has-text-centered">
                <GlassTextOverlay
                  className="mb-8 mx-auto"
                  backgroundColor="rgba(0, 0, 0, 0.0)"
                  borderRadius="8px"
                >
                  <h1 className="title publication-title has-text-centered">
                    <span className="publication-title-main">
                      <SparklesText 
                        text="DynaRetarget" 
                        className="text-white"
                        sparklesCount={15}
                        colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
                      />
                    </span>
                    <span className="publication-title-sub">
                      <span className="title-line-1">Dynamically-Feasible Retargeting using</span>
                      <span className="title-line-2">Sampling-Based Trajectory Optimization</span>
                    </span>
                  </h1>
                </GlassTextOverlay>
              </div>
            </div>
            <div className="columns is-centered hero-bottom-content">
              <div className="column has-text-centered">
                <GlassTextOverlay
                  className="mx-auto"
                  backgroundColor="rgba(0, 0, 0, 0.0)"
                  borderRadius="8px"
                >
                  <div className="is-size-5 publication-authors">
                  <span className="author-block">
                    <a href="https://www.ce.cit.tum.de/en/aipd/members/victor-dhedin/" target="_blank" rel="noopener noreferrer">Victor Dhédin*</a><sup>1</sup>,
                  </span>
                  <span className="author-block">
                    <a href="https://www.linkedin.com/in/ilyass-taouil-8b2b15a7/?locale=en" target="_blank" rel="noopener noreferrer">Ilyass Taouil*</a><sup>1</sup>,
                  </span>
                  <span className="author-block">
                    <a href="https://shafeef901.github.io/" target="_blank" rel="noopener noreferrer">Shafeef Omar*</a><sup>1</sup>,
                  </span>
                  <span className="author-block">
                    <a href="https://www.linkedin.com/in/dian-yu-51b6652ab" target="_blank" rel="noopener noreferrer">Dian Yu</a><sup>1</sup>,
                  </span>
                  <span className="author-block">
                    <a href="https://www.linkedin.com/in/kun-tao-15b91b237/?locale=de" target="_blank" rel="noopener noreferrer">Kun Tao</a><sup>1</sup>,
                  </span>
                  <span className="author-block">
                    <a href="https://www.3dunderstanding.org/team.html" target="_blank" rel="noopener noreferrer">Angela Dai</a><sup>1</sup>,
                  </span>
                  <span className="author-block">
                    <a href="https://www.ce.cit.tum.de/en/aipd/home/" target="_blank" rel="noopener noreferrer">Majid Khadiv</a><sup>1</sup>
                  </span>
                </div>

                  <div className="is-size-6 publication-authors">
                    <span className="author-block">
                      <sup>1</sup>Munich Institute of Robotics and Machine Intelligence
                      (MIRMI), Technical University of Munich (TUM), Germany.
                    </span>
                  </div>

                  <div className="publication-footnote">* Equal contribution</div>
                </GlassTextOverlay>

                <div className="has-text-centered mt-6">
                  <div className="publication-links">
                    {/* PDF Link. */}
                    <span className="link-block">
                      <a
                        href="https://arxiv.org/pdf/2602.06827"
                        className="external-link button is-normal is-rounded is-dark"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon">
                          <i className="ai ai-arxiv"></i>
                        </span>
                        <span>arXiv</span>
                      </a>
                    </span>
                    {/* Video Link. */}
                    <span className="link-block">
                      <a
                        href="https://www.youtube.com/watch?v=YlopoVulwi8"
                        className="external-link button is-normal is-rounded is-dark"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon">
                          <i className="fab fa-youtube"></i>
                        </span>
                        <span>Video</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container is-max-desktop">
          <div className="columns is-centered has-text-centered">
            <div className="column is-four-fifths">
              <h2 className="title is-3">Abstract</h2>
              <div className="content has-text-justified">
                <p>
                  In this work, we introduce <strong>DynaRetarget</strong>, a complete pipeline for retargeting human motions to humanoid control policies.
                </p>
                <p>
                  The core component of <strong>DynaRetarget</strong> is a novel Sampling-Based Trajectory Optimization (SBTO) framework that refines imperfect kinematic trajectories into dynamically feasible motions. SBTO incrementally advances the optimization horizon, enabling optimization over the entire trajectory for long-horizon tasks.
                </p>
                <p>
                  We validate <strong>DynaRetarget</strong> by successfully retargeting hundreds of humanoid-object demonstrations and achieving higher success rates than the state of the art. The framework also generalizes across varying object properties, such as mass, size, and geometry, using the same tracking objective.
                  This ability to robustly retarget diverse demonstrations opens the door to generating large-scale synthetic datasets of humanoid loco-manipulation trajectories, addressing a major bottleneck in real-world data collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-videos-wide">
        <div className="container container-videos-wide">
          <h2 className="title is-2 has-text-centered section-main-title">
            <SparklesText text="DynaRetarget" className="text-4xl" sparklesCount={10} colors={{ first: "#9E7AFF", second: "#FE8BBB" }} /> Refines Imperfect Demonstrations
          </h2>
          <div className="columns is-centered">
            {/* Video 1. */}
            <div className="column is-one-third">
              <h2 className="title is-4 has-text-centered">Imperfect Demonstration</h2>
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/analysis/missing_cut.webm" type="video/webm" />
                </video>
              </div>
            </div>
            {/* Video 2. */}
            <div className="column is-one-third">
              <h2 className="title is-4 has-text-centered">Refined Trajectory</h2>
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/analysis/refined_cut.webm" type="video/webm" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-videos-wide">
        <div className="container container-videos-wide">
          <h2 className="title is-2 has-text-centered section-main-title">
            <SparklesText text="DynaRetarget" className="text-4xl" sparklesCount={10} colors={{ first: "#9E7AFF", second: "#FE8BBB" }} /> Uses the Same Cost for Different Motions
          </h2>
          {/* Row 1 */}
          <div className="columns is-centered">
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/many_motions/OmniRetarget_sub3_largebox_001_original_submission.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/many_motions/OmniRetarget_sub3_largebox_005_original_submission.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/many_motions/OmniRetarget_sub7_largebox_001_original_submission.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="columns is-centered">
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/many_motions/OmniRetarget_sub8_largebox_031_original_submission.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/many_motions/OmniRetarget_sub8_largebox_032_original_submission.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/many_motions/OmniRetarget_sub10_largebox_085_original_submission.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          {/* Row 3 */}
          <div className="columns is-centered">
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/many_motions/OmniRetarget_sub10_largebox_086_original_submission.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/many_motions/OmniRetarget_sub16_largebox_001_original_submission.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/many_motions/OmniRetarget_sub16_largebox_004_original_submission.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-videos-wide">
        <div className="container container-videos-wide">
          <h2 className="title is-2 has-text-centered section-main-title">
            <SparklesText text="DynaRetarget" className="text-4xl" sparklesCount={10} colors={{ first: "#9E7AFF", second: "#FE8BBB" }} /> Augments the Same Demonstration for Different Objects
          </h2>
          <div className="columns is-centered">
            {/* Video 1. */}
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/augmentation/sub10_largebox_084_original_chair.mp4" type="video/webm" />
                </video>
              </div>
            </div>
            {/* Video 2. */}
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/augmentation/sub10_largebox_084_original_cylinder.mp4" type="video/webm" />
                </video>
              </div>
            </div>
            {/* Video 3. */}
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/augmentation/sub10_largebox_084_original_shelf.mp4" type="video/webm" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-videos-wide">
        <div className="container container-videos-wide">
          <h2 className="title is-2 has-text-centered section-main-title">
            <SparklesText text="DynaRetarget" className="text-4xl" sparklesCount={10} colors={{ first: "#9E7AFF", second: "#FE8BBB" }} /> Enables Seamless RL Transfer with One Reward
          </h2>
          <div className="columns is-centered">
            {/* Row 1 */}
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/real_world_experiments/exp1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/real_world_experiments/exp2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/real_world_experiments/exp3.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            {/* Row 2 */}
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/real_world_experiments/exp4.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/real_world_experiments/exp5.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/real_world_experiments/exp6.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="columns is-centered">
            {/* Row 3 */}
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/real_world_experiments/exp7.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/real_world_experiments/exp8.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="publication-video">
                <video controls playsInline autoPlay muted loop>
                  <source src="./static/videos/video_submission/real_world_experiments/exp9.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8 has-text-centered">
              <div className="content">
                <p>
                  Page template borrowed from{" "}
                  <a href="https://nerfies.github.io/" target="_blank" rel="noopener noreferrer">
                    Nerfies
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
