<script lang="ts">
  let birthdate = new Date(1999, 11, 20);

  function calculateAge(birthdate: Date) {
    const diff_ms = Date.now() - birthdate.getTime();
    const age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
</script>

<section class="s2">
  <div class="main-container">
    <div class="about-wrapper">
      <div class="about-me">
        <h1 style="font-size: 24px;">More about me</h1>
        <p>
          I'm Silvan Gehrig, a {calculateAge(birthdate)} year old developer based
          in Switzerland.
        </p>
        <hr />
        <h4>TOP EXPERTISE</h4>
        <p>Fullstack developer that is up to date</p>
        <div id="skills">
          <ul>
            <li>HTML/CSS</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Svelte</li>
            <li>SQL</li>
            <li>Serverless</li>
            <li>WebSockets</li>
            <li>Unit & E2E testing</li>
          </ul>

          <ul>
            <li>AWS</li>
            <li>Linux SysAdmin</li>
            <li>Networking</li>
            <li>PC & Server Hardware</li>
            <li>CI/CD</li>
            <li>Git</li>
            <li>Proxmox</li>
          </ul>
        </div>
      </div>
      <div class="social-links">
        <h3>Find me on Social Media</h3>
        <div class="social-links-text">
          <i class="fab fa-linkedin" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/silvangehrig/"
          >
            LinkedIn
          </a>
        </div>
        <br />
        <div class="social-links-text">
          <i class="fab fa-git-square" />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gitlab.com/sillyvan"
          >
            GitLab
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
