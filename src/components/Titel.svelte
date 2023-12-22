<script lang="ts">
  import { blue, green, light, purple } from '../themes';
  import { browser } from '$app/environment';

  function themeToCss(theme: { [key: string]: string }) {
    return Object.entries(theme).map(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }
  export let data;

  function themeSwitcher(theme: string): void {
    localStorage.setItem('theme', theme);
    switch (theme) {
      case 'light':
        themeToCss(light);
        break;
      case 'blue':
        themeToCss(blue);
        break;
      case 'green':
        themeToCss(green);
        break;
      case 'purple':
        themeToCss(purple);
        break;
      default:
        themeToCss(light);
        break;
    }
  }

  if (browser) {
    if (data.theme) {
      themeSwitcher(data.theme);
    }
  }
</script>

<section class="s1">
  <div class="main-container" style="margin-bottom: 16px;">
    <div class="greeting-wrapper">
      <h1>Hi, I'm Silvan Gehrig</h1>
    </div>

    <div class="intro-wrapper">
      <div class="nav-wrapper">
        <div class="dots-wrapper">
          <div id="dot-1" class="browser-dot" />
          <div id="dot-2" class="browser-dot" />
          <div id="dot-3" class="browser-dot" />
        </div>
      </div>

      <div class="left-column">
        <p
          style="text-align: center; line-height: 0;"
          class="theme-text"
          aria-label="theme"
        >
          Personalize Theme
        </p>

        <div id="theme-options-wrapper">
          <button
            data-mode="light"
            id="light-mode"
            class="theme-dot"
            on:click={() => themeSwitcher('light')}
            aria-labelledby="theme"
          />
          <button
            data-mode="blue"
            id="blue-mode"
            class="theme-dot"
            on:click={() => themeSwitcher('blue')}
            aria-labelledby="theme"
          />
          <button
            data-mode="green"
            id="green-mode"
            class="theme-dot"
            on:click={() => themeSwitcher('green')}
            aria-labelledby="theme"
          />
          <button
            data-mode="purple"
            id="purple-mode"
            class="theme-dot"
            on:click={() => themeSwitcher('purple')}
            aria-labelledby="theme"
          />
        </div>

        <p id="settings-note">
          *Theme settings will be saved for<br />your next visit
        </p>
      </div>

      <div class="right-column">
        <div id="preview-shadow">
          <div id="preview">
            <div id="corner-tl" class="corner" />
            <div id="corner-tr" class="corner" />
            <p class="what-text">What I Do</p>
            <p>
              I am a Software Developer with experience in Web, IoT and Project
              Management
            </p>
            <div id="corner-br" class="corner" />
            <div id="corner-bl" class="corner" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
